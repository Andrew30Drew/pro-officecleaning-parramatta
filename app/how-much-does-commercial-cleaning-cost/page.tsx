import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Cost Sydney 2026 | ProCleanCorp',
  description: 'Commercial cleaning costs $35–$65/hr for offices and $55–$90/hr for warehouses in Sydney. Full 2026 price guide. Get a free quote from ProCleanCorp.',
  keywords: 'commercial cleaning cost sydney, how much does commercial cleaning cost, office cleaning prices sydney 2026, warehouse cleaning cost sydney, medical cleaning rates sydney, commercial cleaning per hour sydney',
  openGraph: {
    title: 'Commercial Cleaning Cost Sydney 2026 | ProCleanCorp',
    description: 'Commercial cleaning in Sydney costs $35–$65/hr for offices and $55–$90/hr for warehouses. Full 2026 price breakdown. Free quote.',
    url: 'https://www.procleancorp.com.au/how-much-does-commercial-cleaning-cost',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning cost Sydney 2026 price guide' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/how-much-does-commercial-cleaning-cost' }
};

const faqs = [
  {
    question: 'How much does office cleaning cost per hour in Sydney?',
    answer: 'Office cleaning in Sydney costs between $35 and $65 per hour depending on the size of the office, frequency of cleaning, and the inclusions. Standard small office cleaning (under 200m²) typically costs $35–$45/hr. Mid-size offices (200–500m²) attract rates of $45–$55/hr. Large commercial offices and corporate tenants typically pay $55–$65/hr for more complex, documented cleaning programs. Prices are lower for regular weekly or daily contracts versus one-off cleans.'
  },
  {
    question: 'Is commercial cleaning priced per hour or per visit?',
    answer: 'Commercial cleaning is typically quoted as a fixed price per visit — not an hourly rate — for regular ongoing contracts. The hourly rate is used to calculate the fixed price based on the estimated time for your specific facility. For one-off or infrequent cleans, an hourly rate is more common. ProCleanCorp provides fixed-price proposals for regular contracts so you always know exactly what you are paying per visit.'
  },
  {
    question: 'What factors affect the cost of commercial cleaning in Sydney?',
    answer: 'The main factors that affect commercial cleaning costs in Sydney are: (1) facility size in square metres — larger spaces take longer; (2) cleaning frequency — daily clients pay less per visit than monthly clients; (3) type of facility — medical and food-grade cleaning is priced higher due to compliance requirements; (4) inclusions — whether bathrooms, kitchens, windows and specialist surfaces are included; (5) location and access — CBD locations with afterhours security requirements may carry a small premium.'
  }
];

const pricingData = [
  { type: 'Small office (under 200m²)', frequency: 'Weekly', priceRange: '$35–$45/hr', typical: '$140–$220/visit' },
  { type: 'Medium office (200–500m²)', frequency: 'Weekly', priceRange: '$45–$55/hr', typical: '$280–$450/visit' },
  { type: 'Large office (500m²+)', frequency: 'Daily/nightly', priceRange: '$55–$65/hr', typical: '$380–$600/visit' },
  { type: 'Warehouse/industrial', frequency: 'Weekly', priceRange: '$55–$75/hr', typical: '$280–$550/visit' },
  { type: 'Medical centre (GP)', frequency: 'Daily', priceRange: '$65–$90/hr', typical: '$260–$450/visit' },
  { type: 'Medical specialist suite', frequency: '3x/week', priceRange: '$80–$110/hr', typical: '$320–$550/visit' },
  { type: 'Strata common areas', frequency: 'Weekly', priceRange: '$80–$120/visit', typical: '$300–$800/month' },
  { type: 'Gym/fitness centre', frequency: 'Daily', priceRange: '$45–$85/hr', typical: '$180–$400/visit' },
];

