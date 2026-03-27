import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies | Pro Clean Corp Commercial Cleaning Sydney NSW',
  description:
    'Real results from Pro Clean Corp clients across Sydney NSW. See how we helped offices, warehouses, medical centres, and gyms achieve cleaner, safer, more productive workplaces.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies | Pro Clean Corp Commercial Cleaning Sydney NSW',
    description: 'Real client results from commercial cleaning projects across Sydney NSW.',
    url: '/case-studies',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Pro Clean Corp case studies' }],
  },
};

const caseStudies = [
  {
    id: 'corporate-office-parramatta',
    industry: 'Corporate Office',
    client: 'Mid-size Financial Services Firm',
    location: 'Parramatta CBD, NSW',
    size: '1,800 m² — 3 floors',
    challenge:
      'The client had a previous cleaning contractor who delivered inconsistent results and missed scheduled visits. Staff were complaining about unhygienic kitchen areas and dusty workstations, which was impacting morale and productivity.',
    solution:
      'Pro Clean Corp assigned a dedicated 3-person team for nightly cleaning (Mon–Fri, 6pm–10pm). We implemented a detailed room-by-room checklist, introduced colour-coded microfibre systems to prevent cross-contamination, and set up a monthly deep-clean schedule for carpets and windows.',
    result:
      'Staff satisfaction scores for workplace cleanliness rose from 54% to 93% within 60 days. Zero missed visits in 14 months of service. Management reported a noticeable reduction in sick days taken.',
    services: ['Office Cleaning', 'Carpet Cleaning', 'Window Cleaning'],
    duration: '14+ months (ongoing)',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'How Pro Clean Corp Transformed a Parramatta Corporate Office',
      description:
        'A financial services firm in Parramatta CBD saw staff cleanliness satisfaction jump from 54% to 93% within 60 days of switching to Pro Clean Corp.',
      author: { '@type': 'Organization', name: 'Pro Clean Corp' },
      publisher: {
        '@type': 'Organization',
        name: 'Pro Clean Corp',
        logo: { '@type': 'ImageObject', url: 'https://www.procleancorp.com.au/meta.png' },
      },
      datePublished: '2026-01-15',
      dateModified: '2026-03-01',
      mainEntityOfPage: 'https://www.procleancorp.com.au/case-studies',
    },
  },
  {
    id: 'warehouse-wetherill-park',
    industry: 'Warehouse & Logistics',
    client: 'National E-Commerce Distribution Centre',
    location: 'Wetherill Park, NSW',
    size: '4,200 m² warehouse + 600 m² admin',
    challenge:
      'A high-throughput distribution centre needed cleaning that could work around 24/7 shift operations without interrupting pick-and-pack workflows. Previous cleaners struggled with the scale and the strict forklift-zone safety requirements.',
    solution:
      'We deployed a 5-person team across split shifts (12am–4am and 4pm–6pm) to clean concurrently with operations. We introduced industrial ride-on sweepers for the warehouse floor and established daily sanitisation of staff amenities, lunchrooms, and high-touch surfaces.',
    result:
      'Zero WHS incidents related to cleaning activities over 18 months. Forklift zone compliance maintained at 100%. The client renewed their contract with an expanded scope to include external hardstand pressure washing.',
    services: ['Warehouse Cleaning', 'Industrial Cleaning', 'Pressure Washing'],
    duration: '18+ months (ongoing)',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Pro Clean Corp Delivers 18 Months of Zero-Incident Warehouse Cleaning in Wetherill Park',
      description:
        'A national e-commerce distribution centre achieved 100% forklift zone compliance and zero WHS incidents over 18 months with Pro Clean Corp.',
      author: { '@type': 'Organization', name: 'Pro Clean Corp' },
      publisher: {
        '@type': 'Organization',
        name: 'Pro Clean Corp',
        logo: { '@type': 'ImageObject', url: 'https://www.procleancorp.com.au/meta.png' },
      },
      datePublished: '2026-02-01',
      dateModified: '2026-03-01',
      mainEntityOfPage: 'https://www.procleancorp.com.au/case-studies',
    },
  },
  {
    id: 'medical-centre-blacktown',
    industry: 'Medical & Healthcare',
    client: 'Multi-Practitioner Medical Centre',
    location: 'Blacktown, NSW',
    size: '650 m² — 12 consultation rooms',
    challenge:
      'The practice manager needed a cleaning provider with proven experience in infection control who could meet AS/NZS 4187 standards. They had concerns about cross-contamination between waiting areas and clinical zones.',
    solution:
      'Pro Clean Corp assigned a team trained in healthcare cleaning protocols. We separated clean and dirty workflows with zone-specific colour-coded equipment. Hospital-grade TGA-listed disinfectants were used on all clinical surfaces. A detailed end-of-day sign-off checklist was introduced for accountability.',
    result:
      'Passed all subsequent infection control audits. Patient feedback on facility cleanliness improved from "good" to "excellent" in quarterly surveys. The practice expanded our scope to include a second site in Penrith.',
    services: ['Medical Centre Cleaning', 'Infection Control', 'Daily Office Cleaning'],
    duration: '24+ months (ongoing)',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Hospital-Grade Medical Centre Cleaning for Blacktown Practice',
      description:
        'A 12-room medical centre in Blacktown passed all infection control audits and saw patient satisfaction rise to "excellent" after switching to Pro Clean Corp.',
      author: { '@type': 'Organization', name: 'Pro Clean Corp' },
      publisher: {
        '@type': 'Organization',
        name: 'Pro Clean Corp',
        logo: { '@type': 'ImageObject', url: 'https://www.procleancorp.com.au/meta.png' },
      },
      datePublished: '2026-03-01',
      dateModified: '2026-03-15',
      mainEntityOfPage: 'https://www.procleancorp.com.au/case-studies',
    },
  },
];

const industryColors: Record<string, string> = {
  'Corporate Office': 'bg-blueprimary/10 text-blueprimary',
  'Warehouse & Logistics': 'bg-orange-100 text-orange-700',
  'Medical & Healthcare': 'bg-green-100 text-green-700',
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article schemas */}
      {caseStudies.map((cs) => (
        <script
          key={cs.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cs.schema) }}
        />
      ))}

      {/* Hero */}
      <section className="bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Client Case Studies</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Real cleaning challenges. Real solutions. Real results across Sydney NSW businesses.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-8 py-6 flex flex-wrap items-center gap-4">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${industryColors[cs.industry]}`}>
                  {cs.industry}
                </span>
                <span className="text-gray-500 text-sm">📍 {cs.location}</span>
                <span className="text-gray-500 text-sm">📐 {cs.size}</span>
                <span className="text-gray-500 text-sm">🗓 {cs.duration}</span>
              </div>

              <div className="px-8 py-8">
                <h2 className="text-2xl font-bold text-darkblue mb-2">{cs.client}</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {cs.services.map((s) => (
                    <span key={s} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
                    <h3 className="font-bold text-red-700 mb-2 text-sm uppercase tracking-wide">The Challenge</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blueprimary">
                    <h3 className="font-bold text-blueprimary mb-2 text-sm uppercase tracking-wide">Our Solution</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border-l-4 border-greenprimary">
                    <h3 className="font-bold text-greenprimary mb-2 text-sm uppercase tracking-wide">The Result</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-darkblue mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join 1,200+ Sydney businesses who trust Pro Clean Corp for reliable commercial cleaning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
              Get a Free Quote
            </Link>
            <a href="tel:1300494983" className="border-2 border-darkblue text-darkblue px-8 py-3 rounded-full font-bold hover:bg-darkblue hover:text-white transition">
              Call 1300 494 983
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
