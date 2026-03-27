import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Sterile Cleaning Services Sydney | Cleanroom & Laboratory Cleaning | ProCleanCorp',
  description: 'Specialist sterile cleaning in Sydney for cleanrooms, laboratories, pharmaceutical facilities and medical device environments. TGA/GMP compliance. ISO cleanroom standards. Free quote.',
  keywords: 'sterile cleaning services sydney, cleanroom cleaning sydney, laboratory cleaning sydney, pharmaceutical cleaning sydney, sterile environment cleaning, GMP cleaning sydney, TGA compliant cleaning',
  openGraph: {
    title: 'Sterile Cleaning Services Sydney | Cleanroom & Laboratory Cleaning | ProCleanCorp',
    description: 'Specialist sterile cleaning in Sydney for cleanrooms, labs, pharmaceutical and medical device environments. TGA/GMP compliance. Free quote.',
    url: 'https://www.procleancorp.com.au/sterile-cleaning-services-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Sterile cleaning services Sydney cleanroom laboratory' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/sterile-cleaning-services-sydney' }
};

const faqs = [
  {
    question: 'What is the difference between sterile cleaning and standard medical cleaning?',
    answer: 'Standard medical cleaning (GP practices, specialist suites) targets infection control for clinical environments — hospital-grade disinfectants, colour-coded equipment, documented schedules. Sterile cleaning goes further: it is designed for controlled environments where even trace contamination can compromise product integrity or research outcomes. Sterile cleaning requires validated cleaning agents, documented SOPs, personnel in appropriate PPE, and cleaning protocols verified against ISO 14644 cleanroom standards or TGA/GMP guidelines.'
  },
  {
    question: 'Do you provide GMP-compliant cleaning for pharmaceutical facilities in Sydney?',
    answer: 'Yes. ProCleanCorp provides GMP-aligned cleaning for pharmaceutical manufacturing, compounding pharmacies and medical device facilities in Sydney. Our cleaning SOPs are documented, our cleaning agents are validated (not just disinfectant-grade), and we maintain cleaning logs that satisfy TGA audit requirements. We work with your quality assurance team to ensure our cleaning programme integrates with your quality management system.'
  },
  {
    question: 'What ISO cleanroom classifications can you service?',
    answer: 'ProCleanCorp services ISO Class 7 and ISO Class 8 cleanrooms in research, manufacturing and pharmaceutical settings in Sydney. For ISO Class 5 and Class 6 environments, we work with the facility\'s contamination control officer to ensure our cleaning programme meets the specific particle count requirements for that classification. All cleaning in classified environments is conducted by staff with cleanroom entry training.'
  },
  {
    question: 'What cleaning agents do you use for sterile environments?',
    answer: 'We use validated sporicidal, bactericidal and virucidal cleaning agents appropriate for the contamination control requirements of each environment. Agents are rotated to prevent adaptive resistance. All products used in pharmaceutical and cleanroom environments are selected in consultation with the client\'s QA team and documented in the cleaning SOP. We do not use fragrance or residue-leaving products in sterile environments.'
  }
];

