import { changeLanguage } from "i18next"
import type translations from "@/lang/locales/_base"

export function changeLang(lang: keyof typeof translations) {
  changeLanguage(lang)
}
