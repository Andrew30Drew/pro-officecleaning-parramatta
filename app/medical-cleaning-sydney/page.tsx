import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning Sydney | Hospital-Grade Healthcare Cleaning NSW | Pro Clean Corp',
  description: 'Specialist medical cleaning services in Sydney. Hospital-grade disinfection for GP clinics, dental practices, specialist centres, and allied health facilities. Compliant with AS/NZS standards. Call 1300 494 983.',
  keywords: [
    'medical cleaning Sydney',
    'medical cleaning services Sydney',
    'hospital grade cleaning Sydney',
    'GP clinic cleaning Sydney',
    'dental clinic cleaning Sydney',
    'medical facility cleaning NSW',
    'healthcare cleaning Sydney',
    'Pro Clean Corp medical'
  ],
  openGraph: {
    title: 'Medical Cleaning Sydney | Pro Clean Corp',
    description: 'Hospital-grade medical cleaning for Sydney GP clinics, dental practices, specialist centres and allied health. AS/NZS compliant protocols.',
    url: '/medical-cleaning-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical Cleaning Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Cleaning Sydney | Pro Clean Corp',
    description: 'Specialist medical cleaning in Sydney. Hospital-grade disinfection for all healthcare facility types.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/medical-cleaning-sydney' }
};

const medicalSuburbs = [
  { name: 'North Sydney', slug: 'medical-cleaning-north-sydney' },
  { name: 'Hornsby', slug: 'medical-cleaning-hornsby' },
  { name: 'Hurstville', slug: 'medical-cleaning-hurstville' },
  { name: 'Eastern Suburbs', slug: 'medical-cleaning-eastern-suburbs' },
  { name: 'Campbelltown', slug: 'medical-cleaning-campbelltown' },
  { name: 'Medical Grade Sydney', slug: 'medical-grade-cleaning-sydney' },
  { name: 'Medical Centre', slug: 'medical-centre-cleaning' },
  { name: 'Hospital Grade Services', slug: 'hospital-grade-cleaning-services' },
];

