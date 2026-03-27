import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Office Cleaning Sydney | Business Office Cleaners NSW | Pro Clean Corp',
  description: 'Expert commercial office cleaning services across Sydney NSW. Daily, weekly and contract office cleaning for businesses of all sizes. Flexible hours, trained staff. Call 1300 494 983.',
  keywords: [
    'commercial office cleaning Sydney',
    'commercial office cleaning services Sydney',
    'office cleaning companies Sydney',
    'commercial office cleaners Sydney',
    'business office cleaning Sydney',
    'office cleaning service Sydney CBD',
    'corporate office cleaning Sydney'
  ],
  openGraph: {
    title: 'Commercial Office Cleaning Sydney | Pro Clean Corp',
    description: 'Professional commercial office cleaning across Sydney CBD, North Sydney, Parramatta and all suburbs. Flexible contracts, quality guarantee.',
    url: '/commercial-office-cleaning-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Office Cleaning Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Office Cleaning Sydney | Pro Clean Corp',
    description: 'Commercial office cleaning for Sydney businesses — expert teams, flexible schedules, quality guaranteed.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-office-cleaning-sydney' }
};

const officeLocations = [
  { name: 'Sydney CBD', href: '/office-cleaning-sydney' },
  { name: 'North Sydney', href: '/office-cleaning-north-sydney' },
  { name: 'Parramatta', href: '/office-cleaning-parramatta' },
  { name: 'Chatswood', href: '/office-cleaning-chatswood' },
  { name: 'Penrith', href: '/office-cleaning-penrith' },
  { name: 'Bankstown', href: '/office-cleaning-bankstown' },
  { name: 'Macquarie Park', href: '/office-cleaning-macquarie-park' },
  { name: 'Norwest', href: '/office-cleaning-norwest' },
  { name: 'Hornsby', href: '/office-cleaning-hornsby' },
  { name: 'Lane Cove', href: '/office-cleaning-lane-cove' },
];

