import { Check } from "lucide-react"
import { skillCategories } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { iconMap } from "./icon-map"
import { Reveal, SectionHeading } from "./reveal"

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="02 · Technical Skills"
        title="Tools and technologies I work with"
        description="Languages, frameworks, databases and cloud services used across my projects."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => {
          const Icon = iconMap[category.icon]
          return (
            <Reveal key={category.title} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/50">
                <header className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold">{category.title}</h3>
                </header>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md hover:shadow-accent/10"
                    >
                      {skill.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={skill.icon}
                          alt=""
                          width={16}
                          height={16}
                          loading="lazy"
                          className={cn("size-4", skill.invertOnDark && "dark:invert")}
                        />
                      ) : (
                        <Check className="size-3.5 text-accent" aria-hidden="true" />
                      )}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
