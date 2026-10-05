import { Footer } from "@/components/composed/footer"
import { Header } from "@/components/composed/header"
import { About } from "./about"
import { Contact } from "./contact"
import { Hero } from "./hero"
import { Projects } from "./projects"
import { Stack } from "./stack"

export function LandingScreen() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto max-w-4xl space-y-28 px-4 pb-28 sm:space-y-36 sm:px-6 sm:pb-36">
          <About />
          <Stack />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
