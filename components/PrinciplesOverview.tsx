import Link from 'next/link'
import { principles } from '@/data/principles'

export default function PrinciplesOverview() {
  return (
    <section id="core-principles" className="py-12 sm:py-16 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight pb-1">
            Core Principles
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-[75%] leading-relaxed">
            Eight fundamental concepts that guide pragmatic UX practice. Click any principle to explore it in detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {principles.map((principle) => (
            <Link
              key={principle.id}
              href={`/principles/${principle.order}`}
              className="group bg-card border rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 flex flex-col h-full"
            >
              <div className="flex flex-col items-start gap-3 sm:gap-4 mb-4 sm:mb-6 min-h-[6rem] sm:min-h-[7rem]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 shadow-lg">
                  {principle.order}
                </div>
                <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors leading-tight text-left">
                  {principle.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-5 flex-grow">{principle.summary}</p>
              <div className="flex items-center text-primary text-xs sm:text-sm font-semibold group-hover:translate-x-1 transition-transform mt-auto">
                Read More →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

