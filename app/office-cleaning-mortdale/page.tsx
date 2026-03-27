import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Mortdale | Commercial Cleaners Hurstville LGA Sydney | Pro Clean Corp',
  description: 'Professional office cleaning in Mortdale, Hurstville LGA. Reliable commercial cleaners for offices, small businesses, and professional suites in Mortdale and the St George area. Call 1300 494 983.',
  keywords: [
    'office cleaning Mortdale',
    'commercial cleaners Mortdale',
    'office cleaners Hurstville LGA',
    'Mortdale office cleaning services',
    'commercial cleaning Mortdale NSW',
    'office cleaning Georges River area',
    'business cleaning Mortdale',
    'professional cleaners Mortdale',
    'Pro Clean Corp Mortdale'
  ],
  openGraph: {
    title: 'Office Cleaning Mortdale | Pro Clean Corp',
    description: 'Professional office cleaning in Mortdale, Hurstville LGA. Reliable commercial cleaners for offices and businesses in Mortdale Sydney.',
    url: '/office-cleaning-mortdale',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Mortdale Hurstville LGA Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Mortdale | Pro Clean Corp',
    description: 'Professional office cleaning in Mortdale, Hurstville LGA Sydney. Call 1300 494 983.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-mortdale' }
};

const nearbyAreas = [
  { name: 'Hurstville', slug: 'office-cleaning-hurstville' },
  { name: 'Oatley', slug: 'office-cleaning-oatley' },
  { name: 'Penshurst', slug: 'office-cleaning-penshurst' },
  { name: 'Beverly Hills', slug: 'office-cleaning-beverly-hills' },
  { name: 'Narwee', slug: 'office-cleaning-narwee' },
  { name: 'Lugarno', slug: 'office-cleaning-lugarno' },
  { name: 'Riverwood', slug: 'office-cleaning-riverwood' },
  { name: 'Bexley', slug: 'office-cleaning-bexley' },
];

export default function OfficeCleaningMortdalePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Mortdale"
        serviceDescription="Professional office cleaning services in Mortdale, Hurstville LGA. Reliable commercial cleaners for small business offices, professional suites, and retail backrooms in Mortdale and the Georges River area."
        serviceUrl="/office-cleaning-mortdale"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={[
          'Regular Office Cleaning',
          'Small Business Cleaning',
          'Retail & Commercial Cleaning',
          'Bathroom & Kitchen Cleaning',
          'Carpet & Floor Care',
          'One-Off Deep Cleaning'
        ]}
        faqs={[
          {
            question: 'Do you clean offices in Mortdale?',
            answer: 'Yes. Pro Clean Corp provides regular and one-off office cleaning services in Mortdale, covering small business offices, professional suites, and commercial spaces throughout the Hurstville LGA.'
          },
          {
            question: 'How quickly can you start office cleaning in Mortdale?',
            answer: 'In most cases we can begin cleaning within 48–72 hours of your enquiry. Contact us today for a same-week quote and start date.'
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
                Hurstville LGA
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Mortdale
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Reliable, affordable office cleaning for Mortdale businesses. Pro Clean Corp serves the Hurstville LGA with professional commercial cleaning for small offices, retail spaces, and professional suites — seven days a week.
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
                <span>✓ No Lock-In Contracts</span>
                <span>✓ Small Business Friendly</span>
                <span>✓ Same-Week Starts</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Mortdale Hurstville LGA"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">18 km</div>
                <div className="text-xs text-gray-500">From Sydney CBD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Office cleaning in Mortdale</strong> is available from Pro Clean Corp — commercial cleaning specialists serving the Georges River Council (formerly Hurstville LGA). Mortdale is a quiet residential and commercial suburb approximately 18 km south of Sydney CBD, with a growing small business and professional services community that benefits from regular, dependable office cleaning.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Office Cleaners — Mortdale & Hurstville LGA</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Mortdale is a well-connected suburb in the Georges River Council area, positioned between Hurstville and Oatley with easy access via the T4 Eastern Suburbs & Illawarra Line. The suburb&apos;s local commercial strip and proximity to Hurstville&apos;s larger business district make it a popular location for small professional offices, allied health practices, real estate agencies, and tradespeople&apos;s offices.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Pro Clean Corp understands the needs of smaller Mortdale businesses. We offer flexible scheduling, transparent pricing, and a personal approach — no call centres, no hidden fees, no rotating random cleaners. You&apos;ll have a consistent, vetted team who knows your office and gets the job done right.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Cleaning Services for Mortdale&apos;s Business Types</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                From one-room offices above Mortdale shops to multi-room practices and small commercial suites, we tailor our cleaning service to match the specific requirements of your workspace. Whether you need a quick daily tidy or a thorough weekly deep clean, Pro Clean Corp has a plan that works.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero3.jpg"
                alt="Office cleaning team serving Mortdale and Georges River area"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-greenprimary/10 p-6 rounded-xl border border-greenprimary/20">
                <h4 className="font-bold text-darkblue mb-3">Mortdale Service Info</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ LGA: Georges River Council</li>
                  <li>✓ Distance from CBD: ~18 km</li>
                  <li>✓ Train: T4 line (Mortdale Stn)</li>
                  <li>✓ Available 7 days</li>
                  <li>✓ Flexible hourly pricing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Office Cleaning Pricing — Mortdale</h3>
            <p className="text-center text-gray-600 mb-8">Transparent pricing based on office size and cleaning frequency.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold">Office Size</th>
                    <th className="p-4 font-semibold">Estimated Cost Per Visit</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Recommended Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'Small office (1–5 staff)', cost: '$120 – $200', freq: '2–3 x per week' },
                    { size: 'Medium office (6–15 staff)', cost: '$200 – $380', freq: 'Daily or 3 x week' },
                    { size: 'Large office (16+ staff)', cost: '$380 – $650+', freq: 'Daily' },
                    { size: 'One-off deep clean', cost: 'From $250', freq: 'As required' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.size}</td>
                      <td className="p-4 font-bold text-greenprimary text-lg">{row.cost}</td>
                      <td className="p-4 text-gray-600">{row.freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">All prices are indicative. Contact us for an exact quote based on your Mortdale office.</p>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Mortdale Office Cleaning Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Workstation & desk cleaning',
                'Floor vacuuming & mopping',
                'Bathroom & toilet sanitisation',
                'Kitchen & lunch area cleaning',
                'Bin emptying & hygiene services',
                'Window & glass polishing',
                'Reception & waiting area cleaning',
                'Meeting room preparation',
                'Disinfection of high-touch points',
                'Storeroom & file room tidying',
                'End-of-lease office clean',
                'Carpet steam cleaning'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-3 text-center">Nearby Areas We Also Serve</h3>
            <p className="text-center text-gray-600 mb-6">Pro Clean Corp covers all suburbs surrounding Mortdale in the Georges River area.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {nearbyAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Mortdale</h3>
            <div className="space-y-5">
              {[
                { q: 'Do you service small offices in Mortdale?', a: 'Yes. We are happy to clean small one-room and two-room offices in Mortdale. There is no minimum contract size, and we provide pricing tailored to your exact office footprint and requirements.' },
                { q: 'Can you start cleaning our Mortdale office this week?', a: 'In most cases yes — we aim to begin new cleaning contracts within 48–72 hours of agreement. Call 1300 494 983 or complete our contact form for a fast response.' },
                { q: 'Are your cleaners the same people each time?', a: 'We aim to send the same dedicated team or cleaner to your Mortdale office each visit so they learn your workspace and preferences, delivering consistent, reliable results you can count on.' },
                { q: 'Do you use environmentally friendly cleaning products?', a: 'Yes. Pro Clean Corp uses eco-conscious commercial cleaning products wherever possible, including low-VOC detergents and concentrated formulas that reduce plastic waste — important to many Mortdale small business owners who care about sustainability.' }
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
            <h3 className="text-3xl font-bold mb-4">Office Cleaning Mortdale — Call Us Today</h3>
            <p className="text-xl mb-6 text-gray-100">
              Reliable, affordable office cleaning for Mortdale small businesses and professional suites.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Free Quote
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
