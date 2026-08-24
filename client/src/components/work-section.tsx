import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import rocketImage from "@assets/image_1767746681686.webp";

export function WorkSection() {
  return (
    <section id="work" className="py-20 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-3">Shipped work</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-10 max-w-xl">
            What I've built and owned
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured: Rocket */}
          <Reveal className="lg:col-span-3">
            <Link href="/experience">
              <div className="group h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-all duration-300 cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={rocketImage}
                    alt="Rocket Mortgage product work"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow mb-2">Rocket Mortgage · 2024</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                    Plaid Integration — 500% growth in direct account connections
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Led design and engineering for a Plaid bank-linking flow across the Rocket Mortgage app, used by roughly 1M clients a month.
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-blue-800 font-semibold text-sm group-hover:gap-2 transition-all">
                    See all experience <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Secondary column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* WtC */}
            <Reveal delay={0.08}>
              <Link href="/experience">
                <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300 cursor-pointer">
                  <p className="eyebrow mb-2">Welcome to Chinatown · 2026</p>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                    New York's first AI training program for small businesses
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Designed and taught an AI enablement curriculum for immigrant-owned storefronts across 5 pilot Economic Anchor Centers statewide.
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* Odynn */}
            <Reveal delay={0.14}>
              <Link href="/experience">
                <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300 cursor-pointer">
                  <p className="eyebrow mb-2">Odynn · 2025</p>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                    20% more completed bookings on a travel-fintech platform
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Owned QA and analytics for Awayz, a white-labeled booking platform serving roughly 15 clients. Prioritized defect fixes by client impact and built its first event taxonomy.
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
