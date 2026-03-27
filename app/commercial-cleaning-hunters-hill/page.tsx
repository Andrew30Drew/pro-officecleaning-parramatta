import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Hunters Hill | Heritage Suburb Specialists | Pro Clean Corp',
  description: 'Professional commercial cleaning in Hunters Hill — Australia\'s oldest municipality. Office, strata and retail cleaning with heritage property experience. Free quote today.',
  keywords: ['commercial cleaning hunters hill', 'commercial cleaners hunters hill', 'office cleaning hunters hill', 'cleaning services hunters hill', 'strata cleaning hunters hill'],
  openGraph: {
    title: 'Commercial Cleaning Hunters Hill | Pro Clean Corp',
    description: 'Professional commercial cleaning in Hunters Hill. Heritage property experience, strata and office cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-hunters-hill',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial cleaning Hunters Hill' }]
  },
  twitter: { card: 'summary_large_image', title: 'Commercial Cleaning Hunters Hill | Pro Clean Corp', description: 'Professional commercial cleaning in Hunters Hill — heritage suburb specialists.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-hunters-hill' }
};

const faqs = [
  {
    question: 'What commercial cleaning services are available in Hunters Hill?',
    answer: 'Pro Clean Corp provides commercial cleaning services in Hunters Hill including office cleaning, strata common area cleaning, retail cleaning, medical practice cleaning and end of lease cleaning. Given Hunters Hill\'s mix of heritage properties, modern strata developments and small professional offices, we tailor our approach to each property type — including the use of heritage-surface-safe cleaning products where required.'
  },
  {
    question: 'Do you clean heritage commercial properties in Hunters Hill?',
    answer: 'Yes. Hunters Hill contains many heritage-listed properties — Australia\'s oldest municipality has significant sandstone, timber and historic plaster surfaces in some commercial buildings. Pro Clean Corp uses heritage-surface-appropriate cleaning products and techniques for any property with period features, avoiding harsh chemicals that could damage sandstone, period timber or original plasterwork.'
  },
  {
    question: 'How much does commercial cleaning cost in Hunters Hill?',
    answer: 'Commercial cleaning in Hunters Hill is priced after an on-site assessment. Indicative rates: small office or retail under 100sqm from $80/clean, medium premises from $150/clean. Strata common area cleaning from $80/visit for small complexes. Pro Clean Corp provides a written fixed-price quote with no obligation — contact us for a same-week assessment in Hunters Hill.'
  },
  {
    question: 'Do you service commercial buildings in nearby Gladesville and Putney?',
    answer: 'Yes. Pro Clean Corp services commercial premises across the Hunters Hill LGA and surrounding suburbs including Gladesville, Putney, Drummoyne, Lane Cove, Ryde and Meadowbank. Our Lower North Shore teams are familiar with the access requirements and property types throughout this area.'
  }
];

const nearbySuburbs = [
  { suburb: 'Gladesville', href: '/commercial-cleaning-gladesville' },
  { suburb: 'Ryde', href: '/commercial-cleaning-ryde' },
  { suburb: 'Meadowbank', href: '/commercial-cleaning-meadowbank' },
  { suburb: 'Putney', href: '/commercial-cleaning-putney' },
  { suburb: 'Drummoyne', href: '/commercial-cleaning-drummoyne' },
  { suburb: 'Lane Cove', href: '/office-cleaning-lane-cove' }
];

export default function CommercialCleaningHuntersHillPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Hunters Hill"
        serviceDescription="Professional commercial cleaning in Hunters Hill, Australia's oldest municipality. Heritage-appropriate products, office, strata and retail cleaning across the Lower North Shore."
        serviceUrl="/commercial-cleaning-hunters-hill"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Strata Cleaning', 'Retail Cleaning', 'Heritage Property Cleaning', 'Medical Practice Cleaning', 'End of Lease Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Lower North Shore · Australia&apos;s Oldest Municipality · 10km from CBD</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Commercial Cleaning Hunters Hill — Heritage Suburb Specialists
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers commercial cleaning in Hunters Hill</strong> — Australia&apos;s oldest municipality — with expertise in heritage property surfaces, strata cleaning and professional office maintenance across the Lower North Shore.
              </p>
              <div className="space-y-2 mb-8">
                {['Heritage-surface-safe cleaning products', 'Office and strata cleaning', 'Local Lower North Shore team', 'Fixed pricing, no lock-in', 'Free on-site assessment'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white text-sm">
                    <span className="text-green-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning Hunters Hill"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Commercial cleaning in Hunters Hill requires understanding the suburb&apos;s unique character</strong> — heritage sandstone buildings, modern strata complexes and small professional offices coexist in Australia&apos;s oldest municipality. Pro Clean Corp brings heritage-appropriate products and local Lower North Shore knowledge to every Hunters Hill cleaning contract.
          </p>
        </div>
      </section>

      {/* About Hunters Hill */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">Commercial Cleaning in Australia&apos;s Oldest Municipality</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hunters Hill occupies the peninsula between the Lane Cove and Parramatta Rivers, approximately 10km north-west of the Sydney CBD. It is one of Australia&apos;s most picturesque harbourside suburbs, with extensive heritage overlays that affect both residential and commercial properties.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The commercial activity in Hunters Hill is concentrated around the Hunters Hill Village retail and professional precinct on Alexandra Street and surrounds. The suburb&apos;s professional community includes medical practices, legal offices, accountants and small business operators — many in premises with heritage character.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Pro Clean Corp&apos;s experience with Hunters Hill properties ensures we select cleaning products and methods that are safe for sandstone, period timber, heritage plaster and other materials common in older commercial buildings.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/faq3.jpg"
                alt="Hunters Hill commercial property cleaning"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">Commercial Cleaning Services — Hunters Hill</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { type: 'Office & Professional Cleaning', desc: 'Workstations, meeting rooms, reception, kitchen and bathrooms. After-hours scheduling available for professional offices on Alexandra Street and surrounding precincts.', icon: '💼' },
              { type: 'Strata Cleaning', desc: 'Common areas, lobbies, lifts, bin rooms and car parks for Hunters Hill\'s growing apartment and townhouse complex market. Written OC reports after every visit.', icon: '🏢' },
              { type: 'Retail & Commercial Strip', desc: 'Shop floor cleaning, display areas, entry glass and stockrooms for the Hunters Hill Village retail precinct and nearby commercial strips.', icon: '🛍️' },
              { type: 'Heritage Property Care', desc: 'Specialist cleaning for sandstone surfaces, period timber, original plasterwork and other heritage materials using pH-safe, surface-appropriate products.', icon: '🏛️' }
            ].map((svc, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{svc.icon}</div>
                  <div>
                    <h3 className="font-bold text-darkblue mb-2">{svc.type}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6">Also Serving Nearby Suburbs</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {nearbySuburbs.map((s, i) => (
              <Link key={i} href={s.href} className="bg-gray-50 hover:bg-blueprimary hover:text-white border border-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center transition">{s.suburb}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Commercial Cleaning Hunters Hill</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Free Commercial Cleaning Quote in Hunters Hill</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment within 48 hours. Heritage-appropriate protocols. No lock-in contracts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
