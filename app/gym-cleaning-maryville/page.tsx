import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Maryville NSW | Fitness Centre Cleaning Newcastle Inner Suburbs | Pro Clean Corp',
  description: 'Professional gym cleaning in Maryville NSW 2293. Serving fitness centres and gyms across Maryville, Wickham, Carrington, and Hamilton East. Local team, same-day quotes. Call 1300 494 983.',
  keywords: [
    'gym cleaning maryville',
    'gym cleaning maryville NSW',
    'fitness centre cleaning maryville',
    'gym cleaners maryville 2293',
    'gym cleaning wickham',
    'gym cleaning carrington NSW',
    'gym cleaning hamilton east',
    'commercial gym cleaning newcastle inner suburbs',
    'Pro Clean Corp Maryville gym'
  ],
  openGraph: {
    title: 'Gym Cleaning Maryville NSW | Pro Clean Corp',
    description: 'Professional gym cleaning in Maryville NSW 2293. Local team serving Maryville, Wickham, Carrington, and Hamilton East fitness facilities.',
    url: '/gym-cleaning-maryville',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym Cleaning Maryville NSW 2293' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Cleaning Maryville NSW | Pro Clean Corp',
    description: 'Professional gym cleaning in Maryville NSW 2293 — local team, daily sanitisation, equipment cleaning.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/gym-cleaning-maryville' }
};

const nearbyAreas = [
  { name: 'Wickham', href: '/gym-cleaning-newcastle', desc: 'Adjacent suburb, Hunter St corridor' },
  { name: 'Carrington', href: '/gym-cleaning-newcastle', desc: 'Carrington industrial and residential area' },
  { name: 'Hamilton East', href: '/gym-cleaning-newcastle', desc: 'Hamilton East fitness facilities' },
  { name: 'Islington', href: '/gym-cleaning-newcastle', desc: 'Islington and inner west Newcastle' },
  { name: 'Newcastle East', href: '/gym-cleaning-newcastle', desc: 'Newcastle East CBD gyms' },
  { name: 'The Junction', href: '/gym-cleaning-newcastle', desc: 'The Junction boutique studios' },
];

