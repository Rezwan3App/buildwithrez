import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EXPO } from "@/lib/motion";

type Section = { id: string; title: string; body: React.ReactNode };

const Ul = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 space-y-1.5">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const SECTIONS: Section[] = [
  {
    id: "problem",
    title: "Problem: planning a hiking trip means hopping between apps",
    body: (
      <>
        <p>
          I have used the AllTrails iOS app for years, so I looked at Reddit, YouTube and
          hikers I have met to see if others hit the same walls. Two problems came up.
        </p>
        <Ul
          items={[
            "Planning fatigue. People who plan a full day of several hikes bounce between AllTrails, Google Maps and travel blogs. There is no way to plan multiple hikes, get driving directions between them, and see suggested amenities, rest periods and warnings.",
            "The paywall moment. Users often hit the AllTrails+ paywall when they are already stuck with no signal or bad weather, needing offline maps or location sharing. The purchase feels like a grudge buy, not a planned one.",
          ]}
        />
      </>
    ),
  },
  {
    id: "users",
    title: "Users: the Active Traveler with limited time",
    body: (
      <>
        <p>
          The target segment is what I call the Active Traveler: someone visiting a national
          park, mountain or outdoor hub with limited time to plan the trip. They are tired of
          app-hopping and want it all in one app.
        </p>
        <p>
          My example persona is Tyler, 28, in Seattle. He has two days near Zion, is planning
          last minute, and does not want to dig through Reddit and YouTube. He opens
          Journeys, switches the location to Zion, filters for a 2 day trip, and gets hikes,
          rest spots, lunch suggestions, travel distances and suggested time per activity. He
          then wants the plan offline in case of an emergency, and buys AllTrails+ for a
          month.
        </p>
      </>
    ),
  },
  {
    id: "goals",
    title: "Goals and success metrics",
    body: (
      <>
        <p>
          The goal is to validate demand with an A/B test and find product-market fit before
          any monetization work. The primary KPIs:
        </p>
        <Ul
          items={[
            "Click rate on the new Journey button.",
            "Time spent in the Journey flow (lower is better).",
            "Daily active users after launch.",
            "Monthly active users after launch.",
            "Journey complete rate: how many users who start the flow finish it.",
          ]}
        />
      </>
    ),
  },
  {
    id: "requirements",
    title: "Key requirements: the MVP scope",
    body: (
      <>
        <p>The MVP is the smallest version that is still usable:</p>
        <Ul
          items={[
            "The first 100 to 200 journeys are admin curated for popular hiking spots and national parks.",
            "A vertical timeline that stacks trails in order, with breaks and amenities in between.",
            "Directions from one trail to the next, using Google Maps APIs.",
            "A summary header with total mileage, total elevation gain and estimated total duration.",
          ]}
        />
        <p>
          I rated it a medium lift: new data points, a maps API integration, and a new logic
          layer on the existing app. My sketch Jira board puts the MVP at roughly 4 to 5
          sprints.
        </p>
      </>
    ),
  },
  {
    id: "decisions",
    title: "Decisions and tradeoffs",
    body: (
      <Ul
        items={[
          "Curate by hand first. Journey data is scattered and there is no API to pull it from, so I chose a small admin-curated set over trying to automate it.",
          "Use Google Maps APIs for directions instead of building routing, which keeps the lift at medium.",
          "Test before building the whole thing. The research shows demand, but an A/B test of the MVP decides what comes next. A full build would take much longer because of integration issues and unforeseen bugs.",
          "Tie the feature to the paywall problem. Journeys lets people see the value of AllTrails+ (offline journey download, safety features) while planning, not in a crisis. Monetization only comes after product-market fit.",
        ]}
      />
    ),
  },
  {
    id: "next",
    title: "What I would do next",
    body: (
      <Ul
        items={[
          "Run the A/B test and read the KPIs above to decide the next steps.",
          "If it holds up and product-market fit is clear, move to monetization through AllTrails+.",
          "Then scope the full feature, accepting a longer timeline.",
        ]}
      />
    ),
  },
];

/** Stays in the DOM while closed, so aria-controls always resolves. `hidden` lands once the close animation ends. */
function Panel({ section, open }: { section: Section; open: boolean }) {
  const reduce = useReducedMotion();
  const [closing, setClosing] = useState(false);
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    setClosing(!open && !reduce);
  }

  return (
    <motion.div
      id={`prd-${section.id}`}
      role="region"
      aria-labelledby={`prd-btn-${section.id}`}
      hidden={!open && !closing}
      initial={false}
      animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.25, ease: EXPO }}
      onAnimationComplete={() => setClosing(false)}
      className="overflow-hidden"
    >
      <div className="max-w-[65ch] space-y-3 pb-5 leading-relaxed text-slate-700">{section.body}</div>
    </motion.div>
  );
}

export default function AllTrailsPRD() {
  const [open, setOpen] = useState<string>(SECTIONS[0].id);

  return (
    <div>
      <p className="mb-3 text-[15px] font-semibold text-slate-800">
        Concept PRD, written December 2025. Not shipped, and not affiliated with AllTrails.
      </p>
      <div className="border-t border-slate-300">
        {SECTIONS.map((s) => {
          const isOpen = open === s.id;
          return (
            <div key={s.id} className="border-b border-slate-300">
              <h4>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`prd-${s.id}`}
                  id={`prd-btn-${s.id}`}
                  onClick={() => setOpen(isOpen ? "" : s.id)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-3 py-3.5 text-left transition-colors hover:text-blue-900"
                >
                  <span className="min-w-0 font-semibold tracking-normal">{s.title}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-blue-900 transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </h4>
              <Panel section={s} open={isOpen} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
