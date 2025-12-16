import methodsData from './methods.json'

export interface MethodDetails {
  description: string
  steps: string[]
  tips: string[]
}

export type MethodsData = Record<string, MethodDetails>

export const methods: MethodsData = methodsData as MethodsData

export const getMethodInstructions = (method: string): MethodDetails => {
  return methods[method] || {
    description: "A practical method to improve your UX process.",
    steps: ["Define your specific goals", "Gather relevant data", "Apply the method systematically", "Measure results and iterate"],
    tips: ["Start small and focused", "Involve stakeholders early", "Document your process and learnings"]
  }
}
