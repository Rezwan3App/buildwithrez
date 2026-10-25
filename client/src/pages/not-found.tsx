import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { Page } from "@/components/row";
import { Footer } from "@/components/footer";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <Page>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-3">404</p>
      <h1 className="text-slate-900 mb-4">That page is not here.</h1>
      <p className="text-slate-600 mb-6">The link may be old or mistyped. Here is where to go instead.</p>
      <nav className="flex gap-6 text-slate-900 font-medium">
        <Link href="/" className="hover:text-blue-900 underline underline-offset-4">Home</Link>
        <Link href="/experience" className="hover:text-blue-900 underline underline-offset-4">Experience</Link>
        <Link href="/projects" className="hover:text-blue-900 underline underline-offset-4">Projects</Link>
      </nav>
      <Footer />
    </Page>
  );
}
