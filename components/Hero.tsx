import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 animate-gradient-x"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-snug sm:leading-normal md:leading-relaxed pb-2 sm:pb-3">
              Pragmatic UX Design
          </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed">
            Maximising impact without overcomplicating the process. A practical approach to user experience design that adapts to real-world conditions.
          </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#core-principles"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center sm:text-left"
              >
                Explore Core Principles
              </Link>
            <Link
                href="/decision-helper"
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center sm:text-left"
            >
                Try Decision Helper
            </Link>
            </div>
          </div>

          {/* Right side - Animated circles */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Outer rings */}
              <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border border-primary/15 rounded-full animate-spin-reverse-slow"></div>
              <div className="absolute inset-8 border border-primary/20 rounded-full animate-spin-slow"></div>

              {/* Middle layer */}
              <div className="absolute inset-16 border border-primary/25 rounded-full animate-pulse"></div>
              <div className="absolute inset-20 border border-primary/30 rounded-full animate-spin-reverse-slow"></div>

              {/* Inner circles */}
              <div className="absolute inset-24 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-28 border border-primary/40 rounded-full animate-spin-slow"></div>

              {/* Center element */}
              <div className="absolute inset-32 bg-primary rounded-full shadow-lg animate-pulse"></div>

              {/* Floating particles around the circle */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary/70 rounded-full animate-float-1"></div>
              <div className="absolute top-20 right-6 w-3 h-3 bg-primary/60 rounded-full animate-float-2"></div>
              <div className="absolute top-1/2 right-5 w-2 h-2 bg-primary/50 rounded-full animate-float-3"></div>
              <div className="absolute bottom-20 right-6 w-3 h-3 bg-primary/60 rounded-full animate-float-1"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary/70 rounded-full animate-float-2"></div>
              <div className="absolute bottom-20 left-6 w-3 h-3 bg-primary/50 rounded-full animate-float-3"></div>
              <div className="absolute top-1/2 left-5 w-2 h-2 bg-primary/60 rounded-full animate-float-1"></div>
              <div className="absolute top-28 left-16 w-3 h-3 bg-primary/55 rounded-full animate-float-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

