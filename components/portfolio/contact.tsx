import { Github, Linkedin, Mail, MapPin, Phone, User } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { ContactForm } from "./contact-form"
import { Reveal, SectionHeading } from "./reveal"

const details = [
  { Icon: User, label: "Name", value: profile.name },
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { Icon: MapPin, label: "Location", value: profile.location },
  { Icon: Linkedin, label: "LinkedIn", value: "View LinkedIn profile", href: profile.linkedin, external: true },
  { Icon: Github, label: "GitHub", value: "View GitHub profile", href: profile.github, external: true },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="07 · Contact"
        title="Let's work together"
        description="Open to Software Developer, Full Stack, Python, Backend and AI/ML opportunities. Feel free to reach out."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <ul className="flex h-full flex-col divide-y divide-border rounded-2xl border border-border bg-card/60 backdrop-blur">
            {details.map(({ Icon, label, value, href, external }) => (
              <li key={label} className="flex items-center gap-4 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="block truncate font-medium transition-colors hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="truncate font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
