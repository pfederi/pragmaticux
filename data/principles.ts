import { Principle } from '@/types'
import principlesDataEn from '@/data/principles.json'
import principlesDataDe from '@/data/principles.de.json'

export function getPrinciples(locale: string = 'en'): Principle[] {
  const data = locale === 'de' ? principlesDataDe : principlesDataEn
  return data.principles as Principle[]
}

// Default export for backwards compatibility
export const principles: Principle[] = principlesDataEn.principles as Principle[]

export function getPrincipleById(id: string, locale: string = 'en'): Principle | undefined {
  const principlesData = getPrinciples(locale)
  return principlesData.find(p => p.id === id)
}

export function getPrincipleByOrder(order: number, locale: string = 'en'): Principle | undefined {
  const principlesData = getPrinciples(locale)
  return principlesData.find(p => p.order === order)
}

