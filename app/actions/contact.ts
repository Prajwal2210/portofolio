"use server"

import { z } from "zod"
import { profile } from "@/lib/portfolio-data"

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  subject: z.string().trim().min(3, "Please enter a subject.").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters.").max(5000),
})

export type ContactInput = z.infer<typeof contactSchema>

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "validation"; errors: Partial<Record<keyof ContactInput, string>> }
  | { ok: false; reason: "not_configured" | "send_failed"; message: string }

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

export async function sendContactMessage(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input)
  if (!parsed.success) {
    const errors: Partial<Record<keyof ContactInput, string>> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactInput
      errors[key] ??= issue.message
    }
    return { ok: false, reason: "validation", errors }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      ok: false,
      reason: "not_configured",
      message: "The contact form email service is not configured yet. Please email me directly.",
    }
  }

  const { name, email, subject, message } = parsed.data

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? profile.email],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `<p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
      }),
    })

    if (!response.ok) {
      return { ok: false, reason: "send_failed", message: "Your message could not be sent. Please try again or email me directly." }
    }
    return { ok: true }
  } catch {
    return { ok: false, reason: "send_failed", message: "Your message could not be sent. Please try again or email me directly." }
  }
}
