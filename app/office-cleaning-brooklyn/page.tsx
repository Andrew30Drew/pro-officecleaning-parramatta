import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Brooklyn NSW | Commercial Cleaners Hawkesbury Area Sydney | Pro Clean Corp',
  description: 'Professional office cleaning in Brooklyn NSW, Hawkesbury area. Specialist commercial cleaners for marine businesses, waterfront offices, and small businesses near the Hawkesbury River. Call 1300 494 983.',
  keywords: [
    'office cleaning Brooklyn NSW',
    'commercial cleaners Brooklyn NSW',
    'office cleaners Hawkesbury area',
    'Brooklyn NSW office cleaning',
    'commercial cleaning Hawkesbury',
    'office cleaning Mooney Mooney',
    'business cleaning Brooklyn NSW',
    'professional cleaners Brooklyn Hawkesbury',
    'Pro Clean Corp Brooklyn NSW'
  ],
  openGraph: {
    title: 'Office Cleaning Brooklyn NSW | Pro Clean Corp',
    description: 'Professional office cleaning in Brooklyn NSW, Hawkesbury area. Specialist commercial cleaners for marine, waterfront, and small businesses near the Hawkesbury River.',
    url: '/office-cleaning-brooklyn',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Brooklyn NSW Hawkesbury Area' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Brooklyn NSW | Pro Clean Corp',
    description: 'Office cleaning for Brooklyn NSW businesses near the Hawkesbury River. Call 1300 494 983.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-brooklyn' }
};

const nearbyAreas = [
  { name: 'Mooney Mooney', slug: 'office-cleaning-mooney-mooney' },
  { name: 'Cowan', slug: 'office-cleaning-cowan' },
  { name: 'Berowra', slug: 'office-cleaning-berowra' },
  { name: 'Hornsby', slug: 'office-cleaning-hornsby' },
  { name: 'Gosford', slug: 'office-cleaning-gosford' },
  { name: 'Wyong', slug: 'office-cleaning-wyong' },
  { name: 'Dural', slug: 'office-cleaning-dural' },
  { name: 'Galston', slug: 'office-cleaning-galston' },
];

export default function OfficeCleaningBrooklynPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Brooklyn NSW"
        serviceDescription="Professional office cleaning services in Brooklyn NSW and the Hawkesbury area. Specialist commercial cleaners for marine businesses, waterfront offices, tourism operators, and small businesses near the Hawkesbury River."
        serviceUrl="/office-cleaning-brooklyn"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={[
          'Small Business Office Cleaning',
          'Marine & Waterfront Office Cleaning',
          'Tourism & Hospitality Back-Office Cleaning',
          'Bathroom & Amenities Cleaning',
          'One-Off Deep Cleaning',
          'Flexible Scheduling Available'
        ]}
        faqs={[
          {
            question: 'Do you provide office cleaning in Brooklyn NSW?',
            answer: 'Yes. Pro Clean Corp services Brooklyn NSW and the broader Hawkesbury area, providing office cleaning for small businesses, marine operators, tourism companies, and professional services in the region.'
          },
          {
            question: 'How far is Brooklyn NSW from Sydney CBD?',
            answer: 'Brooklyn NSW is approximately 50 km north of Sydney CBD via the Pacific Motorway, around a 50-minute drive. It is located in the Hawkesbury local government area on the northern bank of the Hawkesbury River.'
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
                Hawkesbury Area NSW
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning Brooklyn NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers professional office and commercial cleaning services to Brooklyn NSW and the Hawkesbury region. From marine business offices on the waterfront to small professional suites — expert cleaning for this unique riverside community.
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
                <span>✓ Hawkesbury Region Service</span>
                <span>✓ Marine Business Specialists</span>
                <span>✓ Flexible Scheduling</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Brooklyn NSW Hawkesbury area"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">50 km</div>
                <div className="text-xs text-gray-500">North of Sydney CBD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Office cleaning in Brooklyn NSW</strong> is available from Pro Clean Corp, servicing businesses in the Hawkesbury local government area, approximately 50 km north of Sydney CBD. Brooklyn is a scenic waterfront town on the Hawkesbury River known for its marine and tourism industries. We provide flexible cleaning services suited to the region&apos;s smaller, community-focused business environment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Commercial Office Cleaners for Brooklyn NSW & the Hawkesbury</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Brooklyn NSW is a distinctive riverside community within the Hawkesbury LGA, known for its boat hire operators, fishing charters, oyster farming businesses, and tourism operators. The suburb also hosts real estate offices, local professional services, and small retail businesses servicing the broader Hawkesbury region and travellers passing through on the Pacific Highway.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Cleaning offices in a waterfront environment like Brooklyn comes with specific considerations: salt air, moisture, and high foot traffic from customers arriving off the water or from nearby national parks. Pro Clean Corp understands these conditions and uses cleaning methods suited to coastal and semi-rural office environments.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Brooklyn&apos;s Unique Business Community</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Whether you operate a marine charter business with a small shore-side office, a local real estate agency, a tourism information centre, or a professional services practice serving the Hawkesbury community, Pro Clean Corp can design a cleaning schedule that fits your operation and budget.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/faq3.jpg"
                alt="Office cleaning team serving Brooklyn NSW Hawkesbury region"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Brooklyn NSW Service Info</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ LGA: Hawkesbury</li>
                  <li>✓ Distance from CBD: ~50 km</li>
                  <li>✓ Via: Pacific Motorway (M1)</li>
                  <li>✓ Available 7 days</li>
                  <li>✓ Marine office specialists</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Focus */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Brooklyn Industries We Clean For</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: '⛵', title: 'Marine Businesses', desc: 'Boat hire, charter operators, and marine service companies with shore-side offices and amenities.' },
                { icon: '🎣', title: 'Tourism & Recreation', desc: 'Fishing charter offices, ecotourism operators, and visitor centres near the Hawkesbury River.' },
                { icon: '🏘️', title: 'Real Estate Offices', desc: 'Local agencies servicing property in Brooklyn, Hawkesbury Shores, and surrounding river communities.' },
                { icon: '🛒', title: 'Retail & Services', desc: 'Local shops, service businesses, and professional offices serving the Brooklyn and Hawkesbury community.' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-darkblue mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Office Cleaning Services Available in Brooklyn NSW</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Desk, surface & workstation cleaning',
                'Vacuum & mop all floor types',
                'Kitchen & staff lunch area cleaning',
                'Bathroom & toilet sanitisation',
                'Bin emptying & replacement liners',
                'Window & glass cleaning',
                'Customer reception & waiting area',
                'Salt & coastal dust control cleaning',
                'Disinfection of all contact surfaces',
                'Carpet vacuuming & spot clean',
                'One-off & end-of-lease deep clean',
                'External entry area maintenance'
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
            <h3 className="text-2xl font-bold text-darkblue mb-3 text-center">Other Areas We Service Near Brooklyn</h3>
            <p className="text-center text-gray-600 mb-6">We serve businesses throughout the Hawkesbury region and northern Sydney.</p>
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
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Brooklyn NSW</h3>
            <div className="space-y-5">
              {[
                { q: 'Do you travel to Brooklyn NSW for office cleaning?', a: 'Yes. Pro Clean Corp services Brooklyn NSW and surrounding Hawkesbury communities. Travel time and any travel surcharges will be confirmed in your free quote based on your exact address and cleaning requirements.' },
                { q: 'What types of businesses in Brooklyn do you clean?', a: 'We clean marine business offices, boat hire reception areas, real estate agencies, tourism and charter operator offices, local retail backrooms, and any small to medium commercial workspace in Brooklyn and the Hawkesbury area.' },
                { q: 'Can you handle the effects of salt air on our Brooklyn office?', a: 'Yes. Coastal and waterfront environments like Brooklyn require specific cleaning approaches to manage salt residue, moisture build-up, and humidity effects on surfaces. Our team is experienced in waterfront commercial cleaning.' },
                { q: 'Do you offer one-off cleaning for Brooklyn businesses?', a: 'Absolutely. One-off deep cleans, post-event cleaning, and end-of-lease office cleans are all available for Brooklyn NSW businesses. Contact us for a tailored quote based on your space and requirements.' }
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
            <h3 className="text-3xl font-bold mb-4">Office Cleaning for Brooklyn NSW & the Hawkesbury</h3>
            <p className="text-xl mb-6 text-gray-100">
              Let Pro Clean Corp handle the cleaning so you can focus on your Brooklyn business. Request a free quote today.
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
