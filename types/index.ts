export interface Principle {
  id: string
  order: number
  slug: string
  title: string
  summary: string
  narrative: string[]
  examples: string[]
  why_matters: string[]
  instead_of_asking: string[]
}

export interface PrinciplesData {
  schema: {
    id: string
    order: string
    slug: string
    title: string
    summary: string
    narrative: string[]
    examples: string[]
    why_matters: string[]
    instead_of_asking: string[]
  }
  principles: Principle[]
}

