import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pragmaticux.design'

  const staticPages = [
    '',
    '/about',
    '/decision-helper',
    '/methods',
    '/books',
    '/release-notes',
    '/impressum',
  ]

  const embedPages = [
    '/embed/methods',
    '/embed/principles',
    '/embed/decision-helper',
  ]

  const principlePages = Array.from({ length: 8 }, (_, i) => `/principles/${i + 1}`)

  const allPages = [...staticPages, ...embedPages, ...principlePages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly' as const,
    priority: page === '' ? 1 : page.startsWith('/principles/') ? 0.8 : 0.9,
  }))
}
