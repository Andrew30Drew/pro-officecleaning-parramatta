import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Cost Sydney 2026 | ProCleanCorp',
  description: 'Gym cleaning in Sydney costs $45–$85/hr depending on size and frequency. Full 2026 price guide for fitness centres, CrossFit boxes and yoga studios. Free quote.',
  keywords: 'gym cleaning cost sydney, how much does gym cleaning cost, fitness centre cleaning prices sydney 2026, gym cleaning per hour sydney, yoga studio cleaning cost, crossfit box cleaning cost sydney',
  openGraph: {
    title: 'Gym Cleaning Cost Sydney 2026 | ProCleanCorp',
    description: 'How much does gym cleaning cost in Sydney? Full 2026 price guide for fitness centres, boutique studios and large gyms.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-cost',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning cost Sydney 2026 price guide' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-cost' }
};

const faqs = [
  {
    question: 'How much does daily gym cleaning cost in Sydney?',
    answer: 'Daily gym cleaning in Sydney costs between $150 and $600 per visit depending on the size of the facility. A small boutique studio (under 200m²) with a single room typically costs $150–$250 per daily clean. A mid-size gym (200–500m²) with weights, cardio and locker rooms costs $250–$450 per visit. Large gyms and fitness centres (500m²+) with pools, sauna and multiple studios pay $450–$800 per daily visit. Daily clients receive a lower per-visit rate than facilities that clean less frequently.'
  },
  {
    question: 'Is gym cleaning charged per visit or per hour?',
    answer: 'Gym cleaning can be structured either way. For ongoing daily or weekly programs, most gyms prefer a fixed price per visit — which gives predictable costs for budgeting annual cleaning contracts. For one-off deep cleans or infrequent sessions, an hourly rate ($45–$85/hr) is more common. ProCleanCorp provides gym cleaning on a fixed-price per-visit basis for regular contracts, with clear scope of works covering all zones from the equipment floor to the wet areas.'
  },
  {
    question: 'What is included in the price of gym cleaning in Sydney?',
    answer: 'Standard gym cleaning in Sydney includes: disinfection of all equipment contact surfaces, mopping and disinfecting studio and weight room floors, cleaning and disinfecting locker rooms and change areas, cleaning and sanitising bathrooms and showers, emptying all bins and replacing liners, cleaning reception and entry areas, and restocking soap and paper products (if consumables are provided). Pool and sauna cleaning are typically priced separately.'
  }
];

const gymPricing = [
  { type: 'Boutique yoga/pilates studio', size: 'Under 150m²', zones: 'Studio floor, bathroom, reception', frequency: 'Daily', price: '$150–$250/visit' },
  { type: 'Small CrossFit box', size: '150–300m²', zones: 'Rig area, rubber floor, bathrooms', frequency: 'Daily', price: '$200–$350/visit' },
  { type: 'Mid-size gym', size: '300–600m²', zones: 'Weights, cardio, locker rooms, bathrooms', frequency: 'Daily', price: '$300–$500/visit' },
  { type: 'Large gym/fitness centre', size: '600m²+', zones: 'Full facility, pool area, multiple studios', frequency: 'Daily', price: '$450–$800/visit' },
  { type: '24-hour gym', size: 'Any', zones: 'Full facility pre-opening or post-close', frequency: 'Daily (off-peak)', price: 'From $220/visit' },
  { type: 'Council leisure centre', size: 'Large', zones: 'Courts, pool, gym, change rooms', frequency: 'Daily', price: 'From $600/visit' },
];

export default function GymCleaningCostPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Cost Sydney"
        serviceDescription="Gym cleaning in Sydney costs between $45 and $85 per hour, with small boutique studios averaging $150–$250 per visit and large gyms paying $400–$800 per month."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-cost"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Gym Cleaning Sydney', 'Fitness Centre Cleaning', 'Yoga Studio Cleaning', 'CrossFit Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Gym Cleaning Prices — Sydney 2026</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              How Much Does Gym Cleaning Cost in Sydney? (2026 Price Guide)
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              Complete 2026 pricing guide for gym and fitness centre cleaning in Sydney — boutique studios, CrossFit boxes, large gyms and council leisure centres.
            </p>
            <div className="text-2xl font-bold text-green-200">Free Quote — 1300 494 983</div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Gym cleaning in Sydney costs between $45 and $85 per hour depending on the size of the facility, frequency of cleaning and the types of surfaces involved</strong> — with small boutique studios averaging $150–$250 per visit and large gyms paying $400–$800+ per month for daily cleaning programs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-darkblue mb-6">Gym Cleaning Price Guide — Sydney (2026)</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-darkblue text-white">
                  <th className="text-left p-4 font-semibold">Gym Type</th>
                  <th className="text-left p-4 font-semibold">Size</th>
                  <th className="text-left p-4 font-semibold">Zones Covered</th>
                  <th className="text-left p-4 font-semibold">Frequency</th>
                  <th className="text-left p-4 font-semibold text-green-300">Typical Price</th>
                </tr>
              </thead>
              <tbody>
                {gymPricing.map(({ type, size, zones, frequency, price }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-800 font-medium">{type}</td>
                    <td className="p-4 text-gray-700">{size}</td>
                    <td className="p-4 text-gray-700 text-xs">{zones}</td>
                    <td className="p-4 text-gray-700">{frequency}</td>
                    <td className="p-4 text-greenprimary font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-4">What Affects Gym Cleaning Costs?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Facility Size', 'Larger gyms with more zones (weights + cardio + studio + locker rooms + bathrooms) take longer and cost more per visit.'],
                ['Cleaning Frequency', 'Daily cleaning programs have a lower per-visit rate than weekly. Gyms that clean once per week pay more per visit than those with daily contracts.'],
                ['Surface Types', 'Rubber floors, turf, wet areas and timber sprung floors all require different products and methods — affecting time and cost.'],
                ['Access Hours', 'Pre-5am starts (common for gyms that open early) or post-10pm cleans may attract a small after-hours premium.'],
                ['Pool & Sauna', 'Pool surrounds, spa, sauna and steam rooms are typically priced separately from the main gym cleaning scope.'],
                ['Disinfectant Grade', 'TGA-approved hospital-grade disinfectants are required for fitness centres — standard household products are not appropriate and professional gym cleaners factor these into their pricing.'],
              ].map(([title, body], i) => (
                <div key={i} className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-darkblue mb-1 text-sm">{title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Cost Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Gym Cleaning by Suburb</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
                { label: 'Gym Cleaning Parramatta', href: '/gym-cleaning-parramatta' },
                { label: 'Gym Cleaning Eastern Suburbs', href: '/gym-cleaning-eastern-suburbs' },
                { label: 'Gym Cleaning Penrith', href: '/gym-cleaning-penrith' },
                { label: 'Commercial Cleaning Cost', href: '/how-much-does-commercial-cleaning-cost' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get a Fixed-Price Gym Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">TGA-approved disinfectants. Early morning access. All gym types. Free on-site assessment.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
