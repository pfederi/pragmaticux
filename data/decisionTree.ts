import { DecisionTree } from '@/types/decisionTree'
import decisionTreeDataEn from '@/data/decision_tree.json'
import decisionTreeDataDe from '@/data/decision_tree.de.json'

export function getDecisionTree(locale: string = 'en'): DecisionTree {
  const data = locale === 'de' ? decisionTreeDataDe : decisionTreeDataEn
  return data as DecisionTree
}

// Default export for backwards compatibility
export const decisionTree: DecisionTree = decisionTreeDataEn as DecisionTree

