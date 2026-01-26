import { notFound } from 'next/navigation'
import { getPrincipleByOrder } from '@/data/principles'
import type { Metadata } from 'next'
import PrincipleDetail from '@/components/PrincipleDetail'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const order = parseInt(id)
  const principle = getPrincipleByOrder(order)

  if (!principle) {
    return {
      title: 'Principle Not Found - Pragmatic UX Design',
      description: 'The requested UX principle could not be found.',
    }
  }

  return {
    title: `${principle.title} - UX Principle ${principle.order} | Pragmatic UX Design`,
    description: `${principle.summary} Learn how to apply this core UX principle in real-world projects with practical examples and implementation guidance.`,
    keywords: [
      `UX principle ${principle.order}`,
      principle.title.toLowerCase(),
      'user experience principles',
      'design principles',
      'UX best practices',
      'interaction design',
      'user-centered design'
    ],
    openGraph: {
      title: `${principle.title} - UX Principle ${principle.order} | Pragmatic UX Design`,
      description: principle.summary,
      url: `https://pragmaticuxdesign.com/principles/${id}`,
      type: 'article',
    },
    twitter: {
      title: `${principle.title} - UX Principle ${principle.order}`,
      description: principle.summary,
      card: 'summary_large_image',
    },
  }
}

export default async function PrincipleDetailPage({ params }: PageProps) {
  const { id } = await params
  const order = parseInt(id)
  const principle = getPrincipleByOrder(order)

  if (!principle) {
    notFound()
  }

  return <PrincipleDetail initialPrinciple={principle} order={order} />
}
