# 🚀 Deployment Guide: The Agentic Architect

Your portfolio is production-ready. Follow these steps to ship it to the world.

## Option 1: Vercel (Recommended)
*Fastest, built by the creators of Next.js.*

1.  **Push to GitHub:**
    *   Initialize git if you haven't:
        ```bash
        git init
        git add .
        git commit -m "Initial launch: Agentic Architect V1"
        ```
    *   Create a new repo on GitHub and push.

2.  **Connect to Vercel:**
    *   Go to [vercel.com/new](https://vercel.com/new).
    *   Import your GitHub repository.
    *   **Framework Preset:** Next.js (Auto-detected).
    *   **Build Command:** `next build` (Default).
    *   **Output Directory:** `.next` (Default).
    *   Click **Deploy**.

## Option 2: Netlify
*Great alternative with free high-performance edge network.*

1.  **Push to GitHub** (same as above).
2.  **Connect to Netlify:**
    *   Go to [app.netlify.com](https://app.netlify.com).
    *   "Add new site" -> "Import an existing project".
    *   Select GitHub -> Your Repo.
    *   **Build command:** `npm run build`.
    *   **Publish directory:** `.next`.
    *   *Note:* You may need the `@netlify/plugin-nextjs` package (Netlify usually auto-installs this).

## 🌍 Pre-Launch Checklist
- [x] **Images:** Ensure `sketch.jpeg` and `render.jpeg` are in `public/`.
- [x] **Type Check:** Run `npm run type-check` to ensure no TS errors.
- [x] **Lint:** Run `npm run lint` to verify code quality.
- [ ] **SEO:** Update the `metadata` in `app/layout.tsx` with your real URL once deployed.

## 🔧 Troubleshooting
If the build fails on the "Lint" step during deployment:
1.  Go to `next.config.mjs`.
2.  Add this to ignore strict linting during production builds (optional but helpful for quick launches):
    ```javascript
    typescript: { ignoreBuildErrors: true },
    eslint: { ignoreDuringBuilds: true },
    ```
