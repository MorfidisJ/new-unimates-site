# UniMates Redesign Guide v2 — Corrected & Re-grounded

This replaces the original guide. Same goal — Vite + React + Tailwind, Awwwards-tier feel, your copy untouched — but rebuilt around what UniMates *actually is* (a Tinder-style roommate-matching app for students), with the outdated package names, licensing traps, and generic-agency defaults fixed.

---

## Part 1 — What UniMates actually is (the brief the first guide skipped)

The original guide treated this like a generic seed-stage SaaS pitch. It's not — it's a swipe-based matching app, and that's a gift for a design system, not a constraint. Pulled straight from unimates.net:

- **Hero:** "Swipe Right for the Right Roommate" / "The #1 roommate app for youth" — already short, punchy, swipe-metaphor-first.
- **Hero already shows three profile cards** — Alex Chen (Fine Arts, 2nd Year — Creative, Night owl, Coffee lover), Maya Singh (Computer Science, 3rd Year — Tech, Gaming, Organized), Jamie Wilson (Environmental Science, 1st Year — Eco-friendly, Yoga, Cooking). These are sitting right there, static, begging to be the interactive centerpiece.
- **"Why UniMates" section:** 6 self-contained features, each already icon + headline + one short paragraph (Smart Matching, Creative Profiles, Verified & Safe, Community Events, Housing Integration, Mobile-First).
- **"Our App Characteristics":** a 5-screen app-screenshot carousel (Find Roommates, My Profile, My Matches, House Hunting, Settings) in an iPhone-style frame.
- **"How It Works":** a genuine 4-step numbered sequence (Create Profile → Get Matched → Connect & Meet → Meet & Decide), each with sub-points.
- **About / Team / Press:** founder bios with LinkedIn links, six press logos (Καθημερινή, NewMoney, Voria.gr, etc.), university and accelerator backers.
- **Brand color is already set:** the site's `theme-color` meta tag is `#df4f00` — a warm, saturated orange. You don't need to invent an accent; you already have one.
- **Primary CTA everywhere is "Download App"**, linking out to Linktr.ee → App/Play Store. This is a mobile-acquisition funnel promoted through Instagram and TikTok links in the footer. **Most visitors will arrive on a phone, from a phone app.** Any design decision that only pays off with a mouse should be treated as a bonus, not a pillar.

Keep all of this copy exactly as-is, as instructed. Everything below maps *onto* it rather than replacing it with placeholder text.

---

## Part 2 — What worked in the original guide (kept)

- **Motion library as the animation engine.** Right call — you do need a proper spring-based animation library for this level of polish, Tailwind transitions alone won't get you there. (Package name is outdated — fixed in Part 5.)
- **Scroll-triggered reveal for the hero headline.** "Swipe Right for the Right Roommate" is eight words — short enough that a word-by-word reveal reads as intentional, not slow. Good fit, kept, but scoped tightly (see Part 3.4).
- **High-contrast, flat, off-white/charcoal base.** Sound direction for a modern feel. What needed fixing wasn't the base, just the "pick an electric orange or lime" instruction — you already have a signature accent (`#df4f00`), so use it instead of inventing a new one.
- **The bento grid *for the features section specifically*.** This is the one place a bento grid is earned rather than decorative: the six features are already uniform-shaped content units (icon, headline, one paragraph), which is exactly the content shape bento layouts are good at ranking by size and scanning quickly. Applying bento anywhere else on this page (About, Team) would be forcing content into a shape it doesn't have.
- **Component-based structure** (a scroll wrapper, a reusable button, a text-reveal component). Reasonable organization regardless of what's inside each one — kept, contents corrected below.

---

## Part 3 — What didn't work (and why)

### 3.1 Two of the three recommended packages are deprecated

`@studio-freight/lenis` and `@studio-freight/react-lenis` were renamed. Studio Freight became Darkroom Engineering, and both old package names are unmaintained — installing them today pulls in a dead dependency. The current package is simply `lenis`, and it now ships a React import (`lenis/react`) and an `autoRaf` option that removes the need to hand-roll a `requestAnimationFrame` loop.

Separately, **Framer Motion was rebranded to Motion** in 2025 and became an independent, framework-agnostic project. The old `framer-motion` package still installs and still works, but new projects should install `motion` and import from `motion/react` — same API, no rewrite needed beyond the import path.

### 3.2 Lenis's main selling point mostly doesn't apply to this funnel

