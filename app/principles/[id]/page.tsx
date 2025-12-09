import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowLeft, CheckCircle, Lightbulb } from 'lucide-react'
import { getPrincipleByOrder, principles } from '@/data/principles'

interface PageProps {
  params: {
    id: string
  }
}

export default function PrincipleDetailPage({ params }: PageProps) {
  const order = parseInt(params.id)
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
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-6">
            {/* Title and Number on same line */}
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center w-20 h-20 bg-primary text-white rounded-full text-4xl font-bold shadow-lg flex-shrink-0">
                {principle.order}
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold mb-8 max-w-[55%] bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.2] mt-3">
                  {principle.title}
                </h1>
                {/* Subtitle below title, aligned with title text */}
                <div className="text-xl text-muted-foreground leading-relaxed space-y-4 max-w-[75%]">
                  {principle.summary.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl pt-24">
        <div className="flex items-start gap-6">
          {/* Empty space for number alignment */}
          <div className="w-20 flex-shrink-0"></div>
          
          <div className="flex-1">
            {/* Why It Matters */}
            {principle.why_matters && principle.why_matters.length > 0 && (
              <section className="mb-16 pb-16 pt-16 border-t border-b border-border">
                <h2 className="text-3xl font-bold mb-8 text-left leading-[1.2] bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Why It Matters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principle.why_matters.map((item, index) => {
                const colonIndex = item.indexOf(': ')
                const title = colonIndex > 0 ? item.substring(0, colonIndex).trim() : null
                const description = colonIndex > 0 ? item.substring(colonIndex + 2).trim() : item

                return (
                  <div key={index} className="bg-gradient-to-br from-card to-muted/50 border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    {title && <div className="mb-3 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground">
                          {title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mt-2">{description}</p>
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
              <section className="mb-16 pb-16 border-b border-border">
                <h2 className="text-3xl font-bold mb-8 text-left leading-[1.2] bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Practical Examples</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principle.examples.map((example, index) => {
                const colonIndex = example.indexOf(':')
                const title = colonIndex > 0 ? example.substring(0, colonIndex).trim() : null
                const description = colonIndex > 0 ? example.substring(colonIndex + 1).trim() : example

                return (
                  <div key={index} className="bg-gradient-to-br from-secondary/20 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors">
                    {title && <div className="mb-3 flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground">
                          {title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mt-2">{description}</p>
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
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-left leading-[1.2] bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Key Questions to Ask</h2>
            <div className="bg-card border rounded-xl p-8 shadow-sm">
              <div className="space-y-4">
                {principle.instead_of_asking.map((question, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      ?
                    </span>
                    <p className="text-foreground leading-relaxed italic">{question}</p>
                  </div>
                ))}
              </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Navigation */}
        <section className="pt-12 pb-16 border-t border-border">
          <div className="flex justify-between items-center">
            {prevPrinciple ? (
              <Link
                href={`/principles/${prevPrinciple.order}`}
                className="flex items-center gap-4 px-6 py-3 bg-card border rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {prevPrinciple.order}
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Previous</div>
                  <div className="font-semibold">{prevPrinciple.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextPrinciple ? (
              <Link
                href={`/principles/${nextPrinciple.order}`}
                className="flex items-center gap-4 px-6 py-3 bg-card border rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Next</div>
                  <div className="font-semibold">{nextPrinciple.title}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {nextPrinciple.order}
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

