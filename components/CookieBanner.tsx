'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { STORAGE_KEYS } from '@/lib/constants'

declare global {
  interface Window {
    reopenCookieBanner?: () => void;
  }
}

export default function CookieBanner() {
  const { t } = useLanguage()
  const [showBanner, setShowBanner] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEYS.COOKIE_CONSENT)
    const analytics = localStorage.getItem(STORAGE_KEYS.ANALYTICS_ENABLED)
    const forceShow = localStorage.getItem(STORAGE_KEYS.COOKIE_BANNER_FORCE_SHOW)

    if (forceShow === 'true' || !consent) {
      setShowBanner(true)
      localStorage.removeItem(STORAGE_KEYS.COOKIE_BANNER_FORCE_SHOW)
    } else if (analytics === 'true') {
      setAnalyticsEnabled(true)
    }

    window.reopenCookieBanner = () => {
      setShowBanner(true)
    }

    return () => {
      delete window.reopenCookieBanner
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem(STORAGE_KEYS.COOKIE_CONSENT, 'accepted')
    localStorage.setItem(STORAGE_KEYS.ANALYTICS_ENABLED, 'true')
    setAnalyticsEnabled(true)
    setShowBanner(false)
  }

  const acceptEssentialOnly = () => {
    localStorage.setItem(STORAGE_KEYS.COOKIE_CONSENT, 'essential-only')
    localStorage.setItem(STORAGE_KEYS.ANALYTICS_ENABLED, 'false')
    setAnalyticsEnabled(false)
    setShowBanner(false)
  }

  const closeBanner = () => {
    localStorage.setItem(STORAGE_KEYS.COOKIE_CONSENT, 'essential-only')
    localStorage.setItem(STORAGE_KEYS.ANALYTICS_ENABLED, 'false')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {t.cookies.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.cookies.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <button
              onClick={acceptEssentialOnly}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            >
              {t.cookies.essentialOnly}
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {t.cookies.acceptAll}
            </button>
          </div>

          <button
            onClick={closeBanner}
            className="p-1 hover:bg-muted rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
