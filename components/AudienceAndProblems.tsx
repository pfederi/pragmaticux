'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function AudienceAndProblems() {
  const { t } = useLanguage()

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background" aria-labelledby="audience-section-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 id="audience-section-title" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight pb-1">
          {t.about.sectionTitleAudience}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">
              {t.about.forWhoTitle}
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-none">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                {t.about.forWhoBullet1}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                {t.about.forWhoBullet2}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                {t.about.forWhoBullet3}
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">
              {t.about.problemsTitle}
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-none">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                {t.about.problemsBullet1}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                {t.about.problemsBullet2}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                {t.about.problemsBullet3}
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                {t.about.problemsBullet4}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
