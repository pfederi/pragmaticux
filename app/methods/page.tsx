import MethodsOverview from '@/components/MethodsOverview'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '51 UX Methods - Complete UX Toolkit | Pragmatic UX Design',
  description: 'Explore our comprehensive collection of 51 practical UX methods. Filter by category: Research, Design, Testing, Implementation, Strategy & Optimization. Each method includes steps, tips, and detailed instructions.',
  keywords: [
    'UX methods',
    'user research methods',
    'design methods',
    'usability testing',
    'UX toolkit',
    'design process',
    'user experience methods',
    'agile UX methods'
  ],
  openGraph: {
    title: '51 UX Methods - Complete UX Toolkit | Pragmatic UX Design',
    description: 'Comprehensive collection of practical UX methods with step-by-step guides and filtering by category.',
    url: 'https://pragmaticux.design/methods',
    type: 'website',
  },
  twitter: {
    title: '51 UX Methods - Complete UX Toolkit | Pragmatic UX Design',
    description: 'Explore 51 practical UX methods with detailed instructions and tips.',
    card: 'summary_large_image',
  },
}

export default function MethodsPage() {
  return <MethodsOverview />
}
