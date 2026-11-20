/**
 * Where each hero background element sits. One entry per element.
 *   x:    px from the page centre (the photo starts about 112px right of it)
 *   top:  % down the hero, below the floating nav
 *   show: false keeps it off the live site (it still appears in arrange mode)
 *
 * Current layout arranged by Rezwan in arrange mode (Nov 2026).
 *
 * Arrange mode: open the site with ?arrange to drag these around and toggle
 * them; the result is saved in that browser and can be copied as JSON, then
 * pasted back here to publish it.
 */
export type HeroItemId =
  | "booking"
  | "plaid"
  | "snag"
  | "haptic"
  | "stream"
  | "scan"
  | "compare"
  | "blueprint"
  | "lunch"
  | "events"
  | "chart"
  | "swot"
  | "supplyDemand"
  | "nameRocket"
  | "nameNbcu"
  | "nameOdynn"
  | "nameBlackstone";

export type HeroItem = { id: HeroItemId; x: number; top: number; show: boolean };

export const HERO_LAYOUT: HeroItem[] = [
  { id: "booking", x: 25, top: 6, show: true },
  { id: "plaid", x: -49, top: 63.1, show: true },
  { id: "snag", x: 44, top: 82.4, show: false }, // hidden while Snag is still being built
  { id: "haptic", x: 212, top: 3, show: false },
  { id: "stream", x: 389, top: 2, show: true },
  { id: "scan", x: 552, top: 19.3, show: true },
  { id: "compare", x: 403, top: 58.3, show: true },
  { id: "blueprint", x: 483, top: 77.6, show: true },
  { id: "lunch", x: 700, top: 8, show: false },
  { id: "events", x: 280, top: 86, show: false },
  { id: "chart", x: 320, top: 2, show: true },
  { id: "swot", x: 700, top: 46, show: false },
  { id: "supplyDemand", x: 790, top: 46, show: false },
  { id: "nameRocket", x: 430, top: 92, show: false },
  { id: "nameNbcu", x: 140, top: 92, show: false },
  { id: "nameOdynn", x: 700, top: 84, show: false },
  { id: "nameBlackstone", x: -170, top: 94, show: false },
];

export const HERO_LABELS: Record<HeroItemId, string> = {
  booking: "Flight booking phone (Odynn)",
  plaid: "Bank to home (Plaid, Rocket)",
  snag: "SAVE20 tag (Snag)",
  haptic: "Navigation pulse (haptic nav)",
  stream: "Streaming player (Peacock)",
  scan: "Barcode scanner (EatTrack)",
  compare: "Home comparison (Rocket)",
  blueprint: "Blueprint (Little Falcon)",
  lunch: "Lunch guide web app",
  events: "Amplitude event line (Awayz)",
  chart: "Small bar chart",
  swot: "SWOT grid (MBA)",
  supplyDemand: "Supply and demand (MBA)",
  nameRocket: "Name: Rocket Companies",
  nameNbcu: "Name: NBCUniversal",
  nameOdynn: "Name: Odynn",
  nameBlackstone: "Name: Blackstone LaunchPad",
};
