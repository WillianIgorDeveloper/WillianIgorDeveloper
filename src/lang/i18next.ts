import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import translations from "@/lang/locales/_base"

const i18nConfig = {
  resources: translations,
  supportedLngs: Object.keys(translations),
  fallbackLng: "pt-BR",
  defaultNS: "translations"
}

i18n.on("languageChanged", (lang) => {
  document.documentElement.lang = lang
})

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig)

export default i18n
