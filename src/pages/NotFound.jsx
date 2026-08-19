import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 text-center bg-ink">
      <div>
        <p className="font-display text-mint text-sm tracking-[0.2em] uppercase mb-4">
          Error 404
        </p>
        <h1 className="font-display text-5xl sm:text-6xl text-cream">
          Page not found
        </h1>
        <p className="mt-4 text-cream/70 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 font-display text-sm px-6 py-3.5 rounded-full bg-mint text-ink hover:bg-sky transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
