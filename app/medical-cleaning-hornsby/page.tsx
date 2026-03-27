import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning Hornsby | ProCleanCorp North Shore',
  description: 'Clinical medical centre cleaning in Hornsby for GP practices, specialist suites and pathology labs. Hospital-grade disinfection. Fully insured. Free quote.',
  keywords: 'medical cleaning hornsby, medical centre cleaning hornsby, pathology lab cleaning hornsby, specialist clinic cleaning hornsby, GP practice cleaning hornsby, hospital grade cleaning hornsby',
  openGraph: {
    title: 'Medical Cleaning Hornsby | ProCleanCorp North Shore',
    description: 'Clinical medical centre cleaning in Hornsby. Hospital-grade disinfection for GPs, specialist suites and pathology labs. Free quote.',
    url: 'https://www.procleancorp.com.au/medical-cleaning-hornsby',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical cleaning Hornsby North Shore clinical' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-cleaning-hornsby' }
};

const faqs = [
  {
    question: 'Do you clean pathology labs and specialist suites in Hornsby?',
    answer: 'Yes. ProCleanCorp provides cleaning for pathology collection centres and specialist medical suites in Hornsby. Pathology cleaning requires specific protocols for blood and specimen collection areas — including sporicidal disinfectants for bench surfaces, safe handling of potential biohazard spill areas, and strict colour-coded equipment segregation. We apply AS/NZS 4187 compatible cleaning protocols for all pathology environments.'
  },
  {
    question: 'What hospital-grade protocols do you apply for Hornsby medical centres?',
    answer: 'For Hornsby medical centres, we apply a hospital-grade cleaning standard using TGA-approved disinfectants at the manufacturer\'s recommended concentration, colour-coded microfibre systems to prevent cross-contamination between clinical zones, documented visit logs with product batch numbers for traceability, and staff trained in standard infection control precautions. All protocols align with NHMRC guidelines for cleaning healthcare environments.'
  },
  {
    question: 'Can you provide after-hours medical cleaning in Hornsby?',
    answer: 'Yes. ProCleanCorp provides after-hours medical cleaning in Hornsby — typically starting between 6pm-8pm after the last patient session, or early morning from 6am before opening. After-hours cleaning is standard for most Hornsby medical practices as it avoids any disruption to clinical operations and ensures clean facilities for the morning session.'
  }
];

export default function MedicalCleaningHornsbyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Hornsby"
        serviceDescription="ProCleanCorp provides medical centre cleaning in Hornsby with hospital-grade disinfection protocols, servicing GP practices, pathology labs and specialist suites in the Hornsby medical precinct."
        serviceUrl="https://www.procleancorp.com.au/medical-cleaning-hornsby"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['Pathology Lab Cleaning', 'Specialist Suite Cleaning', 'GP Practice Cleaning', 'Hospital-Grade Disinfection', 'After Hours Medical Cleaning', 'AS/NZS 4187 Protocols']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Hornsby Medical & Pathology Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Medical Centre Cleaning Hornsby — Clinical Hygiene for the North Shore
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides medical centre cleaning in Hornsby with hospital-grade disinfection protocols — GP practices, pathology labs and specialist suites in the Hornsby-Ku-ring-gai medical precinct.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Pathology Lab Specialists &nbsp;|&nbsp; ✓ Hospital-Grade Protocols &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Medical cleaning Hornsby North Shore pathology"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides medical centre cleaning in Hornsby</strong> with hospital-grade disinfection protocols, servicing GP practices, pathology labs and specialist suites in the Hornsby medical precinct. Hornsby Hospital drives a satellite economy of private clinics — we provide the contractor most familiar with hospital-standard infection control.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Medical Centre Cleaning in Hornsby</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Hornsby Hospital is one of NSW's busiest public hospitals, generating a large network of private specialist clinics, pathology collection centres and allied health facilities in the surrounding area. These facilities need a cleaning contractor that understands hospital-adjacent infection control — not a generic commercial cleaner.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp's Hornsby medical cleaning program is specifically designed for the pathology lab cleaning sub-niche — AS/NZS 4187 compatible protocols for bench surfaces, sporicidal disinfectants for specimen collection areas, and strict equipment segregation. This level of specificity wins tender contracts from practice managers who know what they're looking for.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Hornsby Medical Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['GP practice cleaning', 'Pathology collection area cleaning', 'Specialist suite protocols', 'Sporicidal disinfection', 'AS/NZS 4187 compatible protocols', 'Waiting room & reception cleaning', 'Bathroom & amenity maintenance', 'TGA-approved hospital disinfectants', 'Colour-coded microfibre system', 'After hours access', 'AHPRA compliance documentation', 'Police-checked staff'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-red-50 border border-red-100 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Pathology Standards</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ AS/NZS 4187 compatible</li>
                  <li>✓ Sporicidal disinfectants</li>
                  <li>✓ Biohazard zone protocols</li>
                  <li>✓ Strict equipment segregation</li>
                  <li>✓ AHPRA documentation</li>
                  <li>✓ After hours available</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Pathology & medical cleaning. Hornsby.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Medical Cleaning Hornsby</h3>
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
                { label: 'Medical Cleaning Norwest', href: '/medical-cleaning-norwest' },
                { label: 'Commercial Cleaning Hornsby', href: '/commercial-cleaning-hornsby' },
                { label: 'Office Cleaning Hornsby', href: '/office-cleaning-hornsby' },
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Medical Cleaning Hornsby — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Pathology lab specialists. Hospital-grade disinfection. AHPRA documentation.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
