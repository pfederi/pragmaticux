'use client'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-relaxed sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.2] pb-1">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 sm:space-y-8">
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground">Publisher Information</h2>
              
              <div className="space-y-2">
                <p>
                  <strong>Publisher:</strong><br />
                  Patrick Federi<br />
                  Ergon Informatik AG<br />
                  Merkurstrasse 43<br />
                  8055 Zürich<br />
                  Switzerland
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground pt-4">Contact</h2>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:patrick.federi@ergon.ch" className="text-primary hover:underline">
                    patrick.federi@ergon.ch
                  </a>
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground pt-4">Disclaimer</h2>
              <p>
                The contents of this website have been created with the greatest possible care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. As service providers, we are liable for our own content on these pages in accordance with general laws.
              </p>
              <p>
                Our offer contains links to external websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground pt-4">Copyright</h2>
              <p>
                The content and works created by the site operators on these pages are subject to copyright law. Duplication, processing, distribution, and any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.
              </p>
              <p>
                Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground pt-4">Data Protection</h2>
              <p>
                The use of our website is usually possible without providing personal information. As far as personal data (such as name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis, as far as possible.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-foreground">Analytics and Cookies</h3>
              <p>
                This website uses Vercel Analytics to collect anonymous usage data to improve our service. This includes information about pages visited, time spent on the site, and device information. The data is collected anonymously and does not contain personally identifiable information.
              </p>
              <p>
                You can manage your cookie preferences using the cookie banner at the bottom of the page. You can choose to accept all cookies (including analytics) or only essential cookies. Your choice will be saved and you can{' '}
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
                  change your preferences anytime
                </span>
                {' '}by reopening the cookie banner.
              </p>
              <p>
                You can also opt out of analytics tracking by using browser extensions that block tracking, or by disabling JavaScript in your browser. However, this may affect the functionality of the website.
              </p>
              <p>
                The Decision Helper tool uses localStorage to save your progress locally on your device. This data is stored only on your device and is not sent to our servers or shared with third parties.
              </p>

              <p className="text-sm text-muted-foreground mt-8">
                Last Updated: December 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
