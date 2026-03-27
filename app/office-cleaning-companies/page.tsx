import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Companies Sydney NSW | Best Office Cleaners | Pro Clean Corp',
  description: 'Find the best office cleaning companies in Sydney NSW. Pro Clean Corp — trusted, insured, quality-certified office cleaning for businesses of all sizes. Free on-site quotes. Call 1300 494 983.',
  keywords: [
    'office cleaning companies',
    'office cleaning companies Sydney',
    'best office cleaning company Sydney',
    'commercial office cleaners NSW',
    'professional office cleaning company',
    'office cleaning contractors Sydney',
    'office cleaning services Sydney NSW',
    'Pro Clean Corp office cleaning company'
  ],
  openGraph: {
    title: 'Office Cleaning Companies Sydney NSW | Pro Clean Corp',
    description: 'Best office cleaning companies in Sydney NSW. Trusted, insured, quality-certified office cleaning for all business sizes.',
    url: '/office-cleaning-companies',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Companies Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Companies Sydney NSW | Pro Clean Corp',
    description: 'Best office cleaning companies in Sydney — trusted, insured and quality-certified.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-companies' }
};

const officeAreas = [
  { name: 'Sydney CBD', slug: 'office-cleaning-sydney' },
  { name: 'Parramatta', slug: 'office-cleaning-parramatta' },
  { name: 'North Sydney', slug: 'office-cleaning-north-sydney' },
  { name: 'Chatswood', slug: 'office-cleaning-artarmon' },
  { name: 'Macquarie Park', slug: 'office-cleaning-macquarie-park' },
  { name: 'Penrith', slug: 'office-cleaning-penrith' },
  { name: 'Bankstown', slug: 'office-cleaning-bankstown' },
  { name: 'Hornsby', slug: 'office-cleaning-hornsby' },
  { name: 'Alexandria', slug: 'office-cleaning-alexandria' },
  { name: 'Artarmon', slug: 'office-cleaning-artarmon' },
  { name: 'Lane Cove', slug: 'office-cleaning-lane-cove' },
  { name: 'Arncliffe', slug: 'office-cleaning-arncliffe' },
  { name: 'Castle Hill', slug: 'office-cleaning-castle-hill' },
  { name: 'Norwest', slug: 'office-cleaning-norwest' },
  { name: 'Concord', slug: 'office-cleaning-concord' },
];

