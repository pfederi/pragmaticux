export const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  
  const browserLang = navigator.language.split('-')[0]
  return isValidLocale(browserLang) ? browserLang : defaultLocale
}
