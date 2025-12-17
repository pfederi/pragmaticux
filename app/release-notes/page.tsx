import { promises as fs } from 'fs'
import path from 'path'

export default async function ReleaseNotesPage() {
  const filePath = path.join(process.cwd(), 'RELEASE_NOTES.md')
  const content = await fs.readFile(filePath, 'utf8')

  return (
    <section className="py-12 sm:py-16 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            Release Notes
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full leading-relaxed">
            Stay up to date with the latest features, improvements, and fixes in Pragmatic UX Design.
          </p>
        </div>

        <div className="bg-card border rounded-lg p-6 sm:p-8 md:p-12">
          <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-muted-foreground">
            {content}
          </pre>
        </div>
      </div>
    </section>
  )
}