Lenis is a good, lightweight library — current versions run *on top of* native scroll rather than replacing it, so sticky positioning, anchor links, and `IntersectionObserver` keep working. But by the library's own design, smoothing is **disabled by default on touch devices**, because convincingly faking native touch-scroll inertia isn't really possible — you end up fighting the OS's own momentum scrolling. Given that most UniMates traffic arrives on a phone from an Instagram or TikTok link, the "premium heavy scroll" feeling the original guide promises is really a desktop-only bonus, not the "essential," foundational upgrade it was framed as. Worth keeping, but as a light progressive enhancement behind a `prefers-reduced-motion` check (Part 6), not the first thing you build.

### 3.3 The magnetic button is the wrong place to spend your "one bold idea"

Three concrete problems with it as written, independent of the concept:
- It's a `mousemove`-driven effect — on the touch devices most visitors will use, `handleMouse` and `reset` never fire. It ships dead code for the majority of your audience.
- It hardcodes `bg-blue-600` for the hover-fill, which contradicts the "orange or lime accent" direction stated two sections earlier in the same guide, and now also contradicts your actual brand orange (`#df4f00`).
- It has no visible focus state, so a keyboard user tabbing to your download button sees nothing change.

More importantly: a magnetic button is a generic "cool agency site" trope — it shows up on those inspiration sites because it's a stock micro-interaction that fits *any* product. It doesn't say anything about UniMates specifically. Given you already have a swipe-based product with three profile cards sitting idle in your hero, that's the far more specific, defensible place to spend your interaction budget (Part 4). The magnetic button is fixed in Part 6 and kept as a nice-to-have for a secondary CTA, not the hero's centerpiece.

### 3.4 Word-by-word reveal doesn't belong on paragraphs

Fine on the one-line hero headline. Applied to body copy — like the "About UniMates" paragraph or the feature descriptions — it becomes an antipattern: it forces a fixed reading pace onto the visitor, delays how quickly they can scan a page they're probably skimming on a 5-inch screen, and (without extra handling) doesn't respect `prefers-reduced-motion` and can trigger layout shift as each `<span>` animates in. Scope it to short, headline-length strings only.

### 3.5 One of the two recommended fonts isn't free to use

Clash Display (Fontshare) is genuinely free for personal *and* commercial use — that one's fine. **PP Neue Montreal (Pangram Pangram) is not** — the version available for free download is explicitly a personal-use-only demo; a commercial license has to be purchased separately. Shipping it on a public marketing site without buying that license is a real legal exposure for a small startup, not a hypothetical one. Swapped for a confirmed free-for-commercial pairing in Part 8.

### 3.6 No accessibility or performance guardrails anywhere

Nothing in the original guide mentions `prefers-reduced-motion`, keyboard focus states, or the performance cost of a JS-driven scroll + animation stack on the exact mid-range Android phones this funnel is optimized to reach. For a page whose only job is converting a scroll into an app download, scroll jank and slow interaction responsiveness are conversion problems, not just polish problems. Added as a checklist in Part 9.

### 3.7 The "how to map your content" section was generic filler

The original guide's mapping instructions ("put your headline in TextReveal," "use a bento grid for your body text") never referenced UniMates' actual sections. Replaced with a real section-by-section table in Part 7.

---

## Part 4 — The core recommendation: make the *swipe* your signature move

Per the "one bold idea, everything else quiet" principle: this site gets one thing to be memorable for. A magnetic button is a stock choice. **A real, draggable swipe-card deck built from your actual three sample profiles is not** — it's literally a working demo of what the app does, it uses your existing content and photos with zero new copy, and it will not appear on any of the generic inspiration sites you linked, because none of them are swipe-matching products.

Concretely: replace the static three-card row in the hero with a single draggable card on top of a stack, built with Motion's `drag` gesture. Dragging right or left dismisses the card and cycles to the next profile, echoing the app's own UI. It's a few dozen lines of code (Part 6) and it's the one interactive element on the page a visitor will actually remember.

---

## Part 5 — Corrected stack & install

```bash
npm install motion lenis clsx tailwind-merge lucide-react
```

| Package | Replaces | Why |
|---|---|---|
| `motion` | `framer-motion` | Same library, current name; import from `motion/react`. Old `framer-motion` still works if you have a reason to keep it, but new installs should use `motion`. |
| `lenis` | `@studio-freight/lenis` | Renamed; old package is unmaintained. Ships `lenis/react` and an `autoRaf` option. |
| `lucide-react` | — | Kept from the original guide — fine choice for crisp line icons if you decide to move on from the emoji icons currently on the live site (optional, see Part 7). |

---

## Part 6 — Components

### 6.1 Smooth scroll wrapper (fixed)

