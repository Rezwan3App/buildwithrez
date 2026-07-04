import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <div className="min-h-screen w-full flex items-center justify-center hero-grid relative">
      <div className="text-center px-6">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          This page doesn't exist.
        </h1>
        <p className="text-slate-600 mb-8">
          The site was recently redesigned, so an old link may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 btn-gradient text-white rounded-lg font-semibold"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
