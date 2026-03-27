import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaners Near Me — Sydney NSW | Pro Clean Corp',
  description: 'Looking for commercial cleaners near you in Sydney? Pro Clean Corp provides professional commercial cleaning across all Sydney suburbs. Same-day quotes, flexible scheduling. Call 1300 494 983.',
  keywords: [
    'commercial cleaners near me',
    'commercial cleaners Sydney',
    'commercial cleaning near me',
    'local commercial cleaners Sydney',
    'business cleaners near me Sydney',
    'find commercial cleaners Sydney',
    'commercial cleaning companies near me',
    'office cleaners near me Sydney NSW'
  ],
  openGraph: {
    title: 'Commercial Cleaners Near Me — Sydney NSW | Pro Clean Corp',
    description: 'Find professional commercial cleaners near you in Sydney. Pro Clean Corp services all Sydney suburbs with same-day quotes.',
    url: '/commercial-cleaners-near-me',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaners Near Me Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaners Near Me — Sydney NSW | Pro Clean Corp',
    description: 'Professional commercial cleaners servicing all Sydney suburbs. Same-day quotes, flexible scheduling.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaners-near-me' }
};

const sydneySuburbs = [
  { name: 'Alexandria', slug: 'commercial-cleaning-alexandria' },
  { name: 'Auburn', slug: 'commercial-cleaning-auburn' },
  { name: 'Bankstown', slug: 'commercial-cleaning-bankstown' },
  { name: 'Chatswood', slug: 'commercial-cleaning-chatswood' },
  { name: 'Inner West', slug: 'commercial-cleaning-inner-west' },
  { name: 'Mascot', slug: 'commercial-cleaning-mascot' },
  { name: 'Parramatta', slug: 'commercial-cleaning-parramatta' },
  { name: 'Penrith', slug: 'commercial-cleaning-penrith' },
  { name: 'Sutherland', slug: 'commercial-cleaning-sutherland' },
  { name: 'North Sydney', slug: 'office-cleaning-north-sydney' },
  { name: 'Arncliffe', slug: 'commercial-cleaning-arncliffe' },
  { name: 'Norwest', slug: 'commercial-cleaning-norwest' },
  { name: 'Chippendale', slug: 'commercial-cleaning-chippendale' },
  { name: 'Concord', slug: 'commercial-cleaning-concord' },
  { name: 'Botany', slug: 'commercial-cleaning-botany' },
];

