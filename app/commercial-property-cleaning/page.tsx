import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Property Cleaning Sydney NSW | Building & Facility Cleaning | Pro Clean Corp',
  description: 'Professional commercial property cleaning services across Sydney NSW. Comprehensive cleaning for office buildings, retail properties, industrial facilities, and commercial real estate assets. Call 1300 494 983.',
  keywords: [
    'commercial property cleaning',
    'commercial property cleaning Sydney',
    'commercial building cleaning Sydney',
    'commercial real estate cleaning NSW',
    'property management cleaning Sydney',
    'commercial facility cleaning NSW',
    'building cleaning services Sydney',
    'commercial premises cleaning Sydney',
    'Pro Clean Corp property cleaning'
  ],
  openGraph: {
    title: 'Commercial Property Cleaning Sydney | Pro Clean Corp',
    description: 'Professional commercial property cleaning for office buildings, retail properties, and industrial facilities across Sydney NSW.',
    url: '/commercial-property-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Property Cleaning Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Property Cleaning Sydney | Pro Clean Corp',
    description: 'Professional commercial property cleaning for office buildings and commercial real estate across Sydney.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-property-cleaning' }
};

const propertySuburbs = [
  { name: 'Alexandria', slug: 'commercial-cleaning-alexandria' },
  { name: 'Auburn', slug: 'commercial-cleaning-auburn' },
  { name: 'Bankstown', slug: 'commercial-cleaning-bankstown' },
  { name: 'Chatswood', slug: 'commercial-cleaning-chatswood' },
  { name: 'Inner West', slug: 'commercial-cleaning-inner-west' },
  { name: 'Mascot', slug: 'commercial-cleaning-mascot' },
  { name: 'Parramatta', slug: 'commercial-cleaning-parramatta' },
  { name: 'Penrith', slug: 'commercial-cleaning-penrith' },
  { name: 'North Sydney', slug: 'office-cleaning-north-sydney' },
  { name: 'Sutherland', slug: 'commercial-cleaning-sutherland' },
  { name: 'Arncliffe', slug: 'commercial-cleaning-arncliffe' },
  { name: 'Norwest', slug: 'commercial-cleaning-norwest' },
  { name: 'Botany', slug: 'commercial-cleaning-botany' },
  { name: 'Concord', slug: 'commercial-cleaning-concord' },
  { name: 'Chippendale', slug: 'commercial-cleaning-chippendale' },
];

