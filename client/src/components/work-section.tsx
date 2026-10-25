import { Reveal } from "@/components/reveal";
import { Row, SectionHeading } from "@/components/row";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const rows = [
  {
    href: "/experience#nbcuniversal",
    title: "Commerce tooling for Peacock",
    outcome: "Product work on the internal tool that builds the pages that turn visitors into Peacock subscribers, with engineering and design.",
    context: "NBCUniversal",
    year: "2026",
  },
  {
    href: "/experience#rocket-companies",
    title: "Plaid integration",
    outcome: "500% growth in direct account connections, across the Rocket Mortgage app used by roughly 1M clients a month.",
    context: "Rocket Companies",
    year: "2024",
  },
  {
    href: "/experience#welcome-to-chinatown",
    title: "AI curriculum for small businesses",
    outcome: "Built an AI curriculum for small businesses and trained 5 Entrepreneurship Assistance Centers in a New York State pilot.",
    context: "Welcome to Chinatown",
    year: "2026",
  },
  {
    href: "/experience#odynn",
    title: "Awayz booking platform",
    outcome: "20% more completed flight bookings on a travel-fintech platform serving roughly 15 clients.",
    context: "Odynn",
    year: "2025",
  },
  {
    href: "/projects#snag",
    title: "Snag",
    outcome: "Watches the YouTube channels you follow and texts you the promo code, sponsor link and expiry the moment a deal drops.",
    context: "Personal project",
    year: "2026",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="pb-16 sm:pb-24">
      <Reveal>
        <SectionHeading title="Selected work" />
        <div>
          {rows.map((r) => (
            <Row
              key={r.title}
              meta={
                <>
                  {r.year}
                  <br />
                  {r.context}
                </>
              }
            >
              <Link
                href={r.href}
                className="group block -mx-3 px-3 py-1 rounded outline-none transition-colors hover:bg-slate-100/60 focus-visible:bg-slate-100/60"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-900 group-focus-visible:text-blue-900">
                    {r.title}
                  </h3>
                  <ArrowRight className="h-4 w-4 shrink-0 text-blue-900 transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none" />
                </div>
                <p className="mt-1 text-slate-600 leading-snug">{r.outcome}</p>
              </Link>
            </Row>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
