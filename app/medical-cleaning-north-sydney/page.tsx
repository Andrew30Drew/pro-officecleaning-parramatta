import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning North Sydney | ProCleanCorp',
  description: 'Clinical-grade medical centre cleaning in North Sydney. AHPRA-aware protocols, TGA-approved disinfectants. Serving GPs, specialists and allied health. Free quote.',
  keywords: 'medical cleaning north sydney, medical centre cleaning north sydney, clinical cleaning north sydney, GP practice cleaning north sydney, specialist clinic cleaning north sydney, AHPRA cleaning north sydney',
  openGraph: {
    title: 'Medical Cleaning North Sydney | ProCleanCorp',
    description: 'Clinical-grade medical centre cleaning in North Sydney. AHPRA-aware protocols, TGA-approved disinfectants. Free quote.',
    url: 'https://www.procleancorp.com.au/medical-cleaning-north-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical cleaning North Sydney clinical grade' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-cleaning-north-sydney' }
};

const faqs = [
  {
    question: "Do you clean specialist medical suites in North Sydney's Miller Street precinct?",
    answer: "Yes. ProCleanCorp services specialist medical suites throughout North Sydney's Miller Street commercial precinct, including cardiologists, psychologists, physiotherapy practices, dermatology clinics and allied health suites. Specialist suites have different cleaning requirements from GP practices — lower patient volume but higher infection control requirements in procedure and equipment areas. We apply zone-specific protocols for waiting areas, consultation rooms and any sterilisation zones."
  },
  {
    question: 'What infection control protocols do you use for medical centres in North Sydney?',
    answer: 'Our North Sydney medical cleaning program uses TGA-approved hospital-grade disinfectants for all high-contact surfaces, colour-coded microfibre systems to prevent cross-contamination between clinical and non-clinical zones, documented cleaning logs for AHPRA and practice accreditation compliance, and staff trained in standard infection control precautions. We align with the National Health and Medical Research Council (NHMRC) guidelines for cleaning healthcare environments.'
  },
  {
    question: 'Can you provide a medical cleaning schedule for our North Sydney practice manager?',
    answer: 'Yes. ProCleanCorp provides formal medical cleaning schedules including zone-by-zone cleaning frequency, product safety data sheets (SDS), staff qualifications, insurance certificates and visit logs — all in a format suitable for practice managers to file for AHPRA inspection readiness and accreditation purposes.'
  }
];

export default function MedicalCleaningNorthSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning North Sydney"
        serviceDescription="Clinical-grade medical centre cleaning in North Sydney using TGA-approved disinfectants and AHPRA-aware infection control protocols, covering GP practices, specialist suites and allied health clinics."
        serviceUrl="https://www.procleancorp.com.au/medical-cleaning-north-sydney"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['Specialist Suite Cleaning', 'AHPRA-Aware Protocols', 'TGA-Approved Disinfection', 'GP Practice Cleaning', 'Allied Health Cleaning', 'Infection Control Documentation']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">North Sydney Medical Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Medical Centre Cleaning North Sydney — Clinical Grade Hygiene
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers clinical-grade medical centre cleaning in North Sydney — AHPRA-aware protocols, TGA-approved disinfectants, documented infection control for GPs, specialists and allied health. Miller Street precinct specialists.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ AHPRA-Aware &nbsp;|&nbsp; ✓ TGA-Approved Disinfectants &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/medical.webp" alt="Medical cleaning North Sydney clinical grade"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers clinical-grade medical centre cleaning in North Sydney</strong> using TGA-approved disinfectants and AHPRA-aware infection control protocols, covering GP practices, specialist suites and allied health clinics. North Sydney's Miller Street medical strip hosts a high density of specialists — cardiologists, psychologists, physios — each requiring zone-specific cleaning protocols.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Clinical Medical Cleaning in North Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                North Sydney's Miller Street medical strip hosts one of Sydney's highest concentrations of specialist suites — cardiologists, psychologists, physiotherapy practices, dermatology clinics and allied health. These facilities have strict infection control requirements that generic office cleaners cannot meet.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp applies AHPRA-aware infection control protocols developed specifically for clinical environments: colour-coded microfibre systems to prevent cross-contamination, TGA-approved hospital-grade disinfectants on all clinical surfaces, documented cleaning logs for accreditation, and staff trained in standard infection control precautions aligned with NHMRC guidelines.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">North Sydney Medical Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Waiting room cleaning & disinfection', 'Consultation room protocols', 'Sterilisation zone cleaning', 'Colour-coded microfibre system', 'TGA-approved hospital disinfectants', 'AHPRA-aware documentation', 'Bathroom & amenity cleaning', 'Reception & admin area cleaning', 'High-touch disinfection', 'NHMRC-aligned protocols', 'After hours access', 'Infection control logs'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Compliance Standards</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ TGA-approved disinfectants</li>
                  <li>✓ AHPRA-aware protocols</li>
                  <li>✓ NHMRC guideline aligned</li>
                  <li>✓ Infection control logs</li>
                  <li>✓ SDS documentation provided</li>
                  <li>✓ Police-checked staff</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Clinical medical cleaning. North Sydney.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Medical Cleaning North Sydney</h3>
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
                { label: 'Medical Office Cleaning Sydney', href: '/medical-office-cleaning-sydney' },
                { label: 'Office Cleaning North Sydney', href: '/office-cleaning-north-sydney' },
                { label: 'Commercial Cleaning North Sydney', href: '/commercial-cleaning-north-sydney' },
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Clinical Medical Cleaning — North Sydney</h3>
            <p className="text-xl mb-4 text-gray-100">AHPRA-aware protocols. TGA-approved disinfectants. Free quote within 24 hours.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
