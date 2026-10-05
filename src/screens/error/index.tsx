import { StatusPage } from "@/components/composed/status-page"
import { useDictionary } from "@/lang/i18n-dictionary"

export function ErrorScreen() {
  const t = useDictionary("screens.error")

  return (
    <StatusPage code=":(" title={t("title")} description={t("description")} back={t("back")} />
  )
}
