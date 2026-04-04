import Link from "next/link"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold tracking-tighter mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Lost in the Vault</h2>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved to a new location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 font-medium hover:bg-card transition-colors"
          >
            <Search className="w-5 h-5" />
            Search
          </Link>
        </div>
      </div>
    </div>
  )
}
