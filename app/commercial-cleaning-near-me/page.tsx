import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Near Me | Local Sydney Commercial Cleaners | Pro Clean Corp',
  description: 'Looking for commercial cleaning near you in Sydney? Pro Clean Corp services every suburb across Greater Sydney. Same-week starts available. Call 1300 494 983 today.',
  keywords: [
    'commercial cleaning near me',
    'commercial cleaners near me Sydney',
    'local commercial cleaning Sydney',
    'commercial cleaning close by',
    'office cleaning near me NSW',
    'find commercial cleaners Sydney',
    'nearby commercial cleaning services'
  ],
  openGraph: {
    title: 'Commercial Cleaning Near Me | Pro Clean Corp Sydney',
    description: 'Local commercial cleaning across every Greater Sydney suburb. Fast response, same-week availability. Call Pro Clean Corp today.',
    url: '/commercial-cleaning-near-me',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaning Near Me Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Near Me | Pro Clean Corp Sydney',
    description: 'Find commercial cleaning near you across Greater Sydney. Same-week starts, fully insured, 7 days a week.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaning-near-me' }
};

const sydneyAreas = [
  { name: 'Sydney CBD', slug: 'commercial-cleaning-sydney' },
  { name: 'Parramatta', slug: 'commercial-cleaning-parramatta' },
  { name: 'Chatswood', slug: 'commercial-cleaning-chatswood' },
  { name: 'Penrith', slug: 'commercial-cleaning-penrith' },
  { name: 'Bankstown', slug: 'commercial-cleaning-bankstown' },
  { name: 'Auburn', slug: 'commercial-cleaning-auburn' },
  { name: 'Mascot', slug: 'commercial-cleaning-mascot' },
  { name: 'Inner West', slug: 'commercial-cleaning-inner-west' },
  { name: 'Sutherland', slug: 'commercial-cleaning-sutherland' },
  { name: 'North Sydney', slug: 'office-cleaning-north-sydney' },
  { name: 'Norwest', slug: 'commercial-cleaning-norwest' },
  { name: 'Concord', slug: 'commercial-cleaning-concord' },
];

export default function CommercialCleaningNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Near Me Sydney"
        serviceDescription="Local commercial cleaning services across every Greater Sydney suburb — offices, retail, strata, industrial and healthcare premises."
        serviceUrl="/commercial-cleaning-near-me"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Cleaning',
          'Retail Cleaning',
          'Strata Cleaning',
          'Industrial Cleaning',
          'Medical Cleaning',
          'Childcare Centre Cleaning'
        ]}
        faqs={[
          {
            question: 'How quickly can you start commercial cleaning near me?',
            answer: 'Pro Clean Corp can typically arrange a site visit within 24–48 hours and commence cleaning within the same week across most Greater Sydney locations. Contact us today for availability in your suburb.'
          },
          {
            question: 'Do you service all suburbs across Greater Sydney?',
            answer: 'Yes. Pro Clean Corp operates across all of Greater Sydney including the CBD, North Shore, Inner West, Western Suburbs, South Sydney, Eastern Suburbs, Hills District, and Sutherland Shire.'
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
                Every Sydney Suburb
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaning Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Searching for commercial cleaning near you in Sydney? Pro Clean Corp covers every suburb across Greater Sydney — from the CBD to the outer suburbs. Rapid response, same-week availability, and results that speak for themselves.
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
                <span>✓ Same-Week Starts</span>
                <span>✓ 7 Days Available</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning near me Sydney NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">200+</div>
                <div className="text-xs text-gray-500">Sydney Suburbs Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            When you search for <strong>commercial cleaning near me</strong> in Sydney, Pro Clean Corp is the local provider with teams positioned across the entire Greater Sydney region. We service offices, retail premises, medical centres, gyms, warehouses, strata complexes, and childcare centres — wherever your business is located.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Local Commercial Cleaning Across Greater Sydney</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Finding a reliable commercial cleaner close to your business shouldn&apos;t be complicated. Pro Clean Corp operates multiple cleaning teams positioned strategically across Sydney&apos;s east, west, north, and south — meaning shorter response times, lower travel costs, and a team that understands your local area&apos;s business environment.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Whether your business is in the Sydney CBD, the Hills District, Parramatta, the Eastern Suburbs, the Inner West, or the Sutherland Shire — there is a Pro Clean Corp team nearby ready to start this week.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Fast Quote, Fast Start</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                We understand that finding commercial cleaning at short notice is sometimes a necessity — whether your existing cleaner has let you down or you&apos;re opening a new premises. Our streamlined quoting process means we can assess your site and provide a detailed proposal within 24 hours, with cleaning often able to commence the same week.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero3.jpg"
                alt="Local commercial cleaning team near me Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Why Choose Local?</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Faster response times</li>
                  <li>✓ Teams know your area</li>
                  <li>✓ Lower mobilisation costs</li>
                  <li>✓ Emergency cover available</li>
                  <li>✓ Local account management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Areas Grid */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Service Areas — Greater Sydney</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {sydneyAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">And many more suburbs across Greater Sydney — call us to confirm coverage in your area.</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { stat: '200+', label: 'Sydney Suburbs Covered' },
              { stat: '1,200+', label: 'Happy Clients' },
              { stat: '24hr', label: 'Quote Turnaround' },
              { stat: '7 Days', label: 'Available to Clean' },
            ].map((item, i) => (
              <div key={i} className="bg-blueprimary/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blueprimary mb-2">{item.stat}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Services Available Near You</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Daily office cleaning',
                'Retail & showroom cleaning',
                'Medical & dental cleaning',
                'Gym & fitness centre cleaning',
                'Strata common area cleaning',
                'Warehouse & factory cleaning',
                'Restaurant kitchen cleaning',
                'Childcare centre cleaning',
                'School & educational facility cleaning',
                'End-of-lease bond cleans',
                'Post-construction clean-up',
                'Window & facade cleaning'
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
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Cleaning Near Me</h3>
            <div className="space-y-6">
              {[
                { q: 'How quickly can you start commercial cleaning near me?', a: 'Pro Clean Corp can typically arrange a site visit within 24–48 hours and commence cleaning within the same week across most Greater Sydney locations. Call 1300 494 983 to check availability in your suburb.' },
                { q: 'Do you service all suburbs across Greater Sydney?', a: 'Yes. We operate across all of Greater Sydney including the CBD, North Shore, Inner West, Western Suburbs, South Sydney, Eastern Suburbs, Hills District, and Sutherland Shire. If you\'re in the Greater Sydney region, we likely have a team near you.' },
                { q: 'Can you clean after hours or on weekends near me?', a: 'Yes. Pro Clean Corp offers flexible scheduling including early morning, evening, and weekend cleans to suit your business hours. Many of our clients prefer after-hours cleaning to avoid disruption to staff and customers.' },
                { q: 'What if I\'m not happy with the cleaning?', a: 'We offer a satisfaction guarantee. If you\'re not happy with any aspect of the clean, contact your account manager and we\'ll re-attend at no extra charge. Our quality audit system catches most issues before you even need to call us.' }
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
            <h3 className="text-3xl font-bold mb-4">Commercial Cleaning Near You — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Stop searching. Pro Clean Corp is already nearby. Get a free quote and same-week start for your Sydney business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Same-Week Quote
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
