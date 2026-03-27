import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaners Sydney | Trusted Business Cleaning Services NSW | Pro Clean Corp',
  description: 'Sydney\'s trusted commercial cleaners. Pro Clean Corp delivers professional office, warehouse, medical, gym, and strata cleaning across all Sydney suburbs. Call 1300 494 983 for a free quote.',
  keywords: [
    'commercial cleaners Sydney',
    'commercial cleaning Sydney',
    'Sydney commercial cleaners',
    'business cleaners Sydney NSW',
    'commercial cleaning services Sydney',
    'office cleaners Sydney',
    'Pro Clean Corp Sydney'
  ],
  openGraph: {
    title: 'Commercial Cleaners Sydney | Pro Clean Corp',
    description: 'Trusted commercial cleaners across Sydney NSW. Offices, warehouses, medical facilities, gyms, strata and more. Fully insured, 7 days a week.',
    url: '/commercial-cleaners-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaners Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaners Sydney | Pro Clean Corp',
    description: 'Professional commercial cleaners serving all Sydney suburbs. Offices, warehouses, medical, gyms & strata.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaners-sydney' }
};

const services = [
  { title: 'Office Cleaning', desc: 'Daily, weekly or monthly office cleaning programs tailored to your team size and schedule.', img: '/images/services/office.webp', href: '/office-cleaning-sydney' },
  { title: 'Warehouse Cleaning', desc: 'Industrial-grade warehouse and factory floor cleaning across Greater Sydney.', img: '/images/services/warehouse.webp', href: '/warehouse-cleaners-sydney' },
  { title: 'Medical Cleaning', desc: 'Hospital-grade cleaning for medical centres, clinics, and healthcare facilities.', img: '/images/services/medical.webp', href: '/medical-centre-cleaning' },
  { title: 'Gym & Fitness Cleaning', desc: 'Antimicrobial deep cleaning for gyms, fitness studios, and leisure centres.', img: '/images/services/gym.jpg', href: '/gym-cleaners-sydney' },
  { title: 'Strata Cleaning', desc: 'Common area and strata property cleaning across Sydney\'s residential and commercial complexes.', img: '/images/services/strata.jpg', href: '/strata-cleaning-sydney' },
  { title: 'Commercial Cleaning', desc: 'Complete commercial cleaning for retail, hospitality, education, and corporate facilities.', img: '/images/services/commercial.webp', href: '/commercial-cleaning-sydney' },
];

const suburbs = [
  { name: 'Parramatta', href: '/commercial-cleaning-parramatta' },
  { name: 'Chatswood', href: '/commercial-cleaning-chatswood' },
  { name: 'Bankstown', href: '/commercial-cleaning-bankstown' },
  { name: 'Penrith', href: '/commercial-cleaning-penrith' },
  { name: 'Auburn', href: '/commercial-cleaning-auburn' },
  { name: 'Mascot', href: '/commercial-cleaning-mascot' },
  { name: 'Inner West', href: '/commercial-cleaning-inner-west' },
  { name: 'Sutherland', href: '/commercial-cleaning-sutherland' },
  { name: 'North Sydney', href: '/office-cleaning-north-sydney' },
  { name: 'Arncliffe', href: '/commercial-cleaning-arncliffe' },
];

