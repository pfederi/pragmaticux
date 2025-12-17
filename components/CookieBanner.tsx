'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

declare global {
  interface Window {
    reopenCookieBanner?: () => void;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    const analytics = localStorage.getItem('analytics-enabled')
    const forceShow = localStorage.getItem('cookie-banner-force-show')

    if (forceShow === 'true' || !consent) {
      setShowBanner(true)
      localStorage.removeItem('cookie-banner-force-show')
    } else if (analytics === 'true') {
      setAnalyticsEnabled(true)
      console.log('Analytics enabled')
    }

    window.reopenCookieBanner = () => {
      setShowBanner(true)
    }

    return () => {
      delete window.reopenCookieBanner
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('analytics-enabled', 'true')
    setAnalyticsEnabled(true)
    setShowBanner(false)
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
    localStorage.setItem('cookie-consent', 'essential-only')
    localStorage.setItem('analytics-enabled', 'false')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Cookie Preferences
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies and analytics to improve your experience on our website.
              Analytics help us understand how visitors use our site to make it better.
              You can choose to accept all cookies or only essential ones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <button
              onClick={acceptEssentialOnly}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Accept All
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