export default function CommercialPropertyCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Property Cleaning Sydney"
        serviceDescription="Professional commercial property cleaning services across Sydney NSW for office buildings, retail properties, industrial facilities, and commercial real estate assets."
        serviceUrl="/commercial-property-cleaning"
        serviceType="Commercial Property Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Office Building Cleaning',
          'Retail Property Cleaning',
          'Strata Common Area Cleaning',
          'Industrial Property Cleaning',
          'End of Tenancy Commercial Clean',
          'Vacancy Presentation Clean'
        ]}
        faqs={[
          {
            question: 'What is commercial property cleaning?',
            answer: 'Commercial property cleaning is the ongoing or one-off cleaning and maintenance of commercial real estate — including office buildings, retail centres, industrial properties, and mixed-use developments. It covers all common areas, tenancy spaces, car parks, lobbies, stairwells, and external areas to maintain property presentation and tenant satisfaction.'
          },
          {
            question: 'Do you work with property managers and real estate agents?',
            answer: 'Yes. Pro Clean Corp regularly partners with commercial property managers, real estate agents, and strata managers across Sydney to provide scheduled maintenance cleaning, end-of-tenancy cleans, and vacancy presentation cleans. We understand the time-sensitive nature of property transitions and can mobilise quickly to meet handover deadlines.'
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
                Property Management Partners
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Property Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers comprehensive commercial property cleaning across Sydney NSW — protecting your investment, maintaining tenant satisfaction, and presenting your commercial real estate at its best every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Property Cleaning Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ All Property Types</span>
                <span>✓ Property Manager Friendly</span>
                <span>✓ Flexible Scheduling</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero/hero2.jpg"
                alt="Commercial property cleaning Sydney - Office building cleaning"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">159</div>
                <div className="text-xs text-gray-500">Monthly Search Impressions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial property cleaning</strong> covers all cleaning requirements for commercial real estate — from daily office building maintenance and retail centre common areas to industrial facility cleaning and end-of-tenancy cleans. Pro Clean Corp partners with property managers, strata managers, and real estate agents across Sydney NSW.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Commercial Property Cleaning Services — Sydney NSW</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Commercial properties require regular, professional cleaning to maintain their value, attract quality tenants, and meet the standards expected by businesses operating within them. From daily lobby cleaning and common area maintenance to deep cleans during tenancy transitions, Pro Clean Corp manages the full spectrum of commercial property cleaning needs.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We work directly with commercial property managers, strata managers, building owners, and real estate agents across Sydney — providing consistent, accountable cleaning services with digital reporting, supervisor sign-offs, and direct account management contact.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Cleaning for Every Commercial Property Type</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                No two commercial properties are identical. Our teams tailor cleaning programs to the specific requirements of each property — considering tenancy mix, foot traffic, operating hours, and presentation standards. We manage everything from the front entrance to the car park, providing single-source accountability for all your property cleaning needs.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial property cleaning Sydney building maintenance"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Property Types We Clean</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Office buildings</li>
                  <li>✓ Retail centres</li>
                  <li>✓ Industrial properties</li>
                  <li>✓ Mixed-use developments</li>
                  <li>✓ Strata properties</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Property Cleaning Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Building lobby & entry cleaning',
                'Common area maintenance',
                'Car park cleaning',
                'Stairwell & lift lobby cleaning',
                'Office tenancy cleaning',
                'Retail store cleaning',
                'End of tenancy commercial clean',
                'Vacancy presentation clean',
                'External window cleaning',
                'Industrial property cleaning',
                'Loading dock maintenance',
                'Waste management areas'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blueprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Property Cleaning — Sydney Locations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {propertySuburbs.map((suburb) => (
                <Link key={suburb.slug} href={`/${suburb.slug}`} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {suburb.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Property Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Strata Cleaning', sub: 'Common area maintenance', href: '/strata-cleaning-services-sydney' },
                { label: 'Office Cleaning Companies', sub: 'Workplace cleaning', href: '/office-cleaning-companies' },
                { label: 'Commercial Cleaning', sub: 'Full service cleaning', href: '/commercial-cleaning-sydney' },
                { label: 'Industrial Cleaning', sub: 'Factory & warehouse', href: '/warehouse-cleaners-sydney' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Commercial Property Cleaning Cost — Sydney NSW</h3>
            <p className="text-center text-gray-600 mb-8">Pricing based on property type, NLA, and cleaning scope.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold">Property Type</th>
                    <th className="p-4 font-semibold">Estimated Weekly Cost</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Covers</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Small commercial building', cost: '$350 – $600/wk', covers: 'Lobby, offices, amenities' },
                    { type: 'Mid-size office building', cost: '$600 – $1,200/wk', covers: 'All common areas + tenancies' },
                    { type: 'Large commercial property', cost: '$1,200 – $3,000/wk', covers: 'Full building management' },
                    { type: 'Industrial/retail complex', cost: 'Custom quote', covers: 'Site-specific assessment' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.type}</td>
                      <td className="p-4 font-bold text-greenprimary text-lg">{row.cost}</td>
                      <td className="p-4 text-gray-600">{row.covers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get Your Free Property Cleaning Assessment →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQ — Commercial Property Cleaning</h3>
            <div className="space-y-6">
              {[
                { q: 'What is commercial property cleaning?', a: 'Commercial property cleaning is the ongoing or one-off cleaning and maintenance of commercial real estate — including office buildings, retail centres, industrial properties, and mixed-use developments. It covers all common areas, tenancy spaces, car parks, lobbies, stairwells, and external areas.' },
                { q: 'Do you work with property managers and real estate agents?', a: 'Yes. Pro Clean Corp regularly partners with commercial property managers, real estate agents, and strata managers across Sydney to provide scheduled maintenance cleaning, end-of-tenancy cleans, and vacancy presentation cleans. We can mobilise quickly to meet handover deadlines.' },
                { q: 'Can you manage cleaning for an entire commercial building?', a: 'Yes. Pro Clean Corp provides full-building cleaning management for commercial properties of all sizes — from single-tenancy buildings to multi-floor commercial towers with complex tenancy mixes. We provide single-source accountability with digital reporting and direct account management.' },
                { q: 'Do you clean car parks and external areas?', a: 'Yes. Our commercial property cleaning services include car park cleaning, external pathway pressure washing, garden area maintenance cleans, loading dock cleaning, and bin enclosure maintenance — providing comprehensive property presentation management.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Commercial Property Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Protect your commercial property investment with Pro Clean Corp&apos;s professional building and facility cleaning services. Partnering with property managers across Sydney.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for a Free Property Cleaning Assessment
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
