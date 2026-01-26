import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/product-management", label: "Projects" },
  { path: "/mba", label: "MBA" },
  { path: "/workflow", label: "Workflow" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
          ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-emerald-400 transition-colors" data-testid="link-home-logo">
            RI<span className="text-emerald-500">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${
                  location === item.path
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
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
                  className="rounded-lg text-gray-400 hover:text-white hover:bg-white/5 h-9 w-9"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-[#0f172a]/95 backdrop-blur-xl border-white/5 p-0">
                <div className="flex flex-col gap-1 mt-16 px-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-4 rounded-xl text-base font-semibold transition-all ${
                        location === item.path
                          ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
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
