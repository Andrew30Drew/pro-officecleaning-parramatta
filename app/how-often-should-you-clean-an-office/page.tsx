import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'How Often Should an Office Be Cleaned? | ProCleanCorp',
  description: 'How often should you clean an office? Daily for 20+ staff. Weekly for under 10. Here\'s the exact cleaning frequency guide by office size and industry type.',
  keywords: 'how often should office be cleaned, office cleaning frequency, how often professional office cleaning sydney, office cleaning schedule guide, office cleaning how many times per week',
  openGraph: {
    title: 'How Often Should an Office Be Cleaned? | ProCleanCorp',
    description: 'Office cleaning frequency guide 2026 — by staff count and industry. How often your office really needs professional cleaning.',
    url: 'https://www.procleancorp.com.au/how-often-should-you-clean-an-office',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'How often should an office be cleaned frequency guide' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/how-often-should-you-clean-an-office' }
};

const faqs = [
  {
    question: 'How often does a small office (under 5 staff) need to be professionally cleaned?',
    answer: 'A small office with under 5 staff typically requires professional cleaning once a week, supplemented by daily self-maintenance (emptying bins, wiping kitchen benches). Weekly professional cleaning covers all floor areas, bathroom sanitisation, surface wiping and bin change. Some very small offices with low traffic manage with fortnightly professional cleaning plus daily self-maintenance — but weekly is recommended to maintain hygiene standards and office presentation for client visits.'
  },
  {
    question: 'Does cleaning frequency depend on the type of business?',
    answer: 'Yes. The type of business significantly affects how often cleaning should occur. Medical practices require daily cleaning regardless of staff count due to infection control requirements. Food businesses need daily cleaning of all food contact areas. Client-facing offices (law firms, real estate, accounting) benefit from more frequent cleaning to maintain a professional presentation. Warehouses and industrial offices can sometimes manage with weekly or fortnightly cleaning for the office component.'
  },
  {
    question: 'What happens if I don\'t clean my office frequently enough?',
    answer: 'Under-cleaning an office has several consequences: accumulated bacteria and allergens affect staff health (increased sick days), office odours develop (particularly in kitchens and bathrooms), surfaces accumulate grime that becomes harder and more expensive to remove, and the overall presentation deteriorates — which affects how clients and staff perceive the business. Regular cleaning is also far cheaper than periodic deep cleans needed to restore a neglected office.'
  }
];

const frequencyTable = [
  { staff: '1–4 staff', type: 'Any', recommended: 'Weekly', minimum: 'Fortnightly', notes: 'Daily self-maintenance of kitchen and bins' },
  { staff: '5–10 staff', type: 'Office/admin', recommended: '2–3x per week', minimum: 'Weekly', notes: 'Kitchen and bathrooms are the key drivers' },
  { staff: '11–20 staff', type: 'Office', recommended: '3–5x per week', minimum: '2x per week', notes: 'Bathrooms typically need daily attention at this size' },
  { staff: '20+ staff', type: 'Office', recommended: 'Daily', minimum: '5x per week', notes: 'Bathrooms and kitchen require daily sanitisation' },
  { staff: 'Any', type: 'Medical/dental', recommended: 'Daily (minimum)', minimum: 'Daily', notes: 'Infection control regulations require daily cleaning' },
  { staff: 'Any', type: 'Food business', recommended: 'Daily', minimum: 'Daily', notes: 'Food contact surfaces must be cleaned daily' },
  { staff: 'Any', type: 'Gym/fitness', recommended: 'Daily (pre-opening)', minimum: 'Daily', notes: 'Equipment disinfection and wet areas need daily attention' },
  { staff: 'Any', type: 'Warehouse/industrial', recommended: 'Weekly', minimum: 'Fortnightly', notes: 'Floor cleaning drives frequency; office area may differ' },
];

export default function HowOftenShouldYouCleanAnOfficePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Frequency Guide"
        serviceDescription="An office with 20 or more staff should be professionally cleaned daily; offices with 5–19 staff typically clean 3–5 times per week; smaller offices with under 5 staff can manage with weekly professional cleaning."
        serviceUrl="https://www.procleancorp.com.au/how-often-should-you-clean-an-office"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning Sydney', 'Daily Office Cleaning', 'Weekly Office Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Office Cleaning Frequency — 2026 Expert Guide</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              How Often Should You Professionally Clean Your Office? (Expert Guide)
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              The right cleaning frequency for your office — by staff count and industry type. Stop overpaying for unnecessary cleans or under-cleaning and risking staff health.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>An office with 20 or more staff should be professionally cleaned daily; offices with 5–19 staff typically require cleaning 3–5 times per week; smaller offices with under 5 staff can manage with weekly professional cleaning</strong> supplemented by daily self-maintenance. Industry type overrides headcount for regulated sectors like medical, food and fitness.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Frequency by Size & Industry</h2>
          <p className="text-gray-700 mb-8 text-lg">Use this table to find the recommended cleaning frequency for your office. The "minimum" column is the lowest frequency that maintains acceptable hygiene — the "recommended" column is what most professional cleaning consultants advise.</p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-darkblue text-white">
                  <th className="text-left p-4 font-semibold">Staff / Size</th>
                  <th className="text-left p-4 font-semibold">Business Type</th>
                  <th className="text-left p-4 font-semibold text-green-300">Recommended</th>
                  <th className="text-left p-4 font-semibold">Minimum</th>
                  <th className="text-left p-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {frequencyTable.map(({ staff, type, recommended, minimum, notes }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-800 font-medium">{staff}</td>
                    <td className="p-4 text-gray-700">{type}</td>
                    <td className="p-4 text-greenprimary font-semibold">{recommended}</td>
                    <td className="p-4 text-gray-700">{minimum}</td>
                    <td className="p-4 text-gray-600 text-xs">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'The Cost of Under-Cleaning', items: ['Staff sick days increase (bacteria, allergens)', 'Persistent odours in kitchen and bathroom', 'Grime buildup requires expensive deep cleans', 'Poor presentation affects client perception', 'Pest risk increases in neglected kitchen areas'] },
              { title: 'Signs Your Office Needs More Frequent Cleaning', items: ['Bathrooms smell between cleans', 'Kitchen benches need wiping before use', 'Desks visibly dusty after a few days', 'Staff complain about hygiene', 'Visible grime on floors or high-touch surfaces'] },
            ].map(({ title, items }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-darkblue mb-3 text-lg">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-greenprimary font-bold mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Frequency</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Office Cleaning Sydney', href: '/office-cleaning-sydney' },
                { label: 'What Is Included in Office Cleaning', href: '/what-is-included-in-office-cleaning' },
                { label: 'Commercial Cleaning Cost Sydney', href: '/how-much-does-commercial-cleaning-cost' },
                { label: 'Office Cleaning Services', href: '/office-cleaning-services' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Not Sure How Often Your Office Should Be Cleaned?</h3>
            <p className="text-xl mb-4 text-gray-100">ProCleanCorp will assess your facility and recommend the right frequency — free on-site visit, no obligation.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