```jsx
// src/components/SmoothScroll.jsx
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return; // respect OS-level setting, skip entirely

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: true, // Lenis 1.x can drive its own rAF loop — no manual loop needed
    });

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

### 6.2 Swipe deck — the signature hero element (new)

Built directly from the three profiles already on unimates.net.

```jsx
// src/components/SwipeDeck.jsx
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const PROFILES = [
  { name: 'Alex Chen', meta: 'Fine Arts · 2nd Year', tags: ['Creative', 'Night owl', 'Coffee lover'] },
  { name: 'Maya Singh', meta: 'Computer Science · 3rd Year', tags: ['Tech', 'Gaming', 'Organized'] },
  { name: 'Jamie Wilson', meta: 'Environmental Science · 1st Year', tags: ['Eco-friendly', 'Yoga', 'Cooking'] },
];

export default function SwipeDeck() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const current = PROFILES[index % PROFILES.length];

  return (
    <div className="relative h-80 w-64 mx-auto touch-pan-y">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 rounded-[2rem] bg-white shadow-xl p-6 flex flex-col justify-end cursor-grab active:cursor-grabbing"
          drag={prefersReducedMotion ? false : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 120) setIndex((i) => i + 1);
          }}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{
            x: 320,
            opacity: 0,
            rotate: 15,
            transition: { duration: prefersReducedMotion ? 0.15 : 0.35 },
          }}
          whileDrag={{ rotate: 8 }}
        >
          <p className="text-xs uppercase tracking-wide text-zinc-500">{current.meta}</p>
          <h3 className="text-2xl font-semibold text-zinc-900 mt-1">{current.name}</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-[#df4f00]/10 text-[#df4f00]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Non-mouse users and reduced-motion users still need a way to advance */}
      <button
        onClick={() => setIndex((i) => i + 1)}
        className="sr-only focus:not-sr-only focus:absolute focus:-bottom-10 focus:left-1/2 focus:-translate-x-1/2 text-sm underline"
      >
        Next profile
      </button>
    </div>
  );
}
```

Note the `sr-only` / `focus:not-sr-only` button: a drag gesture has no keyboard equivalent, so anyone navigating by keyboard or screen reader needs an actual button to move through the deck. This is a two-line fix that the original guide's components didn't include anywhere.

### 6.3 Magnetic button (fixed, demoted to secondary use)

Kept as an option — for a secondary link (e.g. "How it works" in the nav), not the primary "Download App" CTA, which should stay as plain and unmissable as possible.

```jsx
// src/components/MagneticButton.jsx
import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function MagneticButton({ children, href, onClick }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouse = (e) => {
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPosition({
      x: (clientX - (left + width / 2)) * 0.2,
      y: (clientY - (top + height / 2)) * 0.2,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative inline-block px-8 py-4 bg-[#111111] text-white rounded-full
                 font-medium tracking-wide overflow-hidden group
                 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-[#df4f00]"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-[#df4f00] translate-y-full
                       group-hover:translate-y-0 transition-transform
                       duration-300 ease-out z-0" />
    </Tag>
  );
}
```

Fixed: brand color instead of the mismatched blue, a visible focus ring, and the mouse-tracking math is skipped entirely on touch devices and for reduced-motion users instead of running uselessly in the background.

### 6.4 Text reveal (scoped)

```jsx
// src/components/TextReveal.jsx
import { motion, useReducedMotion } from 'motion/react';

// Use for short, headline-length strings only (roughly ≤10 words).
// Do not use on paragraph copy — see Part 3.4.
export default function TextReveal({ text, className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(' ');

  if (prefersReducedMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };
  const child = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 14, stiffness: 120 } },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span variants={child} key={i} className="mr-3 mb-1">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
```

### 6.5 Feature bento grid (accessibility-correct markup)

CSS Grid lets you place a cell anywhere visually, independent of where it sits in the HTML — which means it's easy to accidentally build a grid that *looks* fine but reads in a scrambled order to a screen reader or keyboard user. Keep the DOM order matching the logical/visual priority order, and use semantic tags per cell:

```jsx
// src/components/FeatureBento.jsx
const FEATURES = [
  { icon: '🤝', title: 'Smart Matching', body: 'Our ML-powered matching system connects you with flatmates who share your lifestyle, values, and living preferences for authentic compatibility.', size: 'md:col-span-2 md:row-span-2' },
  { icon: '🎨', title: 'Creative Profiles', body: 'Express yourself through multimedia profiles, mood boards, and creative content. Show your personality beyond just text and photos.' },
  { icon: '🔒', title: 'Verified & Safe', body: 'All users are university-verified with comprehensive safety features, background checks, and 24/7 support for peace of mind.' },
  { icon: '💬', title: 'Community Events', body: 'Join creative workshops, social mixers, and skill-sharing sessions to meet potential flatmates and build lasting friendships.' },
  { icon: '🏠', title: 'Housing Integration', body: 'Seamlessly compatible with verified student accommodations and coordinate with matched flatmates to secure your perfect shared space.' },
  { icon: '📱', title: 'Mobile-First', body: 'Designed for your lifestyle with a beautiful, responsive interface and easy access to all features on the go.' },
];

export default function FeatureBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto p-4">
      {FEATURES.map((f) => (
        <article
          key={f.title}
          className={`rounded-[2rem] bg-white p-8 flex flex-col justify-end ${f.size ?? ''}`}
        >
          <span aria-hidden="true" className="text-3xl mb-4">{f.icon}</span>
          <h3 className="text-xl font-semibold text-zinc-900">{f.title}</h3>
          <p className="text-zinc-600 mt-2">{f.body}</p>
        </article>
      ))}
    </div>
  );
}
```

"Smart Matching" gets the large anchor cell since it's the product's core value proposition — a bento grid needs one clear anchor or it reads as a flat card row rather than a ranked layout.

---

## Part 7 — Section-by-section content map

| Live site section | Existing copy (unchanged) | New treatment |
|---|---|---|
| Hero | "Swipe Right for the Right Roommate" / "The #1 roommate app for youth" | `TextReveal` on the headline; `SwipeDeck` (6.2) replacing the static three-card row; `MagneticButton` only if you add a secondary nav link — primary "Download App" stays a plain, high-contrast button |
| Why UniMates | 6 features, icon + headline + paragraph each | `FeatureBento` (6.5), one anchor cell for Smart Matching |
| Our App Characteristics | 5-screen phone-frame carousel | Keep as a horizontal-scroll or fade carousel; add a subtle `whileInView` fade/slide per screenshot — skip anything that hijacks scroll here, since this is already a self-contained interactive element |
| How It Works | Real 4-step sequence with sub-points | This is the one place numbered markers are earned — it's an actual ordered process. Vertical timeline with each step revealed via `whileInView`, no word-by-word text effects on the sub-point copy |
| About UniMates | Two-sentence mission paragraph | Plain paragraph, `TextReveal` only if you trim it to a single short line for the page; otherwise leave it a normal fade-in |
| Team | 4 founder cards with LinkedIn links | Simple grid, photo + name + role + link — no bento needed, these aren't a ranked set |
| Press / trust logos | 6-7 outlet logos, marquee-style | Keep as an infinite scroll marquee (cheap, standard, appropriate — this section's job is quick credibility, not delight) |
| Footer | Social links, contact, privacy policy | No animation needed |

---

## Part 8 — Typography & color (corrected)

| Role | Original guide's pick | Status | Corrected pick |
|---|---|---|---|
| Display | Clash Display | ✅ Free for personal *and* commercial use (Fontshare) — keep | Clash Display |
| Display/alt | PP Neue Montreal | ❌ Free version is personal-use only; commercial use requires a paid license from Pangram Pangram | General Sans (Fontshare, free commercial) or Inter (Google Fonts, OFL) |
| Body | — (unspecified) | — | Inter or General Sans, same family as display's regular weight for cohesion |

Color tokens — built from your existing brand, not invented:

```css
--ink: #111111;
--paper: #f8f8f8;
--accent: #df4f00;   /* your existing theme-color, not a new pick */
--accent-soft: #df4f0018; /* accent at low opacity, for tag backgrounds etc. */
```

---

## Part 9 — Non-negotiable production checklist

- [ ] Every animation component checks `prefers-reduced-motion` and provides a static fallback (done in 6.1–6.4 above; carry the pattern into anything new you build).
- [ ] Every interactive element has a visible `focus-visible` state — including the swipe deck's advance button.
- [ ] Drag/swipe gestures always ship a non-drag way to reach the same outcome (button, keyboard, or auto-advance).
- [ ] Screenshot carousel images are lazy-loaded and served responsively — this is the heaviest asset on the page and the one most likely to hurt load time on the mobile connections most visitors will have.
- [ ] Test the actual build on a mid-range Android phone, not just desktop Chrome — this is where the funnel's real traffic lives.
- [ ] Self-host Clash Display / General Sans with `font-display: swap` rather than pulling from a slow third-party CDN, so headline text doesn't disappear during load.
