'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ImpressumPage() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen">
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-relaxed sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.2] pb-1">
            {t.impressum.title}
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 sm:space-y-8">
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground">{t.impressum.publisherTitle}</h2>
              
              <div className="space-y-2">
                <p>
                  <strong>{t.impressum.publisher}</strong><br />
                  Patrick Federi<br />
                  Ergon Informatik AG<br />
                  Merkurstrasse 43<br />
                  8055 Zürich<br />
                  Switzerland
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground pt-4">{t.impressum.contactTitle}</h2>
              <div className="space-y-2">
                <p>
                  <strong>{t.impressum.email}</strong>{' '}
                  <a href="mailto:patrick.federi@ergon.ch" className="text-primary hover:underline">
                    patrick.federi@ergon.ch
                  </a>
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground pt-4">{t.impressum.disclaimerTitle}</h2>
              <p>
                {t.impressum.disclaimerText1}
              </p>
              <p>
                {t.impressum.disclaimerText2}
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground pt-4">{t.impressum.copyrightTitle}</h2>
              <p>
                {t.impressum.copyrightText1}
              </p>
              <p>
                {t.impressum.copyrightText2}
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground pt-4">{t.impressum.dataProtectionTitle}</h2>
              <p>
                {t.impressum.dataProtectionText}
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-foreground">{t.impressum.analyticsTitle}</h3>
              <p>
                {t.impressum.analyticsText1}
              </p>
              <p>
                {t.impressum.analyticsText2}{' '}
                <span
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).reopenCookieBanner) {
                      (window as any).reopenCookieBanner()
                    } else {
                      localStorage.setItem('cookie-banner-force-show', 'true')
                      window.location.reload()
                    }
                  }}
                  className="text-primary hover:underline cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      if (typeof window !== 'undefined' && (window as any).reopenCookieBanner) {
                        (window as any).reopenCookieBanner()
                      } else {
                        localStorage.setItem('cookie-banner-force-show', 'true')
                        window.location.reload()
                      }
                    }
                  }}
                >
                  {t.impressum.changePreferences}
                </span>
                {' '}{t.impressum.analyticsText3}
              </p>
              <p>
                {t.impressum.analyticsText4}
              </p>
              <p>
                {t.impressum.analyticsText5}
              </p>

              <p className="text-sm text-muted-foreground mt-8">
                {t.impressum.lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
