import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Equipment Cleaners Sydney | Fitness Equipment Cleaning & Sanitisation NSW | Pro Clean Corp',
  description: 'Specialist gym equipment cleaners in Sydney. Equipment-safe antimicrobial cleaning and sanitisation for weights, cardio machines, mats, and all fitness equipment. Call 1300 494 983.',
  keywords: [
    'gym equipment cleaners Sydney',
    'gym equipment cleaning Sydney',
    'fitness equipment cleaning Sydney',
    'gym equipment sanitisation Sydney',
    'gym machine cleaning service NSW',
    'cardio equipment cleaners Sydney',
    'weight room cleaning Sydney'
  ],
  openGraph: {
    title: 'Gym Equipment Cleaners Sydney | Pro Clean Corp',
    description: 'Specialist gym equipment cleaners in Sydney — antimicrobial sanitisation for all fitness equipment, weights, cardio machines, mats, and more.',
    url: '/gym-equipment-cleaners-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym Equipment Cleaners Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Equipment Cleaners Sydney | Pro Clean Corp',
    description: 'Professional gym equipment cleaning and sanitisation across Sydney NSW. Equipment-safe products, antimicrobial protocols.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/gym-equipment-cleaners-sydney' }
};

export default function GymEquipmentCleanersSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Equipment Cleaners Sydney"
        serviceDescription="Pro Clean Corp provides specialist gym equipment cleaning and sanitisation services across Sydney NSW. We use antimicrobial, equipment-safe products to thoroughly clean and disinfect all types of fitness equipment."
        serviceUrl="/gym-equipment-cleaners-sydney"
        serviceType="Gym Equipment Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Cardio Machine Cleaning', 'Weight & Resistance Equipment Cleaning',
          'Rubber Mat Cleaning', 'Free Weight Sanitisation',
          'Cable Machine Cleaning', 'Bench & Seat Disinfection',
          'Barbell & Dumbbell Sanitisation', 'Equipment Deep Clean'
        ]}
        faqs={[
          {
            question: 'What equipment do gym equipment cleaners clean?',
            answer: 'Gym equipment cleaners sanitise all fitness equipment including treadmills, ellipticals, stationary bikes, rowing machines, weight machines, cable systems, barbells, dumbbells, kettlebells, resistance bands, foam rollers, gymnastics equipment, yoga mats, and boxing equipment. We clean all surfaces that members touch.'
          },
          {
            question: 'What products do you use on gym equipment?',
            answer: 'We use antimicrobial, equipment-safe cleaning agents specifically formulated for fitness facility use. Our products are effective against bacteria, viruses, and fungi while being non-corrosive on steel, chrome, rubber, vinyl, leather, and electronic components. All products are skin-safe for member contact after drying.'
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
                Fitness Equipment Sanitisation Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Gym Equipment Cleaners Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp&apos;s specialist gym equipment cleaners in Sydney use antimicrobial, equipment-safe products to thoroughly sanitise every piece of fitness equipment in your facility — from cardio machines to free weights, mats, and benches.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Request a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Equipment-Safe Products</span>
                <span>✓ Antimicrobial Formulations</span>
                <span>✓ All Equipment Types</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Gym equipment cleaners Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-greenprimary rounded-xl shadow-lg p-4 text-white">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-xs">Gyms Cleaned Sydney</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Gym equipment cleaners in Sydney</strong> from Pro Clean Corp go beyond a quick wipe-down. We apply antimicrobial sanitisation to every contact surface, protecting your members from bacteria, fungi, and viruses that thrive in warm, sweaty fitness environments.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Gym Equipment Needs Specialist Cleaning</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Gym equipment is used by dozens or hundreds of people every day, each leaving behind sweat, skin cells, and potentially pathogenic microorganisms. Standard commercial cleaners typically don&apos;t carry the right products or knowledge for fitness equipment — using the wrong chemical on a treadmill console or rubber mat can cause premature deterioration or leave residues unsafe for member contact.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Pro Clean Corp&apos;s gym equipment cleaners are trained specifically for fitness facility environments. We know how to clean around electronic components, which products are safe on vinyl versus rubber versus chrome, and how to apply antimicrobial agents effectively without damaging equipment finishes or voiding manufacturer warranties.
              </p>
              <div className="space-y-3">
                {[
                  'Non-corrosive on steel, chrome & electronics',
                  'Safe on vinyl, rubber, leather & foam',
                  'Antimicrobial — kills bacteria, viruses & fungi',
                  'Odour-eliminating formulations',
                  'Quick-dry for minimal downtime',
                  'Member-safe after drying — no harmful residue',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/hero/hero6.jpg"
                alt="Gym equipment sanitisation Sydney"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mb-6"
                width={600}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/5 p-6 rounded-xl border border-blueprimary/10">
                <h4 className="font-bold text-darkblue mb-3">Pathogens We Eliminate</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {['Staphylococcus', 'Ringworm (tinea)', 'Athlete\'s foot', 'MRSA', 'E. coli', 'Norovirus', 'Influenza', 'Salmonella'].map((p, i) => (
                    <span key={i} className="flex items-center space-x-1">
                      <span className="text-greenprimary text-xs">✓</span>
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Types */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Gym Equipment We Clean & Sanitise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { category: 'Cardio Equipment', items: ['Treadmills', 'Ellipticals', 'Stationary bikes', 'Rowing machines', 'Stair climbers'] },
                { category: 'Weight Equipment', items: ['Barbells & dumbbells', 'Kettlebells', 'Weight plates', 'Cable machines', 'Smith machines'] },
                { category: 'Functional Equipment', items: ['Gymnastics rings', 'Battle ropes', 'Resistance bands', 'Medicine balls', 'Plyometric boxes'] },
                { category: 'Soft Surfaces', items: ['Rubber gym mats', 'Yoga mats', 'Foam rollers', 'Stretching areas', 'Boxing pads'] },
              ].map((group, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-darkblue mb-3 text-sm">{group.category}</h4>
                  <ul className="space-y-1">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center space-x-1">
                        <span className="text-greenprimary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Related Pages */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Gym Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Gym Cleaners Sydney', href: '/gym-cleaners-sydney' },
                { name: 'Gym Cleaning Services', href: '/gym-cleaning-services-sydney' },
                { name: 'Gym Sanitisation', href: '/gym-sanitisation-sydney' },
                { name: 'Gym Floor Cleaning', href: '/gym-floor-cleaning-sydney' },
                { name: 'Fitness Cleaning', href: '/fitness-cleaning-services' },
                { name: 'Newtown Gym Cleaning', href: '/gym-cleaning-newtown' },
                { name: 'Penrith Gym Cleaning', href: '/gym-cleaning-penrith' },
                { name: 'Commercial Cleaning', href: '/commercial-cleaning-sydney' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Equipment Cleaners Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'What equipment do gym equipment cleaners clean?', a: 'We clean all fitness equipment including treadmills, ellipticals, stationary bikes, rowing machines, weight machines, cable systems, barbells, dumbbells, kettlebells, resistance bands, foam rollers, yoga mats, and boxing equipment — every surface members touch.' },
                { q: 'What products do you use on gym equipment?', a: 'We use antimicrobial, equipment-safe formulations specifically designed for fitness environments. Our products are effective against bacteria, viruses, and fungi while being non-corrosive on steel, chrome, rubber, vinyl, leather, and electronic components. All products are skin-safe after drying.' },
                { q: 'How often should gym equipment be cleaned?', a: 'High-touch equipment should be wiped down multiple times daily by staff. Deep sanitisation cleaning by a professional gym equipment cleaner should occur daily — ideally after close — with a comprehensive equipment deep clean weekly. We tailor the schedule to your gym\'s size and traffic.' },
                { q: 'Can gym equipment cleaners work around gym operating hours?', a: 'Yes. Pro Clean Corp gym equipment cleaners work around your opening hours — before the gym opens, after it closes, or during low-traffic periods. We minimise equipment downtime to ensure the cleanest possible facility without inconveniencing your members.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Gym Equipment Cleaners — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Protect your members and your equipment investment with specialist gym equipment cleaning from Pro Clean Corp. Servicing gyms across all Sydney suburbs.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 — Free Quote for Your Gym
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
