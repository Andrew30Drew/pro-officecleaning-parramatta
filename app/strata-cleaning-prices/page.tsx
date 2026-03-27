import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Prices Sydney 2026 | ProCleanCorp',
  description: 'Strata cleaning in Sydney costs $80–$200 per visit for small complexes and $300–$800/month for mid-size buildings. Full 2026 price breakdown. Free quote.',
  keywords: 'strata cleaning prices sydney, strata cleaning cost sydney 2026, how much does strata cleaning cost, strata cleaning per month sydney, body corporate cleaning prices sydney',
  openGraph: {
    title: 'Strata Cleaning Prices Sydney 2026 | ProCleanCorp',
    description: 'Strata cleaning prices in Sydney 2026 — small complexes to large high-rise. Full breakdown and free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-prices',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning prices Sydney 2026' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-prices' }
};

const faqs = [
  {
    question: 'How much does strata cleaning cost per month in Sydney?',
    answer: 'Strata cleaning in Sydney costs approximately $150–$400 per month for small complexes (under 20 units, weekly clean), $400–$900 per month for medium buildings (20–60 units, 2–3 cleans per week), and $1,000–$3,000+ per month for large high-rise strata (60+ units, daily or near-daily common area programs). These figures include lobby, lifts, stairwells and bin rooms — car park and external areas are typically priced separately.'
  },
  {
    question: 'What affects the price of strata cleaning for my building?',
    answer: 'The main factors are: (1) number of units and floors — more units means more bin rooms, lifts and stairwells; (2) cleaning frequency — weekly versus daily programs significantly affects the monthly cost; (3) common area scope — buildings with pools, gyms, rooftop terraces and large car parks cost more; (4) building age and type — heritage buildings require more care and specialist products; (5) access requirements — security fob systems, lift access protocols and after-hours requirements.'
  },
  {
    question: 'Is strata cleaning charged per visit or monthly?',
    answer: 'Strata cleaning contracts are typically structured as a fixed monthly fee — which gives the OC committee a predictable budget line. The monthly fee is based on a fixed number of visits per week or month at a fixed rate per visit. ProCleanCorp provides strata cleaning on a fixed monthly contract basis with no lock-in — so the OC can review pricing annually or change providers without penalty.'
  }
];

const pricingTiers = [
  { tier: 'Small complex', units: 'Under 20 units, 1–3 floors', scope: 'Lobby, letterboxes, 1 stairwell, bin room', frequency: 'Weekly', visitCost: '$80–$150/visit', monthly: '$320–$600/month' },
  { tier: 'Medium complex', units: '20–50 units, 4–8 floors', scope: 'Lobby, 2–4 lifts, stairwells, bin rooms, car park', frequency: '2–3x/week', visitCost: '$180–$320/visit', monthly: '$700–$1,500/month' },
  { tier: 'Large high-rise', units: '50–100+ units, 10+ floors', scope: 'Full common area program, car park, pool, gym', frequency: 'Daily/5x week', visitCost: '$280–$500/visit', monthly: '$2,000–$4,000+/month' },
  { tier: 'Commercial strata', units: 'Office or mixed-use', scope: 'Lobby, lift lobbies, bathrooms, bin rooms', frequency: 'Daily', visitCost: '$200–$400/visit', monthly: '$1,500–$3,000/month' },
];

export default function StrataCleaningPricesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Prices Sydney"
        serviceDescription="Strata cleaning in Sydney typically costs $80–$200 per visit for small complexes, $300–$500 per month for medium buildings, and $500–$1,500 per month for large high-rise strata."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-prices"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Strata Cleaning Sydney', 'Body Corporate Cleaning', 'Common Area Cleaning', 'Lobby Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Strata Cleaning Prices — Sydney 2026</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Strata Cleaning Prices in Sydney — What Does Strata Cleaning Cost in 2026?
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              Complete 2026 price guide for strata cleaning in Sydney — from small 10-unit complexes to large high-rise buildings.
            </p>
            <div className="text-2xl font-bold text-green-200">Get a Fixed-Price Quote — 1300 494 983</div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Strata cleaning in Sydney typically costs $80–$200 per visit for small complexes (under 20 units), $300–$500 per month for medium buildings, and $500–$1,500 per month for large high-rise strata</strong> — depending on the number of common areas, floors and cleaning frequency. All prices below exclude GST.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Price Guide — Sydney (2026)</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-darkblue text-white">
                  <th className="text-left p-4 font-semibold">Building Type</th>
                  <th className="text-left p-4 font-semibold">Size</th>
                  <th className="text-left p-4 font-semibold">Typical Scope</th>
                  <th className="text-left p-4 font-semibold">Frequency</th>
                  <th className="text-left p-4 font-semibold text-green-300">Per Visit</th>
                  <th className="text-left p-4 font-semibold text-green-300">Per Month</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map(({ tier, units, scope, frequency, visitCost, monthly }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-800 font-semibold">{tier}</td>
                    <td className="p-4 text-gray-700 text-xs">{units}</td>
                    <td className="p-4 text-gray-700 text-xs">{scope}</td>
                    <td className="p-4 text-gray-700">{frequency}</td>
                    <td className="p-4 text-greenprimary font-semibold">{visitCost}</td>
                    <td className="p-4 text-greenprimary font-semibold">{monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-4">What Is Included in Strata Cleaning?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { heading: 'Standard inclusions', items: ['Building lobby and foyer', 'Lift interior and lift lobby on each floor', 'All stairwells', 'Bin rooms and bin areas', 'Letterbox area', 'Ground floor entry and car park entry'] },
                { heading: 'Add-on services (priced separately)', items: ['Car park scrubbing', 'Pool area and surrounds', 'Common gym or recreation room', 'External pathways and gardens', 'Graffiti removal', 'Window cleaning (external)'] },
              ].map(({ heading, items }, i) => (
                <div key={i}>
                  <h3 className="font-bold text-darkblue mb-3">{heading}</h3>
                  <ul className="space-y-1">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-2 text-sm text-gray-700">
                        <span className={`font-bold mt-0.5 ${i === 0 ? 'text-greenprimary' : 'text-gray-400'}`}>{i === 0 ? '✓' : '+'}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Prices</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Strata Cleaning by Suburb</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
                { label: 'Strata Cleaning Parramatta', href: '/strata-cleaning-parramatta' },
                { label: 'Strata Cleaning North Sydney', href: '/strata-cleaning-north-sydney' },
                { label: 'Strata Cleaning Inner West', href: '/strata-cleaning-inner-west' },
                { label: 'Body Corporate Cleaning Sydney', href: '/body-corporate-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get a Fixed-Price Strata Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment for all Sydney strata. No lock-in contract. OC committee proposals available.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