export default function CommercialCleanersNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaners Near Me — Sydney NSW"
        serviceDescription="Professional commercial cleaners servicing all Sydney suburbs. Pro Clean Corp provides same-day quotes and flexible scheduling for businesses of all sizes."
        serviceUrl="/commercial-cleaners-near-me"
        serviceType="Commercial Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Office Cleaning',
          'Retail Cleaning',
          'Warehouse Cleaning',
          'Strata Cleaning',
          'Medical Centre Cleaning',
          'Gym Cleaning'
        ]}
        faqs={[
          {
            question: 'How do I find reliable commercial cleaners near me in Sydney?',
            answer: 'Pro Clean Corp provides commercial cleaning services across all Sydney suburbs. Call 1300 494 983 or submit an online enquiry for a free quote — we typically respond within 2 hours and can have a team to your location within 24–48 hours.'
          },
          {
            question: 'What areas of Sydney do your commercial cleaners service?',
            answer: 'We service all Sydney metropolitan areas including the CBD, Inner West, Eastern Suburbs, North Shore, Northern Beaches, Western Sydney, South Sydney, Parramatta, Penrith, Campbelltown, and all suburbs in between. If you are in Greater Sydney, we can help.'
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
                All Sydney Suburbs Covered
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaners Near Me — Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Stop searching. Pro Clean Corp&apos;s commercial cleaning teams are based right across Sydney — from the CBD and Inner West to Western Sydney, Parramatta, and beyond. Get a same-day quote for your business.
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
                <span>✓ All Sydney Suburbs</span>
                <span>✓ Same-Day Quotes</span>
                <span>✓ Flexible Scheduling</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaners near me Sydney - Pro Clean Corp"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">50+</div>
                <div className="text-xs text-gray-500">Sydney Suburbs Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial cleaners near you in Sydney</strong> — Pro Clean Corp has cleaning teams stationed across all major Sydney regions, delivering fast-response commercial cleaning for offices, retail stores, warehouses, medical centres, gyms, and strata buildings. Same-day quotes available.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Find Local Commercial Cleaners in Sydney</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Finding trustworthy commercial cleaners near you can be challenging — but Pro Clean Corp makes it simple. With cleaning teams operating out of multiple Sydney locations, we can respond quickly to any suburb across the metro area. Whether you need daily office cleaning, a one-off warehouse clean, or ongoing strata maintenance, our local teams are ready.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our Sydney commercial cleaning teams are fully insured, background-checked, and trained in Australian commercial cleaning standards. We provide consistent, reliable service backed by our quality guarantee — and if something is not right, we come back and fix it at no extra cost.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Why Choose a Local Sydney Commercial Cleaner?</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                A local commercial cleaning company understands Sydney&apos;s business landscape, building types, and scheduling demands. Pro Clean Corp has been serving Sydney businesses for over 15 years — we know the city, we know the businesses, and we deliver cleaning results that match local expectations.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/office.webp"
                alt="Local commercial cleaners Sydney office cleaning"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">What We Clean</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Offices & workplaces</li>
                  <li>✓ Retail stores & showrooms</li>
                  <li>✓ Warehouses & factories</li>
                  <li>✓ Medical centres</li>
                  <li>✓ Gyms & fitness centres</li>
                  <li>✓ Strata buildings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sydney Suburbs Grid */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Sydney Commercial Cleaning Service Areas</h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse our local commercial cleaning pages to find a team near you:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {sydneySuburbs.map((suburb) => (
                <Link key={suburb.slug} href={`/${suburb.slug}`} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {suburb.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Services Available Near You</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Daily office cleaning',
                'After-hours commercial cleaning',
                'Retail store cleaning',
                'Warehouse & factory cleaning',
                'Medical centre cleaning',
                'Gym & fitness centre cleaning',
                'Restaurant & hospitality cleaning',
                'Strata building maintenance',
                'School & childcare cleaning',
                'End of lease commercial cleaning',
                'Emergency same-day cleaning',
                'Carpet & floor care'
              ].map((service, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blueprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Commercial Cleaning Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Commercial Cleaning Sydney', sub: 'Full service overview', href: '/commercial-cleaning-sydney' },
                { label: 'Office Cleaning Companies', sub: 'Find office cleaners', href: '/office-cleaning-companies' },
                { label: 'Commercial Cleaning Service', sub: 'Tailored solutions', href: '/commercial-cleaning' },
                { label: 'Professional Cleaning', sub: 'Top-tier results', href: '/professional-commercial-cleaning-companies' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQ — Commercial Cleaners Near Me</h3>
            <div className="space-y-6">
              {[
                { q: 'How do I find reliable commercial cleaners near me in Sydney?', a: 'Pro Clean Corp provides commercial cleaning services across all Sydney suburbs. Call 1300 494 983 or submit an online enquiry for a free quote — we typically respond within 2 hours and can have a team to your location within 24–48 hours.' },
                { q: 'What areas of Sydney do your commercial cleaners service?', a: 'We service all Sydney metropolitan areas including the CBD, Inner West, Eastern Suburbs, North Shore, Northern Beaches, Western Sydney, South Sydney, Parramatta, Penrith, Campbelltown, and all suburbs in between.' },
                { q: 'How quickly can you start commercial cleaning at my premises?', a: 'For standard commercial cleaning, we can typically start within 24–48 hours of confirmation. For emergency or urgent cleans, we offer same-day service subject to availability. Contact us directly on 1300 494 983 for urgent bookings.' },
                { q: 'Are your commercial cleaners insured?', a: 'Yes. All Pro Clean Corp commercial cleaning teams carry public liability insurance and workers compensation coverage. We are fully compliant with all NSW commercial cleaning industry standards and insurance requirements.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Your Local Commercial Cleaners — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Pro Clean Corp services all Sydney suburbs with professional commercial cleaning. Same-day quotes, flexible scheduling, quality guaranteed.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 — Your Sydney Commercial Cleaners
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
