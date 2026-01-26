import methodsDataEn from './methods.json'
import methodsDataDe from './methods.de.json'

export interface MethodDetails {
  description: string
  steps: string[]
  tips: string[]
}

export type MethodsData = Record<string, MethodDetails>

export function getMethods(locale: string = 'en'): MethodsData {
  const data = locale === 'de' ? methodsDataDe : methodsDataEn
  return data as MethodsData
}

// Default export for backwards compatibility
export const methods: MethodsData = methodsDataEn as MethodsData

export const getMethodInstructions = (method: string, locale: string = 'en'): MethodDetails => {
  const methodsData = getMethods(locale)
  return methodsData[method] || {
    description: locale === 'de' 
      ? "Eine praktische Methode zur Verbesserung deines UX-Prozesses."
      : "A practical method to improve your UX process.",
    steps: locale === 'de'
      ? ["Definiere deine spezifischen Ziele", "Sammle relevante Daten", "Wende die Methode systematisch an", "Messe Ergebnisse und iteriere"]
      : ["Define your specific goals", "Gather relevant data", "Apply the method systematically", "Measure results and iterate"],
    tips: locale === 'de'
      ? ["Beginne klein und fokussiert", "Beziehe Stakeholder früh ein", "Dokumentiere deinen Prozess und Erkenntnisse"]
      : ["Start small and focused", "Involve stakeholders early", "Document your process and learnings"]
  }
}

export const getMethodDescription = (method: string, locale: string = 'en'): string => {
  const methodsData = getMethods(locale)
  const methodData = methodsData[method]
  if (methodData && methodData.description) {
    return methodData.description
  }
  return locale === 'de'
    ? "Eine praktische Methode zur Verbesserung deines UX-Prozesses."
    : "A practical method to improve your UX process."
}

export type MethodCategory =
  | 'research'
  | 'design'
  | 'testing'
  | 'implementation'
  | 'strategy'
  | 'optimization'

export interface CategorizedMethod {
  name: string
  category: MethodCategory
  details: MethodDetails
}

const methodCategoriesEn: Record<MethodCategory, { label: string, color: string, description: string }> = {
  research: {
    label: 'Research & Analysis',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Methods for gathering insights and understanding user needs'
  },
  design: {
    label: 'Design & Creation',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Methods for creating and refining user experiences'
  },
  testing: {
    label: 'Testing & Validation',
    color: 'bg-green-100 text-green-800 border-green-200',
    description: 'Methods for validating designs with users'
  },
  implementation: {
    label: 'Implementation',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    description: 'Methods for successful technical implementation'
  },
  strategy: {
    label: 'Strategy & Planning',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    description: 'Methods for strategic planning and roadmapping'
  },
  optimization: {
    label: 'Optimization',
    color: 'bg-red-100 text-red-800 border-red-200',
    description: 'Methods for improving existing products'
  }
}

const methodCategoriesDe: Record<MethodCategory, { label: string, color: string, description: string }> = {
  research: {
    label: 'Research & Analyse',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Methoden, um Insights zu gewinnen und Nutzerbedürfnisse tiefgreifend zu verstehen.'
  },
  design: {
    label: 'Design & Gestaltung',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Methoden zur Konzeption und Ausgestaltung intuitiver User Experiences.'
  },
  testing: {
    label: 'Testing & Validierung',
    color: 'bg-green-100 text-green-800 border-green-200',
    description: 'Methoden, um Hypothesen zu prüfen und Designs mit echten Nutzern zu validieren.'
  },
  implementation: {
    label: 'Implementierung',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    description: 'Methoden für eine reibungslose und effiziente technische Umsetzung.'
  },
  strategy: {
    label: 'Strategie & Planung',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    description: 'Methoden für die strategische Ausrichtung und langfristige Roadmap-Planung.'
  },
  optimization: {
    label: 'Optimierung',
    color: 'bg-red-100 text-red-800 border-red-200',
    description: 'Methoden zur kontinuierlichen Verbesserung bestehender Produkte und Kennzahlen.'
  }
}

export function getMethodCategories(locale: string = 'en'): Record<MethodCategory, { label: string, color: string, description: string }> {
  return locale === 'de' ? methodCategoriesDe : methodCategoriesEn
}

// Default export for backwards compatibility
export const methodCategories: Record<MethodCategory, { label: string, color: string, description: string }> = methodCategoriesEn

