import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
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
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={ProductManagement} />
        {/* old URL kept alive for anyone holding a shared link */}
        <Route path="/product-management" component={ProductManagement} />
        <Route path="/mba" component={MBA} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
        <BackToTop />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
