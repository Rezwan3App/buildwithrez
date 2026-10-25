import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";

const cls = "hover:text-blue-900 underline underline-offset-4";

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
        <nav aria-label="Pages" className="flex flex-wrap gap-x-6 gap-y-2 text-slate-900 font-medium">
          <Link href="/" className={cls}>Home</Link>
          <Link href="/experience" className={cls}>Experience</Link>
          <Link href="/projects" className={cls}>Projects</Link>
          <a href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf" target="_blank" rel="noopener noreferrer" className={cls}>Resume</a>
          <a href="mailto:rezwan99@gmail.com" className={cls}>Email</a>
        </nav>
      </div>
    </div>
  );
}
