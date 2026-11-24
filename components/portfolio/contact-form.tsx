"use client"

import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react"
import { useState, useTransition, type FormEvent } from "react"
import { toast } from "sonner"
import { sendContactMessage, type ContactInput } from "@/app/actions/contact"
import { profile } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

type Errors = Partial<Record<keyof ContactInput, string>>

const empty: ContactInput = { name: "", email: "", subject: "", message: "" }

function validate(values: ContactInput): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = "Please enter your name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address."
  if (values.subject.trim().length < 3) errors.subject = "Please enter a subject."
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters."
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [pending, startTransition] = useTransition()

  const update = (field: keyof ContactInput, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(null)
    const clientErrors = validate(values)
    setErrors(clientErrors)
    if (Object.keys(clientErrors).length > 0) return

    startTransition(async () => {
      const result = await sendContactMessage(values)
      if (result.ok) {
        setValues(empty)
        setStatus({ type: "success", message: "Thanks! Your message has been sent. I will get back to you soon." })
        toast.success("Message sent")
      } else if (result.reason === "validation") {
        setErrors(result.errors)
      } else {
        setStatus({ type: "error", message: result.message })
        toast.error("Message not sent")
      }
    })
  }

  const fieldClass = (hasError?: string) =>
    cn(
      "w-full rounded-xl border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20",
      hasError ? "border-destructive" : "border-border",
    )

  const fields: { id: keyof ContactInput; label: string; type?: string; autoComplete?: string; placeholder: string }[] = [
    { id: "name", label: "Name", autoComplete: "name", placeholder: "Your name" },
    { id: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@example.com" },
  ]

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.id} className="flex flex-col gap-2">
            <label htmlFor={f.id} className="text-sm font-medium">
              {f.label}
            </label>
            <input
              id={f.id}
              name={f.id}
              type={f.type ?? "text"}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              value={values[f.id]}
              onChange={(e) => update(f.id, e.target.value)}
              aria-invalid={Boolean(errors[f.id])}
              aria-describedby={errors[f.id] ? `${f.id}-error` : undefined}
              className={fieldClass(errors[f.id])}
            />
            {errors[f.id] ? (
              <p id={`${f.id}-error`} className="text-xs text-destructive">
                {errors[f.id]}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          placeholder="What is this about?"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClass(errors.subject)}
        />
        {errors.subject ? (
          <p id="subject-error" className="text-xs text-destructive">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Write your message..."
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass(errors.message), "resize-y")}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div aria-live="polite">
        {status ? (
          <div
            className={cn(
              "flex items-start gap-2 rounded-xl border px-4 py-3 text-sm",
              status.type === "success"
                ? "border-accent/40 bg-accent/10 text-foreground"
                : "border-destructive/40 bg-destructive/10 text-foreground",
            )}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            ) : (
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
            )}
            <p>
              {status.message}{" "}
              {status.type === "error" ? (
                <a
                  className="font-medium text-primary underline underline-offset-4"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(values.message)}`}
                >
                  Open in email app
                </a>
              ) : null}
            </p>
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60 sm:w-fit"
      >
        {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
