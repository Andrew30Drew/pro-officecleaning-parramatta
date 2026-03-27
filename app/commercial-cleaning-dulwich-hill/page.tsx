import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaners Dulwich Hill | Inner West | Pro Clean Corp',
  description: 'Professional commercial cleaners in Dulwich Hill. Office, retail and strata cleaning for Inner West businesses. Fixed pricing, no lock-in. Free quote within 24 hours.',
  keywords: ['commercial cleaners dulwich hill', 'commercial cleaning dulwich hill', 'office cleaning dulwich hill', 'commercial cleaning inner west', 'cleaners dulwich hill'],
  openGraph: {
    title: 'Commercial Cleaners Dulwich Hill | Inner West | Pro Clean Corp',
    description: 'Professional commercial cleaners in Dulwich Hill. Office, retail and strata cleaning for Inner West businesses.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-dulwich-hill',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial cleaners Dulwich Hill Inner West' }]
  },
  twitter: { card: 'summary_large_image', title: 'Commercial Cleaners Dulwich Hill | Pro Clean Corp', description: 'Professional commercial cleaners in Dulwich Hill, Inner West Sydney.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-dulwich-hill' }
};

const faqs = [
  {
    question: 'What commercial cleaning services are available in Dulwich Hill?',
    answer: 'Pro Clean Corp provides a full range of commercial cleaning services in Dulwich Hill including office cleaning, retail store cleaning, strata common area cleaning, medical practice cleaning, restaurant and café cleaning and end of lease cleaning. We also service the commercial strip along New Canterbury Road and the mixed-use developments near the Dulwich Hill Metro station.'
  },
  {
    question: 'How much does commercial cleaning cost in Dulwich Hill?',
    answer: 'Commercial cleaning in Dulwich Hill is priced based on your premises size, zones covered and required frequency. Indicative pricing: small office or retail space (under 100sqm) from $80/clean, medium premises (100–300sqm) from $150/clean, and larger commercial spaces from $280/clean. Pro Clean Corp provides a written fixed-price quote after an on-site assessment.'
  },
  {
    question: 'Do you clean commercial properties on Dulwich Hill\'s main strips?',
    answer: 'Yes. Pro Clean Corp services retail and commercial premises along New Canterbury Road, Marrickville Road and the surrounding Inner West commercial precincts. We can schedule cleaning before or after trading hours to minimise disruption to your customers and staff.'
  },
  {
    question: 'How quickly can commercial cleaning in Dulwich Hill start?',
    answer: 'For most Dulwich Hill commercial premises, Pro Clean Corp can complete an on-site assessment within 48 hours and begin regular cleaning within 5 business days of agreement sign-off. Urgent or one-off cleaning can often be arranged within 24 hours subject to team availability.'
  }
];

const nearbySuburbs = [
  { suburb: 'Marrickville', href: '/commercial-cleaning-marrickville' },
  { suburb: 'Petersham', href: '/commercial-cleaning-petersham' },
  { suburb: 'Hurlstone Park', href: '/commercial-cleaning-hurlstone-park' },
  { suburb: 'Canterbury', href: '/commercial-cleaning-canterbury' },
  { suburb: 'Sydenham', href: '/commercial-cleaning-sydenham' },
  { suburb: 'Lewisham', href: '/commercial-cleaning-lewisham' }
];

export default function CommercialCleaningDulwichHillPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaners Dulwich Hill"
        serviceDescription="Professional commercial cleaning services in Dulwich Hill, Inner West Sydney. Office, retail, strata and medical cleaning with fixed pricing and no lock-in contracts."
        serviceUrl="/commercial-cleaning-dulwich-hill"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Retail Cleaning', 'Strata Cleaning', 'Restaurant Cleaning', 'Medical Cleaning', 'End of Lease Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Inner West · Canterbury-Bankstown LGA · 8km from CBD</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Commercial Cleaners Dulwich Hill — Inner West Specialists
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp provides commercial cleaning in Dulwich Hill</strong> for offices, retail stores, strata buildings and medical practices along New Canterbury Road and the wider Inner West — with local teams, fixed pricing and after-hours scheduling.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Local Inner West team', 'Fixed monthly pricing', 'No lock-in contracts', 'After-hours available', 'Free on-site quote'].map((b, i) => (
                  <span key={i} className="bg-white/15 border border-white/25 text-white text-sm px-3 py-1.5 rounded-lg">✓ {b}</span>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaners Dulwich Hill Inner West"
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
            <strong>Commercial cleaners in Dulwich Hill from Pro Clean Corp</strong> service offices, retail premises and strata buildings across the suburb&apos;s New Canterbury Road strip and residential-commercial mixed zones. Local Inner West teams, fixed pricing from $80/clean, after-hours scheduling and no lock-in contracts.
          </p>
        </div>
      </section>

      {/* About Dulwich Hill */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">Commercial Cleaning in Dulwich Hill&apos;s Inner West Precinct</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dulwich Hill is an established Inner West suburb approximately 8km south-west of the CBD, located in the Canterbury-Bankstown LGA. The suburb is served by the Inner West Light Rail line and the Metro Southwest line via Sydenham, making it increasingly accessible to workers and residents.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The commercial precinct along New Canterbury Road and Marrickville Road features a mix of retail stores, cafes, professional offices and medical practices. Pro Clean Corp services all these commercial property types in Dulwich Hill with tailored cleaning programs scheduled around each business&apos;s trading hours.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 mt-4">
                <h3 className="font-bold text-darkblue mb-3">Dulwich Hill Commercial Cleaning Pricing</h3>
                <div className="space-y-2 text-sm">
                  {[['Small office/retail (under 100sqm)', 'From $80/clean'], ['Medium premises (100–300sqm)', 'From $150/clean'], ['Large commercial space', 'From $280/clean'], ['Strata common areas', 'From $80/visit']].map(([t, p], i) => (
                    <div key={i} className="flex justify-between border-b border-gray-100 pb-2 last:border-0">
                      <span className="text-gray-700">{t}</span>
                      <span className="font-bold text-greenprimary">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero4.jpg"
                alt="Dulwich Hill commercial cleaning"
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
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">Commercial Cleaning Services in Dulwich Hill</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { type: 'Office Cleaning', tasks: ['Desks and workstations', 'Meeting rooms', 'Kitchen and amenities', 'Bathrooms', 'Reception areas'] },
              { type: 'Retail Cleaning', tasks: ['Shop floor mopping', 'Display area cleaning', 'Changeroom cleaning', 'Entry and glass cleaning', 'Stockroom maintenance'] },
              { type: 'Strata Cleaning', tasks: ['Lobby and foyer', 'Lift interiors', 'Corridors', 'Bin rooms', 'Car park sweeping'] }
            ].map((svc, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-darkblue mb-4">{svc.type}</h3>
                <ul className="space-y-2">
                  {svc.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Commercial Cleaners Dulwich Hill</h2>
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
          <h2 className="text-3xl font-bold mb-4">Get a Free Commercial Cleaning Quote in Dulwich Hill</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment within 48 hours. Fixed pricing, no lock-in contracts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
