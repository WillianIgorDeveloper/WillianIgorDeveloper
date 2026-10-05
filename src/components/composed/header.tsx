import { LangToggle } from "@/components/composed/lang-toggle"
import { ThemeToggle } from "@/components/composed/theme-toggle"
import { useDictionary } from "@/lang/i18n-dictionary"

const NAV = ["about", "stack", "projects", "contact"] as const

export function Header() {
  const t = useDictionary("components.header")

  return (
    <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-heading text-sm font-semibold tracking-tight">
          willian<span className="text-brand">.</span>igor
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t(item)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
