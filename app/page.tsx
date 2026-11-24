import { About } from "@/components/portfolio/about"
import { Certifications } from "@/components/portfolio/certifications"
import { Contact } from "@/components/portfolio/contact"
import { Education } from "@/components/portfolio/education"
import { BackToTop, Footer } from "@/components/portfolio/footer"
import { Hero } from "@/components/portfolio/hero"
import { Interests } from "@/components/portfolio/interests"
import { Navbar } from "@/components/portfolio/navbar"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
