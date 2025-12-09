import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Pragmatic<span className="hidden md:inline"> </span>
            <span className="md:hidden"><br /></span>UX
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Maximising impact without overcomplicating design. A practical approach to user experience that adapts to real-world conditions.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/principles"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition-colors"
            >
              Explore Framework
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

