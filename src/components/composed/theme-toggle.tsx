import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/particles/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/particles/tooltip"
import { useTheme } from "@/contexts/theme"
import { useDictionary } from "@/lang/i18n-dictionary"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const t = useDictionary("components.themeToggle")

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={t("label")}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        }
      />
      <TooltipContent side="bottom">{t("label")}</TooltipContent>
    </Tooltip>
  )
}
