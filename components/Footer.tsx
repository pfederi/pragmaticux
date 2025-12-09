export default function Footer() {
  return (
    <footer className="border-t py-4 sm:py-6 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
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
              className="h-5 sm:h-6 w-auto grayscale hover:grayscale-0 transition-all"
              width="120"
              height="40"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

