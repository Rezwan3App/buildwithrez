import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-slate-700 text-sm mb-6 text-center sm:text-left">
          Graduating May 2027 · Open to APM/PM roles in New York
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Rezwan Islam · New York
          </p>
          <a
            href="https://www.linkedin.com/in/rezwan-islam33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-800 transition-colors"
          >
            <FaLinkedin className="h-4 w-4" />
            Let's connect on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
