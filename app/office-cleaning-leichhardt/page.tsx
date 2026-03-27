import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Leichhardt | Commercial Office Cleaners Inner West Sydney | Pro Clean Corp',
  description: 'Professional office cleaning in Leichhardt, Inner West Sydney. Trusted commercial cleaners for offices, retail spaces, and businesses in Leichhardt and surrounding suburbs. Call 1300 494 983.',
  keywords: [
    'office cleaning Leichhardt',
    'commercial cleaners Leichhardt',
    'office cleaners Inner West Sydney',
    'Leichhardt office cleaning services',
    'commercial cleaning Leichhardt NSW',
    'office cleaning Inner West',
    'business cleaning Leichhardt',
    'professional office cleaners Leichhardt',
    'Pro Clean Corp Leichhardt'
  ],
  openGraph: {
    title: 'Office Cleaning Leichhardt | Pro Clean Corp',
    description: 'Professional office cleaning in Leichhardt, Inner West Sydney. Trusted commercial cleaners for offices and businesses in Leichhardt NSW.',
    url: '/office-cleaning-leichhardt',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Leichhardt Inner West Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Leichhardt | Pro Clean Corp',
    description: 'Professional office cleaning services in Leichhardt, Inner West Sydney. Call 1300 494 983.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-leichhardt' }
};

const nearbyAreas = [
  { name: 'Balmain', slug: 'office-cleaning-balmain' },
  { name: 'Annandale', slug: 'office-cleaning-annandale' },
  { name: 'Petersham', slug: 'office-cleaning-petersham' },
  { name: 'Glebe', slug: 'office-cleaning-glebe' },
  { name: 'Five Dock', slug: 'office-cleaning-five-dock' },
  { name: 'Rozelle', slug: 'office-cleaning-rozelle' },
  { name: 'Marrickville', slug: 'office-cleaning-marrickville' },
  { name: 'Inner West', slug: 'commercial-cleaning-inner-west' },
];

export default function OfficeCleaningLeichhardtPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Leichhardt"
        serviceDescription="Professional office cleaning services in Leichhardt, Inner West Sydney. Trusted commercial cleaners for offices, retail spaces, and businesses throughout the Inner West."
        serviceUrl="/office-cleaning-leichhardt"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={[
          'Daily & Weekly Office Cleaning',
          'Carpet Vacuuming & Steam Cleaning',
          'Kitchen & Breakroom Sanitisation',
          'Bathroom & Toilet Cleaning',
          'Window & Glass Cleaning',
          'After-Hours & Weekend Cleaning'
        ]}
        faqs={[
          {
            question: 'Do you offer office cleaning in Leichhardt?',
            answer: 'Yes. Pro Clean Corp provides regular office cleaning services throughout Leichhardt and the Inner West, including daily, weekly, and fortnightly schedules to suit your business requirements.'
          },
          {
            question: 'How much does office cleaning cost in Leichhardt?',
            answer: 'Office cleaning in Leichhardt is priced based on office size, frequency, and scope. Small offices typically start from $120 per visit. Contact us for a tailored quote.'
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
                Inner West Sydney
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Leichhardt
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers professional office cleaning across Leichhardt and the Inner West. From boutique creative studios on Norton Street to medical suites and co-working spaces — we keep your workplace spotless, every visit.
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
                <span>✓ Inner West Locals</span>
                <span>✓ After-Hours Available</span>
                <span>✓ No Lock-In Contracts</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Leichhardt Inner West Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">5 km</div>
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
            <strong>Office cleaning in Leichhardt</strong> is provided by Pro Clean Corp — a professional commercial cleaning company serving the Inner West Council area. We service offices, retail businesses, medical practices, and creative studios throughout Leichhardt, approximately 5 km west of Sydney CBD, with flexible daily, weekly, and fortnightly cleaning plans.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Office Cleaners in Leichhardt, Inner West</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Leichhardt is one of Sydney&apos;s most vibrant Inner West suburbs, home to a diverse mix of businesses along its famous Norton Street precinct, Victoria Road, and the surrounding streets. From Italian cafes and boutique retail to architectural firms, marketing agencies, and allied health practices, Leichhardt&apos;s business community is varied — and each workspace has unique cleaning requirements.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Pro Clean Corp&apos;s office cleaners understand the Leichhardt business environment. We work around your trading hours, use low-impact commercial cleaning products suitable for shared and open-plan spaces, and provide consistent, reliable results that your staff and clients will notice.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Why Leichhardt Businesses Choose Pro Clean Corp</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Unlike large national chains, our local Inner West team provides a personalised service with a dedicated contact, regular quality checks, and genuine accountability. We serve Inner West Council, are fully insured, and use environmentally conscious cleaning products that are safe for staff, clients, and the planet.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero1.jpg"
                alt="Office cleaning team in Leichhardt Inner West"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Leichhardt Office Cleaning</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Council area: Inner West</li>
                  <li>✓ Distance from CBD: ~5 km</li>
                  <li>✓ Service days: Mon–Sun</li>
                  <li>✓ Hours: 6am–10pm</li>
                  <li>✓ After-hours available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">What&apos;s Included in Our Leichhardt Office Cleaning</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Vacuuming & mopping all floor areas',
                'Desk, workstation & surface wiping',
                'Kitchen & breakroom deep clean',
                'Bathroom & toilet sanitisation',
                'Bin emptying & liner replacement',
                'Window & glass cleaning',
                'Reception & common area cleaning',
                'Meeting room preparation',
                'High-touch point disinfection',
                'Carpet spot treatment',
                'Skirting boards & ledge dusting',
                'Lobby & entrance polishing'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Local Business Types */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Office Cleaning for All Leichhardt Business Types</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: '🏢', title: 'Creative Studios', desc: 'Design agencies, architects & media companies on the Norton Street corridor' },
                { icon: '🏥', title: 'Medical Practices', desc: 'Allied health, GP clinics, and specialist suites in the Leichhardt area' },
                { icon: '🛍️', title: 'Retail Offices', desc: 'Back-of-house and management offices for Leichhardt\'s retail precincts' },
                { icon: '💼', title: 'Professional Services', desc: 'Accountants, lawyers, and financial planners throughout Inner West' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-darkblue mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-3 text-center">Nearby Areas We Also Serve</h3>
            <p className="text-center text-gray-600 mb-6">We service offices across all Inner West suburbs surrounding Leichhardt.</p>
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
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Leichhardt</h3>
            <div className="space-y-5">
              {[
                { q: 'Do you clean offices in Leichhardt?', a: 'Yes. Pro Clean Corp services commercial offices, retail spaces, medical practices, and creative studios throughout Leichhardt and the broader Inner West Council area, including regular daytime, evening, and weekend cleaning schedules.' },
                { q: 'How much does office cleaning cost in Leichhardt?', a: 'Pricing depends on the size of your office, cleaning frequency, and the scope of services required. Small Leichhardt offices typically start from $120–$180 per visit. We provide free, no-obligation quotes tailored to your specific workplace.' },
                { q: 'Do your cleaners work after hours in Leichhardt?', a: 'Yes. We offer after-hours and early-morning cleaning services across Leichhardt so your business is fresh and ready before staff arrive, without any disruption to your working day.' },
                { q: 'Are your Leichhardt cleaners insured?', a: 'All Pro Clean Corp staff are fully insured with public liability and workers compensation cover. We are a professionally managed cleaning company with documented quality assurance processes for every client.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Office Cleaning in Leichhardt — Get a Free Quote Today</h3>
            <p className="text-xl mb-6 text-gray-100">
              Join Leichhardt businesses that trust Pro Clean Corp for consistent, professional office cleaning every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Free Quote
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
