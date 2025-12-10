import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowLeft, CheckCircle, Lightbulb } from 'lucide-react'
import { getPrincipleByOrder, principles } from '@/data/principles'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PrincipleDetailPage({ params }: PageProps) {
  const { id } = await params
  const order = parseInt(id)
  const principle = getPrincipleByOrder(order)

  if (!principle) {
    notFound()
  }

  const currentIndex = principles.findIndex((p) => p.id === principle.id)
  const prevPrinciple = currentIndex > 0 ? principles[currentIndex - 1] : null
  const nextPrinciple = currentIndex < principles.length - 1 ? principles[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-8 sm:pt-16 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Title and Number on same line */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary text-white rounded-full text-2xl sm:text-3xl md:text-3xl font-bold shadow-lg flex-shrink-0" aria-label={`Principle ${principle.order}`}>
                {principle.order}
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-[55%] bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-relaxed sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.2] pb-1 pt-4">
                  {principle.title}
                </h1>
                {/* Subtitle below title, aligned with title text */}
                <div className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 max-w-full sm:max-w-[75%]">
                  {principle.summary.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl pt-8 sm:pt-12 md:pt-16 lg:pt-24">
        <div className="flex items-start gap-4 sm:gap-6">
          {/* Empty space for number alignment - hidden on mobile */}
          <div className="hidden sm:block w-16 md:w-20 flex-shrink-0"></div>
          
          <div className="flex-1 w-full sm:w-auto">
            {/* Why It Matters */}
            {principle.why_matters && principle.why_matters.length > 0 && (
              <section className="mb-8 sm:mb-12 md:mb-16 pb-8 sm:pb-12 md:pb-16 pt-8 sm:pt-12 md:pt-16 border-t border-b border-border">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-left leading-tight pb-1 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" id="why-it-matters">Why It Matters</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {principle.why_matters.map((item, index) => {
                const colonIndex = item.indexOf(': ')
                const title = colonIndex > 0 ? item.substring(0, colonIndex).trim() : null
                const description = colonIndex > 0 ? item.substring(colonIndex + 2).trim() : item

                return (
                  <div key={index} className="bg-gradient-to-br from-card to-muted/50 border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                    {title && <div className="mb-3 flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-base sm:text-lg text-foreground">
                          {title}
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">{description}</p>
                      </div>
                    </div>}
                  </div>
                )
              })}
                </div>
              </section>
            )}

            {/* Examples */}
            {principle.examples && principle.examples.length > 0 && (
              <section className="mb-8 sm:mb-12 md:mb-16 pb-8 sm:pb-12 md:pb-16 border-b border-border">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-left leading-tight pb-1 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" id="practical-examples">Practical Examples</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {principle.examples.map((example, index) => {
                const colonIndex = example.indexOf(':')
                const title = colonIndex > 0 ? example.substring(0, colonIndex).trim() : null
                const description = colonIndex > 0 ? example.substring(colonIndex + 1).trim() : example

                return (
                  <div key={index} className="bg-gradient-to-br from-secondary/20 to-primary/10 border-2 border-primary/20 rounded-xl p-4 sm:p-6 hover:border-primary/40 transition-colors">
                    {title && <div className="mb-3 flex items-start gap-2 sm:gap-3">
                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-base sm:text-lg text-foreground">
                          {title}
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">{description}</p>
                      </div>
                    </div>}
                  </div>
                )
              })}
                </div>
              </section>
            )}

            {/* Key Questions */}
            {principle.instead_of_asking && principle.instead_of_asking.length > 0 && (
              <section className="mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-left leading-tight pb-1 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" id="key-questions">Key Questions to Ask</h2>
            <div className="bg-card border rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
              <div className="space-y-3 sm:space-y-4">
                {principle.instead_of_asking.map((question, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5">
                      ?
                    </span>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed italic">{question}</p>
                  </div>
                ))}
              </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Navigation */}
        <section className="pt-6 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-16 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-6">
            {prevPrinciple ? (
              <Link
                href={`/principles/${prevPrinciple.order}`}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 bg-card border rounded-lg hover:bg-muted transition-colors group flex-1 sm:flex-initial focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Go to previous principle ${prevPrinciple.order}: ${prevPrinciple.title}`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0" aria-hidden="true">
                  {prevPrinciple.order}
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-xs sm:text-sm text-muted-foreground">Previous</div>
                  <div className="font-semibold text-sm sm:text-base truncate">{prevPrinciple.title}</div>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" aria-hidden="true" />
            )}

            {nextPrinciple ? (
              <Link
                href={`/principles/${nextPrinciple.order}`}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 bg-card border rounded-lg hover:bg-muted transition-colors group flex-1 sm:flex-initial sm:ml-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Go to next principle ${nextPrinciple.order}: ${nextPrinciple.title}`}
              >
                <div className="text-right min-w-0 flex-1 sm:flex-initial sm:flex-none">
                  <div className="text-xs sm:text-sm text-muted-foreground">Next</div>
                  <div className="font-semibold text-sm sm:text-base truncate">{nextPrinciple.title}</div>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0" aria-hidden="true">
                  {nextPrinciple.order}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" aria-hidden="true" />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

