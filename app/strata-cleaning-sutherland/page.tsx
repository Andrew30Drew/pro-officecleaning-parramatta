import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Sutherland Shire | ProCleanCorp',
  description: 'Professional strata cleaning across the Sutherland Shire. Cronulla, Miranda, Caringbah, Kirrawee. Lobby, lift, car park and common area cleaning. Free quote.',
  keywords: 'strata cleaning sutherland shire, strata cleaners sutherland shire, strata cleaning cronulla, strata cleaning miranda, coastal strata cleaning sydney, common area cleaning sutherland',
  openGraph: {
    title: 'Strata Cleaning Sutherland Shire | ProCleanCorp',
    description: 'Professional strata cleaning across the Sutherland Shire. Cronulla to Miranda. Lobbies, lifts, car parks. Free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-sutherland',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Sutherland Shire coastal Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-sutherland' }
};

const faqs = [
  {
    question: 'Do you clean strata buildings in Cronulla and Miranda?',
    answer: 'Yes. ProCleanCorp services strata buildings throughout the Sutherland Shire including Cronulla, Miranda, Caringbah, Kirrawee, Sutherland, Gymea and Engadine. We cover the full Shire from the beachside apartments of Cronulla to the commercial strata in Miranda\'s town centre.'
  },
  {
    question: 'How does salt air affect strata cleaning requirements in coastal Sutherland Shire?',
    answer: 'Salt air in coastal Sutherland Shire — particularly in Cronulla and the surrounding beachside areas — accelerates corrosion on metal surfaces (handrails, lift door surrounds, letterboxes), promotes mould growth in shaded common areas, and leaves salt residue on external glass and surfaces. ProCleanCorp applies salt-neutralising rinse products on external surfaces, uses stainless steel-safe cleaning products for metal fixtures, and schedules more frequent anti-mould treatment in shaded outdoor areas of coastal Shire buildings.'
  },
  {
    question: 'Can you handle both residential and commercial strata in the Sutherland Shire?',
    answer: 'Yes. ProCleanCorp services both residential strata complexes and commercial strata buildings across the Sutherland Shire. We provide a single OC committee proposal covering all common areas with clear pricing, whether the building is a beachside residential complex in Cronulla or a commercial strata building in Miranda\'s business precinct.'
  }
];

export default function StrataCleaningSutherlandPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Sutherland Shire"
        serviceDescription="ProCleanCorp delivers strata cleaning across the Sutherland Shire, covering residential complexes and mixed-use strata in Cronulla, Miranda, Caringbah and Kirrawee."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-sutherland"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Coastal Strata Cleaning', 'Salt Air Surface Protection', 'Lobby Cleaning', 'Car Park Cleaning', 'Common Area Cleaning', 'OC Proposals']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Sutherland Shire Strata Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Sutherland Shire — Common Area Cleaning Services
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers strata cleaning across the Sutherland Shire — Cronulla, Miranda, Caringbah, Kirrawee. Salt-air surface protection for coastal buildings. OC proposals within 48 hours.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Coastal Specialists &nbsp;|&nbsp; ✓ Cronulla to Engadine &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Strata cleaning Sutherland Shire coastal apartments"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers strata cleaning across the Sutherland Shire</strong>, covering residential complexes and mixed-use strata in Cronulla, Miranda, Caringbah and Kirrawee. Salt-air surface protection for coastal buildings is part of our standard Shire strata program — addressing a risk most cleaners overlook.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning across the Sutherland Shire</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The Sutherland Shire has a significant strata market driven by beachside apartment demand in Cronulla, high-density residential development in Miranda and Caringbah, and strong owner-occupier communities that expect high standards in common area maintenance.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Coastal Sutherland Shire buildings face specific challenges: salt air accelerates corrosion on handrails and lift door surrounds, promotes mould growth in shaded common areas, and deposits salt residue on external glass. ProCleanCorp applies salt-neutralising rinse products and stainless steel-safe cleaners specifically for this environment.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Sutherland Shire Strata Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Lobby & foyer cleaning', 'Lift interior & door surround cleaning', 'Stairwell & landing cleaning', 'Car park scrubbing', 'Bin room cleaning', 'Salt-air surface protection', 'Coastal mould prevention', 'Pool surround & BBQ areas', 'Common garden maintenance', 'OC committee proposals', 'Insurance documentation', 'Visit log reporting'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Sutherland Shire Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Cronulla', 'Miranda', 'Caringbah', 'Kirrawee', 'Sutherland', 'Gymea', 'Engadine', 'Jannali'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Coastal strata specialists. OC proposals 48hrs.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Sutherland Shire</h3>
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
                { label: 'Strata Cleaning Penrith', href: '/strata-cleaning-penrith' },
                { label: 'Commercial Cleaning Sutherland', href: '/commercial-cleaning-sutherland' },
                { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
                { label: 'Strata Cleaning Prices', href: '/strata-cleaning-prices' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Strata Cleaning Sutherland Shire — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Coastal salt-air protection. Cronulla to Miranda and beyond.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
