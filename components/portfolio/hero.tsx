"use client"

import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/lib/portfolio-data"
import { TypingText } from "./typing-text"

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-40 -right-20 size-[22rem] rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 px-5 md:flex-row md:justify-between">
        <div className="flex max-w-2xl flex-col items-center gap-6 text-center md:items-start md:text-left">
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {profile.location}
          </motion.span>

          <motion.h1 {...fade(0.1)} className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {"Hi, I'm "}
            <span className="text-foreground">{profile.name}</span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="min-h-[2rem] font-mono text-lg md:text-xl">
            <TypingText words={profile.titles} />
          </motion.p>

          <motion.p {...fade(0.3)} className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            MCA graduate building full-stack and AI-powered applications with Python, JavaScript, React.js, Node.js and
            AWS serverless services.
          </motion.p>

          <motion.div {...fade(0.4)} className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.ul {...fade(0.5)} className="flex items-center gap-2" aria-label="Social links">
            {[
              { href: profile.github, label: "GitHub", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0"
        >
          <div aria-hidden="true" className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 blur-2xl" />
          <div className="relative size-56 rounded-full bg-gradient-to-br from-primary to-accent p-[3px] md:size-72">
            <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full bg-card">
              {profile.photo ? (
                <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill className="object-cover" priority />
              ) : (
                <div role="img" aria-label="Profile photo placeholder" className="flex flex-col items-center gap-2">
                  <span className="bg-gradient-to-br from-primary to-accent bg-clip-text font-mono text-6xl font-bold text-transparent md:text-7xl">
                    {profile.initials}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Your photo here</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