export default function SterileCleaningServicesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Sterile Cleaning Services Sydney"
        serviceDescription="Specialist sterile cleaning for cleanrooms, laboratories, pharmaceutical facilities and medical device environments in Sydney. TGA/GMP compliance, ISO cleanroom standards, documented SOPs."
        serviceUrl="https://www.procleancorp.com.au/sterile-cleaning-services-sydney"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['Cleanroom Cleaning', 'Laboratory Cleaning', 'Pharmaceutical Facility Cleaning', 'Medical Device Environment Cleaning', 'GMP-Aligned Cleaning', 'ISO 14644 Compliant Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Cleanroom · Laboratory · Pharmaceutical</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Sterile Cleaning Services Sydney — Cleanroom, Laboratory & Pharmaceutical Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers TGA/GMP-aligned sterile cleaning for cleanrooms, pharmaceutical facilities, medical device environments and research laboratories across Sydney — with documented SOPs and validated cleaning agents.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ TGA/GMP Compliant &nbsp;|&nbsp; ✓ ISO Cleanroom Standards &nbsp;|&nbsp; ✓ Documented SOPs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/medical.webp" alt="Sterile cleaning services Sydney cleanroom laboratory"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Sterile cleaning is distinct from standard medical cleaning</strong> — it requires validated cleaning agents, documented SOPs, classified PPE and protocols verified against ISO 14644 cleanroom standards or TGA/GMP guidelines. ProCleanCorp provides specialist sterile cleaning for cleanrooms, laboratories, pharmaceutical manufacturing and medical device facilities across Sydney, with cleaning logs maintained for TGA audit readiness.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Sterile Cleaning for Controlled Environments in Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                In cleanroom, laboratory and pharmaceutical environments, cleaning is not simply about hygiene — it is a critical quality control process. A contamination event caused by incorrect cleaning can compromise batch integrity, invalidate research results, or trigger a TGA regulatory action. ProCleanCorp's sterile cleaning teams are trained in contamination control principles, use validated cleaning agents and maintain documentation to the standard your quality system requires.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our cleaning SOPs are developed in collaboration with your quality assurance team, not imposed from outside. We understand that each facility has unique contamination control requirements — a pharmaceutical compounding cleanroom has different cleaning demands to a university research lab or a medical device packaging room — and we build the programme accordingly.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Sterile Environments We Service</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { env: 'ISO Class 7–8 Cleanrooms', detail: 'Pharmaceutical manufacturing, medical device packaging, electronics assembly' },
                    { env: 'Research Laboratories', detail: 'University labs, R&D facilities, pathology, molecular biology' },
                    { env: 'Pharmaceutical Facilities', detail: 'Compounding pharmacies, manufacturing suites, QC labs' },
                    { env: 'Medical Device Environments', detail: 'Device assembly, sterile packaging, testing suites' },
                    { env: 'Biotech & Life Sciences', detail: 'Cell culture rooms, fermentation facilities, analytical labs' },
                    { env: 'Hospital Sterile Services', detail: 'CSSD support areas, sterile storage, prep rooms' },
                  ].map((e, i) => (
                    <div key={i} className="border-l-4 border-greenprimary pl-4">
                      <h4 className="font-semibold text-darkblue text-sm mb-1">{e.env}</h4>
                      <p className="text-gray-600 text-xs">{e.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Validated Cleaning Agents', desc: 'Sporicidal, bactericidal and virucidal agents rotated to prevent adaptive resistance. Selected in consultation with your QA team.' },
                  { title: 'Documented SOPs', desc: 'All cleaning procedures documented in client-approved SOPs. Cleaning logs maintained for TGA audit readiness.' },
                  { title: 'Cleanroom-Trained Staff', desc: 'Staff trained in cleanroom gowning, contamination control procedures and GMP principles before any classified room entry.' },
                  { title: 'ISO 14644 Alignment', desc: 'Cleaning protocols designed to support the particle count requirements of ISO Class 7 and Class 8 environments.' }
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
                <h4 className="font-bold text-darkblue mb-3">Compliance Standards</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['TGA GMP Guidelines', 'ISO 14644 Cleanroom Standards', 'AS/NZS 4187', 'NHMRC Infection Control', 'PIC/S GMP Guide', 'Client QA SOPs'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Specialist Quote</h4>
                <p className="text-sm mb-3 text-gray-300">Cleanroom and pharmaceutical cleaning is quoted after a site assessment and review of your contamination control requirements.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Sterile Cleaning Services Sydney</h3>
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
                { label: 'Medical Grade Cleaning Sydney', href: '/medical-grade-cleaning-sydney' },
                { label: 'Hospital Grade Cleaning Sydney', href: '/hospital-grade-cleaning-sydney' },
                { label: 'Medical Office Cleaning Sydney', href: '/medical-office-cleaning-sydney' },
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Sterile Cleaning Assessment</h3>
            <p className="text-xl mb-4 text-gray-100">Site assessment included. Cleaning programme developed with your QA team.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
