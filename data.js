/* =========================================================================
   WEST COBB CRUSH 2032 — SITE CONTENT DATA
   -------------------------------------------------------------------------
   This file is the single source of truth for everything that changes
   season to season: highlights, timeline milestones, players, stories,
   sponsors, and media. The page (script.js) reads these arrays and builds
   the HTML — nothing below is hard-coded into index.html.

   HOW TO UPDATE THIS SITE (no coding required beyond editing this file):
     - To add a player: copy a block inside PLAYERS and change the fields.
     - To add a timeline milestone: copy a block inside TIMELINE_ERAS.
     - To add a news story: copy a block inside STORIES.
     - To add a sponsor once approved: copy a block inside SPONSORS.
     - To confirm a highlight: change "status" from "pending" to "verified"
       inside TEAM_HIGHLIGHTS and fill in the real value.
   Every field is commented so a non-developer (coach, team parent, etc.)
   can safely edit this file in Replit without touching the design code.
   ========================================================================= */

/* -------------------------------------------------------------------------
   TEAM HIGHLIGHTS (formerly "impact stats")
   IMPORTANT: These are named accomplishments the team has told us about,
   NOT confirmed statistics. Every entry stays status:"pending" — and shows
   "Pending Confirmation" instead of a number — until coaching staff signs
   off on the exact wording/value. Never invent a number here.
------------------------------------------------------------------------- */
const TEAM_HIGHLIGHTS = [
  { type: "label", label: "12U World Series Runner-Up", status: "verified", note: "June 22, 2026" },
  { type: "label", label: "Gold Bracket Championship", status: "pending" },
  { type: "label", label: "Tournament Championships", status: "pending" },
  { type: "label", label: "11 of 11 Metro Team Placements", status: "pending" },
  { type: "stat", value: "16-2-1", label: "Fall 2024 Record", status: "pending" },
  { type: "stat", value: "6", label: "Years to Class of 2032", status: "verified", note: "2026 → 2032" },
];

/* -------------------------------------------------------------------------
   THEY GREW UP TOGETHER — signature storytelling section
   "thenNow" powers the large split comparison. "mosaic" powers the row of
   supporting photos underneath. Set photo to null for a category we don't
   have an approved image for yet — it renders as an open, labeled slot
   instead of disappearing, so the section is visibly built-to-grow.
------------------------------------------------------------------------- */
const GROWTH_STORY = {
  kicker: "The Bond",
  heading: "They didn't just join the same team.<br>They grew up together.",
  copy: "Long before the travel bags and tournament rings, most of this roster was already on the same fields — some of them since they could barely reach the batting tee. What started as childhood teammates has turned into a family that's growing up side by side, season after season, all the way to the Class of 2032.",
  then: { photo: "assets/photos/timeline-1.jpg", date: "Nov 2024", label: "THEN" },
  now: { photo: "assets/photos/hero.jpg", date: "Jun 2026", label: "NOW" },
  mosaic: [
    {
      tag: "Early Years",
      photo: null,
      caption: "Reserved for Extreme 8U and early rec-ball photos as families share them.",
    },
    {
      tag: "Friendship",
      photo: "assets/photos/social-3.jpg",
      caption: "Crush girls with softball friends made across the Metro program.",
    },
    {
      tag: "Metro Ball",
      photo: "assets/photos/timeline-4.jpg",
      caption: "Beyond the diamond — friendships that outlast one roster.",
    },
    {
      tag: "Championship",
      photo: "assets/photos/timeline-2.jpg",
      caption: "Spring 2025 — tournament champions, rings and all.",
    },
  ],
};