export default function GymCleaningMaryvillePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Maryville"
        serviceDescription="Professional gym cleaning service in Maryville NSW 2293, servicing fitness centres, gyms, and health clubs in Maryville and the surrounding Newcastle inner suburbs including Wickham, Carrington, Hamilton East, and Islington."
        serviceUrl="/gym-cleaning-maryville"
        serviceType="Gym Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Equipment Sanitisation & Disinfection',
          'Locker Room & Changeroom Deep Clean',
          'Gym Floor Scrubbing',
          'Shower & Wet Area Disinfection',
          'Reception & Entry Cleaning',
          'Odour Elimination Treatment',
          'After-Hours & Pre-Opening Cleans'
        ]}
        faqs={[
          {
            question: 'Do you provide gym cleaning in Maryville NSW?',
            answer: 'Yes. Pro Clean Corp provides professional gym cleaning services in Maryville NSW 2293, covering all fitness centres, commercial gyms, and boutique fitness studios in the area. We also service the surrounding Newcastle inner suburbs including Wickham, Carrington, Hamilton East, Islington, and Newcastle East. Our Maryville gym cleaning team is available 7 days a week including early morning and after-hours access.'
          },
          {
            question: 'What areas near Maryville do you service?',
            answer: 'From our Maryville service zone, we cover gym cleaning across the Newcastle inner suburbs: Wickham, Carrington, Hamilton East, Islington, Tighes Hill, Mayfield, Newcastle East, and The Junction. We also extend across the broader Newcastle metropolitan area including Hamilton, Broadmeadow, Charlestown, and New Lambton for gym and fitness facility cleaning.'
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
                Maryville NSW 2293
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Maryville
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides professional <strong className="text-white">gym cleaning services in Maryville NSW 2293</strong> and the surrounding Newcastle inner suburbs. Local teams, flexible scheduling, and specialist fitness facility hygiene — 7 days a week.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Local Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Maryville & Surrounds</span>
                <span>✓ 7-Day Service</span>
                <span>✓ Same-Day Quote</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Gym cleaning Maryville NSW - fitness centre cleaning Newcastle inner suburbs"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">NSW 2293</div>
                <div className="text-xs text-gray-500">Maryville Service Area</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Gym cleaning in Maryville NSW</strong> is available from Pro Clean Corp — a specialist fitness facility cleaning company serving Maryville 2293 and the surrounding Newcastle inner suburbs including Wickham, Carrington, Hamilton East, and Islington. Daily sanitisation, equipment cleaning, locker room deep cleans, and flexible scheduling matched to your facility&apos;s operating hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning Services — Maryville & Newcastle Inner Suburbs</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Maryville is one of Newcastle&apos;s most active inner suburbs — situated between the Hunter River waterfront, Wickham, and Hamilton East. The suburb and its immediate surroundings have seen significant investment in fitness and wellness facilities in recent years, driven by the broader Newcastle urban renewal along the Honeysuckle and Hunter Street corridors. Gyms and fitness centres in Maryville serve a mix of local residents, waterfront workers, and members travelling from neighbouring suburbs.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s Maryville gym cleaning team provides daily and periodic deep cleaning services tailored to the specific operational needs of each facility. Whether your gym operates early morning hours to serve shift workers from the nearby Port of Newcastle precinct, or runs evening and weekend sessions for local residents, our scheduling adapts to fit around your members rather than the other way around.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Local Knowledge, Professional Standards</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our Newcastle-based cleaning teams have direct experience with the fitness facilities in Maryville and the surrounding inner suburbs. We understand local access requirements, building management protocols, and the seasonal patterns that affect cleaning demand — including the coastal humidity that can accelerate mould growth in locker rooms and shower areas of Maryville fitness facilities during summer months.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero5.jpg"
                alt="Gym cleaning team Maryville Newcastle NSW"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Maryville Gym Services</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Daily equipment sanitise</li>
                  <li>✓ Locker room deep clean</li>
                  <li>✓ Floor scrubbing</li>
                  <li>✓ Odour control</li>
                  <li>✓ Pre-open & after-close</li>
                  <li>✓ Mould prevention</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Gym Cleaning Services in Maryville</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Weight & resistance equipment sanitisation',
                'Cardio machine deep disinfection',
                'Rubber & tile floor scrubbing',
                'Locker room and changeroom clean',
                'Shower cubicle disinfection',
                'Mirror and glass cleaning',
                'High-touch surface disinfection',
                'Reception & entry area clean',
                'Odour elimination treatment',
                'Mould control in wet areas',
                'Bin cleaning and waste removal',
                'Consumable restocking available'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Areas Grid — UNIQUE SECTION */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Gym Cleaning Across Maryville & Nearby Suburbs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyAreas.map((area, i) => (
                <Link key={i} href={area.href} className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md hover:border-greenprimary/30 transition">
                  <h4 className="font-bold text-darkblue mb-1">{area.name}</h4>
                  <p className="text-xs text-gray-500">{area.desc}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              Not sure if we cover your suburb? <a href="tel:1300494983" className="text-blueprimary font-medium hover:underline">Call 1300 494 983</a> for a same-day answer.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaning Maryville</h3>
            <div className="space-y-6">
              {[
                { q: 'Do you provide gym cleaning in Maryville NSW?', a: 'Yes. Pro Clean Corp provides professional gym cleaning in Maryville NSW 2293, covering all fitness centres, commercial gyms, and boutique fitness studios in the area. We also service Wickham, Carrington, Hamilton East, Islington, and Newcastle East. Our team is available 7 days a week including early morning and after-hours access.' },
                { q: 'What areas near Maryville do you service for gym cleaning?', a: 'From our Maryville service zone, we cover gym cleaning across the Newcastle inner suburbs: Wickham, Carrington, Hamilton East, Islington, Tighes Hill, Mayfield, Newcastle East, and The Junction. We also extend across broader Newcastle including Hamilton, Broadmeadow, Charlestown, and New Lambton.' },
                { q: 'How quickly can you start gym cleaning in Maryville?', a: 'For most Maryville gym cleaning enquiries, we can provide a same-day or next-day quote following a brief phone discussion. Site assessments for new clients are typically completed within 48 hours. Ongoing contract cleaning can usually commence within one week of contract agreement.' },
                { q: 'Do you use gym-safe cleaning products in Maryville?', a: 'Yes. All products used in Maryville gym facilities are specifically chosen for fitness environments — antimicrobial agents safe on rubber flooring, vinyl upholstery, chrome, steel, and electronic components. We never use bleach-based products that damage equipment finishes over time.' }
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
            <h3 className="text-3xl font-bold mb-4">Gym Cleaning in Maryville NSW — Get a Same-Day Quote</h3>
            <p className="text-xl mb-6 text-gray-100">
              Pro Clean Corp serves gyms and fitness centres in Maryville 2293 and the surrounding Newcastle inner suburbs. Call today for a same-day response.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Maryville Quote
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