export default function HowMuchDoesCommercialCleaningCostPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Cost Sydney"
        serviceDescription="Commercial cleaning in Sydney costs between $35 and $65 per hour for standard offices, $55–$90 per hour for warehouses, and $80–$120 per hour for medical or specialist facilities."
        serviceUrl="https://www.procleancorp.com.au/how-much-does-commercial-cleaning-cost"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Warehouse Cleaning', 'Medical Cleaning', 'Strata Cleaning', 'Gym Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Sydney Commercial Cleaning Prices — 2026</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              How Much Does Commercial Cleaning Cost in Sydney? (2026 Prices)
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              Get the complete 2026 price guide for commercial cleaning in Sydney — offices, warehouses, medical centres, gyms and strata. Transparent pricing with no guesswork.
            </p>
            <div className="text-2xl font-bold text-green-200">Call 1300 494 983 — Free Quote</div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Commercial cleaning in Sydney costs between $35 and $65 per hour for standard offices, $55–$90 per hour for warehouses, and $80–$120 per hour for medical or specialist facilities</strong> — with the final price depending on frequency, size and fit-out complexity. Regular contract clients pay less per visit than one-off bookings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-darkblue mb-6">Sydney Commercial Cleaning Price Guide (2026)</h2>
          <p className="text-gray-700 mb-8 text-lg">The table below shows typical 2026 pricing for commercial cleaning across the main service types in Sydney. All prices are indicative — your actual price depends on facility size, access requirements and cleaning inclusions.</p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-darkblue text-white">
                  <th className="text-left p-4 font-semibold">Facility Type</th>
                  <th className="text-left p-4 font-semibold">Frequency</th>
                  <th className="text-left p-4 font-semibold">Rate</th>
                  <th className="text-left p-4 font-semibold">Typical Visit Cost</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map(({ type, frequency, priceRange, typical }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-800 font-medium">{type}</td>
                    <td className="p-4 text-gray-700">{frequency}</td>
                    <td className="p-4 text-greenprimary font-semibold">{priceRange}</td>
                    <td className="p-4 text-gray-700">{typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-darkblue mb-4">What Affects Commercial Cleaning Costs?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Facility Size', body: 'Larger spaces take more time. Commercial cleaning is ultimately priced on time, so a 1,000m² office will cost more than a 200m² office even at the same hourly rate.' },
              { title: 'Cleaning Frequency', body: 'Daily or weekly clients pay less per visit than monthly clients. Regularity means the facility never gets heavily soiled, so each visit takes less time.' },
              { title: 'Type of Facility', body: 'Medical, food processing and specialist facilities require compliance documentation, specific products and trained staff — attracting a premium over standard office cleaning.' },
              { title: 'Inclusions', body: 'Whether bathrooms, kitchens, windows, carpets and specialist surfaces are included affects the total price. Always clarify inclusions when comparing quotes.' },
              { title: 'Access Requirements', body: 'After-hours access, CBD security clearance and key management add a small premium. Early morning or late-night starts may also be priced slightly higher.' },
              { title: 'Contract vs One-Off', body: 'Regular contract clients get a lower per-visit rate. One-off and infrequent cleans are priced at the standard hourly rate plus a minimum call-out.' },
            ].map(({ title, body }, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-darkblue mb-2">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-4">How to Compare Commercial Cleaning Quotes</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                'Confirm exactly what is included — floor types, bathrooms, kitchen, bins, windows.',
                'Check whether the price is per hour or per visit (fixed price is easier to budget).',
                'Ask for insurance documentation — public liability (minimum $20M) and workers compensation.',
                'Clarify whether GST is included in the quoted price.',
                'Check if there is a lock-in contract or a month-to-month arrangement.',
                'Ask for references from similar facilities in your area.',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-greenprimary rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5">{i + 1}</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Cleaning Cost Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Get Pricing For Your Facility</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Office Cleaning Sydney', href: '/office-cleaning-sydney' },
                { label: 'Warehouse Cleaning Sydney', href: '/warehouse-cleaning-sydney' },
                { label: 'Medical Cleaning Sydney', href: '/medical-office-cleaning-sydney' },
                { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
                { label: 'Office Cleaning Prices', href: '/office-cleaning-price' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get a Fixed-Price Commercial Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Free on-site assessment within 24 hours. No lock-in contracts. All facility types.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
