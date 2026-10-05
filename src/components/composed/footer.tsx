import { ArrowUpIcon } from "lucide-react"
import { useDictionary } from "@/lang/i18n-dictionary"

const YEAR = new Date().getFullYear()

export function Footer() {
  const t = useDictionary()

  return (
    <footer className="border-t">
      <div className="text-muted-foreground mx-auto flex max-w-4xl flex-col gap-3 px-4 py-8 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {YEAR} {t("generic.name")} · {t("components.footer.builtWith")}
        </p>
        <a
          href="#top"
          className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
        >
          {t("generic.backToTop")}
          <ArrowUpIcon className="size-3.5" />
        </a>
      </div>
    </footer>
  )
}
