import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Ryde | ProCleanCorp North Sydney',
  description: "Strata cleaning in Ryde for residential towers, mixed-use buildings and commercial strata. Serving Top Ryde, Meadowbank and Shepherd's Bay. Free quote.",
  keywords: "strata cleaning ryde, strata cleaners ryde, strata cleaning meadowbank, strata cleaning top ryde, shepherd's bay strata cleaning, common area cleaning ryde",
  openGraph: {
    title: 'Strata Cleaning Ryde | ProCleanCorp North Sydney',
    description: "Strata cleaning in Ryde for residential towers, mixed-use buildings. Top Ryde, Meadowbank, Shepherd's Bay. Free quote.",
    url: 'https://www.procleancorp.com.au/strata-cleaning-ryde',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Ryde North Sydney Meadowbank' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-ryde' }
};

const faqs = [
  {
    question: "Do you service new strata buildings at Meadowbank and Shepherd's Bay?",
    answer: "Yes. ProCleanCorp specifically targets newly settled strata buildings at Meadowbank and Shepherd's Bay — we offer a month-to-month trial period with no lock-in for new OC committees setting up their first cleaning contract. Our on-site assessment is available within 48 hours and proposals are provided within 3 business days, with a rapid start capability to ensure new residents have clean common areas from day one."
  },
  {
    question: 'What is the typical monthly cost for strata cleaning in Ryde?',
    answer: 'Strata cleaning in Ryde typically costs $250–$600 per month for mid-size residential buildings (20-60 units) and $600–$1,500+ per month for large high-rise towers. The final price depends on the number of common area floors, lift lobbies, car park levels and the required cleaning frequency. ProCleanCorp provides fixed-price proposals after a free on-site assessment.'
  },
  {
    question: 'Can you start a strata cleaning contract in Ryde within one week?',
    answer: 'Yes. For most Ryde strata buildings, ProCleanCorp can begin cleaning within 5-7 business days of an accepted proposal. For urgent requirements (new building occupancy, contractor change), we can often start within 48-72 hours — call 1300 494 983 to discuss your timeline.'
  }
];

export default function StrataCleaningRydePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Ryde"
        serviceDescription="ProCleanCorp provides strata cleaning across the Ryde municipality, covering high-rise residential towers at Top Ryde and Meadowbank's waterfront strata developments."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-ryde"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['New Building Strata Cleaning', 'High-Rise Lobby Programs', 'Car Park Cleaning', 'Waterfront Strata Cleaning', 'Month-to-Month Contracts']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Ryde Strata Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Ryde — Professional Common Area Cleaning
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides strata cleaning across Ryde — Top Ryde, Meadowbank and Shepherd's Bay. Month-to-month trial for new OC committees. Start within one week. On-site quote in 48 hours.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ New OC Trial Available &nbsp;|&nbsp; ✓ Start in 1 Week &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Strata cleaning Ryde Meadowbank waterfront"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides strata cleaning across the Ryde municipality</strong>, covering high-rise residential towers at Top Ryde and Meadowbank's waterfront strata developments. For newly settled OC committees, we offer a month-to-month trial period and on-site quotes within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Services in Ryde</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Ryde's waterfront at Meadowbank and Shepherd's Bay has produced a wave of new strata buildings — recently settled OC committees who are setting up their first cleaning contract and need a reliable, responsive contractor from day one.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp specifically supports new Ryde strata committees with a fast-start capability — on-site assessment within 48 hours, written proposal within 3 business days, and a month-to-month trial period so new committees can assess our service before committing to an annual contract. We also service established strata in Top Ryde, West Ryde and Eastwood.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Ryde Strata Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Lobby & foyer cleaning', 'Lift interior & threshold cleaning', 'Stairwell & landing cleaning', 'Car park floor scrubbing', 'Bin room cleaning', 'Pool surround cleaning', 'Rooftop & common garden areas', 'Window sill & ledge cleaning', 'OC committee proposals', 'Month-to-month trial option', 'Insurance documentation', 'Fast start — within 1 week'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Ryde Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Top Ryde', 'Meadowbank', "Shepherd's Bay", 'West Ryde', 'Eastwood', 'Ermington', 'Rydalmere', 'Putney'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 48 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">New OC welcome. Month-to-month trial option.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Ryde</h3>
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
                { label: 'Medical Cleaning Ryde', href: '/medical-cleaning-ryde' },
                { label: 'Strata Cleaning North Sydney', href: '/strata-cleaning-north-sydney' },
                { label: 'Commercial Cleaning Ryde', href: '/commercial-cleaning-ryde' },
                { label: 'Strata Cleaning Prices', href: '/strata-cleaning-prices' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Strata Cleaning Ryde — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">New OC trial available. Start within one week. Top Ryde to Meadowbank coverage.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
