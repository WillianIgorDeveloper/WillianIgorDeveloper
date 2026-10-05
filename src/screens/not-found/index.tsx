import { StatusPage } from "@/components/composed/status-page"
import { useDictionary } from "@/lang/i18n-dictionary"

export function NotFoundScreen() {
  const t = useDictionary("screens.notFound")

  return (
    <StatusPage
      code="404"
      title={t("title")}
      description={t("description")}
      back={t("back")}
    />
  )
}
