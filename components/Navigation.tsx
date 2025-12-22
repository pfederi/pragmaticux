'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isPrinciplesOpen, setIsPrinciplesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth >= 768 && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPrinciplesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const togglePrinciples = () => {
    setIsPrinciplesOpen(!isPrinciplesOpen)
  }

  const handlePrincipleClick = (id: number) => {
    router.push(`/principles/${id}`)
    setIsPrinciplesOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg md:text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Pragmatic UX Design - Home">
            Pragmatic UX Design
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/" && "text-primary"
              )}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={togglePrinciples}
                className={cn(
                  "flex items-center gap-3 px-3 py-1 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md",
                  pathname.startsWith("/principles") && "text-primary"
                )}
                aria-expanded={isPrinciplesOpen}
                aria-haspopup="true"
                aria-controls="principles-menu"
                id="principles-button"
              >
                Principles
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isPrinciplesOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>

              {isPrinciplesOpen && (
                <div
                  id="principles-menu"
                  role="menu"
                  aria-labelledby="principles-button"
                  className="absolute top-full mt-2 w-64 bg-background border border-border rounded-md shadow-lg py-2 z-50"
                >
                  {principles.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handlePrincipleClick(p.id)}
                      role="menuitem"
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md",
                        pathname === `/principles/${p.id}` && "bg-muted text-primary"
                      )}
                    >
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        {p.id}
                      </span>
                      <span className="truncate">{p.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/methods"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/methods" && "text-primary"
              )}
              aria-current={pathname === "/methods" ? "page" : undefined}
            >
              Methods
            </Link>
            <Link
              href="/decision-helper"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/decision-helper" && "text-primary"
              )}
              aria-current={pathname === "/decision-helper" ? "page" : undefined}
            >
              Decision Helper
            </Link>
            <Link
              href="/books"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/books" && "text-primary"
              )}
              aria-current={pathname === "/books" ? "page" : undefined}
            >
              Books
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/about" && "text-primary"
              )}
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
              if (isMobileMenuOpen) {
                setIsPrinciplesOpen(false)
              }
            }}
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t py-4" role="menu" aria-labelledby="mobile-menu-button">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsPrinciplesOpen(false)
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md",
                  pathname === "/" && "text-primary"
                )}
                role="menuitem"
              >
                Home
              </Link>

              <div className="px-4">
                <button
                  id="mobile-principles-button"
                  onClick={(e) => {
                    e.preventDefault()
                    togglePrinciples()
                  }}
                  className={cn(
                    "flex items-center justify-between w-full px-0 py-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md",
                    pathname.startsWith("/principles") && "text-primary"
                  )}
                  aria-expanded={isPrinciplesOpen}
                  aria-haspopup="true"
                  aria-controls="mobile-principles-menu"
                >
                  Principles
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isPrinciplesOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
                {isPrinciplesOpen && (
                  <div id="mobile-principles-menu" role="menu" aria-labelledby="mobile-principles-button" className="mt-2 ml-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                    {principles.map((p) => (
                      <button
                        key={p.id}
                        onClick={(e) => {
                          e.preventDefault()
                          handlePrincipleClick(p.id)
                          setIsMobileMenuOpen(false)
                          setIsPrinciplesOpen(false)
                        }}
                        role="menuitem"
                        className={cn(
                          "w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors flex items-center gap-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset",
                          pathname === `/principles/${p.id}` && "bg-muted text-primary"
                        )}
                      >
                        <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          {p.id}
                        </span>
                        <span className="truncate">{p.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/methods"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsPrinciplesOpen(false)
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md",
                  pathname === "/methods" && "text-primary"
                )}
                role="menuitem"
              >
                Methods
              </Link>
              <Link
                href="/decision-helper"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsPrinciplesOpen(false)
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md",
                  pathname === "/decision-helper" && "text-primary"
                )}
                role="menuitem"
              >
                Decision Helper
              </Link>
              <Link
                href="/books"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsPrinciplesOpen(false)
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md",
                  pathname === "/books" && "text-primary"
                )}
                role="menuitem"
              >
                Books
              </Link>
              <Link
                href="/about"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsPrinciplesOpen(false)
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md",
                  pathname === "/about" && "text-primary"
                )}
                role="menuitem"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

