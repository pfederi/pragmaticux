'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getPrinciples } from '@/data/principles'
import { Printer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useMemo } from 'react'

export default function FrameworkPrintPage() {
  const { t, locale } = useLanguage()
  const principles = useMemo(() => getPrinciples(locale), [locale])

  const workflowSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <g>
            <path d="M12 2C6.47 2 2 6.47 2 12c0 5.52 4.47 10 10 10 5.52 0 10-4.48 10-10 0-1.05-.17-2.06-.46-3 -.16-.48-.67-.75-1.14-.6 -.48.15-.75.66-.6 1.13 .24.77.37 1.59.37 2.45 0 4.51-3.67 8.18-8.19 8.18s-8.19-3.67-8.19-8.19 3.66-8.19 8.18-8.19c.85 0 1.68.13 2.45.37 .47.15.98-.12 1.13-.6 .15-.48-.12-.99-.6-1.14 -.95-.3-1.96-.46-3-.46Z"/>
            <path d="M12 6.54c-3.02 0-5.46 2.44-5.46 5.45 0 3.01 2.44 5.45 5.45 5.45 3.01 0 5.45-2.442 5.45-5.46 0-.51-.41-.91-.91-.91 -.51 0-.91.4-.91.9 0 2-1.63 3.63-3.64 3.63 -2.01 0-3.64-1.63-3.64-3.64 0-2.01 1.62-3.64 3.63-3.64 .5 0 .9-.41.9-.91 0-.51-.41-.91-.91-.91Z"/>
            <path d="M19.27 4.27c0-.37-.23-.7-.57-.84 -.34-.15-.74-.07-1 .19l-2.73 2.72c-.18.17-.27.4-.27.64v.98l-3.38 3.37c-.36.35-.36.93 0 1.28 .35.35.93.35 1.28 0l3.37-3.38h.98c.24 0 .47-.1.64-.27l2.72-2.73c.26-.26.33-.66.19-1 -.15-.34-.48-.57-.84-.57h-.46V4.2Z"/>
          </g>
        </svg>
      ),
      title: t.workflow.step1Title,
      description: t.workflow.step1Description,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <g fillRule="evenodd">
            <path d="M7 2h9c1.65 0 3 1.34 3 3v7.98c0 .17-.18.29-.34.24 -.53-.16-1.09-.24-1.67-.24 -1.45 0-2.78.51-3.82 1.36 -.14.1-.35.06-.47-.07 -.19-.2-.44-.31-.73-.31h-4c-.56 0-1 .44-1 1 0 .55.44 1 1 1h3.36c.19 0 .31.2.23.38 -.39.79-.6 1.67-.6 2.61 0 .93.21 1.82.59 2.61 .08.17-.04.38-.24.38H6.94c-1.66 0-3-1.35-3-3v-14c0-1.66 1.34-3 3-3Zm1 4c-.56 0-1 .44-1 1 0 .55.44 1 1 1h7c.55 0 1-.45 1-1 0-.56-.45-1-1-1H8Zm0 4c-.56 0-1 .44-1 1 0 .55.44 1 1 1h7c.55 0 1-.45 1-1 0-.56-.45-1-1-1H8Z"/>
            <path d="M17 15c2.2 0 4 1.79 4 4 0 2.2-1.8 4-4 4 -2.21 0-4-1.8-4-4 0-2.21 1.79-4 4-4Zm2.03 2.71c.29.29.29.76 0 1.06l-2 2c-.3.29-.77.29-1.07 0l-1-1c-.3-.3-.3-.77 0-1.07 .29-.3.76-.3 1.06 0l.46.46 1.46-1.47c.29-.3.76-.3 1.06 0Z"/>
          </g>
        </svg>
      ),
      title: t.workflow.step2Title,
      description: t.workflow.step2Description,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <g>
            <path d="M8 3c-.56 0-1 .44-1 1 0 .55.44 1 1 1h3c.55 0 1-.45 1-1 0-.56-.45-1-1-1H8Z"/>
            <path d="M7 15c-.56 0-1 .44-1 1 0 .55.44 1 1 1h4c.55 0 1-.45 1-1 0-.56-.45-1-1-1H7Z"/>
            <path d="M14.38 3.67l-7.29 8.95c-.25.29-.03.72.36.72h5.96c.3 0 .53.26.49.56l-.77 6.22c-.04.24.28.38.44.18l7.28-8.96c.24-.3.02-.73-.37-.73h-5.97c-.31 0-.54-.27-.5-.57l.76-6.23c.03-.25-.29-.39-.45-.19Z"/>
            <g>
              <path d="M4 7c-.56 0-1 .44-1 1 0 .55.44 1 1 1h4c.55 0 1-.45 1-1 0-.56-.45-1-1-1H4Z"/>
              <path d="M4 19c-.56 0-1 .44-1 1 0 .55.44 1 1 1h6c.55 0 1-.45 1-1 0-.56-.45-1-1-1H4Z"/>
            </g>
          </g>
        </svg>
      ),
      title: t.workflow.step3Title,
      description: t.workflow.step3Description,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path fillRule="evenodd" d="M3.25 9.84c.96-3.94 4.51-6.85 8.74-6.85 4.97 0 9 4.02 9 9 0 4.97-4.03 9-9 9 -3.34 0-6.25-1.82-7.8-4.5 -.28-.48-.12-1.09.36-1.37 .47-.28 1.08-.12 1.36.36 1.21 2.09 3.47 3.5 6.06 3.5 3.86 0 7-3.14 7-7 0-3.87-3.14-7-7-7 -3.2 0-5.9 2.14-6.74 5.07l-.72.43 -.4.23 -.35-.35 -.56-.56Z"/>
          <path d="M3.25 9.84l-.56-.56c-.4-.4-1.03-.4-1.42 0 -.4.39-.4 1.02 0 1.41l2 2c.32.32.82.38 1.22.15l2.5-1.5c.47-.29.62-.9.34-1.38 -.29-.48-.9-.63-1.38-.35l-.72.43 -.72.43 -.4.23 -.35-.35 -.56-.56Z"/>
        </svg>
      ),
      title: t.workflow.step4Title,
      description: t.workflow.step4Description,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-black p-0 sm:p-8 md:p-12 print:bg-white print:p-0">
      {/* Controls - Hidden during print */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex gap-4 print:hidden bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-white/20">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-xl transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.frameworkPrint.back}</span>
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all font-semibold hover:scale-105 active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>{t.frameworkPrint.downloadPdf}</span>
        </button>
      </div>

      <div className="flex flex-col items-center gap-0 print:gap-0 mt-16 print:mt-0 print:block print:w-full">
        
        {/* Page 1: Title & Approach */}
        <div className="print-page flex flex-col justify-between break-after-page">
          <div>
            <div className="mb-8">
              <h1 className="text-5xl font-extrabold mb-5 tracking-tight">
                <span className="text-[#040b1e] inline-block leading-tight">
                  Pragmatic UX Design
                </span>
              </h1>
              <p className="text-xl font-semibold mb-4 text-gray-900 leading-tight">
                Maximale Wirkung bei minimaler Prozess-Komplexität.
              </p>
              <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                Ein praxisnahes Framework für UX Design mit 8 Kernprinzipien und 51 bewährten Methoden, um den Impact deiner User Experience zu maximieren.
              </p>
            </div>

            <div className="pt-8 mb-8">
              <h2 className="text-4xl font-extrabold mb-12 tracking-tight">
                <span className="text-[#040b1e] inline-block leading-tight">
                  {t.workflow.title}
                </span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-center p-4 bg-gray-50/50 border border-gray-100 rounded-2xl">
                    <div className="flex-shrink-0 text-primary">
                      <div className="p-3 bg-white shadow-sm rounded-xl border border-gray-100">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-0.5">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page 2: Principles 1-3 */}
        <div className="print-page flex flex-col justify-between break-after-page">
          <div>
            <h2 className="text-4xl font-extrabold mb-10 tracking-tight">
              <span className="text-[#040b1e] inline-block leading-tight">
                {t.principles.title}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {principles.slice(0, 3).map((principle) => (
                <div key={principle.id} className="flex gap-6 items-start border-b border-gray-50 pb-4 last:border-0">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-sm">
                    {principle.order}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5 text-gray-900">{principle.title}</h3>
                    <div className="text-gray-600 text-sm leading-relaxed space-y-1.5">
                      {principle.summary.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page 3: Principles 4-6 */}
        <div className="print-page flex flex-col justify-between break-after-page">
          <div>
            <h2 className="text-4xl font-extrabold mb-10 tracking-tight">
              <span className="text-[#040b1e] inline-block leading-tight">
                {t.principles.title}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {principles.slice(3, 6).map((principle) => (
                <div key={principle.id} className="flex gap-6 items-start border-b border-gray-50 pb-4 last:border-0">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-sm">
                    {principle.order}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5 text-gray-900">{principle.title}</h3>
                    <div className="text-gray-600 text-sm leading-relaxed space-y-1.5">
                      {principle.summary.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page 4: Principles 7-8 */}
        <div className="print-page flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold mb-10 tracking-tight">
              <span className="text-[#040b1e] inline-block leading-tight">
                {t.principles.title}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {principles.slice(6, 8).map((principle) => (
                <div key={principle.id} className="flex gap-6 items-start border-b border-gray-50 pb-4 last:border-0">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-sm">
                    {principle.order}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5 text-gray-900">{principle.title}</h3>
                    <div className="text-gray-600 text-sm leading-relaxed space-y-1.5">
                      {principle.summary.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6 text-sm text-gray-400 flex justify-between mt-8">
            <span>© 2026 Ergon Informatik AG</span>
            <span>pragmaticuxdesign.com</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media screen {
          .print-page {
            width: 210mm;
            height: 297mm;
            padding: 15mm;
            margin: 20px auto;
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            position: relative;
          }
        }
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            background-color: white !important;
            border: none !important;
          }
          nav, footer, .no-print {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
            background: white !important;
            border: none !important;
          }
          /* Target the layout wrapper div */
          div.flex.flex-col.min-h-screen {
            background: white !important;
            border: none !important;
          }
          .print-page {
            width: 210mm;
            height: 297mm;
            padding: 15mm;
            margin: 0 !important;
            break-after: page;
            overflow: hidden;
            box-shadow: none !important;
            border: none !important;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            box-sizing: border-box;
            background: white !important;
          }
          /* Remove break-after from last page to avoid empty page */
          .print-page:last-child {
            break-after: auto;
          }
          .no-print {
            display: none !important;
          }
          /* Use solid blue color instead of gradient for print */
          h1 span, h2 span {
            color: #040b1e !important;
            line-height: 1.2 !important;
            padding-bottom: 0.1em !important;
          }
        }
      `}</style>
    </div>
  )
}
