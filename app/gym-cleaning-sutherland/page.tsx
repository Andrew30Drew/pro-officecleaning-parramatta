import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Sutherland Shire | ProCleanCorp',
  description: 'Specialist gym and fitness centre cleaning across the Sutherland Shire. Cronulla to Miranda. Equipment sanitation, wet areas, studios. Free quote today.',
  keywords: 'gym cleaning sutherland shire, fitness centre cleaning sutherland shire, gym cleaners cronulla, gym cleaning miranda, beach gym cleaning sydney, gym cleaning caringbah, gym cleaning kirrawee',
  openGraph: {
    title: 'Gym Cleaning Sutherland Shire | ProCleanCorp',
    description: 'Specialist gym cleaning across the Sutherland Shire — Cronulla to Miranda. Equipment sanitation, wet areas, studios. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-sutherland',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning Sutherland Shire fitness centre' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-sutherland' }
};

const faqs = [
  {
    question: 'Do you clean gyms in Cronulla and Miranda?',
    answer: 'Yes. ProCleanCorp services gyms and fitness centres throughout the Sutherland Shire including Cronulla, Miranda, Caringbah, Kirrawee, Sutherland and Engadine. We cover the full Shire from the beachside studios in Cronulla to the commercial gym precincts in Miranda and Caringbah.'
  },
  {
    question: 'How do you handle wet area cleaning for beach-adjacent gyms in the Sutherland Shire?',
    answer: 'Coastal gyms in the Sutherland Shire — particularly in Cronulla and surrounding beachside suburbs — face elevated salt-air corrosion and higher humidity in change rooms and showers. ProCleanCorp applies sodium hypochlorite-based protocols for wet area sanitation, anti-fungal treatments to prevent mould growth accelerated by salt air, and uses products that protect surface finishes from accelerated coastal degradation.'
  },
  {
    question: 'Can you provide gym cleaning for our council leisure centre in the Sutherland Shire?',
    answer: 'Yes. ProCleanCorp has experience with council leisure centre cleaning across the Sutherland Shire. We provide compliance documentation, cleaning logs and service reports suitable for Sutherland Shire Council procurement and contract management requirements.'
  }
];

export default function GymCleaningSutherlandPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Sutherland Shire"
        serviceDescription="Specialist gym cleaning across the Sutherland Shire, covering fitness centres in Cronulla, Miranda, Caringbah and Kirrawee with TGA-approved products and daily or weekly programs."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-sutherland"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Coastal Gym Cleaning', 'Salt Air Wet Area Protocols', 'Equipment Disinfection', 'Locker Room Cleaning', 'Council Leisure Centre Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Sutherland Shire Gym & Fitness Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Sutherland Shire — Fitness Centre Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers gym cleaning across the Sutherland Shire — Cronulla, Miranda, Caringbah and Kirrawee. Salt-air wet area protocols for coastal gyms. TGA-approved disinfectants, early morning access.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Coastal Gym Specialists &nbsp;|&nbsp; ✓ From $45/hr &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym cleaning Sutherland Shire fitness centre"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers gym cleaning across the Sutherland Shire</strong>, covering fitness centres in Cronulla, Miranda, Caringbah and Kirrawee with TGA-approved products and daily or weekly programs. Coastal gyms need specific salt-air wet area protocols — we address this where most cleaners don't.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Gym Cleaning across the Sutherland Shire</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The Sutherland Shire is a strong fitness market with a beach-culture demographic that prioritises health, cleanliness and premium gym experiences. Cronulla's coastal gyms, Miranda's commercial fitness centres and the growing boutique studio market across Caringbah and Kirrawee all require specialist cleaning services.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Coastal Sutherland Shire gyms face a specific challenge: salt air accelerates corrosion and moisture accumulation in change rooms and showers. ProCleanCorp applies sodium hypochlorite-based wet area protocols and anti-fungal treatments that address this risk — protecting your facility's surfaces and maintaining the hygiene standard your beach-culture members expect.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Sutherland Shire Gym Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Equipment disinfection & wipe-down', 'Locker room & shower deep clean', 'Salt-air wet area protocols', 'Anti-fungal mould prevention', 'Rubber floor scrubbing', 'Studio cleaning', 'Reception & café area', 'TGA-approved disinfectants', 'Early morning scheduling', 'Council leisure centre docs', 'Weekly & daily programs', 'Mirror & glass cleaning'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Sutherland Shire Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Cronulla', 'Miranda', 'Caringbah', 'Kirrawee', 'Sutherland', 'Engadine', 'Gymea', 'Hurstville'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Free gym assessment. Sutherland Shire coverage.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Sutherland Shire</h3>
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
                { label: 'Gym Cleaning Campbelltown', href: '/gym-cleaning-campbelltown' },
                { label: 'Commercial Cleaning Sutherland', href: '/commercial-cleaning-sutherland' },
                { label: 'Gym Cleaning Kogarah', href: '/gym-cleaning-kogarah' },
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Gym Cleaning Sutherland Shire — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Coastal protocols for beach-adjacent gyms. Cronulla to Miranda coverage.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
