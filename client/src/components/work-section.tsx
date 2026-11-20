import type { CSSProperties } from "react";
import { ArrowRight, Columns2, Landmark, Plane, Tag, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { Link } from "wouter";

const rows: { href: string; title: string; outcome: string; context: string; year: string; icon: LucideIcon }[] = [
  { href: "/experience#rocket-companies", title: "Plaid asset verification", outcome: "Launched Plaid verification on a mortgage app used by roughly 1M people monthly, growing direct account connections over 500%.", context: "Rocket Companies", year: "2024", icon: Landmark },
  { href: "/experience#rocket-companies", title: "Home comparison feature", outcome: "Launched side-by-side home comparison on Rocket Homes in under two weeks, lifting engagement 20% and winning the June 2024 Tech Demo Award.", context: "Rocket Companies", year: "2024", icon: Columns2 },
  { href: "/experience#odynn", title: "Awayz booking fixes", outcome: "Built Amplitude tracking for 150+ events and shipped booking-flow fixes for payment and points errors, recovering 20% more completed flight bookings.", context: "Odynn", year: "2025", icon: Plane },
  { href: "/experience#welcome-to-chinatown", title: "Courthouse lunch guide", outcome: "Launched a public web app guiding 1,500+ daily jurors to 40+ local lunch spots.", context: "Welcome to Chinatown", year: "2026", icon: UtensilsCrossed },
  { href: "/projects#snag", title: "Snag", outcome: "Shipped an app that scans new YouTube uploads for promo codes and texts them to you.", context: "Personal project", year: "2026", icon: Tag },
];

export function WorkSection() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <h2 className="mb-6 sm:mb-8">Shipped work</h2>
        <ul className="border-t-2 border-ink">
          {rows.map((r, i) => {
            const Icon = r.icon;
            return (
              <li
                key={r.title}
                data-reveal=""
                style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
                className="border-b border-slate-300"
              >
                <Link
                  href={r.href}
                  className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-4 py-4 focus-visible:bg-white sm:grid-cols-[auto_minmax(0,1fr)_16.5rem_auto] sm:gap-x-8 sm:py-5"
                >
                  <span className="icon-tile col-start-1 row-start-1 row-span-2 sm:row-span-1" aria-hidden="true">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="col-start-2 row-start-1 min-w-0">
                    <h3 className="text-[1.1875rem] sm:text-xl font-bold transition-colors duration-150 ease-out group-hover:text-blue-900">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 leading-snug text-slate-700">{r.outcome}</p>
                  </span>
                  <ArrowRight
                    className="col-start-3 row-start-1 row-span-2 mt-1 h-5 w-5 text-blue-900 transition-transform duration-200 ease-out group-hover:translate-x-1 sm:col-start-4 sm:row-span-1"
                    aria-hidden="true"
                  />
                  <span className="col-start-2 row-start-2 mt-2 whitespace-nowrap label text-slate-600 sm:col-start-3 sm:row-start-1 sm:mt-1">
                    {r.context} &middot; {r.year}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
