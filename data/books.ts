import booksData from './books.json'

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

const booksDataTyped = booksData as BooksData
export const books: Book[] = booksDataTyped.books || []

export const bookCategories = {
  usability: { label: 'Usability', description: 'Books focused on usability and user-friendly design' },
  fundamentals: { label: 'Fundamentals', description: 'Essential UX design principles and concepts' },
  interaction: { label: 'Interaction Design', description: 'Deep dives into interaction design patterns' },
  process: { label: 'Process & Methods', description: 'UX processes, workflows, and methodologies' },
  psychology: { label: 'Psychology', description: 'Understanding user behavior and psychology' },
  research: { label: 'Research', description: 'User research methods and measurement' }
} as const

export type BookCategory = keyof typeof bookCategories

export const levelLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  all: 'All Levels'
} as const

export function getBookById(id: string): Book | undefined {
  return books.find(book => book.id === id)
}

export function getBooksByCategory(category: BookCategory): Book[] {
  return books.filter(book => book.category === category)
}

export function getBooksByLevel(level: Book['level']): Book[] {
  return books.filter(book => book.level === level || book.level === 'all')
}

