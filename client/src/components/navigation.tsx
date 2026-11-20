import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, FolderOpen, GraduationCap, Home, Mail, type LucideIcon } from "lucide-react";
import { Link, useLocation } from "wouter";
import { EXPO } from "@/lib/motion";

const navItems: { path: string; label: string; icon: LucideIcon }[] = [
  { path: "/", label: "Home", icon: Home },
  { path: "/experience", label: "Experience", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: FolderOpen },
  { path: "/education", label: "Education", icon: GraduationCap },
];

function useActivePath() {
  const [location] = useLocation();
  const normal = location.length > 1 ? location.replace(/\/$/, "") : location;
  const projectPaths = ["/projects", "/product-management", "/mba"];
  return projectPaths.some((p) => normal === p || normal.startsWith(p + "/")) ? "/projects" : normal;
}

export function SiteNav() {
  const active = useActivePath();
  const reduce = useReducedMotion();

  return (
    <header className="nav-float">
      <div className="nav-float-bar band-ink frost-ink flex items-center justify-between h-14 sm:h-16">
        <Link
          href="/"
          aria-label="Rezwan Islam, home"
          className="inline-flex items-center min-h-[44px] text-lg font-extrabold tracking-tight text-[var(--on-ink)] hover:text-[var(--blue-light)] transition-colors"
          data-testid="link-home-logo"
        >
          Rezwan Islam
        </Link>

        <nav aria-label="Primary" className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={active === item.path ? "page" : undefined}
              className={`relative isolate inline-flex items-center px-4 min-h-[44px] rounded-[10px] font-semibold transition-colors duration-150 ease-out ${
                active === item.path ? "text-[var(--on-ink)]" : "text-[var(--on-ink-2)] hover:text-[var(--on-ink)]"
              }`}
              data-testid={`nav-${item.label.toLowerCase()}`}
            >
              {item.label}
              {active === item.path && (
                <motion.span
                  layoutId="nav-tile"
                  className="nav-tile absolute inset-0 -z-10"
                  aria-hidden="true"
                  transition={reduce ? { duration: 0 } : { duration: 0.25, ease: EXPO }}
                />
              )}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}

/** Phone navigation: four tabs in thumb reach. Hidden from sm up, where the header nav takes over. */
export function MobileTabBar() {
  const active = useActivePath();
  const tab =
    "flex flex-1 min-w-0 flex-col items-center justify-center gap-1 min-h-[58px] px-0.5 text-[13px] max-[380px]:text-[11px] max-[380px]:tracking-tight font-bold leading-none transition-colors";

  return (
    <nav
      aria-label="Primary"
      className="band-ink frost-ink fixed inset-x-0 bottom-0 z-50 flex border-t border-[var(--ink-line)] pb-[env(safe-area-inset-bottom)] sm:hidden"
    >
      {navItems.map(({ path, label, icon: Icon }) => (
        <Link
          key={path}
          href={path}
          aria-current={active === path ? "page" : undefined}
          className={`${tab} relative isolate ${active === path ? "text-[var(--on-ink)]" : "text-[var(--on-ink-2)]"}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
          {label}
          {active === path && <span className="nav-tile absolute inset-x-0.5 inset-y-1.5 -z-10" aria-hidden="true" />}
        </Link>
      ))}
      <a href="/#contact" className={`${tab} text-[var(--on-ink-2)]`}>
        <Mail className="h-5 w-5" aria-hidden="true" />
        Contact
      </a>
    </nav>
  );
}
