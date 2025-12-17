'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t py-4 sm:py-6 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            &copy; 2025 Pragmatic UX Design. All rights reserved.
          </p>
            <div className="flex gap-4 text-xs sm:text-sm text-muted-foreground">
              <Link href="/release-notes" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">
                Release Notes
              </Link>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && window.reopenCookieBanner) {
                    window.reopenCookieBanner()
                  } else {
                    // Fallback: force show banner via localStorage
                    localStorage.setItem('cookie-banner-force-show', 'true')
                    window.location.reload()
                  }
                }}
                className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 cursor-pointer bg-transparent border-none"
              >
                Cookie Settings
              </button>
              <Link href="/impressum" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">
                Impressum
              </Link>
            </div>
          </div>
          <a
            href="https://www.ergon.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src="/assets/images/ergon_logo.svg"
              alt="Ergon Informatik AG"
              className="h-5 sm:h-6 w-auto grayscale hover:grayscale-0 transition-all"
              width="120"
              height="40"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

