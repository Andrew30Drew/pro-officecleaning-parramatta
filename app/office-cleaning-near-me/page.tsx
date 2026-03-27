import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Near Me | Local Office Cleaners Sydney NSW | Pro Clean Corp',
  description: 'Looking for office cleaning near you in Sydney? Pro Clean Corp provides professional local office cleaning services across all Sydney suburbs. Same-week starts, no lock-in contracts. Call 1300 494 983.',
  keywords: [
    'office cleaning near me',
    'local office cleaners Sydney',
    'office cleaning service near me',
    'commercial cleaners near me Sydney',
    'office cleaners near me NSW',
    'professional office cleaning near me',
    'find office cleaners Sydney',
    'best office cleaning near me',
    'Pro Clean Corp near me Sydney'
  ],
  openGraph: {
    title: 'Office Cleaning Near Me — Sydney NSW | Pro Clean Corp',
    description: 'Find professional local office cleaning near you in Sydney. Pro Clean Corp serves all Sydney suburbs with reliable, consistent commercial cleaning services.',
    url: '/office-cleaning-near-me',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Near Me Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Near Me — Sydney NSW | Pro Clean Corp',
    description: 'Find professional local office cleaning services near you in Sydney NSW. Call Pro Clean Corp today.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-near-me' }
};

const sydneyRegions = [
  { region: 'Inner Sydney', suburbs: ['CBD', 'Surry Hills', 'Pyrmont', 'Glebe', 'Redfern'] },
  { region: 'Inner West', suburbs: ['Leichhardt', 'Marrickville', 'Newtown', 'Ashfield', 'Burwood'] },
  { region: 'South Sydney', suburbs: ['Mascot', 'Botany', 'Alexandria', 'Arncliffe', 'Rockdale'] },
  { region: 'St George', suburbs: ['Hurstville', 'Bexley', 'Kogarah', 'Mortdale', 'Carlton'] },
  { region: 'Western Sydney', suburbs: ['Parramatta', 'Auburn', 'Penrith', 'Blacktown', 'Liverpool'] },
  { region: 'North Shore', suburbs: ['North Sydney', 'Chatswood', 'Artarmon', 'Lane Cove', 'Hornsby'] },
];

const suburbLinks = [
  { name: 'Office Cleaning Parramatta', slug: 'office-cleaning-parramatta' },
  { name: 'Office Cleaning North Sydney', slug: 'office-cleaning-north-sydney' },
  { name: 'Office Cleaning Chatswood', slug: 'office-cleaning-chatswood' },
  { name: 'Office Cleaning Hurstville', slug: 'office-cleaning-hurstville' },
  { name: 'Office Cleaning Leichhardt', slug: 'office-cleaning-leichhardt' },
  { name: 'Office Cleaning Bankstown', slug: 'office-cleaning-bankstown' },
  { name: 'Office Cleaning Penrith', slug: 'office-cleaning-penrith' },
  { name: 'Office Cleaning Arncliffe', slug: 'office-cleaning-arncliffe' },
  { name: 'Office Cleaning Artarmon', slug: 'office-cleaning-artarmon' },
  { name: 'Office Cleaning Alexandria', slug: 'office-cleaning-alexandria' },
  { name: 'Office Cleaning Macquarie Park', slug: 'office-cleaning-macquarie-park' },
  { name: 'Office Cleaning Lane Cove', slug: 'office-cleaning-lane-cove' },
];

