import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Hurstville | ProCleanCorp South Sydney',
  description: 'Professional gym and fitness centre cleaning in Hurstville. TGA-approved disinfectants, locker room hygiene specialists, early morning access. Free quote.',
  keywords: 'gym cleaning hurstville, fitness centre cleaning hurstville, gym cleaners hurstville, south sydney gym cleaning, gym cleaning beverly hills, gym cleaning st george',
  openGraph: {
    title: 'Gym Cleaning Hurstville | ProCleanCorp South Sydney',
    description: 'Professional gym and fitness centre cleaning in Hurstville. TGA-approved disinfectants, early morning access. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-hurstville',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning Hurstville South Sydney fitness centre' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-hurstville' }
};

const faqs = [
  {
    question: 'Do you clean gyms in Hurstville and Beverly Hills?',
    answer: 'Yes. ProCleanCorp services gyms and fitness centres throughout the St George area including Hurstville, Beverly Hills, Penshurst, Peakhurst, Mortdale and surrounding suburbs. We operate a regular cleaning route through the Hurstville commercial precinct and can cover multiple nearby gyms efficiently.'
  },
  {
    question: 'Can your cleaners start at 4:30am before gym opening in Hurstville?',
    answer: 'Yes. ProCleanCorp provides early morning gym cleaning in Hurstville starting from 3am if required. For gyms with a 5am opening, we typically arrive at 3:30-4am to ensure all areas are cleaned, dried and ready before the first members arrive. All early morning cleaning staff are trained to work quietly and without disruption.'
  },
  {
    question: 'What hygiene certificates can you provide for our Hurstville gym?',
    answer: 'ProCleanCorp provides cleaning compliance documentation including visit logs, product safety data sheets (SDS) for all cleaning chemicals used, and formal cleaning compliance letters suitable for fitness centre insurance, council inspections and lease documentation. TGA certification details for all disinfectants used are available on request.'
  }
];

export default function GymCleaningHurstvillePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Hurstville"
        serviceDescription="Professional gym cleaning in Hurstville covering all fitness centre zones from the weight floor to wet change rooms, using TGA-approved disinfectants and flexible pre-opening scheduling."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-hurstville"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Equipment Disinfection', 'Locker Room Cleaning', 'Early Morning Cleaning', 'Hygiene Compliance Documentation', 'Wet Area Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Hurstville & St George Gym Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Hurstville — South Sydney Fitness Centre Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides professional gym cleaning in Hurstville — TGA-approved disinfectants, early morning starts from 3am, compliance documentation. Serving the high-hygiene-expectation fitness market in the St George area.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From 3am Available &nbsp;|&nbsp; ✓ Hygiene Certs Provided &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym cleaning Hurstville South Sydney fitness centre"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides professional gym cleaning in Hurstville</strong> covering all areas from the equipment floor to locker rooms, using TGA-approved disinfectants and flexible pre-opening scheduling. Hurstville's multicultural fitness market has high hygiene expectations — cleanliness is a key member acquisition and retention tool.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Gym Cleaning in Hurstville</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Hurstville is a multicultural commercial hub with a growing fitness market driven by a gym culture with high hygiene expectations. For gyms in Hurstville, cleanliness is a direct member acquisition tool — prospective members judge a gym by its changing rooms and equipment hygiene before they sign up.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp provides pre-opening gym cleaning in Hurstville from 3am, TGA-approved disinfectants for all equipment and wet areas, and compliance documentation that gym owners can display or provide to members and inspectors as evidence of their hygiene standard.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Hurstville Gym Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Equipment wipe-down & disinfection', 'Locker room & shower deep clean', 'Rubber floor scrubbing', 'Group fitness studio cleaning', 'Cardio zone sanitisation', 'Reception & café area', 'TGA-approved disinfectants', 'Early morning from 3am', 'Hygiene compliance documentation', 'Mirror & glass cleaning', 'Weekly & daily programs', 'Bin removal & recycling'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">St George Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Hurstville', 'Beverly Hills', 'Penshurst', 'Peakhurst', 'Mortdale', 'Oatley', 'Kogarah', 'Carlton'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Free gym assessment. Hurstville & St George.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Hurstville</h3>
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
                { label: 'Gym Cleaning Kogarah', href: '/gym-cleaning-kogarah' },
                { label: 'Commercial Cleaning Hurstville', href: '/commercial-cleaning-hurstville' },
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
                { label: 'Gym Cleaning Cost Sydney', href: '/gym-cleaning-cost' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Gym Cleaning Hurstville — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Early morning starts, TGA-approved disinfectants, hygiene compliance documentation.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
