import { GraduationCap, Mail, MapPin, Target } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { Reveal, SectionHeading } from "./reveal"

const focusAreas = ["Software Development", "Full Stack Development", "Backend Development", "AI/ML", "Cloud Computing"]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="01 · About Me" title="Turning ideas into practical, working software" />
      <div className="grid gap-8 md:grid-cols-5">
        <Reveal className="flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            I am an <span className="text-foreground">MCA graduate</span> with hands-on project experience in software
            development, Python, JavaScript, React.js, Node.js, and Artificial Intelligence and Machine Learning. I have
            developed full-stack and AI-powered applications using REST APIs, databases, computer vision, and AWS
            serverless services.
          </p>
          <p>
            I have a strong interest in building practical software solutions, developing scalable web applications,
            solving technical problems, and exploring modern technologies.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <span className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Target className="size-4 text-accent" aria-hidden="true" />
              Technical interests
            </span>
            <ul className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <li key={area} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <dl className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card/60 backdrop-blur">
            {[
              { Icon: GraduationCap, term: "Education", value: "MCA, Amity University" },
              { Icon: MapPin, term: "Location", value: profile.location },
              { Icon: Mail, term: "Email", value: profile.email },
            ].map(({ Icon, term, value }) => (
              <div key={term} className="flex items-center gap-4 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{term}</dt>
                  <dd className="truncate font-medium">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
