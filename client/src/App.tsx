import { Switch, Route, Redirect, useLocation } from "wouter";
import { lazy, Suspense, useEffect, useRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import { SiteNav, MobileTabBar } from "@/components/navigation";
import { Cursor } from "@/components/cursor";
import { EXPO } from "@/lib/motion";
import { track } from "@/lib/db";
import { RESUME_URL } from "@/lib/site";
import Home from "@/pages/home";

const Experience = lazy(() => import("@/pages/experience"));
const Education = lazy(() => import("@/pages/education"));
const ProductManagement = lazy(() => import("@/pages/product-management"));
const MBA = lazy(() => import("@/pages/mba"));
const Stats = lazy(() => import("@/pages/stats"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  const firstRender = useRef(true);
  useEffect(() => {
    const isFirstRender = firstRender.current;
    firstRender.current = false;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) {
      // A fresh page load leaves focus alone, so the first Tab reaches the skip link.
      if (isFirstRender) return;
      window.scrollTo(0, 0);
      document.getElementById("main")?.focus({ preventScroll: true });
      return;
    }
    // Lazy pages mount after navigation, so retry briefly until the target exists.
    let tries = 0;
    const timer = window.setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 20) {
        window.clearInterval(timer);
        el?.scrollIntoView();
        // Focus follows the scroll, so the next Tab continues from the target.
        el?.setAttribute("tabindex", "-1");
        el?.focus({ preventScroll: true });
      }
    }, 50);
    return () => window.clearInterval(timer);
  }, [location]);
  return null;
}

// One listener for all analytics: page changes, plus clicks on the links worth counting.
function Analytics() {
  const [location] = useLocation();
  useEffect(() => {
    if (location !== "/stats") track("page_view", location);
  }, [location]);
  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (window.location.pathname.startsWith("/stats")) return;
      const href = (e.target as Element | null)?.closest?.("a")?.getAttribute("href") ?? "";
      if (href === RESUME_URL) track("resume_download");
      else if (href.includes("snag-2232.onrender.com")) track("snag_open");
      else if (href.startsWith("mailto:")) track("email_click");
      else if (href.includes("linkedin.com")) track("linkedin_click");
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}

function Router() {
  const [location] = useLocation();
  // The prerendered page shows at once. Only moves between pages fade in.
  const firstPage = useRef(location);

  return (
    <motion.div
      key={location}
      initial={location === firstPage.current ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: EXPO }}
    >
      <Suspense fallback={null}>
      <Switch location={location}>
        <Route path="/" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={ProductManagement} />
        <Route path="/education" component={Education} />
        <Route path="/projects/mba" component={MBA} />
        <Route path="/stats" component={Stats} />
        <Route path="/mba">{() => <Redirect to="/projects/mba" replace />}</Route>
        <Route path="/product-management">{() => <Redirect to="/projects" replace />}</Route>
        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </motion.div>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EXPO }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-blue-900 focus:px-4 focus:py-2 focus:border focus:border-slate-300"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Analytics />
      <Cursor />
      <SiteNav />
      <main id="main" tabIndex={-1} className="flex-1 min-w-0 outline-none">
        <Router />
      </main>
      <MobileTabBar />
    </MotionConfig>
  );
}

export default App;
