# ASPA Website Refresh — Project Handoff

**Project:** screen-printing.us redesign
**Client:** Dustin Cochran (cochran.dustin@gmail.com)
**Date:** March 3–17, 2026 (last updated: Session 25)
**Status:** In Progress — Core Pages Built, Resource Hub COMPLETE (All 18 Articles), **SITE LIVE on GitHub Pages**, Nav Full-Width, **Supabase Backend Live** (Auth + Database + Google OAuth + Storage), ASPA+ Gated Content Live, Admin Dashboard Built, **UI Polish Pass Complete**, **Gamification & Loyalty Points System Live**, **Job Board Live**, **Community Chat Live** (Real-time, Edit/Delete, Search, Profile Edit, Avatar Upload, Admin Moderation), **Full Brand Audit Complete**, **Member Dashboard Fleshed Out**, **Directory Overhauled (210 Real Members)**, **Membership Certificate PDF**, **Directory Location Filter Redesigned**, **Admin Panel Tabs Fixed**, **Directory Claim System Live** (Email Verification via Resend + pg_net), **CRM Member Detail Panel Built**, **Dashboard Self-Service Listing Editing**, **Promo Codes Standalone Admin Tab**

---

## Project Overview

Full redesign of the American Screen Printing Association (ASPA) website at screen-printing.us. The existing site is a Google Sites page with Blogger-powered subpages — functional but dated. Goal is to bring it into 2026 with a bold, creative, modern design while preserving all core functionality and dramatically improving SEO.

## Live Site Audit (March 3, 2026)

Reviewed the current live site at screen-printing.us to establish source of truth. Key findings:

### Confirmed Facts from Live Site
- **Established:** 2004 (NOT 1993 — banner says "Est. 2004", footer says "Since 2004")
- **Copyright:** 2004–2026 American Screen Printing Association Inc. (ASPA)
- **Reach:** "Members in 100 Countries" (global, not just US)
- **Certified:** "Thousands of screen printers worldwide"
- **Page views:** "Millions of Page Views Served"
- **Training course created:** September 2013 ("enrolled hundreds of students")
- **Education arm:** Called "ASPA Institute" — Screen Printing Training School
- **President:** Martin Berda (Dustin is taking over)
- **Address:** 105 Mockingbird Dr., Butler, PA 16001
- **Phone:** (724) 886-3535

### Live Site Pricing (BEFORE our changes)
- **Business Membership:** $125 one-time (for Screen Printers, T-Shirt Shops, Embroiderers, Sign Shops)
- **Supplier Membership:** $249 one-time (for Equipment Manufacturers and Supply Shops)
- **Diploma in Screen Printing Course:** $125 one-time (separate product, online training)
- **CSP Exam Fee:** $59 (includes study guide)
- **CSP Passing Score on live site:** 75% (27 of 36)

### Live Site Certified Printers Page
- Lists CSP-certified professionals alphabetically (A-D, E-H, I-L, M-P, Q-T, U-Z pages)
- Accordion-style by last name letter
- Hundreds of names listed (just name and sometimes location)
- Includes an "ASPA Certified Screen Printer" badge — gold/yellow background, outdated clip-art style
- Testimonial from Barry L. about career advancement from certification

### Real Members / Testimonials from Live Site
- **Barry L.** — Virginia Beach, VA (CSP Certified): Credited certification with career advancement to production manager
- **Dhanabal Venkatesan** — 24 X 7 Digitizing.com, India: Praised the Diploma course
- **Blue Ridge Screen Products** — Charlotte, NC 28269 | Tel. (704) 815-6401
- **Enemy Ink Ltd.** — UK + Orlando, FL | Phone: (02477) 983059
- **Garden City High School** — Garden City, MI 48135
- **Bay-Arenac ISD Career Center** — Bay City, MI 48706

### Live Site Nav Pages (existing content)
- Home, "How-to" Blogs (Blogger), Join ASPA, Get Certified, Store (Blogger), Training, Equipment & Supplies (**BROKEN — 404**), Jobs (Blogger), Videos, News

### Live Site Blog Structure (Discovered Session 4)
The blog content is scattered across **multiple separate Blogger blogs**, each embedded via iframe into Google Sites pages:
- `americanscreenprintingassocblog.blogspot.com` — Main hub/directory (mostly empty, just links to categories)
- `homebasedscreenprintingadvice.blogspot.com` — Home-based printing articles (has real content: safety, startup costs, motivation tips)
- `businessadviceforscreenprinters.blogspot.com` — Business advice articles
- Additional separate blogs likely exist for other categories

Blog categories listed on the directory page: Ask ASPA!, ASPA News, The ASPA Store, Home-Based T-Shirt Printing, Training and Education, The Artist's Corner, Strictly Business, "How-to" Articles, Job Openings, Screen Printing Tips and Tricks, Screen Printers Tell Their Stories, Equipment and Businesses for Sale

**Key findings:**
- Most category label pages on the main blog return "No posts found" — content lives on separate Blogger subdomains
- Screen Printing Tips page on Google Sites is a **404**
- Some articles are AI-generated (saw "Source: Perplexity (2025)" attribution)
- All link equity is going to blogspot.com, not screen-printing.us — major SEO leak
- Content quality is decent but presentation is dated

### Associated Domains
- screen-printing.us (primary)
- americanscreenprintingassociation.com
- screenprinting-aspa.com
- aspaUSA.com

---

## Membership Model Change (March 3, 2026)

### Old Model (Live Site)
One-time fees, no recurring revenue:
- Business: $125 one-time
- Supplier: $249 one-time
- Training: $125 one-time (separate "Diploma" product)

### New Model — ASPA+
Annual recurring memberships with premium perks:
- **ASPA+ Business:** $49/year
- **ASPA+ Supplier:** $99/year
- **ASPA+ Training:** $79/year

### Legacy Members
- Existing one-time members are **fully grandfathered** — nothing changes
- They retain all current benefits indefinitely
- Can upgrade to ASPA+ at a **discounted rate** to unlock new perks

### ASPA+ Exclusive Perks (new, not on Legacy)
- Industry supplier discount program
- CE credits (continuing education)
- Annual CSP recertification included (Business tier)
- Priority directory placement
- Exclusive webinars & resources
- Featured supplier spotlights (Supplier tier)
- Member-to-supplier deal promotions (Supplier tier)
- Updated training content & new modules yearly (Training tier)
- CE credits for educators (Training tier)

### Future Consideration
- May split membership into **individual vs. business** enrollment paths later
- Structure is modular enough to accommodate this

---

## Design Direction

