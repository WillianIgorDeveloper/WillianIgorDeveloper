import { useState } from "react"
import { ArrowUpRightIcon, CheckIcon, CopyIcon, MailIcon } from "lucide-react"
import { cn } from "cn"
import { GithubIcon, LinkedinIcon } from "@/components/composed/brand-icons"
import { SectionHeading } from "@/components/composed/section-heading"
import { Button, buttonVariants } from "@/components/particles/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/particles/tooltip"
import { useDictionary } from "@/lang/i18n-dictionary"
import { LINKS } from "./data"

export function Contact() {
  const t = useDictionary()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(LINKS.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const social = cn(buttonVariants({ variant: "outline" }), "h-10 px-4 text-sm")

  return (
    <section id="contact">
      <SectionHeading index="04" title={t("screens.landing.contact.title")} />
      <h3 className="font-heading max-w-2xl text-3xl font-semibold tracking-tighter sm:text-5xl">
        {t("screens.landing.contact.headline")}
      </h3>
      <p className="text-muted-foreground mt-4 max-w-lg sm:text-lg">
        {t("screens.landing.contact.subtitle")}
      </p>

      <div className="mt-10 flex items-stretch gap-2">
        <a
          href={`mailto:${LINKS.email}`}
          className="group font-heading hover:border-brand inline-flex h-12 min-w-0 items-center gap-2.5 border px-4 text-[13px] transition-colors sm:gap-3 sm:text-base"
        >
          <MailIcon className="text-brand size-4 shrink-0" />
          <span className="truncate">{LINKS.email}</span>
          <ArrowUpRightIcon className="text-muted-foreground hidden size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block" />
        </a>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="size-12"
                onClick={copyEmail}
                aria-label={t("generic.copy")}
              >
                {copied ? <CheckIcon className="text-brand" /> : <CopyIcon />}
              </Button>
            }
          />
          <TooltipContent>{copied ? t("generic.copied") : t("generic.copy")}</TooltipContent>
        </Tooltip>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a href={LINKS.github} target="_blank" rel="noreferrer" className={social}>
          <GithubIcon />
          GitHub
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className={social}>
          <LinkedinIcon />
          LinkedIn
        </a>
      </div>
    </section>
  )
}
