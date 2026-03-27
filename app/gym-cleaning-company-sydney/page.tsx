import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Company Sydney | Certified Fitness Centre Cleaners | ProCleanCorp',
  description: 'ProCleanCorp — Sydney\'s specialist gym cleaning company. TGA-approved disinfectants, trained staff, hygiene certifications, member hygiene metrics. Servicing gyms across Greater Sydney. Free quote.',
  keywords: 'gym cleaning company sydney, gym cleaning companies sydney, gym cleaning services company, fitness centre cleaning company sydney, professional gym cleaners sydney',
  openGraph: {
    title: 'Gym Cleaning Company Sydney | Certified Fitness Centre Cleaners | ProCleanCorp',
    description: 'ProCleanCorp — Sydney\'s specialist gym cleaning company. TGA-approved disinfectants, certifications, member hygiene metrics. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-company-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning company Sydney fitness centre' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-company-sydney' }
};

const faqs = [
  {
    question: 'What makes ProCleanCorp different from a standard commercial cleaning company for gym cleaning?',
    answer: 'Standard commercial cleaning companies treat gyms like offices — mop the floor, wipe the benches, empty the bins. ProCleanCorp\'s gym cleaning teams are trained specifically for fitness environments: rubber floor cleaning protocols (pH-neutral, no bleach), equipment surface rotation to prevent adaptive pathogen resistance, locker room colour-coded disinfection systems, and pre-opening scheduling so the gym is always ready before doors open. We also provide TGA-registered disinfectant documentation and member hygiene metric reporting that standard cleaners cannot offer.'
  },
  {
    question: 'Are your gym cleaners trained in fitness centre hygiene standards?',
    answer: 'Yes. All ProCleanCorp gym cleaning staff receive specific training in fitness centre cleaning protocols: rubber floor care, equipment surface disinfection sequence, locker room and wet area hygiene, and correct use of TGA-registered products at specified dilutions. Our gym cleaning teams understand the operational rhythm of a fitness centre — peak hours, class schedules, equipment access restrictions — and work around them without disrupting member experience.'
  },
  {
    question: 'Can you provide hygiene certifications for our gym?',
    answer: 'Yes. ProCleanCorp provides documented cleaning and sanitisation records, TGA product data sheets, and formal hygiene certificates suitable for franchise compliance audits, council inspections and member-facing hygiene transparency programs. We can also provide a "Member Hygiene Commitment" certificate that some gym operators use in membership sales material.'
  },
  {
    question: 'Do you service gym chains and franchises across multiple Sydney locations?',
    answer: 'Yes. ProCleanCorp manages multi-location gym cleaning contracts across Sydney, with standardised cleaning SOPs, consistent product use and a single point of account management for franchise operators. We currently service gyms across Western Sydney, the Inner West, Eastern Suburbs, North Shore and the Hills District — and can scale to new locations with standardised onboarding.'
  }
];

export default function GymCleaningCompanySydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Company Sydney"
        serviceDescription="ProCleanCorp is Sydney's specialist gym cleaning company. TGA-approved disinfectants, trained staff, hygiene certifications and member hygiene metrics for fitness centres across Greater Sydney."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-company-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Gym Equipment Cleaning', 'Rubber Floor Cleaning', 'Locker Room Disinfection', 'TGA Sanitisation Programs', 'Hygiene Certificates', 'Multi-Location Management']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Sydney's Gym Cleaning Specialists</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Company Sydney — Specialist Fitness Centre Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp is Sydney's specialist gym cleaning company — trained staff, TGA-approved disinfectants, member hygiene metrics and hygiene certifications for fitness centres, CrossFit boxes, yoga studios and gym chains across Greater Sydney.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Gym-Trained Staff &nbsp;|&nbsp; ✓ TGA-Approved Products &nbsp;|&nbsp; ✓ Hygiene Certificates Available</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym cleaning company Sydney fitness centre"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp is a specialist gym cleaning company servicing fitness centres across Greater Sydney</strong> — from boutique CrossFit boxes and yoga studios to 24-hour commercial gyms and multi-location franchise chains. Our gym cleaning teams are trained in fitness-specific protocols, use TGA-registered disinfectants, and provide hygiene certifications and member hygiene metric reporting that standard commercial cleaners cannot offer.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Gyms Choose ProCleanCorp</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Gym cleaning is a specialist discipline. The combination of rubber flooring (which degrades with the wrong products), shared sweat-contact equipment, high-humidity locker rooms, and a client base with above-average health consciousness creates a cleaning challenge that requires specific knowledge — not just a mop and bucket. ProCleanCorp has built our gym cleaning programme around what gym owners actually need: consistent pre-opening cleans, TGA-documented disinfection, and the kind of hygiene standards that members notice and appreciate.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Our Gym Cleaning Credentials</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { credential: '$20M Public Liability Insurance', detail: 'Full coverage for gym environments including equipment and member areas' },
                    { credential: 'Police-Checked Staff', detail: 'All cleaners hold current police clearances — required for early-morning gym access' },
                    { credential: 'TGA-Registered Products', detail: 'All disinfectants carry ARTG listing numbers — documented for franchise compliance' },
                    { credential: 'Gym-Specific Training', detail: 'Staff trained in rubber floor care, equipment surfaces and locker room protocols' },
                    { credential: 'Hygiene Certificates', detail: 'Formal certificates for council inspections and franchise compliance audits' },
                    { credential: 'No Lock-In Contracts', detail: 'Month-to-month agreements — most clients stay long-term by choice' },
                  ].map((c, i) => (
                    <div key={i} className="border-l-4 border-greenprimary pl-4">
                      <h4 className="font-semibold text-darkblue text-sm mb-1">{c.credential}</h4>
                      <p className="text-gray-600 text-xs">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-3">Gym Areas We Service</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Weight floor', 'Cardio zone', 'Free weights area', 'Functional training zone', 'Group fitness studio', 'Yoga & Pilates studio', 'Locker rooms', 'Shower areas', 'Wet change rooms', 'Reception & entry', 'Equipment storage', 'Café & member lounge'].map((area, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Gym Suburbs We Service</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Sydney CBD & Inner City', 'Eastern Suburbs', 'Inner West', 'North Shore', 'Western Sydney', 'Hills District', 'Sutherland Shire', 'Parramatta & surrounds'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site gym assessment. Fixed weekly or daily pricing.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Company Sydney</h3>
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
                { label: 'Gym Floor Cleaning Sydney', href: '/gym-floor-cleaning-sydney' },
                { label: 'Gym Cleaning Eastern Suburbs', href: '/gym-cleaning-eastern-suburbs' },
                { label: 'Gym Cleaning Penrith', href: '/gym-cleaning-penrith' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Gym Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Gym-trained staff. TGA-registered products. Hygiene certificates available. Free on-site assessment within 24 hours.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
