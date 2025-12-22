import BooksOverview from '@/components/BooksOverview'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UX Book Recommendations - Essential Reading List | Pragmatic UX Design',
  description: 'Curated selection of essential UX design books. Each recommendation includes why it is valuable and key takeaways. Filter by category and level to find the perfect book for your needs.',
  keywords: [
    'UX books',
    'UX design books',
    'user experience books',
    'design books',
    'UX reading list',
    'interaction design books',
    'usability books',
    'UX learning resources'
  ],
  openGraph: {
    title: 'UX Book Recommendations - Essential Reading List | Pragmatic UX Design',
    description: 'Curated selection of essential UX design books with recommendations and key takeaways.',
    url: 'https://pragmaticux.design/books',
    type: 'website',
  },
  twitter: {
    title: 'UX Book Recommendations - Essential Reading List',
    description: 'Discover essential UX design books recommended by Pragmatic UX Design.',
    card: 'summary_large_image',
  },
}

export default function BooksPage() {
  return <BooksOverview />
}

