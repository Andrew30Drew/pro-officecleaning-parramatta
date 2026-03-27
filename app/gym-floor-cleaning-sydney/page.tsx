import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Floor Cleaning Sydney | Rubber, Vinyl & Timber Sprung Floors | ProCleanCorp',
  description: 'Professional gym floor cleaning across Sydney. Rubber flooring, vinyl, timber sprung floors and epoxy surfaces. Ride-on scrubbers, rotary machines. Maintenance programs from $55/hr. Free quote.',
  keywords: 'gym floor cleaning sydney, gym floor cleaning service sydney, rubber floor cleaning gym sydney, timber sprung floor cleaning gym, vinyl gym floor cleaning, fitness floor maintenance sydney',
  openGraph: {
    title: 'Gym Floor Cleaning Sydney | Rubber, Vinyl & Timber Sprung Floors | ProCleanCorp',
    description: 'Professional gym floor cleaning across Sydney. Rubber flooring, vinyl, timber sprung floors. Ride-on scrubbers, rotary machines. From $55/hr. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-floor-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym floor cleaning Sydney rubber vinyl timber' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-floor-cleaning-sydney' }
};

const faqs = [
  {
    question: 'How much does gym floor cleaning cost in Sydney?',
    answer: 'Gym floor cleaning in Sydney costs $55–$95 per hour depending on the floor type and equipment required. Rubber gym floors in large facilities (500m²+) typically cost $200–$400 per clean using a ride-on scrubber-dryer. Boutique studio timber sprung floors average $150–$280 per clean. ProCleanCorp provides fixed-price weekly or daily contracts after an on-site floor assessment.'
  },
  {
    question: 'What is the correct way to clean rubber gym flooring?',
    answer: 'Rubber gym flooring should be cleaned with a pH-neutral, rubber-safe cleaner — never bleach-based products which degrade the rubber compound and cause premature cracking. Daily cleaning involves sweeping or auto-scrubbing with a soft-bristle head. Weekly deep cleans use a low-moisture scrubber-dryer to extract embedded sweat, chalk and odour from the rubber cells. ProCleanCorp uses TGA-registered disinfectants that are rubber-safe and effective against all gym pathogens.'
  },
  {
    question: 'Can you clean timber sprung floors in gyms and dance studios?',
    answer: 'Yes. Timber sprung floors require specialist care — excess moisture causes warping, and the wrong cleaning product strips the lacquer finish. ProCleanCorp uses dry microfibre mopping systems and approved hardwood floor cleaners for daily maintenance, with periodic conditioning treatments to preserve the spring and finish. We service dance studios, basketball courts and aerobics rooms with sprung timber floors throughout Sydney.'
  },
  {
    question: 'How often should gym floors be professionally cleaned?',
    answer: 'High-traffic gym floors should be professionally cleaned daily — or at minimum, before opening each day. Rubber flooring in weight areas requires daily scrubbing due to sweat, chalk and equipment rubber residue. Studio floors used for group classes need daily mopping and periodic deep cleaning. Timber floors in dance or aerobics studios require daily dry mopping and a professional wet clean weekly.'
  }
];