export function getCategorizedMethods(locale: string = 'en'): CategorizedMethod[] {
  const methodsData = getMethods(locale)
  
  return [
    { name: 'Contextual Inquiry', category: 'research', details: methodsData['Contextual Inquiry'] },
    { name: 'Task Analysis', category: 'research', details: methodsData['Task Analysis'] },
    { name: 'Deep Interviews', category: 'research', details: methodsData['Deep Interviews'] },
    { name: 'Lean Personas', category: 'research', details: methodsData['Lean Personas'] },
    { name: 'Executive Summaries', category: 'research', details: methodsData['Executive Summaries'] },
    { name: 'One-Page Findings', category: 'research', details: methodsData['One-Page Findings'] },
    { name: 'Analytics Audit', category: 'research', details: methodsData['Analytics Audit'] },
    { name: 'Conversion Funnel Analysis', category: 'research', details: methodsData['Conversion Funnel Analysis'] },
    { name: 'User Segmentation Analysis', category: 'research', details: methodsData['User Segmentation Analysis'] },

    { name: 'Design Studio', category: 'design', details: methodsData['Design Studio'] },
    { name: 'Sketching Sessions', category: 'design', details: methodsData['Sketching Sessions'] },
    { name: 'Sketch Reviews', category: 'design', details: methodsData['Sketch Reviews'] },
    { name: 'Rapid Prototyping', category: 'design', details: methodsData['Rapid Prototyping'] },
    { name: 'Reusable Templates', category: 'design', details: methodsData['Reusable Templates'] },
    { name: 'Pattern Documentation', category: 'design', details: methodsData['Pattern Documentation'] },
    { name: 'Workflow Simplification', category: 'design', details: methodsData['Workflow Simplification'] },
    { name: 'Task Flow Redesign', category: 'design', details: methodsData['Task Flow Redesign'] },
    { name: 'Impact Mapping', category: 'design', details: methodsData['Impact Mapping'] },

    { name: 'Guerrilla Testing', category: 'testing', details: methodsData['Guerrilla Testing'] },
    { name: 'Rapid Testing', category: 'testing', details: methodsData['Rapid Testing'] },
    { name: 'Usability Labs', category: 'testing', details: methodsData['Usability Labs'] },
    { name: 'Continuous Testing', category: 'testing', details: methodsData['Continuous Testing'] },
    { name: 'Focused A/B Testing', category: 'testing', details: methodsData['Focused A/B Testing'] },
    { name: 'Rapid Usability Audit', category: 'testing', details: methodsData['Rapid Usability Audit'] },
    { name: 'Rapid UX Audits', category: 'testing', details: methodsData['Rapid UX Audits'] },
    { name: 'UX Bug Bash', category: 'testing', details: methodsData['UX Bug Bash'] },

    { name: 'Design Tokens', category: 'implementation', details: methodsData['Design Tokens'] },
    { name: 'Component Reuse', category: 'implementation', details: methodsData['Component Reuse'] },
    { name: 'Design System Adoption', category: 'implementation', details: methodsData['Design System Adoption'] },
    { name: 'Co-Design with Devs', category: 'implementation', details: methodsData['Co-Design with Devs'] },
    { name: 'Constraint-First Wireframes', category: 'implementation', details: methodsData['Constraint-First Wireframes'] },
    { name: 'Tech-Feasibility Notes', category: 'implementation', details: methodsData['Tech-Feasibility Notes'] },
    { name: 'Performance Budgets', category: 'implementation', details: methodsData['Performance Budgets'] },
    { name: 'Canary Releases', category: 'implementation', details: methodsData['Canary Releases'] },
    { name: 'Shared Component Libraries', category: 'implementation', details: methodsData['Shared Component Libraries'] },
    { name: 'Component Governance', category: 'implementation', details: methodsData['Component Governance'] },
    { name: 'Design System Scaling', category: 'implementation', details: methodsData['Design System Scaling'] },
    { name: 'Cross-Team Libraries', category: 'implementation', details: methodsData['Cross-Team Libraries'] },
    { name: 'Embedded UX Sessions', category: 'implementation', details: methodsData['Embedded UX Sessions'] },

    { name: 'Stakeholder Workshops', category: 'strategy', details: methodsData['Stakeholder Workshops'] },
    { name: 'Prioritization Workshops', category: 'strategy', details: methodsData['Prioritization Workshops'] },
    { name: 'Goal-Oriented Roadmaps', category: 'strategy', details: methodsData['Goal-Oriented Roadmaps'] },
    { name: 'Top-3 Metrics Dashboards', category: 'strategy', details: methodsData['Top-3 Metrics Dashboards'] },
    { name: 'Enterprise Design System', category: 'strategy', details: methodsData['Enterprise Design System'] },
    { name: 'One-Pager Decision Logs', category: 'strategy', details: methodsData['One-Pager Decision Logs'] },
    { name: 'Cross-Functional Workshops', category: 'strategy', details: methodsData['Cross-Functional Workshops'] },

    { name: 'Top-3 Friction Fix', category: 'optimization', details: methodsData['Top-3 Friction Fix'] },
    { name: 'Top-3 UX Debt List', category: 'optimization', details: methodsData['Top-3 UX Debt List'] },
    { name: 'Performance Audits', category: 'optimization', details: methodsData['Performance Audits'] },
    { name: 'Checkout Simplification', category: 'optimization', details: methodsData['Checkout Simplification'] },
    { name: 'Lightweight Deliverables', category: 'optimization', details: methodsData['Lightweight Deliverables'] }
  ]
}

// Default export for backwards compatibility
export const categorizedMethods: CategorizedMethod[] = getCategorizedMethods('en')

export function getMethodCategory(methodName: string, locale: string = 'en'): MethodCategory | 'General' {
  const allMethods = getCategorizedMethods(locale)
  const method = allMethods.find(m => m.name === methodName)
  return method ? method.category : 'General'
}
