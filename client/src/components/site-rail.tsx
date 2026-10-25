import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { EXPO } from "@/lib/motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
];

const RESUME = "/attached_assets/Rezwan_Islam_Zicklin_Latest.pdf";

// Desktop identity rail: who, what, where to go. Mobile uses SiteNav instead.
export function SiteRail() {
  const [location] = useLocation();
  const reduce = useReducedMotion();
  const projectPaths = ["/projects", "/product-management", "/mba"];
  const active = projectPaths.some((p) => location === p || location.startsWith(p + "/")) ? "/projects" : location;

  return (
    <aside aria-label="Site" className="hidden lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:w-[300px] shrink-0 border-r border-slate-200 px-10 py-12">
      <Link href="/" className="block" aria-label="Rezwan Islam, home">
        <img
          src="/attached_assets/profile-headshot-640.webp"
          alt=""
          width={72}
          height={72}
          className="w-[72px] h-[72px] rounded-full object-cover"
        />
        <p className="mt-5 text-xl font-semibold text-slate-900" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Rezwan Islam
        </p>
      </Link>
      <p className="mt-2 text-sm text-slate-600 leading-snug">
        Product Management Intern, NBCUniversal
        <br />
        Baruch MBA, May 2027
      </p>
      <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        Open to full-time APM and PM roles
      </p>

      <nav aria-label="Primary" className="mt-12">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = active === item.path;
            return (
              <li key={item.path} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="rail-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-6 bg-blue-900"
                    transition={reduce ? { duration: 0 } : { duration: 0.2, ease: EXPO }}
                    aria-hidden="true"
                  />
                )}
                <Link
                  href={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`block py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-[transform,color] duration-200 motion-reduce:transition-none ${
                    isActive ? "translate-x-9 text-slate-900" : "text-slate-500 hover:text-slate-900 hover:translate-x-3"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto space-y-2 text-sm">
        <a href={RESUME} target="_blank" rel="noopener noreferrer" className="block text-slate-900 font-semibold hover:text-blue-900">
          Resume (PDF)
        </a>
        <a href="https://www.linkedin.com/in/rezwan-islam33" target="_blank" rel="noopener noreferrer" className="block text-slate-600 hover:text-blue-900">
          LinkedIn
        </a>
        <a href="mailto:rezwan99@gmail.com" className="block text-xs text-slate-500 hover:text-blue-900">
          rezwan99@gmail.com
        </a>
      </div>
    </aside>
  );
}
