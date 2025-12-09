'use client'

import { useState } from 'react'
import Link from 'next/link'
import { decisionTree } from '@/data/decisionTree'
import { principles, getPrincipleById } from '@/data/principles'
import { DecisionTreeResults } from '@/types/decisionTree'

export default function DecisionHelper() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [results, setResults] = useState<DecisionTreeResults | null>(null)
  const [showResults, setShowResults] = useState(false)

  const questions = decisionTree.questions
  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...userAnswers, [questionId]: value }
    setUserAnswers(newAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      evaluateResults(newAnswers)
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

  const evaluateResults = (answers: Record<string, string>) => {
    const matchingRules = decisionTree.rules.filter((rule) => {
      return Object.entries(rule.if).every(([key, value]) => {
        return answers[key] === value
      })
    })

    const combinedResults: DecisionTreeResults = {
      principles: [],
      methods: [],
    }

    matchingRules.forEach((rule) => {
      if (rule.then.principles) {
        combinedResults.principles.push(...rule.then.principles)
      }
      if (rule.then.methods) {
        combinedResults.methods.push(...rule.then.methods)
      }
    })

    // Remove duplicates and limit results
    combinedResults.principles = [...new Set(combinedResults.principles)].slice(0, 3)
    combinedResults.methods = [...new Set(combinedResults.methods)].slice(0, 6)

    setResults(combinedResults)
    setShowResults(true)
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setResults(null)
    setShowResults(false)
  }

  const getAnswerLabel = (questionId: string, value: string) => {
    const question = questions.find((q) => q.id === questionId)
    return question?.options.find((opt) => opt.value === value)?.label || value
  }

  return (
    <section id="approach" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-8">Find Your Principles</h2>

        <div className="bg-card border rounded-lg p-8">
          {!showResults ? (
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6">{currentQuestion.label}</h3>

              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    className="w-full text-left p-4 border rounded-lg hover:bg-muted hover:border-primary transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {currentQuestionIndex > 0 && (
                <button
                  onClick={handleBack}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Your Situation</h3>
                <div className="space-y-2">
                  {Object.entries(userAnswers).map(([questionId, value]) => (
                    <div key={questionId} className="flex justify-between p-3 bg-muted rounded">
                      <span className="text-sm font-medium">
                        {questions.find((q) => q.id === questionId)?.label}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {getAnswerLabel(questionId, value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {results && results.principles.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Recommended Principles</h3>
                  <div className="space-y-4">
                    {results.principles.map((principleId) => {
                      const principle = getPrincipleById(principleId)
                      if (!principle) return null

                      return (
                        <Link
                          key={principleId}
                          to={`/principles/${principle.order}`}
                          className="block p-4 border rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                              {principle.order}
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{principle.title}</h4>
                              <p className="text-sm text-muted-foreground">{principle.summary}</p>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {results && results.methods.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Suggested Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {results.methods.map((method, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleRestart}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
