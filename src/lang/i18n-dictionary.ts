import type { KeyPrefix } from "i18next"
import { useTranslation } from "react-i18next"

export function useDictionary(key?: KeyPrefix<"translations">) {
  const { t } = useTranslation("translations", { keyPrefix: key })
  return t
}
