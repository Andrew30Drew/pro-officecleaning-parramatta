import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaners NSW | Commercial Cleaning Services New South Wales | Pro Clean Corp',
  description: 'Pro Clean Corp delivers premium commercial cleaning across New South Wales. Offices, warehouses, medical centres, strata, gyms & more. Fully insured. Call 1300 494 983.',
  keywords: [
    'commercial cleaning NSW',
    'commercial cleaners NSW',
    'commercial cleaning New South Wales',
    'commercial cleaning services NSW',
    'office cleaning NSW',
    'industrial cleaning NSW',
    'commercial cleaners near me NSW',
    'professional cleaning company NSW',
    'Pro Clean Corp NSW'
  ],
  openGraph: {
    title: 'Commercial Cleaners NSW | Pro Clean Corp',
    description: 'Trusted commercial cleaning services across New South Wales. Offices, warehouses, medical, strata, gym & industrial facilities. Fully insured.',
    url: '/commercial-cleaners-nsw',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaners NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaners NSW | Pro Clean Corp',
    description: 'Premium commercial cleaning across all of New South Wales. Offices, warehouses, healthcare, strata & more.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaners-nsw' }
};

const nswRegions = [
  { name: 'Sydney CBD', slug: 'commercial-cleaning' },
  { name: 'Parramatta', slug: 'commercial-cleaning-parramatta' },
  { name: 'Chatswood', slug: 'commercial-cleaning-chatswood' },
  { name: 'Bankstown', slug: 'commercial-cleaning-bankstown' },
  { name: 'Penrith', slug: 'commercial-cleaning-penrith' },
  { name: 'Auburn', slug: 'commercial-cleaning-auburn' },
  { name: 'Mascot', slug: 'commercial-cleaning-mascot' },
  { name: 'Inner West', slug: 'commercial-cleaning-inner-west' },
  { name: 'Sutherland Shire', slug: 'commercial-cleaning-sutherland' },
  { name: 'Arncliffe', slug: 'commercial-cleaning-arncliffe' },
];

