import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Penrith | ProCleanCorp Fitness Cleaning',
  description: 'Professional gym and fitness centre cleaning in Penrith from $45/hr. Disinfection of equipment, locker rooms and studios. Fully insured. Free quote today.',
  keywords: 'gym cleaning penrith, fitness centre cleaning penrith, gym cleaners penrith, sports centre cleaning penrith, gym disinfection penrith, crossfit cleaning penrith, gym cleaning western sydney',
  openGraph: {
    title: 'Gym Cleaning Penrith | ProCleanCorp Fitness Cleaning',
    description: 'Professional gym and fitness centre cleaning in Penrith from $45/hr. Equipment disinfection, locker rooms, studios. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-penrith',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning Penrith fitness centre' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-penrith' }
};

const faqs = [
  {
    question: 'How often should a Penrith gym be professionally cleaned?',
    answer: 'For a busy Penrith gym, we recommend daily cleaning of locker rooms, showers and high-touch equipment surfaces, with a full equipment deep-clean 2-3 times per week. Penrith\'s proximity to the Blue Mountains means higher ambient humidity — which increases mould risk in change rooms and requires more frequent wet area treatment than eastern Sydney gyms.'
  },
  {
    question: 'What disinfectants do you use on gym equipment in Penrith?',
    answer: 'ProCleanCorp uses TGA-approved, hospital-grade disinfectants that are effective against bacteria, viruses, fungi and MRSA — the pathogens most common in gym environments. All products are tested to be safe on equipment finishes including rubber grips, vinyl upholstery, touchscreens and powder-coated steel. We do not use bleach-based products that degrade equipment surfaces over time.'
  },
  {
    question: 'Can you clean our Penrith gym before 5am opening?',
    answer: 'Yes. ProCleanCorp provides early morning gym cleaning in Penrith starting from 3am if required. We schedule cleaning during your lowest-traffic window to ensure the facility is spotless before your first members arrive. We are familiar with 24-hour and early-opening gyms across Western Sydney and can accommodate any start time.'
  }
];

export default function GymCleaningPenrithPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Penrith"
        serviceDescription="Specialist gym cleaning in Penrith from $45 per hour, covering equipment disinfection, locker rooms, wet areas and studio floors for gyms and fitness centres of all sizes."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-penrith"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Equipment Disinfection', 'Locker Room Cleaning', 'Wet Area Cleaning', 'Studio Floor Cleaning', 'Early Morning Cleaning', 'TGA-Approved Disinfectants']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Penrith & Western Sydney Gym Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Penrith — Fitness Centre Cleaners from $45/hr
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides specialist gym cleaning in Penrith from $45/hr — TGA-approved disinfectants, early morning starts, locker room specialists. Mould-prevention protocols for Penrith's higher-humidity environment.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $45/hr &nbsp;|&nbsp; ✓ From 3am Available &nbsp;|&nbsp; ✓ TGA-Approved Products</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym cleaning Penrith fitness centre"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides specialist gym cleaning in Penrith from $45 per hour</strong>, covering equipment disinfection, locker rooms, wet areas and studio floors for gyms and fitness centres of all sizes. Penrith's proximity to the Blue Mountains creates higher humidity — our mould-prevention protocols specifically address this local risk.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Gym Cleaning in Penrith</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Penrith is a fast-growing fitness market with big-box gyms, boutique studios, CrossFit boxes and council leisure centres. Clean gyms retain members — and in Penrith's competitive fitness market, hygiene is a direct factor in member acquisition and Google reviews.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Penrith's proximity to the Blue Mountains creates higher ambient humidity compared to eastern Sydney — which increases mould risk in change rooms and requires more frequent wet area treatment and anti-fungal protocols. ProCleanCorp's Penrith gym cleaning program specifically addresses this with scheduled mould-prevention treatments in all wet areas.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Penrith Gym Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Equipment wipe-down & disinfection', 'Locker room & shower deep clean', 'Wet area mould prevention', 'Rubber floor scrubbing', 'Group fitness studio cleaning', 'Reception & café area cleaning', 'Mirror cleaning & streak-free polish', 'HVAC vent dusting', 'Cardio zone sanitisation', 'Free weights area cleaning', 'Early morning scheduling', 'TGA-approved disinfectants'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'TGA-Approved Disinfectants', desc: 'Hospital-grade products killing MRSA, E. coli and fungi — the pathogens that matter most in Penrith gym environments.' },
                  { title: 'Mould Prevention Protocols', desc: 'Scheduled anti-fungal treatment for wet areas addressing Penrith\'s higher humidity risk.' },
                  { title: 'Early Morning Access', desc: 'Cleaning from 3am — your gym is clean before the 5am rush.' },
                  { title: 'Member Retention Focus', desc: 'Clean gyms keep members. Our work directly impacts your Penrith gym\'s reviews and retention rate.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-greenprimary pl-4">
                    <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Penrith Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Penrith', 'Kingswood', 'St Marys', 'Werrington', 'Glenmore Park', 'Emu Plains', 'Jamisontown', 'South Penrith'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">From $45/hr. On-site gym assessment.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Penrith</h3>
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
                { label: 'Commercial Cleaning Penrith', href: '/commercial-cleaning-penrith' },
                { label: 'Gym Cleaning Wetherill Park', href: '/gym-cleaning-wetherill-park' },
                { label: 'Gym Cleaning Cost Sydney', href: '/gym-cleaning-cost' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Gym Cleaning Penrith — From $45/hr</h3>
            <p className="text-xl mb-4 text-gray-100">TGA-approved disinfectants. Early morning starts. Free gym assessment.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
