import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Companies Sydney | Best Commercial Office Cleaners NSW | Pro Clean Corp',
  description: 'Searching for office cleaning companies in Sydney? Pro Clean Corp is one of Sydney\'s leading commercial office cleaning companies — reliable, insured, and trusted by 500+ businesses across NSW. Call 1300 494 983.',
  keywords: [
    'office cleaning companies Sydney',
    'best office cleaning company Sydney',
    'commercial office cleaning Sydney',
    'office cleaning contractors Sydney',
    'top office cleaning companies NSW',
    'professional office cleaning Sydney',
    'office cleaning firms Sydney',
    'Sydney office cleaning providers',
    'Pro Clean Corp Sydney'
  ],
  openGraph: {
    title: 'Office Cleaning Companies Sydney | Pro Clean Corp',
    description: 'Pro Clean Corp is among Sydney\'s most trusted office cleaning companies. Professional, reliable commercial cleaning for businesses across NSW.',
    url: '/office-cleaning-companies-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Companies Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Companies Sydney | Pro Clean Corp',
    description: 'Find Sydney\'s best office cleaning company. Pro Clean Corp serves 100+ Sydney suburbs. Call 1300 494 983.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-companies-sydney' }
};

const comparisonData = [
  { feature: 'Consistent cleaning team', proCc: true, generic: false },
  { feature: 'Free site assessment', proCc: true, generic: false },
  { feature: 'No lock-in contracts', proCc: true, generic: false },
  { feature: 'Public liability insurance', proCc: true, generic: true },
  { feature: 'Quality inspection checks', proCc: true, generic: false },
  { feature: 'Custom cleaning checklist', proCc: true, generic: false },
  { feature: 'After-hours & weekend available', proCc: true, generic: true },
  { feature: 'Dedicated client contact', proCc: true, generic: false },
];

const suburbLinks = [
  { name: 'Parramatta', slug: 'office-cleaning-parramatta' },
  { name: 'North Sydney', slug: 'office-cleaning-north-sydney' },
  { name: 'Chatswood', slug: 'office-cleaning-chatswood' },
  { name: 'Leichhardt', slug: 'office-cleaning-leichhardt' },
  { name: 'Hurstville', slug: 'office-cleaning-hurstville' },
  { name: 'Bankstown', slug: 'office-cleaning-bankstown' },
  { name: 'Penrith', slug: 'office-cleaning-penrith' },
  { name: 'Macquarie Park', slug: 'office-cleaning-macquarie-park' },
  { name: 'Alexandria', slug: 'office-cleaning-alexandria' },
  { name: 'Hornsby', slug: 'office-cleaning-hornsby' },
  { name: 'Lane Cove', slug: 'office-cleaning-lane-cove' },
  { name: 'Artarmon', slug: 'office-cleaning-artarmon' },
];

export default function OfficeCleaningCompaniesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Companies Sydney"
        serviceDescription="Pro Clean Corp is one of Sydney's leading office cleaning companies, providing professional commercial cleaning services to businesses across all Sydney suburbs and the wider NSW metropolitan area."
        serviceUrl="/office-cleaning-companies-sydney"
        serviceType="Office Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Daily & Regular Office Cleaning',
          'After-Hours Commercial Cleaning',
          'Deep Cleaning Services',
          'Medical & Healthcare Office Cleaning',
          'Strata & Building Cleaning',
          'End-of-Lease Office Cleaning'
        ]}
        faqs={[
          {
            question: 'What makes Pro Clean Corp one of the best office cleaning companies in Sydney?',
            answer: 'Pro Clean Corp offers consistent staffing, free site assessments, no lock-in contracts, full insurance, custom cleaning checklists, and a dedicated client contact — features that many larger commercial cleaning companies do not provide.'
          },
          {
            question: 'How do I choose the right office cleaning company in Sydney?',
            answer: 'When choosing an office cleaning company in Sydney, look for verifiable reviews, full public liability insurance, transparent pricing, consistent staffing, and responsiveness. Pro Clean Corp provides all of these as standard.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Sydney&apos;s Commercial Cleaning Leaders
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Companies Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp is one of Sydney&apos;s most trusted office cleaning companies. Serving 500+ businesses across 100+ suburbs — professional, consistent, and genuinely accountable commercial cleaning for every workplace.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ 500+ Sydney Businesses</span>
                <span>✓ All Sydney Suburbs</span>
                <span>✓ Fully Insured</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Office cleaning companies Sydney NSW Pro Clean Corp"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">500+</div>
                <div className="text-xs text-gray-500">Sydney Businesses Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Office cleaning companies in Sydney</strong> vary enormously in quality, consistency, and accountability. Pro Clean Corp stands apart by providing dedicated cleaning teams, custom cleaning checklists, free site assessments, no lock-in contracts, and full public liability insurance — giving Sydney businesses the professional office cleaning service they actually deserve.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">What to Expect from a Professional Office Cleaning Company in Sydney</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Sydney has no shortage of office cleaning companies — from one-person operations to national chains. But finding a company that genuinely delivers consistent, quality cleaning with real accountability is harder than it should be. Many businesses have experienced the frustration of rotating cleaners, missed tasks, and poor communication.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Pro Clean Corp was built to solve exactly these problems. We assign dedicated cleaning teams to each client, create detailed custom cleaning checklists for every workplace, and conduct regular quality inspections. Our clients have a direct line to their account manager — not a call centre — and issues are resolved the same day.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">How Pro Clean Corp Compares to Other Office Cleaning Companies</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                When evaluating office cleaning companies in Sydney, the key differentiators are staffing consistency, transparency, responsiveness, and quality assurance. The comparison below shows how Pro Clean Corp measures up against the typical commercial cleaning provider.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/office.webp"
                alt="Professional office cleaning company Sydney NSW"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-greenprimary/10 p-6 rounded-xl border border-greenprimary/20">
                <h4 className="font-bold text-darkblue mb-3">Our Credentials</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Public liability insured</li>
                  <li>✓ Workers compensation cover</li>
                  <li>✓ Police checked staff available</li>
                  <li>✓ ISO-aligned procedures</li>
                  <li>✓ Quality inspection program</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Pro Clean Corp vs Generic Office Cleaning Companies</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold">Feature</th>
                    <th className="p-4 font-semibold text-center">Pro Clean Corp</th>
                    <th className="p-4 rounded-tr-lg font-semibold text-center">Typical Company</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.feature}</td>
                      <td className="p-4 text-center">
                        <span className={`font-bold text-lg ${row.proCc ? 'text-greenprimary' : 'text-red-500'}`}>
                          {row.proCc ? '✓' : '✗'}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`font-bold text-lg ${row.generic ? 'text-greenprimary' : 'text-red-500'}`}>
                          {row.generic ? '✓' : '✗'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sydney Suburb Coverage */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-3 text-center">Sydney Suburbs We Service</h3>
            <p className="text-center text-gray-600 mb-6">Click your suburb for localised office cleaning information.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {suburbLinks.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Companies Sydney</h3>
            <div className="space-y-5">
              {[
                { q: 'What should I look for in an office cleaning company in Sydney?', a: 'Look for: verifiable insurance certificates, consistent staffing (not random labour hire), custom cleaning scope, responsiveness, quality checks, and transparent pricing. Avoid companies that won\'t provide a written cleaning checklist or can\'t tell you who will be cleaning your office.' },
                { q: 'Are office cleaning companies in Sydney insured?', a: 'Professional companies like Pro Clean Corp carry full public liability insurance and workers compensation cover. Always ask for a certificate of currency before engaging any cleaning company. Never engage an uninsured cleaner for commercial premises.' },
                { q: 'What is the difference between a cleaning company and a cleaning contractor?', a: 'A cleaning company employs and manages its own staff, ensuring accountability, training, and quality control. A contractor may subcontract work to independent operators, leading to inconsistency. Pro Clean Corp directly employs and manages all cleaning staff.' },
                { q: 'How do I switch office cleaning companies in Sydney?', a: 'Switching is straightforward with Pro Clean Corp. We handle the transition, provide a free site assessment, establish your cleaning plan, and begin service — often within a week. There are no lock-in contracts, so you\'re free to adjust your arrangement as needed.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Sydney&apos;s Office Cleaning Company — Pro Clean Corp</h3>
            <p className="text-xl mb-6 text-gray-100">
              Experience the difference a truly professional office cleaning company makes. Get your free quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Free Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Call 1300 494 983
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
