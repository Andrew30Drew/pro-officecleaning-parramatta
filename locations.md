# Pro Clean Corp — Location Pages Blueprint

> All 653 locations are stored in `app/lib/locations-constant.ts` — that is the source of truth.

---

## Location Page Blueprint — Pro Clean Corp SEO Domination

## URL Structure (use this pattern)
```
procleancorp.com.au/commercial-cleaning/[suburb-slug]
```
Example: `/commercial-cleaning/bondi` | `/commercial-cleaning/parramatta`

- Slug = lowercase, hyphens only, no "nsw" suffix
- Every location card in ServiceLocations.tsx must link to this URL (not contact form)

---

## Full Checklist — Every Single Location Page

### METADATA (Next.js `export const metadata`)
- [ ] `title` → `Commercial Cleaning [Suburb] NSW [Postcode] | Pro Clean Corp`
- [ ] `description` → 150–160 chars, unique per suburb, mention suburb name + postcode + "commercial cleaning"
- [ ] `keywords` → minimum 10 suburb-specific keywords (see keyword list below)
- [ ] `alternates.canonical` → `/commercial-cleaning/[slug]`
- [ ] `openGraph.title` → same as title
- [ ] `openGraph.description` → unique OG description, suburb name in first 5 words
- [ ] `openGraph.url` → `/commercial-cleaning/[slug]`
- [ ] `openGraph.images` → `[{ url: '/meta.png', alt: 'Commercial cleaning [Suburb] NSW' }]`
- [ ] `twitter.card` → `summary_large_image`
- [ ] `robots` → `index, follow`

### KEYWORD TARGETS (inject into content naturally)
Primary:
- `commercial cleaning [Suburb]`
- `commercial cleaning [Suburb] NSW`
- `office cleaning [Suburb]`
- `cleaners [Suburb] NSW`
- `cleaning services [Suburb]`

Secondary:
- `commercial cleaners near me [Suburb]`
- `office cleaners [Suburb] NSW`
- `strata cleaning [Suburb]`
- `industrial cleaning [Suburb]`
- `medical cleaning [Suburb]`
- `childcare cleaning [Suburb]`
- `end of lease cleaning [Suburb]`
- `[Suburb] NSW [Postcode] cleaning`
- `Pro Clean Corp [Suburb]`
- `[Region] commercial cleaning` (e.g. "Sydney Inner West commercial cleaning")

### PAGE STRUCTURE & CONTENT

#### Hero Section
- [ ] `<h1>` → `Commercial Cleaning [Suburb] NSW [Postcode]`
- [ ] Subheading `<h2>` → `Professional Commercial Cleaners Serving [Suburb] & [Region]`
- [ ] Intro paragraph → **minimum 120 words**, unique per suburb:
  - Mention suburb name at least 3x
  - Mention postcode
  - Mention region (e.g. "Sydney Inner West", "Northern Beaches")
  - Mention at least 1 local landmark or area characteristic
  - Include primary keyword naturally in first 2 sentences (BLUF — Bottom Line Up Front)
- [ ] Two CTA buttons: "Get Free Quote" → `/contact-us` | "Call 1300 494 983" → `tel:1300494983`

#### Services Section
- [ ] `<h2>` → `Commercial Cleaning Services in [Suburb] NSW`
- [ ] Minimum 6 service cards, each with `<h3>` containing suburb name:
  - `<h3>` Office Cleaning [Suburb]
  - `<h3>` Strata Cleaning [Suburb]
  - `<h3>` Medical Facility Cleaning [Suburb]
  - `<h3>` Childcare Cleaning [Suburb]
  - `<h3>` Industrial Cleaning [Suburb]
  - `<h3>` End of Lease Cleaning [Suburb]
- [ ] Each card → 40–60 words of unique description mentioning the suburb

#### SEO Body Content — **minimum 600 words total across the page**
- [ ] Section: "About Commercial Cleaning in [Suburb]" — 150+ words
  - Describe the suburb type (residential, commercial hub, industrial, beachside etc.)
  - Why businesses in [Suburb] need professional cleaning
  - What types of businesses are common in [Suburb]
- [ ] Section: "Why Pro Clean Corp is the #1 Choice in [Suburb]" — 100+ words
  - Mention response time, local team, compliance, insurance
- [ ] Section: "Our [Suburb] Cleaning Process" — 80+ words
  - 5-step process with suburb name woven in

#### Why Choose Us Section
- [ ] `<h2>` → `Why Choose Pro Clean Corp in [Suburb] NSW?`
- [ ] 6 bullet points with `<h3>` headings:
  - Local [Suburb] Experts
  - Fully Licensed & Insured
  - Eco-Friendly Products
  - 24/7 Availability
  - 100% Satisfaction Guarantee
  - Free Quotes for [Suburb] Businesses
