import { ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-6">Ready to go Pragmatic?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Start applying these principles to your UX work today.{' '}
          <strong className="font-semibold text-foreground">
            Remember: context over process, impact over perfection.
          </strong>
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="https://medium.com/@federi/pragmatic-ux-maximising-impact-without-overcomplicating-design-6d92f3ee373d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Read the Full Article
          </a>
          <a
            href="https://www.linkedin.com/in/federi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border rounded-md hover:bg-muted transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