/* -------------------------------------------------------------------------
   ROAD TO 2032 — TIMELINE
   Each entry is one stop on the journey. "photo" points to /assets/photos.
   "copy" should only describe what is literally documented (a photo, a
   plaque, a season) — never an invented statistic. "story" controls the
   "Read the story" link — leave it null until that page actually exists.
------------------------------------------------------------------------- */
const TIMELINE_ERAS = [
  {
    tag: "THE BEGINNING",
    title: "Around Age Six",
    date: "Before Extreme 8U",
    photo: null,
    copy: "Most of this core group first shared a softball field around age six — years before travel bags, tournament rings, or the name “Crush.” This is where the story really starts.",
    placeholder: true,
    highlight: true,
    story: null,
  },
  {
    tag: "THE EARLY YEARS",
    title: "Extreme 8U",
    date: "The Early Years",
    photo: null,
    copy: "Before the Crush jersey, this group played together as West Cobb Extreme — dirt-covered uniforms, oversized helmets, first tournaments, first teammates. This era is less about wins and more about how long they've been together.",
    placeholder: true,
    highlight: true,
    story: null,
  },
  {
    tag: "A NEW NAME",
    title: "The Move to West Cobb Crush",
    date: "Date pending confirmation",
    photo: null,
    copy: "The team transitioned from Extreme to West Cobb Crush — a new name, the same friendships. We're leaving the exact date unassigned until a coach or family confirms it, rather than guess.",
    placeholder: true,
    story: null,
  },
  {
    tag: "VERIFIED — TEAM ARCHIVE",
    title: "West Cobb Crush 10U",
    date: "August 2023",
    photo: null,
    copy: "The team's own Facebook archive confirms it: on August 10, 2023, West Cobb Crush announced its 10U roster under “a brand new name” — the same core group that had grown up together as Extreme.",
    placeholder: true,
    story: null,
  },
  {
    tag: "GROWING UP TOGETHER",
    title: "10U Crush",
    date: "November 2024",
    photo: "assets/photos/timeline-1.jpg",
    copy: "10U Crush, hardware in hand after the November Slugfest — one of the first championship photos in the team archive. This era is also where the fun stuff lives: sleepovers, Halloween, Christmas parties, Braves games — proof this team is a family, not just a roster.",
    placeholder: false,
    highlight: true,
    story: null,
  },
  {
    tag: "SPRING SEASON",
    title: "Tournament Champions",
    date: "March 2025",
    photo: "assets/photos/timeline-2.jpg",
    copy: "Spring 2025 — a tournament championship, documented rings and all. Exact tournament details pending confirmation for publication.",
    placeholder: false,
    story: null,
  },
  {
    tag: "SUMMER SEASON",
    title: "On the Road",
    date: "June 2025",
    photo: "assets/photos/timeline-3.jpg",
    copy: "Summer travel season — Blue Ridge and beyond. Tournament weekends became as much about the bus rides and hotel pools as the games.",
    placeholder: false,
    story: null,
  },
  {
    tag: "FRIENDSHIPS",
    title: "Beyond the Diamond",
    date: "September 2025",
    photo: "assets/photos/timeline-4.jpg",
    copy: "Crush girls with friends made through Metro softball, playing for different school and travel programs — proof this story is bigger than one jersey.",
    placeholder: false,
    story: null,
  },
  {
    tag: "12U — THE NEXT LEVEL",
    title: "First-Year 12U Season",
    date: "2026",
    photo: null,
    copy: "Crush moves up to 12U with 10 returning players from the same core group — the same friendships, one level up in competition.",
    placeholder: true,
    story: null,
  },
  {
    tag: "WORLD SERIES POOL PLAY",
    title: "2-0 for Coach Po",
    date: "June 18, 2026",
    photo: null,
    copy: "Crush opened World Series pool play 2-0 — which also happened to be Coach Po's birthday. The small moments matter as much as the big ones.",
    placeholder: true,
    story: null,
  },
  {
    tag: "12U WORLD SERIES",
    title: "World Series Runner-Up",
    date: "June 22, 2026",
    photo: "assets/photos/timeline-worldseries-2026.jpg",
    copy: "The girls battled all the way to the 12U World Series championship game. Tied at the end of regulation, the title went to an extra inning before Crush finished as Runner-Up — one inning from the title. No need to manufacture a championship; this is already an accomplishment.",
    placeholder: false,
    highlight: true,
    story: null,
  },
  {
    tag: "NEW CHAPTER",
    title: "Second-Year 12U",
    date: "Summer 2026",
    photo: null,
    copy: "After a World Series Runner-Up finish, Crush enters its next chapter with the returning core and a new teammate joining the journey, competing primarily on the PGF circuit.",
    placeholder: true,
    story: null,
  },
  {
    tag: "WHAT'S AHEAD",
    title: "The Journey Continues",
    date: "2027",
    photo: null,
    copy: "The road ahead — no specific plans announced yet, but the same core group keeps building toward 2032.",
    placeholder: true,
    future: true,
    story: null,
  },
  {
    tag: "WHAT'S AHEAD",
    title: "High School Approaches",
    date: "2028",
    photo: null,
    copy: "Space reserved for this stretch of the journey as it happens.",
    placeholder: true,
    future: true,
    story: null,
  },
  {
    tag: "WHAT'S AHEAD",
    title: "The High School Era Begins",
    date: "2029",
    photo: null,
    copy: "Space reserved for this stretch of the journey as it happens.",
    placeholder: true,
    future: true,
    story: null,
  },
  {
    tag: "WHAT'S AHEAD",
    title: "Growing Into New Roles",
    date: "2030",
    photo: null,
    copy: "Space reserved for this stretch of the journey as it happens.",
    placeholder: true,
    future: true,
    story: null,
  },
  {
    tag: "WHAT'S AHEAD",
    title: "The Countdown Begins",
    date: "2031",
    photo: null,
    copy: "Space reserved for this stretch of the journey as it happens.",
    placeholder: true,
    future: true,
    story: null,
  },
  {
    tag: "THE DESTINATION",
    title: "Class of 2032",
    date: "The Journey Continues",
    photo: null,
    copy: "Every card on this timeline builds toward one class, one story, one group of girls who grew up together on the same dirt.",
    placeholder: true,
    capstone: true,
    highlight: true,
    story: null,
  },
];

