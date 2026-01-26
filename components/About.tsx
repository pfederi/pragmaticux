'use client'

import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="py-12 sm:py-16 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-left mb-8 sm:mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight pb-1">{t.about.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-[75%] leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">{t.about.originTitle}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t.about.originText}
              </p>
            </div>
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">{t.about.philosophyTitle}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t.about.philosophyText}
              </p>
          </div>
        </div>

        {/* Article Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">{t.about.articleTitle}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {t.about.articleText} <strong className="text-foreground">"{t.about.articleName}"</strong>. {t.about.articleDescription}
                </p>
                <a
                  href="https://medium.com/design-bootcamp/pragmatic-ux-maximising-impact-without-overcomplicating-design-6d92f3ee373d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Read the original Medium article about Pragmatic UX (opens in new tab)"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  {t.about.articleButton}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team & Company */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Patrick Federi */}
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">{t.about.patrickTitle}</h3>
            <div className="space-y-2 mb-6 sm:mb-8 flex-grow">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>{t.about.patrickRole}</strong> {t.about.patrickCompany}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.about.patrickBio1}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.about.patrickBio2}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.about.patrickBio3}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.about.patrickBio4}
                </p>
              </div>
            </div>
              <a
                href="https://www.linkedin.com/in/federi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-md hover:shadow-lg mt-auto w-full sm:w-fit text-sm sm:text-base justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Connect with Patrick Federi on LinkedIn (opens in new tab)"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                {t.about.patrickButton}
              </a>
            </div>

          {/* Ergon Informatik AG */}
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">{t.about.ergonTitle}</h3>
            <div className="space-y-2 mb-6 sm:mb-8 flex-grow">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>{t.about.ergonTagline}</strong> - {t.about.ergonSubtitle}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.about.ergonBio1}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.about.ergonBio2}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.about.ergonBio3}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t.about.ergonBio4}
                </p>
              </div>
            </div>
              <a
                href="https://www.ergon.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-md hover:shadow-lg mt-auto w-full sm:w-fit text-sm sm:text-base justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Visit Ergon Informatik AG website (opens in new tab)"
              >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                {t.about.ergonButton}
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

