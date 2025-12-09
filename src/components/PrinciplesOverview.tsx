import Link from 'next/link'
import { principles } from '@/data/principles'

export default function PrinciplesOverview() {
  return (
    <section id="principles" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Core Principles</h2>
          <p className="text-xl text-muted-foreground">
            Eight fundamental concepts that guide pragmatic UX practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <Link
              key={principle.id}
              to={`/principles/${principle.order}`}
              className="group bg-card border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {principle.order}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {principle.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{principle.summary}</p>
              <div className="text-primary text-sm font-medium">
                Read More →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/principles"
            className="px-6 py-2 border rounded-md hover:bg-muted transition-colors"
          >
            View All Principles
          </Link>
        </div>
      </div>
    </section>
  )
}

