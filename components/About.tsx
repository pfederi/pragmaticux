import { ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-left mb-8 sm:mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight pb-1">About The Pragmatic UX Design Approach</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-[75%] leading-relaxed">
            Pragmatic UX Design emerged from real-world challenges in product development, where traditional UX processes often clashed with business realities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">The Origin</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Pragmatic UX Design was developed through hands-on experience working on diverse projects at Ergon, where I encountered teams with varying UX maturity, timelines, and constraints. Rather than forcing a one-size-fits-all approach, I learned to adapt UX methods to each unique context.
              </p>
            </div>
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">The Philosophy</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Pragmatic UX Design isn't about cutting corners, it's about being strategic. It's the result of countless projects where I discovered that the most impactful UX work happens when we focus on what truly matters for users and business goals, rather than following rigid processes.
              </p>
          </div>
        </div>

        {/* Team & Company */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Patrick Federi */}
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">Patrick Federi</h3>
            <div className="space-y-2 mb-6 sm:mb-8 flex-grow">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>Head of UX</strong> at Ergon Informatik AG
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Experienced UX designer with a passion for user-centred design and digital innovation
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Creator of Pragmatic UX Design - adapting methods to project requirements
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Extensive experience in product development from conception to optimisation
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Actively researching AI technologies for future UX design
                </p>
              </div>
            </div>
              <a
                href="https://www.linkedin.com/in/federi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-md hover:shadow-lg mt-auto w-full sm:w-fit text-sm sm:text-base justify-center sm:justify-start"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                Connect on LinkedIn
              </a>
            </div>

          {/* Ergon Informatik AG */}
          <div className="bg-gradient-to-br from-card to-muted/20 border rounded-xl p-4 sm:p-6 md:p-8 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">Ergon Informatik AG</h3>
            <div className="space-y-2 mb-6 sm:mb-8 flex-grow">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>Smart software for smart ambitions</strong> - Swiss IT Company
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Leading Swiss IT company combining technology, security and business expertise
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Specializes in custom software solutions and digital transformation
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Transforms digitalisation trends into unique customer benefits
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  From concept to market success across various industries
                </p>
              </div>
            </div>
              <a
                href="https://www.ergon.ch"
                target="_blank"
                rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-md hover:shadow-lg mt-auto w-full sm:w-fit text-sm sm:text-base justify-center sm:justify-start"
              >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                Visit Website
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

