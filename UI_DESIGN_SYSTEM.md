# UniMates UI Design System & External Repository Reference

This document outlines the modern UI/UX architecture, design inspirations, open-source repositories, and libraries utilized to engineer the **UniMates** landing page aesthetic (Apple VisionOS Liquid Glass & Adaptive Spatial Craft).

---

## 1. External Repositories & Design Inspiration

### [DavidHDev / react-bits](https://github.com/DavidHDev/react-bits)
**React Bits** is an open-source library of 100+ animated, interactive React components designed to serve as high-impact statement pieces. Instead of adding a heavy bundled dependency, we adapted core architectural patterns directly into clean, zero-bloat React components:

*   **`TrueFocus.jsx` (`src/components/TrueFocus.jsx`)**
    *   **Inspiration:** Inspired by React Bits' *True Focus* text animation.
    *   **Custom UniMates Implementation:** Engineered to separate phrases **strictly by the dot separator (`•`)** rather than word spaces. Entire semantic units (`"Verified Students"`, `"AI Compatibility"`, `"Secure Housing"`, `"Student Community"`) lock into sharp optical focus (`filter: blur(0px)`, `scale: 1.05`) on hover, while unhovered phrases soften to `filter: blur(2.5px)` with an animated Framer Motion focus frame (`layoutId="true-focus-frame"`).
*   **`SoftAurora.jsx` (`src/components/SoftAurora.jsx`)**
    *   **Inspiration:** Inspired by React Bits' *Soft Aurora / Liquid Ether* ambient background shaders.
    *   **Custom UniMates Implementation:** Replaced static circular background blobs with sweeping, multi-layered Aurora ribbon beams (`.animate-aurora-1`, `.animate-aurora-2`, `.animate-aurora-3`). Combines warm sunrise orange (`#df4f00`), deep iris violet (`#7c3aed`), and celestial sky blue (`#0284c7`) with a subtle SVG high-frequency film grain overlay (`mix-blend-overlay opacity-[0.018]`) to eliminate color banding.

### [naughtyduk / liquidGL](https://github.com/naughtyduk/liquidGL)
*   **Evaluation:** We explored the `liquid-gl` WebGL/Canvas refraction library for glass card distortion.
*   **Architectural Decision:** We opted for a **CSS-First Apple VisionOS Liquid Glass** approach (`backdrop-blur-xl`, custom inset specular glints, and clean translucent borders) rather than HTML2Canvas WebGL shaders. This guarantees **zero DOM z-index conflicts**, instantaneous page load times, and razor-sharp text clarity on Retina/4K displays.

---

## 2. Core Libraries & Dependencies

| Library | Version / Stack | Purpose in Codebase |
| :--- | :--- | :--- |
| **`motion/react`** (`framer-motion`) | `^12.x` | Powering spring-physics layout transitions, interactive dynamic match pills, and shared layout animations (`layoutId`). |
| **`lucide-react`** | `^1.x` | High-precision vector iconography used across Bento cards, navigation, and trust badges. |
| **`lenis`** | `^1.x` | Providing buttery-smooth inertia page scrolling (`SmoothScroll.jsx`) that synchronizes cleanly with CSS parallax layers. |
| **Tailwind CSS v4** (`@tailwindcss/vite`) | `^4.x` | Modern CSS-first design system utilizing `@theme` utility tokens, backdrop blur modifiers, and custom keyframes. |

---

## 3. Key Component Architecture

### A. Apple VisionOS Quiet Liquid Glass (`Navbar.jsx` & `FeatureBento.jsx`)
*   **Philosophy:** Intent-based, calm translucency with subtle surface lighting.
*   **Styling Recipe:**
    ```css
    /* Serene Liquid Glass Container */
    bg-white/40 hover:bg-white/50 backdrop-blur-xl border border-white/70 
    shadow-[0_12px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.85)]
    ```
*   **Top Specular Glint:** Every glass pane includes an ultra-thin horizontal highlight representing top-edge light reflection:
    ```jsx
    <div className="absolute top-0 inset-x-10 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 pointer-events-none" />
    ```

### B. Interactive Surface Cursor Spotlight (`FeatureBento.jsx`)
*   Each Bento card captures `onMouseMove` relative coordinates (`mouse.x`, `mouse.y`) to project a gentle warm glow directly under the cursor:
    ```jsx
    background: `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, rgba(223, 79, 0, 0.12), transparent 65%)`
    ```

---

## 4. Custom CSS Keyframe Animations (`src/index.css`)

*   **`aurora-wave-1 / 2 / 3`:** Multi-axis rotational and stretch keyframes (`scaleX`, `scaleY`, `rotate`) over 22s–30s cycles for organic aurora ribbon motion.
*   **`gradient-x`:** Smooth horizontal background-position shifting for multi-stop gradient headings.
*   **`float-1 / 2 / 3`:** Gentle floating ambient animations.
