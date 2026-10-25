import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center">
      <div className="px-6 max-w-md">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          That page is not here.
        </h1>
        <p className="text-slate-600 mb-6">
          The link may be old or mistyped. Here is where to go instead.
        </p>
        <nav className="flex gap-6 text-slate-900 font-medium">
          <Link href="/" className="hover:text-blue-900 underline underline-offset-4">Home</Link>
          <Link href="/experience" className="hover:text-blue-900 underline underline-offset-4">Experience</Link>
          <Link href="/projects" className="hover:text-blue-900 underline underline-offset-4">Projects</Link>
        </nav>
      </div>
    </div>
  );
}
