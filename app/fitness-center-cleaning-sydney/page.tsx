import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Fitness Center Cleaning Sydney | Studio & Gym Hygiene Services NSW | Pro Clean Corp',
  description: 'Professional fitness center cleaning services across Sydney NSW. Boutique studios, spin rooms, pilates reformer cleaning, yoga space sanitisation, and CrossFit boxes. Call 1300 494 983.',
  keywords: [
    'fitness center cleaning sydney',
    'fitness centre cleaning sydney',
    'boutique gym cleaning sydney',
    'pilates studio cleaning sydney',
    'yoga studio cleaning sydney',
    'spin room cleaning sydney',
    'studio fitness cleaning NSW',
    'CrossFit box cleaning sydney',
    'Pro Clean Corp fitness center'
  ],
  openGraph: {
    title: 'Fitness Center Cleaning Sydney | Pro Clean Corp',
    description: 'Professional fitness center cleaning across Sydney — boutique studios, pilates, yoga, spin, and CrossFit. Tailored cleaning for every fitness format.',
    url: '/fitness-center-cleaning-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Fitness Center Cleaning Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness Center Cleaning Sydney | Pro Clean Corp',
    description: 'Professional fitness center cleaning across Sydney — boutique studios, pilates, yoga, spin, and CrossFit.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/fitness-center-cleaning-sydney' }
};

const pricingData = [
  { type: 'Boutique Studio (under 200 m²)', visits: 'Daily', perVisit: '$120 – $220', deepClean: '$250 – $400' },
  { type: 'Yoga / Pilates Studio (200–400 m²)', visits: 'Daily', perVisit: '$180 – $320', deepClean: '$380 – $600' },
  { type: 'Spin Studio (400–600 m²)', visits: 'Daily + post-class', perVisit: '$250 – $450', deepClean: '$500 – $800' },
  { type: 'CrossFit / HIIT Box (400–800 m²)', visits: 'Daily', perVisit: '$280 – $500', deepClean: '$550 – $900' },
  { type: 'Multi-Studio Complex (800 m²+)', visits: 'Custom', perVisit: 'Custom quote', deepClean: 'Custom quote' },
];

const suburbLinks = [
  { name: 'Gym Cleaning Sydney', href: '/gym-cleaners-sydney' },
  { name: 'Gym Floor Cleaning', href: '/gym-floor-cleaning-service-sydney' },
  { name: 'Gym Sanitisation', href: '/gym-sanitisation-service-sydney' },
  { name: 'Leisure Centre Cleaning', href: '/leisure-centre-cleaning' },
  { name: 'Commercial Gym Cleaning', href: '/commercial-gym-cleaning' },
  { name: 'Gym Cleaning Newtown', href: '/gym-cleaning-newtown' },
  { name: 'Gym Cleaning Penrith', href: '/gym-cleaning-penrith' },
  { name: 'Gym Cleaning Hurstville', href: '/gym-cleaning-hurstville' },
  { name: 'Gym Cleaning Liverpool', href: '/gym-cleaning-liverpool' },
  { name: 'Gym Cleaning Ryde', href: '/gym-cleaning-ryde' },
];

