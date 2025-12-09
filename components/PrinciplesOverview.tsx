import Link from 'next/link'
import { principles } from '@/data/principles'

export default function PrinciplesOverview() {
  return (
    <section id="core-principles" className="py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-left mb-16">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[1.2]">
            Core Principles
          </h2>
          <p className="text-xl text-muted-foreground max-w-[75%] leading-relaxed">
            Eight fundamental concepts that guide pragmatic UX practice. Click any principle to explore it in detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <Link
              key={principle.id}
              href={`/principles/${principle.order}`}
              className="group bg-card border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 flex flex-col h-full"
            >
              <div className="flex flex-col items-start gap-4 mb-6 min-h-[7rem]">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg">
                  {principle.order}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-tight text-left">
                  {principle.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-5 flex-grow">{principle.summary}</p>
              <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform mt-auto">
                Read More →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

