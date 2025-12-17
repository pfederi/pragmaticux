'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { categorizedMethods, methodCategories, type MethodCategory, getMethodInstructions, getMethodDescription } from '@/data/methods'

export default function MethodsOverview() {
  const [selectedCategory, setSelectedCategory] = useState<MethodCategory | 'all'>('all')
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const chipColors: Record<string, string> = {
    all: 'bg-gray-100/80 backdrop-blur-sm text-gray-800 border border-white/60',
    research: 'bg-blue-100/80 backdrop-blur-sm text-blue-800 border border-white/60',
    design: 'bg-purple-100/80 backdrop-blur-sm text-purple-800 border border-white/60',
    testing: 'bg-green-100/80 backdrop-blur-sm text-green-800 border border-white/60',
    implementation: 'bg-orange-100/80 backdrop-blur-sm text-orange-800 border border-white/60',
    strategy: 'bg-indigo-100/80 backdrop-blur-sm text-indigo-800 border border-white/60',
    optimization: 'bg-red-100/80 backdrop-blur-sm text-red-800 border border-white/60'
  }

  const filteredMethods = useMemo(() =>
    selectedCategory === 'all'
      ? categorizedMethods
      : categorizedMethods.filter(method => method.category === selectedCategory),
    [selectedCategory]
  )

  const getEmailLink = useCallback((): string => {
    if (!selectedMethod) return 'mailto:patrick.federi@ergon.ch'

    const subject = encodeURIComponent('Pragmatic UX Design Method Inquiry')
    const methodDetails = getMethodInstructions(selectedMethod)

    let body = 'Hello Patrick,\n\n'
    body += `I found the "${selectedMethod}" method on your website and would like to learn more about implementing it.\n\n`
    body += `Method Description: ${methodDetails.description}\n\n`
    body += 'Could you provide more guidance on how to apply this method in my project?\n\n'
    body += 'Best regards'

    return `mailto:patrick.federi@ergon.ch?subject=${subject}&body=${encodeURIComponent(body)}`
  }, [selectedMethod])

  return (
    <section className="py-12 sm:py-16 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            UX Methods
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-[75%] leading-relaxed">
            Discover practical UX methods organized by category. Each method includes detailed implementation guidance and best practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                selectedCategory === 'all'
                  ? 'bg-primary text-primary-foreground shadow-lg border-white/60'
                  : `${chipColors.all} hover:shadow-md`
              }`}
              aria-pressed={selectedCategory === 'all'}
              aria-label={`Show all methods (${categorizedMethods.length} total)`}
            >
              All ({categorizedMethods.length})
            </button>
            {Object.entries(methodCategories).map(([key, category]) => {
              const count = categorizedMethods.filter(m => m.category === key).length
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key as MethodCategory)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    selectedCategory === key
                      ? 'bg-primary text-primary-foreground shadow-lg border-white/60'
                      : `${chipColors[key]} hover:shadow-md`
                  }`}
                  aria-pressed={selectedCategory === key}
                  aria-label={`Filter by ${category.label} category (${count} methods)`}
                >
                  {category.label} ({count})
                </button>
              )
            })}
          </div>

          {selectedCategory !== 'all' && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>{methodCategories[selectedCategory].label}:</strong> {methodCategories[selectedCategory].description}
              </p>
            </div>
          )}
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {filteredMethods.map((method, index) => (
            <button
              key={index}
              onClick={() => setSelectedMethod(method.name)}
              className="bg-card border rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60/50 text-left w-full group min-h-[140px] flex flex-col"
            >

              {/* Header with title and chip */}
              <div className="flex items-center justify-between mb-4 gap-2">
                <h4 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors flex-1 min-w-0">
                  {method.name}
                </h4>
                <span
                  className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium border border-white/60 whitespace-nowrap truncate ${chipColors[method.category]}`}
                  aria-label={`Category: ${methodCategories[method.category].label}`}
                  role="status"
                >
                  {methodCategories[method.category].label}
                </span>
              </div>

              {/* Content area that expands */}
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                  {getMethodDescription(method.name)}
                </p>
                <div className="text-primary text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                  Learn more →
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-white/60/20 rounded-xl p-4 sm:p-6 md:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Need Help Choosing the Right Method?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
              Use our Decision Helper to get personalized method recommendations based on your specific situation and project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/decision-helper"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Take Decision Helper
              </Link>
              <Link
                href="/about"
                className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-white/60/30 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:scale-105 text-sm sm:text-base"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Method Details Modal */}
      {selectedMethod && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-cyan-400/40 rounded-2xl blur opacity-90"></div>
            <div className="relative bg-card/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {/* Sticky Header */}
              <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-white/10 p-6 sm:p-8 rounded-t-2xl">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl sm:text-2xl font-semibold">{selectedMethod}</h3>
                  <button
                    onClick={() => setSelectedMethod(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {getMethodInstructions(selectedMethod).description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">How to Apply This Method:</h4>
                    <ol className="space-y-2">
                      {getMethodInstructions(selectedMethod).steps.map((step, index) => (
                        <li key={index} className="flex gap-3 items-center">
                          <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {getMethodInstructions(selectedMethod).tips.length > 0 && (
                    <div className="mb-20">
                      <h4 className="font-semibold mb-3 text-lg">Tips:</h4>
                      <ul className="space-y-2">
                        {getMethodInstructions(selectedMethod).tips.map((tip, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-primary text-lg leading-none mt-0.5">•</span>
                            <span className="text-sm leading-relaxed">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-white/60/20 rounded-xl p-4 sm:p-6">
                    <h4 className="font-semibold mb-2">Need Help Implementing This Method?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      We're here to help you apply this method effectively in your project. Get personalized guidance and support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={getEmailLink()}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        Get in Touch
                      </a>
                      <Link
                        href="/about"
                        className="px-4 py-2 border-2 border-white/60/30 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-sm text-center"
                      >
                        Learn More About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
