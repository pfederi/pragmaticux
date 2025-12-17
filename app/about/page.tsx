import About from '@/components/About'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Pragmatic UX Design - Our Philosophy and Approach',
  description: 'Discover the origins of Pragmatic UX Design. Learn how our practical framework helps teams maximize UX impact without overcomplicating processes. Meet the creators behind the methodology.',
  keywords: [
    'UX philosophy',
    'practical UX approach',
    'UX methodology',
    'user experience framework',
    'design thinking',
    'agile UX',
    'lean UX'
  ],
  openGraph: {
    title: 'About Pragmatic UX Design - Our Philosophy and Approach',
    description: 'Learn about the practical UX framework that adapts to real-world conditions and maximizes user experience impact.',
    url: 'https://pragmaticux.design/about',
    type: 'website',
  },
  twitter: {
    title: 'About Pragmatic UX Design - Our Philosophy and Approach',
    description: 'Discover the practical UX framework that adapts to real-world conditions.',
    card: 'summary_large_image',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <About />
    </div>
  )
}

