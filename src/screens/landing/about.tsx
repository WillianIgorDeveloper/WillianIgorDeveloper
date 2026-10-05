import { SectionHeading } from "@/components/composed/section-heading"
import { useDictionary } from "@/lang/i18n-dictionary"

const STATS = [
  { value: "4+", label: "stat1" },
  { value: "3", label: "stat2" },
  { value: "2021", label: "stat3" }
] as const

export function About() {
  const t = useDictionary("screens.landing.about")

  return (
    <section id="about">
      <SectionHeading index="01" title={t("title")} />
      <div className="grid gap-10 md:grid-cols-[1fr_14rem] md:gap-16">
        <div className="text-muted-foreground space-y-5 text-base leading-relaxed sm:text-lg">
          <p>{t("p1")}</p>
          <p className="text-foreground">{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
        <dl className="grid grid-cols-3 border-y md:grid-cols-1 md:border-y-0 md:border-l">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse gap-1 border-l py-4 pl-4 first:border-l-0 md:border-b md:border-l-0 md:py-5 md:pl-6 md:last:border-b-0"
            >
              <dt className="text-muted-foreground text-xs leading-snug">{t(stat.label)}</dt>
              <dd className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
