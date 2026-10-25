import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const rows = [
  { href: "/experience#nbcuniversal", title: "Commerce tooling for Peacock", outcome: "Product management intern on internal tooling for Peacock.", context: "NBCUniversal", year: "2026" },
  { href: "/experience#rocket-companies", title: "Plaid integration", outcome: "500% growth in direct account connections.", context: "Rocket Companies", year: "2024" },
  { href: "/experience#welcome-to-chinatown", title: "AI training for small businesses", outcome: "Trained 5 Entrepreneurship Assistance Centers in a New York State pilot.", context: "Welcome to Chinatown", year: "2026" },
  { href: "/experience#odynn", title: "Awayz booking platform", outcome: "20% more completed flight bookings.", context: "Odynn", year: "2025" },
  { href: "/projects#snag", title: "Snag", outcome: "Texts you the promo code the moment a YouTube deal drops.", context: "Personal project", year: "2026" },
];

export function WorkSection() {
  return (
    <section id="work" className="py-12 md:py-16 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="eyebrow mb-4">Selected work</h2>
          <ul className="border-t border-slate-200">
            {rows.map((r) => (
              <li key={r.title} className="border-b border-slate-200">
                <Link
                  href={r.href}
                  className="group relative block py-4 outline-none focus-visible:bg-slate-100/60"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900">
                      {r.title}
                    </h3>
                    <span className="flex items-center gap-3 shrink-0 text-xs text-slate-500">
                      {r.year && <span>{r.year}</span>}
                      <ArrowRight className="h-4 w-4 text-blue-900 transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-focus-visible:translate-x-1 group-hover:duration-[180ms] motion-reduce:transition-none motion-reduce:transform-none" />
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 leading-snug">{r.outcome}</p>
                  <p className="mt-1 text-xs text-slate-500">{r.context}</p>
                  <span
                    aria-hidden
                    className="absolute left-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-blue-900 transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 group-hover:duration-[180ms] group-focus-visible:duration-[180ms] motion-reduce:hidden"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
