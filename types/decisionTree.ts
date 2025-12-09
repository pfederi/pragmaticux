export interface DecisionTreeOption {
  value: string
  label: string
}

export interface DecisionTreeQuestion {
  id: string
  label: string
  type: 'single' | 'multiple'
  options: DecisionTreeOption[]
}

export interface DecisionTreeRule {
  if: Record<string, string>
  then: {
    principles?: string[]
    methods?: string[]
  }
}

export interface DecisionTree {
  version: string
  meta: {
    title: string
    language: string
    description: string
    principles_ref: string
  }
  questions: DecisionTreeQuestion[]
  rules: DecisionTreeRule[]
}

export interface DecisionTreeResults {
  principles: string[]
  methods: string[]
}

