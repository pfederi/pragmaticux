export default function Footer() {
  return (
    <footer className="border-t py-6 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Pragmatic UX Design. All rights reserved.
          </p>
          <a
            href="https://www.ergon.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src="/assets/images/ergon_logo.svg"
              alt="Ergon Informatik AG"
              className="h-6 w-auto grayscale hover:grayscale-0 transition-all"
              width="120"
              height="40"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