- **Style:** Bold & creative — dark theme with ink-splatter energy
- **Color palette:** Cyan (#00d4ff), Magenta (#e91e8c), Purple (#6c2bd9), Yellow (#ffd400), Orange (#ff6b35) on deep black (#0a0a0a) and dark navy (#1a1a2e)
- **Fonts:** Bebas Neue (display headlines), Space Grotesk (headings/UI), Inter (body text) — all via Google Fonts
- **Card pattern:** rgba(255,255,255,0.03) bg, rgba(255,255,255,0.06) border, 16px radius, -4px hover translate
- **Container:** max-width 1200px, margin 0 auto, padding 0 24px
- **Approach:** Static HTML/CSS/JS — single files, no build step, no frameworks. Deployable anywhere.

---

## Files Delivered

### `index.html` — Homepage
Single-page site with anchor navigation. Sections:
- **Hero** — "Ink Runs In Our Veins" tagline, stats (1,200+ members, 100+ countries, 20+ years), dual CTAs
- **Member Directory** — Search bar redirects to directory.html + 6 category cards linking to directory.html with hash filters (#category=tshirt, etc.)
- **CSP Certification** — Visual cert card with exam details, 4 topic area breakdowns, $59 pricing, links to exam.html
- **Membership** — 3 ASPA+ pricing cards:
  - ASPA+ Business: $49/year (most popular)
  - ASPA+ Supplier: $99/year
  - ASPA+ Training: $79/year
  - ASPA+ exclusive perks highlighted with cyan star markers
  - Legacy member upgrade banner
- **The Ink Lab (Resources)** — 6 resource cards
- **Testimonials** — 3 cards using real testimonials from live site
- **CTA Banner** — Final conversion push
- **Footer** — Full nav columns with links to all pages (directory.html, certified-roster.html, about.html, contact.html, privacy.html, terms.html)

Nav includes: Directory, Certified, Certification, Membership, Resources, Discounts⁺, Education⁺, Join ASPA CTA, Log In (or Hi, [Name] | My ASPA+ | Log Out when authenticated)

### `exam.html` — CSP Certification Exam (Full Flow)
A 5-screen single-page application:
1. **Enroll & Pay** — Registration form + mock payment UI. Ready for Stripe/PayPal.
2. **Confirmation** — Study guide download + mock email preview
3. **Exam Gate** — Timer warning, checkbox confirmation required
4. **The Exam** — 36 questions from 60+ bank, 45-min timer, auto-submit, question navigator
5. **Results** — Animated score ring, certificate preview + PDF download on pass

**Passing score: 75% (27 of 36)** — matches the live site (fixed from earlier 80% discrepancy)

### `join.html` — Membership Signup Page (Full Flow)
A 3-screen SPA for ASPA+ enrollment:
1. **Plan Selection** — 3 ASPA+ tiers, comparison table, FAQ (6 questions), Legacy upgrade banner
2. **Signup Form** — Name, email, business, city/state, website + mock payment with "/year" pricing
3. **Welcome / Confirmation** — PDF membership certificate download, next steps cards

### `directory.html` — Member Directory *(NEW)*
Full searchable Member Directory with:
- Sticky search/filter bar (text search, category dropdown, state filter, ASPA+ and CSP toggles)
- Card-based results grid (350px minmax), 24 results per page pagination
- URL hash support for shareable filtered views (#category=tshirt&state=NC&q=search)
- 15 sample member entries (4 real from live site + 11 realistic placeholders)
- ASPA+ members get priority placement (sorted first)
- Empty state handling, debounced search (300ms), AND logic for combined filters
- "Get Listed" CTA banner linking to join.html
- Mobile responsive with collapsible filter panel

### `certified-roster.html` — CSP Certified Printer Roster *(NEW)*
Searchable roster of CSP-certified professionals:
- Hero with dynamic stats (certified count, states, countries)
- Sticky filter bar: text search, specialty dropdown (Textile/Garment, Signage & Graphics, Industrial, Multi-Specialty), state filter, certification year dropdown (2020-2026), ASPA+ toggle
- Card-based results showing: name, company, location, specialty tags, CSP cert number, certification date, Active/Renewal Due status badge, ASPA+ indicator
- 20 sample entries including 4 real names from live site
- URL hash support, pagination, ASPA+ priority sorting
- **Badge Showcase section** with modernized CSP badge (SVG) and download button
- "Get Certified" CTA banner linking to exam.html

### `csp-badge.svg` — Modernized CSP Badge *(NEW)*
Redesigned "ASPA Certified Screen Printer" badge replacing the dated gold/yellow clip-art badge from the live site:
- Dark shield shape matching site design system
- Cyan-to-purple gradient border with drop shadow
- Gold seal with checkmark at center
- "ASPA" in Bebas Neue, "CERTIFIED" in cyan, "SCREEN PRINTER" in subtle white
- "EST. 2004" at bottom
- Available for certified printers to download and display on their websites

### `about.html` — About ASPA *(NEW)*
- Real ASPA history (founded 2004), mission (Education, Certification, Community)
- ASPA Institute info, CSP program description
- **Leadership section is PLACEHOLDER** — Dustin is taking over from Martin Berda
- Associated domains listed, address, phone

### `contact.html` — Contact Page *(NEW)*
- Contact form (Name, Email, Subject dropdown, Message) with simulated submission
- Contact info cards (email, phone, address, website)
- Quick links section

### `privacy.html` — Privacy Policy *(NEW)*
- Full GDPR/CCPA-compliant privacy policy with 13 sections
- Table of contents, scroll-to-top button
- **Note: Should have lawyer review before publication**

### `terms.html` — Terms of Use *(NEW)*
- Comprehensive terms covering ASPA+ memberships (correct tier names: ASPA+ Business/Supplier/Training), CSP exam, directory, payments
- 13 sections covering all site services

### `resources.html` — Resource Hub / Learning Center *(NEW)*
Central content hub ("The Ink Lab") with:
- Hero with search bar (300ms debounced)
- 7 category filter tabs with dynamic article counts: All, Getting Started, How-To Guides, Business & Growth, Equipment & Supplies, Tips & Tricks, Industry News
- 18 article cards (ALL 18 LIVE — no more "Coming Soon" overlays)
- Category-colored pills (cyan, purple, magenta, orange, yellow, gray)
- Featured/pillar article badges (gold star)
- Conversion CTA cards injected every 6 articles (rotating: Get Certified, Join ASPA+, Find a Printer)
- "Content Ladder" 3-step journey visual: Learn → Get Certified → Join Community
- URL hash support for filtered views
- Article data in JSON format — easy to add new articles

### `article-how-to-screen-print.html` — Pillar Article #1 *(NEW)*
"How to Screen Print T-Shirts: The Complete Beginner's Guide" — ~5,000 words:
- 9 comprehensive sections: Equipment & Supplies, Artwork Prep, Coating & Exposing, Press Setup, Printing, Curing, Clean Up, Taking It Further
- Sticky TOC sidebar with IntersectionObserver active-state highlighting
- Pro tip callout boxes (cyan), safety warning boxes (orange), budget breakdown boxes
- Budget tiers: home $500-$1,500, mid $2,000-$5,000, pro $10,000+
- Specific technical details (mesh counts, temperatures, squeegee angles)
- Natural ASPA integration (certification, training, membership mentions)
- Related articles section, dual-CTA banner
- **SEO target: "how to screen print t-shirts" — the live site's current page title**

### `article-startup-costs.html` — Pillar Article #2 *(NEW)*
"How Much Does It Cost to Start a Screen Printing Business?" — ~2,800+ words:
- 9 sections: Three Tiers, Equipment Costs, Supplies, Workspace, Business Setup, First-Year Budgets, Saving Money, Break-Even, Getting Started Smart
- Three realistic budget scenarios (Sarah's Garage $1,500, Mike's Shop $8,000, Team Print Co. $40,000+)
- Specific dollar amounts throughout for all equipment, supplies, and operating costs
- Break-even analysis with per-shirt margins
- Same article template as pillar #1 (magenta category color instead of cyan)
- **SEO target: "screen printing startup costs" / "how much to start screen printing business"**

### `article-equipment-guide.html` — Article #3 *(NEW — Session 5)*
"Screen Printing Equipment Guide for Beginners" — ~4,800+ words:
- 9 sections: Essential Equipment List, Presses, Screens & Frames, Inks & Chemicals, Exposure Units, Heat Curing Equipment, Workspace Essentials, Starter Packages vs Individual, Smart Buying Decisions
- Real budget tiers: Hobby ($500-800), Side Hustle ($1,500-3,000), Small Shop ($5,000-10,000)
- Brand mentions (Riley Hopkins, Workhorse, Vastex, M&R, Ranar, etc.)
- Orange category tag (Equipment & Supplies)
- **SEO target: "screen printing equipment" / "screen printing equipment for beginners"**

### `article-common-mistakes.html` — Article #4 *(NEW — Session 5)*
"10 Common Screen Printing Mistakes and How to Fix Them" — ~4,500+ words:
- 12 sections: Intro + 10 mistakes + wrap-up
- Covers: poor tension, wrong mesh, exposure errors, squeegee pressure, skipping test prints, not degreasing, wrong off-contact, undercuring, bad artwork, rushing
- Each mistake: problem description, symptoms, fix, practical tip
- Yellow category tag (Tips & Tricks)
- **SEO target: "screen printing mistakes" / "screen printing troubleshooting"**

### `article-screen-print-vs-dtg.html` — Article #5 *(NEW — Session 5)*
"Screen Printing vs DTG vs Sublimation: Which Method is Right for You?" — ~4,800+ words:
- 10 sections: Intro, Screen Printing, DTG, Sublimation, Head-to-Head Comparison, When to Choose Each (3 sections), Combining Methods, Making Your Decision
- Real cost breakdowns at different quantities (1, 24, 144, 500+ units)
- Balanced tone — fair to all methods while positioning ASPA's screen printing expertise
- Cyan category tag (Getting Started)
- **SEO target: "screen printing vs DTG" / "screen printing vs sublimation" / "DTG vs screen printing"**

### `article-plastisol-vs-water-based.html` — Article #6 *(NEW — Session 5)*
"Plastisol vs Water-Based Ink: When to Use Each" — ~4,500+ words:
- 10 sections: Two Philosophies, Plastisol Explained, Water-Based Explained, Head-to-Head Comparison, When to Choose Each (2 sections), Discharge Ink, Mixing Methods, Environmental Considerations, Decision Framework
- Comparison cards for feel, opacity, vibrancy, durability, cleanup, eco-impact
- Real brand names (Wilflex, Union Ink, Matsui, Green Galaxy, Rutland)
- Safety warnings about discharge ink ventilation (formaldehyde)
- Purple category tag (How-To Guides)
- **SEO target: "plastisol vs water-based ink" / "screen printing ink comparison"**

### `article-pricing-guide.html` — Article #7 *(NEW — Session 5)*
"Pricing Your Screen Printing Work: A Complete Guide" — ~4,500+ words:
- 10 sections: Pricing Fundamentals, True Costs, The Formula, Quantity Breaks, Print Complexity, Common Mistakes, Art & Setup Fees, Market Positioning, Raising Prices, Building Your Price Sheet
- Full worked example: 48 Gildan 5000s, 2-color → $10.50/shirt breakdown
- Quantity break pricing table (12-288 qty tiers)
- Three market positions (Budget, Mid-market, Premium)
- Magenta category tag (Business & Growth)
- **SEO target: "how to price screen printing" / "screen printing pricing guide"**

### `article-coat-and-expose.html` — Article #8 *(NEW — Session 5)*
"How to Coat and Expose a Screen: Step-by-Step" — ~4,500+ words:
- 10 sections: Foundation, Emulsion Types, Screen Prep, Coating Technique, Drying, Exposure Light Sources, Calculating Exposure Time, Washout & Inspection, Troubleshooting, Advanced Tips
- Three emulsion types detailed (diazo, SBQ, dual-cure) with brands (Speedball, Baselayr, Chromaline, Ulano, CCI, Murakami)
- Exposure time starting points for different light sources
- Step wedge testing methodology
- Purple category tag (How-To Guides)
- **SEO target: "how to coat a screen for screen printing" / "screen exposure time"**

### `article-home-based-business.html` — Article #9 *(NEW — Session 5)*
"Starting a Home-Based T-Shirt Business: From Garage to Growth" — ~4,500+ words:
- 10 sections: The Garage Dream, Is It Right for You?, Legal Basics, Garage Workshop Setup, First Customers, Pricing for Profit, Building Your Brand, Common Mistakes, Scaling Up, First 90 Days Action Plan
- Week-by-week 90-day roadmap for launching
- Revenue milestones: $5K/month (side hustle) → $10K (full-time) → $20K+ (shop consideration)
- Legal checklist: business license, DBA, EIN, sales tax, insurance
- Magenta category tag (Business & Growth)
- **SEO target: "home-based t-shirt business" / "start screen printing business from home"**

### `article-mesh-counts.html` — Article #10 *(NEW — Session 5)*
"Understanding Mesh Counts: Which Screen for Which Job" — ~4,000+ words:
- 10 sections: Why Mesh Matters, What is Mesh Count, The Mesh Spectrum (40-355), Mesh & Ink Type, Design Complexity, Mesh & Substrate, Screen Tension, Decision Framework, Building Inventory, Mesh Mastery
- Complete mesh count reference: 40 through 355 with use cases for each
- Ink type pairing guide (plastisol, water-based, discharge, specialty)
- Halftone LPI to mesh count rule (4x)
- Beginner inventory recommendation (six 110 + two 156)
- Purple category tag (How-To Guides)
- **SEO target: "screen printing mesh count" / "which mesh count for screen printing"**

### `article-garage-safety.html` — Article #11 *(NEW — Session 5)*
"I Print T-Shirts in My Garage: Is It Safe for My Kids?" — ~4,000+ words:
- 10 sections: The Question Every Home Printer Asks, Chemical Inventory, Ventilation, Storage, Physical Boundaries, PPE, Specific Scenarios (Q&A format), Fire Safety, Eco-Friendly Alternatives, Safe Printing is Smart Printing
- Detailed chemical-by-chemical safety profiles (plastisol, water-based, emulsion, discharge, reclaimers)
- Ventilation tiers: minimum → better → best setups with costs
- Heavy use of orange safety warning callouts throughout
- PPE checklist with specific product recommendations and costs
- Yellow category tag (Tips & Tricks)
- **SEO target: "is screen printing safe at home" / "screen printing safety" / "screen printing chemicals safety"**

### `article-what-is-screen-printing.html` — Article #12 *(NEW — Session 5)*
"What is Screen Printing? History, Process, and Modern Applications" — ~4,000+ words:
- 10 sections: The Art Behind Every T-Shirt, How It Works, History (960 AD to 2026), Step-by-Step Process, Types of Screen Printing, Substrates, vs Other Methods, Modern Industry 2026, Who Uses It Today, Getting Started
- Timeline from Song Dynasty China through Andy Warhol to modern $10B industry
- Cyan category tag (Getting Started)
- **SEO target: "what is screen printing" / "screen printing history"**

### `article-12-ways-to-fail.html` — Article #13 *(NEW — Session 5)*
"12 Sure Ways to Fail in the T-Shirt Business (And How to Avoid Them)" — ~4,500+ words:
- 14 sections: Intro + 12 failure modes + conclusion
- Covers: not treating as business, underpricing, no niche, ignoring quality, overspending on equipment, not learning properly, bad communication, no online presence, not collecting money, doing everything yourself, ignoring numbers, giving up too soon
- Each failure: problem + fix + practical tip
- Magenta category tag (Business & Growth)
- **SEO target: "t-shirt business mistakes" / "why screen printing businesses fail"**

### `article-sublimation-printing.html` — Article #14 *(NEW — Session 5)*
"What is Sublimation Printing?" — ~3,500+ words:
- 10 sections: The Other Printing Method, The Science, Equipment Needed, What You Can/Can't Sublimate, Pros, Cons, vs Screen Printing, Business Applications, Getting Started, Bottom Line
- Equipment breakdown: Sawgrass vs converted Epson, heat presses, substrates
- Polyester-only limitation prominently warned
- Purple category tag (How-To Guides)
- **SEO target: "what is sublimation printing" / "sublimation vs screen printing"**

### `article-best-presses.html` — Article #15 *(NEW — Session 5)*
"Best Screen Printing Presses for Small Shops (2026)" — ~4,500+ words:
- 10 sections: Production Engine, Manual Presses, Semi-Automatic, Automatic, Selection Criteria, Price vs Value, Complementary Equipment, New vs Used, Scaling Roadmap, Decision Guide
- Real brand reviews: Riley Hopkins 150/250, Vastex V-1000, Workhorse Odyssey, M&R Sportsman EX/Chameleon, Anatol Volt/Titan, ROQ
- Price ranges from $200 budget to $80,000+ automatic
- 4-phase growth roadmap
- Orange category tag (Equipment & Supplies)
- **SEO target: "best screen printing press" / "screen printing press for small shops"**

### `article-essential-supplies.html` — Article #16 *(NEW — Session 5)*
"Essential Supplies Every New Screen Printer Needs" — ~3,800+ words:
- 10 sections: Checklist Intro, Screens & Frames, Inks, Emulsion & Exposure, Chemicals & Cleaners, Squeegees, Blank Garments, Tools & Accessories, Where to Buy, Starter Budget
- Complete supply budget: $535-1,010 total
- Brand recommendations throughout (Wilflex, Baselayr, Chromaline, Gildan, Bella+Canvas)
- Supplier guide: SanMar, S&S Activewear, Alphabroder, online retailers
- Orange category tag (Equipment & Supplies)
- **SEO target: "screen printing supplies" / "screen printing supplies checklist"**

### `article-ghosting-staining.html` — Article #17 *(NEW — Session 5)*
"How to Prevent Ghosting and Staining on Screens" — ~3,500+ words:
- 9 sections: The Ghost in Your Screen, Ghosting vs Staining, Causes, Prevention, Removal Steps, Stubborn Stains, Ink-Specific Tips, Maintenance Best Practices, Bottom Line
- Step-by-step removal process with specific products (Franmar, CCI, Ulano)
- Ink-specific advice: plastisol, water-based, discharge, UV, fluorescent
- Screen maintenance routine checklist
- Yellow category tag (Tips & Tricks)
- **SEO target: "screen printing ghosting" / "ghost image screen printing" / "screen staining"**

### `article-aspa-plus-launch.html` — Article #18 *(NEW — Session 5)*
"ASPA Launches ASPA+ Membership: What's New for 2026" — ~2,500+ words:
- 8 sections: New Chapter, Why the Change, Three Tiers, CE Credits, Supplier Discounts, What Stays the Same, How to Join, Future of ASPA
- Three tiers detailed: Business $49/yr, Supplier $99/yr, Training $79/yr
- CE credit system explanation
- Legacy member grandfathering emphasized
- Gray category tag (Industry News)
- **SEO target: "ASPA membership" / "screen printing association membership"**

### `login.html` — Member Login Page *(NEW — Session 7)*
Client-side login flow for ASPA+ members:
- Email + password form with mock authentication
- localStorage-based session management (`aspa_member` key stores JSON with name and email)
- Successful login redirects to dashboard.html
- "Forgot Password" and "Join ASPA+" links

### `dashboard.html` — Member Dashboard *(NEW — Session 7)*
ASPA+ member dashboard (auth-gated):
- Welcome header with member name
- Quick-action cards: My Profile, Certifications, CE Credits, Discounts
- Membership status display
- Redirects to login.html if not authenticated

### `discounts.html` — ASPA+ Discounts Page *(NEW — Session 9)*
Dual-view discount page with auth gating:
- **Non-member view:** High-level overview of ASPA+ discount benefits (supplier partnerships, exclusive codes, group buying power) with a prominent "Join ASPA+" CTA
- **Member view:** Full discount listings, partner deals, and active promo codes
- Auth-gated using `localStorage.getItem('aspa_member')` pattern

### `education.html` — Continuous Education Page *(NEW — Session 9)*
Dual-view education hub with auth gating:
- **Non-member view:** Overview of CE opportunities (CE credits, webinars, advanced training, certification prep) with "Join ASPA+" CTA
- **Member view:** Full education catalog with course listings and CE credit tracking
- Same auth-gating pattern as discounts.html

### `ASPA_CSP_Study_Guide.pdf` — Placeholder
Auto-generated placeholder. Dustin will provide the real study guide — just swap the file.

### `community.html` — ASPA+ Community Chat *(NEW — Session 17)*
Real-time Slack-style chat with Supabase Realtime. Three-column layout: left sidebar (user card, channel list), center (messages with inline edit/delete, search), right (online members). 7 channels (5 public, 2 members-only). Avatar upload to Supabase Storage. Admin moderation (is_admin users can delete any message). Profile edit modal (name, company, city, state, photo). Auth-gated for ASPA+ members. ~1870 lines.

---

## Cross-Page Navigation

All pages now have consistent navigation (standardized in Sessions 10–11, widened in Session 18, rewards/community nav aligned in Session 19):
- **Nav bar:** Home, Directory, Certified, Membership, Resources, Jobs, Discounts⁺, Rewards⁺, Education⁺, Community⁺, Join ASPA (CTA) / Log In
- **Nav container:** max-width 100% / full-width (widened from 1200px→1440px→100% in Session 18), link gap 20px, font-size 12.5px
- **ASPA+ gradient links:** Discounts, Rewards, Education, and Community use `.nav-aspa-plus` class with gradient text (`linear-gradient(135deg, #00d4ff, #e91e8c, #ffd400)`) and a gold "⁺" superscript
- **Auth state:** Nav displays "Join ASPA | Log In" for guests, or "Hi, [FirstName] | My ASPA+ | Log Out" for logged-in members
- **Footer:** Directory section (links to directory.html categories), Certification section (CSP Roster, CSP Exam links), Association section (About, Contact, Privacy, Terms)

---

## SEO Strategy

### Current SEO Problems on Live Site
1. Page title is "How to Screen Print T-Shirts" — not branded
2. No meta descriptions, structured data, semantic HTML, internal linking
3. Blog content on Blogger (separate subdomain) — link equity split
4. Equipment & Supplies page is a 404
5. No sitemap or robots.txt

### SEO Architecture for the Redesign
```
screen-printing.us/                          → "screen printing association" / "ASPA"
screen-printing.us/join                      → "join screen printing association"
screen-printing.us/certified-roster          → "certified screen printers" / "CSP certified"
screen-printing.us/exam                      → "screen printer certification exam"
screen-printing.us/directory                 → "find screen printer near me"
screen-printing.us/training                  → "screen printing training online"
screen-printing.us/glossary                  → "screen printing terms" / "glossary"
screen-printing.us/how-to-screen-print       → "how to screen print t-shirts"
screen-printing.us/equipment-guide           → "screen printing equipment"
screen-printing.us/jobs                      → "screen printing jobs"
screen-printing.us/about                     → brand authority
screen-printing.us/contact                   → local SEO signal
```

### Quick SEO Wins Still Needed
- [ ] Add `<title>` and `<meta name="description">` to all pages
- [ ] Add Organization JSON-LD schema to index.html
- [ ] Add FAQ JSON-LD schema to join.html
- [ ] Add Open Graph + Twitter Card meta tags
- [ ] Create sitemap.xml and robots.txt
- [ ] Proper `alt` attributes on all images/icons

---

## Session 7–11 Changelog

### Session 7 — ASPA+ Login System
- Created `login.html` and `dashboard.html` for member authentication
- Implemented client-side auth via `localStorage.getItem('aspa_member')` storing `{name, email}` JSON
- Added auth-gated content sections on index.html (ASPA+ exclusive resources area)
- Auth check on resources.html was comparing to `'true'` string instead of checking existence — fixed

### Session 8 — Logo & Nav Gradient Styling
- Applied gradient styling to ASPA logo text across all pages
- Standardized nav layout using inline `.nav-logo` pattern (logo text + subtitle)

### Session 9 — Discounts & Education Pages + ASPA+ Gating
- Created `discounts.html` with dual-view (public teaser / member content)
- Created `education.html` with dual-view (public teaser / member content)
- Added gradient `.nav-aspa-plus` links to nav on all pages
- Standardized nav bar across all pages to match `certified-roster.html` baseline format

### Session 10 — Nav Standardization (Major Cleanup)
- Used `certified-roster.html` as the nav CSS baseline and audited all 28+ pages
- Fixed 11 non-compliant pages: standardized nav CSS (`.nav-container`, `.nav-links`, `.nav-cta`, etc.)
- Fixed `about.html` leftover `.nav-logo` CSS that was hiding the "SCREEN PRINTING" subtitle
- Fixed `discounts.html` erroneous extra nav row
- Standardized mobile-menu visibility, generic selector scoping, logo structure, hamburger element, and `.nav-aspa-plus` CSS across all pages

### Session 11 — Auth State Timing Fix (Major Debug)
- **Problem:** `updateNavAuthState()` worked when called manually from console but failed on automatic page load on `index.html`, despite no JS errors, correct DOM, and correct localStorage data
- Tried four approaches in order: readyState/DOMContentLoaded pattern → direct function calls at page bottom → `setTimeout(updateNavAuthState, 0)` → inline `<script>` immediately after `navAuthContainer`
- **Solution:** Inline `<script>` tag placed immediately after the `navAuthContainer` div that runs during HTML parsing (before any other scripts execute). This was the only approach that reliably worked.
- Applied the inline auth script to all 28 content pages
- Added "Log In" link to the static nav HTML on all pages so it's visible even without JS
- All commits pushed and verified on live GitHub Pages site

### Session 12 — Supabase Backend Migration (March 8)
- Migrated from localStorage mock auth to **Supabase Auth + PostgreSQL**
- Created Supabase project (ASPA Website Backend) on free tier
- Set up `profiles` table with member data (tier, company, join date, etc.)
- Created `supabase-init.js` shared auth loader — loads Supabase CDN, calls `getSession()`, fetches profile, dispatches `aspa-auth-ready` custom event
- Updated all 35 HTML pages to use Supabase auth
- Built admin dashboard (`admin.html`) for member management
- Added `handleLogout()` and `updateNavForSupabase()` helpers

### Session 13 — Google OAuth + Dashboard Nav Fix (March 9, early)
- **Google OAuth:** Added "Sign in with Google" to `login.html` and `join.html`
- Configured Google Cloud Console OAuth credentials
- Added `https://wstonlslhlvdtbdyteeo.supabase.co` as authorized redirect URI in Supabase dashboard
- Fixed dashboard nav bar misalignment and discounts page auth timing
- Fixed login button CSS selector mismatch (`.login-btn` → `.login-button`)

### Session 14 — UI Polish + Bug Fixes (March 9, later)
- **Discounts page critical fix:** Removed duplicate CSS block (broken `</style>` tag rendered as `>`) and corrupted JS fragment between `toggleMobileMenu()` and `showMemberView()` that caused a syntax error preventing `initPage()` from running — this was why the discounts page kept forcing the unlock screen even for logged-in members
- **Login page logo fix:** Font-size 24px→28px, "Screen Printing"→"SCREEN PRINTING"
- **Broken link cleanup:** Fixed all `certification.html` → `exam.html` and `certified.html` → `certified-roster.html` references across dashboard footer, article-ghosting-staining.html, article-home-based-business.html
- **Login page visual consistency:** Removed decorative gradient blobs (`body::before`/`body::after`) and fixed nav opacity (0.7→0.95) to match rest of site
- **Dashboard nav purple tint fix:** Changed nav background from `rgba(26, 26, 46, 0.85)` (purple-tinted) to `rgba(10, 10, 10, 0.95)` (site-standard near-black), and border-bottom from purple to white/subtle

### Commit History (Session 12–14)
```
25b7baa Fix dashboard nav background to match site-wide style (remove purple tint)
e98eea0 Fix login page nav opacity to match rest of site (0.7 -> 0.95)
58cbbe0 Remove decorative gradient blobs from login page for visual consistency
5168e3b Fix discounts page: remove duplicate CSS and corrupted JS fragment
bd2acee Fix login logo size and remove broken certification.html links
7fd6c00 Fix dashboard nav and discounts page auth timing
3fbf680 Add Google OAuth sign-in and social profile features
3655882 Update handoff docs with Supabase backend details
4aeff79 Fix login button selector: .login-btn → .login-button
7479d7b Add Supabase backend: auth, database, admin dashboard
```

### Commit History (Session 7–11)
```
944c061 Add inline auth script to all 28 pages for instant login state display
0467b2b Add inline auth script immediately after navAuthContainer on index.html
6d71210 Add setTimeout fallback for updateNavAuthState on all pages
da0fd83 Replace readyState/DOMContentLoaded pattern with direct init calls on all pages
b493a0d Fix auth state timing: use readyState check so Hi/Login shows reliably
a8e84ac Add Log In link to initial nav HTML on all pages
e56874b Fix nav variability: mobile-menu, selectors, logo, hamburger, nav-aspa-plus CSS
9f56fa1 Standardize nav CSS across all 11 non-compliant pages
3975a88 Fix about.html: remove leftover nav-logo CSS that hid subtitle
4bf9540 Standardize nav bar across all pages to match certified-roster format
be39c82 Add Discounts+ and Education+ pages with ASPA+ gated content
1277e45 Apply gradient to ASPA logo text and standardize nav across all pages
63ef08f Fix resources.html auth check — was comparing to 'true' string
8507cf7 Add ASPA+ member login system with gated content
```

---

## Authentication Architecture (Session 7–11)

### How It Works
- **Storage:** `localStorage.getItem('aspa_member')` stores a JSON object: `{"name": "Dustin Cochran", "email": "cochran.dustin@gmail.com"}`
- **Login:** `login.html` validates credentials (currently mock) and sets the localStorage key
- **Logout:** `handleLogout(event)` clears localStorage and redirects to index.html
- **Auth check:** Every page checks for the `aspa_member` key on load

### Nav Auth State (the navAuthContainer pattern)
Each page has a `<div id="navAuthContainer">` in the nav with default guest HTML:
```html
<div id="navAuthContainer" style="display: flex; align-items: center; gap: 16px;">
    <a href="join.html" class="nav-cta" id="navJoinBtn">Join ASPA</a>
    <a href="login.html" style="...">Log In</a>
</div>
```

Immediately after this div, an inline `<script>` checks localStorage during HTML parsing and swaps in the logged-in state if applicable:
```html
<script>
(function(){var m=localStorage.getItem('aspa_member');if(m){try{var n=JSON.parse(m).name;
var f=n?n.split(' ')[0]:'Member';document.getElementById('navAuthContainer').innerHTML=
'<span style="...">Hi, '+f+'</span><a href="dashboard.html" style="...">My ASPA+</a>'+
'<a href="#" onclick="handleLogout(event)" style="...">Log Out</a>';}catch(e){}}})();
</script>
```

This inline approach was necessary because bottom-of-page scripts (even direct calls, setTimeout, readyState patterns) were unreliable — particularly on `index.html` where something (suspected browser extension or rendering pipeline) was reverting the navAuthContainer content between script execution and paint.

### Auth-Gated Content Pages
- `discounts.html` and `education.html` show teaser content for guests, full content for members
- `dashboard.html` requires authentication (redirects to login.html if not logged in)
- `index.html` has an ASPA+ exclusive section that toggles based on auth state

### Future: Replace with Real Auth
The localStorage approach is a client-side prototype. When ready for production:
1. Replace with Supabase Auth (already planned — see Next Steps)
2. Keep the same `navAuthContainer` DOM pattern but populate from session tokens
3. Move auth-gated content to server-side rendering or API calls

---

## What's Still Needed

### Immediate Next Steps
- [x] ~~**Admin backend (Supabase)**~~ — Full admin dashboard with Members, Certifications, Exam Results, CE Credits, Audit Log, Points & Rewards, Job Board, Directory Claims tabs. CRM member detail panel with Notes, Contact History, Tags. ✅
- [ ] **Mobile-friendly responsive design audit** — Next priority after auth. Preliminary audit completed (audit files in repo directory, not committed). Mobile hamburger menu needs full implementation.
- [ ] **Real study guide PDF** — Dustin to provide; swap into `ASPA_CSP_Study_Guide.pdf`
- [ ] **Payment integration** — Wire up Stripe/PayPal for ASPA+ recurring billing + CSP exam one-time payment
- [x] ~~**Email delivery**~~ — Resend API integrated for directory claim verification emails (via pg_net + Supabase database functions). API key stored in `site_config` table. Currently using `onboarding@resend.dev` sender. ✅
- [ ] **Resend custom sending domain** — Once ASPA owns its domain, add DNS records (SPF, DKIM, DMARC) in Resend to send from `noreply@aspa.org` (or similar). Also useful for future exam access links and transactional emails.
- [ ] **Exam link security** — One-time-use tokens for exam access
- [ ] **Real ASPA logo** — Currently text-only branding
- [ ] **About page leadership section** — Update with Dustin's info (currently placeholder)

### Pages/Sections Not Yet Built
- [x] ~~Member Directory~~ → `directory.html` ✅
- [x] ~~Membership Signup~~ → `join.html` ✅
- [x] ~~Certified Printer Roster~~ → `certified-roster.html` ✅
- [x] ~~About ASPA~~ → `about.html` ✅
- [x] ~~Contact~~ → `contact.html` ✅
- [x] ~~Privacy Policy~~ → `privacy.html` ✅
- [x] ~~Terms of Use~~ → `terms.html` ✅
- [x] ~~CSP Badge redesign~~ → `csp-badge.svg` ✅
- [x] ~~Resource Hub / Learning Center~~ → `resources.html` ✅
- [x] ~~How to Screen Print pillar article~~ → `article-how-to-screen-print.html` ✅
- [x] ~~Startup Costs pillar article~~ → `article-startup-costs.html` ✅
- [ ] **Glossary** — Searchable A-Z screen printing terminology (high SEO value)
- [x] ~~All 18 articles built~~ → Resource Hub COMPLETE ✅
- [ ] **Videos** page — How-to video library
- [x] ~~Jobs / Marketplace~~ → `jobs.html` + `post-job.html` ✅ (Session 16)
- [x] ~~Community Forum~~ → `community.html` ✅ (Session 17 — real-time chat with channels, edit/delete, search, profiles, avatars, admin moderation)
- [ ] **News** page
- [ ] **Advice Notice & Disclaimers** page
- [ ] **Advertise with Us** page

### ASPA+ Value-Add Ideas (Brainstormed)
- Downloadable business templates (quote sheets, work orders, invoices)
- Pricing calculator tool
- "ASPA+ Verified" digital badge for websites/social media
- Annual "State of Screen Printing" industry report
- Job board / help wanted board
- Digital member card for email signatures and trade shows
- Supplier discount program
- Trade show perks, group insurance referral
- Software discounts (DecoNetwork, Printavo, InkSoft, etc.)
- Monthly "Ink Lab" webinar series
- ~~Private community forum (Slack/Discord)~~ → **DONE (Session 17)** — Built-in real-time chat at community.html
- Monthly member spotlight
- Referral directory for overflow work

### Polish & Production
- [ ] Favicon
- [ ] Analytics integration (GA4)
- [x] SSL and hosting setup → **GitHub Pages** ✅ (HTTPS enforced)
- [ ] 301 redirects from old Google Sites URLs
- [x] ~~Nav bar standardization~~ → All HTML pages use consistent nav from certified-roster.html baseline ✅ (rewards + community aligned in Session 19)
- [x] ~~Auth state in nav~~ → Inline script pattern shows logged-in/logged-out state instantly ✅
- [x] ~~ASPA+ gradient nav links~~ → Discounts⁺ and Education⁺ with gradient text styling ✅
- [x] ~~Nav bar widened~~ → Full-width (100%), 20px gap, 12.5px font across 34 files ✅ (Session 18)
- [ ] Mobile responsive polish (hamburger menu functional but needs responsive design pass)

---

## CE Credit Framework (Discussed Session 4)

ASPA can create its own CE credit system — there's no federal/state regulatory body for screen printing certification. As the industry's certification authority, ASPA defines the rules.

### Proposed Structure
- CSP holders need X credits per renewal cycle (annual or biennial) to maintain "Active" status
- If threshold not met, status drops to "Renewal Due" → "Lapsed" (infrastructure already exists on roster page)
- Credits tied to ASPA+ membership — makes the annual fee sticky and drives engagement

### Activities That Could Earn Credits
- Complete an ASPA article quiz (read article, answer 3-5 questions): 1 credit
- Attend an ASPA webinar: 2 credits
- Complete an ASPA Institute training module: 5 credits
- Pass a specialty mini-exam (advanced textile, industrial, etc.): 10 credits
- Attend an industry trade show/conference: 5 credits (with proof)
- Teach/mentor through ASPA: 3 credits
- Contribute an article or case study to the resource hub: 3 credits

### Technical Requirements (Future Build)
- Member dashboard with credit balance tracking
- Article quiz components at bottom of resource pages
- Activity logging and verification system
- Near-term: could start with honor-system self-reporting or simple form submissions

### Why This Matters for the Business
- Creates ongoing engagement loop (members return regularly for content)
- Makes ASPA+ membership essential (not just a one-time purchase)
- Drives content consumption → boosts SEO metrics
- Differentiates from Printing United Alliance (see competitive analysis below)

---

## Competitive Landscape: Printing United Alliance (Researched Session 4)

### What They Offer
- **Certifications:** G7+ Expert (color management), Digital Color Professional (SGIA legacy), PDAA (architectural film installation), Customer Service Professional. **None are screen printing technique/knowledge certifications.**
- **iLEARNING+ Platform:** 8,000+ learners across 65+ countries. Courses on AI, color management, safety, heat printing, screen printing (broad), workflow. Members get 20% off.
- **Trade Show:** PRINTING United Expo — the industry's biggest annual event
- **Scope:** Broad — commercial, packaging, wide-format, digital, garment, electronics printing

### ASPA's Competitive Position
- **ASPA fills a niche Printing United doesn't:** A dedicated screen printing certification (CSP) testing actual craft knowledge
- **No evidence of a structured CE credit program** at Printing United tied to their certifications — this is an opening for ASPA
- The two organizations serve overlapping but different audiences: Printing United = big-tent industry association; ASPA = laser-focused on screen printing

### Partnership Opportunity
- ASPA as "specialty certification partner" within Printing United's ecosystem
- CSP recognized as qualifying for credits on Printing United's platform (or vice versa)
- ASPA members get discounted Printing United Expo access
- Cross-referral: Printing United points screen-printing-specific inquiries to ASPA
- Co-developed screen printing courses on iLEARNING+ carrying ASPA CSP credit
- **Action item:** Dustin to consider outreach to Printing United Alliance for partnership discussion

---

## Content Strategy: The "Content Ladder" (Designed Session 4)

### Funnel Structure
Three-tier approach to content that turns searchers into members:

**Tier 1 — "Discovery" (free, public, SEO magnets)**
High-volume search terms. Completely free. Establishes ASPA as the authority.
- "How to Screen Print T-Shirts" ✅ BUILT → `article-how-to-screen-print.html`
- "How Much Does It Cost to Start?" ✅ BUILT → `article-startup-costs.html`
- "Screen Printing Equipment Guide for Beginners" ✅ BUILT → `article-equipment-guide.html`
- "Screen Printing vs DTG vs Sublimation" ✅ BUILT → `article-screen-print-vs-dtg.html`
- "10 Common Screen Printing Mistakes" ✅ BUILT → `article-common-mistakes.html`
- "Plastisol vs Water-Based Ink" ✅ BUILT → `article-plastisol-vs-water-based.html`
- "Pricing Your Screen Printing Work" ✅ BUILT → `article-pricing-guide.html`
- "How to Coat and Expose a Screen" ✅ BUILT → `article-coat-and-expose.html`
- "Starting a Home-Based T-Shirt Business" ✅ BUILT → `article-home-based-business.html`
- "Understanding Mesh Counts" ✅ BUILT → `article-mesh-counts.html`
- "Garage Safety for Home Printers" ✅ BUILT → `article-garage-safety.html`
- Screen Printing Glossary A-Z (planned)
- Home Screen Printing Setup (planned)

**Tier 2 — "Education" (free previews → paid training/certification)**
Deeper content positioning ASPA's training and CSP exam as the next step.
- What Does the CSP Exam Cover?
- Skills Every Professional Screen Printer Needs
- From Garage to Shop: Scaling Your Business

**Tier 3 — "Community" (ASPA+ value, member-highlighted)**
Makes membership feel essential.
- Member Directory (find a printer / get found) ✅ BUILT
- Certified Roster (prove credibility) ✅ BUILT
- Member spotlights, industry reports (planned)

### Article Template Established
Both pillar articles use a reusable template pattern:
- Sticky TOC sidebar with IntersectionObserver scroll tracking
- Category-colored pills (cyan for Getting Started, magenta for Business & Growth, etc.)
- Pro tip callout boxes (cyan border), safety warning boxes (orange border), budget breakdown boxes
- Related articles section (3 cards)
- Dual-CTA banner (Get Certified + Join ASPA+)
- Breadcrumb navigation, article metadata (date, read time, author)
- Max-width 800px article body inside 1200px container
- **All 18 articles now live** — Resource Hub content complete, zero "Coming Soon" stubs remaining

---

## Key Decisions Made

1. **Single-page homepage** with anchor nav — keeps it simple, fast
2. **75% passing score** (27 of 36) — matches the live site
3. **36 questions per attempt** randomized from a larger pool (60+)
4. **Gated exam flow** — payment first, study guide delivered immediately, exam link via email
5. **Mock payment for now** — UI built for card/PayPal, easy to wire up later
6. **ASPA+ annual membership model** — replacing one-time fees with $49/$99/$79 per year
7. **Legacy members fully grandfathered** with upgrade path at a discount
8. **Est. 2004** — confirmed from live site
9. **CSP badge redesigned** — modern dark shield design matching site aesthetic, replacing dated gold clip-art
10. **All files self-contained** — inline CSS/JS, no build step, no frameworks
11. **Content ladder approach** — 3-tier funnel (Discovery → Education → Community) to convert searchers into members
12. **ASPA owns its own CE credit system** — no external regulatory body; ASPA defines credit requirements, activities, and thresholds
13. **Printing United Alliance = partner, not competitor** — they don't offer a screen printing craft certification; ASPA fills that niche
14. **Blog content to migrate on-site** — stop building equity for Blogger subdomains; all new content on screen-printing.us
15. **Article template standardized** — sticky TOC, callout boxes, related articles, dual-CTA; reusable for all future articles
16. **Supabase backend live** — Migrated from localStorage mock auth to Supabase Auth + PostgreSQL in Session 12. All 35 pages updated.
20. **Google OAuth live** — "Sign in with Google" added to login.html and join.html (Session 13). Configured in Google Cloud Console + Supabase dashboard.
21. **Nav background standard: `rgba(10, 10, 10, 0.95)`** — ALL pages must use this for the nav bar. Dashboard was using purple-tinted `rgba(26, 26, 46, 0.85)`, login page had `0.7` opacity. Both fixed in Session 14.
22. **Discounts page auth pattern** — Uses `aspa-auth-ready` custom event + `window._supabaseSession` fallback. The `initPage()` function must be defined and called at the bottom of the page script. Corrupted code fragment caused a syntax error that silently broke this in Session 14 (fixed).
17. **Nav baseline: certified-roster.html** — chosen as the canonical nav CSS reference, all pages standardized to match
18. **Inline auth script pattern** — inline `<script>` immediately after navAuthContainer for instant auth state; bottom-of-page scripts proved unreliable
19. **ASPA+ gated content = dual-view** — non-members see teaser + CTA; members see full content (discounts.html, education.html)

## Deployment & Infrastructure (Session 6)

### Live Site
- **URL:** https://aspa-screenprinting.github.io/aspa-site/
- **Platform:** GitHub Pages (free, static hosting with HTTPS)
- **Repository:** https://github.com/aspa-screenprinting/aspa-site (PUBLIC)
- **GitHub Organization:** aspa-screenprinting (owned by ASPA)
- **Branch:** main, deployed from / (root)
- **HTTPS:** Enforced via GitHub Pages settings
- **Files deployed:** 41 files (33 HTML, 1 JS, 1 SVG, 1 PDF, 5 MD/TXT/CSV)

### GitHub Account
- **Personal username:** truhavoc
- **Organization:** aspa-screenprinting (repo lives here)
- **Repo visibility:** Public (required for free GitHub Pages)

### Cloudflare Account (For Future Custom Domain)
- **Email:** cochran.dustin@gmail.com
- **Account ID:** 5f600700ed2890bad60674f53f985e9a
- **Status:** Account created, Cloudflare Workers & Pages GitHub app installed
- **Use case:** When ready to point screen-printing.us to the new site, use Cloudflare DNS to configure the custom domain. GitHub Pages supports custom domains — just add a CNAME record pointing to aspa-screenprinting.github.io and configure in repo Settings > Pages > Custom domain.

### Deployment Workflow
To update the live site:
1. Push changes to the `main` branch on GitHub
2. GitHub Pages automatically rebuilds and deploys (typically under 1 minute)
3. Changes are live at the GitHub Pages URL immediately after build completes

### Security Cleanup Needed
- [x] ~~Revoke the GitHub PAT from Session 5~~ — Deleted ✅
- [x] ~~Revoke "login-link-push" PAT~~ — Deleted ✅
- [ ] Revoke the Cloudflare API token created during Session 6 (Z3y3...) — it was for a CLI deployment attempt that didn't work out
- [ ] Verify "direct-init-fix" PAT was fully deleted (may still exist on GitHub)
- [ ] Consider adding branch protection rules to the main branch if multiple collaborators will be editing

### Future: Custom Domain Setup
When ready to go live on screen-printing.us:
1. In Cloudflare DNS, add a CNAME record: `www` → `aspa-screenprinting.github.io`
2. In Cloudflare DNS, add A records for apex domain pointing to GitHub Pages IPs (185.199.108-111.153)
3. In GitHub repo Settings > Pages > Custom domain, enter `screen-printing.us`
4. GitHub will auto-provision an SSL cert via Let's Encrypt
5. Set up 301 redirects from old Google Sites pages to new URLs

---

## Supabase Backend (Session 12)

### Project Info
- **Organization:** ASPA Screen Printing (FREE tier)
- **Project:** ASPA Website Backend
- **Project URL:** https://wstonlslhlvdtbdyteeo.supabase.co
- **Anon Key:** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzdG9ubHNsaGx2ZHRiZHl0ZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NzQ0MzEsImV4cCI6MjA4ODU1MDQzMX0.FF-M1GDXzXT_c09dSScNA5Gpw7Zxyzcfsjeu5seHS0c
- **Dashboard:** https://supabase.com/dashboard/project/wstonlslhlvdtbdyteeo

### Admin Account
- **Email:** cochran.dustin@gmail.com
- **UID:** 459976f7-968f-487a-9d2b-952f4fdbd09f
- **Role:** is_admin = TRUE, membership_tier = business

### Database Schema (5 tables, all with RLS enabled)
1. **profiles** — Member info (full_name, email, company, membership_tier, is_admin, join_date). Auto-created on signup via `handle_new_user()` trigger.
2. **exam_results** — CSP exam attempts (user_id, score, passed, total_questions, time_taken_seconds, answers_json)
3. **csp_certifications** — CSP certs (user_id, cert_number, status, issued_date, renewal_date). Auto-created on exam pass.
4. **ce_credits** — Continuing education credits (user_id, activity_type, credits, description, earned_date)
5. **audit_logs** — Admin action tracking (admin_id, action, target_table, target_id, details)

### Row Level Security (RLS) Policies
- All tables have RLS enabled
- `is_admin()` helper function checks `profiles.is_admin` for the authenticated user
- Users can read/update their own data; admins can read/write all data
- Profiles are publicly readable (for directory/roster)
- Audit logs are admin-only

### Key Files
- **supabase-init.js** — Shared script loaded on ALL pages. Loads Supabase JS v2 from CDN, initializes client, manages auth state, dispatches `aspa-auth-ready` custom event on window. Provides `window.updateNavForSupabase(profile)` and `window.handleLogout(e)` globally.
- **admin.html** — Full admin dashboard with 5 tabs (Members, Certifications, Exam Results, CE Credits, Audit Log). Admin-gated via `profile.is_admin` check.

### Auth Architecture
- Supabase Auth replaces the old localStorage mock auth
- Every page loads `supabase-init.js` in the `<head>`
- Pages listen for `aspa-auth-ready` custom event to update nav state
- Default nav shows guest state; updates to member state when session resolves (brief flash is expected — async auth)
- Login uses `supabase.auth.signInWithPassword()`
- Signup uses `supabase.auth.signUp()` + profile UPDATE
- Logout clears both Supabase session and legacy localStorage (transition period)
- Password reset uses `supabase.auth.resetPasswordForEmail()`

### Supabase Storage
- **`avatars` bucket** — Public read, authenticated upload/update/delete own folder. Path pattern: `{user_id}/avatar.{ext}`. Public URL: `https://wstonlslhlvdtbdyteeo.supabase.co/storage/v1/object/public/avatars/{user_id}/avatar.{ext}`

### What's NOT Set Up Yet
- Email confirmation (Supabase sends default confirmation emails — should customize template)
- Password reset redirect URL (needs to point to a reset-password.html page on the site)
- ~~Google OAuth / social login~~ → **DONE (Session 13)**
- Email templates customization in Supabase dashboard
- Rate limiting / abuse prevention

---

## Session 15: Gamification & Loyalty Points System (March 10, 2026)

### What Was Built
Complete ASPA+ loyalty points system — earn points for engagement, redeem for merch, discounts, and free membership.

### New Files
- **`points-system.js`** — Core data layer (IIFE module, `window.PointsSystem`). Member functions: getBalance, getHistory, getSocialLinks, submitSocialLink, removeSocialLink, submitClaim, getMyClaims, getRewards, redeemReward, getRedemptions, getActivities. Admin functions: getPendingClaims, approveClaim, denyClaim, awardBonusPoints, getAllClaims, createReward, updateReward, deactivateReward, getSystemStats.
- **`rewards.html`** — Dedicated storefront page. Auth-gated with member/non-member views. Points balance with animated counter, how-it-works section, three reward tiers (Starter/Pro/Elite), confirmation modal, activity feed, toast notifications. Fully responsive.

### Modified Files
- **`dashboard.html`** — Added Points & Rewards section with balance card + 3 earn action cards (Connect Socials with 6 platforms: Instagram, TikTok, Facebook, YouTube, X, LinkedIn; Watch Webinar claim form; Supplier Signup claim form). Removed old "Edit Social Profiles" section (redundant with new Connect Socials panel).
- **`admin.html`** — Added Points & Rewards tab with: stats grid (circulation, pending, redemptions, active earners), pending claims approval queue, award bonus points form, rewards catalog management.
- **28 HTML pages** — Added "Rewards+" nav link after Discounts.

### Supabase Tables (6 new)
- `activities` — Defines earnable activities (social_connect 50pts, webinar_watched 75pts, supplier_signup 100pts, referral 150pts, custom_admin_award 0pts)
- `points_ledger` — Immutable ledger (balance = SUM(earn) - SUM(spend), no mutable balance field)
- `social_links` — Platform + URL per user, auto-awards 50pts on submit
- `activity_claims` — Self-reported claims pending admin approval (webinars, supplier signups)
- `rewards` — Catalog: sticker pack 25pts, t-shirt 50pts, $10 discount 150pts, 1mo membership 250pts, 6mo 500pts, 12mo 1000pts
- `redemptions` — Tracks claimed rewards with status (pending/fulfilled/cancelled)

### Architecture Notes
- Social links award points instantly; webinar/supplier claims require admin approval before points are granted
- Immutable ledger pattern — no desync bugs, full audit trail
- Admin tab lazy-loads on first open to avoid unnecessary Supabase queries
- Schema is ready for OAuth-based social verification later (has `verified` and `verified_at` columns)

---

## Session 16: Job Board & External Job Aggregation (March 10, 2026)

### What Was Built
Full ASPA Job Board — native paid job postings + external job aggregation from Jooble (with infrastructure ready for ZipRecruiter and Adzuna). Admin management panel for listings and API integration. Automated twice-daily refresh via GitHub Actions.

### New Files
- **`jobs.html`** (~1360 lines) — Full job board page. Hero section with gradient heading, search bar with debounce, category/type/location filters, remote toggle. Two sections: Native ASPA Listings (from `job_listings` table, status='active') and External Jobs (from `external_jobs` table) with color-coded source badges (Indeed blue #2164f3, ZipRecruiter green #23a455, Jooble cyan). "Hire Screen Printers" CTA with 3 pricing tiers. Matches dark theme with glass-morphism.
- **`post-job.html`** (~650 lines) — Employer job posting form. Auth-gated (login prompt if not authenticated). 3 pricing tier cards: Standard $49, Featured $99, Premium $149 (all 30-day listings). Full form: company name, logo URL, title, category (11 screen-printing-specific options), job type, experience level, city/state (all US states), remote toggle, salary range, description, application URL/email. Submits to `job_listings` with status='pending', payment_status='unpaid'.
- **`.github/workflows/jooble-refresh.yml`** — GitHub Actions workflow for automated Jooble refresh. Runs at 8 AM and 6 PM UTC daily (cron). Searches 4 keyword variations ('screen printing', 'screen printer', 'press operator screen print', 'DTG printing'), deduplicates by title+company, clears old jooble entries, inserts fresh results into `external_jobs`. Also supports manual trigger via `workflow_dispatch`. Requires 3 repo secrets: `JOOBLE_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`.

### Modified Files
- **`admin.html`** — Added "Job Board" tab (~414 lines) with: stats grid (active/pending/external counts, last refresh timestamp), Jooble API key input + save (stores in `site_config`), manual "Refresh Now" button, pending jobs approval queue (approve/reject), active jobs management (expire), external jobs preview table (clear all).
- **30+ HTML pages** — Added "Jobs" nav link between Resources and Discounts+ across all pages including mobile menus.

### Supabase Tables (3 new + 1 config)
- `job_listings` — Native job posts (UUID PK, posted_by FK to auth.users, company_name, title, description, job_type CHECK, experience_level CHECK, location fields, salary range, category CHECK with 11 options, is_featured, status CHECK pending/active/expired/cancelled, payment_status, listing_tier standard/featured/premium, expires_at). RLS: public read for active, user-owned insert/update, admin update.
- `job_applications` — Application tracking (job_id FK, applicant_id FK, resume_url, cover_letter, status pending/reviewed/shortlisted/rejected). RLS: applicant insert own, poster can read their job's apps.
- `external_jobs` — Cached external listings (source CHECK indeed/ziprecruiter/other, external_id, title, company_name, location, description_snippet, url, posted_date, is_active, UNIQUE on source+external_id). RLS: public read, admin manage.
- `site_config` — Key-value store for API keys and settings (key TEXT PK, value TEXT, updated_at). RLS: admin-only. Currently stores `jooble_api_key` and `jooble_last_refresh`.

### External API Integration Priority
1. **Native listings** — Built and live (pending Stripe for payments)
2. **ZipRecruiter Partner Program** — Best fit: open partner program, no traffic minimums, ~$0.80-$1.00 CPC revenue share, ~50/50 split. Apply at partners.ziprecruiter.com.
3. **Adzuna** — Free API + affiliate/CPA revenue model. Good secondary source.
4. **Jooble** — Free API, no revenue sharing, good for content volume. **Integrated and automated.**
5. **Indeed Publisher** — Requires 10k+ daily pageviews site-wide. Not viable yet.

### Architecture Notes
- Job posting flow: Employer submits → status='pending' → Admin approves in admin panel → status='active' → visible on jobs.html
- External jobs are cached server-side (GitHub Actions → Supabase) not fetched client-side, keeping API keys secure
- Admin panel has both manual refresh and the automated cron handles twice-daily updates
- GitHub Actions secrets needed: `JOOBLE_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_KEY` (service role key bypasses RLS)
- 11 job categories: press-operator, screen-maker, artist-designer, production-manager, sales, shipping-fulfillment, equipment-tech, embroidery, dtg-dtf, general, other

### Setup Steps Still Needed
1. Sign up for Jooble API key at jooble.org/api/about
2. Add 3 GitHub repo secrets (Settings → Secrets → Actions): `JOOBLE_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`
3. Apply for ZipRecruiter Partner Program at partners.ziprecruiter.com
4. Apply for Adzuna API access
5. Integrate Stripe for paid native listings (payment_status flow)

---

## Session 17: Community Chat — Real-Time Messaging (March 12, 2026)

### What Was Built
Full Slack-style community chat page with real-time messaging via Supabase Realtime. Three-column layout (sidebar / messages / online members). Auth-gated for ASPA+ members. Channels, message editing/deletion, search, profile editing, admin moderation, and avatar image upload.

### New Files
- **`community.html`** (~1870 lines) — Complete community chat page. Left sidebar: user card with avatar + "Edit profile" link, channel list (general, ink-chemistry, equipment, business, classifieds + members-only: csp-prep, supplier-deals). Center: channel header with search toggle, scrollable message area with avatars/badges/timestamps, message input with Enter-to-send. Right sidebar: online members list with presence tracking. Dark theme matching site (--chat-bg #0F0D0B, --chat-accent #8B1A1A).

### Features Implemented
- **Real-time messaging** — Supabase Realtime subscriptions for INSERT, UPDATE, DELETE on `community_messages`. Messages appear instantly for all connected users.
- **Message edit/delete** — Hover actions on own messages. Edit opens inline textarea (Enter to save, Esc to cancel). Delete with confirmation. `edited_at` timestamp shown as "(edited)" tag.
- **Channel search** — Toggle search bar, filters messages by text content with highlighted matches, clear button.
- **Profile editing** — Modal with Display Name, Company, City, State fields. Saves to `profiles` table.
- **Avatar upload** — Upload JPG/PNG/WebP (max 2MB) to Supabase Storage `avatars` bucket. Preview in modal before saving. Falls back to colored initials if no avatar set. Cache-bust param on URL for instant updates.
- **Admin moderation** — Users with `is_admin=true` on profiles see delete button on all messages (not just their own). Separate `adminDeleteMessage()` bypasses user_id check.
- **Online presence** — Supabase Realtime presence channel tracks connected users.
- **ASPA+ badges** — CSP badge shown next to certified users' names in messages.

### Supabase Changes (Session 17)
- **`community_channels`** table — id (UUID), name, description, is_members_only, display_order. 7 channels seeded.
- **`community_messages`** table — id (UUID), channel_id FK, user_id FK to profiles(id), content TEXT, edited_at TIMESTAMPTZ, created_at. RLS: public read, authenticated insert own, update own, delete own, admin delete any.
- **`profiles.avatar_url`** column — TEXT, stores Supabase Storage public URL.
- **`avatars` storage bucket** — Public read, authenticated upload/update/delete own folder (`user_id/*` path pattern).
- **FK fix** — Added `community_messages.user_id → profiles(id)` (public schema) because PostgREST can't follow cross-schema FKs to `auth.users`.

### Bugs Fixed
- `getAvatarElement is not defined` crash — Dead function call in `populateUserCard()` prevented chat initialization. Removed.
- PostgREST PGRST200 error — Cross-schema FK from community_messages to auth.users. Fixed by adding public-schema FK to profiles.
- GitHub Pages cache — Old version served after push. Fixed with hard refresh.

### Modified Files
- **31 HTML pages** — Added "Community+" nav link with gradient ASPA+ styling after Education+.

---

## Session 18: Nav Bar Width Fix + Avatar Upload Completion (March 12, 2026)

### What Was Built
Widened the navigation bar across all pages to fix cramped layout caused by 10+ nav items. Also completed the avatar upload feature from Session 17.

### Nav CSS Changes (34 files updated)
- **`.nav-container` max-width:** 1200px → 1440px → **100% full-width** (1440px still cramped on some laptops, so went full-width)
- **`.nav-links` gap:** 32px → **20px** (tighter spacing between links)
- **`.nav-links a` font-size:** 14px → **12.5px** (slightly smaller text to fit comfortably)

### Avatar Upload Functions Added
- **`previewAvatar(input)`** — Validates file size (max 2MB), reads as data URL, shows live preview in profile edit modal.
- **`openProfileEdit()`** — Updated to show current avatar (or initials fallback) in modal preview, resets file input state.
- **`saveProfileEdit()`** — Updated to upload file to Supabase Storage at `avatars/{user_id}/avatar.{ext}` with upsert, cache-bust URL, saves `avatar_url` to profiles table.
- **`avatarInnerHtml(url, name)`** / **`avatarBgStyle(url, name)`** — Helper functions for rendering avatar images with initials fallback throughout the UI.

### Commit History (Session 17–18)
- `787812e` Add ASPA Community real-time chat page
- `46f8de8` Fix community chat init crash: remove dead getAvatarElement call
- `4a116be` Add message edit/delete, channel search, and profile editing
- `98ba9e2` Add admin moderation: admins can delete any message
- `1d8c146` Add profile avatar upload with Supabase Storage
- `afcca84` Widen nav bar: 1440px max-width, tighter link spacing
- `5150f18` Make nav full-width across all pages

---

## Session 19: Nav Consistency Fix + Join Page Cleanup (March 12, 2026)

### What Was Built
Fixed nav inconsistency across rewards.html and community.html — both pages had outdated nav CSS and HTML that didn't match the standard pattern used by all other pages. Also fixed broken "Log In" link and updated logo on join.html.

### Nav Fixes (rewards.html + community.html)
**CSS updates:**
- `.nav-links` gap: 24px → **20px** (matching standard)
- `.nav-links a`: removed uppercase/letter-spacing, set to **12.5px / font-weight 500** (was 0.9rem with letter-spacing 1.5px and text-transform uppercase)
- `.nav-cta`: changed from magenta-purple gradient with white text → **cyan-magenta gradient with dark text** (matching standard)
- `.nav-logo-sub`: added font-weight 600, opacity 0.7, fixed font-size to 14px
- `.hamburger`: updated gap to 6px, added border-radius 2px on spans
- `.nav-aspa-plus`: added `!important` flags to match standard

**HTML updates:**
- Logo elements: `<span>` → `<div>`, fixed "SCREEN<br>PRINTING" → "SCREEN PRINTING"
- Auth container: moved outside `<ul class="nav-links">` to standalone `<div>` (matching standard)
- Hamburger: `<div>` → `<button>` with `toggleMobileMenu()` function
- Added missing nav links: Certified, Membership, Education, Community (rewards had only 6 items; now all pages have 10)

### Join Page Fixes
- **Log In link:** Replaced placeholder `alert('Log in feature coming soon')` with actual link to `login.html`
- **Logo:** Changed "ASPA MEMBERSHIP" to "ASPA SCREEN PRINTING" to match standard site branding

### Community Chat Features (Session 19 continued)
Added 8 new features to the community chat system (`community.html`):

1. **Emoji Reactions** — Quick-react bar (👍 ❤️ 😂 🔥 👏 🎯) on every message. Stored in `community_reactions` table with realtime sync. Users can toggle reactions; counts display below messages.
2. **@Mentions + Reply/Quote** — Reply button on messages shows quoted preview above input field. `reply_to` column links threaded messages. @Name mentions highlighted with red tint, parsed via `parseMessageContent()`.
3. **Typing Indicators** — Supabase Presence broadcasts typing state with 3-second debounce. Animated dots show who's typing in current channel.
4. **Unread Indicators** — Enhanced localStorage tracking with per-channel badge counts on channel buttons. Clears when channel is opened.
5. **Image/File Sharing** — 📎 button triggers file picker. Uploads to `chat-attachments` Supabase Storage bucket. Images display inline with lightbox zoom; files show download links.
6. **Pinned Messages** — Admin-only pin/unpin toggle. Pinned message banner appears at top of channel with jump-to-message functionality.
7. **Notification Bell** — 🔔 icon with red badge count for missed @mentions across all channels. Dropdown panel lists recent mentions with jump-to navigation.
8. **@all Mentions** — Special @all tag highlighted in cyan, triggers notification for all users in channel.

**Database migration required:** `supabase-migration-session19.sql` must be run in Supabase SQL Editor. Creates `community_reactions` table, adds columns (`reply_to`, `attachment_url`, `attachment_type`, `is_pinned`) to `community_messages`, and creates `chat-attachments` storage bucket with RLS policies.

### Commit History (Session 19)
- `8eaf01a` Fix nav consistency on rewards and community pages
- `b231d71` Fix Log In link on join page
- `63a1d2d` Update join page logo to standard ASPA Screen Printing
- `a176d37` Add 8 community chat features: reactions, mentions, typing, images, pins

---

## Session 20: Community Chat Polish + Brand Refresh (March 12, 2026)

### Bug Fixes
- **Duplicate message sending** — Two `sendMessage` function definitions and two `keydown` event listeners both firing on Enter. Removed the original, kept the enhanced version with attachments and replies.
- **Image upload filename errors** — Filenames with spaces caused Supabase Storage "Invalid key" errors. Fixed with sanitization: `name.replace(/[^a-zA-Z0-9._-]/g, '_')`
- **Init crash (populateUserCard)** — `document.getElementById('currentUserAvatar')` returned null because the online members sidebar changed from static HTML to dynamically rendered. Crashed `initializeChat`, blocking ALL features. Fixed with null checks.
- **Notification bell not dismissing** — Toggle was hiding the panel without clearing mentions/badge. Fixed by calling `closeMentionsPanel()`.
- **Unread channel badges showing "1" everywhere** — Was filtering current channel's `state.messages` for ALL channels (always wrong). Replaced with per-channel Supabase count queries and a global realtime subscription for live badge updates.

### New Features
- **@Mention Autocomplete** — Type `@` in the message input to see a filtered dropdown of all users plus @all. Arrow keys navigate, Tab/Enter select, Escape dismisses. Loads all profiles from Supabase on init.
- **Online/Offline Members Sidebar** — Real-time presence tracking via Supabase Presence channels. Shows "Online — N" section with green dots and "Offline — N" section with greyed-out entries. Auto-populates from `allUsers` list.
- **Teams-Style Emoji Picker** — Completely redesigned from flat 6-emoji grid to a full picker with: search bar at top with emoji name matching, "Recent" section tracking last 24 used emojis (persisted in localStorage), all 8 categories visible with sticky section headers while scrolling, ~350 emojis across categories (Smileys & People, Gestures & Body, Hearts & Emotions, Animals & Nature, Food & Drink, Activities & Objects, Travel & Places, Symbols & Flags), category icon tabs at bottom (scroll-to-category on click, auto-highlight on scroll), click-outside-to-dismiss.
- **Presence-Based Typing Indicators** — Refactored from creating new Supabase channels per keystroke to using a shared `state.presenceChannel`, dramatically reducing connection overhead.

### Brand Color Refresh
Replaced the entire brown/maroon color palette with an on-brand dark navy/indigo theme. See **Brand Guide** section below.

### Commit History (Session 20)
- `44067c6` Fix duplicate message sending
- `fb8120f` Add @mention autocomplete + fix image upload filenames
- `6897405` Add real-time presence tracking for online members sidebar
- `950fd6a` Fix notification bell dismiss
- `5fa2e61` Fix init crash: null check for populateUserCard
- `c643f2f` Add offline members, Slack-style emoji picker, click-outside dismiss
- `3471d2d` Teams-style emoji picker + fix unread channel badges
- `cafacd7` Refresh brand colors: dark navy theme with gradient accents

---

## Session 21: Brand Audit + Dashboard Overhaul (March 13, 2026)

### Brand Audit & Fixes
- **Full site audit** across all 37 HTML files for off-brand colors
- **Fixed hero ink splatter bug** on index.html — `.ink-splatter` divs had no base CSS (`position: absolute`, `border-radius: 50%`, `filter: blur(120px)`), causing hard-edged maroon rectangles instead of soft gradient blobs
- **Footer background standardization** — all pages now use `var(--ink-dark)` consistently
- **Nav upgrade** propagated across all 35+ pages — ASPA+ gradient pill, increased font size
- **Confirmed resources.html is complete** — all 18 articles wired up with `comingSoon: false`
- **Confirmed ink-splatter class is only used in index.html** — no other pages affected

### Dashboard Overhaul (dashboard.html)
Transformed the member dashboard from a placeholder landing page into a fully fleshed-out member hub:

1. **Digital Membership Card** — Glass-morphism card with gradient border, ASPA branding, member name, tier badge, member ID (ASPA-2026-XXXXX), join/expiry dates, holographic shimmer animation, ASPA+ watermark
2. **CE Credits Progress Ring** — SVG circular progress indicator showing X/12 credits toward recertification, replaces static "0" counter
3. **Directory Listing Preview** — "Your Directory Listing" section showing business name, location, monthly views, specialty tags, Edit Listing button, ASPA+ Boost Visibility badge
4. **Recommended For You** — 4 contextual nudge cards: Complete Your Profile, Take the CSP Exam, Earn Your First 100 Points, Join the Community — each with icon, description, and gradient CTA button
5. **Enhanced My Certification Card** — Now clickable with certification expiry line and Download Certificate micro-button
6. **Activated 3 Benefit Cards** — Removed "Coming Soon" from CE Credits & Tracking, My Directory Listing, and Exclusive Resources (all now link to their respective pages)
7. **Kept "Coming Soon"** on genuinely unbuilt features: STCH Deals, Advanced Training, Supplier Spotlights, STCH Buying Group

### Content Audit Results
Pages needing work (prioritized):
- ~~dashboard.html~~ — **DONE** (this session)
- education.html — Learning paths, CE credits, course structure (skeleton)
- rewards.html — Earn/redeem system, point tiers (thin)
- directory.html — Member search with sample data (skeleton)
- certified-roster.html — Certified printer profiles (skeleton)
- jobs.html + post-job.html — Job board with listings (skeleton)

### Commit History (Session 21)
- `8da88a5` Fix hero ink splatters rendering as hard-edged maroon rectangles
- `0cd1f6c` Flesh out member dashboard: membership card, CE ring, activity feed, directory preview, next steps

---

## Session 22: Directory Overhaul + Certificate Bling (March 13, 2026)

### What Was Done
1. **Directory page completely overhauled** — Replaced skeleton directory with full-featured member directory
   - Scraped ALL real member data from live ASPA site (screen-printing.us/find-a-printer)
   - Scraped 4 US regional pages (North, South, East, West) — 104 members
   - Scraped 4 category pages (Custom T-Shirts, Screen Printing, Custom Embroidery, Signs & Banners) — 133 members
   - Equipment & Supplies category page was 404, International page was 404
   - Merged and deduplicated across both sources → **210 unique members** with proper multi-category assignments
   - Each member has: name, category, location, description, specialties, badges, initials
   - Categories: tshirt (152), embroidery (21), sign (18), supplier (13), equipment (4), education (2)
   - Members appearing in multiple category pages got enriched specialty tags (e.g., "Custom Embroidery" added to screen printers who also do embroidery)

2. **Directory UI features** (carried from initial rewrite):
   - Glass-morphism cards with gradient borders and category-colored avatars
   - Featured Members horizontal scroll section
   - Sort controls: A-Z, Z-A, Newest, Most Established
   - Grid/list view toggle
   - Category, location, ASPA+, CSP filters
   - Search by company name or location
   - Pagination (12 per page)
   - URL hash state for shareable filtered views
   - Falls back to hardcoded data when Supabase unavailable

3. **Membership certificate upgraded from plain text to branded PDF**
   - Was: ASCII art `.txt` file download
   - Now: Professional landscape PDF via jsPDF with full ASPA branding
   - Features: dark background, triple-line decorative border (cyan/magenta/gold), corner ornaments, gradient accent lines, tier-colored badge, golden member name with underline, company name, seal emblem with star, certificate number, validity dates, footer with ASPA branding
   - Tier badge color adapts to membership level (Starter=cyan, Professional=purple, Premium=magenta, Enterprise=gold)

### Commit History (Session 22)
- `e96b367` Rewrite directory with enhanced cards, featured section, 21 sample members
- `36096d4` Expand directory to 210 real ASPA members with proper category data
- `51399ed` Upgrade membership certificate from plain text to branded PDF

### What's Next (Session 22)
- Consider adding more member detail fields (phone, website, social links) as data becomes available
- Category landing pages could be built as separate views or deep-linked filter states
- Certificate could be further enhanced with custom fonts or embedded ASPA logo image
- The live site's Equipment & Supplies and International member pages are broken (404) — data from those would need manual collection

---

## Session 23: Directory Location Filter + Admin Panel Fixes (March 15, 2026)

### Directory Location Filter Redesign (`directory.html`)
- **Replaced** free-text location input with 3-way toggle: All / US / International
- **US toggle** shows dynamic state dropdown populated from member data (only states with members appear)
- **International toggle** shows dynamic country dropdown populated from member data
- **Added** `US_STATES` lookup object and helper functions: `getStateFromLocation()`, `isUSMember()`, `getCountryFromLocation()`
- **Fixed** broken US filter — old code checked for "US"/"USA"/"United States" in location strings, but member locations use "City, ST" format (e.g., "Garden City, ID")
- **Updated** filter state from single `location` field to `locationScope` + `state` + `country` fields
- **URL state persistence** updated for new filter fields via `saveStateToHash`/`restoreStateFromHash`

### Category Badge Readability Fix (`directory.html`)
- **Changed** category badge from purple (`#6c2bd9`) to magenta (`#e91e8c`) — much better contrast on dark backgrounds
- **Added** `categoryDisplayNames` mapping so "tshirt" displays as "T-Shirt Printer", "sign" as "Signs & Graphics", etc.

### Admin Dashboard Enhancements (`admin.html`)
- **Added** conditional "Admin" nav link in `supabase-init.js` — only visible to users with `is_admin: true`, styled in yellow
- **Added** password reset button to Edit Member modal — triggers `resetPasswordForEmail()` via Supabase Auth API, logs to `audit_logs`
- **Fixed** all 4 broken tab queries (Certifications, Exam Results, CE Credits, Audit Log) — removed Supabase JOIN syntax (`profiles:user_id(full_name, email)`) that required unconfigured foreign key relationships. Replaced with client-side user resolution from `cachedMembers` array.

### Commit History (Session 23)
- `fb51e7e` Fix category badge readability: purple→magenta + friendly display names
- `2cb5703` Add Admin nav link for admin users + password reset in admin panel
- `9058d61` Fix admin panel: remove broken JOIN queries, resolve users from cache

### What's Next
- Job board enhancements: source-specific badges, unified job list, zip+radius filter, HTML stripping (plan exists)
- Admin panel: configure Supabase foreign key relationships so JOINs work natively (optional optimization)
- Directory: add member detail fields (phone, website, social links) as data becomes available

---

## Session 24: Directory Claims + CRM Panel (March 16, 2026)

### Directory Listing Claim System (`directory.html`)
- **Self-service claim flow** for ASPA+ members — two-step email verification
- **Step 1:** Member enters business email address associated with the listing
- **Step 2:** 6-digit verification code sent via Resend API (through `pg_net` extension in Supabase)
- **Auto-approve** if email domain matches the business website domain; otherwise sent to admin review
- **Claim modal** with branded styling, status messages, resend code option
- **Edit listing modal** for approved claims — members can update their business info
- **Supabase tables:** `directory_claims`, `directory_listings`, `directory_edit_history`
- **RPC functions:** `send_claim_verification()`, `verify_claim_code()` — server-side, no Edge Functions needed

### Email Verification Infrastructure
- **Resend API** integrated via `pg_net` PostgreSQL extension (HTTP calls from database functions)
- **API key** stored in `site_config` table (not hardcoded) — function reads it dynamically
- **Current sender:** `onboarding@resend.dev` (default) — needs custom domain once ASPA domain is owned

### CRM Member Detail Panel (`admin.html`)
- **Slide-in panel** (800px wide, from right) opens via "View" button on each member row
- **Three sub-tabs:**
  - **Overview** — Contact info (phone, secondary email, website, LinkedIn), membership details, admin status (active/at-risk/churned/prospect/VIP), editable fields with save, tags with add/remove, quick stats
  - **Notes** — Add/view/pin/delete admin notes with categories (general, renewal, support, opportunity, concern, follow-up), sorted pinned-first then newest
  - **Contact History** — Log interactions (email, phone, meeting, chat, event) with direction (inbound/outbound), subject, details, follow-up date tracking, mark-complete
- **Supabase tables:** `member_notes`, `member_interactions`, `member_tags`
- **Profile CRM fields added:** phone, secondary_email, website, linkedin, renewal_date, member_since, admin_status
- **RLS policies:** admin-only access for all CRM tables

### Directory Claims Admin Tab (`admin.html`)
- **Stats grid:** Pending, Approved, Denied, Total claims
- **Pending claims queue** with Approve/Deny buttons
- **Claims history table** with status, method, dates
- **Lazy-loaded** on first tab visit

### Commit History (Session 24)
- `cff44ca` Add self-service directory listing claim system for ASPA+ members
- `3c79fbb` Add email verification to directory claim flow
- `f23e35b` Add CRM member detail panel to admin dashboard

### What's Next
- [ ] **Resend custom sending domain** — Add DNS records once ASPA domain is owned (SPF, DKIM, DMARC) so emails send from `noreply@aspa.org`
- Mobile responsive polish pass
- Glossary page (high SEO value)
- Payment integration (Stripe/PayPal)

---

## Session 25: Dashboard Listing Editor + Promo Codes Admin Tab (March 17, 2026)

### Per-User Promo Code Limits (`admin.html`, `jobs.html`)
- **New `max_uses_per_user` column** on `promo_codes` table — limits how many times a single user can redeem a given code
- **New `promo_code_uses` table** — tracks individual redemptions with `user_id`, `promo_code_id`, `used_at`
- **Validation in 3-step job posting wizard** (`jobs.html`) — checks per-user limit before applying discount
- **Admin UI** — new column in promo codes table, editable when creating/editing codes

### Dashboard Self-Service Directory Listing Editing (`dashboard.html`)
- **"My Business Listing" section** on member dashboard for ASPA+ members with approved directory claims
- **View mode** — displays business name, category, location, description, contact info, specialties (as tags), and social links with clickable icons
- **Edit mode** — inline form with all fields pre-populated, toggle between view/edit with a single button
- **Save flow** — updates `directory_listings` table via Supabase, logs changes to `directory_edit_history`, displays success/error feedback
- **Schema alignment** — fixed column name mismatches throughout: `claimed_by` → `owner_id`, `business_name` → `name`, `social_links` → `social`
- **Supabase PostgREST fix** — `.catch()` doesn't exist on PostgREST builder objects; replaced with `try/catch` around `await` for edit history logging

### Promo Codes Standalone Admin Tab (`admin.html`)
- **Moved Promo Codes out of Job Board tab** into its own first-class admin tab (green tab button)
- **Stats cards:** Active Codes, Total Redemptions, Job Posting Codes, Membership Codes — all with branded ink colors
- **`applies_to` field** already existed on `promo_codes` table with values: `job_posting`, `membership`, `both`
- **Lazy-loaded** via `switchTab()` pattern with `_promoCodesLoaded` flag
- **Purpose:** Decouple promo codes from job board so they can be used for ASPA+ membership discounts too

### 3-Step Job Posting Wizard (`jobs.html`)
- **Step 1:** Job details form (title, company, location, description, category, type, salary, application URL)
- **Step 2:** Select listing tier ($49 Basic / $99 Featured / $149 Premium) with feature comparison
- **Step 3:** Payment + optional promo code application, with per-user redemption limit enforcement

### Commit History (Session 25)
- `30e7229` Add per-user promo code usage limits
- `1c21333` Add self-service directory listing editing to member dashboard
- `499412d` Fix directory listing column names to match actual schema
- `3ea20fe` Fix edit history logging crash in saveListingEdits
- `8b6472f` Move Promo Codes to standalone admin tab

### What's Next
- [ ] **Wire up membership promo codes** — Membership signup flow doesn't yet validate promo codes (admin structure + `applies_to` field ready)
- [ ] **One-time point rewards for listing fields** — Award loyalty points when members fill out profile/listing fields for the first time
- [ ] **Resend custom sending domain** — DNS records (SPF, DKIM, DMARC) once ASPA domain is owned
- [ ] **Job board enhancements** — Source-specific badges (detect actual source from URL), unified native+external list, zip+radius location filter, strip HTML from description snippets
- [ ] Mobile responsive polish pass
- [ ] Glossary page (high SEO value)
- [ ] Payment integration (Stripe/PayPal)

---

## Brand Guide

The ASPA brand uses a bold, vibrant color palette inspired by screen printing ink colors. All UI components should draw from these values.

### Primary Brand Colors
| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Cyan | `#00d4ff` | `--ink-cyan` | Primary accent, online indicators, @all highlights |
| Magenta | `#e91e8c` | `--ink-magenta` | Accent, notification badges, focus borders |
| Yellow | `#ffd400` | `--ink-yellow` | Highlights, ASPA+ branding |
| Purple | `#6c2bd9` | `--ink-purple` | Secondary accent |
| Orange | `#ff6b35` | `--ink-orange` | Warnings, attention |

### Brand Gradient
```css
background: linear-gradient(135deg, #00d4ff 0%, #e91e8c 50%, #ffd400 100%);
```
Used for: ASPA+ logo text, sidebar branding, avatar borders. A two-color variant (cyan→magenta) is used for active channel highlights and unread badges.

### Chat Theme (Dark Mode)
| Token | Hex | Purpose |
|-------|-----|---------|
| `--chat-bg` | `#0C0E1A` | Main background — deep navy |
| `--chat-sidebar` | `#111528` | Sidebar background — dark indigo |
| `--chat-border` | `#1E2340` | Borders — slate blue |
| `--chat-text` | `#E8ECF8` | Primary text — cool white |
| `--chat-text-secondary` | `#7B82A0` | Muted text — blue-grey |
| `--chat-text-muted` | `#4A5070` | Very muted text — slate |
| `--chat-accent-red` | `#e91e8c` | Accent (magenta, NOT maroon) |
| `--chat-accent-gradient` | `linear-gradient(135deg, #00d4ff, #e91e8c)` | Active states, badges |
| `--chat-accent-gradient-subtle` | Same with 15% opacity | Hover states |
| `--chat-online` | `#00d4ff` | Online presence dot (cyan) |
| `--chat-message` | `#C8D0E8` | Message body text |

### Design Principles
- **Dark navy, not brown** — Background tones use blue/indigo undertones, never brown or warm grey.
- **Gradient for emphasis** — Active/selected states use the cyan→magenta gradient. Never use flat maroon (#8B1A1A) — that's the old palette.
- **Cool neutrals** — Text and border colors lean blue-grey, not warm beige.
- **Brand gradient sparingly** — The full 3-color gradient (cyan→magenta→yellow) is reserved for branding elements (logo, ASPA+ badge). UI elements use the 2-color variant.

---

## Content Migration Gap Analysis (March 10, 2026)

Compared original site (screen-printing.us, built on Google Sites + Blogger) against new GitHub Pages site. The following content still needs to be migrated or built. Items are prioritized and should be tackled in order.

### Priority 1 — Core Content Gaps

- [x] **Registered Printers / Member Profiles** — **COMPLETE (Session 22).** Directory overhauled with 210 real members scraped from live site. Each member has name, category, location, description, specialties, badges, and initials. Cards feature glass-morphism design with category-colored avatars. Falls back to hardcoded data when Supabase unavailable.
- [x] **Category-Based Directory Filtering** — **COMPLETE (Session 22).** Category filter dropdown with: T-Shirt Printers, Equipment, Embroidery, Signs & Graphics, Suppliers, Education. Members properly categorized from scraping all 4 live category pages.
- [x] **Location-Based Directory Filtering** — **COMPLETE (Session 23).** Redesigned with 3-way toggle (All/US/International), dynamic state/country dropdowns, proper state abbreviation detection. URL state persistence for all filter fields.
- [ ] **International Members Page** — Original page is 404 on live site. Data not available for scraping. Would need manual collection.

### Priority 2 — Educational Content

- [ ] **Training / ASPA Institute Page** — Original has a full "Diploma in Screen Printing" online course ($125) with structured modules: Quick Start Guide, Equipment, Glossary, Advanced, Safety, Business, Mesh Chart. We have education articles but not a structured course portal.
- [ ] **Videos Page** — Original has dedicated video tutorials (coating screens, exposing, flash curing, hot split transfers, cleanup). We have no video section.
- [ ] **Screen Printing Glossary** — Terminology reference page. Missing from our site entirely.
- [ ] **Free How-to Book** — "The Secrets of Printing T-Shirts and How to Make Big Money" was offered as a free download. Could be a great lead magnet / ASPA+ perk.
- [ ] **Lesson Plans for Teachers** — Teaching resources for instructors at schools, rehab facilities, etc. Was sold in their Store section.

### Priority 3 — Community & Engagement

- [ ] **News / Blog Section** — Original has an ASPA News page with dated posts. We don't have a news/blog section.
- [x] **Jobs Board** — **COMPLETE (Session 16).** Full native job board with paid listings ($49/$99/$149 tiers) + external job aggregation from Jooble (automated twice-daily via GitHub Actions). Admin management panel built. ZipRecruiter and Adzuna integration planned as next external sources. See Session 16 notes.
- [x] **Community Chat** — **COMPLETE (Session 17).** Real-time Slack-style chat with 7 channels, message edit/delete, search, profile editing, avatar upload, admin moderation. See Session 17 notes.
- [ ] **"Ask ASPA" Q&A Section** — Community Q&A. Could be a dedicated page or integrated into community chat.
- [ ] **"Screen Printer Stories"** — Featured member case studies / success stories. Great for engagement and SEO.
- [ ] **"The Artist's Corner"** — Design-focused content for screen printers.
- [ ] **"Strictly Business"** — Business advice articles (separate from how-to technical content).
- [ ] **ASPA Newsletter Signup** — Newsletter subscription form. Could integrate with an email service.

### Priority 4 — Supplementary Pages

- [ ] **Advertise with Us** — Page for advertising opportunities on the site.
- [ ] **Advice Notice & Disclaimers** — Legal disclaimers page (separate from Privacy/Terms).
- [ ] **Store Page** — Original sold lesson plans and possibly other items. Separate from our points-based rewards store.

### Notes on Original Site Architecture
- Built on Google Sites with content spread across multiple Blogger-hosted blogs (americanscreenprintingassocblog.blogspot.com, screenprintingadvice.blogspot.com, etc.)
- aspamembers.com redirects to screen-printing.us
- Jobs section was NOT self-hosted on original — our new version IS self-hosted with native listings + Jooble aggregation
- Much of the blog content is cross-posted across multiple Blogspot blogs by topic category

---

## Technical Notes

- All files are self-contained HTML with inline CSS and JS — **one shared script: `supabase-init.js`** loaded on every page
- **Supabase Auth** replaces the old localStorage mock auth (Session 12). Auth is async — pages show guest nav first, then update via `aspa-auth-ready` event.
- jsPDF for client-side PDF certificate generation (CDN)
- Mobile responsive throughout (breakpoint at 768px) — needs responsive polish pass
- URL hash-based filter state for shareable directory/roster links
- SPA pattern with showScreen() for multi-step flows (exam, join)
- Debounced search (300ms) with AND logic for combined filters
- Files designed to sit in the same directory
- `.nav-aspa-plus` CSS class provides gradient text for premium nav links
- `certified-roster.html` is the canonical nav CSS reference — all other pages were standardized to match it. Nav set to full-width (max-width: 100%) in Session 18. Rewards and community pages had outdated nav CSS/HTML that was aligned in Session 19.
- Directory and roster pages fall back to hardcoded sample data when Supabase data isn't available
- Exam results are persisted to Supabase; CSP certification auto-created on pass

---

*To resume: share this document at the start of a new session along with any files that need updating. All source files are in the project folder.*
