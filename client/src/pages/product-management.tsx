import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExternalLink, Clock, FileText, X, Play, Sparkles, Download, Shield } from "lucide-react";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import alltrailsIcon from "@assets/image_1768252840170.png";
import linkedinIcon from "@assets/image_1768252917340.png";
import trackflowIcon from "@assets/newicon_1768433941445.png";
import trackflowScreenshot from "@assets/image_1768437718677.png";
import nexuspay1 from "@assets/nexuspay1_1769150384520.png";
import nexuspay2 from "@assets/nexuspay2_1769150384520.png";

export default function ProductManagement() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isTrackflowModalOpen, setIsTrackflowModalOpen] = useState(false);
  const [isNexusPayModalOpen, setIsNexusPayModalOpen] = useState(false);
  const [nexusPayModalImage, setNexusPayModalImage] = useState(nexuspay1);

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navigation />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Projects
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl">
              Case studies and PRDs showcasing product strategy, user research, and data-driven decision making.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#12161c] border border-transparent mb-10">
            <p className="text-gray-400 text-sm leading-relaxed">
              I leverage <span className="text-emerald-400 font-medium">RICE</span> for feature prioritization and <span className="text-emerald-400 font-medium">Agile</span> methodologies for iterative product development.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-emerald-500"></span>
              Personal Projects
            </h2>
            <div className="space-y-4">
              <div className="bg-[#12161c] border border-transparent rounded-2xl p-6 hover:border-emerald-500/30 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">NexusPay</h3>
                      <p className="text-emerald-400 font-medium">High-Performance Tokenization Engine</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://payment-project-gasuz8xx6f7ve9evjxrgxz.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 btn-gradient btn-shine text-white rounded-lg text-sm font-semibold border-0"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                    <a 
                      href="https://github.com/Rezwan3App/NexusPay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-all"
                    >
                      <SiGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">
                  A technical demonstration of a "de-scoped" payment gateway architecture. This project focuses on the Raw Core Engine - the cryptographic plumbing required to process financial data without ever exposing sensitive card information.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <img 
                    src={nexuspay1} 
                    alt="NexusPay Tokenization Vault" 
                    className="rounded-xl border border-gray-700 shadow-lg w-48 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => { setNexusPayModalImage(nexuspay1); setIsNexusPayModalOpen(true); }}
                  />
                  <img 
                    src={nexuspay2} 
                    alt="NexusPay Payment Processor" 
                    className="rounded-xl border border-gray-700 shadow-lg w-48 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => { setNexusPayModalImage(nexuspay2); setIsNexusPayModalOpen(true); }}
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-2">Core Features</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 shrink-0"></span>
                      <span><span className="text-white font-medium">Secure Vaulting Layer:</span> Implements AES-256 (Fernet) encryption to secure Primary Account Numbers (PAN) at rest.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 shrink-0"></span>
                      <span><span className="text-white font-medium">Blind Indexing:</span> Utilizes SHA-256 hashing to create searchable card "fingerprints," allowing merchants to recognize returning customers without decrypting the original data.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 shrink-0"></span>
                      <span><span className="text-white font-medium">PCI-DSS v4.0 Simulation:</span> Built to demonstrate compliance standards by ensuring the "Merchant" (the UI) never touches raw, unencrypted financial data.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 shrink-0"></span>
                      <span><span className="text-white font-medium">Real-Time Execution Log:</span> Features a live system console that reveals the backend handshakes, including Luhn algorithm validation, risk scoring, and ACID-compliant database writes.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="text-sm font-semibold text-white mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQLite (WAL Mode)", "AES-256 Encryption", "SHA-256 Hashing", "Streamlit", "Luhn Validation"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#12161c] border border-transparent rounded-2xl p-6 hover:border-emerald-500/30 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <img src={trackflowIcon} alt="TrackFlow" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">TrackFlow</h3>
                      <p className="text-emerald-400 font-medium">Private, Local-First Job Application Tracker</p>
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
                      className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-all"
                      data-testid="button-github"
                    >
                      <SiGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">
                  A privacy-focused browser extension that helps professionals organize their job search without spreadsheets. Built with a local-first architecture to ensure user data never leaves the device.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="shrink-0">
                    <img 
                      src={trackflowScreenshot} 
                      alt="TrackFlow Extension Interface" 
                      className="rounded-xl border border-gray-700 shadow-lg w-44 cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setIsTrackflowModalOpen(true)}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 shrink-0"></span>
                        <span><span className="text-white font-medium">Smart Salary Detector:</span> Automatically parses and highlights salary ranges from job descriptions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 shrink-0"></span>
                        <span><span className="text-white font-medium">Description Vault:</span> Instantly scrapes and saves full job descriptions locally to prevent data loss.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 shrink-0"></span>
                        <span><span className="text-white font-medium">1-Click Capture:</span> Works on any job board (Indeed, Greenhouse, etc.) with automatic duplicate detection.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 shrink-0"></span>
                        <span><span className="text-white font-medium">Visual Kanban:</span> Drag-and-drop status tracking with a clean, distraction-free UI.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-800/30 rounded-xl">
                  <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-blue-400">Product Journey</span>
                    <span className="text-xs text-gray-500 font-normal">Development & Iteration</span>
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-gray-300 mb-1">
                        <span className="mr-2">🛠</span>
                        <span className="text-white font-medium">Built with AI-Velocity</span>
                      </p>
                      <p className="text-gray-400 pl-6">
                        Leveraged Cursor (AI-assisted coding) to rapidly prototype and ship Version 1 in under 48 hours. Used the speed of AI to focus on high-level product architecture and user experience rather than boilerplate code.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-1">
                        <span className="mr-2">🔄</span>
                        <span className="text-white font-medium">The Pivot (Solving Platform Risk)</span>
                      </p>
                      <p className="text-gray-400 pl-6">
                        Version 1 was deprecated by LinkedIn due to platform policy changes around web scraping. Rather than patching, I treated this as an opportunity to re-architect the product - building a platform-agnostic solution with enhanced features and improved reliability.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-1">
                        <span className="mr-2">🚀</span>
                        <span className="text-white font-medium">Key Takeaway</span>
                      </p>
                      <p className="text-gray-400 pl-6">
                        Learned that sustainable products require owning your data layer, not renting it from other platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="text-sm font-semibold text-white mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Chrome Extension API", "Local Storage", "Regex Parsing", "Data Export", "Advanced DOM Manipulation"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Case Studies</h2>
            <div className="space-y-6">
              <div className="bg-[#12161c] border border-transparent rounded-2xl p-6 hover:border-emerald-500/30 card-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                      <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                      <p className="text-emerald-400 font-medium">The Location Transparency Gap</p>
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

                <p className="text-gray-400">
                  This case study identifies a critical friction point in LinkedIn's job search experience: candidates are forced to apply first and assess commute viability second. The study proposes "LinkedIn Location Intelligence" - a geospatial layer that visualizes job opportunities relative to the user's location, revealing commute clusters and transit access that are currently hidden by generic text labels.
                </p>
              </div>

              <div className="group bg-[#0f1219]/50 border border-gray-800/50 rounded-2xl p-6 opacity-60">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-7 w-7 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-500">
                      GTM Case Study
                    </h3>
                    <p className="text-gray-600">
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Sample PRDs</h2>
            <div className="space-y-6">
              <div className="bg-[#12161c] border border-transparent rounded-2xl p-6 hover:border-emerald-500/30 card-glow transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <img src={alltrailsIcon} alt="AllTrails" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          AllTrails "Journeys"
                        </h3>
                        <p className="text-emerald-400 font-medium">
                          Curated Hiking Itineraries Feature
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4">
                      A comprehensive PRD for a new "Journeys" feature that enables users to plan multi-hike itineraries with driving directions, amenities, and rest periods, eliminating the need to app-hop between AllTrails, Google Maps, and travel blogs.
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
                      className="rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all cursor-zoom-in w-full"
                      data-testid="button-enlarge-wireframe"
                    >
                      <img 
                        src="/attached_assets/image_1768253142355.png" 
                        alt="AllTrails Journeys Figma Wireframe"
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                    <p className="text-xs text-gray-500 mt-2 text-center">Click to enlarge wireframe</p>
                  </div>
                </div>
              </div>
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
            className="absolute top-4 right-4 p-2 text-white hover:text-emerald-400 transition-colors"
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
            className="absolute top-4 right-4 p-2 text-white hover:text-emerald-400 transition-colors"
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

      {isNexusPayModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsNexusPayModalOpen(false)}
        >
          <button
            onClick={() => setIsNexusPayModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-emerald-500 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={nexusPayModalImage} 
            alt="NexusPay Screenshot - Full Size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
