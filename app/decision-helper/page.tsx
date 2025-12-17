import DecisionHelper from '@/components/DecisionHelper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UX Decision Helper - Find Perfect UX Methods for Your Project',
  description: 'Answer 5 questions about your project context and get personalized UX recommendations. Choose from 51 proven methods across research, design, testing, and implementation.',
  keywords: [
    'UX decision helper',
    'UX method selection',
    'project assessment',
    'UX recommendations',
    'design methodology',
    'UX process guide'
  ],
  openGraph: {
    title: 'UX Decision Helper - Find Perfect UX Methods for Your Project',
    description: 'Interactive tool to match your project needs with the most effective UX methods and principles.',
    url: 'https://pragmaticux.design/decision-helper',
    type: 'website',
  },
  twitter: {
    title: 'UX Decision Helper - Find Perfect UX Methods for Your Project',
    description: 'Get personalized UX recommendations for your project in 5 questions.',
    card: 'summary_large_image',
  },
}

export default function DecisionHelperPage() {
  return (
    <DecisionHelper />
  )
}

