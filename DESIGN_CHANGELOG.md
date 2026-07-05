# Design Overhaul — July 2026

A record of the design improvement pass on buildwithrez.com, deployed July 4, 2026
(commit `9bef872`). The goal: make the site feel intentional and personal — not
AI-generated template slop.

## Tools used

### [Impeccable](https://github.com/pbakaus/impeccable) (by Paul Bakaus, Apache 2.0)

A design guidance system for AI coding agents. It provides 23 design commands
(audit, critique, polish, etc.) and 45 deterministic detector rules that catch
design anti-patterns — the visual tells that scream "AI made this" (side-tab
accent borders, purple gradients, overused fonts like Inter, identical card grids).

How it was used here:

- **`npx impeccable detect`** — scanned the codebase and found 5 anti-patterns:
  a side-tab border, Inter as the site font, and indigo/violet gradients.
- **`npx impeccable skills install`** — installed the skill pack into `.claude/`
  (kept local, gitignored — it's agent tooling, not site code).
- **`/impeccable init`** — captured the site's strategy in [PRODUCT.md](PRODUCT.md):
  audience (recruiters skimming in under a minute), personality (warm, bold,
  credible), and anti-references (generic SaaS landing page, flashy designer
  portfolio, plain resume dump).
- **`/impeccable critique`** — a dual-agent design review (independent design-director
  assessment + detector/browser evidence) that scored the homepage **27/40** on
  Nielsen's usability heuristics and produced the prioritized issue list below.

### [taste-skill](https://github.com/Leonxlnx/taste-skill) (by Leonxlnx, MIT)

Evaluated but not installed. It's a *generator* companion (injects design taste
before code is written) versus Impeccable's *critic* role (detects and fixes
problems in existing designs). For improving an already-built site, Impeccable
covered the need. Worth revisiting for greenfield redesigns.

## Changes

### Anti-pattern removal (detector findings)

- Replaced **Inter** with **Sora** (body) + **Manrope** (headings)
- Removed the side-tab `border-left` accent; the recommendation quote now uses a
  pull-quote treatment with an oversized quote mark
- Eliminated **every gradient** in the codebase (indigo/violet hero gradients,
  icon-tile gradients, gradient buttons → solid navy)

### One voice, one accent

- All accents unified to a **deep navy ramp** (`blue-800`/`blue-900`, brand
  `#1e3a8a`), tokenized in CSS as `--navy`, `--paper`, `--paper-deep`
- Killed stray blue-500/600/700, one indigo, and per-project teal/amber/slate accents
- Fixed background tint drift (nav had a leftover warm `#faf9f6` against the cool
  `#f4f6f9` body)
- **Deliberate exception**: the emerald "open to APM/PM roles" availability dot is
  the only green pixel on the site — a signal, not decoration
- MBA/project gradient icon tiles → quiet white bordered tiles with navy icons,
  matching the Education section's logo treatment
- Hero dot-grid background lightened (0.22 → 0.09 alpha) so it reads as texture

### Contact & page ending (critique P1)

- New navy **"Let's talk"** section closes the homepage — email, LinkedIn, and
  resume — so the last impression is an ask, not extracurriculars
- Email added to the footer on every page

### Mobile & accessibility (critique P0/P2)

- Removed `maximum-scale=1` — pinch-zoom works again (WCAG 1.4.4)
- All buttons raised to 44px+ touch targets
- Mobile hero reordered: photo first (compact), instead of two screens down
- Status line no longer wraps with a hanging "2027"
- Screen-reader title on the mobile menu; tooltips on truncated org names

### Polish (critique P3)

- Hero adds a **"See what I've shipped →"** link so recruiters reach the proof
  without the nav
- "Download Resume" → "Resume (PDF)" (matches transcript labeling)
- Misleading class names renamed (`.btn-gradient` → `.btn-primary`,
  `.animated-border` → `.pull-quote`); stale CSS comments corrected
- `fetchPriority="high"` on the hero image for faster largest-paint

## Verification

- `npx impeccable detect client` — **0 findings** (was 5)
- `npx tsc --noEmit` — clean
- Browser-tested at 1280px and 390px widths
- Deployed via the existing GitHub Pages workflow

## Follow-ups

- Dedicated Open Graph image for LinkedIn/Slack link previews
- Re-run `/impeccable critique` to track the 27/40 baseline score
- Consider whether the "table stakes" pull-quote excerpt is the strongest line
  from the recommendation letter