export default function CommercialCleanersSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaners Sydney"
        serviceDescription="Pro Clean Corp provides professional commercial cleaning services across all Sydney suburbs. Offices, warehouses, medical facilities, gyms, retail, and strata properties — fully insured, 7 days a week."
        serviceUrl="/commercial-cleaners-sydney"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Cleaning', 'Warehouse Cleaning', 'Medical Facility Cleaning',
          'Gym & Fitness Cleaning', 'Strata Cleaning', 'Retail Cleaning',
          'End of Lease Cleaning', 'After-Hours Cleaning'
        ]}
        faqs={[
          {
            question: 'What types of commercial cleaning do you offer in Sydney?',
            answer: 'We offer a full range of commercial cleaning services across Sydney including office cleaning, warehouse and industrial cleaning, medical facility cleaning, gym and fitness centre cleaning, strata and body corporate cleaning, retail cleaning, and end of lease cleaning.'
          },
          {
            question: 'How much do commercial cleaners cost in Sydney?',
            answer: 'Commercial cleaning costs in Sydney typically range from $35–$65 per hour depending on the service type, frequency, and facility size. We provide free, no-obligation quotes tailored to your specific requirements.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/services/commercial.webp"
            alt="Commercial cleaners Sydney"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Sydney&apos;s Commercial Cleaning Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaners Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp is one of Sydney&apos;s most trusted commercial cleaning companies. We deliver consistent, professional cleaning for offices, warehouses, medical facilities, gyms, strata properties and more — across every Sydney suburb, 7 days a week.
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
                <span>✓ Fully Insured</span>
                <span>✓ 7 Days a Week</span>
                <span>✓ All Sydney Suburbs</span>
                <span>✓ Free Quotes</span>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white text-center">
                  <div className="text-4xl font-bold text-greenprimary">500+</div>
                  <div className="text-sm mt-1">Commercial Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white text-center">
                  <div className="text-4xl font-bold text-greenprimary">15+</div>
                  <div className="text-sm mt-1">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white text-center">
                  <div className="text-4xl font-bold text-greenprimary">7</div>
                  <div className="text-sm mt-1">Days a Week</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white text-center">
                  <div className="text-4xl font-bold text-greenprimary">100%</div>
                  <div className="text-sm mt-1">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial cleaners in Sydney</strong> from Pro Clean Corp provide professional, fully insured cleaning services for every type of business premises — from small offices to large industrial warehouses, medical centres, gyms, and strata complexes. We operate across all Sydney suburbs with flexible scheduling to suit your business hours.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Our Commercial Cleaning Services in Sydney</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We cover every type of commercial premises with specialist cleaning teams trained for each environment.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link key={i} href={service.href} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-blueprimary transition">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                  <span className="mt-4 inline-block text-greenprimary font-semibold text-sm">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Sydney Businesses Choose Pro Clean Corp</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                As one of Sydney&apos;s leading commercial cleaning companies, Pro Clean Corp has built its reputation on reliability, consistency, and attention to detail. We understand that every business has different cleaning requirements — that&apos;s why we create custom cleaning programs tailored specifically to your premises, schedule, and budget.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our teams are police-checked, fully insured, and trained in the specific cleaning requirements of each industry we serve. Whether you need daily office cleaning, weekly warehouse maintenance, or specialist medical facility sanitation, Pro Clean Corp delivers the standard your business deserves.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Police-checked staff',
                  'Fully insured ($20M+)',
                  'Eco-friendly products',
                  'Flexible scheduling',
                  'Quality guarantee',
                  'Dedicated account manager',
                  'After-hours available',
                  'Real-time reporting'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/whychoose.jpg"
                alt="Why choose Pro Clean Corp commercial cleaners Sydney"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Industries We Clean Across Sydney</h2>
          <p className="text-center text-gray-600 mb-10">Specialist commercial cleaners with experience across every major industry sector in Sydney.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏢', label: 'Corporate Offices' },
              { icon: '🏥', label: 'Medical & Healthcare' },
              { icon: '🏋️', label: 'Gyms & Fitness' },
              { icon: '🏭', label: 'Warehouses & Industrial' },
              { icon: '🏪', label: 'Retail & Showrooms' },
              { icon: '🏫', label: 'Schools & Education' },
              { icon: '🏨', label: 'Hotels & Hospitality' },
              { icon: '🏛️', label: 'Strata & Body Corporate' },
            ].map((item, i) => (
              <div key={i} className="bg-blueprimary/5 rounded-xl p-5 text-center hover:bg-blueprimary/10 transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-darkblue text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Commercial Cleaners Across All Sydney Suburbs</h2>
          <p className="text-center text-gray-600 mb-10">We service the entire Greater Sydney region with local teams in every area.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {suburbs.map((suburb) => (
              <Link key={suburb.href} href={suburb.href} className="bg-white p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                {suburb.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Frequently Asked Questions — Commercial Cleaners Sydney</h2>
          <div className="space-y-6">
            {[
              { q: 'What types of commercial cleaning do you offer in Sydney?', a: 'We offer office cleaning, warehouse and industrial cleaning, medical facility cleaning, gym and fitness centre cleaning, strata cleaning, retail cleaning, end of lease cleaning, and specialised deep cleaning across all Sydney suburbs.' },
              { q: 'How much do commercial cleaners cost in Sydney?', a: 'Commercial cleaning in Sydney typically costs $35–$65 per hour depending on the service type, size of premises, and cleaning frequency. We provide free, detailed quotes with no obligation — call 1300 494 983 or submit an enquiry online.' },
              { q: 'Are your commercial cleaners insured?', a: 'Yes. All Pro Clean Corp cleaning teams carry comprehensive public liability insurance ($20M+) and are police-checked. We are fully compliant with NSW Work Health and Safety regulations.' },
              { q: 'Do you clean after business hours?', a: 'Yes. We offer after-hours cleaning, overnight cleaning, and early morning cleaning to suit your business operations. We can also provide weekend and public holiday cleaning services across Sydney.' },
              { q: 'What areas of Sydney do you cover?', a: 'We service all of Greater Sydney including the CBD, North Sydney, Eastern Suburbs, Inner West, Western Sydney, South Sydney, Hills District, Sutherland Shire, Parramatta, Penrith, and the Northern Beaches.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-darkblue mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Sydney&apos;s Trusted Commercial Cleaners</h2>
          <p className="text-xl mb-8 text-gray-200">Get a free, no-obligation quote from Pro Clean Corp today. We&apos;ll create a custom cleaning program for your business.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact-us" className="bg-greenprimary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition shadow-lg">
              Request a Free Quote
            </a>
            <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              1300 494 983
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
