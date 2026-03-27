import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Cleaning Services for Gyms Sydney | Comprehensive Fitness Cleaning | Pro Clean Corp',
  description: 'Comprehensive cleaning services designed specifically for gyms. Equipment disinfection, rubber floors, changerooms, pools and more. Pro Clean Corp — trusted by Sydney gyms.',
  keywords: ['cleaning services for gyms', 'gym cleaning services sydney', 'fitness facility cleaning', 'gym hygiene services', 'commercial gym cleaning'],
  openGraph: {
    title: 'Cleaning Services for Gyms Sydney | Comprehensive | Pro Clean Corp',
    description: 'Comprehensive cleaning services designed specifically for gyms. Equipment, floors, changerooms, pools — all covered by Pro Clean Corp.',
    url: 'https://www.procleancorp.com.au/cleaning-services-for-gyms',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Cleaning services for gyms Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Cleaning Services for Gyms Sydney | Pro Clean Corp', description: 'Comprehensive cleaning services designed specifically for gyms.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/cleaning-services-for-gyms' }
};

const faqs = [
  {
    question: 'What cleaning services do gyms specifically need?',
    answer: 'Gyms require cleaning services distinct from standard commercial cleaning: equipment surface disinfection (free weights, machines, cables, benches), rubber and specialty floor care, high-humidity changeroom and shower maintenance, chalk and sweat residue removal, air quality management through HEPA filtration and anti-microbial products formulated for athletic environments. Pro Clean Corp designs a cleaning program specific to your gym\'s layout and usage.'
  },
  {
    question: 'Do cleaning services for gyms cover pool areas?',
    answer: 'Yes. Pro Clean Corp can include pool and aquatic facility cleaning as part of a comprehensive gym cleaning service — covering pool deck, changerooms, shower block, toilets and entry areas adjacent to the pool. Pool water chemistry and filtration are outside our scope and handled by your pool maintenance provider.'
  },
  {
    question: 'How do gym cleaning services prevent the spread of infections?',
    answer: 'Infection prevention in gym settings requires: hospital-grade TGA-registered disinfectants on all high-touch surfaces, colour-coded cleaning systems to prevent cross-contamination between zones, attention to MRSA, tinea and dermatophyte hot-spots (locker room floors, shower blocks), HEPA vacuum filtration in workout areas and proper ventilation practices during cleaning. Our gym protocols are built on public health infection control guidelines.'
  },
  {
    question: 'What should I include in a cleaning service schedule for my gym?',
    answer: 'A complete gym cleaning schedule typically includes: daily overnight deep-clean (equipment, floors, changerooms, showers), inter-session spot-cleans for toilets and high-touch surfaces, weekly deep-clean of rubber matting and free weight areas, fortnightly window and glass cleaning, and monthly grout and drain cleaning. Pro Clean Corp will build a custom schedule during your on-site assessment.'
  }
];

const gymServices = [
  {
    zone: 'Weights & Training Floor',
    tasks: ['Wipe all barbells, dumbbells and plates', 'Disinfect bench surfaces and upholstery', 'Machine handle and cable disinfection', 'Rubber floor sweep and mop', 'Mirror cleaning', 'Chalk residue removal']
  },
  {
    zone: 'Cardio Equipment',
    tasks: ['Console and touchscreen disinfection', 'Treadmill belt and frame cleaning', 'Bike handlebar and seat wipe-down', 'Rowing machine handle cleaning', 'Elliptical rail disinfection', 'Cup holder cleaning']
  },
  {
    zone: 'Changerooms & Showers',
    tasks: ['Locker surface wipe-down', 'Bench and floor disinfection', 'Shower tile scrubbing', 'Drain cleaning and deodorising', 'Mirror and fixture cleaning', 'Anti-slip floor treatment']
  },
  {
    zone: 'Amenities & Reception',
    tasks: ['Toilet deep disinfection', 'Basin and tap cleaning', 'Reception counter and glass', 'Waiting area vacuuming', 'Water fountain cleaning', 'Sanitiser dispenser restocking']
  }
];

export default function CleaningServicesForGymsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Cleaning Services for Gyms Sydney"
        serviceDescription="Comprehensive cleaning services designed specifically for gym and fitness facilities in Sydney. Equipment disinfection, rubber floors, changerooms, showers and common areas."
        serviceUrl="/cleaning-services-for-gyms"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Gym Equipment Disinfection', 'Rubber Floor Cleaning', 'Changeroom Cleaning', 'Shower Cleaning', 'Pool Deck Cleaning', 'Overnight Deep Clean']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Designed Specifically for Fitness Facilities</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Cleaning Services for Gyms — Built for the Fitness Environment
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Cleaning services for gyms require a different approach</strong> to standard commercial cleaning. Pro Clean Corp designs gym-specific protocols covering rubber floors, equipment disinfection, high-humidity changerooms and the unique hygiene demands of athletic facilities.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Rubber & specialty floor care', 'TGA equipment disinfectants', 'Humidity-resistant protocols', 'Chalk & sweat removal', 'HEPA vacuuming', 'Infection prevention focus'].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white">
                    <span className="text-green-300">✓</span>
                    {b}
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/gym.jpg"
                alt="Cleaning services for gyms Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Pro Clean Corp&apos;s cleaning services for gyms are purpose-built for fitness facilities</strong> — covering every zone from the weights floor to the changerooms, showers and reception. Using TGA-registered disinfectants, rubber floor-safe products and HEPA filtration, our protocols protect members from HAIs and keep your facility hygienic between sessions.
          </p>
        </div>
      </section>

      {/* Zone-by-Zone */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Zone-by-Zone Gym Cleaning Services</h2>
          <p className="text-center text-gray-600 mb-12">Every area of your gym covered — with the right products for each zone.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {gymServices.map((zone, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-darkblue mb-4 text-lg">{zone.zone}</h3>
                <ul className="space-y-2">
                  {zone.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Why Gym-Specific */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/hero4.jpg"
                alt="Gym cleaning team at work"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Gym Cleaning Needs to be Different</h2>
              <div className="space-y-4">
                {[
                  { title: 'Rubber Floor Compatibility', desc: 'Standard mopping products can damage rubber gym flooring. We use rubber-safe cleaning agents that clean effectively without breaking down the material.' },
                  { title: 'High-Humidity Environments', desc: 'Changerooms and shower areas require moisture-resistant protocols and anti-fungal products to prevent mould, mildew and tinea growth.' },
                  { title: 'Chalk and Sweat Residue', desc: 'Magnesium carbonate chalk leaves residue on floors and equipment that requires specific removal protocols — not just standard mopping.' },
                  { title: 'MRSA and Skin Infections', desc: 'Gyms are a known transmission environment for MRSA, tinea and other skin conditions. Our disinfectants specifically target dermatophytes and staph bacteria.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border-l-4 border-greenprimary">
                    <h4 className="font-bold text-darkblue text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Cleaning Services for Gyms</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Design Your Gym Cleaning Program — Free Quote</h2>
          <p className="text-xl text-blue-100 mb-8">Custom gym cleaning program designed for your facility. On-site assessment and fixed quote within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
