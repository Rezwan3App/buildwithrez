import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { BackToTop } from "@/components/back-to-top";
import Experience from "@/pages/experience";
import ProductManagement from "@/pages/product-management";
import MBA from "@/pages/mba";
import ProductWorkflow from "@/pages/product-workflow";
import SimplePreview from "@/pages/simple-preview";
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
        <Route path="/" component={SimplePreview} />
        <Route path="/experience" component={Experience} />
        <Route path="/product-management" component={ProductManagement} />
        <Route path="/mba" component={MBA} />
        <Route path="/workflow" component={ProductWorkflow} />
        <Route path="/preview" component={SimplePreview} />
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
