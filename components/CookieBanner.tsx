'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

// Global function to reopen cookie banner
declare global {
  interface Window {
    reopenCookieBanner?: () => void;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Prüfe, ob bereits eine Entscheidung getroffen wurde
    const consent = localStorage.getItem('cookie-consent')
    const analytics = localStorage.getItem('analytics-enabled')
    const forceShow = localStorage.getItem('cookie-banner-force-show')

    if (forceShow === 'true' || !consent) {
      // Zeige Banner wenn forced oder noch keine Entscheidung getroffen wurde
      setShowBanner(true)
      localStorage.removeItem('cookie-banner-force-show') // Reset force flag
    } else if (analytics === 'true') {
      setAnalyticsEnabled(true)
      // Hier könntest du Analytics aktivieren
      console.log('Analytics enabled')
    }

    // Global function to reopen banner
    window.reopenCookieBanner = () => {
      setShowBanner(true)
    }

    return () => {
      // Cleanup
      delete window.reopenCookieBanner
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('analytics-enabled', 'true')
    setAnalyticsEnabled(true)
    setShowBanner(false)
    // Hier Analytics aktivieren
    console.log('All cookies accepted, analytics enabled')
  }

  const acceptEssentialOnly = () => {
    localStorage.setItem('cookie-consent', 'essential-only')
    localStorage.setItem('analytics-enabled', 'false')
    setAnalyticsEnabled(false)
    setShowBanner(false)
    console.log('Only essential cookies accepted')
  }

  const closeBanner = () => {
    // Banner schließen ohne Entscheidung (essential only)
    localStorage.setItem('cookie-consent', 'essential-only')
    localStorage.setItem('analytics-enabled', 'false')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 p-3 sm:p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Mobile: Stack vertically, Desktop: Horizontal layout */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
          {/* Close button - top right on mobile, right side on desktop */}
          <button
            onClick={closeBanner}
            className="self-end sm:self-start p-1 hover:bg-muted rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:order-3"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="flex-1 sm:order-1">
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
              Cookie Preferences
            </h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-relaxed">
              We use cookies and analytics to improve your experience on our website.
              Analytics help us understand how visitors use our site to make it better.
              You can choose to accept all cookies or only essential ones.
            </p>
          </div>

          {/* Buttons - full width on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-center sm:order-2">
            <button
              onClick={acceptEssentialOnly}
              className="w-full sm:w-auto px-4 py-2.5 sm:py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md border border-muted-foreground/20 hover:border-muted-foreground/40"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="w-full sm:w-auto px-4 py-2.5 sm:py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
