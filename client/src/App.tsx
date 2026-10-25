import { Switch, Route, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import { BackToTop } from "@/components/back-to-top";
import CustomCursor from "@/components/custom-cursor";
import { SiteNav } from "@/components/navigation";
import { EXPO } from "@/lib/motion";
import Home from "@/pages/home";

const Experience = lazy(() => import("@/pages/experience"));
const ProductManagement = lazy(() => import("@/pages/product-management"));
const MBA = lazy(() => import("@/pages/mba"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  const animationKey = location === "/product-management" ? "/projects" : location;

  return (
    <motion.div
      key={animationKey}
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
        <Route path="/product-management" component={ProductManagement} />
        <Route path="/mba" component={MBA} />
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
      <div id="main" tabIndex={-1}>
        <Router />
      </div>
      <BackToTop />
      <CustomCursor />
    </MotionConfig>
  );
}

export default App;
