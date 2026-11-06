import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { EMAIL, RESUME_URL } from "@/lib/site";

const line = "btn-line !px-3 sm:!px-6";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <header className="band-ink blueprint flex min-h-[calc(100svh-61px)] sm:min-h-[calc(100svh-69px)] flex-col justify-center pb-[calc(58px+env(safe-area-inset-bottom))] sm:pb-0">
      <div className="wrap py-8 sm:py-14">
        <h1>That page is not here.</h1>
        <p className="mt-4 text-[1.0625rem] sm:text-lg leading-relaxed">
          The link may be old or mistyped. Here is where to go instead.
        </p>
        <nav aria-label="Pages" className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
          <Link href="/" className="btn-cta col-span-2">Home</Link>
          <Link href="/experience" className={line}>Experience</Link>
          <Link href="/projects" className={line}>Projects</Link>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={line}>Resume</a>
          <a href={`mailto:${EMAIL}`} className={line}>Email</a>
        </nav>
      </div>
    </header>
  );
}
