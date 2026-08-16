# West Cobb Crush 2032 — Board-Ready Static Prototype

A static, no-build website: 11 HTML pages + `styles.css` + `components.js` +
`render.js` + `data.js` + `/assets`. No npm install, no framework, no
database, no server required beyond serving plain files.

**Status:** concept prototype, not yet an official West Cobb Crush / West
Cobb Girls Softball page. Every page carries a small "PROTOTYPE / CONCEPT
SITE" disclosure ribbon at the top, and the footer repeats that on every
page.

## Most recent update (Aug 2026)

- **Roster corrected** — `PLAYERS` in `data.js` now matches the mom-provided
  roster and positions exactly (Grey #1, Chelsie #2, Dylan #5, Mackenzie #6,
  Elle #10, Shannon #16, Sofia #21, Harper #22, Caroline #28, McKinley #33),
  plus an honest "Welcome to the Crush — roster spot reserved" card for the
  newest teammate until her info is ready.
- **Road to 2032 rebuilt** — the old invented years (2016/2018/2021/2023) are
  gone. `TIMELINE_ERAS` now uses honest eras (Extreme 8U, the move to Crush,
  a verified Aug 2023 Facebook post, 10U, 12U) plus two newly verified 2026
  milestones — 2-0 in World Series pool play (June 18) and the 12U World
  Series Runner-Up finish (June 22, real trophy photo included) — followed by
  a visually distinct "What's Ahead" ribbon (2027–2031, outlined/dashed
  cards, no invented specifics) leading into the Class of 2032 capstone.
- **Coach bios expanded** — Coach Woodman's and Coach Po's bios on
  `coaches.html` now include family-provided details (Hillgrove Hawks Gold,
  New Image Roofing, Coach Po's real estate work) clearly separated from
  independently-verified facts, all still marked pending each coach's
  confirmation.
- To keep building this out: fill in real dates for the "move to Crush,"
  confirm the coach bios, and swap the `future: true` timeline entries for
  real milestones as each season happens.

## How to open this locally

You don't need Replit for this — any static file server works, including
just opening `index.html` directly in a browser for a quick look (some
image paths may behave better through a real local server; see below).

**Quickest local server (if you have Python installed):**
```
cd wccrush
python3 -m http.server 8000
```
Then open `http://localhost:8000/index.html`.

**Or with Node:**
```
cd wccrush
npx serve .
```

**Deploying it for real:** this folder can be dragged-and-dropped or
connected as-is to GitHub Pages, Netlify, Cloudflare Pages, or Vercel — no
build step, no environment variables, no backend. Point the host at
`index.html` as the entry file and it just works.

### If you do want to use Replit
1. Create a new Repl using the **HTML/CSS/JS** template (not Node.js, not React).
2. Upload this entire `wccrush` folder, keeping the folder structure exactly
   as-is (`assets/photos` and `assets/players` must stay where they are).
3. Click **Run** — Replit serves `index.html` automatically.

## Site structure

| Page | File | What it is |
|---|---|---|
| Home | `index.html` | Hero, highlights, growth story, timeline preview, roster preview (6 of 9 players), stories preview, sponsor CTA, sponsor wall preview, media preview |
| Our Story / Road to 2032 | `our-story.html` | Full growth-story section + full vertical, expandable timeline |
| Team | `team.html` | Full 9-player roster |
| Coaches | `coaches.html` | "Coming soon" placeholder, matches site branding |
| Schedule & Results | `schedule.html` | "Coming soon" placeholder |
| Crush Stories | `crush-stories.html` | Full stories grid |
| Media | `media.html` | Full filterable media hub |
| Sponsors | `sponsors.html` | Sponsorship landing page — who/why/goal, highlights, what it funds, what a business receives, tiers, sponsor wall |
| Become a Sponsor | `become-a-sponsor.html` | Working prototype inquiry form (see below) |
| Contact | `contact.html` | Placeholder team contact info, sponsor pathway, privacy note |
| Community | `community.html` | "Coming soon" placeholder |

Every page shares the same header, navigation, mobile menu, and footer —
those live in **one file**, `components.js`, so adding/renaming a page in
the nav means editing one array (`NAV_LINKS`) in that one file instead of
11 separate `<nav>` blocks.

## How to edit content without touching design code

Almost everything you'll want to change season-to-season lives in
**`data.js`** — it's commented in plain English:

- `TEAM_HIGHLIGHTS` — the highlight tiles (World Series Runner-Up, Gold
  Bracket Championship, etc.). All currently `status:"pending"` on purpose —
  none of these are independently confirmed against official team records
  yet. Flip an entry to `status:"verified"` and fill in the real value once
  coaching staff signs off. **Never invent a number here.**
- `GROWTH_STORY` — the "They didn't just join the same team" section (then/now photos + mosaic).
- `TIMELINE_ERAS` — the Road to 2032 timeline cards. Copy a block to add a new milestone; set `photo: null` for a milestone you don't have an image for yet (it renders as an honest open slot, not a fake photo).
- `PLAYERS` — all 9 player cards. Copy a block to add a player. Every player has `approved: false` until that family signs off — this field exists so the site can support hiding/showing individual players' info per parent approval.
- `STORIES` — the Crush Stories tiles.
- `SPONSOR_TIERS`, `SPONSOR_BENEFITS`, `FUEL_LIST` — sponsorship page content (still no pricing, per team direction).
- `SPONSOR_INTERESTS`, `BUSINESS_TYPES` — the dropdown choices on the Become a Sponsor form.
- `CONTACT_INFO` — the contact page's placeholder details.
- `MEDIA_CATEGORIES`, `SOCIAL_POSTS` — the Media hub grid + filter chips.

To add a new photo: drop the file into `assets/photos/` (team shots) or
`assets/players/` (player headshots), then reference it by filename in
`data.js`.

You should not need to open any `.html` file, `styles.css`,
`components.js`, or `render.js` for routine season updates — those hold
page structure, shared navigation, and design, while `data.js` holds the
content.

## How the shared pieces fit together (for whoever maintains this next)

- **`components.js`** — injects the header/nav/mobile-menu and footer into
  every page via two empty mount points (`#site-header-mount` and
  `#site-footer-mount`). Add a page to the site by adding one entry to the
  `NAV_LINKS` array at the top of this file — every page's nav and footer
  picks it up automatically. Each page sets `<body data-page="...">` to
  mark which nav link should show as active.
- **`render.js`** — a small library of data-driven render functions
  (`Site.renderRoster()`, `Site.renderTimeline()`, etc.), exposed as
  `window.Site`. Every function takes an optional container-id so the same
  function can render a 6-player preview on the homepage and the full
  9-player roster on the Team page. Add content in `data.js`; these
  functions turn it into HTML — no page needs its own copy of this logic.
- **`data.js`** — the single source of truth for all content (see above).
- **`styles.css`** — one shared stylesheet across all 11 pages. New
  components added for the multi-page build: `.page-banner` (the cinematic
  sub-page header), `.full-timeline`/`.ft-*` (the vertical Road to 2032
  timeline), `.benefit-card`/`.benefits-grid` (sponsor "what you receive"
  cards), `.answer-blocks` (the who/why/goal sponsor-page intro), `.sponsor-form`/`.form-*` (the inquiry form), `.contact-card` (contact page), `.coming-soon` (placeholder pages).

## Become a Sponsor form — what it does and doesn't do yet

The form on `become-a-sponsor.html` is fully interactive: it validates
required fields, and on submit shows a real confirmation panel. **It does
not currently send anywhere** — there's no backend, database, or email
service wired up. That's intentional for this prototype stage. When the
team is ready to collect real inquiries, the submit handler in that page's
inline `<script>` is the one place to swap in a real endpoint (a form
service like Formspree/Netlify Forms, or a custom backend) — no other page
needs to change.

## What's real vs. placeholder right now

- **Hero photo, timeline photos, story photos, social grid, player photos**
  — real West Cobb Crush team photography from the project's files. Player
  photos have a navy duotone treatment applied to remove pink birthday-card
  backgrounds and keep everything on-brand — no AI-generated images
  anywhere on this site.
- **Player cards** — real players, names/numbers/positions/fun facts pulled
  from birthday graphics already shared with families. Every field is
  concept content pending each family's individual approval (`approved:
  false` in `data.js`) before this goes live.
- **Team Highlights** (World Series Runner-Up, Gold Bracket Championship,
  Tournament Championships, 11 of 11 Metro Team Placements, Fall 2024
  Record) — named accomplishments the team has described, shown honestly as
  "Pending Confirmation" because they aren't yet independently verified
  against official records in the project's source materials. Only "Years
  to Class of 2032" is marked verified (it's simple arithmetic, not a claim
  about performance).
- **Sponsor tiers, sponsor wall, sponsorship pricing** — intentionally no
  dollar figures anywhere; sponsor wall shows generic "Your Business Here"
  placeholder slots, never real or fabricated business names.
- **Coaches, Schedule & Results, Community** — lightweight "coming soon"
  pages; full functionality requires content the team hasn't provided yet.
- **Become a Sponsor form** — fully working front-end, no backend (see above).
- **Contact info** — placeholder email/handles, clearly marked, pending team confirmation.

## What will need backend/database functionality later

This prototype is intentionally 100% static. These are the pieces that, if
the team wants them to be fully dynamic instead of edited-by-hand in
`data.js`, would need real backend work down the road:

- **Become a Sponsor form** — a real submission endpoint + storage/notification (e.g. email to team leadership).
- **Schedule & Results** — likely pulling from a live source (GameChanger, a
  tournament platform, or a simple admin-editable schedule) instead of
  static data.
- **Player/parent approval workflow** — right now `approved: false` is a
  flag a developer flips by hand in `data.js`; a real parent-approval system
  would need actual accounts/forms and probably a small database.
- **Sponsor directory at scale** — once there are more than a handful of
  real sponsors, a simple admin form to add/edit sponsors (rather than
  hand-editing `data.js`) would save time.
- **Social media integration** — the Media hub is currently manually
  curated in `data.js`; a live Instagram/Facebook feed would need API
  integration (this is also where a tool like Blotato could plug in later
  for cross-posting/automation — not wired up in this prototype).

None of the above blocks using this prototype for its current purpose:
showing team leadership a working, click-through vision of the site.
