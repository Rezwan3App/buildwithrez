# Portfolio Design Guidelines: Product Analyst/MBA Candidate

## Design Approach
**Reference-Based:** Drawing from Linear's crisp typography + Stripe's professional restraint + Notion's clean hierarchy. Dark-themed professional portfolio optimized for showcasing analytical work and executive presence.

## Core Design Principles
1. **Spacious Minimalism:** Generous negative space creates luxury and focus
2. **Typography-First:** Large, bold fonts establish authority and improve readability
3. **Subtle Sophistication:** Restrained accent usage for maximum impact
4. **Data-Informed Aesthetics:** Clean grids and structured layouts reflect analytical mindset

---

## Typography System

**Primary Font:** Inter or DM Sans (via Google Fonts)
**Secondary Font:** Same family, varied weights

**Scale:**
- Hero Headline: 4xl-6xl (72-96px desktop)
- Section Headers: 3xl-4xl (48-60px)
- Project Titles: 2xl-3xl (36-48px)
- Body Large: xl (20px)
- Body Standard: lg (18px)
- Captions: base (16px)

**Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 desktop, py-12 mobile
- Component gaps: 8-16 units
- Container max-width: 7xl (1280px)
- Content max-width: 4xl (896px) for text-heavy sections

**Grid Strategy:**
- Project showcases: 2-column desktop (grid-cols-1 lg:grid-cols-2)
- Skills/metrics: 3-column desktop (grid-cols-1 md:grid-cols-3)
- Case studies: Single column with max-w-4xl for readability

---

## Page Structure (5-6 Sections)

### 1. Hero Section (80vh minimum)
**Layout:** Asymmetric left-aligned content with large portrait image right
**Content:** 
- Name (6xl bold)
- Tagline: "Product Analyst | MBA Candidate" (2xl medium)
- One-line value proposition (xl)
- Two CTAs: "View Projects" (primary) + "Download Resume" (secondary)
- Scroll indicator at bottom

**Image:** Professional headshot or workspace environment, subtle gradient overlay

### 2. About/Intro (Full viewport)
**Layout:** 2-column split desktop, stacked mobile
**Left:** Concise bio (2-3 paragraphs, lg text, max-w-prose)
**Right:** Key metrics grid (3x2):
- Years Experience
- Projects Completed
- MBA Program + Year
- Core Skills/Tools
- Certifications
- Location/Availability

### 3. Featured Projects (2-3 case studies)
**Layout:** Alternating image-text blocks
**Each Project:**
- Large project image (full-bleed or contained with border-radius-lg)
- Category tag (subtle accent)
- Project title (3xl bold)
- Description (lg, 2-3 lines)
- Key metrics/impact (grid of 2-3 stats)
- "View Case Study" link with arrow icon

### 4. Skills & Expertise
**Layout:** Category-based grouping, 3-column desktop
**Categories:**
- Analytics Tools (Excel, SQL, Tableau, Python)
- Product Management (Roadmapping, A/B Testing, User Research)
- Business Strategy (Market Analysis, Financial Modeling)

Each skill with proficiency indicator (simple progress bar or dot system)

### 5. Experience Timeline
**Layout:** Vertical timeline, single column, max-w-4xl
**Each Entry:**
- Company logo placeholder (48px circle)
- Role title (2xl semibold)
- Company + dates (lg)
- 2-3 achievement bullets (base)
- Vertical line connector between entries

### 6. Contact/CTA Section
**Layout:** Centered content, py-24
**Content:**
- Headline: "Let's Connect" (4xl)
- Subtext encouraging reach-out (xl)
- Email button (large, prominent)
- Social links (LinkedIn, GitHub, Medium) - icon-only, horizontal row
- Optional: Simple contact form (Name, Email, Message) in max-w-md container

---

## Component Library

**Buttons:**
- Large size (px-8 py-4, text-lg)
- Rounded-lg border radius
- When overlaying images: backdrop-blur-md with semi-transparent background
- No hover states needed (handled by component)

**Cards (Project/Experience):**
- Subtle border (1px) or elevated with shadow-lg
- Rounded-xl corners
- Padding: p-8
- Hover: subtle scale transform (1.02)

**Icons:**
- Font Awesome or Heroicons via CDN
- 24px standard size, 32px for emphasis
- Used sparingly: navigation arrows, social links, skill indicators

**Navigation:**
- Fixed top bar, backdrop-blur
- Logo/name left, nav links right (About, Projects, Experience, Contact)
- Hamburger menu for mobile
- Minimal border-b separator

**Footer:**
- Minimal: Single row with copyright, social links, "Back to top" link
- py-12, border-t separator

---

## Images Section

**Hero Image:** Professional headshot or workspace photo (portrait orientation, 600x800px minimum)
- Placement: Right side of hero, occupying 40% width
- Treatment: Subtle gradient overlay for depth

**Project Images:** 3 high-quality screenshots or mockups
- Placement: Featured Projects section, alternating left/right
- Size: 800x600px minimum
- Treatment: Slight rounded corners (rounded-xl), optional subtle shadow

**Company Logos:** Timeline section placeholders (if applicable)
- Placement: Left of each experience entry
- Size: 48x48px circles
- Treatment: Monochrome or subtle color

All images should convey professionalism, clarity, and analytical work quality.

---

## Accessibility & Polish

- Maintain WCAG AA contrast ratios (especially critical in dark mode)
- Focus states: 2px accent-colored outline with offset
- Skip to main content link
- Semantic HTML structure (header, nav, main, section, footer)
- Consistent 8px baseline grid alignment