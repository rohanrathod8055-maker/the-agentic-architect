# The Agentic Architect

**A Next.js 16 Portfolio with "Digital Industrial" Aesthetics.**

## 🌟 Features
*   **Vizcom-Inspired Aesthetic:** Stark black background (`#050505`), matte grey surfaces, and sharp white typography (Inter).
*   **Sketch-to-Reality Reveal:** A scroll-linked hero animation that simulates a rendering process using `framer-motion`.
*   **3D Tilt Cards:** Interactive bento-grid items that respond to mouse movement.
*   **Interactive Terminal:** A functioning command-line interface in the footer.
*   **Smooth Scrolling:** Integrated with `lenis` for premium inertia scrolling.

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

## 🛠️ Customization Guide

### 1. Vizcom Reveal Images
The hero section currently uses CSS placeholders. To use your own images:

1.  Save your "Wireframe/Sketch" image as `public/sketch.png`.
2.  Save your "Final Render" image as `public/render.png`.
3.  Edit `app/components/vizcom-reveal.tsx`:
    ```tsx
    // Replace the placeholder divs with:
    <Image src="/sketch.png" alt="Sketch" fill className="object-cover" />
    <Image src="/render.png" alt="Render" fill className="object-cover" />
    ```

### 2. Updating Projects
Edit the `projects` array in `app/page.tsx` to add your own work.

## 📦 Tech Stack
*   **Framework:** Next.js 16 (App Router)
*   **Styling:** Tailwind CSS v4
*   **Font:** Inter (via `next/font/google`)
*   **Animation:** Framer Motion
*   **Scroll:** @studio-freight/lenis or lenis
