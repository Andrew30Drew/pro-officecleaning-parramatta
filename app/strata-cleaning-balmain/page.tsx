import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Balmain | ProCleanCorp Inner West',
  description: 'Professional strata cleaning in Balmain for residential apartments, converted warehouses and waterfront strata. Heritage-appropriate methods. Free quote today.',
  keywords: 'strata cleaning balmain, strata cleaners balmain, waterfront strata cleaning balmain, heritage strata cleaning balmain, common area cleaning balmain, owners corporation balmain',
  openGraph: {
    title: 'Strata Cleaning Balmain | ProCleanCorp Inner West',
    description: 'Professional strata cleaning in Balmain for apartments, warehouses and waterfront strata. Heritage methods. Free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-balmain',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Balmain Inner West Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-balmain' }
};

const faqs = [
  {
    question: 'Do you clean strata common areas in Balmain waterfront complexes?',
    answer: 'Yes. ProCleanCorp provides strata cleaning for Balmain\'s waterfront apartment complexes, including buildings on the Darling Street waterfront and Mort Bay precinct. Waterfront buildings require additional consideration for salt-air surface protection and higher-frequency cleaning of external common areas exposed to harbour conditions.'
  },
  {
    question: 'What heritage cleaning protocols do you use in Balmain?',
    answer: 'For Balmain\'s heritage terrace conversions and Federation-era apartment buildings, we use pH-neutral stone cleaners for sandstone entries, timber-safe products for original staircases, and avoid any acid or alkaline-based cleaners that damage original surfaces. We also have experience with converted warehouse apartments — the polished concrete floors and raw brick walls common in Balmain\'s former industrial conversions require completely different cleaning products.'
  },
  {
    question: 'Can you tender for our Balmain OC strata cleaning contract?',
    answer: 'Yes. ProCleanCorp provides formal strata cleaning tender documentation for Balmain OC committees, including detailed scope of works, pricing breakdown, insurance certificates, references from current strata clients and compliance documentation. We can attend OC meetings to present and discuss our proposal in person.'
  }
];

export default function StrataCleaningBalmainPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Balmain"
        serviceDescription="ProCleanCorp provides strata cleaning in Balmain, with experience across heritage terrace conversions, converted warehouse apartments and modern waterfront complexes."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-balmain"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Waterfront Strata Cleaning', 'Heritage Terrace Cleaning', 'Warehouse Conversion Cleaning', 'Lobby Cleaning', 'Car Park Cleaning', 'OC Tender Documentation']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Balmain Strata Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Balmain — Heritage & Modern Strata Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides strata cleaning in Balmain across heritage terrace conversions, converted warehouse apartments and modern waterfront complexes. Discretion, detail and reliable scheduling for premium OC budgets.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Heritage & Waterfront &nbsp;|&nbsp; ✓ OC Tenders Available &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Strata cleaning Balmain waterfront heritage"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides strata cleaning in Balmain</strong>, with experience across heritage terrace conversions, converted warehouse apartments and modern waterfront complexes unique to this suburb. Balmain has both premium waterfront strata and heritage terrace conversions — two very different cleaning challenges we address directly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Services in Balmain</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Balmain presents three distinct strata cleaning challenges within a single suburb. Heritage terrace conversions need sandstone-safe and timber-safe products. Converted warehouse apartments (raw brick, polished concrete, industrial fittings) require completely different cleaning protocols. And waterfront apartments need salt-air surface protection and higher external cleaning frequency.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp has experience with all three. We provide OC committees with a single cleaning contractor who understands each building type — eliminating the need to manage different contractors for heritage and modern buildings in the same strata portfolio.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Balmain Strata Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Heritage sandstone entry cleaning', 'Converted warehouse common areas', 'Waterfront building salt protection', 'Lobby & corridor cleaning', 'Lift interior cleaning', 'Stairwell & landing cleaning', 'Car park scrubbing', 'Bin room & courtyard cleaning', 'OC tender documentation', 'Insurance certificates', 'Visit log reporting', 'No lock-in contracts'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Balmain Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Balmain', 'Balmain East', 'Rozelle', 'Birchgrove', 'Drummoyne', 'Leichhardt', 'Lilyfield', 'Annandale'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Heritage & waterfront strata specialists.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Balmain</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Strata Cleaning Drummoyne', href: '/strata-cleaning-drummoyne' },
                { label: 'Strata Cleaning Leichhardt', href: '/strata-cleaning-leichhardt' },
                { label: 'Commercial Cleaning Balmain', href: '/commercial-cleaning-balmain' },
                { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Strata Cleaning Balmain — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Heritage terraces, warehouse conversions and waterfront strata — one specialist contractor.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
