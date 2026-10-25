import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { EXPO } from "@/lib/motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
];

export function SiteNav() {
  const [location] = useLocation();
  const reduce = useReducedMotion();
  const projectPaths = ["/projects", "/product-management", "/mba"];
  const active = projectPaths.some((p) => location === p || location.startsWith(p + "/")) ? "/projects" : location;

  return (
    <nav className="sticky top-0 z-50 bg-[#f4f6f9] border-b border-slate-200" aria-label="Main">
      <div className="max-w-6xl mx-auto px-3 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-800 transition-colors" style={{ fontFamily: "'Manrope', sans-serif" }} data-testid="link-home-logo">
            <span className="sm:hidden" aria-label="Rezwan Islam, home">RI</span>
            <span className="hidden sm:inline">Rezwan Islam</span>
          </Link>

          <div className="flex items-center gap-0 sm:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={active === item.path ? "page" : undefined}
                className={`relative px-2 sm:px-4 min-h-[44px] ${item.path === "/" ? "hidden sm:inline-flex" : "inline-flex"} items-center text-[13px] sm:text-base font-semibold transition-colors duration-200 ${
                  active === item.path ? "text-blue-900" : "text-slate-600 hover:text-slate-900"
                }`}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
                {active === item.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 sm:left-4 sm:right-4 bottom-1.5 h-0.5 bg-blue-900"
                    transition={reduce ? { duration: 0 } : { duration: 0.2, ease: EXPO }}
                  />
                )}
              </Link>
            ))}
          </div>

          <a
            href="/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-[36px] px-2.5 sm:px-3 rounded-md border border-slate-300 text-[13px] sm:text-sm font-semibold text-slate-900 hover:border-blue-900 hover:text-blue-900 transition-colors"
            data-testid="nav-resume"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

