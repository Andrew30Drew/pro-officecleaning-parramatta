import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Property Cleaning Services Sydney | Managed & Strata Properties | Pro Clean Corp',
  description: 'Professional commercial property cleaning services across Sydney NSW. Offices, retail, strata, industrial & managed properties. Tailored contracts. Call 1300 494 983.',
  keywords: [
    'commercial property cleaning services',
    'commercial property cleaning Sydney',
    'managed property cleaning NSW',
    'office building cleaning Sydney',
    'strata property cleaning services',
    'commercial cleaning contracts Sydney',
    'building cleaning services NSW',
    'Pro Clean Corp property cleaning'
  ],
  openGraph: {
    title: 'Commercial Property Cleaning Services | Pro Clean Corp Sydney',
    description: 'Professional commercial property cleaning services for offices, retail, strata, and managed buildings across Sydney NSW.',
    url: '/commercial-property-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Property Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Property Cleaning Services | Pro Clean Corp',
    description: 'Tailored commercial property cleaning for offices, retail, strata and industrial buildings across Sydney NSW.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-property-cleaning-services' }
};

const propertyTypes = [
  { type: 'Office Buildings', desc: 'Daily cleaning, sanitisation & waste management for multi-tenant and single-occupancy office buildings.' },
  { type: 'Retail Premises', desc: 'Floor care, window cleaning, and high-presentation standards for shopfronts and retail centres.' },
  { type: 'Strata Complexes', desc: 'Common area cleaning, lobby presentation, and lift maintenance for residential and commercial strata.' },
  { type: 'Industrial Properties', desc: 'Warehouse floor scrubbing, factory cleaning, and loading dock maintenance.' },
  { type: 'Medical Facilities', desc: 'Hospital-grade hygiene protocols for clinics, dental offices, and allied health premises.' },
  { type: 'Hospitality Venues', desc: 'Kitchen degreasing, dining area cleaning, and post-event clean-ups for restaurants and cafes.' },
];

export default function CommercialPropertyCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Property Cleaning Services Sydney"
        serviceDescription="Professional commercial property cleaning services across Sydney NSW for offices, retail, strata, industrial and managed properties."
        serviceUrl="/commercial-property-cleaning-services"
        serviceType="Commercial Property Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Building Cleaning',
          'Retail Premises Cleaning',
          'Strata Common Area Cleaning',
          'Industrial Property Cleaning',
          'Medical Facility Cleaning',
          'Post-Construction Clean'
        ]}
        faqs={[
          {
            question: 'What types of commercial properties do you clean?',
            answer: 'Pro Clean Corp cleans all types of commercial properties including office buildings, retail premises, strata complexes, industrial warehouses, medical facilities, hospitality venues, and managed investment properties across Sydney NSW.'
          },
          {
            question: 'Do you offer ongoing commercial property cleaning contracts?',
            answer: 'Yes. We specialise in ongoing commercial cleaning contracts tailored to your property type, size, and frequency requirements. Contracts include scheduled cleaning, quality audits, and dedicated account management.'
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
                Property Cleaning Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Property Cleaning Services
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers comprehensive commercial property cleaning services across Sydney NSW — from single-tenancy offices to large managed building portfolios. Consistent quality, flexible contracts, and dedicated account management.
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
                <span>✓ All Property Types</span>
                <span>✓ Flexible Contracts</span>
                <span>✓ Insured & Certified</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial property cleaning services Sydney NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">500+</div>
                <div className="text-xs text-gray-500">Properties Maintained Weekly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial property cleaning services</strong> cover every type of business premises — from offices and retail shopfronts to strata lobbies, warehouses, and medical suites. Pro Clean Corp provides property managers, landlords, and business owners across Sydney with reliable, contract-based cleaning solutions backed by quality audits and full insurance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Sydney&apos;s Trusted Commercial Property Cleaning Provider</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Managing a commercial property means juggling tenant expectations, compliance requirements, and presentation standards — all at once. A professional commercial property cleaning service removes the guesswork, delivering consistent results that protect your asset value and keep tenants satisfied.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp works with property managers, strata managers, building owners, and facilities teams across Greater Sydney. We tailor each cleaning program to the specific requirements of your property type, foot traffic, and budget — then back it up with regular quality audits and a dedicated account manager.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Why Property Managers Choose Pro Clean Corp</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                With over a decade of experience in commercial property cleaning, our teams understand what tenants notice and what building owners need. We use industrial-grade equipment, eco-conscious products, and documented cleaning protocols that meet Australian workplace hygiene standards.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero1.jpg"
                alt="Commercial property cleaning team Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Property Cleaning Includes</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Daily & periodic schedules</li>
                  <li>✓ Common area maintenance</li>
                  <li>✓ Hard floor care programs</li>
                  <li>✓ Window & facade cleaning</li>
                  <li>✓ Waste & recycling management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Property Types Grid */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Property Types We Service</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {propertyTypes.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-blueprimary mb-2">{item.type}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-8 text-center">Our Commercial Property Cleaning Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Site Assessment', desc: 'We conduct a thorough walkthrough of your property to understand its cleaning requirements, layout, and any special compliance needs.' },
                { step: '02', title: 'Custom Proposal', desc: 'We develop a tailored cleaning specification and schedule that aligns with your property type, occupancy, and budget.' },
                { step: '03', title: 'Scheduled Delivery', desc: 'Our trained teams execute the cleaning program consistently — whether daily, weekly, or on a custom timetable.' },
                { step: '04', title: 'Quality Audits', desc: 'Regular inspections and digital reporting ensure standards are maintained and issues are addressed proactively.' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-greenprimary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{item.step}</div>
                  <h4 className="font-bold text-darkblue mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Checklist */}
          <div className="bg-slate-50 p-8 rounded-2xl mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Complete Commercial Property Cleaning Checklist</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Lobby & reception area cleaning',
                'Lift & stairwell maintenance',
                'Office suite daily cleaning',
                'Bathroom & amenities sanitisation',
                'Kitchenette & breakroom cleaning',
                'Hard floor scrubbing & polishing',
                'Carpet vacuuming & spot treatment',
                'Window & glass cleaning',
                'Carpark sweeping & pressure washing',
                'External rubbish & bin management',
                'Post-construction clean-up',
                'End-of-lease bond clean'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Property Cleaning Services</h3>
            <div className="space-y-6">
              {[
                { q: 'What types of commercial properties do you clean?', a: 'Pro Clean Corp services all types of commercial properties including office buildings, retail premises, strata complexes, industrial warehouses, medical facilities, hospitality venues, and managed investment properties throughout Sydney NSW.' },
                { q: 'Do you offer ongoing commercial property cleaning contracts?', a: 'Yes. We specialise in ongoing cleaning contracts with monthly, quarterly, and annual terms. All contracts include scheduled cleaning, regular quality audits, and a dedicated account manager so you always have a point of contact.' },
                { q: 'Can you clean multiple properties in our portfolio?', a: 'Absolutely. We work with property management firms and building owners across Greater Sydney to service entire portfolios under a single contract. Bulk portfolio arrangements often attract preferred pricing.' },
                { q: 'Are you insured for commercial property cleaning?', a: 'Yes. Pro Clean Corp carries full public liability insurance and workers\' compensation for all commercial property cleaning operations. We can provide certificates of currency on request for your property files.' }
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
            <h3 className="text-3xl font-bold mb-4">Commercial Property Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Protect your property value and keep tenants satisfied with Pro Clean Corp&apos;s professional commercial property cleaning contracts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Property Cleaning Quote
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
