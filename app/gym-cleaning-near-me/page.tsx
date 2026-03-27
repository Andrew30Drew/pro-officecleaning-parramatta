import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Near Me Sydney | Local Teams, Fast Response | Pro Clean Corp',
  description: 'Gym cleaning near you in Sydney. Local Pro Clean Corp teams cover all suburbs — equipment, floors, changerooms. Fixed pricing, after-hours service. Free quote.',
  keywords: ['gym cleaning near me', 'gym cleaning sydney', 'fitness centre cleaning near me', 'gym cleaning services', 'local gym cleaners sydney'],
  openGraph: {
    title: 'Gym Cleaning Near Me Sydney | Local Teams, Fast Response | Pro Clean Corp',
    description: 'Find gym cleaning near you in Sydney. Local teams, fast response, fixed pricing and after-hours service available.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-near-me',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym cleaning near me Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Gym Cleaning Near Me Sydney | Pro Clean Corp', description: 'Gym cleaning near you in Sydney — local teams, fixed pricing, after-hours service.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-near-me' }
};

const faqs = [
  {
    question: 'How quickly can I get gym cleaning started near me in Sydney?',
    answer: 'Pro Clean Corp can typically complete an on-site assessment within 48 hours and begin regular gym cleaning within 5 business days of agreement sign-off. For urgent or one-off gym cleaning requests, we can often accommodate same-day or next-day bookings subject to team availability in your area.'
  },
  {
    question: 'What hygiene standards do gym cleaners near me use?',
    answer: 'Pro Clean Corp gym cleaners use hospital-grade TGA-registered disinfectants, colour-coded microfibre systems to prevent cross-contamination between gym zones, HEPA-filter vacuums to reduce airborne particulates and EPA-approved sanitiser products for equipment surfaces. Our protocols meet the standards required by commercial gym operators and fitness franchise networks.'
  },
  {
    question: 'Do local gym cleaners provide fixed pricing?',
    answer: 'Yes. Pro Clean Corp provides fixed monthly pricing based on your gym\'s floor area, number of zones, equipment count and required cleaning frequency. Fixed pricing gives gym operators budget certainty and eliminates surprise invoices. We provide a written quote after an on-site assessment — no obligation.'
  },
  {
    question: 'Do gym cleaning companies near me work around class timetables?',
    answer: 'Absolutely. We schedule gym cleaning around your specific class timetable and peak hours. Common scheduling options include: overnight cleaning (10pm–6am) for gyms closed at night, early morning cleaning (4–6am) before the first class, and between-session spot cleaning for studios with back-to-back classes. Your timetable drives our schedule — not the other way around.'
  }
];

const gymTypes = [
  { type: 'Commercial Gyms', desc: '24-hour and large format gyms with high member volumes requiring daily overnight cleaning.' },
  { type: 'Boutique Studios', desc: 'Yoga, pilates, barre and boxing studios needing deep-clean between class sessions.' },
  { type: 'CrossFit & Functional Fitness', desc: 'Rubber floor treatment, rig and equipment wipe-down, chalk residue removal.' },
  { type: 'Personal Training Studios', desc: 'Smaller footprint PT studios requiring regular cleaning between client appointments.' },
  { type: 'Corporate Wellness Gyms', desc: 'In-building corporate gym facilities with professional presentation standards.' },
  { type: 'Pool & Aquatic Centres', desc: 'Pool changerooms, amenities and common areas for swim centres and aquatic facilities.' }
];

export default function GymCleaningNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Near Me Sydney"
        serviceDescription="Local gym cleaning services across all Sydney suburbs. Equipment disinfection, changerooms, floors and common areas. Fixed pricing and after-hours service."
        serviceUrl="/gym-cleaning-near-me"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Gym Equipment Disinfection', 'Changeroom Cleaning', 'Gym Floor Mopping', 'Shower Cleaning', 'Reception Cleaning', 'Overnight Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Local Teams · Fast Response · All Sydney</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Gym Cleaning Near Me — Sydney&apos;s Local Fitness Cleaning Specialists
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers gym cleaning near you</strong> across all Sydney suburbs — with local teams who know your area, fixed monthly pricing and scheduling that works around your classes and member hours.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Local Sydney Teams', 'After-Hours Service', 'Fixed Monthly Price', 'Start Within 5 Days', 'No Lock-In Contract'].map((b, i) => (
                  <span key={i} className="bg-white/15 border border-white/25 text-white text-sm px-3 py-1.5 rounded-lg">✓ {b}</span>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/gym.jpg"
                alt="Gym cleaning near me Sydney"
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
            <strong>Gym cleaning near you in Sydney starts with Pro Clean Corp</strong> — local teams across every suburb, fixed monthly pricing, and scheduling built around your gym&apos;s operating hours. Equipment disinfection, changeroom deep-clean, floor mopping and sanitiser restocking — covered on every visit.
          </p>
        </div>
      </section>

      {/* Gym Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Gym Cleaning for Every Fitness Venue Near You</h2>
          <p className="text-center text-gray-600 mb-12">From large commercial gyms to boutique studios — we have the right protocol for your venue.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gymTypes.map((gym, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-darkblue mb-2">{gym.type}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{gym.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + Image */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/hero3.jpg"
                alt="Professional gym cleaning Sydney"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-8">Why Sydney Gym Operators Choose Pro Clean Corp</h2>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { stat: '48hrs', label: 'Time to on-site assessment' },
                  { stat: '5 days', label: 'Time to first clean after sign-off' },
                  { stat: '4.8★', label: 'Average rating across 1,200+ reviews' },
                  { stat: '$20M', label: 'Public liability insurance cover' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 text-center shadow-sm">
                    <div className="text-3xl font-black text-blueprimary mb-1">{item.stat}</div>
                    <div className="text-gray-600 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6 text-sm leading-relaxed">
                Our gym cleaning teams are trained in fitness facility hygiene protocols — understanding the unique requirements of rubber flooring, cable machines, free weights and high-humidity changeroom environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Gym Cleaning Near Me</h2>
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
          <h2 className="text-3xl font-bold mb-4">Get Gym Cleaning Near You — Free On-Site Quote</h2>
          <p className="text-xl text-blue-100 mb-8">Local team assessment within 48 hours. Fixed pricing, no lock-in contracts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
