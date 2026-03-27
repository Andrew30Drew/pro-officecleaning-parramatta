import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaners Sydney | Professional Fitness Centre Cleaning Services NSW | Pro Clean Corp',
  description: 'Specialist gym cleaners in Sydney NSW. Deep cleaning and sanitisation for fitness centres, gyms, CrossFit boxes, and leisure centres. Sweat, bacteria & odour elimination. Call 1300 494 983.',
  keywords: [
    'gym cleaners Sydney',
    'gym cleaning Sydney NSW',
    'fitness centre cleaners Sydney',
    'gym cleaning services Sydney',
    'commercial gym cleaning',
    'gym equipment cleaning Sydney',
    'fitness club cleaning NSW',
    'gym sanitisation Sydney',
    'Pro Clean Corp gym cleaning'
  ],
  openGraph: {
    title: 'Gym Cleaners Sydney | Pro Clean Corp',
    description: 'Specialist gym cleaners in Sydney NSW. Deep cleaning, sanitisation and odour control for fitness centres, gyms, and leisure centres.',
    url: '/gym-cleaners-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym Cleaners Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Cleaners Sydney | Pro Clean Corp',
    description: 'Specialist gym cleaners in Sydney — deep cleaning, sanitisation, and odour elimination for fitness centres.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/gym-cleaners-sydney' }
};

const gymAreas = [
  { name: 'Gym Cleaning Sydney', slug: 'gym-cleaning-services-sydney' },
  { name: 'Newtown', slug: 'gym-cleaning-newtown' },
  { name: 'Penrith', slug: 'gym-cleaning-penrith' },
  { name: 'Hurstville', slug: 'gym-cleaning-hurstville' },
  { name: 'Ryde', slug: 'gym-cleaning-ryde' },
  { name: 'Sutherland', slug: 'gym-cleaning-sutherland' },
  { name: 'Liverpool', slug: 'gym-cleaning-liverpool' },
  { name: 'Eastern Suburbs', slug: 'gym-cleaning-eastern-suburbs' },
  { name: 'Gym Floor Cleaning', slug: 'gym-floor-cleaning-sydney' },
  { name: 'Gym Sanitisation', slug: 'gym-sanitisation-sydney' },
];

