import { SectionHeading } from "@/components/composed/section-heading"
import { useDictionary } from "@/lang/i18n-dictionary"
import { STACK } from "./data"

export function Stack() {
  const t = useDictionary("screens.landing.stack")

  return (
    <section id="stack">
      <SectionHeading index="02" title={t("title")} />
      <div className="border-t">
        {STACK.map((group) => (
          <div
            key={group.key}
            className="grid gap-3 border-b py-5 sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-6"
          >
            <h3 className="font-heading text-muted-foreground text-xs tracking-wide uppercase">
              {t(group.key)}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="hover:border-brand hover:text-brand border px-2.5 py-1 text-sm transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
