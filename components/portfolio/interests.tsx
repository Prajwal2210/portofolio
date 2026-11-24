import { interests } from "@/lib/portfolio-data"
import { iconMap } from "./icon-map"
import { Reveal, SectionHeading } from "./reveal"

export function Interests() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="06 · Experience & Interests"
        title="Practical project experience"
        description="Areas I have worked in through hands-on project development."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item, i) => {
          const Icon = iconMap[item.icon]
          return (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/50">
                  <Icon className="size-6 text-accent" aria-hidden="true" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