- [ ] Each point → 1–2 sentences mentioning [Suburb] or [Region]

#### FAQ Section — **minimum 5 questions, suburb-specific**
- [ ] `<h2>` → `Frequently Asked Questions — Commercial Cleaning [Suburb]`
- [ ] Q1: `How much does commercial cleaning cost in [Suburb] NSW?`
- [ ] Q2: `Do you offer office cleaning services in [Suburb]?`
- [ ] Q3: `How often should businesses in [Suburb] schedule commercial cleaning?`
- [ ] Q4: `Are your cleaners in [Suburb] police checked and insured?`
- [ ] Q5: `Do you provide after-hours cleaning in [Suburb] NSW?`
- [ ] Q6 (optional): `What areas near [Suburb] do you also service?`
- [ ] Each answer → 40–80 words, natural language, suburb keyword included
- [ ] FAQ must use `FAQPage` JSON-LD schema (see schema section)

#### Nearby Suburbs Section (Internal Linking — critical)
- [ ] `<h2>` → `Cleaning Services Near [Suburb] NSW`
- [ ] Show 6 neighbouring suburbs as clickable cards/links
- [ ] Each link → `/commercial-cleaning/[neighbour-slug]`
- [ ] This creates a web of internal links across all 653 pages

#### CTA Section
- [ ] `<h2>` → `Get a Free Commercial Cleaning Quote in [Suburb] NSW`
- [ ] Paragraph mentioning suburb name + phone number
- [ ] Button: "Get Free Quote for [Suburb]" → `/contact-us?location=[Suburb]`
- [ ] Button: "Call 1300 494 983"

---

### SCHEMA / JSON-LD (inject in `<script type="application/ld+json">`)

#### Google Business Profile
- GMB URL: `https://share.google/rVLemiF0puaBnNCAf`
- Include in every page's LocalBusiness schema under `sameAs`
- Include as a visible outbound `<a>` link on every location page (e.g. "★ View us on Google Maps") — outbound links to Google signal trust and entity association
- Link text should include suburb name: "View Pro Clean Corp [Suburb] on Google"
- Use `target="_blank" rel="noopener noreferrer"` on all Google links

#### 1. LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.procleancorp.com.au/commercial-cleaning/[slug]#business",
  "name": "Pro Clean Corp — [Suburb] Commercial Cleaning",
  "description": "Professional commercial cleaning services in [Suburb] NSW [Postcode]. Office cleaning, strata cleaning, medical cleaning and more.",
  "url": "https://www.procleancorp.com.au/commercial-cleaning/[slug]",
  "telephone": "1300-494-983",
  "email": "hello@procleancorp.com.au",
  "priceRange": "$$",
  "currenciesAccepted": "AUD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "openingHours": "Mo-Su 06:00-22:00",
  "logo": "https://www.procleancorp.com.au/images/logo.png",
  "image": "https://www.procleancorp.com.au/meta.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[Suburb]",
    "addressRegion": "NSW",
    "postalCode": "[Postcode]",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[lat]",
    "longitude": "[lng]"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "addressLocality": "[Suburb]",
      "postalCode": "[Postcode]"
    },
    "geoRadius": "5000"
  },
  "serviceType": [
    "Commercial Cleaning",
    "Office Cleaning",
    "Strata Cleaning",
    "Medical Cleaning",
    "Childcare Cleaning",
    "Industrial Cleaning",
    "End of Lease Cleaning"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": { "@type": "Person", "name": "[Suburb] Business Owner" },
    "reviewBody": "Pro Clean Corp provides outstanding commercial cleaning in [Suburb]. Reliable, professional and thorough every time."
  }
}
```

#### 2. FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does commercial cleaning cost in [Suburb] NSW?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial cleaning costs in [Suburb] NSW vary based on the size of your premises and frequency of service. Pro Clean Corp offers competitive rates starting from $X per hour. Contact us for a free tailored quote for your [Suburb] business."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer office cleaning services in [Suburb]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Pro Clean Corp provides professional office cleaning services throughout [Suburb] NSW [Postcode]. We offer daily, weekly, fortnightly and monthly cleaning schedules to suit your business needs."
      }
    },
    {
      "@type": "Question",
      "name": "How often should businesses in [Suburb] schedule commercial cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most [Suburb] businesses, we recommend daily or weekly cleaning. High-traffic commercial spaces such as medical centres, childcare facilities and restaurants in [Suburb] typically require daily cleaning to maintain hygiene standards."
      }
    },
    {
      "@type": "Question",
      "name": "Are your cleaners in [Suburb] police checked and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All Pro Clean Corp staff servicing [Suburb] NSW are police checked, fully insured and hold all required certifications. We are a fully licensed commercial cleaning company operating across Sydney NSW."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide after-hours cleaning in [Suburb] NSW?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We offer flexible after-hours and weekend cleaning services in [Suburb] NSW so your business operations are never interrupted. Our team is available 7 days a week from 6am to 10pm."
      }
    }
  ]
}
```

