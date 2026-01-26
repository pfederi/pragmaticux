'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { locales, localeNames, type Locale } from '@/lib/i18n/config'
import { BREAKPOINTS } from '@/lib/constants'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const { locale, setLocale, t } = useLanguage()
  const [isPrinciplesOpen, setIsPrinciplesOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const languageDropdownRef = useRef<HTMLDivElement>(null)

  const principles = [
    { id: 1, title: t.principles.principle1 },
    { id: 2, title: t.principles.principle2 },
    { id: 3, title: t.principles.principle3 },
    { id: 4, title: t.principles.principle4 },
    { id: 5, title: t.principles.principle5 },
    { id: 6, title: t.principles.principle6 },
    { id: 7, title: t.principles.principle7 },
    { id: 8, title: t.principles.principle8 },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth >= BREAKPOINTS.DESKTOP) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsPrinciplesOpen(false)
        }
        if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
          setIsLanguageOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const togglePrinciples = () => {
    setIsPrinciplesOpen(!isPrinciplesOpen)
  }

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen)
  }

  const handlePrincipleClick = (id: number) => {
    router.push(`/principles/${id}`)
    setIsPrinciplesOpen(false)
  }

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setIsLanguageOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50 print:hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg md:text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1" aria-label="Pragmatic UX Design - Home">
            Pragmatic UX Design
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/" && "text-primary"
              )}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              {t.nav.home}
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
                {t.nav.principles}
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
              {t.nav.methods}
            </Link>
            <Link
              href="/decision-helper"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/decision-helper" && "text-primary"
              )}
              aria-current={pathname === "/decision-helper" ? "page" : undefined}
            >
              {t.nav.decisionHelper}
            </Link>
            <Link
              href="/books"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/books" && "text-primary"
              )}
              aria-current={pathname === "/books" ? "page" : undefined}
            >
              {t.nav.books}
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                pathname === "/about" && "text-primary"
              )}
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              {t.nav.about}
            </Link>

            {/* Language Switcher */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                aria-expanded={isLanguageOpen}
                aria-haspopup="true"
                aria-controls="language-menu"
                aria-label="Change language"
              >
                <span className="uppercase">{locale}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isLanguageOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>

              {isLanguageOpen && (
                <div
                  id="language-menu"
                  role="menu"
                  className="absolute top-full mt-2 right-0 w-40 bg-background border border-border rounded-md shadow-lg py-2 z-50"
                >
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLanguageChange(loc)}
                      role="menuitem"
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md",
                        locale === loc && "bg-muted text-primary"
                      )}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
          <div id="mobile-menu" className="lg:hidden border-t py-4" role="menu" aria-labelledby="mobile-menu-button">
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
                {t.nav.home}
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
                  {t.nav.principles}
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
                {t.nav.methods}
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
                {t.nav.decisionHelper}
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
                {t.nav.books}
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
                {t.nav.about}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="px-4 border-t pt-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between w-full px-0 py-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-md"
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="true"
                >
                  <span className="flex items-center gap-2">
                    Language / Sprache
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isLanguageOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
                {isLanguageOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          handleLanguageChange(loc)
                          setIsMobileMenuOpen(false)
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset",
                          locale === loc && "bg-muted text-primary"
                        )}
                      >
                        {localeNames[loc]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