/* -------------------------------------------------------------------------
   MEET THE CRUSH — PLAYER CARDS (HOMEPAGE PREVIEW)
   Source note: name / number / position / "fun fact" pulled from the
   team's own player graphics already shared with families. Treat every
   field here as CONCEPT CONTENT pending each family's individual approval
   before this goes live — nothing here should publish without sign-off.
   "yearsWithCrush" and "achievement" are intentionally left as pending
   placeholders — we were not given verified values for either, so the
   card is built to hold them without asserting a fact we don't have.
   To hide a field for a specific player, just delete that key or leave it
   as an empty string; script.js already skips blank fields.
------------------------------------------------------------------------- */
const PLAYERS = [
  {
    displayName: "Grey",
    number: "1",
    position: "Center Field • Catcher • Utility",
    photo: "assets/players/grey_duo.jpg",
    funFact: "Loves horses and a good Juicy Crab dinner.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false, // flip to true once parent sign-off is collected
  },
  {
    displayName: "Chelsie",
    number: "2",
    position: "First Base • Catcher • Outfield",
    photo: "assets/players/chelsie_duo.jpg",
    funFact: "Teammates call her the best big sister on the team.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "Dylan",
    number: "5",
    position: "Pitcher • First Base",
    photo: "assets/players/dylan_duo.jpg",
    funFact: "Loves swimming and a good pasta salad.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "Mackenzie",
    number: "6",
    position: "Second Base • Shortstop • Utility",
    photo: "assets/players/mackenzie_duo.jpg",
    funFact: "You'll usually find her with a book between innings.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "Elle",
    number: "10",
    position: "Utility — every position except catcher",
    photo: "assets/players/elle_duo.jpg",
    funFact: "Loves the beach, the pool, and a good pair of boots.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "Shannon",
    number: "16",
    position: "Pitcher • Shortstop • Utility",
    photo: "assets/players/shannon_duo.jpg",
    funFact: "Loves hanging out with friends, pasta nights, and cranking Mr. Brightside.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "Sofia",
    number: "21",
    position: "Pitcher • Second Base • Outfield",
    photo: "assets/players/sofia_duo.jpg",
    funFact: "Drama club kid with a pitcher's mentality.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "Harper",
    number: "22",
    position: "Catcher • Outfield",
    photo: "assets/players/harper_duo.jpg",
    funFact: "The catcher's gear is always bedazzled — on purpose.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "Caroline",
    number: "28",
    position: "Third Base • First Base • Utility",
    photo: "assets/players/caroline_duo.jpg",
    funFact: "Also competes in volleyball in the off-season.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "McKinley",
    number: "33",
    position: "Pitcher • Shortstop • Outfield",
    photo: "assets/players/mckinley_duo.jpg",
    funFact: "Loves playing with her dog, Luna, and a good rack of ribs.",
    yearsWithCrush: "Pending confirmation",
    achievement: "Pending team confirmation",
    approved: false,
  },
  {
    displayName: "New Teammate",
    number: "TBD",
    position: "Roster spot reserved",
    photo: null,
    funFact: "",
    yearsWithCrush: "",
    achievement: "",
    comingSoon: true, // renders a "Welcome to the Crush — announcement coming soon" card instead of a normal player card
    approved: false,
  },
];