export default function MedicalCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Sydney"
        serviceDescription="Specialist medical cleaning services in Sydney NSW using hospital-grade disinfectants and AS/NZS-compliant protocols for GP clinics, dental practices, specialist centres, and allied health facilities."
        serviceUrl="/medical-cleaning-sydney"
        serviceType="Medical & Healthcare Cleaning"
        price="$$$"
        additionalServices={[
          'GP Clinic & Medical Centre Cleaning',
          'Dental Practice Disinfection',
          'Specialist Consulting Suite Cleaning',
          'Allied Health Facility Cleaning',
          'Treatment Room Terminal Clean',
          'Medical Waste Area Cleaning',
          'High-Touch Disinfection Protocol',
          'AS/NZS 4187 Compliant Cleaning'
        ]}
        faqs={[
          {
            question: 'What standards do you follow for medical cleaning in Sydney?',
            answer: 'Pro Clean Corp follows AS/NZS cleaning standards applicable to healthcare environments, including colour-coded mop and cloth systems to prevent cross-contamination, TGA-registered hospital-grade disinfectants, documented cleaning protocols, and staff trained in infection control practices relevant to medical facilities.'
          },
          {
            question: 'How is medical cleaning different from standard office cleaning?',
            answer: 'Medical cleaning requires TGA-registered hospital-grade disinfectants rather than general cleaners, strict cross-contamination prevention protocols using colour-coded systems, documented cleaning procedures for infection control compliance, specific training in bloodborne pathogen awareness, and treatment room terminal cleaning procedures. General office cleaners are not trained or equipped for this environment.'
          }
        ]}
      />

      {/* Hero — professional, trust-forward layout */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Hospital-Grade Medical Cleaning
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides specialist medical cleaning for Sydney healthcare facilities. TGA-registered disinfectants, AS/NZS-compliant protocols, and staff trained in infection control — for GP clinics, dental practices, allied health, and specialist centres.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Medical Cleaning Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ TGA-Registered Disinfectants</span>
                <span>✓ AS/NZS Compliant</span>
                <span>✓ Infection Control Trained</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/medical.webp"
                alt="Medical cleaning Sydney hospital-grade disinfection"
                className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
                width={800}
                height={420}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">200+</div>
                <div className="text-xs text-gray-500">Sydney Healthcare Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Medical cleaning in Sydney</strong> requires far more than appearance — it demands documented infection control protocols, TGA-registered disinfectants, and staff with specific healthcare cleaning training. Pro Clean Corp serves Sydney&apos;s medical sector with cleaning programs designed to protect patients, staff, and practitioners from healthcare-associated infections.
          </p>
        </div>
      </section>

      {/* Facility Types Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Medical Cleaning for Every Healthcare Facility Type</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">Each healthcare environment has distinct cleaning requirements. We build specific protocols for each facility type.</p>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              { title: 'GP Clinics & Medical Centres', desc: 'Waiting rooms, consulting rooms, treatment areas, reception, and staff zones. Daily maintenance plus periodic terminal cleans.' },
              { title: 'Dental Practices', desc: 'Surgery suites, sterilisation rooms, patient chairs, reception and waiting areas with dental-specific disinfection protocols.' },
              { title: 'Specialist Consulting Suites', desc: 'High-end presentation standards combined with rigorous infection control for specialist medical and surgical consulting facilities.' },
              { title: 'Allied Health Clinics', desc: 'Physio, chiropractic, psychology, and occupational therapy facilities cleaned to clinical standards with non-disruptive scheduling.' },
              { title: 'Pathology & Diagnostic Centres', desc: 'Sample handling areas, patient waiting zones, and reception cleaned with biohazard-aware protocols.' },
              { title: 'Aged Care Facilities', desc: 'Resident rooms, common areas, dining, and clinical zones with gentle yet effective infection control cleaning.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-darkblue mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Medical Cleaning in Sydney Requires a Specialist</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Healthcare-associated infections (HAIs) are one of the most significant and preventable patient safety risks in Australian clinical settings. The cleaning and disinfection of the clinical environment plays a direct role in preventing HAI transmission — and regulatory bodies including the Australian Commission on Safety and Quality in Health Care (ACSQHC) have specific standards for environmental cleaning in healthcare.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s medical cleaning teams in Sydney are trained in infection control theory and practice, work with TGA-registered hospital-grade disinfectants, follow colour-coded equipment systems to prevent zone-to-zone cross-contamination, and maintain documented cleaning records for each visit. This documentation supports your accreditation obligations.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/medical.webp"
                alt="Hospital grade medical cleaning Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Sydney Medical Areas</h4>
                <div className="grid grid-cols-1 gap-2">
                  {medicalSuburbs.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} className="text-sm text-blueprimary hover:text-darkblue transition">
                      → {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Medical Cleaning Sydney — FAQs</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What standards do you follow for medical cleaning in Sydney?', a: 'Pro Clean Corp follows AS/NZS cleaning standards applicable to healthcare environments including colour-coded mop and cloth systems to prevent cross-contamination, TGA-registered hospital-grade disinfectants, documented cleaning protocols, and staff trained in infection control practices.' },
              { q: 'How is medical cleaning different from standard office cleaning?', a: 'Medical cleaning requires TGA-registered hospital-grade disinfectants, strict cross-contamination prevention via colour-coded systems, documented cleaning procedures for infection control compliance, training in bloodborne pathogen awareness, and treatment room terminal cleaning procedures. General office cleaners are not equipped for this environment.' },
              { q: 'Do you provide cleaning documentation for healthcare accreditation?', a: 'Yes. We provide site-specific cleaning logs, MSDS documentation for all cleaning products, staff training records, and method statements that support NSQHS (National Safety and Quality Health Service) Standards compliance. These documents can be provided to your accreditation body on request.' },
              { q: 'Can medical cleaners work around patient appointment times?', a: 'Yes. We schedule medical cleaning around your patient flow — early morning before your first appointment, between sessions where practical, and after closing. We also offer same-day emergency cleans for spill remediation or unplanned terminal cleans.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Hospital-Grade Medical Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-8 text-gray-100">Protect your patients, staff, and accreditation with Pro Clean Corp&apos;s specialist medical cleaning programs. TGA-registered products. Documented protocols. Infection control trained teams.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Medical Cleaning Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white/10 transition">
                1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