export default function OfficeCleaningNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Near Me — Sydney NSW"
        serviceDescription="Professional local office cleaning services across all Sydney suburbs. Pro Clean Corp provides consistent, reliable commercial office cleaning for businesses of all sizes — from small offices to large commercial suites."
        serviceUrl="/office-cleaning-near-me"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={[
          'Regular Daily & Weekly Cleaning',
          'After-Hours & Weekend Cleaning',
          'One-Off Deep Cleaning',
          'Carpet & Floor Cleaning',
          'Kitchen & Bathroom Sanitisation',
          'End-of-Lease Office Cleaning'
        ]}
        faqs={[
          {
            question: 'How do I find a good office cleaning company near me in Sydney?',
            answer: 'The best way to find reliable office cleaning near you in Sydney is to look for companies with verifiable reviews, clear pricing, full insurance cover, and consistent staffing. Pro Clean Corp services all Sydney suburbs and provides free no-obligation quotes.'
          },
          {
            question: 'Does Pro Clean Corp service my suburb?',
            answer: 'Pro Clean Corp services all Sydney metropolitan suburbs from the CBD to Penrith in the west, Hornsby in the north, Sutherland in the south, and everywhere in between. Contact us with your suburb and we\'ll confirm coverage and pricing.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                All Sydney Suburbs
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides professional office cleaning across all Sydney suburbs. Whether you&apos;re in the CBD, Inner West, South Sydney, or the Hills District — your local office cleaning team is closer than you think.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Find Cleaners Near Me
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ All Sydney Suburbs</span>
                <span>✓ Same-Week Starts</span>
                <span>✓ No Lock-In Contracts</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Professional office cleaning services near you in Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">100+</div>
                <div className="text-xs text-gray-500">Sydney Suburbs Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Office cleaning near you in Sydney</strong> is available from Pro Clean Corp — a professional commercial cleaning company serving the entire Sydney metropolitan area. Whether you&apos;re searching for &quot;office cleaners near me&quot; in Parramatta, Hurstville, Chatswood, or anywhere in between, Pro Clean Corp has a local team ready to service your workplace.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Local Office Cleaners Available Across Sydney</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                When you search for &quot;office cleaning near me&quot; in Sydney, you want a company that&apos;s genuinely local — familiar with your suburb, responsive, and able to start quickly. Pro Clean Corp has cleaning teams based across Sydney&apos;s regions, meaning fast response times, local accountability, and no excessive travel surcharges.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Our office cleaning service covers everything from small 2-room offices to multi-floor commercial buildings. We provide flexible scheduling — early morning, daytime, or after-hours — and offer daily, weekly, and fortnightly cleaning plans to suit any business size and budget.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">What to Look for in an Office Cleaner Near You</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                A reliable office cleaner near you should be fully insured, provide consistent staffing (same team each visit), offer transparent pricing with no hidden fees, use professional-grade cleaning products, and be genuinely responsive when issues arise. Pro Clean Corp ticks every one of these boxes for Sydney businesses.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero5.jpg"
                alt="Local office cleaning team Sydney NSW"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Why Choose Pro Clean Corp</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Same team every visit</li>
                  <li>✓ Fully insured & vetted</li>
                  <li>✓ No lock-in contracts</li>
                  <li>✓ Same-week start available</li>
                  <li>✓ Quality guarantee</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sydney Coverage by Region */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Office Cleaning Coverage Across Sydney</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sydneyRegions.map((region) => (
                <div key={region.region} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h4 className="font-bold text-blueprimary mb-3">{region.region}</h4>
                  <ul className="space-y-1">
                    {region.suburbs.map(s => (
                      <li key={s} className="text-sm text-gray-600 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-greenprimary rounded-full flex-shrink-0 inline-block"></span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Suburb Links */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-3 text-center">Office Cleaning by Suburb</h3>
            <p className="text-center text-gray-600 mb-6">Browse our suburb-specific office cleaning pages to find your nearest service area.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {suburbLinks.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">What Our Office Cleaning Includes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Workstations, desks & surfaces',
                'Vacuum all carpet & rugs',
                'Hard floor mopping & polishing',
                'Kitchen, tea station & breakroom',
                'Bathrooms & toilet facilities',
                'Bins & hygienic waste services',
                'Windows, mirrors & glass',
                'Reception & waiting areas',
                'Meeting & boardroom cleaning',
                'Lift lobbies & stairwells',
                'High-touch disinfection',
                'End-of-lease deep cleaning'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Near Me</h3>
            <div className="space-y-5">
              {[
                { q: 'How do I find a reliable office cleaner near me in Sydney?', a: 'Look for companies with public liability insurance, consistent positive reviews, clear written quotes, and a history of working with businesses like yours. Pro Clean Corp offers all of the above and provides a free site assessment and quote with no obligation.' },
                { q: 'How quickly can you start office cleaning near me?', a: 'In most Sydney suburbs, Pro Clean Corp can begin office cleaning within 48–72 hours of agreement. For urgent requests, call 1300 494 983 and we\'ll do our best to accommodate a same-week or even same-day start.' },
                { q: 'Do you offer after-hours office cleaning near me?', a: 'Yes. We offer early morning (from 6am), daytime, evening, and weekend cleaning across all Sydney suburbs. Most of our clients prefer after-hours cleaning to avoid disruption during business hours.' },
                { q: 'What is the cost of office cleaning near me in Sydney?', a: 'Office cleaning costs in Sydney depend on your office size, location, cleaning frequency, and scope. Small offices typically cost from $120–$200 per visit, while larger offices are quoted individually. Contact us for a free quote specific to your workplace.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Find Office Cleaning Near You — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Call Pro Clean Corp now or complete the online form and we&apos;ll confirm coverage for your Sydney suburb within the hour.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Check My Suburb
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Call 1300 494 983
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