/* -------------------------------------------------------------------------
   LATEST FROM THE CRUSH — EDITORIAL / STORY TILES
------------------------------------------------------------------------- */
const STORIES = [
  {
    category: "Team Tradition",
    title: "Christmas Party",
    date: "December 2025",
    photo: "assets/photos/stories-1.jpg",
    teaser: "Gift exchanges, a decorated tree, and a team that spends as much time together off the field as on it.",
  },
  {
    category: "Community",
    title: "Crush & the Littles at the Braves Game",
    date: "November 2025",
    photo: "assets/photos/stories-2.jpg",
    teaser: "A night out at the ballpark with the next generation of Crush fans in tow.",
  },
  {
    category: "Team Culture",
    title: "Cowabunga — Halloween on the Diamond",
    date: "October 2025",
    photo: "assets/photos/stories-3.jpg",
    teaser: "Half-shells, face masks, and full team spirit. This group knows how to have fun between tournaments.",
  },
];

/* -------------------------------------------------------------------------
   SPONSOR TIERS — NO PRICING YET (pending organizational approval)
------------------------------------------------------------------------- */
const SPONSOR_TIERS = [
  { name: "Community Partner", blurb: "Website recognition and a public thank-you from the team." },
  { name: "Team Partner", blurb: "Enhanced logo placement plus a dedicated sponsor profile." },
  { name: "Tournament / Travel Partner", blurb: "Named recognition tied to a specific tournament or travel goal." },
  { name: "Premier Partner", blurb: "Highest visibility across the site and approved team content." },
  { name: "In-Kind Partner", blurb: "Goods and services support — equipment, meals, printing, and more." },
];

/* -------------------------------------------------------------------------
   MEDIA HUB — SOCIAL / MEDIA GRID
   "category" powers the filter chips. Set photo to null for a category
   we don't have real content for yet (e.g. Sponsor Spotlights, Behind the
   Scenes) — it renders as a clearly-labeled open slot, never a fake photo.
------------------------------------------------------------------------- */
const MEDIA_CATEGORIES = [
  "All",
  "Championships",
  "Crush Family",
  "Road to 2032",
  "Player Spotlights",
  "Behind the Scenes",
  "Metro Ball",
  "Community",
  "Sponsor Spotlights",
];

