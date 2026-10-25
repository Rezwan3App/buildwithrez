import { Switch, Route, Redirect, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import { SiteNav } from "@/components/navigation";
import { SiteRail } from "@/components/site-rail";
import { EXPO } from "@/lib/motion";
import Home from "@/pages/home";

const Experience = lazy(() => import("@/pages/experience"));
const ProductManagement = lazy(() => import("@/pages/product-management"));
const MBA = lazy(() => import("@/pages/mba"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const main = document.getElementById("main");
    if (!id) {
      window.scrollTo(0, 0);
      main?.focus({ preventScroll: true });
      return;
    }
    // Lazy pages mount after navigation, so retry briefly until the target exists.
    let tries = 0;
    const timer = window.setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 20) {
        window.clearInterval(timer);
        el?.scrollIntoView();
        main?.focus({ preventScroll: true });
      }
    }, 50);
    return () => window.clearInterval(timer);
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();

  return (
    <motion.div
      key={location}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: EXPO }}
    >
      <ScrollToTop />
      <Suspense fallback={null}>
      <Switch location={location}>
        <Route path="/" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={ProductManagement} />
        <Route path="/projects/mba" component={MBA} />
        <Route path="/mba">{() => <Redirect to="/projects/mba" replace />}</Route>
        <Route path="/product-management">{() => <Redirect to="/projects" replace />}</Route>
        <Route path="/education">{() => <Redirect to="/experience#education" replace />}</Route>
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
      <SiteNav />
      <div className="lg:flex">
        <SiteRail />
        <main id="main" tabIndex={-1} className="flex-1 min-w-0 outline-none">
          <Router />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
