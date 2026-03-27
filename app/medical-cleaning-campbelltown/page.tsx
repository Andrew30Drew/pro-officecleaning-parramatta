import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning Campbelltown | ProCleanCorp SW Sydney',
  description: 'Medical centre cleaning in Campbelltown. Hospital-grade disinfection, infection control docs. Serving the Campbelltown health precinct. Free quote.',
  keywords: 'medical cleaning campbelltown, medical centre cleaning campbelltown, GP practice cleaning campbelltown, campbelltown hospital precinct cleaning, clinical cleaning campbelltown, infection control campbelltown',
  openGraph: {
    title: 'Medical Cleaning Campbelltown | ProCleanCorp SW Sydney',
    description: 'Medical centre cleaning in Campbelltown. Hospital-grade disinfection, infection control documentation. Free quote.',
    url: 'https://www.procleancorp.com.au/medical-cleaning-campbelltown',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical cleaning Campbelltown South-West Sydney clinical' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-cleaning-campbelltown' }
};

const faqs = [
  {
    question: 'Do you clean specialist clinics near Campbelltown Hospital?',
    answer: 'Yes. ProCleanCorp specifically targets the private specialist clinics and GP practices in the Campbelltown-Macarthur health precinct surrounding Campbelltown Hospital. We position as the contractor most familiar with Campbelltown Hospital\'s infection control standard — applying hospital-grade disinfection protocols and providing the compliance documentation that specialist clinic managers require when working adjacent to a public hospital.'
  },
  {
    question: 'What infection control standards do you apply for medical centres in Campbelltown?',
    answer: 'For Campbelltown medical centres, we apply NHMRC-aligned infection control protocols using TGA-approved hospital-grade disinfectants, colour-coded microfibre systems to prevent cross-contamination between clinical and non-clinical zones, and documented cleaning logs with product batch numbers for full traceability. All staff are trained in standard infection control precautions.'
  },
  {
    question: 'Can you provide a one-off deep clean for our Campbelltown GP practice?',
    answer: 'Yes. ProCleanCorp provides one-off medical deep cleans for Campbelltown GP practices — ideal for new practice openings, AHPRA inspection preparation, post-construction cleans or end-of-year facility resets. One-off medical deep cleans are available with 48-72 hours notice in most cases. Call 1300 494 983 for urgent bookings.'
  }
];

export default function MedicalCleaningCampbelltownPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Campbelltown"
        serviceDescription="ProCleanCorp provides medical centre cleaning in Campbelltown with hospital-grade disinfection protocols, serving GP practices, allied health clinics and specialist suites in the Campbelltown-Macarthur health precinct."
        serviceUrl="https://www.procleancorp.com.au/medical-cleaning-campbelltown"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['GP Practice Cleaning', 'Specialist Clinic Cleaning', 'Hospital-Grade Disinfection', 'One-Off Deep Clean', 'AHPRA Compliance Documentation', 'After Hours Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Campbelltown Medical Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Medical Centre Cleaning Campbelltown — Clinical Hygiene Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides medical centre cleaning in Campbelltown — hospital-grade disinfection protocols for the Campbelltown-Macarthur health precinct. GP practices, allied health clinics and specialist suites near Campbelltown Hospital.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Hospital-Grade Protocols &nbsp;|&nbsp; ✓ One-Off Deep Cleans &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Medical cleaning Campbelltown clinical South-West Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides medical centre cleaning in Campbelltown</strong> with hospital-grade disinfection protocols, serving GP practices, allied health clinics and specialist suites in the Campbelltown-Macarthur health precinct. Campbelltown Hospital is one of NSW's busiest — we apply its infection control standard to every clinic in the surrounding area.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Medical Centre Cleaning in Campbelltown</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Campbelltown Hospital is one of NSW's busiest public hospitals, generating a large network of private specialist clinics in the surrounding area. These clinics need a cleaning contractor that understands hospital-adjacent infection control — not a generic commercial cleaner.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp positions as the natural local choice for Campbelltown medical facilities, with experience in hospital-adjacent cleaning standards and the compliance documentation that enables specialist clinic managers to win and retain contracts adjacent to public hospitals.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Campbelltown Medical Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['GP practice daily cleaning', 'Specialist clinic protocols', 'Waiting room disinfection', 'Consultation room cleaning', 'Bathroom & amenity maintenance', 'Reception & admin area', 'TGA-approved disinfectants', 'Colour-coded microfibre', 'After hours access', 'AHPRA compliance documentation', 'One-off deep cleans', 'Police-checked staff'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Campbelltown Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Campbelltown', 'Macquarie Fields', 'Ingleburn', 'Minto', 'Leumeah', 'Narellan', 'Camden', 'Smeaton Grange'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Hospital-grade medical cleaning. Campbelltown.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Medical Cleaning Campbelltown</h3>
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
                { label: 'Medical Cleaning Liverpool', href: '/medical-cleaning-liverpool' },
                { label: 'Gym Cleaning Campbelltown', href: '/gym-cleaning-campbelltown' },
                { label: 'Commercial Cleaning Parramatta', href: '/commercial-cleaning-parramatta' },
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Medical Cleaning Campbelltown — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Hospital-grade protocols. One-off deep cleans. AHPRA documentation.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