const SOCIAL_POSTS = [
  { photo: "assets/photos/hero.jpg", category: "Championships", platform: "instagram", caption: "Trophy in hand — June 2026." },
  { photo: "assets/photos/timeline-2.jpg", category: "Championships", platform: "instagram", caption: "Spring 2025 tournament champions." },
  { photo: "assets/photos/stories-1.jpg", category: "Crush Family", platform: "facebook", caption: "Christmas Party, December 2025." },
  { photo: "assets/photos/social-1.jpg", category: "Crush Family", platform: "instagram", caption: "Big Heads at Blue Ridge — team culture in full effect." },
  { photo: "assets/photos/stories-3.jpg", category: "Crush Family", platform: "instagram", caption: "Cowabunga — Halloween on the diamond." },
  { photo: "assets/photos/social-4.jpg", category: "Road to 2032", platform: "instagram", caption: "On the road to Blue Ridge with the whole squad." },
  { photo: "assets/players/elle_duo.jpg", category: "Player Spotlights", platform: "instagram", caption: "Elle — Shortstop, #10." },
  { photo: "assets/players/harper_duo.jpg", category: "Player Spotlights", platform: "instagram", caption: "Harper — Catcher, #22." },
  { photo: null, category: "Behind the Scenes", platform: "instagram", caption: "Reserved for practice & travel-day content as it's approved." },
  { photo: "assets/photos/social-3.jpg", category: "Metro Ball", platform: "instagram", caption: "Friends made across the Metro program." },
  { photo: "assets/photos/social-2.jpg", category: "Community", platform: "facebook", caption: "Mother's Day on the diamond." },
  { photo: "assets/photos/stories-2.jpg", category: "Community", platform: "facebook", caption: "Crush & the Littles at the Braves game." },
  { photo: null, category: "Sponsor Spotlights", platform: "instagram", caption: "Reserved for approved partner features." },
];

/* -------------------------------------------------------------------------
   SPONSORSHIP — SUPPORTING CONTENT (shared by the homepage fuel section and
   the dedicated sponsors.html / become-a-sponsor.html pages)
------------------------------------------------------------------------- */

// What sponsor support helps make possible — no dollar figures.
const FUEL_LIST = [
  "Tournament competition",
  "Travel",
  "Player development",
  "Training",
  "Team experiences",
];

// What a business can eventually receive once a partnership is approved.
// Pulled directly from the team's own sponsorship concept proposal.
const SPONSOR_BENEFITS = [
  { title: "Website recognition", copy: "A listing on the sponsor wall, visible on every visit to the site." },
  { title: "Clickable business logo", copy: "Linked straight to your website or page of choice." },
  { title: "Dedicated sponsor profile", copy: "Your business description, logo, and story — not just a logo in a grid." },
  { title: "Social-media recognition", copy: "A thank-you and tag across the team's social channels, once that program is active." },
  { title: "Featured partner content", copy: "Occasional spotlight content built around your business and the team." },
  { title: "Tournament / travel recognition", copy: "Named visibility tied to a specific event or travel goal, for that tier." },
  { title: "Approved offer or coupon", copy: "Optional — a way to turn Crush families into customers, if you'd like." },
  { title: "Community visibility", copy: "Direct exposure to Crush families and the West Cobb softball community." },
];

// Sponsorship inquiry form — dropdown choices on become-a-sponsor.html
const SPONSOR_INTERESTS = [
  "Community Partner",
  "Team Partner",
  "Tournament / Travel Partner",
  "Premier Partner",
  "In-Kind Partner",
  "Not Sure / Let's Talk",
];

const BUSINESS_TYPES = [
  "Restaurant / Food & Beverage",
  "Retail",
  "Healthcare / Medical",
  "Real Estate",
  "Home Services / Contractor",
  "Youth Sports / Training Facility",
  "Professional Services",
  "Other",
];

/* -------------------------------------------------------------------------
   CONTACT — placeholder team contact info. All values here are marked
   placeholder until team leadership confirms official contact channels.
   No personal phone numbers, home addresses, or minor-specific info.
------------------------------------------------------------------------- */
const CONTACT_INFO = {
  email: "info@wccrush2032.com",
  emailNote: "Placeholder inbox — update once the team designates an official contact.",
  location: "West Cobb / Marietta, Georgia area",
  locationNote: "General area only — no specific address published for player/family privacy.",
  instagramHandle: "@westcobbcrush2032",
  facebookHandle: "West Cobb Crush 2032",
  socialNote: "Placeholder handles pending confirmation with team leadership / Becca.",
};

