import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './globals.css'
import Layout from '@/components/Layout'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pragmatic UX Design",
  "description": "A practical framework for UX design with 8 core principles and 51 proven methods to maximize user experience impact.",
  "url": "https://www.pragmaticuxdesign.com",
  "author": {
    "@type": "Person",
    "name": "Patrick Federi",
    "url": "https://www.pragmaticuxdesign.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Pragmatic UX Design",
    "url": "https://www.pragmaticuxdesign.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.pragmaticuxdesign.com/decision-helper",
    "query-input": "required name=search"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "User Experience Design",
      "description": "The process of enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with a product."
    },
    {
      "@type": "Thing",
      "name": "UX Research Methods",
      "description": "Systematic investigation of user behaviors, needs, and motivations through observation techniques, task analysis, and other feedback methodologies."
    },
    {
      "@type": "Thing",
      "name": "Design Systems",
      "description": "A collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications."
    }
  ]
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pragmatic UX Design - Maximising impact without overcomplicating the process',
  description: 'Discover 8 practical UX principles and 51 proven methods to improve user experience. Interactive decision helper guides you to the most relevant UX practices for your project.',
  keywords: [
    'UX design',
    'user experience',
    'design principles',
    'UX methods',
    'user research',
    'usability testing',
    'design systems',
    'interaction design',
    'product design',
    'agile UX',
    'lean UX',
    'pragmatic design'
  ],
  authors: [{ name: 'Patrick Federi' }],
  creator: 'Patrick Federi',
  publisher: 'Pragmatic UX Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.pragmaticuxdesign.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.pragmaticuxdesign.com',
    title: 'Pragmatic UX Design - Maximising impact without overcomplicating the process',
    description: 'Discover 8 practical UX principles and 51 proven methods to improve user experience. Interactive decision helper guides you to the most relevant UX practices for your project.',
    siteName: 'Pragmatic UX Design',
    images: [
      {
        url: 'https://pragmaticux.design/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pragmatic UX Design - Practical UX Framework',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pragmatic UX Design - Maximising impact without overcomplicating the process',
    description: 'Discover 8 practical UX principles and 51 proven methods to improve user experience.',
    creator: '@pragmaticux',
    images: ['https://www.pragmaticuxdesign.com/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

