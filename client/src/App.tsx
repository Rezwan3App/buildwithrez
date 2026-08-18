import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BackToTop } from "@/components/back-to-top";
import Home from "@/pages/home";
import Experience from "@/pages/experience";
import ProductManagement from "@/pages/product-management";
import MBA from "@/pages/mba";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const animationKey = location === "/product-management" ? "/projects" : location;

  const variants = prefersReducedMotion
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
        exit:    { opacity: 0, y: -4, transition: { duration: 0.15, ease: "easeIn" } },
      };

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={animationKey} {...variants}>
          <ScrollToTop />
          <Switch location={location}>
            <Route path="/" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={ProductManagement} />
            <Route path="/product-management" component={ProductManagement} />
            <Route path="/mba" component={MBA} />
            <Route component={NotFound} />
          </Switch>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <>
      <Router />
      <BackToTop />
    </>
  );
}

export default App;
