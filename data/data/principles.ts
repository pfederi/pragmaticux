import { Principle } from '@/types'
import principlesData from '@/data/principles.json'

export const principles: Principle[] = principlesData.principles as Principle[]

export function getPrincipleById(id: string): Principle | undefined {
  return principles.find(p => p.id === id)
}

export function getPrincipleByOrder(order: number): Principle | undefined {
  return principles.find(p => p.order === order)
}

