/**
 * Application-wide constants
 */

export const STORAGE_KEYS = {
  DECISION_HELPER: 'decisionHelper_state',
  COOKIE_CONSENT: 'cookie-consent',
  ANALYTICS_ENABLED: 'analytics-enabled',
  COOKIE_BANNER_FORCE_SHOW: 'cookie-banner-force-show',
} as const

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1280,
} as const

export const METHOD_CHIP_COLORS: Record<string, string> = {
  all: 'bg-gray-100/80 backdrop-blur-sm text-gray-800 border border-white/60',
  research: 'bg-blue-100/80 backdrop-blur-sm text-blue-800 border border-white/60',
  design: 'bg-purple-100/80 backdrop-blur-sm text-purple-800 border border-white/60',
  testing: 'bg-green-100/80 backdrop-blur-sm text-green-800 border border-white/60',
  implementation: 'bg-orange-100/80 backdrop-blur-sm text-orange-800 border border-white/60',
  strategy: 'bg-indigo-100/80 backdrop-blur-sm text-indigo-800 border border-white/60',
  optimization: 'bg-red-100/80 backdrop-blur-sm text-red-800 border border-white/60',
} as const
