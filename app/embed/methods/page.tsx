import MethodsOverview from '@/components/MethodsOverview'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UX Methods Toolkit - Standalone Tool | Pragmatic UX Design',
  description: 'Browse and filter 51 practical UX methods. Find the perfect methodology for your project. Part of Pragmatic UX Design framework.',
  keywords: [
    'UX methods',
    'user research methods',
    'design methods',
    'usability testing',
    'UX toolkit',
    'standalone tool'
  ],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
}

export default function EmbedMethodsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with branding and back link */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Pragmatic UX Design</span>
              </Link>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Standalone Methods Toolkit</span>
            </div>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Full Framework
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">UX Methods Toolkit</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of 51 practical UX methods.
            Filter by category and find the perfect methodology for your project.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Part of the{' '}
            <Link href="/" className="text-primary hover:underline">
              Pragmatic UX Design framework
            </Link>
          </div>
        </div>

        <MethodsOverview />
      </div>

      {/* Footer */}
      <div className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Powered by{' '}
              <Link href="/" className="text-primary hover:underline">
                Pragmatic UX Design
              </Link>
              {' • '}
              <Link href="/about" className="hover:underline">
                Learn more
              </Link>
              {' • '}
              <Link href="/decision-helper" className="hover:underline">
                Try Decision Helper
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
