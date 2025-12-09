import { ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-8">About The Pragmatic UX Design Approach</h2>
        
        <div className="mb-12">
          <p className="text-xl text-muted-foreground mb-8">
            Pragmatic UX Design emerged from real-world challenges in product development, where traditional UX processes often clashed with business realities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Origin</h3>
              <p className="text-muted-foreground">
                Pragmatic UX Design was developed through hands-on experience working on diverse projects at Ergon, where I encountered teams with varying UX maturity, timelines, and constraints. Rather than forcing a one-size-fits-all approach, I learned to adapt UX methods to each unique context.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">The Philosophy</h3>
              <p className="text-muted-foreground">
                Pragmatic UX Design isn't about cutting corners—it's about being strategic. It's the result of countless projects where I discovered that the most impactful UX work happens when we focus on what truly matters for users and business goals, rather than following rigid processes.
              </p>
            </div>
          </div>
        </div>

        {/* Author Card */}
        <div className="bg-card border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Patrick Federi */}
            <div>
              <h3 className="text-xl font-bold mb-2">Patrick Federi</h3>
              <p className="text-primary font-medium mb-4">Head of UX, Ergon Informatik AG</p>
              <p className="text-muted-foreground mb-6">
                Experienced UX designer with a passion for user-centred design and digital innovation. Has extensive experience in various phases of the product development process - from conception, prototyping and testing to implementation and optimisation. Creator of Pragmatic UX Design, specifically adapting UX methods to project requirements for efficient, practical solutions. Also intensively involved with AI technologies in research and prototyping, exploring their potential for the future of UX design.
              </p>
              <a
                href="https://www.linkedin.com/in/federi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-border mx-auto" />

            {/* Ergon Informatik */}
            <div>
              <h3 className="text-xl font-bold mb-2">Ergon Informatik AG</h3>
              <p className="text-primary font-medium mb-4">Smart software for smart ambitions</p>
              <p className="text-muted-foreground mb-6">
                Leading software engineering company specializing in custom solutions and digital transformation
              </p>
              <a
                href="https://www.ergon.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

