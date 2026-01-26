import type { Locale } from './config'
import en from './locales/en.json'
import de from './locales/de.json'

const translations = {
  en,
  de,
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export type Translations = typeof en
