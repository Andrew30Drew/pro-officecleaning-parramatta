import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Floor Cleaning Service Sydney | Rubber & Hardwood Gym Floors NSW | Pro Clean Corp',
  description: 'Specialist gym floor cleaning service across Sydney NSW. Industrial scrubbing for rubber, hardwood, vinyl, and tile gym floors. Deep degreasing, grout restoration, and anti-slip treatment. Call 1300 494 983.',
  keywords: [
    'gym floor cleaning service sydney',
    'rubber gym floor cleaning sydney',
    'hardwood gym floor cleaning NSW',
    'gym floor scrubbing sydney',
    'fitness floor cleaning sydney',
    'gym mat cleaning sydney',
    'CrossFit floor cleaning sydney',
    'gym floor degreasing NSW',
    'Pro Clean Corp gym floor cleaning'
  ],
  openGraph: {
    title: 'Gym Floor Cleaning Service Sydney | Pro Clean Corp',
    description: 'Specialist gym floor cleaning service in Sydney — industrial scrubbing for rubber, hardwood, vinyl and tile gym floors. Deep degreasing and anti-slip treatment.',
    url: '/gym-floor-cleaning-service-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym Floor Cleaning Service Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Floor Cleaning Service Sydney | Pro Clean Corp',
    description: 'Specialist gym floor cleaning in Sydney — industrial scrubbing for rubber, hardwood, vinyl and tile. Anti-slip treatment included.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/gym-floor-cleaning-service-sydney' }
};

const floorTypes = [
  {
    type: 'Rubber Gym Flooring',
    desc: 'Rolled rubber, interlocking tiles, and weightlifting platforms. Industrial auto-scrubbing removes embedded sweat residue, chalk, and bacteria that surface wiping cannot reach.',
    services: ['Auto-scrubber deep clean', 'Degreasing treatment', 'Anti-bacterial rinse', 'Odour elimination'],
  },
  {
    type: 'Hardwood & Sprung Floors',
    desc: 'Group fitness studio floors, basketball courts, and aerobics areas. Specialist hardwood-safe cleaning agents and buffing techniques that protect the timber finish.',
    services: ['Dust mopping & vacuuming', 'pH-neutral hardwood cleaner', 'Buff & polish', 'Scuff mark removal'],
  },
  {
    type: 'Vinyl & PVC Flooring',
    desc: 'Smooth vinyl, sports vinyl, and cushioned PVC in yoga studios, pilates reformer rooms, and cycling areas. Colour-safe cleaning methods preserve finish and grip.',
    services: ['Alkaline floor cleaner', 'Machine scrub', 'Residue-free rinse', 'Grip maintenance'],
  },
  {
    type: 'Synthetic Turf',
    desc: 'CrossFit boxes, sled run lanes, and functional training zones. HEPA vacuuming removes chalk and rubber crumb before deep brush cleaning restores pile and hygiene.',
    services: ['HEPA vacuuming', 'Turf brush clean', 'Antimicrobial spray', 'Infill maintenance'],
  },
  {
    type: 'Tile & Epoxy Floors',
    desc: 'Wet areas, changerooms, pool surrounds, and amenity zones. Grout scrubbing, anti-slip treatment, and mould-resistant disinfection maintain both hygiene and safety.',
    services: ['Grout line scrubbing', 'Acid wash (periodic)', 'Anti-slip treatment', 'Mould disinfection'],
  },
  {
    type: 'Foam & Mat Flooring',
    desc: 'Martial arts, yoga, pilates, and kids areas with foam or rubber-backed mat surfaces. Non-abrasive cleaning agents protect foam integrity while eliminating pathogens.',
    services: ['Mat individual cleaning', 'Antimicrobial spray', 'UV sanitisation option', 'Odour treatment'],
  },
];

export default function GymFloorCleaningServiceSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Floor Cleaning Service Sydney"
        serviceDescription="Specialist gym floor cleaning service across Sydney NSW — industrial auto-scrubbing for rubber, hardwood, vinyl, synthetic turf, and tile gym floors. Deep degreasing, grout restoration, and anti-slip treatment."
        serviceUrl="/gym-floor-cleaning-service-sydney"
        serviceType="Gym Floor Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Rubber Floor Auto-Scrubbing',
          'Hardwood Gym Floor Cleaning',
          'Vinyl Floor Deep Clean',
          'Synthetic Turf Cleaning',
          'Tile & Grout Scrubbing',
          'Anti-Slip Floor Treatment',
          'Floor Degreasing Service',
          'CrossFit Box Floor Clean'
        ]}
        faqs={[
          {
            question: 'What is included in a gym floor cleaning service in Sydney?',
            answer: 'A professional gym floor cleaning service in Sydney includes industrial auto-scrubbing of rubber floors, specialist hardwood cleaning and buffing for sprung studio floors, vinyl and PVC cleaning for yoga and cycling areas, HEPA vacuuming and turf brush cleaning for synthetic surfaces, and tile grout scrubbing with anti-mould treatment for wet areas. The specific method is matched to each floor type to avoid surface damage while achieving genuine deep cleaning.'
          },
          {
            question: 'How often should gym floors be professionally scrubbed?',
            answer: 'Rubber gym floors in high-traffic weight rooms should be machine-scrubbed weekly at minimum, with daily surface cleaning in between. Hardwood studio floors require professional attention every 1–2 weeks and a full buff and treat every 3 months. Tile and wet area floors need deep grout scrubbing monthly. CrossFit synthetic turf benefits from weekly professional cleaning to remove chalk and embedded organic matter.'
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
                Floor Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Floor Cleaning Service Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Sydney&apos;s specialist <strong className="text-white">gym floor cleaning service</strong> for rubber, hardwood, vinyl, synthetic turf, and tile surfaces. Industrial auto-scrubbers. Deep degreasing. Anti-slip treatment. Every floor type, every gym zone.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Floor Clean Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ All Floor Types</span>
                <span>✓ Industrial Scrubbers</span>
                <span>✓ Anti-Slip Treatment</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Gym floor cleaning service Sydney - rubber floor scrubbing"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">6</div>
                <div className="text-xs text-gray-500">Gym Floor Types Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            A professional <strong>gym floor cleaning service in Sydney</strong> goes far beyond regular mopping. Industrial auto-scrubbers remove embedded sweat residue, chalk, and organic matter from rubber and hardwood surfaces that standard equipment cannot touch. Pro Clean Corp matches the right cleaning method to every floor type — rubber, hardwood, vinyl, synthetic turf, foam, and tile — protecting the surface while delivering a genuine deep clean.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Specialist Gym Floor Cleaning — Every Surface Type</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Gym floors accumulate contamination unlike any other commercial surface. Rubber flooring in weight rooms traps sweat, chalk, and cellular debris deep in the pores that surface cleaning cannot extract. Without industrial auto-scrubbing, this buildup becomes a chronic source of bacteria, fungal spores, and persistent odour — no matter how often the floor is mopped. The same principle applies to sprung hardwood studio floors, synthetic turf CrossFit surfaces, and tile wet area floors.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s gym floor cleaning service uses walk-behind and ride-on auto-scrubbers with rotating brush heads calibrated for each surface type. Combined with floor-specific cleaning agents — rubber degreasers, hardwood-safe pH-neutral cleaners, turf-safe antimicrobials, and tile acid wash — our process achieves genuine deep decontamination at the floor-surface interface rather than just cleaning the top layer.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Anti-Slip Compliance for Sydney Gyms</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Wet gym floors — particularly in locker rooms, shower areas, pool surrounds, and group fitness studios after a cycling class — present significant slip-and-fall liability. Our gym floor cleaning service includes anti-slip treatment options for tile, vinyl, and hardwood surfaces, helping Sydney gym operators maintain compliance with Work Health and Safety obligations under NSW legislation.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero3.jpg"
                alt="Gym floor cleaning Sydney industrial scrubber service"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Floor Cleaning Methods</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Industrial auto-scrubber</li>
                  <li>✓ Surface-specific agents</li>
                  <li>✓ Grout deep scrub</li>
                  <li>✓ Anti-slip treatment</li>
                  <li>✓ Odour elimination</li>
                  <li>✓ HEPA vacuuming</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Floor Types Grid — UNIQUE SECTION */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Gym Floor Types We Clean in Sydney</h3>
            <p className="text-center text-gray-600 mb-8">Specialist methods for every gym floor surface — matched to protect the material and eliminate contamination.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {floorTypes.map((floor, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-greenprimary/30 transition">
                  <h4 className="font-bold text-darkblue mb-2">{floor.type}</h4>
                  <p className="text-sm text-gray-600 mb-4">{floor.desc}</p>
                  <ul className="space-y-1">
                    {floor.services.map((s, j) => (
                      <li key={j} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-greenprimary rounded-full flex-shrink-0"></span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Floor Cleaning Service Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'What is included in a gym floor cleaning service?', a: 'Our Sydney gym floor cleaning service includes industrial auto-scrubbing for rubber floors, specialist hardwood cleaning and buffing for sprung studio floors, vinyl deep clean for yoga and cycling areas, HEPA vacuuming and turf brush cleaning for synthetic surfaces, and tile grout scrubbing with anti-mould treatment for wet areas. Each floor type receives a method matched to protect its surface.' },
                { q: 'How often should gym floors be professionally cleaned?', a: 'Rubber weight room floors should be machine-scrubbed weekly with daily maintenance in between. Hardwood studio floors need professional attention every 1–2 weeks and a full buff every 3 months. Tile wet areas need monthly grout deep scrubbing. CrossFit synthetic turf benefits from weekly professional cleaning to manage chalk and organic buildup.' },
                { q: 'Can you clean gym floors while the facility is open?', a: 'Yes. Our floor cleaning teams can work zone-by-zone around active members during quieter periods, or complete full floor cleans before opening and after closing. For large facilities, we often run overnight scrubber runs across the entire floor area, leaving the gym dry and ready for the morning rush.' },
                { q: 'Do you provide gym floor maintenance schedules?', a: 'Yes. We design floor maintenance schedules tailored to each facility — balancing daily surface cleaning with weekly machine scrubbing and periodic deep treatments. A written schedule with recommended frequencies for each floor zone is provided to all contract clients, giving gym managers a clear hygiene framework to follow.' }
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
            <h3 className="text-3xl font-bold mb-4">Sydney&apos;s Gym Floor Cleaning Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">
              Industrial auto-scrubbers. Surface-specific methods. Anti-slip compliance. Pro Clean Corp delivers the gym floor clean your facility actually needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Book a Floor Clean
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
