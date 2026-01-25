import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Product Experience" },
  { path: "/product-management", label: "Projects" },
  { path: "/mba", label: "MBA & Data Analytics" },
  { path: "/workflow", label: "Product Workflow" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-teal-500/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent hover:from-teal-300 hover:to-cyan-300 transition-all duration-300" data-testid="link-home-logo">
            RI
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  location === item.path
                    ? "text-teal-300 bg-teal-500/10 border border-teal-500/30 shadow-lg shadow-teal-500/5"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 h-10 w-10"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-[#0a0a0f]/95 backdrop-blur-xl border-l border-teal-500/10">
                <div className="flex flex-col space-y-2 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        location === item.path
                          ? "text-teal-300 bg-teal-500/10 border border-teal-500/30"
                          : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                      data-testid={`nav-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
