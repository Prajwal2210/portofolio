import { Award, CalendarDays, Building2, FileText } from "lucide-react"
import { certifications } from "@/lib/portfolio-data"
import { Reveal, SectionHeading } from "./reveal"

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="05 · Certifications" title="Certifications" />
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <Reveal key={cert.title}>
            <article className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <div aria-hidden="true" className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/15 blur-3xl" />
              <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Award className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-balance text-lg font-semibold">{cert.title}</h3>
              <dl className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-accent" aria-hidden="true" />
                  <dt className="sr-only">Organization</dt>
                  <dd>{cert.organization}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-accent" aria-hidden="true" />
                  <dt className="sr-only">Date</dt>
                  <dd>{cert.date}</dd>
                </div>
              </dl>
              {cert.file ? (
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  View Certificate
                </a>
              ) : (
                <p className="mt-auto flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-3 text-xs text-muted-foreground">
                  <FileText className="size-4" aria-hidden="true" />
                  Certificate file coming soon
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