export default function FitnessCenterCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Fitness Center Cleaning Sydney"
        serviceDescription="Professional fitness center cleaning services across Sydney NSW — boutique studios, pilates reformer rooms, yoga spaces, spin studios, and CrossFit boxes. Tailored cleaning programmes for every fitness format."
        serviceUrl="/fitness-center-cleaning-sydney"
        serviceType="Fitness Center Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Pilates Reformer Cleaning',
          'Yoga Studio Sanitisation',
          'Spin Room Deep Clean',
          'CrossFit Box Cleaning',
          'Barre Studio Cleaning',
          'Functional Fitness Floor Scrubbing',
          'Boutique Gym Locker Room Service',
          'Post-Class Sanitisation Passes'
        ]}
        faqs={[
          {
            question: 'What does fitness center cleaning in Sydney include?',
            answer: 'Sydney fitness center cleaning covers all areas of a studio or gym facility: exercise floor sanitisation, equipment surface disinfection (reformers, spin bikes, resistance bands, weights), mat and prop cleaning, locker rooms and showers, reception and waiting areas, bathrooms, and all high-touch surfaces. Service frequency and methods are matched to the specific fitness format — a yoga studio requires different cleaning than a CrossFit box or spin studio.'
          },
          {
            question: 'How is fitness center cleaning different for different studio types?',
            answer: 'Each fitness format creates different hygiene challenges. Spin studios accumulate concentrated sweat on bikes and flooring, requiring post-class sanitisation passes in addition to daily deep cleaning. Pilates reformer machines need careful component-by-component cleaning of straps, springs, footbars, and upholstery. Yoga studios require mat individual cleaning and floor sanitisation between classes. CrossFit boxes need chalk management, synthetic turf deep cleaning, and rig/equipment structure cleaning. Pro Clean Corp builds cleaning programmes specific to each format.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Studio Cleaning Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Fitness Center Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides specialist <strong className="text-white">fitness center cleaning across Sydney</strong> for boutique studios, spin rooms, pilates reformer spaces, yoga studios, and CrossFit boxes. Cleaning programmes built for each format.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Studio Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Format-Specific Cleaning</span>
                <span>✓ Post-Class Passes Available</span>
                <span>✓ Equipment-Safe Products</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Fitness center cleaning Sydney boutique studio services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">150+</div>
                <div className="text-xs text-gray-500">Sydney Studios Cleaned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Fitness center cleaning in Sydney</strong> is not one-size-fits-all. A spin studio that runs 10 classes a day generates different hygiene challenges to a pilates reformer studio or a yoga space. Pro Clean Corp designs cleaning programmes matched to each fitness format — ensuring the specific equipment, floor surfaces, and member hygiene expectations of your studio are met every single day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Fitness Center Cleaning Sydney — Built for Boutique Studios</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Sydney&apos;s boutique fitness scene has grown rapidly. Spin studios, pilates reformer rooms, F45 and HIIT boxes, yoga and breathwork spaces, barre studios — each has its own equipment, surface types, and member hygiene expectations. Cleaning these environments correctly requires both the right products and a genuine understanding of how each format operates.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Spin studios are one of the most demanding fitness cleaning environments — a single class generates enormous sweat load on bikes, floors, and walls. Post-class sanitisation passes between sessions, combined with a thorough end-of-day deep clean, are the only way to maintain the standard that premium fitness members expect. Pilates reformer machines require careful component-by-component cleaning of straps, springs, footbars, and reformer upholstery without damaging mechanisms or leather surfaces.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Member Experience Starts with Hygiene</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                For boutique fitness studios competing in Sydney&apos;s premium market, cleanliness is a direct driver of member satisfaction and retention. Google reviews and word-of-mouth are quickly influenced by locker room odour, reformer upholstery condition, or visible grime on spin bike screens. Pro Clean Corp&apos;s fitness center cleaning service maintains the presentation standard your membership pricing demands.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/faq3.jpg"
                alt="Fitness center cleaning Sydney studio hygiene services"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Studio Cleaning Services</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Spin bike sanitisation</li>
                  <li>✓ Reformer machine cleaning</li>
                  <li>✓ Yoga mat & floor service</li>
                  <li>✓ CrossFit chalk management</li>
                  <li>✓ Post-class passes</li>
                  <li>✓ Locker room deep clean</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Table — UNIQUE SECTION */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Fitness Center Cleaning Prices — Sydney</h3>
            <p className="text-center text-gray-600 mb-8">Indicative pricing based on studio format and size. Contact us for a precise quote.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg text-left font-semibold">Studio Type</th>
                    <th className="p-4 text-left font-semibold">Frequency</th>
                    <th className="p-4 text-left font-semibold">Per Visit</th>
                    <th className="p-4 rounded-tr-lg text-left font-semibold">Deep Clean</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.type}</td>
                      <td className="p-4 text-gray-600">{row.visits}</td>
                      <td className="p-4 text-greenprimary font-bold">{row.perVisit}</td>
                      <td className="p-4 text-gray-700">{row.deepClean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">* Prices are indicative only and exclude GST. Final pricing requires a site assessment.</p>
            <div className="text-center mt-6">
              <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get Your Studio Cleaning Quote →
              </a>
            </div>
          </div>

          {/* Service Links Grid */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Gym & Fitness Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {suburbLinks.map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Fitness Center Cleaning Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'What does fitness center cleaning in Sydney include?', a: 'Sydney fitness center cleaning covers exercise floor sanitisation, equipment surface disinfection (reformers, spin bikes, weights, resistance bands), mat and prop cleaning, locker rooms and showers, reception and waiting areas, and all high-touch surfaces. Methods are matched to each fitness format.' },
                { q: 'How is cleaning different for different studio types?', a: 'Each format creates different hygiene challenges. Spin studios accumulate concentrated sweat on bikes and floors — requiring post-class sanitisation passes. Pilates reformers need component-by-component cleaning. Yoga studios require mat individual cleaning. CrossFit boxes need chalk management and synthetic turf deep cleaning. We build programmes specific to your format.' },
                { q: 'Can you clean a boutique fitness studio between classes?', a: 'Yes. Post-class sanitisation passes are one of our most requested services for Sydney spin studios, pilates rooms, and HIIT boxes. A trained cleaner arrives between sessions for a rapid sanitisation of bike seats, handles, floor areas, and high-touch points — taking approximately 20–30 minutes for a standard studio.' },
                { q: 'Do you service fitness studios across all Sydney areas?', a: 'Yes. Pro Clean Corp services boutique fitness studios, pilates reformer studios, yoga spaces, CrossFit boxes, and HIIT gyms across metropolitan Sydney including the CBD, Inner West, Eastern Suburbs, North Shore, Parramatta, Hills District, and Western Sydney.' }
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
            <h3 className="text-3xl font-bold mb-4">Sydney&apos;s Fitness Center Cleaning Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">
              Format-specific cleaning for boutique studios, spin rooms, reformer spaces, and CrossFit boxes across Sydney NSW.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Studio Cleaning Quote
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