/* -------------------------------------------------------------------------
   OUR STORY PAGE — supporting copy blocks
------------------------------------------------------------------------- */
const STORY_INTRO = {
  kicker: "Our Story",
  heading: "They didn't just join the same team.<br>They grew up together.",
  copy: "Most of this roster met years before a single travel bag was packed — some of them back at Extreme 8U, some even earlier. What started as kids on the same rec-ball field has turned into a group of teammates who've spent birthdays, holidays, and years of weekends together. This page is where that story lives: every season, every milestone, every photo the families are willing to share, building toward one shared finish line — the Class of 2032.",
};

/* -------------------------------------------------------------------------
   SPONSORS LANDING PAGE — supporting copy blocks
   Answers the six questions a prospective sponsor arrives with, per the
   team's own sponsorship concept proposal.
------------------------------------------------------------------------- */
const COACHES = [
  {
    name: "Brandon Woodman",
    role: "Head Coach",
    photo: "assets/coaches/woodman_duo.jpg",
    bio: "Head Coach of West Cobb Crush 2032. Per the team, Coach Woodman has also coached Hillgrove Hawks Gold for three seasons and owns New Image Roofing. Those two details are family/team-provided — a public search didn't turn up independent confirmation of either, so they're presented here as coach-provided background, not verified fact, until he confirms the exact wording himself. (One detail we could verify directly: the team's own Facebook page lists brandonwoodman@gmail.com as its official contact.)",
    bioStatus: "pending",
  },
  {
    name: "Sara Poteat French",
    role: "Assistant Coach",
    tag: "D1 Athlete",
    photo: "assets/coaches/po_duo.jpg",
    bio: "Known to the team as Coach Po. Public NCAA records show a Sara Poteat who played four years as an infielder at the University of Tennessee at Chattanooga (2010–2013), a Division I program, out of Upson-Lee High School in Thomaston, Georgia. Her senior season included an All-Southern Conference Second Team selection, a team-leading 17 stolen bases, and a .300+ batting average for the third straight year; she was the 2011 SoCon Tournament's Most Outstanding Player and a 2012 NFCA South Region First Team honoree. Off the field, a Sara Poteat is also a licensed Realtor with Real Broker, LLC in the Atlanta/West Cobb area — her public agent profile uses the tagline “Fitness, Faith & Real Estate.” Both details are drafted from public records — pending Coach Po's confirmation before either is treated as final.",
    bioStatus: "pending",
    bioSource: "University of Tennessee at Chattanooga Athletics (gomocs.com); Homes.com real estate agent profile",
  },
  {
    name: "Philip Mathews",
    role: "Administration",
    photo: null,
    bio: "",
    bioStatus: "pending",
  },
  {
    name: "Jeff Almon",
    role: "Practice Support",
    photo: null,
    bio: "",
    bioStatus: "pending",
  },
  {
    name: "Carlos Rodriguez",
    role: "Practice Support",
    photo: null,
    bio: "",
    bioStatus: "pending",
  },
];

const SPONSOR_PAGE_COPY = {
  who: "West Cobb Crush 2032 is a competitive girls travel softball team built around a core group who have played together for years — some since they were barely old enough to swing a bat. They train, travel, and compete together as the Class of 2032: the graduating class they'll reach together, on the same roster they started with.",
  why: "Most youth sports sponsorships are a logo and a thank-you. This is different because the story is different: this isn't a rotating roster assembled for one season. It's the same girls, growing up together, season after season, all the way to high school graduation. A business that partners with this team is investing in one continuous story, not a one-off team page.",
  goal: "Every season is a step toward 2032 — more tournaments, more competition at a higher level, and eventually the recruiting and high school journey for this same core group. Sponsorship helps fund the steps in between: training, travel, tournament entry, and the team experiences that keep a roster together for a decade.",
};
