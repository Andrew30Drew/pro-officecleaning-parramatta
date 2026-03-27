import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning | Professional Fitness Centre Cleaning Services | Pro Clean Corp Sydney',
  description: 'Specialist gym cleaning services across Sydney NSW. Equipment sanitisation, floor degreasing, changeroom cleaning, and odour control for gyms and fitness centres. Call 1300 494 983.',
  keywords: [
    'gym cleaning',
    'gym cleaning services',
    'fitness centre cleaning',
    'gym cleaning Sydney',
    'professional gym cleaners',
    'gym sanitisation services',
    'CrossFit cleaning',
    'gym hygiene services NSW',
    'Pro Clean Corp gym'
  ],
  openGraph: {
    title: 'Gym Cleaning Services | Pro Clean Corp',
    description: 'Professional gym cleaning across Sydney. Equipment sanitisation, floor care, changerooms, and antimicrobial treatment for fitness facilities.',
    url: '/gym-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Cleaning Services | Pro Clean Corp',
    description: 'Specialist gym cleaning — equipment sanitisation, floor degreasing, changerooms, and odour control across Sydney.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/gym-cleaning' }
};

export default function GymCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning"
        serviceDescription="Specialist gym cleaning services across Sydney NSW. Deep sanitisation of fitness equipment, rubber floors, changerooms, showers, and common areas using antimicrobial cleaning agents."
        serviceUrl="/gym-cleaning"
        serviceType="Gym & Fitness Facility Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Fitness Equipment Sanitisation',
          'Gym Floor Degreasing & Scrubbing',
          'Changeroom & Locker Room Deep Clean',
          'Shower & Wet Area Disinfection',
          'Group Fitness Studio Cleaning',
          'Cardio Zone Antimicrobial Treatment',
          'Reception & Cafe Area Cleaning',
          'Odour Control & Deodorisation'
        ]}
        faqs={[
          {
            question: 'What is included in a professional gym cleaning service?',
            answer: 'A professional gym cleaning service covers all zones of your facility: the gym floor and all equipment (weights, machines, cardio, functional rigs), changerooms and lockers, shower cubicles, wet areas, group fitness studios, reception and cafe areas, and all common area touch points. We use antimicrobial agents that kill bacteria, fungi, and viruses on contact.'
          },
          {
            question: 'Can gym cleaners work while the gym is open?',
            answer: 'Yes. Our trained gym cleaning staff are experienced in working safely around members in active facilities. We can clean non-training zones, amenities, and reception areas during operating hours, and coordinate with your team to sequence equipment cleaning during low-traffic windows. We also offer early morning and late-night cleaning sessions.'
          }
        ]}
      />

      {/* Hero — centred with bold stat cards */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
              Fitness Facility Hygiene Experts
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Gym Cleaning Services
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Gyms demand a level of hygiene that goes far beyond surface appearances. Pro Clean Corp&apos;s specialist gym cleaning teams eliminate pathogens at the source — keeping your members safe and your facility complaint-free.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Gym Cleaning Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Call 1300 494 983
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-200">
              <span>✓ Antimicrobial Treatment</span>
              <span>✓ Equipment-Safe Products</span>
              <span>✓ Works Around Your Schedule</span>
            </div>
          </div>
          {/* Hero Image + Stats */}
          <div className="relative max-w-4xl mx-auto">
            <Image
              src="/images/services/gym.jpg"
              alt="Professional gym cleaning services"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              width={1000}
              height={320}
              priority
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full px-4">
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { stat: '100+', label: 'Gyms Cleaned' },
                  { stat: '7 Days', label: 'Per Week' },
                  { stat: '4.9★', label: 'Client Rating' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg p-4 text-center">
                    <div className="text-xl font-bold text-blueprimary">{s.stat}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="pt-16 pb-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Gym cleaning</strong> is a specialised discipline requiring antimicrobial products, equipment-safe application methods, and staff trained to work in active fitness environments. Pro Clean Corp provides professional gym cleaning across Sydney — for commercial gyms, boutique studios, CrossFit boxes, and multi-facility leisure centres.
          </p>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Makes Gym Cleaning Different?</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                The gym environment is uniquely challenging from a hygiene perspective. High body-heat, perspiration, skin contact with shared surfaces, and humid wet areas create ideal conditions for bacterial growth, fungal infections, and viral transmission. Standard commercial cleaning products and methods are simply not adequate.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s gym cleaning protocols use EPA-registered antimicrobial agents, microfibre systems that physically remove biofilm from equipment surfaces, and pH-balanced degreasing compounds for rubber floors. We clean with the biology of the fitness environment in mind — not just the aesthetics.
              </p>
              <h3 className="text-xl font-bold text-darkblue mb-4">Complete Gym Cleaning — Zone by Zone</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Weight room & free weights',
                  'Cable machine & resistance equipment',
                  'Cardio machines (treadmills, bikes, rowers)',
                  'Functional rig & CrossFit equipment',
                  'Rubber & hardwood floor cleaning',
                  'Group fitness studio sanitisation',
                  'Changeroom & locker deep clean',
                  'Shower & wet area disinfection',
                  'Pool deck & spa area',
                  'Sauna & steam room cleaning',
                  'Reception & juice bar cleaning',
                  'All touch-point disinfection'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/gym.jpg"
                alt="Gym cleaning equipment sanitisation"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl border border-blueprimary/20">
                <h4 className="font-bold text-darkblue mb-3">Gym Types We Clean</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Commercial gyms & fitness centres</li>
                  <li>✓ CrossFit boxes & functional studios</li>
                  <li>✓ Pilates & yoga studios</li>
                  <li>✓ Martial arts & boxing gyms</li>
                  <li>✓ Aquatic & leisure centres</li>
                  <li>✓ Corporate wellness facilities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Gym Cleaning — Approximate Pricing Guide</h3>
            <p className="text-center text-gray-500 mb-8 text-sm">Pricing varies by facility size, scope, and cleaning frequency.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold text-left">Gym Type</th>
                    <th className="p-4 font-semibold text-left">Approx. Size</th>
                    <th className="p-4 font-semibold">Est. Daily Cost</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Boutique studio / yoga', 'Under 300m²', '$120 – $220', 'Daily'],
                    ['Small commercial gym', '300–800m²', '$220 – $380', 'Daily'],
                    ['Mid-size fitness centre', '800–2,000m²', '$380 – $650', 'Daily + weekly deep'],
                    ['Large gym / leisure centre', '2,000m²+', '$650 – $1,400+', 'Multiple daily sessions'],
                  ].map(([type, size, cost, freq], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{type}</td>
                      <td className="p-4 text-gray-600">{size}</td>
                      <td className="p-4 font-bold text-greenprimary">{cost}</td>
                      <td className="p-4 text-gray-600">{freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Related Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Gym Cleaning by Suburb — Sydney</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Gym Cleaners Sydney', href: '/gym-cleaners-sydney' },
                { name: 'Gym Cleaning Services Sydney', href: '/gym-cleaning-services-sydney' },
                { name: 'Gym Cleaning Newtown', href: '/gym-cleaning-newtown' },
                { name: 'Gym Cleaning Penrith', href: '/gym-cleaning-penrith' },
                { name: 'Gym Cleaning Hurstville', href: '/gym-cleaning-hurstville' },
                { name: 'Gym Cleaning Liverpool', href: '/gym-cleaning-liverpool' },
                { name: 'Gym Cleaning Ryde', href: '/gym-cleaning-ryde' },
                { name: 'Gym Sanitisation Sydney', href: '/gym-sanitisation-sydney' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-gray-50 p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Gym Cleaning — Frequently Asked Questions</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What is included in a professional gym cleaning service?', a: 'A professional gym cleaning service covers all zones: the floor, all equipment, changerooms, lockers, showers, wet areas, group fitness studios, reception, and all common area touch points. We use antimicrobial agents that kill bacteria, fungi, and viruses on contact — not just surface cleaners.' },
              { q: 'Can gym cleaners work while the gym is open?', a: 'Yes. Our staff are trained to work around members in active facilities. We clean non-training zones, amenities, and reception during operating hours, and can coordinate with your team to sequence equipment cleaning during low-traffic windows. Early morning and late-night slots are also available.' },
              { q: 'How do you prevent cross-contamination between gym zones?', a: 'We use a strict colour-coded cleaning system: separate cloths, mops, and equipment for each zone (changerooms, gym floor, wet areas, kitchen). This prevents transferring bacteria from high-risk areas like showers to other surfaces. All tools are laundered between visits.' },
              { q: 'Are your cleaning products safe for gym equipment surfaces?', a: 'Yes. All products are tested and selected to be compatible with vinyl, rubber, leather, chrome, steel, and electronic displays. We do not use bleach or harsh solvents on equipment surfaces. Our antimicrobial agents are effective at recommended dilutions and safe for skin contact after evaporation.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Members Safe — Book Gym Cleaning Today</h3>
            <p className="text-xl mb-8 text-gray-100">Specialist gym cleaning across Sydney. Antimicrobial treatment, equipment-safe products, and flexible scheduling to match your fitness facility.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Free Gym Cleaning Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Call 1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
