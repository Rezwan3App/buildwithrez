import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { usePageTitle } from "@/hooks/use-page-title";
import { Footer } from "@/components/footer";
import { ExternalLink, FileText, X, Youtube, BatteryCharging } from "lucide-react";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import alltrailsIcon from "@assets/image_1768252840170.png";

export default function ProductManagement() {
  usePageTitle("Projects");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 relative overflow-hidden hero-grid">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Projects
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl">
                Things I've built and product thinking I've put on paper: side projects I've shipped and PRDs I've written.
              </p>
            </div>
          </Reveal>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-800"></span>
              Personal Projects
            </h2>
            <div className="space-y-4">
              <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0">
                      <Youtube className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Snag</h3>
                      <p className="text-blue-800 font-medium">Get Texted the Promo Codes Buried in YouTube Videos</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/Rezwan3App/snag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <SiGithub aria-hidden="true" className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  Promo codes and sponsor deals get buried inside YouTube videos and vanish from your feed within days. I built Snag to watch the channels you follow, read each new video's description through a set of promo-detection rules, and text you the code, sponsor link, and expiry the moment it drops.
                </p>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does</h4>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Search for a YouTuber and add their channel to your watchlist.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Snag pulls each channel's RSS feed, no YouTube API key needed, and scans every new upload's description for deals.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>You get an SMS the moment a new code, sponsor link, or expiry date turns up.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 border-l-2 border-blue-800 pl-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-800 mb-4">Product Journey</p>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">01</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Ruthless MVP scoping</p>
                        <p className="text-slate-600">
                          I cut the first version to one loop: watch a channel, detect a deal, send a text. No accounts, no build step, just JSON files and a background job that re-scans every watched channel on an interval.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">02</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Skipping the official API</p>
                        <p className="text-slate-600">
                          YouTube's Data API means keys, quotas, and approval. I pulled new uploads straight from each channel's public RSS feed instead: zero keys, zero quota, and enough in the video description to find the deal.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">03</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Key takeaway</p>
                        <p className="text-slate-600">
                          Constraints are forcing functions. Avoiding the official API pushed me toward a simpler, cheaper build that I can keep running for next to nothing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mt-6">Bun · Hono · YouTube RSS · Twilio SMS · JSON storage</p>
              </div>
              </Reveal>

              <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shrink-0">
                      <BatteryCharging className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">WattFinder</h3>
                      <p className="text-blue-800 font-medium">Honest EV Charge-Time Predictions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center h-8 px-3 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">In progress</span>
                    <a
                      href="https://github.com/Rezwan3App/wattfinder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <SiGithub aria-hidden="true" className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  Public chargers advertise a sticker kilowatt rating that almost no car ever hits. I'm building WattFinder to replace that number with physics-based charge-time predictions, modeling real charging curves so drivers see how long a stop will actually take.
                </p>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does</h4>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Predicts charge time from a battery's real charging curve, not the charger's peak kW.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Models charging behavior across 3 EV platforms so estimates hold across different cars.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-slate-400 mt-6">Next.js · TypeScript · Postgres</p>
              </div>
              </Reveal>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sample PRDs</h2>
            <div className="space-y-6">
              <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <img loading="lazy" decoding="async" src={alltrailsIcon} alt="AllTrails" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          AllTrails "Journeys"
                        </h3>
                        <p className="text-blue-800 font-medium">
                          Curated Hiking Itineraries Feature
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">
                      I wrote a full PRD for a "Journeys" feature that lets users plan multi-hike itineraries with driving directions, amenities, and rest stops, killing the app-hop between AllTrails, Google Maps, and travel blogs.
                    </p>

                    <a
                      href="/attached_assets/AllTrails_Journeys_Curated_Hiking_Itineraries_1768253125440.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 btn-primary text-white rounded-lg text-sm font-semibold border-0"
                      data-testid="button-view-alltrails-prd"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View Full PRD
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="lg:w-80 shrink-0">
                    <button
                      onClick={() => setIsImageModalOpen(true)}
                      className="rounded-xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-900/10 transition-all cursor-zoom-in w-full"
                      data-testid="button-enlarge-wireframe"
                    >
                      <img loading="lazy" decoding="async"
                        src="/attached_assets/image_1768253142355.webp"
                        alt="AllTrails Journeys Figma Wireframe"
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                    <p className="text-xs text-slate-500 mt-2 text-center">Click to enlarge wireframe</p>
                  </div>
                </div>
              </div>
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-blue-300 transition-colors"
            data-testid="button-close-modal"
          >
            <X className="h-8 w-8" />
          </button>
          <img loading="lazy" decoding="async"
            src="/attached_assets/image_1768253142355.webp"
            alt="AllTrails Journeys Figma Wireframe - Full Size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