export default function GymCleanersSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaners Sydney"
        serviceDescription="Specialist gym cleaners in Sydney NSW providing deep cleaning, sanitisation, and odour control for fitness centres, gyms, CrossFit boxes, and leisure centres."
        serviceUrl="/gym-cleaners-sydney"
        serviceType="Gym Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Equipment Cleaning & Sanitisation',
          'Gym Floor Deep Clean',
          'Locker Room & Changeroom Cleaning',
          'Cardio Machine Wipe-Down',
          'Weight Rack Disinfection',
          'Pool Deck & Sauna Cleaning'
        ]}
        faqs={[
          {
            question: 'What do gym cleaners in Sydney clean?',
            answer: 'Sydney gym cleaners clean all areas of a fitness facility including workout floors, weight rooms, cardio areas, functional training zones, locker rooms, showers, changerooms, reception areas, group exercise studios, and all equipment surfaces. We use gym-specific antimicrobial cleaning agents that eliminate bacteria, fungi, and odour-causing organisms.'
          },
          {
            question: 'How often should a gym be cleaned?',
            answer: 'Gyms should be cleaned daily at minimum, with high-touch equipment surfaces sanitised multiple times per day. Locker rooms and showers require thorough cleaning at least twice daily. Deep cleans covering floors, equipment frames, mirrors, and ventilation should occur weekly to maintain hygiene standards and member satisfaction.'
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
                Fitness Facility Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Gym Cleaners Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides specialist gym cleaning across Sydney NSW. Deep sanitation of workout floors, equipment, changerooms, and common areas — keeping your members healthy, safe, and coming back.
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
                <span>✓ Antimicrobial Products</span>
                <span>✓ After-Hours Cleans</span>
                <span>✓ Equipment-Safe Methods</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Gym cleaners Sydney - Fitness centre cleaning services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">100+</div>
                <div className="text-xs text-gray-500">Gyms Cleaned Across Sydney</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Gym cleaners in Sydney</strong> specialise in the unique hygiene requirements of fitness facilities — from equipment sanitisation and floor degreasing to locker room cleaning and odour control. Pro Clean Corp serves commercial gyms, CrossFit boxes, leisure centres, and fitness studios across all Sydney suburbs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning Services — Sydney NSW</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Gyms are breeding grounds for bacteria, fungi, and viruses. Sweaty equipment, high-foot-traffic floors, shared locker rooms, and warm showers create ideal conditions for pathogens like Staph, ringworm, and athlete&apos;s foot. A professional gym cleaning service doesn&apos;t just make your facility look clean — it makes it genuinely hygienic.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s gym cleaners use antimicrobial cleaning agents specifically suited to fitness environments. Our equipment-safe products won&apos;t damage vinyl, rubber, steel, or electronics. We deep clean every zone of your gym — weight rooms, cardio areas, functional training spaces, group fitness studios, changerooms, showers, and reception.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Gym Cleaning Schedules That Work for You</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Gyms operate early in the morning and late at night. Our cleaning teams are available across those windows — before opening, after closing, and during lower-traffic periods — to ensure your members always arrive to a fresh, sanitised facility without disrupting their workout experience.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero4.jpg"
                alt="Gym cleaning team Sydney fitness centre"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Gym Hygiene Services</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Equipment sanitisation</li>
                  <li>✓ Rubber floor degreasing</li>
                  <li>✓ Changeroom deep clean</li>
                  <li>✓ Odour elimination</li>
                  <li>✓ Mirror & glass cleaning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Complete Gym Cleaning Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Weight & resistance equipment wipe-down',
                'Cardio machine cleaning & disinfection',
                'Rubber & hardwood floor cleaning',
                'Group fitness studio sanitisation',
                'Locker room & changeroom deep clean',
                'Shower cubicle disinfection',
                'Reception & cafe area cleaning',
                'Mirror and glass cleaning',
                'Gym bag storage area cleaning',
                'Pool deck & spa area cleaning',
                'Sauna & steam room cleaning',
                'High-touch point disinfection'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Gym Cleaning Service Areas — Sydney</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {gymAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Fitness & Commercial Cleaning</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Gym Cleaning Services', sub: 'Sydney wide coverage', href: '/gym-cleaning-services-sydney' },
                { label: 'Fitness Cleaning', sub: 'Studio specialists', href: '/fitness-cleaning-services' },
                { label: 'Commercial Cleaning', sub: 'All facilities', href: '/commercial-cleaning-sydney' },
                { label: 'Medical Cleaning', sub: 'High hygiene standards', href: '/medical-centre-cleaning' },
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
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">How Much Does Gym Cleaning Cost in Sydney?</h3>
            <p className="text-center text-gray-600 mb-8">Pricing based on gym size, number of facilities, and cleaning frequency.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold">Facility Size</th>
                    <th className="p-4 font-semibold">Estimated Cost Per Visit</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Typical Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'Boutique gym (under 500 m²)', cost: '$200 – $380', freq: 'Daily' },
                    { size: 'Mid-size gym (500–1,500 m²)', cost: '$380 – $650', freq: 'Daily' },
                    { size: 'Large fitness centre (1,500–5,000 m²)', cost: '$650 – $1,200', freq: 'Daily + deep weekly' },
                    { size: 'Multi-facility leisure centre', cost: 'Custom quote', freq: 'Multiple daily sessions' },
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
            <div className="text-center mt-6">
              <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get Your Free Gym Cleaning Quote →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaners Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'What do gym cleaners in Sydney clean?', a: 'Sydney gym cleaners clean all areas of a fitness facility including workout floors, weight rooms, cardio areas, functional training zones, locker rooms, showers, changerooms, reception, and all equipment surfaces. We use gym-specific antimicrobial agents that eliminate bacteria, fungi, and odour-causing organisms.' },
                { q: 'How often should a gym be cleaned?', a: 'Gyms should be cleaned daily at minimum, with high-touch equipment surfaces sanitised multiple times per day. Locker rooms and showers require thorough cleaning at least twice daily. Deep cleans should occur weekly to maintain hygiene standards and member satisfaction.' },
                { q: 'Do gym cleaners work while the gym is open?', a: 'Yes. Our gym cleaners are trained to work safely around members and staff, maintaining awareness of workout zones and wet areas. We can also clean during off-peak hours or after closing to minimise any disruption to your members.' },
                { q: 'What products do you use to clean gym equipment?', a: 'We use antimicrobial, equipment-safe cleaning agents that are effective against bacteria and fungi without damaging vinyl, rubber, leather, steel, chrome, or electronic components. All products are chosen to be safe for skin contact and non-corrosive on gym equipment finishes.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Gym Cleaners — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Keep your gym hygienic, member-ready, and odour-free with Pro Clean Corp&apos;s specialist fitness facility cleaning services. 7 days a week.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for Your Gym Cleaning Quote
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