export default function OfficeCleaningCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Companies Sydney NSW"
        serviceDescription="Find the best office cleaning companies in Sydney NSW. Pro Clean Corp provides trusted, insured, quality-certified office cleaning for businesses of all sizes."
        serviceUrl="/office-cleaning-companies"
        serviceType="Office Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Daily Office Cleaning',
          'After-Hours Office Cleaning',
          'Deep Clean Services',
          'Kitchen & Break Room Cleaning',
          'Restroom Sanitisation',
          'Carpet & Floor Care'
        ]}
        faqs={[
          {
            question: 'What should I look for in an office cleaning company in Sydney?',
            answer: 'Look for a company with verifiable client reviews, full public liability insurance, police-checked and trained staff, transparent pricing with written contracts, flexible scheduling options, and a responsive account manager. A quality office cleaning company will offer an on-site assessment before quoting.'
          },
          {
            question: 'How much does office cleaning cost in Sydney?',
            answer: 'Office cleaning in Sydney typically costs between $50–$150 per hour depending on the scope, or $150–$600 per visit for small to medium offices. Most businesses opt for regular weekly or fortnightly contracts which offer better rates. Pro Clean Corp provides free on-site quotes tailored to your exact requirements.'
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
                Top-Rated Office Cleaners
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Companies Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp is one of Sydney&apos;s most trusted office cleaning companies — delivering consistent, professional cleaning for corporate offices, small businesses, co-working spaces, and commercial workplaces across all Sydney suburbs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free On-Site Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Fully Insured</span>
                <span>✓ Background-Checked Staff</span>
                <span>✓ Satisfaction Guaranteed</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning companies Sydney NSW - Pro Clean Corp"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">308</div>
                <div className="text-xs text-gray-500">Monthly Searches: Office Cleaners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Office cleaning companies in Sydney</strong> provide regular or one-off professional cleaning for workplaces of all sizes — from small business offices to multi-floor corporate headquarters. The best office cleaning companies are fully insured, employ trained and vetted staff, and offer transparent pricing with a satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning Companies in Sydney</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                A clean office is more than appearance — it directly affects staff health, productivity, and the impression you make on clients. Choosing the right office cleaning company means finding a partner you can trust with access to your premises, your equipment, and your confidential spaces.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp has been providing professional office cleaning services to Sydney businesses since 2009. Our office cleaning teams are fully vetted, trained to commercial standards, and supervised by experienced site managers who ensure consistent quality on every visit.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">What Sets Pro Clean Corp Apart</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Unlike solo operators, Pro Clean Corp offers the scale and systems of a professional cleaning company — dedicated account managers, supervisor-verified cleans, 24/7 contact support, and the ability to scale your cleaning services as your business grows. We clean everything from single-office suites to multi-floor corporate towers.
              </p>
            </div>
            <div>
              <Image
                src="/images/whychoose.jpg"
                alt="Office cleaning company Sydney professional team"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Office Cleaning Services</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Daily / weekly / fortnightly</li>
                  <li>✓ After-hours available</li>
                  <li>✓ Kitchen & bathrooms</li>
                  <li>✓ Carpet & hard floors</li>
                  <li>✓ Windows & glass</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Complete Office Cleaning Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Desk, surface & equipment dusting',
                'Vacuuming & mopping all floors',
                'Kitchen & break room cleaning',
                'Restroom sanitisation',
                'Rubbish removal & bin liner replacement',
                'Glass doors & partition cleaning',
                'Meeting room preparation',
                'Reception area presentation',
                'Stairwell & lift lobby cleaning',
                'Carpet spot cleaning',
                'Hard floor maintenance',
                'After-hours & weekend cleans'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blueprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Office Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Office Cleaning Service Areas — Sydney NSW</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {officeAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Office Cleaning Prices — Sydney NSW</h3>
            <p className="text-center text-gray-600 mb-8">Transparent pricing based on office size and cleaning frequency.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold">Office Size</th>
                    <th className="p-4 font-semibold">Estimated Cost Per Visit</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'Small office (under 200 m²)', cost: '$150 – $280', best: 'Startups, boutique firms' },
                    { size: 'Medium office (200–500 m²)', cost: '$280 – $450', best: 'SMBs, professional services' },
                    { size: 'Large office (500–2,000 m²)', cost: '$450 – $900', best: 'Corporate, multi-team floors' },
                    { size: 'Enterprise (2,000 m²+)', cost: 'Custom quote', best: 'Multi-floor HQ buildings' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.size}</td>
                      <td className="p-4 font-bold text-greenprimary text-lg">{row.cost}</td>
                      <td className="p-4 text-gray-600">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get Your Free Office Cleaning Quote →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Companies</h3>
            <div className="space-y-6">
              {[
                { q: 'What should I look for in an office cleaning company in Sydney?', a: 'Look for a company with verifiable client reviews, full public liability insurance, police-checked and trained staff, transparent pricing with written contracts, flexible scheduling options, and a responsive account manager. A quality office cleaning company will offer an on-site assessment before quoting.' },
                { q: 'How much does office cleaning cost in Sydney?', a: 'Office cleaning in Sydney typically costs between $50–$150 per hour depending on scope, or $150–$600 per visit for small to medium offices. Most businesses opt for regular weekly or fortnightly contracts which offer better rates. Pro Clean Corp provides free on-site quotes tailored to your exact requirements.' },
                { q: 'Can office cleaning companies work after hours?', a: 'Yes. Pro Clean Corp offers after-hours, evening, and weekend office cleaning to minimise disruption to your staff and operations. This is the most popular scheduling option for Sydney offices — your team arrives to a clean office every morning without any cleaning interruption during the day.' },
                { q: 'How do office cleaning companies maintain consistent quality?', a: 'Pro Clean Corp uses supervisor-verified cleaning checklists, regular site inspections, client feedback surveys, and dedicated account managers to maintain consistent quality. If any clean does not meet our standard, we return to rectify it at no additional cost.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Sydney&apos;s Trusted Office Cleaning Company</h3>
            <p className="text-xl mb-6 text-gray-100">
              Pro Clean Corp — professional office cleaning for Sydney businesses since 2009. Fully insured, satisfaction guaranteed.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for a Free On-Site Office Cleaning Quote
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
