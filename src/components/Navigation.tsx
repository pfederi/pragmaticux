'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const pathname = usePathname()

  const principles = [
    { id: 1, title: 'UX Should Fit the Process' },
    { id: 2, title: 'Efficiency Over Delight' },
    { id: 3, title: 'Empower, Not Overcomplicate' },
    { id: 4, title: 'Theory Is Nice, but Execution Wins' },
    { id: 5, title: 'Research Should Be Right-Sized' },
    { id: 6, title: 'Scale to Product Needs' },
    { id: 7, title: 'Iterate with Purpose' },
    { id: 8, title: 'Reuse Design Systems' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Pragmatic UX Design
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Principles:</span>
              <div className="flex items-center gap-1">
                {principles.map((p) => (
                  <Link
                    key={p.id}
                    to={`/principles/${p.id}`}
                    className={cn(
                      "w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center hover:bg-primary-dark transition-colors",
                      pathname === `/principles/${p.id}` && "ring-2 ring-primary ring-offset-2"
                    )}
                  >
                    {p.id}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/#approach"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Decision Helper
            </Link>
            <Link
              to="/#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

