'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Locale } from '@/lib/i18n/config'
import { defaultLocale, getBrowserLocale } from '@/lib/i18n/config'
import { getTranslations, type Translations } from '@/lib/i18n/translations'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LOCALE_STORAGE_KEY = 'pragmatic-ux-locale'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [translations, setTranslations] = useState<Translations>(getTranslations(defaultLocale))

  useEffect(() => {
    // Check localStorage first, then browser language
    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)
    const initialLocale = storedLocale 
      ? (storedLocale as Locale)
      : getBrowserLocale()
    
    setLocaleState(initialLocale)
    setTranslations(getTranslations(initialLocale))
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setTranslations(getTranslations(newLocale))
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
