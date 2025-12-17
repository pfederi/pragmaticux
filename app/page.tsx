import Hero from '@/components/Hero'
import PrinciplesOverview from '@/components/PrinciplesOverview'
import Workflow from '@/components/Workflow'
import CTA from '@/components/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pragmatic UX Design - Practical Framework for Better User Experience',
  description: 'Master UX design with 8 core principles and 51 proven methods. Use our interactive decision helper to find the perfect UX approach for your project. No overcomplication, maximum impact.',
  keywords: [
    'UX design framework',
    'user experience principles',
    'UX methods',
    'design decision helper',
    'practical UX',
    'user research',
    'usability testing',
    'product design',
    'interaction design'
  ],
  openGraph: {
    title: 'Pragmatic UX Design - Practical Framework for Better User Experience',
    description: 'Master UX design with 8 core principles and 51 proven methods. Interactive decision helper for project-specific UX guidance.',
    url: 'https://pragmaticux.design',
    type: 'website',
  },
  twitter: {
    title: 'Pragmatic UX Design - Practical Framework for Better User Experience',
    description: 'Master UX design with 8 core principles and 51 proven methods.',
    card: 'summary_large_image',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Workflow />
      <PrinciplesOverview />
      <CTA />
    </>
  )
}

