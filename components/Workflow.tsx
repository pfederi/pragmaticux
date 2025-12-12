import Link from 'next/link'

export default function Workflow() {
  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <g>
            <path d="M12 2C6.47 2 2 6.47 2 12c0 5.52 4.47 10 10 10 5.52 0 10-4.48 10-10 0-1.05-.17-2.06-.46-3 -.16-.48-.67-.75-1.14-.6 -.48.15-.75.66-.6 1.13 .24.77.37 1.59.37 2.45 0 4.51-3.67 8.18-8.19 8.18s-8.19-3.67-8.19-8.19 3.66-8.19 8.18-8.19c.85 0 1.68.13 2.45.37 .47.15.98-.12 1.13-.6 .15-.48-.12-.99-.6-1.14 -.95-.3-1.96-.46-3-.46Z"/>
            <path d="M12 6.54c-3.02 0-5.46 2.44-5.46 5.45 0 3.01 2.44 5.45 5.45 5.45 3.01 0 5.45-2.442 5.45-5.46 0-.51-.41-.91-.91-.91 -.51 0-.91.4-.91.9 0 2-1.63 3.63-3.64 3.63 -2.01 0-3.64-1.63-3.64-3.64 0-2.01 1.62-3.64 3.63-3.64 .5 0 .9-.41.9-.91 0-.51-.41-.91-.91-.91Z"/>
            <path d="M19.27 4.27c0-.37-.23-.7-.57-.84 -.34-.15-.74-.07-1 .19l-2.73 2.72c-.18.17-.27.4-.27.64v.98l-3.38 3.37c-.36.35-.36.93 0 1.28 .35.35.93.35 1.28 0l3.37-3.38h.98c.24 0 .47-.1.64-.27l2.72-2.73c.26-.26.33-.66.19-1 -.15-.34-.48-.57-.84-.57h-.46V4.2Z"/>
          </g>
        </svg>
      ),
      title: 'Assess Context',
      description: 'What are your real constraints? Time, budget, team, business goals?',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <g fillRule="evenodd">
            <path d="M7 2h9c1.65 0 3 1.34 3 3v7.98c0 .17-.18.29-.34.24 -.53-.16-1.09-.24-1.67-.24 -1.45 0-2.78.51-3.82 1.36 -.14.1-.35.06-.47-.07 -.19-.2-.44-.31-.73-.31h-4c-.56 0-1 .44-1 1 0 .55.44 1 1 1h3.36c.19 0 .31.2.23.38 -.39.79-.6 1.67-.6 2.61 0 .93.21 1.82.59 2.61 .08.17-.04.38-.24.38H6.94c-1.66 0-3-1.35-3-3v-14c0-1.66 1.34-3 3-3Zm1 4c-.56 0-1 .44-1 1 0 .55.44 1 1 1h7c.55 0 1-.45 1-1 0-.56-.45-1-1-1H8Zm0 4c-.56 0-1 .44-1 1 0 .55.44 1 1 1h7c.55 0 1-.45 1-1 0-.56-.45-1-1-1H8Z"/>
            <path d="M17 15c2.2 0 4 1.79 4 4 0 2.2-1.8 4-4 4 -2.21 0-4-1.8-4-4 0-2.21 1.79-4 4-4Zm2.03 2.71c.29.29.29.76 0 1.06l-2 2c-.3.29-.77.29-1.07 0l-1-1c-.3-.3-.3-.77 0-1.07 .29-.3.76-.3 1.06 0l.46.46 1.46-1.47c.29-.3.76-.3 1.06 0Z"/>
          </g>
        </svg>
      ),
      title: 'Choose Methods',
      description: 'Select UX methods that fit your context, not textbook ideals.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <g>
            <path d="M8 3c-.56 0-1 .44-1 1 0 .55.44 1 1 1h3c.55 0 1-.45 1-1 0-.56-.45-1-1-1H8Z"/>
            <path d="M7 15c-.56 0-1 .44-1 1 0 .55.44 1 1 1h4c.55 0 1-.45 1-1 0-.56-.45-1-1-1H7Z"/>
            <path d="M14.38 3.67l-7.29 8.95c-.25.29-.03.72.36.72h5.96c.3 0 .53.26.49.56l-.77 6.22c-.04.24.28.38.44.18l7.28-8.96c.24-.3.02-.73-.37-.73h-5.97c-.31 0-.54-.27-.5-.57l.76-6.23c.03-.25-.29-.39-.45-.19Z"/>
            <g>
              <path d="M4 7c-.56 0-1 .44-1 1 0 .55.44 1 1 1h4c.55 0 1-.45 1-1 0-.56-.45-1-1-1H4Z"/>
              <path d="M4 19c-.56 0-1 .44-1 1 0 .55.44 1 1 1h6c.55 0 1-.45 1-1 0-.56-.45-1-1-1H4Z"/>
            </g>
          </g>
        </svg>
      ),
      title: 'Test Fast',
      description: 'Quick validation beats perfect execution that never happens.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path fillRule="evenodd" d="M3.25 9.84c.96-3.94 4.51-6.85 8.74-6.85 4.97 0 9 4.02 9 9 0 4.97-4.03 9-9 9 -3.34 0-6.25-1.82-7.8-4.5 -.28-.48-.12-1.09.36-1.37 .47-.28 1.08-.12 1.36.36 1.21 2.09 3.47 3.5 6.06 3.5 3.86 0 7-3.14 7-7 0-3.87-3.14-7-7-7 -3.2 0-5.9 2.14-6.74 5.07l-.72.43 -.4.23 -.35-.35 -.56-.56Z"/>
          <path d="M3.25 9.84l-.56-.56c-.4-.4-1.03-.4-1.42 0 -.4.39-.4 1.02 0 1.41l2 2c.32.32.82.38 1.22.15l2.5-1.5c.47-.29.62-.9.34-1.38 -.29-.48-.9-.63-1.38-.35l-.72.43 -.72.43 -.4.23 -.35-.35 -.56-.56Z"/>
        </svg>
      ),
      title: 'Learn & Adapt',
      description: 'Document insights and refine your approach for next time.',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight pb-1">
            The Pragmatic UX Design Approach
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-full sm:max-w-[75%] leading-relaxed">
            Our systematic approach to practical UX implementation that works in real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center items-center mb-4 sm:mb-6 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 flex items-center justify-center">
                  {step.icon}
                  </div>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">{step.title}</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/decision-helper"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Try the Decision Helper tool"
          >
            Try Decision Helper
            <span className="text-base sm:text-lg" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

