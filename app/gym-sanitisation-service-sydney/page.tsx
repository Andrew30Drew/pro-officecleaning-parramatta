import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Sanitisation Service Sydney | TGA-Approved Gym Disinfection NSW | Pro Clean Corp',
  description: 'Professional gym sanitisation service across Sydney NSW. TGA-approved antimicrobial disinfection for gym equipment, floors, locker rooms, and high-touch surfaces. Kills bacteria, fungi, and viruses. Call 1300 494 983.',
  keywords: [
    'gym sanitisation service sydney',
    'gym sanitisation sydney',
    'gym disinfection service sydney',
    'gym antimicrobial cleaning sydney',
    'TGA approved gym disinfection NSW',
    'gym deep sanitisation sydney',
    'gym bacteria elimination sydney',
    'fitness centre sanitisation NSW',
    'Pro Clean Corp gym sanitisation'
  ],
  openGraph: {
    title: 'Gym Sanitisation Service Sydney | Pro Clean Corp',
    description: 'Professional gym sanitisation service across Sydney — TGA-approved antimicrobial disinfection for equipment, floors, locker rooms, and high-touch surfaces.',
    url: '/gym-sanitisation-service-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym Sanitisation Service Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Sanitisation Service Sydney | Pro Clean Corp',
    description: 'TGA-approved gym sanitisation service across Sydney NSW — eliminates bacteria, fungi, viruses, and odour-causing organisms.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/gym-sanitisation-service-sydney' }
};

const pathogens = [
  { name: 'Staphylococcus aureus', risk: 'Skin infections, wound infections', surface: 'Equipment handles, benches' },
  { name: 'MRSA', risk: 'Antibiotic-resistant skin infection', surface: 'Locker rooms, mats, equipment' },
  { name: 'Ringworm (Tinea)', risk: 'Fungal skin infection', surface: 'Floors, mats, locker rooms' },
  { name: "Athlete's Foot", risk: 'Fungal foot infection', surface: 'Shower floors, changing areas' },
  { name: 'Norovirus', risk: 'Gastroenteritis', surface: 'Door handles, water fountains' },
  { name: 'E. coli', risk: 'Gastroenteritis', surface: 'Toilet areas, water fountains' },
  { name: 'Pseudomonas', risk: 'Skin and ear infections', surface: 'Pool surrounds, wet areas' },
  { name: 'HPV', risk: 'Plantar warts', surface: 'Shower floors, gym floors' },
];

