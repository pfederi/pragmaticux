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

export const getMethodDescription = (method: string): string => {
  const methodData = methods[method]
  if (methodData && methodData.description) {
    return methodData.description
  }
  return "A practical method to improve your UX process."
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

export const methodCategories: Record<MethodCategory, { label: string, color: string, description: string }> = {
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

export const categorizedMethods: CategorizedMethod[] = [
  // Research & Analysis
  { name: 'Contextual Inquiry', category: 'research', details: methods['Contextual Inquiry'] },
  { name: 'Task Analysis', category: 'research', details: methods['Task Analysis'] },
  { name: 'Deep Interviews', category: 'research', details: methods['Deep Interviews'] },
  { name: 'Lean Personas', category: 'research', details: methods['Lean Personas'] },
  { name: 'Executive Summaries', category: 'research', details: methods['Executive Summaries'] },
  { name: 'One-Page Findings', category: 'research', details: methods['One-Page Findings'] },
  { name: 'Analytics Audit', category: 'research', details: methods['Analytics Audit'] },
  { name: 'Conversion Funnel Analysis', category: 'research', details: methods['Conversion Funnel Analysis'] },
  { name: 'User Segmentation Analysis', category: 'research', details: methods['User Segmentation Analysis'] },

  // Strategy & Planning
  { name: 'Design Studio', category: 'design', details: methods['Design Studio'] },
  { name: 'Sketching Sessions', category: 'design', details: methods['Sketching Sessions'] },
  { name: 'Sketch Reviews', category: 'design', details: methods['Sketch Reviews'] },
  { name: 'Rapid Prototyping', category: 'design', details: methods['Rapid Prototyping'] },
  { name: 'Reusable Templates', category: 'design', details: methods['Reusable Templates'] },
  { name: 'Pattern Documentation', category: 'design', details: methods['Pattern Documentation'] },
  { name: 'Workflow Simplification', category: 'design', details: methods['Workflow Simplification'] },
  { name: 'Task Flow Redesign', category: 'design', details: methods['Task Flow Redesign'] },
  { name: 'Impact Mapping', category: 'design', details: methods['Impact Mapping'] },

  // Testing & Validation
  { name: 'Guerrilla Testing', category: 'testing', details: methods['Guerrilla Testing'] },
  { name: 'Rapid Testing', category: 'testing', details: methods['Rapid Testing'] },
  { name: 'Usability Labs', category: 'testing', details: methods['Usability Labs'] },
  { name: 'Continuous Testing', category: 'testing', details: methods['Continuous Testing'] },
  { name: 'Focused A/B Testing', category: 'testing', details: methods['Focused A/B Testing'] },
  { name: 'Rapid Usability Audit', category: 'testing', details: methods['Rapid Usability Audit'] },
  { name: 'UX Bug Bash', category: 'testing', details: methods['UX Bug Bash'] },

  // Implementation
  { name: 'Design Tokens', category: 'implementation', details: methods['Design Tokens'] },
  { name: 'Component Reuse', category: 'implementation', details: methods['Component Reuse'] },
  { name: 'Design System Adoption', category: 'implementation', details: methods['Design System Adoption'] },
  { name: 'Co-Design with Devs', category: 'implementation', details: methods['Co-Design with Devs'] },
  { name: 'Constraint-First Wireframes', category: 'implementation', details: methods['Constraint-First Wireframes'] },
  { name: 'Tech-Feasibility Notes', category: 'implementation', details: methods['Tech-Feasibility Notes'] },
  { name: 'Performance Budgets', category: 'implementation', details: methods['Performance Budgets'] },
  { name: 'Canary Releases', category: 'implementation', details: methods['Canary Releases'] },
  { name: 'Shared Component Libraries', category: 'implementation', details: methods['Shared Component Libraries'] },
  { name: 'Component Governance', category: 'implementation', details: methods['Component Governance'] },
  { name: 'Design System Scaling', category: 'implementation', details: methods['Design System Scaling'] },
  { name: 'Cross-Team Libraries', category: 'implementation', details: methods['Cross-Team Libraries'] },
  { name: 'Embedded UX Sessions', category: 'implementation', details: methods['Embedded UX Sessions'] },

  // Implementation
  { name: 'Design Tokens', category: 'implementation', details: methods['Design Tokens'] },
  { name: 'Component Reuse', category: 'implementation', details: methods['Component Reuse'] },
  { name: 'Design System Adoption', category: 'implementation', details: methods['Design System Adoption'] },
  { name: 'Co-Design with Devs', category: 'implementation', details: methods['Co-Design with Devs'] },
  { name: 'Constraint-First Wireframes', category: 'implementation', details: methods['Constraint-First Wireframes'] },
  { name: 'Tech-Feasibility Notes', category: 'implementation', details: methods['Tech-Feasibility Notes'] },
  { name: 'Performance Budgets', category: 'implementation', details: methods['Performance Budgets'] },
  { name: 'Canary Releases', category: 'implementation', details: methods['Canary Releases'] },
  { name: 'Shared Component Libraries', category: 'implementation', details: methods['Shared Component Libraries'] },
  { name: 'Component Governance', category: 'implementation', details: methods['Component Governance'] },
  { name: 'Design System Scaling', category: 'implementation', details: methods['Design System Scaling'] },
  { name: 'Cross-Team Libraries', category: 'implementation', details: methods['Cross-Team Libraries'] },
  { name: 'Embedded UX Sessions', category: 'implementation', details: methods['Embedded UX Sessions'] },

  // Strategy & Planning
  { name: 'Stakeholder Workshops', category: 'strategy', details: methods['Stakeholder Workshops'] },
  { name: 'Prioritization Workshops', category: 'strategy', details: methods['Prioritization Workshops'] },
  { name: 'Goal-Oriented Roadmaps', category: 'strategy', details: methods['Goal-Oriented Roadmaps'] },
  { name: 'Top-3 Metrics Dashboards', category: 'strategy', details: methods['Top-3 Metrics Dashboards'] },
  { name: 'Enterprise Design System', category: 'strategy', details: methods['Enterprise Design System'] },
  { name: 'One-Pager Decision Logs', category: 'strategy', details: methods['One-Pager Decision Logs'] },
  { name: 'Cross-Functional Workshops', category: 'strategy', details: methods['Cross-Functional Workshops'] },

  // Optimization
  { name: 'Top-3 Friction Fix', category: 'optimization', details: methods['Top-3 Friction Fix'] },
  { name: 'Top-3 UX Debt List', category: 'optimization', details: methods['Top-3 UX Debt List'] },
  { name: 'Performance Audits', category: 'optimization', details: methods['Performance Audits'] },
  { name: 'Checkout Simplification', category: 'optimization', details: methods['Checkout Simplification'] },
  { name: 'Lightweight Deliverables', category: 'optimization', details: methods['Lightweight Deliverables'] }
]
