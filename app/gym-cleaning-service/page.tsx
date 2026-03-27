import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Service Sydney | What\'s Included | Pro Clean Corp',
  description: 'Professional gym cleaning service in Sydney — what\'s included, pricing and scheduling. Equipment, floors, changerooms and more. Free quote within 24 hours.',
  keywords: ['gym cleaning service', 'gym cleaning service sydney', 'professional gym cleaning', 'fitness centre cleaning service', 'gym deep cleaning sydney'],
  openGraph: {
    title: 'Gym Cleaning Service Sydney | What\'s Included | Pro Clean Corp',
    description: 'Professional gym cleaning service overview — what\'s included, pricing and scheduling. Pro Clean Corp Sydney.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-service',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym cleaning service Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Gym Cleaning Service Sydney | Pro Clean Corp', description: 'Professional gym cleaning service — what\'s included, pricing and how it works.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-service' }
};

const faqs = [
  {
    question: 'What is included in a professional gym cleaning service?',
    answer: 'A professional gym cleaning service from Pro Clean Corp includes: all equipment surface disinfection (free weights, machines, benches, cables), gym floor sweeping and mopping with appropriate floor-safe products, changeroom and shower deep-clean, toilet disinfection, reception and common area cleaning, window and mirror cleaning and sanitiser dispenser restocking. Deep-clean add-ons include grout cleaning, drain servicing and high-pressure washing of outdoor areas.'
  },
  {
    question: 'How much does a gym cleaning service cost in Sydney?',
    answer: 'Gym cleaning service pricing in Sydney depends on the facility size, zones covered and required frequency. Indicative pricing: small studio (under 200sqm) from $150/clean, medium gym (200–500sqm) from $280/clean, large commercial gym (500sqm+) from $450/clean. Monthly fixed-rate contracts offer a discount on per-visit pricing. Pro Clean Corp provides a written fixed quote after an on-site assessment — no obligation.'
  },
  {
    question: 'Can a gym cleaning service be scheduled daily?',
    answer: 'Yes. Most commercial gyms and fitness centres in Sydney require daily cleaning services, typically scheduled overnight after the last session closes. Pro Clean Corp can provide daily gym cleaning on a monthly contract, ensuring your facility is hygienically clean and ready for the first session of the morning.'
  },
  {
    question: 'Does a gym cleaning service include deep-cleaning treatments?',
    answer: 'Standard gym cleaning services cover daily maintenance cleaning. Pro Clean Corp also offers quarterly deep-clean packages including: full rubber floor deep-scrub and conditioning, steam cleaning of changeroom tiles, grout whitening, drain descaling and pressure washing of outdoor areas. These can be included in your monthly contract or booked as one-off services.'
  }
];

export default function GymCleaningServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Service Sydney"
        serviceDescription="Professional gym cleaning service in Sydney covering equipment disinfection, floors, changerooms, showers and common areas. Daily and weekly schedules available."
        serviceUrl="/gym-cleaning-service"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Daily Gym Cleaning', 'Equipment Disinfection', 'Changeroom Cleaning', 'Shower Deep Clean', 'Overnight Cleaning', 'Quarterly Deep Clean']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Professional Gym Cleaning Service — Sydney</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Gym Cleaning Service — Everything Your Facility Needs
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp&apos;s gym cleaning service</strong> covers every inch of your fitness facility — from the weights floor to the showers, reception to the bin room. Fixed pricing, flexible scheduling and written confirmation after every clean.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-8">
                <h3 className="text-white font-bold mb-3 text-sm">Gym Cleaning Service Pricing Guide</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/90"><span>Small studio (under 200sqm)</span><span className="font-bold text-green-300">From $150/clean</span></div>
                  <div className="flex justify-between text-white/90"><span>Medium gym (200–500sqm)</span><span className="font-bold text-green-300">From $280/clean</span></div>
                  <div className="flex justify-between text-white/90"><span>Large commercial gym (500sqm+)</span><span className="font-bold text-green-300">From $450/clean</span></div>
                </div>
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/gym.jpg"
                alt="Gym cleaning service Sydney"
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
            <strong>Pro Clean Corp&apos;s gym cleaning service covers every zone of your facility</strong> — from $150/clean for small studios to $450+/clean for large commercial gyms. Includes equipment disinfection, gym floor mopping, changeroom deep-clean, shower sanitisation and reception cleaning. Overnight scheduling available to suit any gym operating hours.
          </p>
        </div>
      </section>

      {/* What's Included Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">What&apos;s Included in Our Gym Cleaning Service</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'All machine and equipment wipe-down',
                  'Dumbbell and barbell disinfection',
                  'Bench surface and upholstery cleaning',
                  'Gym floor sweep and mop',
                  'Rubber matting scrub and condition',
                  'Changeroom floor and bench disinfection',
                  'Locker surface wipe-down',
                  'Shower tile scrubbing',
                  'Drain cleaning and deodorising',
                  'Toilet full disinfection',
                  'Basin and tap cleaning',
                  'Reception counter and glass',
                  'Waiting area vacuuming',
                  'Window and mirror cleaning',
                  'Sanitiser dispenser restocking',
                  'Written service confirmation'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3">
                    <span className="text-greenprimary font-bold mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-blueprimary text-white rounded-2xl p-6 mb-4">
                <h3 className="font-bold mb-3">Deep-Clean Add-Ons</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  {['Grout whitening', 'Steam cleaning of tiles', 'Drain descaling', 'Floor conditioning treatment', 'Pressure washing of outdoor areas', 'Ceiling fan and vent cleaning'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-300 mt-0.5">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-darkblue mb-3">Service Scheduling</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {['Daily (overnight)', '3–4x weekly', 'Weekly', 'One-off deep cleans'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-greenprimary">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">A Gym Cleaning Service That Works Around Your Schedule</h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Your gym operates on its own hours — your cleaning service should too. Pro Clean Corp schedules gym cleans to fit your timetable, whether that&apos;s overnight after close, early morning before open or between late-night and early sessions for 24-hour facilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { time: 'Overnight', hours: '10pm – 6am', desc: 'Best for gyms that close at night' },
                  { time: 'Early Morning', hours: '4am – 7am', desc: 'Before first class or open' },
                  { time: 'Daytime', hours: 'Set schedule', desc: 'For low-traffic windows' },
                  { time: '24hr Gyms', hours: 'Custom', desc: 'Rolling section-by-section clean' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="font-bold text-darkblue text-sm">{item.time}</div>
                    <div className="text-greenprimary text-xs font-semibold">{item.hours}</div>
                    <div className="text-gray-500 text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero5.jpg"
                alt="Gym cleaning schedule"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Gym Cleaning Service</h2>
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
          <h2 className="text-3xl font-bold mb-4">Get a Fixed-Price Gym Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment and written quote within 24 hours. No lock-in contracts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
