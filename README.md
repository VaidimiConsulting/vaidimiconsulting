# Vaidimi Consulting — Full Website Codebase

## Setup (do this first)

This zip is now a complete, runnable Vite + React + TypeScript + Tailwind project.
After extracting it and opening the folder in VSCode:

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`). The red errors you saw
before were because `node_modules` didn't exist yet and there was no `package.json` /
`vite.config.ts` / `tsconfig.json` for VSCode to resolve imports or the `@/...` path alias
against — `npm install` fixes all of that. Tailwind wasn't working for the same reason: there
was no build pipeline actually compiling `tailwind.config.js` + `index.css` into real CSS.

---

Every dropdown menu item now has its own real, clickable page. All content lives directly
inside each page's own file (not in a shared data file) so you can open one file and edit
that page's text without hunting elsewhere.

## Structure

```
src/
  components/
    layout/
      Navbar.tsx      -> floating pill navbar, shrinks on scroll
      Footer.tsx       -> sitemap, newsletter, contact
      Layout.tsx       -> wraps every page in Navbar + Footer (already wired in App.tsx)
    ui/
      Button.tsx
      PageBanner.tsx   -> animated top banner used on every inner page
    templates/
      DetailPageTemplate.tsx  -> shared LAYOUT only (no content) used by most inner pages
  pages/
    Home.tsx
    Contact.tsx, Careers.tsx, Privacy.tsx, Terms.tsx, NotFound.tsx
    services/   -> ServicesListing.tsx + 6 individual service pages
    sector/     -> SectorListing.tsx + 6 individual sector pages
    insights/   -> InsightsListing.tsx + 6 individual insight pages
    who-we-are/ -> OurStory.tsx (index) + LeadershipTeam, MissionValues, Newsroom, CorporateResponsibility
    what-we-do/ -> WhatWeDoListing.tsx + 6 category pages
  App.tsx -> every route, all wrapped in <Layout>
```

## How to edit a page's content

Service content now lives in `src/data/services.ts`. Edit that single data file to update
service names, descriptions, sub-services, images, navigation, service cards, and detail
page content.

Pages like `OurStory.tsx`, `LeadershipTeam.tsx`, `Careers.tsx`, `Contact.tsx`, and the
`*Listing.tsx` pages don't use the shared template — they're fully custom, so their content
is inline JSX further down in the same file (look for comments marked `{/* Edit ... */}`).

## How to add a brand-new page

1. Add the service content to `src/data/services.ts`.
2. Copy one of the thin wrapper files in `src/pages/services/`.
3. In `App.tsx`, import the new file and add a `<Route path="..." element={<YourPage />} />`.
4. If it should appear in the navbar, add it to the relevant menu list in `Navbar.tsx`
   (and to `Footer.tsx` if it should appear in the footer sitemap too).

## Each section now has its own visual pattern

- **Services** → `DetailPageTemplate.tsx` — card-grid highlights, growth-chart illustration
  (`src/assets/illustrations/service-banner.svg`)
- **Sector** → `SectorDetailTemplate.tsx` — full-width map illustration
  (`sector-banner.svg`), alternating left/right highlight rows, horizontal stat strip
- **Insights** → `InsightDetailTemplate.tsx` — magazine layout with a featured image
  (`insight-banner.svg`), numbered article list, pulled-quote block
- **What We Do** → `WhatWeDoDetailTemplate.tsx` — network/capability-map illustration
  (`whatwedo-banner.svg`), sub-items as chips, "Connects to" strip
- **Who We Are** — already fully custom per page (Our Story, Leadership Team, Careers,
  Newsroom, Corporate Responsibility all have their own bespoke layouts)

All templates read from the same `data` object shape in each page file, so editing content
still works exactly the same way — only the visual layout differs per section.

Illustration images live in `src/assets/illustrations/*.svg` — replace any of these with a
real photo or a different image any time by swapping the file and keeping the same filename,
or updating the `import ... from '@/assets/illustrations/...'` line in that template.

## Accent colors per section

| Section     | Accent class    | Hex       |
|-------------|-----------------|-----------|
| Services    | `accent`        | `#E06B6B` (coral) |
| Sector      | `accent-blue`   | `#7FC4D9` (sky blue) |
| Insights    | `accent-gold`   | `#E8A93A` (mustard) |
| Who We Are  | `accent-sage`   | `#A8D5A0` (sage green) |
| What We Do  | `accent-green`  | `#639922` (deep green) |

## Full sitemap (all working routes)

- `/` — Home
- `/contact`, `/careers`, `/privacy-policy`, `/terms`
- `/services`, `/services/marketing-consulting`, `/services/it-consulting`,
  `/services/promotion-advertisement`, `/services/hr-consulting`,
  `/services/financial-consulting`, `/services/event-management`
- `/sector`, `/sector/msme`, `/sector/sme`, `/sector/agribusiness`, `/sector/logistics`,
  `/sector/financial-services`, `/sector/retail`
- `/insights`, `/insights/latest-articles`, `/insights/research-reports`, `/insights/whitepapers`,
  `/insights/case-studies`, `/insights/webinars-events`, `/insights/podcasts`
- `/who-we-are`, `/who-we-are/leadership-team`, `/who-we-are/mission-values`,
  `/who-we-are/newsroom`, `/who-we-are/corporate-responsibility`
- `/what-we-do`, `/what-we-do/strategy-growth`, `/what-we-do/digital-transformation`,
  `/what-we-do/business-units`, `/what-we-do/industry-solutions`,
  `/what-we-do/consulting-practices`, `/what-we-do/global-presence`
