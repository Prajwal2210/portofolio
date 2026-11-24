import { CheckCircle2, Cloud, Cpu, Github, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { projects, type Project } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { Reveal, SectionHeading } from "./reveal"

const themeIcon = { saas: Cloud, vision: Cpu, security: ShieldCheck }

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const ThemeIcon = themeIcon[project.theme]
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
        featured && "lg:grid lg:grid-cols-2",
      )}
    >
      <div className={cn("relative aspect-[16/10] overflow-hidden border-b border-border", featured && "lg:aspect-auto lg:border-b-0 lg:border-r")}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <ThemeIcon className="size-3.5" aria-hidden="true" />
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
        <h3 className="text-balance text-xl font-semibold md:text-2xl">{project.title}</h3>
        <div className="flex flex-col gap-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              {t}
            </li>
          ))}
        </ul>

        <div className={cn("grid gap-5", project.extraList && "sm:grid-cols-2")}>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">Key Features</h4>
            <ul className="flex flex-col gap-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          {project.extraList ? (
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">{project.extraList.title}</h4>
              <ul className="flex flex-wrap gap-1.5">
                {project.extraList.items.map((item) => (
                  <li key={item} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Github className="size-4" aria-hidden="true" />
          View on GitHub
          <span className="sr-only">{`: ${project.title}`}</span>
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="03 · Projects"
        title="Selected work"
        description="Full-stack, AI-powered and cloud-based applications I have built."
      />
      <div className="flex flex-col gap-6">
        <Reveal>
          <ProjectCard project={featured} featured />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