export default function CommercialOfficeCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Office Cleaning Sydney"
        serviceDescription="Pro Clean Corp delivers professional commercial office cleaning services across Sydney NSW. Expert teams for businesses of all sizes — from single-floor offices to large multi-site corporate campuses."
        serviceUrl="/commercial-office-cleaning-sydney"
        serviceType="Commercial Office Cleaning"
        price="$$"
        additionalServices={[
          'Daily Office Cleaning', 'Weekly Office Cleaning',
          'After-Hours Cleaning', 'Deep Clean Services',
          'Carpet Cleaning', 'Window Cleaning',
          'Kitchen & Amenities Cleaning', 'Bathroom Sanitisation'
        ]}
        faqs={[
          {
            question: 'What is included in commercial office cleaning in Sydney?',
            answer: 'Commercial office cleaning in Sydney typically covers vacuuming and mopping, desk and surface wipe-downs, kitchen and breakroom cleaning, bathroom sanitisation, bin emptying, glass and mirror cleaning, reception and lobby cleaning, and meeting room preparation. The exact scope is customised for each client.'
          },
          {
            question: 'How much does commercial office cleaning cost in Sydney?',
            answer: 'Commercial office cleaning costs in Sydney range from $35–$65 per hour depending on office size, required frequency, and the scope of services. Most small offices (under 200m²) pay $80–$200 per clean. We provide free, detailed quotes after a site assessment.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Sydney&apos;s Commercial Office Cleaning Experts
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Office Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers reliable, professional commercial office cleaning across all of Sydney NSW. Whether you manage a small professional office or a large corporate campus, our trained teams provide consistent, thorough cleaning — on your schedule, at your standard.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Sydney CBD & All Suburbs</span>
                <span>✓ After-Hours Available</span>
                <span>✓ No Lock-In Contracts</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Commercial office cleaning Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">98%</div>
                <div className="text-xs text-gray-500">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial office cleaning in Sydney</strong> from Pro Clean Corp means a clean, professional workspace for your team every morning — without you having to think about it. We handle everything: staffing, equipment, products, scheduling, and quality management. You get results.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Commercial Office Cleaning Built Around Your Business</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The best commercial office cleaning service is one that fits seamlessly around your operations. Pro Clean Corp builds your cleaning schedule, scope, and team around your business hours, team size, office layout, and budget — not the other way around.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Many Sydney businesses switch to Pro Clean Corp after frustrating experiences with unreliable cleaners, inconsistent results, or poor communication. We solve these problems with dedicated account management, consistent staff assignments, and a real satisfaction guarantee.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '300+', label: 'Sydney Offices Serviced' },
                  { num: '15yr', label: 'Industry Experience' },
                  { num: '7/7', label: 'Days Available' },
                  { num: '$20M', label: 'Public Liability Cover' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                    <div className="text-2xl font-bold text-blueprimary">{stat.num}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/hero/hero5.jpg"
                alt="Commercial office cleaning team Sydney"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
                width={600}
                height={450}
                loading="lazy"
              />
            </div>
          </div>

          {/* Office Types */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Types of Offices We Clean in Sydney</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Small Business Offices', desc: '1–20 staff. Flexible weekly or fortnightly programs to keep your workspace professional on any budget.' },
                { title: 'Professional Suites', desc: 'Legal, financial, and consulting offices with specific requirements around confidentiality and presentation standards.' },
                { title: 'Corporate Campuses', desc: 'Multi-floor, multi-wing, or multi-building corporate offices with complex scheduling and large team requirements.' },
                { title: 'Co-Working Spaces', desc: 'Shared workspaces requiring flexible, high-frequency cleaning to maintain standards for multiple tenants.' },
                { title: 'Government Offices', desc: 'Compliant commercial office cleaning for government agencies with strict standards and access protocols.' },
                { title: 'Technology Offices', desc: 'Equipment-aware cleaning for tech companies with sensitive hardware, standing desks, and open-plan layouts.' },
              ].map((type, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-darkblue mb-2">{type.title}</h4>
                  <p className="text-sm text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-4 text-center">Commercial Office Cleaning Costs — Sydney</h3>
            <p className="text-center text-gray-600 mb-8">Indicative pricing based on office size and cleaning frequency.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 font-semibold">Office Size</th>
                    <th className="p-4 font-semibold">Weekly Clean</th>
                    <th className="p-4 font-semibold">3x Per Week</th>
                    <th className="p-4 font-semibold">Daily Clean</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Under 100m² (1–10 staff)', '$80–$140', '$220–$380', 'POA'],
                    ['100–300m² (10–30 staff)', '$140–$280', '$380–$700', 'POA'],
                    ['300–600m² (30–60 staff)', '$280–$480', '$700–$1,200', 'POA'],
                    ['600m²+ (60+ staff)', 'Custom quote', 'Custom quote', 'Custom quote'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 text-gray-700 font-medium">{row[0]}</td>
                      <td className="p-4 text-greenprimary font-semibold">{row[1]}</td>
                      <td className="p-4 text-greenprimary font-semibold">{row[2]}</td>
                      <td className="p-4 text-gray-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">* All pricing is indicative. Actual costs depend on office layout, specific requirements, and access arrangements. Contact us for an accurate quote.</p>
          </div>

          {/* Service Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Office Cleaning Locations — Sydney</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {officeLocations.map((loc) => (
                <Link key={loc.href} href={loc.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Office Cleaning Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'What is included in commercial office cleaning in Sydney?', a: 'Commercial office cleaning includes vacuuming and mopping, desk and surface wipe-downs, kitchen and breakroom cleaning, bathroom sanitisation, bin emptying, glass and mirror cleaning, and meeting room setup. We customise the scope for every client.' },
                { q: 'How much does commercial office cleaning cost in Sydney?', a: 'Costs range from $80 per clean for small offices to custom pricing for large corporate campuses. Most factors are office size, frequency, and scope. We provide free, detailed quotes after a site assessment — no surprises.' },
                { q: 'Can you clean our office after hours?', a: 'Yes. After-hours cleaning is one of our most popular options for Sydney offices. We can schedule cleaners to arrive after 6pm, on weekends, or during any time that minimises disruption to your staff and operations.' },
                { q: 'Do you offer short-term or trial commercial office cleaning contracts?', a: 'Yes. We offer flexible arrangements including month-to-month contracts and trial periods. We\'re confident in the quality of our service — we don\'t need to lock you in with long contracts to keep your business.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Commercial Office Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              A clean office starts with the right commercial cleaning partner. Get your free quote from Pro Clean Corp today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
                Request a Free Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
