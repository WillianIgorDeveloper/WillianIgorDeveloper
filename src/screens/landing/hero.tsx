import { ArrowRightIcon, MapPinIcon } from "lucide-react"
import { cn } from "cn"
import { GithubIcon, LinkedinIcon } from "@/components/composed/brand-icons"
import { buttonVariants } from "@/components/particles/button"
import { useDictionary } from "@/lang/i18n-dictionary"
import { LINKS } from "./data"

const CTA = "h-10 px-4 text-sm"

export function Hero() {
  const t = useDictionary()

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_top,black_10%,transparent_70%)] opacity-70" />
      <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 relative mx-auto max-w-4xl px-4 pt-20 pb-24 motion-safe:duration-700 sm:px-6 sm:pt-32 sm:pb-36">
        <p className="bg-background font-heading text-muted-foreground inline-flex items-center gap-2 border px-2.5 py-1 text-xs">
          <MapPinIcon className="text-brand size-3.5" />
          {t("generic.location")}
        </p>
        <p className="font-heading text-muted-foreground mt-10 text-sm">
          {t("screens.landing.hero.greeting")}
        </p>
        <h1 className="font-heading mt-2 text-5xl font-semibold tracking-tighter sm:text-7xl">
          {t("generic.name")}
          <span className="text-brand motion-safe:animate-blink">_</span>
        </h1>
        <p className="font-heading text-brand mt-3 text-base sm:text-lg">
          {t("generic.role")}
        </p>
        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
          {t("screens.landing.hero.headline")}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className={cn(buttonVariants(), CTA)}>
            {t("screens.landing.hero.ctaProjects")}
            <ArrowRightIcon />
          </a>
          <a href="#contact" className={cn(buttonVariants({ variant: "outline" }), CTA)}>
            {t("screens.landing.hero.ctaContact")}
          </a>
          <div className="flex items-center">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-10")}
            >
              <GithubIcon className="size-4.5" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-10")}
            >
              <LinkedinIcon className="size-4.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
