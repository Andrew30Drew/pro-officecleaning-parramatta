import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaners Sydney | Professional Commercial Office Cleaning NSW | Pro Clean Corp',
  description: 'Professional office cleaners across Sydney NSW. Pro Clean Corp delivers reliable, thorough office cleaning for businesses of all sizes. Daily, weekly, and one-off cleans. Call 1300 494 983.',
  keywords: [
    'office cleaners',
    'office cleaners Sydney',
    'professional office cleaners NSW',
    'commercial office cleaners Sydney',
    'office cleaning company Sydney',
    'office cleaners near me',
    'best office cleaners Sydney'
  ],
  openGraph: {
    title: 'Office Cleaners Sydney | Pro Clean Corp',
    description: 'Professional office cleaners for Sydney businesses. Reliable, thorough, and flexible — daily, weekly, or one-off office cleaning across all Sydney suburbs.',
    url: '/office-cleaners',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaners Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaners Sydney | Pro Clean Corp',
    description: 'Reliable professional office cleaners across all Sydney suburbs. Free quotes, flexible schedules.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaners' }
};

export default function OfficeCleanersPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaners Sydney"
        serviceDescription="Pro Clean Corp provides professional office cleaners across all Sydney suburbs. Reliable, consistent office cleaning for businesses of all sizes — from small offices to large corporate campuses."
        serviceUrl="/office-cleaners"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={[
          'Daily Office Cleaning', 'Weekly Office Cleaning', 'Deep Cleaning',
          'Carpet Cleaning', 'Window Cleaning', 'Bathroom Sanitisation',
          'Kitchen & Breakroom Cleaning', 'After-Hours Cleaning'
        ]}
        faqs={[
          {
            question: 'What do professional office cleaners do?',
            answer: 'Professional office cleaners provide comprehensive cleaning of all office areas including workstations, meeting rooms, kitchens, bathrooms, common areas, and reception. Services include vacuuming, mopping, dusting, surface sanitisation, bin emptying, and restocking consumables.'
          },
          {
            question: 'How often should I hire office cleaners?',
            answer: 'Office cleaning frequency depends on your team size and office traffic. Small offices with 1–5 staff often clean weekly or fortnightly. Offices with 10+ staff typically need daily or 3x per week cleaning to maintain a professional standard. We help you determine the right frequency for your budget.'
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
                Sydney Office Cleaning Professionals
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Office Cleaners Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp&apos;s professional office cleaners deliver spotless, consistently clean workspaces for Sydney businesses of every size. Reliable scheduling, trained staff, and a quality guarantee — because your team deserves a clean office.
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
                <span>✓ Police-Checked Staff</span>
                <span>✓ Fully Insured</span>
                <span>✓ Satisfaction Guarantee</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Professional office cleaners Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-greenprimary rounded-xl shadow-lg p-4 text-white">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-xs">Sydney Offices Cleaned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Office cleaners</strong> from Pro Clean Corp are trained, police-checked professionals who deliver a thorough, consistent clean every visit. From single-room offices to multi-floor corporate spaces, we tailor our service to match your office size, layout, and schedule — across all Sydney suburbs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Makes Our Office Cleaners Different?</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Finding reliable office cleaners in Sydney is harder than it should be. Staff turnover, inconsistent standards, and poor communication are common frustrations for Sydney businesses. Pro Clean Corp was built to solve these problems — with dedicated account managers, consistent cleaning teams, and a quality guarantee that means something.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We assign the same cleaners to your office so they know your space, understand your preferences, and notice when something is out of the ordinary. Our supervisors conduct regular quality audits to ensure the standard never slips.
              </p>
              <div className="space-y-3">
                {[
                  'Same cleaners every visit — no surprise strangers',
                  'Dedicated account manager for your business',
                  'Monthly quality audits and reporting',
                  'Police-checked and uniformed staff',
                  'Fully insured — public liability $20M+',
                  'Flexible contracts — no lock-in required',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/images/hero/hero3.jpg"
                alt="Office cleaners at work Sydney"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                width={600}
                height={256}
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blueprimary/5 p-4 rounded-xl text-center border border-blueprimary/10">
                  <div className="text-3xl font-bold text-blueprimary">15+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="bg-greenprimary/10 p-4 rounded-xl text-center border border-greenprimary/20">
                  <div className="text-3xl font-bold text-greenprimary">98%</div>
                  <div className="text-sm text-gray-600 mt-1">Client Retention Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cleaning Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">Office Cleaning Packages — Sydney</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Essential',
                  freq: 'Weekly',
                  ideal: 'Small offices 1–10 staff',
                  features: ['Vacuuming & mopping', 'Desk & surface wipe-down', 'Bathroom cleaning', 'Kitchen cleaning', 'Bin emptying'],
                  cta: 'From $80/clean'
                },
                {
                  name: 'Professional',
                  freq: '3x Per Week',
                  ideal: 'Medium offices 10–50 staff',
                  features: ['All Essential inclusions', 'Meeting room cleaning', 'Glass & mirror cleaning', 'Reception area cleaning', 'Consumables restocking'],
                  cta: 'Custom Quote',
                  highlight: true
                },
                {
                  name: 'Enterprise',
                  freq: 'Daily',
                  ideal: 'Large offices 50+ staff',
                  features: ['All Professional inclusions', 'Multiple floor cleaning', 'Deep clean rotation', 'Dedicated account manager', 'Monthly quality audits'],
                  cta: 'Custom Quote'
                },
              ].map((pkg, i) => (
                <div key={i} className={`rounded-2xl p-6 border-2 ${pkg.highlight ? 'border-greenprimary bg-greenprimary/5 shadow-lg' : 'border-gray-200 bg-white'}`}>
                  {pkg.highlight && <div className="text-greenprimary text-xs font-bold uppercase tracking-wide mb-2">Most Popular</div>}
                  <h3 className="text-xl font-bold text-darkblue">{pkg.name}</h3>
                  <div className="text-greenprimary font-semibold mt-1">{pkg.freq}</div>
                  <div className="text-sm text-gray-500 mt-1 mb-4">{pkg.ideal}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center space-x-2 text-sm text-gray-700">
                        <span className="text-greenprimary">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact-us" className={`block text-center py-2 rounded-full font-bold text-sm transition ${pkg.highlight ? 'bg-greenprimary text-white hover:bg-green-600' : 'bg-blueprimary/10 text-blueprimary hover:bg-blueprimary hover:text-white'}`}>
                    {pkg.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Office Cleaners Across Sydney</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Sydney CBD', href: '/office-cleaning-sydney' },
                { name: 'North Sydney', href: '/office-cleaning-north-sydney' },
                { name: 'Parramatta', href: '/office-cleaning-parramatta' },
                { name: 'Penrith', href: '/office-cleaning-penrith' },
                { name: 'Bankstown', href: '/office-cleaning-bankstown' },
                { name: 'Chatswood', href: '/office-cleaning-chatswood' },
                { name: 'Castle Hill', href: '/office-cleaning-castle-hill' },
                { name: 'Norwest', href: '/office-cleaning-norwest' },
              ].map((area) => (
                <Link key={area.href} href={area.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Frequently Asked Questions — Office Cleaners</h2>
            <div className="space-y-6">
              {[
                { q: 'What do professional office cleaners do?', a: 'Professional office cleaners provide comprehensive cleaning including workstations, meeting rooms, kitchens, bathrooms, common areas, and reception. Services include vacuuming, mopping, surface sanitisation, bin emptying, and restocking consumables like soap and paper towels.' },
                { q: 'How often should I hire office cleaners?', a: 'Frequency depends on your team size and office activity. Small offices (1–10 staff) often clean weekly or fortnightly. Offices with 10+ staff typically need 3x weekly or daily cleaning. We\'ll recommend the right frequency based on your office layout and budget.' },
                { q: 'Do office cleaners bring their own supplies?', a: 'Yes. Pro Clean Corp office cleaners bring all necessary cleaning equipment and products. We use professional-grade, eco-friendly cleaning products that are safe for your staff and effective for all surface types in your office.' },
                { q: 'Can I get a one-off office clean?', a: 'Absolutely. We offer one-off office cleaning for move-ins, move-outs, special events, or any situation where you need a thorough clean without committing to an ongoing contract. Call 1300 494 983 for same-day quotes on one-off office cleaning in Sydney.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-darkblue mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Office Cleaners — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Give your team the clean workspace they deserve. Request a free office cleaning quote from Pro Clean Corp today.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              1300 494 983 — Same-Day Quotes Available
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
