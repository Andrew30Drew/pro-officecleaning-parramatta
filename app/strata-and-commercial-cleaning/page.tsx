import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata and Commercial Cleaning Sydney | One Provider | Pro Clean Corp',
  description: 'Combined strata and commercial cleaning under one Sydney provider. Simplify contracts, reduce costs and get consistent standards across all your properties.',
  keywords: ['strata and commercial cleaning', 'strata commercial cleaning sydney', 'commercial strata cleaning', 'combined cleaning services sydney', 'strata cleaning commercial buildings'],
  openGraph: {
    title: 'Strata and Commercial Cleaning Sydney | One Provider | Pro Clean Corp',
    description: 'Pro Clean Corp handles strata and commercial cleaning under one contract — consistent standards, single invoice, full Sydney coverage.',
    url: 'https://www.procleancorp.com.au/strata-and-commercial-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata and commercial cleaning Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Strata and Commercial Cleaning Sydney | Pro Clean Corp', description: 'Combined strata and commercial cleaning under one Sydney provider.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-and-commercial-cleaning' }
};

const faqs = [
  {
    question: 'Can one company handle both strata and commercial cleaning?',
    answer: 'Yes. Pro Clean Corp specialises in providing both strata cleaning (common areas, lobbies, lifts, bin rooms) and commercial cleaning (offices, retail, showrooms, warehouses) under a single contract. This is particularly valuable for property managers who oversee mixed-use developments combining residential strata with ground-floor commercial tenancies.'
  },
  {
    question: 'What is the difference between strata cleaning and commercial cleaning?',
    answer: 'Strata cleaning covers residential and mixed-use common areas — lobbies, corridors, lifts, bin rooms and car parks — with OC committee reporting requirements. Commercial cleaning covers the internal spaces of business premises — offices, meeting rooms, kitchens, bathrooms and reception areas. Pro Clean Corp delivers both to the same professional standard.'
  },
  {
    question: 'Is combined strata and commercial cleaning cheaper than using separate providers?',
    answer: 'In most cases, yes. A single provider for both services reduces management overhead, eliminates duplicate contractor inductions and often achieves a volume discount on the combined service. Property managers typically save 10–20% compared to using two separate cleaning companies.'
  },
  {
    question: 'Do you clean mixed-use buildings with both residential strata and commercial tenancies?',
    answer: 'This is one of our specialisations. Mixed-use buildings — typically with commercial tenancies on the ground and first floors and residential strata above — require cleaning protocols that respect the different schedule and access requirements of each tenancy type. We coordinate service schedules to minimise disruption to both residents and commercial tenants.'
  }
];

export default function StrataAndCommercialCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata and Commercial Cleaning Sydney"
        serviceDescription="Combined strata and commercial cleaning services in Sydney under one provider. Simplify contracts and get consistent standards across all your properties."
        serviceUrl="/strata-and-commercial-cleaning"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Strata Common Area Cleaning', 'Office Cleaning', 'Lobby Cleaning', 'Car Park Cleaning', 'Retail Cleaning', 'Mixed-Use Building Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">One Provider · All Properties</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Strata and Commercial Cleaning — Sydney&apos;s Combined Property Solution
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers strata and commercial cleaning</strong> under a single contract — ideal for mixed-use developments, property managers with multiple assets and investors who need consistent cleaning standards across their entire portfolio.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8">
                <div className="grid grid-cols-2 gap-4 text-sm text-white">
                  <div><span className="text-green-300 font-bold">Strata:</span> Lobbies, lifts, bin rooms, corridors, car parks</div>
                  <div><span className="text-green-300 font-bold">Commercial:</span> Offices, retail, showrooms, kitchens, amenities</div>
                </div>
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/strata.jpg"
                alt="Strata and commercial cleaning Sydney"
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
            <strong>Pro Clean Corp combines strata and commercial cleaning under one Sydney provider</strong> — one contract, one invoice, one account manager. Ideal for mixed-use developments, property managers with strata and commercial assets, and investors seeking portfolio-level cleaning consistency.
          </p>
        </div>
      </section>

      {/* Dual Service Split */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">What We Cover Across Strata and Commercial</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-blueprimary/5 rounded-2xl p-8 border border-blueprimary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blueprimary rounded-full flex items-center justify-center text-white font-bold">S</div>
                <h3 className="text-xl font-bold text-darkblue">Strata Cleaning</h3>
              </div>
              <ul className="space-y-3">
                {['Entrance foyers and lobbies', 'Lift interiors and buttons', 'Corridors and stairwells', 'Bin room cleaning and deodorising', 'Car park sweeping and pressure wash', 'Common outdoor areas', 'Glass and mirror polishing', 'OC-ready written service reports'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-blueprimary font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-greenprimary/5 rounded-2xl p-8 border border-greenprimary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-greenprimary rounded-full flex items-center justify-center text-white font-bold">C</div>
                <h3 className="text-xl font-bold text-darkblue">Commercial Cleaning</h3>
              </div>
              <ul className="space-y-3">
                {['Office floors, desks and workstations', 'Meeting rooms and breakout spaces', 'Kitchen and staff amenities', 'Reception areas and waiting rooms', 'Retail shop floors and displays', 'Bathrooms and toilets', 'Internal glass partitions', 'After-hours service available'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-greenprimary font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Use + Image */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">Mixed-Use Building Specialists</h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Mixed-use buildings — with commercial tenancies on lower floors and residential strata above — require a cleaning provider who understands both environments. Our teams are trained for the scheduling complexity, access requirements and reporting obligations of each building zone.
              </p>
              <div className="space-y-3">
                {[
                  'Separate schedules for commercial and strata zones',
                  'After-hours commercial cleaning to avoid disrupting business hours',
                  'Strata reports for OC committee + commercial reports for tenancy managers',
                  'Single point of contact for the building manager'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-greenprimary font-bold mt-0.5">✓</span>
                    <p className="text-gray-700 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/office.webp"
                alt="Mixed use strata and commercial cleaning"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">Benefits of a Single Provider for Strata and Commercial</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📄', title: 'Single Invoice', desc: 'One monthly invoice covering strata and commercial cleaning — simplifying accounts payable for property managers.' },
              { icon: '💰', title: 'Volume Savings', desc: 'Combined contracts typically save 10–20% compared to separate providers. Ask us for a bundled pricing quote.' },
              { icon: '🔑', title: 'One Key Holder', desc: 'One team has access to all areas. No coordinating multiple contractors, inductions or key management systems.' },
              { icon: '📊', title: 'Unified Reporting', desc: 'Single service report covering both strata common areas and commercial tenancy cleaning — delivered digitally.' },
              { icon: '⚡', title: 'Faster Response', desc: 'One provider for both services means urgent issues in any part of the building reach the same team instantly.' },
              { icon: '🏆', title: 'Consistent Standards', desc: 'The same cleaning standards, staff training and QA processes apply across every level of your building.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-5">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-darkblue mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Strata and Commercial Cleaning</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
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
          <h2 className="text-3xl font-bold mb-4">Simplify Your Property Cleaning — One Quote Covers Both</h2>
          <p className="text-xl text-blue-100 mb-8">Tell us about your strata and commercial properties — we&apos;ll provide a single bundled quote within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Get a Bundle Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
