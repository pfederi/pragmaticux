'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { getDecisionTree } from '@/data/decisionTree'
import { getPrinciples, getPrincipleById } from '@/data/principles'
import { getMethodInstructions, getCategorizedMethods, getMethodCategories, getMethodCategory, getMethodDescription } from '@/data/methods'
import { DecisionTreeResults } from '@/types/decisionTree'
import { useLanguage } from '@/contexts/LanguageContext'
import { STORAGE_KEYS, METHOD_CHIP_COLORS } from '@/lib/constants'

export default function DecisionHelper() {
  const { t, locale } = useLanguage()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [results, setResults] = useState<DecisionTreeResults | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const categorizedMethods = useMemo(() => getCategorizedMethods(locale), [locale])
  const methodCategories = useMemo(() => getMethodCategories(locale), [locale])

  const getChipColors = useCallback((methodName: string): string => {
    const category = getMethodCategory(methodName, locale).toLowerCase()
    return METHOD_CHIP_COLORS[category] || METHOD_CHIP_COLORS.all
  }, [locale])
  
  const decisionTree = useMemo(() => getDecisionTree(locale), [locale])
  const principles = useMemo(() => getPrinciples(locale), [locale])
  
  const questions = decisionTree.questions
  const currentQuestion = questions[currentQuestionIndex]
  
  const getMethodCategoryLabel = useCallback((methodName: string): string => {
    const category = getMethodCategory(methodName, locale)
    if (category === 'General') return 'General'
    return methodCategories[category].label
  }, [methodCategories, locale])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.DECISION_HELPER)
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          setCurrentQuestionIndex(parsed.currentQuestionIndex || 0)
          setUserAnswers(parsed.userAnswers || {})
          setResults(parsed.results || null)
          setShowResults(parsed.showResults || false)
          setIsEditing(parsed.isEditing || false)
        } catch (error) {
          console.warn('Failed to parse saved decision helper state:', error)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stateToSave = {
        currentQuestionIndex,
        userAnswers,
        results,
        showResults,
        isEditing,
      }
      localStorage.setItem(STORAGE_KEYS.DECISION_HELPER, JSON.stringify(stateToSave))
    }
  }, [currentQuestionIndex, userAnswers, results, showResults, isEditing])

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...userAnswers, [questionId]: value }
    setUserAnswers(newAnswers)

    const allAnswered = questions.every((q) => newAnswers[q.id])

    if (allAnswered) {
      evaluateResults(newAnswers)
    } else if (!isEditing && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      const prevQuestion = questions[currentQuestionIndex - 1]
      const newAnswers = { ...userAnswers }
      delete newAnswers[prevQuestion.id]
      setUserAnswers(newAnswers)
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const evaluateResults = useCallback((answers: Record<string, string>) => {
    const matchingRules = decisionTree.rules.filter((rule) => {
      return Object.entries(rule.if).every(([key, value]) => {
        return answers[key] === value
      })
    })

    const combinedResults: DecisionTreeResults = {
      principles: [],
      methods: [],
    }

    const projectPhaseRules = matchingRules.filter(rule =>
      Object.keys(rule.if).includes('project_phase')
    )
    const otherRules = matchingRules.filter(rule =>
      !Object.keys(rule.if).includes('project_phase')
    )

    otherRules.forEach((rule) => {
      if (rule.then.principles) {
        combinedResults.principles.push(...rule.then.principles)
      }
      if (rule.then.methods) {
        combinedResults.methods.push(...rule.then.methods)
      }
    })

    projectPhaseRules.forEach((rule) => {
      if (rule.then.principles) {
        combinedResults.principles.unshift(...rule.then.principles)
      }
      if (rule.then.methods) {
        combinedResults.methods.unshift(...rule.then.methods)
      }
    })

    combinedResults.principles = [...new Set(combinedResults.principles)].slice(0, 3)
    combinedResults.methods = [...new Set(combinedResults.methods)].slice(0, 6)

    setResults(combinedResults)
    setShowResults(true)
  }, [])

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setResults(null)
    setShowResults(false)
    setIsEditing(false)
    setSelectedMethod(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.DECISION_HELPER)
    }
  }

  const handleEditAnswer = (questionId: string) => {
    const questionIndex = questions.findIndex((q) => q.id === questionId)
    if (questionIndex !== -1) {
      setCurrentQuestionIndex(questionIndex)
      setShowResults(false)
      setIsEditing(true)
    }
  }

  const handleBackToResults = () => {
    const allAnswered = questions.every((q) => userAnswers[q.id])
    if (allAnswered) {
      evaluateResults(userAnswers)
    }
  }

  const getAnswerLabel = (questionId: string, value: string) => {
    const question = questions.find((q) => q.id === questionId)
    return question?.options.find((opt) => opt.value === value)?.label || value
  }

  const getEmailLink = (): string => {
    if (!results) return 'mailto:patrick.federi@ergon.ch'
    
    const subject = encodeURIComponent('Pragmatic UX Design Decision Helper Results')
    
    let body = 'Hello Patrick,\n\n'
    body += 'I used the Pragmatic UX Design Decision Helper and got the following recommendations:\n\n'
    
    body += 'My Situation:\n'
    Object.entries(userAnswers).forEach(([questionId, value]) => {
      const question = questions.find((q) => q.id === questionId)
      if (question) {
        body += `- ${question.label}: ${getAnswerLabel(questionId, value)}\n`
      }
    })
    body += '\n'
    
    if (results.principles.length > 0) {
      body += 'Recommended Principles:\n'
      results.principles.forEach((principleId) => {
        const principle = getPrincipleById(principleId, locale)
        if (principle) {
          body += `- ${principle.order}. ${principle.title}\n`
        }
      })
      body += '\n'
    }
    
    if (results.methods.length > 0) {
      body += 'Suggested Methods:\n'
      results.methods.forEach((method) => {
        body += `- ${method}\n`
      })
      body += '\n'
    }
    
    body += 'I would like to discuss how we can implement these principles and methods in my project.\n\n'
    body += 'Best regards'
    
    return `mailto:patrick.federi@ergon.ch?subject=${subject}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="approach" className="py-12 sm:py-16 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight pb-1">{t.decisionHelper.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-[75%] leading-relaxed">
            {t.decisionHelper.subtitle}
          </p>
        </div>

        <div className="bg-card border rounded-lg p-4 sm:p-6 md:p-8">
          {!showResults ? (
            <div>
              <div className="mb-10">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t.decisionHelper.questionOf.replace('{current}', (currentQuestionIndex + 1).toString()).replace('{total}', questions.length.toString())}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round((currentQuestionIndex / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-left">{currentQuestion.label}</h3>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex flex-col">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    className="w-full text-left p-3 sm:p-4 border rounded-lg hover:bg-muted hover:border-primary transition-colors text-sm sm:text-base"
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={handleBack}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← {t.decisionHelper.backButton}
                  </button>
                )}
                {isEditing && questions.every((q) => userAnswers[q.id]) && (
                  <button
                    onClick={handleBackToResults}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors"
                  >
                    {t.decisionHelper.backToResults}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-left">{t.decisionHelper.yourSituation}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {Object.entries(userAnswers).map(([questionId, value]) => (
                    <div key={questionId} className="border rounded-lg p-3 sm:p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex flex-col gap-1 flex-1">
                          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                            {questions.find((q) => q.id === questionId)?.label}
                          </span>
                          <span className="text-sm sm:text-base font-semibold">
                            {getAnswerLabel(questionId, value)}
                          </span>
                        </div>
                        <button
                          onClick={() => handleEditAnswer(questionId)}
                          className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 px-2"
                          title={t.decisionHelper.changeAnswer}
                        >
                          {t.decisionHelper.changeAnswer}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {results && results.principles.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-left">{t.decisionHelper.recommendedPrinciples}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.principles.map((principleId) => {
                      const principle = getPrincipleById(principleId, locale)
                      if (!principle) return null

                      return (
                        <Link
                          key={principleId}
                          href={`/principles/${principle.order}`}
                          className="group bg-card border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 flex flex-col h-full"
                        >
                          <div className="flex flex-col items-start gap-4 mb-6 min-h-[7rem]">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg">
                              {principle.order}
                            </div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-tight text-left">
                              {principle.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-5 flex-grow">{principle.summary}</p>
                          <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform mt-auto">
                            {t.common.readMore} →
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {results && results.methods.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-left">{t.decisionHelper.suggestedMethods}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {results.methods.map((method, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedMethod(method)}
                        className="bg-gradient-to-br from-card to-muted/50 border rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 text-left w-full group min-h-[140px] flex flex-col"
                      >
                        {/* Header with title and chip */}
                        <div className="flex items-center justify-between mb-4 gap-2">
                          <h4 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors flex-1 min-w-0">
                            {method}
                          </h4>
                          <span
                            className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium border border-white/60 whitespace-nowrap truncate ${getChipColors(method)}`}
                            aria-label={`Category: ${getMethodCategoryLabel(method)}`}
                            role="status"
                          >
                            {getMethodCategoryLabel(method)}
                          </span>
                        </div>

                        {/* Content area that expands */}
                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                            {getMethodDescription(method, locale)}
                          </p>
                          <div className="text-primary text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
                            {t.methods.learnMoreButton}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t">
                <button
                  onClick={handleRestart}
                  className="px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-primary/30 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold flex items-center gap-2 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  {t.decisionHelper.startOver}
                </button>
              </div>

              {/* CTA Section */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 sm:p-6 md:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{t.decisionHelper.needHelp}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                    {t.decisionHelper.needHelpDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a
                      href={getEmailLink()}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center text-sm sm:text-base"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      {t.cta.button}
                    </a>
                    <Link
                      href="/about"
                      className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-primary/30 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:scale-105 text-sm sm:text-base"
                    >
                      {t.cta.secondaryButton}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Method Details Modal */}
        {selectedMethod && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-cyan-400/40 rounded-2xl blur opacity-90"></div>
              <div className="relative bg-card/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
                {/* Sticky Header */}
                <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-white/10 p-6 sm:p-8 rounded-t-2xl">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl sm:text-2xl font-semibold">{selectedMethod}</h3>
                    <button
                      onClick={() => setSelectedMethod(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      aria-label="Close modal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
                  <div className="space-y-6">
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        {getMethodInstructions(selectedMethod, locale).description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-lg">{t.methods.modalHowToApply}</h4>
                      <ol className="space-y-2">
                        {getMethodInstructions(selectedMethod, locale).steps.map((step, index) => (
                          <li key={index} className="flex gap-3 items-center">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-sm leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {getMethodInstructions(selectedMethod, locale).tips.length > 0 && (
                      <div className="mb-20">
                        <h4 className="font-semibold mb-3 text-lg">{t.methods.modalTips}</h4>
                        <ul className="space-y-2">
                          {getMethodInstructions(selectedMethod, locale).tips.map((tip, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="text-primary text-lg leading-none mt-0.5">•</span>
                              <span className="text-sm leading-relaxed">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 sm:p-6">
                      <h4 className="font-semibold mb-2">{t.methods.modalNeedHelp}</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t.methods.modalNeedHelpDescription}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={getEmailLink()}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center text-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                          {t.methods.modalGetInTouch}
                        </a>
                        <Link
                          href="/about"
                          className="px-4 py-2 border-2 border-primary/30 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-sm text-center"
                        >
                          {t.methods.modalLearnMore}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
