import { promises as fs } from 'fs'
import path from 'path'

function parseMarkdown(content: string) {
  return content
    // Headers
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mb-4 mt-8 first:mt-0 text-foreground">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold mb-3 mt-6 text-foreground">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-medium mb-2 mt-4 text-foreground">$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4 class="text-base font-medium mb-2 mt-3 text-foreground">$1</h4>')

    // Bold text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')

    // Inline code
    .replace(/`(.+?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')

    // Links (simple pattern)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-primary/80 underline">$1</a>')

    // Lists
    .replace(/^- (.+)$/gm, '<li class="mb-1 ml-4">$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc list-inside mb-4 space-y-1">$&</ul>')

    // Paragraphs (split by double newlines and wrap in p tags)
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.trim() && !paragraph.includes('<h') && !paragraph.includes('<ul') && !paragraph.includes('<li')) {
        return `<p class="mb-4 leading-relaxed text-muted-foreground">${paragraph}</p>`
      }
      return paragraph
    })
    .join('')
}

export default async function ReleaseNotesPage() {
  const filePath = path.join(process.cwd(), 'RELEASE_NOTES.md')
  const content = await fs.readFile(filePath, 'utf8')

  // Remove the first line (main title) as we have our own
  const contentWithoutTitle = content.replace(/^# .*\n/, '')

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
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(contentWithoutTitle)
            }}
          />
        </div>
      </div>
    </section>
  )
}
