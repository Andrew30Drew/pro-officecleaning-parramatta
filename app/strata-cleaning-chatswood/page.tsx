import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Chatswood | ProCleanCorp North Shore',
  description: 'Strata cleaning in Chatswood for high-rise residential towers and commercial strata. Lift lobbies, car parks, bin rooms and communal areas. Free quote.',
  keywords: 'strata cleaning chatswood, strata cleaners chatswood, high rise strata cleaning chatswood, common area cleaning chatswood, residential strata cleaning chatswood, owners corporation chatswood',
  openGraph: {
    title: 'Strata Cleaning Chatswood | ProCleanCorp North Shore',
    description: 'Strata cleaning in Chatswood for high-rise residential towers and commercial strata. Lift lobbies, car parks, bin rooms. Free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-chatswood',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Chatswood high-rise North Shore' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-chatswood' }
};

const faqs = [
  {
    question: 'Do you clean high-rise strata in Chatswood?',
    answer: 'Yes. ProCleanCorp specialises in high-rise strata cleaning in Chatswood, covering all common area floors from ground level lobbies to rooftop garden areas. Our teams are experienced with multi-floor lobby programs, lift interior maintenance, car park scrubbing across multiple basement levels and external façade window sill cleaning. We work with Chatswood building management to integrate our cleaning into building access protocols.'
  },
  {
    question: 'Can you provide a strata cleaning contract for our Chatswood OC?',
    answer: 'Yes. ProCleanCorp provides formal strata cleaning contract proposals for Chatswood OC committees within 48 hours of our on-site assessment. Our proposals include a detailed scope covering all common areas, frequency matrix, fixed monthly pricing, insurance documentation and references from existing high-rise strata clients.'
  },
  {
    question: 'Do you clean car park levels in Chatswood strata buildings?',
    answer: 'Yes. Car park cleaning is included in our Chatswood strata programs. We provide floor scrubbing, pressure washing, line marking area cleaning, bin bay maintenance and drainage grate cleaning across all basement car park levels. Car park cleaning can be scheduled separately from common area cleaning if the building management requires different access times.'
  }
];

export default function StrataCleaningChatswoodPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Chatswood"
        serviceDescription="ProCleanCorp delivers strata cleaning in Chatswood's high-rise residential towers and commercial strata buildings, covering all common areas with daily, weekly and periodic programs."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-chatswood"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['High-Rise Strata Cleaning', 'Multi-Floor Lobby Program', 'Car Park Scrubbing', 'Lift Interior Cleaning', 'Rooftop Area Cleaning', 'OC Contract Proposals']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Chatswood High-Rise Strata Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Chatswood — High-Rise & Residential Common Areas
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers strata cleaning for Chatswood's high-rise residential towers and commercial strata — multi-floor lobbies, car park levels, bin rooms and communal areas. OC contract proposals within 48 hours.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ High-Rise Specialists &nbsp;|&nbsp; ✓ Car Park Cleaning &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Strata cleaning Chatswood high-rise common area"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers strata cleaning in Chatswood's high-rise residential towers and commercial strata buildings</strong>, covering all common areas with daily, weekly and periodic programs. Chatswood has seen massive high-rise residential development — we support strata managers with multi-floor lobby programs, car park scrubbing and external area maintenance packaged as a single contract.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Services in Chatswood</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Chatswood has seen massive high-rise residential development driven by rail access and the Westfield commercial precinct. Strata managers of these towers need a cleaning contractor capable of managing multi-floor lobby programs, car park scrubbing across multiple basement levels and external common area maintenance — all coordinated under a single contract.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp provides packaged strata cleaning proposals for Chatswood high-rise OC committees, covering every common area at the right frequency with a clear pricing structure. We work with existing building management and strata managers to integrate access protocols and reporting requirements.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Chatswood Strata Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Multi-floor lobby programs', 'Lift interior & threshold cleaning', 'Stairwell & fire egress cleaning', 'Car park floor scrubbing', 'Basement bin bay cleaning', 'Rooftop garden area cleaning', 'Pool surround & BBQ area', 'Letterbox & intercom cleaning', 'Window sill & ledge cleaning', 'OC contract proposals', 'Insurance certificates', 'Monthly compliance reports'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">North Shore Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Chatswood', 'Willoughby', 'Artarmon', 'Crows Nest', 'St Leonards', 'Lane Cove', 'Lindfield', 'Roseville'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">OC Proposals — 48 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">High-rise strata specialists. Free assessment.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Chatswood</h3>
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
                { label: 'Office Cleaning Chatswood', href: '/office-cleaning-chatswood' },
                { label: 'Commercial Cleaning Chatswood', href: '/commercial-cleaning-chatswood' },
                { label: 'Strata Cleaning North Sydney', href: '/strata-cleaning-north-sydney' },
                { label: 'Strata Cleaning Prices', href: '/strata-cleaning-prices' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Strata Cleaning Chatswood — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">High-rise strata specialists. Multi-floor lobby programs. Car park cleaning included.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