export default function GymSanitisationServiceSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Sanitisation Service Sydney"
        serviceDescription="Professional gym sanitisation service across Sydney NSW using TGA-approved antimicrobial disinfectants to eliminate bacteria, fungi, and viruses from gym equipment, floors, locker rooms, and all high-touch surfaces."
        serviceUrl="/gym-sanitisation-service-sydney"
        serviceType="Gym Sanitisation Service"
        price="$$-$$$"
        additionalServices={[
          'TGA-Approved Equipment Disinfection',
          'Locker Room Antimicrobial Treatment',
          'Gym Floor Sanitisation',
          'High-Touch Surface Disinfection',
          'Odour Elimination Treatment',
          'Post-Outbreak Deep Sanitisation',
          'UV Sanitisation Option',
          'Electrostatic Disinfection Spraying'
        ]}
        faqs={[
          {
            question: 'What pathogens does a gym sanitisation service target?',
            answer: 'A professional gym sanitisation service targets the pathogens most commonly transmitted in fitness environments: Staphylococcus aureus, MRSA, ringworm (Tinea), athlete\'s foot, norovirus, E. coli, Pseudomonas, and HPV (plantar warts). Pro Clean Corp uses TGA-approved, hospital-grade disinfectants proven effective against these organisms on gym equipment surfaces, rubber flooring, tile, vinyl, and hard surfaces throughout the facility.'
          },
          {
            question: 'How is gym sanitisation different from standard gym cleaning?',
            answer: 'Standard gym cleaning removes visible dirt and sweat residue through mopping, wiping, and vacuuming. Gym sanitisation is a step beyond — applying TGA-approved antimicrobial agents that chemically destroy bacteria, fungi, and viruses at a microbiological level. Proper sanitisation requires correct product concentration, adequate contact time on surfaces, and trained application technique. Pro Clean Corp\'s sanitisation service combines thorough physical cleaning with verified antimicrobial treatment for genuine pathogen elimination.'
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
                TGA-Approved Disinfection
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Sanitisation Service Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides a professional <strong className="text-white">gym sanitisation service across Sydney</strong> NSW using TGA-approved antimicrobial disinfectants. Eliminates bacteria, fungi, viruses, and odour-causing organisms from equipment, floors, and locker rooms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Book a Sanitisation
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ TGA-Approved Products</span>
                <span>✓ Kills MRSA & Ringworm</span>
                <span>✓ Equipment-Safe Application</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Gym sanitisation service Sydney - TGA-approved antimicrobial disinfection"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">99.9%</div>
                <div className="text-xs text-gray-500">Pathogen Elimination Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            A professional <strong>gym sanitisation service in Sydney</strong> goes beyond surface cleaning to achieve verified pathogen elimination using TGA-approved antimicrobial disinfectants. Pro Clean Corp targets the bacteria, fungi, and viruses most commonly transmitted in gym environments — from MRSA on equipment handles to ringworm on locker room floors — protecting your members and your facility&apos;s reputation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Sanitisation — Sydney&apos;s TGA-Approved Disinfection Specialists</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Sanitisation and cleaning are fundamentally different processes. Cleaning removes visible soil — dirt, sweat, and residue. Sanitisation destroys the invisible biological threat — bacteria, fungi, and viruses that survive on surfaces long after they appear clean. In a high-contact fitness environment, surface appearance is not a reliable indicator of hygiene. A gym that looks clean can still harbour MRSA, ringworm spores, or athlete&apos;s foot fungi at concentrations sufficient to cause member infections.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s gym sanitisation service applies TGA-approved antimicrobial products at the manufacturer-specified concentration and contact time required for verified kill rates. Our cleaners are trained in correct application technique — ensuring the product remains wet on the surface for the full contact period rather than being immediately wiped away. This discipline is the difference between cosmetic cleaning and genuine sanitisation.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Equipment-Safe Antimicrobial Products</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Not all disinfectants are safe on gym equipment. Bleach-based products damage vinyl upholstery, corrode chrome and steel surfaces, and degrade electronic displays over time. Pro Clean Corp uses gym-specific antimicrobial formulations that achieve TGA-approved kill rates without harming equipment finishes, rubber flooring, leather components, or touchscreen surfaces.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/faq5.jpg"
                alt="Gym sanitisation service Sydney antimicrobial disinfection"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Sanitisation Services</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ TGA-approved disinfection</li>
                  <li>✓ Equipment surface treatment</li>
                  <li>✓ Floor antimicrobial clean</li>
                  <li>✓ Wet area mould control</li>
                  <li>✓ Odour elimination</li>
                  <li>✓ Post-outbreak deep sanitise</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pathogens Table — UNIQUE SECTION */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Gym Pathogens Our Sanitisation Service Eliminates</h3>
            <p className="text-center text-gray-600 mb-8">The most common infectious organisms found in fitness facilities — and where they live.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg text-left font-semibold">Pathogen</th>
                    <th className="p-4 text-left font-semibold">Health Risk</th>
                    <th className="p-4 rounded-tr-lg text-left font-semibold">Common Surfaces</th>
                  </tr>
                </thead>
                <tbody>
                  {pathogens.map((p, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{p.name}</td>
                      <td className="p-4 text-gray-600">{p.risk}</td>
                      <td className="p-4 text-gray-500 text-sm">{p.surface}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">Pro Clean Corp uses TGA-approved disinfectants with verified efficacy against all listed organisms.</p>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Sanitisation Service Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'What pathogens does a gym sanitisation service target?', a: 'A professional gym sanitisation service targets Staphylococcus aureus, MRSA, ringworm (Tinea), athlete\'s foot, norovirus, E. coli, Pseudomonas, and HPV (plantar warts). Pro Clean Corp uses TGA-approved hospital-grade disinfectants proven effective against these organisms on all gym surface types.' },
                { q: 'How is gym sanitisation different from standard cleaning?', a: 'Standard cleaning removes visible dirt and sweat through mopping and wiping. Gym sanitisation applies TGA-approved antimicrobial agents that chemically destroy bacteria, fungi, and viruses at a microbiological level. It requires correct product concentration, adequate contact time, and trained application technique. Pro Clean Corp combines physical cleaning with verified antimicrobial treatment.' },
                { q: 'How often should a gym be professionally sanitised?', a: 'Gyms should receive a full antimicrobial sanitisation as part of every daily clean. High-touch equipment surfaces — handles, seats, touchscreens — should be sanitised multiple times per day in high-traffic facilities. Wet areas including showers and locker rooms require daily deep sanitisation. A scheduled monthly deep sanitisation programme complements daily cleaning.' },
                { q: 'Do you offer emergency or post-outbreak gym sanitisation in Sydney?', a: 'Yes. Pro Clean Corp offers rapid-response post-outbreak deep sanitisation for Sydney gyms following confirmed or suspected cases of MRSA, Staph, norovirus, or other infectious agents. We deploy a specialist team within 24 hours, apply TGA-approved terminal disinfection products, and provide documentation confirming the sanitisation scope and products used.' }
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
            <h3 className="text-3xl font-bold mb-4">Sydney&apos;s Gym Sanitisation Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">
              TGA-approved antimicrobial disinfection for gyms, fitness studios, and health clubs across Sydney NSW. Protect your members. Protect your reputation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Book a Gym Sanitisation
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
