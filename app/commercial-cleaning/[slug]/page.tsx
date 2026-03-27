import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { locations } from '@/app/lib/locations-constant';

// ─── helpers ────────────────────────────────────────────────────────────────

function toSlug(name: string) {
  return name
    .replace(' NSW', '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function getLocation(slug: string) {
  return locations.find((loc) => toSlug(loc.name) === slug) ?? null;
}

function getNearby(slug: string, region: string, count = 6) {
  return locations
    .filter((loc) => loc.region === region && toSlug(loc.name) !== slug)
    .slice(0, count);
}

// ─── static params (generates all location pages at build time) ──────────────

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: toSlug(loc.name) }));
}

// ─── metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};

  const suburb = loc.name.replace(' NSW', '');
  const title = `Commercial Cleaning ${suburb} NSW ${loc.postcode} | Pro Clean Corp`;
  const description = `Professional commercial cleaning services in ${suburb} NSW ${loc.postcode}. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.`;

  return {
    title,
    description,
    keywords: [
      `commercial cleaning ${suburb}`,
      `commercial cleaning ${suburb} NSW`,
      `office cleaning ${suburb}`,
      `cleaners ${suburb} NSW`,
      `cleaning services ${suburb}`,
      `commercial cleaners near me ${suburb}`,
      `office cleaners ${suburb} NSW`,
      `strata cleaning ${suburb}`,
      `industrial cleaning ${suburb}`,
      `medical cleaning ${suburb}`,
      `childcare cleaning ${suburb}`,
      `end of lease cleaning ${suburb}`,
      `${suburb} NSW ${loc.postcode} cleaning`,
      `Pro Clean Corp ${suburb}`,
      `${loc.region} commercial cleaning`,
    ].join(', '),
    alternates: {
      canonical: `https://www.procleancorp.com.au/commercial-cleaning/${slug}`,
      languages: { 'en-AU': `https://www.procleancorp.com.au/commercial-cleaning/${slug}` },
    },
    openGraph: {
      title,
      description: `${suburb} businesses trust Pro Clean Corp for commercial cleaning NSW ${loc.postcode}. Office, strata, medical & industrial cleaning. Free quote.`,
      url: `https://www.procleancorp.com.au/commercial-cleaning/${slug}`,
      type: 'website',
      images: [{ url: '/meta.png', alt: `Commercial cleaning ${suburb} NSW` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
    other: {
      'geo.region': 'AU-NSW',
      'geo.placename': suburb,
      ...(loc.lat && loc.lng ? {
        'geo.position': `${loc.lat};${loc.lng}`,
        'ICBM': `${loc.lat},${loc.lng}`,
      } : {}),
    },
  };
}

// ─── region content ──────────────────────────────────────────────────────────

const regionContent: Record<string, {
  heroIntro: (suburb: string, postcode: string) => string;
  aboutBody: (suburb: string, postcode: string, region: string) => string;
}> = {
  'Sydney CBD': {
    heroIntro: (suburb, postcode) =>
      `Commercial cleaning in ${suburb} NSW ${postcode} demands precision, speed and zero disruption — and that's exactly what Pro Clean Corp delivers. Situated in the heart of Sydney's CBD, ${suburb} is home to high-rise offices, law firms, financial institutions, retail flagships and premium co-working spaces that require immaculate presentation every single day. Our CBD-experienced team operates before-hours and after-hours so your ${suburb} premises are spotless by the time staff and clients arrive. From daily office maintenance to deep-clean turnarounds, we understand the pace and standards of Sydney's central business district.`,
    aboutBody: (suburb, postcode) =>
      `${suburb} sits within Sydney CBD — Australia's most concentrated commercial precinct — where building managers, strata committees and corporate tenants demand the highest cleaning standards. Businesses in ${suburb} NSW ${postcode} range from global financial services firms and government agencies to boutique retailers and hospitality venues. Pro Clean Corp has deep experience cleaning high-rise towers, open-plan corporate floors, executive suites and premium retail spaces throughout the CBD. Our cleaners are security-cleared, uniformed and trained for CBD-specific access requirements including after-hours cleaning protocols and building management compliance.`,
  },
  'Sydney Eastern Suburbs': {
    heroIntro: (suburb, postcode) =>
      `Commercial cleaning in ${suburb} NSW ${postcode} is our speciality. Pro Clean Corp delivers professional commercial cleaning to the diverse mix of offices, medical centres, design studios, retail spaces and industrial facilities that define ${suburb} and the wider Sydney Eastern Suburbs. Our police-checked, fully insured team understands the unique character of Eastern Suburbs businesses — whether you're a creative agency in a converted warehouse, a medical practice serving the local community, or a retail store on a busy high street. We offer flexible scheduling including early-morning, after-hours and weekend cleans tailored to your ${suburb} premises.`,
    aboutBody: (suburb, postcode, region) =>
      `${suburb} is one of Sydney's most dynamic Eastern Suburbs locations, hosting a vibrant mix of professional services, health and wellness businesses, creative industries and retail. The ${suburb} NSW ${postcode} area is characterised by high foot traffic, upscale fitouts and a business community that expects impeccable presentation standards. Pro Clean Corp has served ${region} businesses for over a decade, understanding the specific cleaning demands of beachside retail, boutique offices, medical facilities and the area's unique industrial-to-creative conversion spaces.`,
  },
  'Sydney Inner West': {
    heroIntro: (suburb, postcode) =>
      `Commercial cleaning in ${suburb} NSW ${postcode} requires a team that understands the Inner West's distinctive blend of heritage buildings, converted industrial spaces, café culture and professional services. Pro Clean Corp has been keeping ${suburb} businesses spotless for years — from laneway cafés and restaurant kitchens to creative agencies, strata buildings and medical practices throughout the Sydney Inner West. Our flexible after-hours and weekend cleaning schedules mean your ${suburb} premises are always ready for business, without interrupting your day-to-day operations.`,
    aboutBody: (suburb, postcode, region) =>
      `${suburb} is a thriving Inner West suburb where heritage terrace conversions, creative warehouses, independent retail and professional services sit side by side. Businesses in ${suburb} NSW ${postcode} range from hospitality and food manufacturing to architectural studios and allied health practices. The Inner West's mix of building types — from century-old commercial buildings to modern fit-outs — requires cleaning expertise across different surfaces, materials and compliance standards. Pro Clean Corp's ${region} team is experienced across this full spectrum, delivering consistent results regardless of building type or industry.`,
  },
  'Sydney Western Suburbs': {
    heroIntro: (suburb, postcode) =>
      `Commercial cleaning in ${suburb} NSW ${postcode} is built around the demands of Western Sydney's powerhouse industries. Pro Clean Corp services the warehouses, distribution centres, manufacturing facilities, childcare centres and commercial offices that drive business across ${suburb} and the broader Sydney Western Suburbs. Our industrial-capable team uses commercial-grade equipment — ride-on scrubbers, pressure washers, industrial vacuum systems — to handle the heavy-duty cleaning demands of Western Sydney's busiest facilities, while also delivering meticulous office and childcare cleaning for the region's professional services sector.`,
    aboutBody: (suburb, postcode, region) =>
      `${suburb} is a key hub in Sydney's Western Suburbs — one of Australia's fastest-growing commercial and industrial regions. Businesses in ${suburb} NSW ${postcode} span logistics, manufacturing, food processing, childcare, retail and professional services. Western Sydney's commercial cleaning needs are unique: large floor areas, active loading docks, WHS compliance requirements and strict food-safe or childcare hygiene standards. Pro Clean Corp's ${region} team is fully equipped and certified for this environment, operating across standard business hours, shift patterns and 24/7 schedules to suit the Western Sydney work cycle.`,
  },
  'Sydney Sutherland Shire': {
    heroIntro: (suburb, postcode) =>
      `Commercial cleaning in ${suburb} NSW ${postcode} is delivered by a team that knows the Sutherland Shire inside out. Pro Clean Corp provides professional commercial cleaning to offices, strata complexes, medical centres, retail shops and childcare facilities throughout ${suburb} and the wider Sutherland Shire. The Shire's business community values reliability, trust and a consistent standard — which is exactly what our long-serving local team delivers. From Cronulla to Engadine, our cleaners are familiar faces in the ${suburb} commercial precinct.`,
    aboutBody: (suburb, postcode, region) =>
      `${suburb} is part of the Sutherland Shire — Sydney's southern region known for its community feel, growing commercial strip and mix of professional services, medical, retail and strata properties. Businesses in ${suburb} NSW ${postcode} typically include medical and allied health practices, real estate offices, retail centres, childcare facilities and strata-managed commercial buildings. The Shire's business community places a high value on trusted, local service providers. Pro Clean Corp has built long-term relationships with ${region} clients based on consistency, reliability and personalised service that larger national cleaning companies simply cannot match.`,
  },
  'Northwest Sydney': {
    heroIntro: (suburb, postcode) =>
      `Commercial cleaning in ${suburb} NSW ${postcode} keeps pace with Northwest Sydney's rapid commercial growth. Pro Clean Corp services the business parks, corporate campuses, childcare centres, medical facilities and retail precincts that have made ${suburb} and the Northwest corridor one of Sydney's most in-demand commercial zones. Our Northwest-experienced team understands the high presentation standards expected in this corporate-focused region, delivering consistent quality cleaning across offices, childcare facilities, medical suites and strata properties throughout ${suburb} NSW.`,
    aboutBody: (suburb, postcode, region) =>
      `${suburb} is at the heart of Northwest Sydney's commercial boom — a region that has transformed over the past decade into one of Greater Sydney's most active business corridors. The ${suburb} NSW ${postcode} area hosts major corporate head offices, business parks, childcare centres catering to young families, premium medical and dental practices, and large-format retail. Northwest Sydney's commercial properties tend to be modern, well-appointed and require cleaning teams that match that standard. Pro Clean Corp's ${region} cleaners are trained, uniformed and equipped for the high-presentation expectations of this fast-growing precinct.`,
  },
  'Sydney Northern Beaches': {
    heroIntro: (suburb, postcode) =>
      `Commercial cleaning in ${suburb} NSW ${postcode} is tailored to the Northern Beaches' unique lifestyle-driven business environment. Pro Clean Corp understands that businesses in ${suburb} and across the Northern Beaches attract discerning clients and staff who notice when premises are anything less than immaculate. From beachside retail and hospitality venues to professional service offices, strata complexes and health and wellness studios, our Northern Beaches cleaning team delivers the high standard this community expects — on a flexible schedule that works around the rhythm of ${suburb} businesses.`,
    aboutBody: (suburb, postcode, region) =>
      `${suburb} is part of Sydney's Northern Beaches — a region defined by its coastal lifestyle, affluent demographics and a business community that spans boutique retail, hospitality, real estate, allied health and professional services. Properties in ${suburb} NSW ${postcode} often feature premium fitouts, natural materials and distinctive architectural character that requires careful, considerate cleaning. Pro Clean Corp's ${region} team uses appropriate products and techniques for timber floors, natural stone surfaces, high-end fixtures and the salt-air environment that is unique to the Northern Beaches.`,
  },
  'Sydney North Shore': {
    heroIntro: (suburb, postcode) =>
      `Commercial cleaning in ${suburb} NSW ${postcode} is delivered to the standard that North Shore businesses and their clients expect. Pro Clean Corp provides professional commercial cleaning to the corporate offices, medical suites, childcare centres, retail spaces and strata properties that make up ${suburb}'s thriving commercial precinct. The North Shore is home to some of Sydney's most prestigious business addresses, and our team understands that cleaning standards here must reflect that prestige — every visit, every time.`,
    aboutBody: (suburb, postcode, region) =>
      `${suburb} is one of Sydney's premier North Shore suburbs, home to corporate head offices, leading medical and specialist practices, premium childcare and education facilities and upscale retail. Businesses operating in ${suburb} NSW ${postcode} serve an affluent, professional demographic that has high expectations for the environments they work and shop in. Cleanliness is a direct reflection of brand quality in this market. Pro Clean Corp's ${region} team delivers the meticulous, consistent commercial cleaning standard that North Shore businesses require to maintain their reputation and satisfy building management and strata requirements.`,
  },
};

const defaultRegionContent = {
  heroIntro: (suburb: string, postcode: string) =>
    `Commercial cleaning in ${suburb} NSW ${postcode} is our speciality. Pro Clean Corp delivers professional commercial cleaning services to offices, warehouses, medical centres, childcare facilities and retail spaces throughout ${suburb} and the wider Sydney region. Our experienced team of police-checked, fully insured cleaners understands the unique demands of businesses in ${suburb} — from early-morning office cleans before staff arrive to after-hours industrial cleaning that keeps your operation running smoothly. Whether you need daily, weekly or one-off commercial cleaning in ${suburb} NSW, we deliver consistent, high-quality results backed by our 100% satisfaction guarantee.`,
  aboutBody: (suburb: string, postcode: string, region: string) =>
    `${suburb} is a thriving part of ${region}, home to a diverse mix of businesses ranging from professional services and retail to warehouses, medical centres and childcare facilities. As commercial activity in ${suburb} NSW ${postcode} continues to grow, the demand for reliable professional commercial cleaning has never been higher. Clean, well-maintained premises make a strong first impression on clients and staff, comply with health and safety regulations, and help businesses in ${suburb} operate at their best every single day.`,
};

// ─── page ─────────────────────────────────────────────────────────────────────

export default async function CommercialCleaningLocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const suburb = loc.name.replace(' NSW', '');
  const { postcode, region } = loc;
  const nearby = getNearby(slug, region);
  const content = regionContent[region] ?? defaultRegionContent;
  const heroIntro = content.heroIntro(suburb, postcode);
  const aboutBody = content.aboutBody(suburb, postcode, region);

  const faqs = [
    {
      question: `How much does commercial cleaning cost in ${suburb} NSW?`,
      answer: `Commercial cleaning costs in ${suburb} NSW vary based on the size of your premises and frequency of service. Pro Clean Corp offers competitive rates starting from $35 per hour. Contact us for a free tailored quote for your ${suburb} business.`,
    },
    {
      question: `Do you offer office cleaning services in ${suburb}?`,
      answer: `Yes, Pro Clean Corp provides professional office cleaning services throughout ${suburb} NSW ${postcode}. We offer daily, weekly, fortnightly and monthly cleaning schedules to suit your ${suburb} business needs.`,
    },
    {
      question: `How often should businesses in ${suburb} schedule commercial cleaning?`,
      answer: `For most ${suburb} businesses, we recommend daily or weekly cleaning. High-traffic commercial spaces such as medical centres, childcare facilities and restaurants in ${suburb} typically require daily cleaning to maintain hygiene standards.`,
    },
    {
      question: `Are your cleaners in ${suburb} police checked and insured?`,
      answer: `Yes. All Pro Clean Corp staff servicing ${suburb} NSW are police checked, fully insured and hold all required certifications. We are a fully licensed commercial cleaning company operating across ${region}.`,
    },
    {
      question: `Do you provide after-hours cleaning in ${suburb} NSW?`,
      answer: `Absolutely. We offer flexible after-hours and weekend cleaning services in ${suburb} NSW so your business operations are never interrupted. Our team is available 7 days a week from 6am to 10pm.`,
    },
    {
      question: `What areas near ${suburb} do you also service?`,
      answer: `In addition to ${suburb}, Pro Clean Corp services all surrounding ${region} suburbs. ${nearby.length > 0 ? `We regularly clean businesses in ${nearby.map((n) => n.name.replace(' NSW', '')).join(', ')} and more.` : ''}`,
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `https://www.procleancorp.com.au/commercial-cleaning/${slug}#business`,
      name: `Pro Clean Corp — ${suburb} Commercial Cleaning`,
      description: `Professional commercial cleaning services in ${suburb} NSW ${postcode}. Office cleaning, strata cleaning, medical cleaning and more.`,
      url: `https://www.procleancorp.com.au/commercial-cleaning/${slug}`,
      telephone: '1300-494-983',
      email: 'hello@procleancorp.com.au',
      priceRange: '$$',
      currenciesAccepted: 'AUD',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      openingHours: 'Mo-Su 06:00-22:00',
      logo: 'https://www.procleancorp.com.au/images/logo.png',
      image: 'https://www.procleancorp.com.au/meta.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: suburb,
        addressRegion: 'NSW',
        postalCode: postcode,
        addressCountry: 'AU',
      },
      ...(loc.lat && loc.lng ? {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: loc.lat,
          longitude: loc.lng,
        },
      } : {}),
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          addressLocality: suburb,
          postalCode: postcode,
          ...(loc.lat && loc.lng ? { latitude: loc.lat, longitude: loc.lng } : {}),
        },
        geoRadius: '5000',
      },
      serviceType: [
        'Commercial Cleaning',
        'Office Cleaning',
        'Strata Cleaning',
        'Medical Cleaning',
        'Childcare Cleaning',
        'Industrial Cleaning',
        'End of Lease Cleaning',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
      },
      sameAs: ['https://share.google/rVLemiF0puaBnNCAf'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.procleancorp.com.au/' },
        { '@type': 'ListItem', position: 2, name: 'Commercial Cleaning', item: 'https://www.procleancorp.com.au/commercial-cleaning' },
        { '@type': 'ListItem', position: 3, name: `Commercial Cleaning ${suburb} NSW`, item: `https://www.procleancorp.com.au/commercial-cleaning/${slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Commercial Cleaning ${suburb} NSW`,
      provider: { '@type': 'LocalBusiness', name: 'Pro Clean Corp', telephone: '1300-494-983' },
      areaServed: { '@type': 'Place', name: `${suburb} NSW ${postcode}` },
      serviceType: 'Commercial Cleaning',
      description: `Professional commercial cleaning services in ${suburb} NSW including office cleaning, strata cleaning, medical facility cleaning and childcare cleaning.`,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'AUD' },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `Commercial Cleaning ${suburb} NSW ${postcode}`,
      url: `https://www.procleancorp.com.au/commercial-cleaning/${slug}`,
      datePublished: '2026-01-01',
      dateModified: '2026-03-23',
      author: { '@type': 'Organization', name: 'Pro Clean Corp' },
      inLanguage: 'en-AU',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.suburb-intro', '.faq-section'],
      },
    },
  ];

  const services = [
    {
      heading: `Office Cleaning ${suburb}`,
      body: `Keep your ${suburb} office spotless with our regular office cleaning service. We cover desks, kitchens, bathrooms and common areas — tailored to your schedule so operations in ${suburb} are never disrupted.`,
    },
    {
      heading: `Strata Cleaning ${suburb}`,
      body: `Pro Clean Corp delivers reliable strata cleaning across ${suburb} NSW ${postcode}, maintaining lobbies, lifts, car parks, and common areas to the highest presentation standards.`,
    },
    {
      heading: `Medical Facility Cleaning ${suburb}`,
      body: `Our medical cleaning team in ${suburb} uses hospital-grade disinfectants and infection-control protocols to keep clinics, surgeries and health facilities compliant and hygienic.`,
    },
    {
      heading: `Childcare Cleaning ${suburb}`,
      body: `Certified childcare centre cleaning in ${suburb} — safe, non-toxic products, thorough sanitisation of play areas and bathrooms, meeting all NSW childcare compliance requirements.`,
    },
    {
      heading: `Industrial Cleaning ${suburb}`,
      body: `Heavy-duty industrial cleaning for warehouses, factories and manufacturing facilities in ${suburb} NSW. Commercial scrubbers, pressure washing, and WHS-compliant procedures.`,
    },
    {
      heading: `End of Lease Cleaning ${suburb}`,
      body: `Bond-back end of lease cleaning in ${suburb} NSW ${postcode}. Comprehensive clean of every room, carpet steam cleaning, oven and window cleaning — guaranteed to meet real estate standards.`,
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-greenprimary transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li><Link href="/commercial-cleaning" className="hover:text-greenprimary transition-colors">Commercial Cleaning</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-greenprimary font-medium">Commercial Cleaning {suburb} NSW</li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-darkblue leading-tight mb-4">
                Commercial Cleaning {suburb} NSW {postcode}
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold text-greenprimary mb-6">
                Professional Commercial Cleaners Serving {suburb} &amp; {region}
              </h2>
              <p className="suburb-intro text-lg text-gray-600 leading-relaxed mb-8">
                {heroIntro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/contact-us?location=${suburb}`}
                  className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white rounded-full px-8 py-4 font-semibold transition-colors duration-300 shadow-lg"
                >
                  Get Free Quote for {suburb}
                </Link>
                <a
                  href="tel:1300494983"
                  className="inline-flex items-center justify-center border-2 border-greenprimary text-greenprimary hover:bg-greenprimary hover:text-white rounded-full px-8 py-4 font-semibold transition-colors duration-300"
                >
                  Call 1300 494 983
                </a>
              </div>

              {/* Star rating badge */}
              <a
                href="https://share.google/rVLemiF0puaBnNCAf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-gray-600 hover:text-greenprimary transition-colors"
              >
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="font-semibold">4.9/5 (150+ Reviews)</span>
                <span className="text-gray-400">— View Pro Clean Corp {suburb} on Google</span>
              </a>
            </div>
            {/* Image — right side */}
            <div className="lg:w-1/2">
              <Image
                src="/images/services/commercial.webp"
                alt={`Commercial cleaning ${suburb} NSW`}
                width={700}
                height={480}
                className="w-full h-80 lg:h-full object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="py-14 lg:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-darkblue mb-4">
                Commercial Cleaning Services in {suburb} NSW
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver the full range of commercial cleaning services to businesses across {suburb} NSW {postcode}.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div key={svc.heading} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <h3 className="text-lg font-bold text-darkblue mb-3">{svc.heading}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About Section ── */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-darkblue mb-6">
              About Commercial Cleaning in {suburb}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {aboutBody}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pro Clean Corp has been serving {suburb} and the surrounding {region} for over a decade. Our
              local team understands the specific needs of {suburb} businesses — from the cleaning challenges
              of high-traffic retail and hospitality venues to the strict hygiene requirements of medical
              facilities and childcare centres in the area.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you operate a small office in {suburb} or a large industrial facility, our commercial
              cleaning services are fully customisable to your schedule, budget and compliance requirements.
              All staff are police checked, fully insured, and trained in WHS-compliant cleaning procedures.
            </p>

            <h2 className="text-2xl font-bold text-darkblue mt-10 mb-4">
              Why Pro Clean Corp is the #1 Choice in {suburb}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our reputation in {suburb} is built on reliability, consistency and exceptional results. We
              offer flexible scheduling including early morning, after-hours and weekend cleans to minimise
              disruption to your {suburb} business. Our fully insured team carries $20M public liability
              cover, and every job is backed by our 100% satisfaction guarantee. We use eco-friendly,
              biodegradable cleaning products safe for staff, clients and the environment — making us the
              trusted choice for childcare centres and medical facilities in {suburb} NSW.
            </p>

            <h2 className="text-2xl font-bold text-darkblue mt-10 mb-4">
              Our {suburb} Cleaning Process
            </h2>
            <ol className="space-y-3 text-gray-700">
              {[
                `Free site assessment of your ${suburb} premises — no obligation`,
                `Custom cleaning plan designed around your ${suburb} business requirements`,
                `Professional execution by our trained, vetted ${suburb} cleaning team`,
                `Quality inspection and sign-off after every clean in ${suburb}`,
                `Regular feedback check-ins to ensure your ${suburb} standards are always met`,
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-greenprimary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-14 lg:py-20 bg-greenprimary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Why Choose Pro Clean Corp in {suburb} NSW?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { heading: `Local ${suburb} Experts`, body: `Our team knows ${suburb} and the ${region} area inside out. We understand local business needs and deliver results every time.` },
                { heading: 'Fully Licensed & Insured', body: `$20M public liability insurance, police-checked staff and full WHS compliance — so your ${suburb} business is always protected.` },
                { heading: 'Eco-Friendly Products', body: `We use biodegradable, non-toxic cleaning solutions across all our ${suburb} commercial cleaning services, safe for staff and clients.` },
                { heading: '24/7 Availability', body: `Flexible scheduling including after-hours and weekends so your ${suburb} premises are clean and ready when you need them.` },
                { heading: '100% Satisfaction Guarantee', body: `Not happy? We'll return and re-clean at no extra charge. That's our promise to every ${suburb} client.` },
                { heading: `Free Quotes for ${suburb} Businesses`, body: `Get a detailed, obligation-free commercial cleaning quote for your ${suburb} NSW ${postcode} premises today.` },
              ].map((item) => (
                <div key={item.heading} className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <h3 className="text-lg font-bold mb-3">{item.heading}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq-section py-14 lg:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-darkblue text-center mb-12">
              Frequently Asked Questions — Commercial Cleaning {suburb}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-darkblue mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nearby Suburbs ── */}
        {nearby.length > 0 && (
          <section className="py-14 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-darkblue text-center mb-10">
                Cleaning Services Near {suburb} NSW
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {nearby.map((n) => {
                  const nSuburb = n.name.replace(' NSW', '');
                  const nSlug = toSlug(n.name);
                  return (
                    <Link
                      key={nSlug}
                      href={`/commercial-cleaning/${nSlug}`}
                      className="bg-slate-50 hover:bg-greenprimary hover:text-white text-center p-4 rounded-xl text-sm font-medium text-gray-700 transition-colors duration-200 border border-gray-200 hover:border-greenprimary"
                    >
                      Commercial Cleaning {nSuburb}
                    </Link>
                  );
                })}
              </div>
              <p className="text-center mt-6">
                <Link href="/commercial-cleaning" className="text-greenprimary hover:text-darkblue font-medium transition-colors">
                  View all commercial cleaning locations →
                </Link>
              </p>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="py-14 lg:py-20 bg-darkblue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get a Free Commercial Cleaning Quote in {suburb} NSW
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact Pro Clean Corp today. Our {suburb} cleaning specialists are ready to create
              a custom cleaning plan for your {suburb} NSW {postcode} premises. Call{' '}
              <a href="tel:1300494983" className="underline">1300 494 983</a> or fill in our quick quote form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={`/contact-us?location=${suburb}`}
                className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white rounded-full px-8 py-4 font-semibold transition-colors duration-300 shadow-lg"
              >
                Get Free Quote for {suburb}
              </Link>
              <a
                href="tel:1300494983"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-darkblue rounded-full px-8 py-4 font-semibold transition-colors duration-300"
              >
                Call 1300 494 983
              </a>
            </div>
            <a
              href="https://share.google/rVLemiF0puaBnNCAf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <span className="text-yellow-400">★★★★★</span>
              View Pro Clean Corp {suburb} on Google
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
