'use client'

import { useState, useMemo } from 'react'
import { books, bookCategories, levelLabels, type BookCategory, type Book } from '@/data/books'
import { ExternalLink } from 'lucide-react'

export default function BooksOverview() {
  const [selectedCategory, setSelectedCategory] = useState<BookCategory | 'all'>('all')
  const [selectedLevel, setSelectedLevel] = useState<Book['level'] | 'all'>('all')
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  // Ensure books is always an array
  const booksArray = Array.isArray(books) ? books : []

  const handleImageError = (bookId: string) => {
    setFailedImages(prev => new Set(prev).add(bookId))
  }

  const chipColors: Record<string, string> = {
    all: 'bg-gray-100/80 backdrop-blur-sm text-gray-800 border border-white/60',
    usability: 'bg-blue-100/80 backdrop-blur-sm text-blue-800 border border-white/60',
    fundamentals: 'bg-purple-100/80 backdrop-blur-sm text-purple-800 border border-white/60',
    interaction: 'bg-green-100/80 backdrop-blur-sm text-green-800 border border-white/60',
    process: 'bg-orange-100/80 backdrop-blur-sm text-orange-800 border border-white/60',
    psychology: 'bg-pink-100/80 backdrop-blur-sm text-pink-800 border border-white/60',
    research: 'bg-indigo-100/80 backdrop-blur-sm text-indigo-800 border border-white/60'
  }

  const levelColors: Record<string, string> = {
    all: 'bg-gray-100/80 backdrop-blur-sm text-gray-800 border border-white/60',
    beginner: 'bg-green-100/80 backdrop-blur-sm text-green-800 border border-white/60',
    intermediate: 'bg-blue-100/80 backdrop-blur-sm text-blue-800 border border-white/60',
    advanced: 'bg-purple-100/80 backdrop-blur-sm text-purple-800 border border-white/60'
  }

  const filteredBooks = useMemo(() => {
    if (!booksArray || booksArray.length === 0) return []
    return booksArray.filter(book => {
      const categoryMatch = selectedCategory === 'all' || book.category === selectedCategory
      const levelMatch = selectedLevel === 'all' || book.level === selectedLevel || book.level === 'all'
      return categoryMatch && levelMatch
    })
  }, [selectedCategory, selectedLevel, booksArray])

  return (
    <section className="py-12 sm:py-16 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            UX Book Recommendations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-[75%] leading-relaxed">
            Curated selection of essential UX design books. Each recommendation includes why it is valuable and key takeaways to help you choose the right book for your needs.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 sm:mb-12 space-y-4">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Category</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground shadow-lg border-white/60'
                    : `${chipColors.all} hover:shadow-md`
                }`}
                aria-pressed={selectedCategory === 'all'}
                aria-label={`Show all books (${booksArray.length} total)`}
              >
                All ({booksArray.length})
              </button>
              {Object.entries(bookCategories).map(([key, category]) => {
                const count = booksArray.filter(b => b.category === key).length
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as BookCategory)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      selectedCategory === key
                        ? 'bg-primary text-primary-foreground shadow-lg border-white/60'
                        : `${chipColors[key]} hover:shadow-md`
                    }`}
                    aria-pressed={selectedCategory === key}
                    aria-label={`Show ${category.label} books (${count} total)`}
                  >
                    {category.label} ({count})
                  </button>
                )
              })}
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Level</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => setSelectedLevel('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  selectedLevel === 'all'
                    ? 'bg-primary text-primary-foreground shadow-lg border-white/60'
                    : `${levelColors.all} hover:shadow-md`
                }`}
                aria-pressed={selectedLevel === 'all'}
              >
                All Levels
              </button>
              {Object.entries(levelLabels).map(([key, label]) => {
                if (key === 'all') return null
                const count = booksArray.filter(b => b.level === key || b.level === 'all').length
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedLevel(key as Book['level'])}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      selectedLevel === key
                        ? 'bg-primary text-primary-foreground shadow-lg border-white/60'
                        : `${levelColors[key]} hover:shadow-md`
                    }`}
                    aria-pressed={selectedLevel === key}
                    aria-label={`Show ${label} books (${count} total)`}
                  >
                    {label} ({count})
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {filteredBooks.map((book) => (
            <button
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="bg-gradient-to-br from-card to-muted/50 border rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60/50 text-left w-full group min-h-[200px] flex flex-col"
              aria-label={`Learn more about ${book.title} by ${book.author}`}
            >
              {/* Header with title and chips */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h4 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors flex-1 min-w-0 leading-tight">
                    {book.title}
                  </h4>
                  {book.cover_image_url && !failedImages.has(book.id) ? (
                    <img
                      src={book.cover_image_url}
                      alt={`${book.title} cover`}
                      className="w-12 h-12 rounded-lg flex-shrink-0 shadow-md object-cover"
                      onError={() => handleImageError(book.id)}
                    />
                  ) : (
                    <div
                      className="w-12 h-12 rounded-lg flex-shrink-0 shadow-md"
                      style={{ backgroundColor: book.cover_color }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-3">{book.author} ({book.year})</p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border border-white/60 ${chipColors[book.category] || chipColors.all}`}
                    aria-label={`Category: ${bookCategories[book.category]?.label || book.category}`}
                  >
                    {bookCategories[book.category]?.label || book.category}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border border-white/60 ${levelColors[book.level] || levelColors.all}`}
                    aria-label={`Level: ${levelLabels[book.level] || book.level}`}
                  >
                    {levelLabels[book.level] || book.level}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                  {book.description}
                </p>
                <div className="text-primary text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                  Learn more →
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No books match your selected filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSelectedLevel('all')
              }}
              className="mt-4 px-4 py-2 text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-cyan-400/40 rounded-2xl blur opacity-90"></div>
            <div className="relative bg-card/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {/* Sticky Header */}
              <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-white/10 p-6 sm:p-8 rounded-t-2xl">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      {selectedBook.cover_image_url && !failedImages.has(selectedBook.id) ? (
                        <img
                          src={selectedBook.cover_image_url}
                          alt={`${selectedBook.title} cover`}
                          className="w-16 h-20 rounded-lg flex-shrink-0 shadow-lg object-cover"
                          onError={() => handleImageError(selectedBook.id)}
                        />
                      ) : (
                        <div
                          className="w-16 h-20 rounded-lg flex-shrink-0 shadow-lg"
                          style={{ backgroundColor: selectedBook.cover_color }}
                          aria-hidden="true"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2">{selectedBook.title}</h3>
                        <p className="text-sm text-muted-foreground">{selectedBook.author} ({selectedBook.year})</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium border border-white/60 ${chipColors[selectedBook.category] || chipColors.all}`}
                          >
                            {bookCategories[selectedBook.category]?.label || selectedBook.category}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium border border-white/60 ${levelColors[selectedBook.level] || levelColors.all}`}
                          >
                            {levelLabels[selectedBook.level] || selectedBook.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1 flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedBook.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Why We Recommend This Book</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedBook.why_recommended}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Key Takeaways</h4>
                    <ul className="space-y-2">
                      {selectedBook.key_takeaways.map((takeaway, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="text-primary text-lg leading-none mt-0.5">•</span>
                          <span className="text-sm leading-relaxed">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-white/60/20 rounded-xl p-4 sm:p-6">
                    <h4 className="font-semibold mb-2">Get This Book</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Purchase this book on Amazon to support the authors and continue your UX learning journey.
                    </p>
                    <a
                      href={selectedBook.amazon_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg text-sm"
                    >
                      View on Amazon
                      <ExternalLink className="w-4 h-4" />
                    </a>
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

