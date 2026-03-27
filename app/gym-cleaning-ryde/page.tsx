import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Ryde | ProCleanCorp North Sydney',
  description: 'Gym and fitness centre cleaning in Ryde for boutique studios, big-box gyms and council leisure centres. Eco-friendly disinfection. Free quote in 24 hours.',
  keywords: 'gym cleaning ryde, fitness centre cleaning ryde, gym cleaners ryde, gym cleaning top ryde, meadowbank gym cleaning, north sydney gym cleaning, 24 hour gym cleaning ryde',
  openGraph: {
    title: 'Gym Cleaning Ryde | ProCleanCorp North Sydney',
    description: 'Gym and fitness centre cleaning in Ryde. Boutique studios, big-box gyms, council leisure centres. Eco-friendly disinfection. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-ryde',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning Ryde North Sydney fitness centre' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-ryde' }
};

const faqs = [
  {
    question: 'Do you clean 24-hour gyms in Ryde with late-night access?',
    answer: 'Yes. ProCleanCorp provides cleaning for 24-hour gyms in Ryde and Meadowbank. We schedule major deep cleans during the lowest-traffic window (typically 2am-5am) and work quietly and efficiently without disrupting members using the gym during that period. Staff are trained to operate in live gym environments without incident.'
  },
  {
    question: 'What disinfection standards do you apply for gym equipment in Ryde?',
    answer: 'We use TGA-approved, hospital-grade disinfectants for all Ryde gym equipment — effective against bacteria, viruses, fungi and MRSA. Products are tested safe on rubber grips, vinyl upholstery, touchscreens and powder-coated steel. We provide disinfection logs on request for quality assurance and member communication purposes.'
  },
  {
    question: 'Do you service leisure centres at Meadowbank?',
    answer: 'Yes. ProCleanCorp services leisure centres and community fitness facilities at Meadowbank, Shepherd\'s Bay and Top Ryde. We are familiar with the Ryde City Council precinct and can provide compliance documentation suitable for council facility management requirements.'
  }
];

export default function GymCleaningRydePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Ryde"
        serviceDescription="Professional gym cleaning in Ryde, servicing fitness centres from Top Ryde through to Meadowbank, with hospital-grade disinfectants and flexible shift access."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-ryde"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['24-Hour Gym Cleaning', 'Equipment Disinfection', 'Locker Room Cleaning', 'Council Leisure Centre Cleaning', 'Boutique Studio Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Ryde & Meadowbank Gym Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Ryde — Commercial Fitness Centre Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers professional gym cleaning in Ryde — servicing fitness centres from Top Ryde to Meadowbank, 24-hour gyms, boutique studios and council leisure centres with hospital-grade disinfectants.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ 24hr Gyms Welcome &nbsp;|&nbsp; ✓ From $45/hr &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym cleaning Ryde fitness centre North Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers professional gym cleaning in Ryde</strong>, servicing fitness centres from Top Ryde through to Meadowbank, with hospital-grade disinfectants and flexible shift access. Ryde's young-professional demographic drives a surge of boutique fitness studios and 24-hour gyms — cleanliness is a key member retention factor.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Gym & Fitness Cleaning in Ryde</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Ryde's demographic skews young-professional and health-focused — driving a surge of boutique fitness studios and 24-hour gyms in the Top Ryde and Meadowbank precinct. For these gyms, cleanliness directly impacts member retention and Google review scores.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp services all fitness facility types in Ryde — from large-format 24-hour gyms requiring overnight deep cleans, to boutique F45, pilates and yoga studios with smaller footprints and premium presentation standards, to council leisure centres with specific compliance requirements.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Ryde Gym Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['24-hour gym overnight cleaning', 'Equipment disinfection', 'Locker room & shower cleaning', 'Rubber floor scrubbing', 'Boutique studio cleaning', 'Council leisure centre cleaning', 'Reception & café area', 'Mirror & glass cleaning', 'Early morning scheduling', 'Disinfection log provision', 'Weekly & daily programs', 'Hospital-grade disinfectants'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Ryde Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Top Ryde', 'Meadowbank', "Shepherd's Bay", 'West Ryde', 'Eastwood', 'Putney', 'Ermington', 'Rydalmere'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Free gym assessment. Ryde & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Ryde</h3>
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
                { label: 'Medical Cleaning Ryde', href: '/medical-cleaning-ryde' },
                { label: 'Gym Cleaning Macquarie Park', href: '/gym-cleaning-macquarie-park' },
                { label: 'Commercial Cleaning Ryde', href: '/commercial-cleaning-ryde' },
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Gym Cleaning Ryde — Free Quote Today</h3>
            <p className="text-xl mb-4 text-gray-100">24-hour gyms, boutique studios and council leisure centres. Hospital-grade disinfectants.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
