import { useTranslation } from "react-i18next"
import { Button } from "@/components/particles/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/particles/tooltip"
import { changeLang } from "@/lang/i18n-change"
import { useDictionary } from "@/lang/i18n-dictionary"

export function LangToggle() {
  const { i18n } = useTranslation()
  const t = useDictionary("components.langToggle")
  const isEnglish = i18n.resolvedLanguage === "en-US"

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="font-heading"
            onClick={() => changeLang(isEnglish ? "pt-BR" : "en-US")}
            aria-label={t("label")}
          >
            {isEnglish ? "EN" : "PT"}
          </Button>
        }
      />
      <TooltipContent side="bottom">{t("label")}</TooltipContent>
    </Tooltip>
  )
}
