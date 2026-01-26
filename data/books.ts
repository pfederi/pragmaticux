import booksDataEn from './books.json'
import booksDataDe from './books.de.json'

export interface Book {
  id: string
  title: string
  author: string
  year: number
  category: 'usability' | 'fundamentals' | 'interaction' | 'process' | 'psychology' | 'research'
  level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  description: string
  why_recommended: string
  key_takeaways: string[]
  amazon_url: string
  cover_image_url?: string
  cover_color: string
}

export interface BooksData {
  meta: {
    title: string
    description: string
    last_updated: string
  }
  books: Book[]
}

export function getBooks(locale: string = 'en'): Book[] {
  const data = locale === 'de' ? booksDataDe : booksDataEn
  return (data as BooksData).books || []
}

// Default export for backwards compatibility
const booksDataTyped = booksDataEn as BooksData
export const books: Book[] = booksDataTyped.books || []

const bookCategoriesEn = {
  usability: { label: 'Usability', description: 'Books focused on usability and user-friendly design' },
  fundamentals: { label: 'Fundamentals', description: 'Essential UX design principles and concepts' },
  interaction: { label: 'Interaction Design', description: 'Deep dives into interaction design patterns' },
  process: { label: 'Process & Methods', description: 'UX processes, workflows, and methodologies' },
  psychology: { label: 'Psychology', description: 'Understanding user behavior and psychology' },
  research: { label: 'Research', description: 'User research methods and measurement' }
} as const

const bookCategoriesDe = {
  usability: { label: 'Usability', description: 'Fokus auf Benutzerfreundlichkeit und intuitive Interaktionsmodelle.' },
  fundamentals: { label: 'Grundlagen', description: 'Essenzielle Prinzipien und zeitlose UX-Konzepte.' },
  interaction: { label: 'Interaction Design', description: 'Tiefgehende Patterns und Strategien für digitales Produktdesign.' },
  process: { label: 'Prozess & Methoden', description: 'Effiziente Workflows, Methodologien und Team-Kollaboration.' },
  psychology: { label: 'Psychologie', description: 'Menschliches Verhalten und kognitive Muster verstehen.' },
  research: { label: 'Research', description: 'Methoden zur Nutzerforschung, Datenerhebung und Analyse.' }
} as const

export function getBookCategories(locale: string = 'en') {
  return locale === 'de' ? bookCategoriesDe : bookCategoriesEn
}

// Default export for backwards compatibility
export const bookCategories = bookCategoriesEn

export type BookCategory = keyof typeof bookCategoriesEn

const levelLabelsEn = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  all: 'All Levels'
} as const

const levelLabelsDe = {
  beginner: 'Anfänger',
  intermediate: 'Fortgeschritten',
  advanced: 'Experte',
  all: 'Alle Niveaus'
} as const

export function getLevelLabels(locale: string = 'en') {
  return locale === 'de' ? levelLabelsDe : levelLabelsEn
}

// Default export for backwards compatibility
export const levelLabels = levelLabelsEn

export function getBookById(id: string, locale: string = 'en'): Book | undefined {
  const booksData = getBooks(locale)
  return booksData.find(book => book.id === id)
}

export function getBooksByCategory(category: BookCategory, locale: string = 'en'): Book[] {
  const booksData = getBooks(locale)
  return booksData.filter(book => book.category === category)
}

export function getBooksByLevel(level: Book['level'], locale: string = 'en'): Book[] {
  const booksData = getBooks(locale)
  return booksData.filter(book => book.level === level || book.level === 'all')
}

