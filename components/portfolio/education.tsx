import { CalendarDays, GraduationCap } from "lucide-react"
import { education } from "@/lib/portfolio-data"
import { Reveal, SectionHeading } from "./reveal"

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="04 · Education" title="Academic background" />
      <ol className="relative flex flex-col gap-8 border-l border-border pl-8 md:ml-4">
        {education.map((item, i) => (
          <li key={item.degree} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[3.05rem] top-1 flex size-9 items-center justify-center rounded-full border border-primary/40 bg-background text-primary"
            >
              <GraduationCap className="size-4" />
            </span>
            <Reveal delay={i * 0.1}>
              <article className="flex flex-col gap-2 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-accent/50">
                <span className="inline-flex w-fit items-center gap-1.5 font-mono text-xs text-accent">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  Completion: {item.completion}
                </span>
                <h3 className="text-lg font-semibold">{item.degree}</h3>
                <p className="text-muted-foreground">{item.institution}</p>
                {item.detail ? <p className="text-sm text-muted-foreground">{item.detail}</p> : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
