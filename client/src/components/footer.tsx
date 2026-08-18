import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-slate-600 text-sm">
              © 2026 Rezwan Islam · New York
            </p>
            <p className="text-slate-600 text-xs mt-1">
              Designed and built by me, no template. Last updated August 2026.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="https://www.linkedin.com/in/rezwan-islam33"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