export default function CommercialCleanersNSWPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaners NSW"
        serviceDescription="Pro Clean Corp provides professional commercial cleaning across all of New South Wales, covering offices, warehouses, medical facilities, strata complexes, gyms, schools, and industrial sites."
        serviceUrl="/commercial-cleaners-nsw"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office & Corporate Cleaning',
          'Warehouse & Industrial Cleaning',
          'Medical & Healthcare Facility Cleaning',
          'Strata & Common Area Cleaning',
          'Gym & Fitness Centre Cleaning',
          'End of Lease Cleaning',
          'Retail & Showroom Cleaning',
          'School & Childcare Cleaning'
        ]}
        faqs={[
          {
            question: 'Do you provide commercial cleaning services across all of NSW?',
            answer: 'Yes. Pro Clean Corp operates across Greater Sydney and surrounding NSW regions including Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, and the Inner West. We service all commercial, industrial, medical, and strata properties throughout New South Wales.'
          },
          {
            question: 'What types of commercial properties do you clean in NSW?',
            answer: 'We clean all types of commercial properties in NSW including offices, corporate headquarters, warehouses, factories, medical centres, GP clinics, hospitals, schools, childcare centres, gyms, fitness centres, strata buildings, retail stores, restaurants, and industrial facilities.'
          }
        ]}
      />

      {/* Hero — full-width image background with overlay */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/commercial.webp"
            alt="Commercial cleaning NSW"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
              New South Wales Commercial Cleaning
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Commercial Cleaners NSW
            </h1>
            <p className="text-xl mb-10 text-gray-100 max-w-2xl mx-auto">
              Pro Clean Corp is New South Wales&apos; trusted commercial cleaning partner. From Sydney CBD to Western Sydney and beyond — offices, warehouses, healthcare, strata and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 transition shadow-lg text-lg">
                Get a Free Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition text-lg">
                Call 1300 494 983
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-200">
              <span>✓ Fully Insured & Certified</span>
              <span>✓ 500+ NSW Clients</span>
              <span>✓ 7 Days a Week</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial cleaning in NSW</strong> requires a provider who understands the diversity of the state&apos;s industries — from high-rise corporate offices in the CBD to warehouses in Western Sydney, medical centres across the suburbs, and strata complexes on the Northern Beaches. Pro Clean Corp delivers consistent, compliant, and professional commercial cleaning across all of New South Wales.
          </p>
        </div>
      </section>

      {/* Industry Types — unique section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Commercial Cleaning for Every NSW Industry</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We&apos;re not a one-size-fits-all cleaning company. Each sector gets a tailored cleaning protocol built around its unique requirements.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Corporate Offices', icon: '🏢', desc: 'Daily and periodic cleaning for offices of all sizes — workstations, boardrooms, kitchens, and amenities.', href: '/corporate-cleaning' },
              { title: 'Warehouses & Industrial', icon: '🏭', desc: 'Heavy-duty floor scrubbing, racking cleaning, dock areas, and hazmat-compliant industrial cleaning.', href: '/warehouse-cleaning' },
              { title: 'Medical & Healthcare', icon: '🏥', desc: 'Hospital-grade disinfection for GP clinics, dental practices, specialist centres, and allied health facilities.', href: '/medical-cleaning-sydney' },
              { title: 'Strata & Residential', icon: '🏗️', desc: 'Lobbies, stairwells, car parks, common areas, and pool decks cleaned to strata standards.', href: '/strata-cleaning-services' },
              { title: 'Gyms & Fitness', icon: '💪', desc: 'Antimicrobial cleaning for equipment, floors, changerooms, and high-contact surfaces.', href: '/gym-cleaning' },
              { title: 'Schools & Childcare', icon: '🎒', desc: 'Child-safe cleaning products and thorough sanitisation for classrooms, play areas, and amenities.', href: '/office-cleaning' },
              { title: 'Retail & Showrooms', icon: '🛍️', desc: 'Customer-facing spaces kept pristine — display areas, change rooms, counters, and floors.', href: '/retail-cleaning-sydney' },
              { title: 'Restaurants & Hospitality', icon: '🍽️', desc: 'Commercial kitchen cleaning, dining area sanitisation, and health-code compliant deep cleans.', href: '/pub-club-cleaning-sydney' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-blueprimary/30 transition group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-darkblue mb-2 group-hover:text-blueprimary">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Choose Pro Clean Corp Across NSW?</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                With over a decade of commercial cleaning experience across New South Wales, Pro Clean Corp has built a reputation for reliability, consistency, and quality. Our teams are trained to the highest industry standards, fully insured, and equipped with commercial-grade equipment and eco-friendly cleaning agents.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We understand that commercial properties in NSW span a massive range — from boutique offices in the Inner West to large-scale industrial facilities in Wetherill Park or Prestons. Our operations team builds custom cleaning schedules that match your business hours, access requirements, and compliance obligations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Fully insured & police-checked staff',
                  'Compliant with Work Health & Safety Act NSW',
                  'Detailed cleaning checklists per site',
                  'Regular quality assurance audits',
                  'Dedicated account management',
                  'Flexible scheduling — day, night, weekend',
                  'Green-certified cleaning products available',
                  'Rapid response for urgent cleans'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-greenprimary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning services NSW"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl border border-blueprimary/20">
                <h4 className="font-bold text-darkblue mb-4">NSW Service Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Sydney Metropolitan Area</li>
                  <li>✓ Western Sydney & Parramatta</li>
                  <li>✓ Hills District & Norwest</li>
                  <li>✓ Northern Beaches & North Shore</li>
                  <li>✓ Eastern Suburbs & Randwick</li>
                  <li>✓ Sutherland Shire & St George</li>
                  <li>✓ Inner West & Canterbury</li>
                  <li>✓ South West Sydney</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NSW Regions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Service Areas — NSW</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
            {nswRegions.map((area) => (
              <Link key={area.slug} href={`/${area.slug}`} className="bg-gray-50 p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                {area.name}
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Commercial Cleaning NSW — Frequently Asked Questions</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'Do you service all areas of NSW?', a: 'Pro Clean Corp primarily services Greater Sydney and all NSW regions within approximately 80km of the CBD, including Western Sydney, Northern Beaches, South Sydney, and the Hills District. For larger or regional contracts, please contact us to discuss availability.' },
              { q: 'Are your commercial cleaners in NSW insured?', a: 'Yes. All Pro Clean Corp commercial cleaners are covered by comprehensive public liability insurance (minimum $20M), workers compensation insurance, and professional indemnity cover. Certificates of currency are available on request for any NSW contract.' },
              { q: 'Can you provide commercial cleaning contracts for multiple NSW sites?', a: 'Absolutely. We manage multi-site cleaning contracts across NSW for businesses with offices, warehouses, or facilities in multiple locations. Your account manager coordinates all sites under a single service agreement with unified reporting.' },
              { q: 'What sets Pro Clean Corp apart from other NSW commercial cleaners?', a: 'Our key differentiators are dedicated account management (one point of contact for all sites), rigorous staff vetting and training, transparent quality audits, and cleaning programs genuinely tailored to each industry type — not a generic checklist applied to every client.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">NSW&apos;s Trusted Commercial Cleaning Company</h3>
            <p className="text-xl mb-6 text-gray-100">500+ businesses across New South Wales rely on Pro Clean Corp for consistent, compliant, and professional commercial cleaning.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white/10 transition">
                1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