export default function GymFloorCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Floor Cleaning Sydney"
        serviceDescription="Professional gym floor cleaning across Sydney covering rubber flooring, vinyl, timber sprung floors and epoxy surfaces. Ride-on scrubbers, rotary machines and surface-specific maintenance programs."
        serviceUrl="https://www.procleancorp.com.au/gym-floor-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Rubber Floor Cleaning', 'Timber Sprung Floor Maintenance', 'Vinyl Floor Scrubbing', 'Ride-On Scrubber Service', 'Daily Gym Cleaning', 'TGA-Registered Disinfection']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Gym & Fitness Floor Specialists</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Floor Cleaning Sydney — Rubber, Vinyl & Timber Sprung Floor Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers surface-specific gym floor cleaning across Sydney using ride-on scrubbers, rotary machines and TGA-registered disinfectants for rubber, vinyl, timber sprung and epoxy gym floors.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Surface-Specific Equipment &nbsp;|&nbsp; ✓ TGA-Registered Disinfectants &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym floor cleaning Sydney rubber vinyl timber"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp specialises in gym floor cleaning across Sydney</strong>, covering all gym floor types including rubber flooring, vinyl, timber sprung floors, epoxy and polished concrete. We use surface-appropriate equipment — ride-on scrubber-dryers for large rubber floors, rotary machines for polished surfaces, and dry microfibre systems for timber — so the right clean is always delivered for the right surface.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Gym Floor Cleaning Services in Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Gym floors are one of the hardest surfaces to clean correctly. Every floor type in a fitness facility — rubber, vinyl, timber, epoxy — requires different equipment, different products and a different cleaning protocol. Using the wrong product on rubber flooring degrades the compound and causes premature cracking. Too much moisture on a timber sprung floor causes warping. ProCleanCorp's gym floor specialists understand these distinctions and apply the right protocol for every surface, every visit.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Gym Floor Types We Clean</h3>
                <div className="space-y-4">
                  {[
                    { type: 'Rubber Gym Flooring', detail: 'Interlocking rubber tiles and rolls in weight rooms, CrossFit boxes and functional training areas. Daily scrubbing with pH-neutral rubber-safe disinfectant. Ride-on scrubber-dryer for large areas (300m²+).' },
                    { type: 'Vinyl / LVT Flooring', detail: 'Common in aerobics and cycle studios. Wet mopping with vinyl-safe cleaner. Weekly scrub to lift embedded sweat residue from textured surfaces.' },
                    { type: 'Timber Sprung Floors', detail: 'Dance studios, aerobics rooms, basketball courts. Dry microfibre daily + approved hardwood cleaner weekly. Periodic conditioning to preserve spring and lacquer.' },
                    { type: 'Epoxy Coating', detail: 'Weight rooms and functional areas. Non-abrasive scrubbing + quarterly resealing recommendation to maintain anti-slip rating.' },
                    { type: 'Polished Concrete', detail: 'CrossFit and functional training facilities. Neutral pH scrubbing + periodic burnishing to maintain the surface sheen.' },
                    { type: 'Carpet / Turf', detail: 'Astroturf sled tracks and carpeted cardio areas. Industrial vacuum + hot water extraction for quarterly deep clean.' },
                  ].map((f, i) => (
                    <div key={i} className="border-l-4 border-greenprimary pl-4">
                      <h4 className="font-semibold text-darkblue mb-1">{f.type}</h4>
                      <p className="text-gray-600 text-sm">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-4">Gym Floor Cleaning Pricing — Sydney</h3>
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-gray-200"><th className="text-left py-2 text-darkblue">Floor Type / Area</th><th className="text-left py-2 text-darkblue">Typical Cost</th><th className="text-left py-2 text-darkblue">Method</th></tr></thead>
                  <tbody>
                    {[
                      ['Boutique studio (under 200m²)', '$150–$280/clean', 'Microfibre mop + rotary'],
                      ['Mid-size gym (200–500m²)', '$280–$450/clean', 'Scrubber-dryer + rotary'],
                      ['Large gym (500m²+)', '$450–$800/clean', 'Ride-on scrubber-dryer'],
                      ['Timber sprung floor only', '$180–$320/clean', 'Dry microfibre + hardwood cleaner'],
                    ].map(([type, cost, method], i) => (
                      <tr key={i} className="border-b border-gray-100"><td className="py-2 text-gray-700">{type}</td><td className="py-2 font-semibold text-darkblue">{cost}</td><td className="py-2 text-gray-600">{method}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Equipment We Use</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Ride-on scrubber-dryer (Tennant)', 'Walk-behind auto scrubber', 'Rotary buffing machine', 'Microfibre flat mop systems', 'Industrial vacuum', 'Hot water extraction machine', 'Low-moisture spray mop'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Floor assessment included. Fixed pricing by floor type and area.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Floor Cleaning Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
                { label: 'Gym Sanitisation Sydney', href: '/gym-sanitisation-sydney' },
                { label: 'Gym Cleaning Penrith', href: '/gym-cleaning-penrith' },
                { label: 'Gym Cleaning Eastern Suburbs', href: '/gym-cleaning-eastern-suburbs' },
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Gym Floor Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site floor assessment within 24 hours. Surface-specific pricing, no lock-in contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
