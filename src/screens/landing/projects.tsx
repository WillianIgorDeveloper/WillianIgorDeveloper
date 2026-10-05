import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"
import { GithubIcon } from "@/components/composed/brand-icons"
import { SectionHeading } from "@/components/composed/section-heading"
import { buttonVariants } from "@/components/particles/button"
import { useDictionary } from "@/lang/i18n-dictionary"
import { PROJECTS, TEMPLATES } from "./data"

export function Projects() {
  const t = useDictionary("screens.landing.projects")

  return (
    <section id="projects">
      <SectionHeading index="03" title={t("title")} />
      <ul className="border-t">
        {PROJECTS.map((project, index) => (
          <li
            key={project.key}
            className="group grid gap-4 border-b py-6 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-6"
          >
            <span className="font-heading text-muted-foreground hidden pt-1.5 text-xs sm:block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="flex items-baseline gap-3">
                <h3 className="font-heading group-hover:text-brand text-lg font-medium tracking-tight transition-colors">
                  {project.name}
                </h3>
                <span className="font-heading text-muted-foreground text-xs">
                  {project.year}
                </span>
              </div>
              <p className="text-muted-foreground mt-1">{t(`items.${project.key}`)}</p>
              <Tags tags={project.tags} />
            </div>
            <ProjectLinks live={project.live} code={project.code} />
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <h3 className="font-heading text-sm font-medium">{t("templatesTitle")}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{t("templatesSubtitle")}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TEMPLATES.map((template) => (
            <div
              key={template.key}
              className="hover:border-brand/60 flex flex-col border p-5 transition-colors"
            >
              <h4 className="font-heading text-sm font-medium">{template.name}</h4>
              <p className="text-muted-foreground mt-2 flex-1 text-sm">
                {t(`templates.${template.key}`)}
              </p>
              <Tags tags={template.tags} />
              <ProjectLinks
                live={template.live}
                code={template.code}
                className="mt-4 -ml-2.5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-muted font-heading text-muted-foreground px-2 py-0.5 text-[11px]"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

type ProjectLinksProps = {
  live?: string
  code: string
  className?: string
}

function ProjectLinks({ live, code, className }: ProjectLinksProps) {
  const t = useDictionary("generic")
  const link = cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")

  return (
    <div className={cn("flex items-start gap-1 sm:justify-end", className)}>
      {live && (
        <a href={live} target="_blank" rel="noreferrer" className={link}>
          {t("live")}
          <ArrowUpRightIcon />
        </a>
      )}
      <a href={code} target="_blank" rel="noreferrer" className={link}>
        <GithubIcon className="size-3.5" />
        {t("code")}
      </a>
    </div>
  )
}