#### 3. BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.procleancorp.com.au/" },
    { "@type": "ListItem", "position": 2, "name": "Commercial Cleaning", "item": "https://www.procleancorp.com.au/commercial-cleaning" },
    { "@type": "ListItem", "position": 3, "name": "Commercial Cleaning [Suburb] NSW", "item": "https://www.procleancorp.com.au/commercial-cleaning/[slug]" }
  ]
}
```

#### 4. Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Cleaning [Suburb] NSW",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Pro Clean Corp",
    "telephone": "1300-494-983"
  },
  "areaServed": {
    "@type": "Place",
    "name": "[Suburb] NSW [Postcode]"
  },
  "serviceType": "Commercial Cleaning",
  "description": "Professional commercial cleaning services in [Suburb] NSW including office cleaning, strata cleaning, medical facility cleaning and childcare cleaning.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "AUD"
    }
  }
}
```

---

### ADDITIONAL SEO SIGNALS (add to every location page)

#### Geo Meta Tags (Bing, Apple Maps, AI crawlers)
Add to each page's `<head>` via metadata or layout:
- [ ] `<meta name="geo.region" content="AU-NSW" />`
- [ ] `<meta name="geo.placename" content="[Suburb]" />`
- [ ] `<meta name="geo.position" content="[lat];[lng]" />`
- [ ] `<meta name="ICBM" content="[lat],[lng]" />`

#### hreflang (Australian English signal)
- [ ] `<link rel="alternate" hreflang="en-AU" href="https://www.procleancorp.com.au/commercial-cleaning/[slug]" />`
- [ ] Add to every location page metadata — tells Google this is AU-specific content

#### Google Business Profile — outbound link (visible on page)
- GMB URL: `https://share.google/rVLemiF0puaBnNCAf`
- [ ] Add visible "★ View us on Google Maps" link on every location page
- [ ] Link text: `"View Pro Clean Corp [Suburb] on Google"`
- [ ] Use `target="_blank" rel="noopener noreferrer"`
- [ ] Include in LocalBusiness schema `sameAs` array on every page

#### Visible Star Rating Badge (E-E-A-T trust signal)
- [ ] Render visible `★★★★★ 4.9/5 (150+ Reviews)` badge on every page
- [ ] Badge links to `https://share.google/rVLemiF0puaBnNCAf`
- [ ] Google reads rendered stars via its crawler — visible ratings reinforce schema

#### Additional Schema: `WebPage`
Add to every location page JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Commercial Cleaning [Suburb] NSW [Postcode]",
  "url": "https://www.procleancorp.com.au/commercial-cleaning/[slug]",
  "datePublished": "2026-01-01",
  "dateModified": "2026-03-23",
  "author": { "@type": "Organization", "name": "Pro Clean Corp" },
  "inLanguage": "en-AU",
  "isPartOf": { "@id": "https://www.procleancorp.com.au/#website" },
  "about": { "@id": "https://www.procleancorp.com.au/commercial-cleaning/[slug]#business" }
}
```

#### Additional Schema: `speakable` (AI Overviews / Voice Search)
Helps win Google AI Featured Snippets for queries like "best commercial cleaners in [Suburb]":
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".suburb-intro", ".faq-section"]
  }
}
```
- [ ] Add `.suburb-intro` class to the intro paragraph
- [ ] Add `.faq-section` class to the FAQ section wrapper

#### `og:type` for Location Pages
- [ ] Set `openGraph.type` to `"business.business"` (not `"website"`) on location pages
- [ ] Improves Facebook/social preview rendering for local business pages

#### Outbound Authority Links (trust signal)
Each location page should include 1–2 outbound links to trusted AU sources:
- [ ] Link to the local council website for that suburb (e.g. City of Sydney, Parramatta Council)
- [ ] Link to NSW Fair Trading or Safe Work NSW where relevant
- [ ] Use `rel="noopener noreferrer"` — outbound authority links confirm your entity is real

#### Image SEO
- [ ] At least 1 image per page with `alt="Commercial cleaning [Suburb] NSW"`
- [ ] Hero image uses Next.js `priority` prop (improves LCP score)
- [ ] Image filename: `commercial-cleaning-[suburb].webp`
- [ ] WebP format only — no JPG/PNG

