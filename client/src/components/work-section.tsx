import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const rows = [
  { href: "/experience#rocket-companies", title: "Plaid asset verification", outcome: "Grew direct account connections over 500% on a mortgage app used by roughly 1M people monthly.", context: "Rocket Companies", year: "2024" },
  { href: "/experience#rocket-companies", title: "AI onboarding chatbot", outcome: "Cut banker escalations by 40% by designing what the bot resolved and what went to a banker.", context: "Rocket Companies", year: "2024" },
  { href: "/experience#odynn", title: "Awayz booking fixes", outcome: "Recovered 20% more completed flight bookings by tracing failures and prioritizing fixes.", context: "Odynn", year: "2025" },
  { href: "/experience#welcome-to-chinatown", title: "Courthouse lunch guide", outcome: "Launched a public web app guiding 1,500+ daily jurors to 40+ local lunch spots.", context: "Welcome to Chinatown", year: "2026" },
  { href: "/projects#snag", title: "Snag", outcome: "Shipped an app that scans new YouTube uploads for promo codes and texts them to you.", context: "Personal project", year: "2026" },
];

export function WorkSection() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <h2 className="mb-6 sm:mb-8">Shipped work</h2>
        <ul className="border-t-2 border-ink">
          {rows.map((r) => (
            <li key={r.title} className="border-b border-slate-300">
              <Link
                href={r.href}
                className="group grid grid-cols-[1fr_auto] gap-x-4 py-4 focus-visible:bg-white sm:grid-cols-[1fr_16.5rem_auto] sm:items-baseline sm:gap-x-8 sm:py-5"
              >
                <span className="min-w-0">
                  <h3 className="text-[1.1875rem] sm:text-xl font-bold transition-colors duration-150 ease-out group-hover:text-blue-900">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 leading-snug text-slate-700">{r.outcome}</p>
                </span>
                <ArrowRight
                  className="row-span-2 mt-1 h-5 w-5 text-blue-900 sm:col-start-3 sm:row-span-1"
                  aria-hidden="true"
                />
                <span className="mt-2 whitespace-nowrap label text-slate-600 sm:col-start-2 sm:row-start-1 sm:mt-0">
                  {r.context} &middot; {r.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
