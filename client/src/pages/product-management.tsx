import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { Footer } from "@/components/footer";
import { ExternalLink, FileText, X, Play, Youtube } from "lucide-react";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import alltrailsIcon from "@assets/image_1768252840170.png";
import linkedinIcon from "@assets/image_1768252917340.png";
import trackflowIcon from "@assets/newicon_1768433941445.png";
import trackflowScreenshot from "@assets/image_1768437718677.png";

export default function ProductManagement() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isTrackflowModalOpen, setIsTrackflowModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Projects
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl">
                Things I've built and product thinking I've put on paper — case studies, PRDs, and two shipped side projects.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Youtube className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Snag</h3>
                      <p className="text-blue-800 font-medium">Promo Codes from YouTube Videos, Without the Watching</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/Rezwan3App/snag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <SiGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  Promo codes and sponsor deals are buried inside long YouTube videos — viewers either scrub through sponsor reads or miss the discount entirely. I built Snag to scan a video's transcript and surface every promo code, sponsor offer, and limited-time deal with its exact timestamp.
                </p>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does</h4>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Paste a YouTube URL and get every deal extracted from the transcript in seconds.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Add a channel and Snag automatically scans its latest uploads for new offers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Every deal links to the exact moment it was mentioned, for instant verification.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                      <span>Copies any promo code straight to the clipboard from the results list.</span>
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
                          Cut the first version down to one core job: paste a link, get the codes. No accounts, no database, no build step — a JSON file and a zero-dependency frontend were enough to validate the idea.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">02</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Designing around a platform constraint</p>
                        <p className="text-slate-600">
                          YouTube blocks transcript requests from cloud servers. Instead of fighting it with proxies, I made local-first an explicit product decision — the app runs on the user's machine, fetching transcripts reliably with zero API keys or infrastructure cost.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">03</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Key takeaway</p>
                        <p className="text-slate-600">
                          Platform constraints aren't blockers — they're forcing functions that shape better architecture. The same lesson from TrackFlow's pivot, learned from the opposite direction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mt-6">TypeScript · Bun + Hono · YouTube Transcript API · Local-first</p>
              </div>
              </Reveal>

              <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <img src={trackflowIcon} alt="TrackFlow" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">TrackFlow</h3>
                      <p className="text-blue-800 font-medium">Private, Local-First Job Application Tracker</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://chromewebstore.google.com/detail/trackflow/ebgheidbnhlhnifaiggdbgiifkiklalh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all"
                      data-testid="button-chrome-store"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Chrome Store
                    </a>
                    <a 
                      href="https://youtu.be/Iz-j6F19p0s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 btn-gradient btn-shine text-white rounded-lg text-sm font-semibold border-0"
                      data-testid="button-watch-demo"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </a>
                    <a 
                      href="https://github.com/Rezwan3App/tracktern-extension"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-all"
                      data-testid="button-github"
                    >
                      <SiGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  I built TrackFlow, a privacy-focused browser extension that helps professionals organize their job search without spreadsheets — local-first, so user data never leaves the device.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="shrink-0">
                    <img 
                      src={trackflowScreenshot} 
                      alt="TrackFlow Extension Interface" 
                      className="rounded-xl border border-slate-200 shadow-lg w-44 cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setIsTrackflowModalOpen(true)}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">What it does</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                        <span>Parses and highlights salary ranges straight from job descriptions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                        <span>Scrapes and saves full job descriptions locally so postings aren't lost when they're taken down.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                        <span>Captures from any job board — Indeed, Greenhouse, and more — with automatic duplicate detection.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 mr-2 shrink-0"></span>
                        <span>Tracks application status on a drag-and-drop board with a clean, distraction-free UI.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-l-2 border-blue-800 pl-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-blue-800 mb-4">Product Journey</p>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">01</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Built with AI velocity</p>
                        <p className="text-slate-600">
                          Leveraged Cursor (AI-assisted coding) to rapidly prototype and ship Version 1 in under 48 hours. Used the speed of AI to focus on high-level product architecture and user experience rather than boilerplate code.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">02</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">The pivot — solving platform risk</p>
                        <p className="text-slate-600">
                          Version 1 was deprecated by LinkedIn due to platform policy changes around web scraping. Rather than patching, I treated this as an opportunity to re-architect the product - building a platform-agnostic solution with enhanced features and improved reliability.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-blue-800 font-semibold text-xs mt-0.5 shrink-0">03</span>
                      <div>
                        <p className="text-slate-900 font-medium mb-1">Key takeaway</p>
                        <p className="text-slate-600">
                          Learned that sustainable products require owning your data layer, not renting it from other platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mt-6">Chrome Extension API · Local Storage · Regex Parsing · Data Export · Advanced DOM Manipulation</p>
              </div>
              </Reveal>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Case Studies</h2>
            <div className="space-y-6">
              <Reveal>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                      <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">LinkedIn</h3>
                      <p className="text-blue-800 font-medium">The Location Transparency Gap</p>
                    </div>
                  </div>
                  <a 
                    href="/attached_assets/LinkedIn_Case_Study_1768252732588.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 btn-gradient btn-shine text-white rounded-lg text-sm font-semibold border-0"
                    data-testid="button-view-linkedin-case-study"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Case Study
                  </a>
                </div>

                <p className="text-slate-600">
                  I identified a critical friction point in LinkedIn's job search experience: candidates are forced to apply first and assess commute viability second. I propose "LinkedIn Location Intelligence" — a geospatial layer that visualizes job opportunities relative to the user's location, revealing commute clusters and transit access that are currently hidden by generic text labels.
                </p>
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
                        <img src={alltrailsIcon} alt="AllTrails" className="w-full h-full object-cover" />
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
                      I wrote a full PRD for a "Journeys" feature that lets users plan multi-hike itineraries with driving directions, amenities, and rest stops — killing the app-hop between AllTrails, Google Maps, and travel blogs.
                    </p>

                    <a 
                      href="/attached_assets/AllTrails_Journeys_Curated_Hiking_Itineraries_1768253125440.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 btn-gradient btn-shine text-white rounded-lg text-sm font-semibold border-0"
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
                      className="rounded-xl overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-zoom-in w-full"
                      data-testid="button-enlarge-wireframe"
                    >
                      <img 
                        src="/attached_assets/image_1768253142355.png" 
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
          <img 
            src="/attached_assets/image_1768253142355.png" 
            alt="AllTrails Journeys Figma Wireframe - Full Size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {isTrackflowModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsTrackflowModalOpen(false)}
        >
          <button
            onClick={() => setIsTrackflowModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-blue-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={trackflowScreenshot} 
            alt="TrackFlow Extension Interface - Full Size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