#### Sitemap Priority Fix (next-sitemap.config.js)
- [ ] Add rule for `/commercial-cleaning/` nested routes:
  ```js
  } else if (path.startsWith('/commercial-cleaning/')) {
    priority = 0.85;
    changefreq = 'monthly';
  }
  ```
- [ ] Current config only matches flat slugs — nested pages default to 0.7 without this fix

#### Internal Linking Additions
- [ ] Homepage → links to `/commercial-cleaning` hub page (passes PageRank down to all 653 pages)
- [ ] Every location page → links to 6 nearby suburb pages (`/commercial-cleaning/[neighbour-slug]`)
- [ ] Every location page → links back to `/commercial-cleaning` hub page
- [ ] `ServiceLocations.tsx` cards → link to `/commercial-cleaning/[slug]` (not contact form)

#### Twitter/X Metadata Fix
- [ ] Fix `twitter.creator` in `layout.tsx` from `@procleancompany` → `@Pro_Clean_Corp` (current mismatch hurts card verification)

### TECHNICAL SEO REQUIREMENTS
- [ ] Page must be **Server-Side Rendered** — NO `'use client'` on the page file
- [ ] All content visible in raw HTML (Googlebot must read without JS)
- [ ] `<Breadcrumb>` component rendered visibly on page
- [ ] Page added to `next-sitemap.config.js` — `/commercial-cleaning/` priority set to 0.85
- [ ] `robots: { index: true, follow: true }` in metadata
- [ ] No duplicate content — every paragraph must be unique per suburb (600+ words total)
- [ ] Image `alt` tags include suburb name + "NSW"
- [ ] Internal links use `<Link>` component (not `<a>` tags)
- [ ] Page load time under 3 seconds (static generation via `generateStaticParams()`)
- [ ] Mobile responsive — all touch targets minimum 44x44px
- [ ] `lang="en"` on `<html>` — already set in layout ✓
- [ ] GA4 tracking already in layout ✓ — ensure location slug is passed as page param

### IMPLEMENTATION APPROACH
Use Next.js dynamic route:
```
app/commercial-cleaning/[slug]/page.tsx   ← template
app/commercial-cleaning/[slug]/layout.tsx ← optional layout
```
- `generateStaticParams()` generates all 653 pages at build time
- Data passed from `locations-constant.ts` by matching slug to location entry
- Nearby suburbs calculated from same region in locations array
- All 653 pages pre-rendered as static HTML = maximum SEO performance

### CONTENT UNIQUENESS RULES (avoid Google duplicate content penalty)
- Intro paragraph: vary sentence structure, lead with suburb characteristic
- Services section: rotate which services are mentioned first per region
- FAQ answers: rephrase answers slightly per suburb (not copy-paste)
- Nearby suburbs: always different 6 suburbs = naturally unique per page
- The suburb name, postcode and region alone make each page unique enough if content is 600+ words

---

## Priority Order to Build
1. `app/commercial-cleaning/[slug]/page.tsx` — dynamic template ✅ DONE
2. Update `locations-constant.ts` — add `slug`, `lat`, `lng`, `nearbySuburbs[]` fields
3. Update `ServiceLocations.tsx` — link cards to `/commercial-cleaning/[slug]` ✅ DONE (cards are fully clickable)
4. Add all 653 URLs to sitemap
5. Add `BreadcrumbList` to each page ✅ DONE (in template)
6. Submit updated sitemap to Google Search Console

---

## Hero Layout Rules

### Desktop Image Behaviour

- Hero section uses `items-stretch` on the flex row — both columns grow to equal height automatically
- Image column uses `h-full` — image always matches the height of the left content column
- On mobile: image uses a fixed `h-80` fallback height
- **Do NOT set a fixed `lg:h-[Xpx]` on the hero image** — this breaks the stretch behaviour
- Text content drives the height; image fills to match

### Image Source

- Hero image: `/images/services/commercial.webp` (already in `/public/images/services/`)
- Uses Next.js `<Image>` with `priority` prop for LCP optimisation
- `alt` must include suburb name: `Commercial cleaning [Suburb] NSW`

### Layout Structure

```tsx
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
  {/* LEFT — text content */}
  <div className="lg:w-1/2">
    {/* h1, h2, intro paragraph, CTAs, star badge */}
  </div>
  {/* RIGHT — image */}
  <div className="lg:w-1/2">
    <Image ... className="w-full h-80 lg:h-full object-cover rounded-2xl shadow-lg" priority />
  </div>
</div>
```
