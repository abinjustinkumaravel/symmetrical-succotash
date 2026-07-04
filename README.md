# Abin Justinkumaravel — Personal Portfolio

World-class editorial portfolio for Abin J. — LLM Engineer, CTO, Model, Content Creator.

Built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, and full dark/light mode support.

---

## Photo Replacement Guide

The site uses designed placeholder gradients for all photo slots. To replace with real photos:

### Photo Slot Reference

| Slot | Used In | Recommended Size | Style Notes |
|------|---------|-----------------|-------------|
| **Photo A** | Hero (left panel) + Modeling (large) | 1200×1600px | Full/3/4 body portrait. GQ cover style. |
| **Photo B** | About (right panel) | 900×1200px | Face/upper body close-up. High contrast. |
| **Photo C** | Experience (floating) + Modeling (stacked) | 1200×900px | Working context. Laptop, office, or speaking. |
| **Photo D** | BeyondCode (background) + Modeling (strip) | 1600×900px | Lifestyle. Kalaripayattu, street shot, or casual. |

### Replacing Photos

1. Add photos to `/public/photos/`:
   ```
   public/photos/photo-a.jpg
   public/photos/photo-b.jpg
   public/photos/photo-c.jpg
   public/photos/photo-d.jpg
   ```

2. In each section, replace the placeholder `<div className="photo-placeholder">` with `<ParallaxImage>`:

   **Hero.tsx** — find the gradient motion.div and replace:
   ```tsx
   import ParallaxImage from "@/components/ui/ParallaxImage";

   <ParallaxImage
     src="/photos/photo-a.jpg"
     alt="Abin Justinkumaravel"
     priority
     speed={0.12}
     objectPosition="top center"
     className="absolute inset-0 w-full h-full"
   />
   ```

   Repeat the same pattern for About.tsx (Photo B), Experience.tsx (Photo C), and BeyondCode.tsx (Photo D).

3. Keep `<GrainOverlay />` layered on top — it adds the editorial film grain effect.

---

## Updating YouTube Videos

In `ContentCreator.tsx`, update the `VIDEOS` array with real data:

```tsx
const VIDEOS = [
  {
    title: "Your actual video title",
    gradient: "linear-gradient(135deg, #2D1B69 0%, #4F46E5 100%)",
    views: "5.2K views",
  },
];
```

For real YouTube thumbnails, replace the gradient div:
```tsx
<Image
  src={`https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg`}
  alt={video.title}
  fill
  style={{ objectFit: "cover" }}
/>
```

---

## Contact Form Integration

The form currently simulates a submit. To connect a real email service:

**With Resend (recommended):**
```bash
npm install resend
```

Create `app/api/contact/route.ts` and update `Contact.tsx`'s `onSubmit` to call it.

**With Formspree (zero backend):**
Change `<form>` action to your Formspree endpoint.

---

## Deployment (Vercel)

```bash
npm run build   # confirm zero errors
vercel          # deploy
vercel --prod   # promote to production
```

No special environment variables needed for the static version. Add email service keys if using the form backend.

---

## Local Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

---

## Design System

All colors use CSS variables (`var(--bg-primary)`, `var(--accent-warm)`, etc.) — never hardcoded hex values outside `globals.css`.

| Font | Class | Usage |
|------|-------|-------|
| Cormorant Garamond | `font-display` | Hero names, large headings |
| Outfit | `font-body` | Body text, descriptions |
| Syncopate | `font-label` | ALL CAPS labels, section tags |
| JetBrains Mono | `font-mono` | Technical labels, handles |

---

Built with Next.js & conviction · Nagercoil, Tamil Nadu 🇮🇳 · © 2025 Abin Justinkumaravel
