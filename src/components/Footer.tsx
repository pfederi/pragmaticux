import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Pragmatic UX Design. All rights reserved.
          </p>
          <Link
            to="https://www.ergon.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src="/assets/images/ergon_logo.svg"
              alt="Ergon Informatik AG"
              className="h-4 w-auto grayscale hover:grayscale-0 transition-all"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

