import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning Hurstville | ProCleanCorp South',
  description: 'Medical centre cleaning in Hurstville for GP practices, specialist clinics and allied health. TGA-approved protocols, infection control standards. Free quote.',
  keywords: 'medical cleaning hurstville, medical centre cleaning hurstville, GP practice cleaning hurstville, clinical cleaning hurstville, st george hospital medical cleaning, infection control hurstville',
  openGraph: {
    title: 'Medical Cleaning Hurstville | ProCleanCorp South',
    description: 'Medical centre cleaning in Hurstville. TGA-approved protocols, infection control standards. Serving the St George precinct. Free quote.',
    url: 'https://www.procleancorp.com.au/medical-cleaning-hurstville',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical cleaning Hurstville South Sydney clinical' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-cleaning-hurstville' }
};

const faqs = [
  {
    question: 'Do you clean GP practices and specialist clinics near St George Hospital in Hurstville?',
    answer: "Yes. ProCleanCorp specifically targets the satellite GP practices and specialist clinics adjacent to St George Hospital in the Hurstville precinct. Hospital-adjacent clinics have higher infection control requirements than standard suburban GP practices — driven by the patient cohort and proximity to the hospital's patient population. We apply hospital-grade disinfection protocols and provide the compliance documentation that hospital-adjacent practice managers require."
  },
  {
    question: 'What infection control documentation can you provide for our Hurstville medical practice?',
    answer: 'ProCleanCorp provides a complete infection control documentation package for Hurstville medical practices, including: zone-by-zone cleaning schedule, TGA product approval documentation for all disinfectants used, colour-coded equipment register, staff infection control training records, visit logs for each clean, and a formal cleaning compliance letter for AHPRA and accreditation purposes.'
  },
  {
    question: 'How often should a GP practice in Hurstville be professionally cleaned?',
    answer: 'A GP practice in Hurstville should be professionally cleaned daily — or at minimum after every clinical session — with a deep clean of all clinical surfaces and a thorough clean of waiting room, bathrooms and reception. High-volume practices (30+ patients per day) benefit from a mid-session spot clean of the waiting room and bathroom in addition to the daily deep clean.'
  }
];

export default function MedicalCleaningHurstvillePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Hurstville"
        serviceDescription="ProCleanCorp delivers medical centre cleaning in Hurstville covering GP practices, specialist clinics and allied health facilities with TGA-approved disinfectants and documented infection control."
        serviceUrl="https://www.procleancorp.com.au/medical-cleaning-hurstville"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['GP Practice Cleaning', 'Specialist Clinic Cleaning', 'TGA-Approved Disinfection', 'Infection Control Documentation', 'Hospital-Adjacent Protocols', 'After Hours Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Hurstville Medical Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Medical Centre Cleaning Hurstville — Clinical Grade Services
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers medical centre cleaning in Hurstville covering GP practices, specialist clinics and allied health near St George Hospital — TGA-approved disinfectants, full infection control documentation.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Hospital-Adjacent Protocols &nbsp;|&nbsp; ✓ Full IC Documentation &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Medical cleaning Hurstville South Sydney clinical"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers medical centre cleaning in Hurstville</strong> covering GP practices, specialist clinics and allied health facilities with TGA-approved disinfectants and documented infection control. Hurstville's St George private hospital precinct generates significant allied health demand — we apply hospital-adjacent cleaning standards throughout.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Medical Centre Cleaning in Hurstville</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Hurstville's St George private hospital precinct generates a large network of satellite GP practices, specialist clinics and allied health facilities. Clinics adjacent to or associated with the hospital have higher infection control requirements than standard suburban practices.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp positions as the natural choice for Hurstville hospital-adjacent facilities, with experience in hospital-adjacent cleaning standards and the compliance documentation that practice managers require for AHPRA inspection readiness and practice accreditation.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Hurstville Medical Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['GP practice daily cleaning', 'Specialist clinic protocols', 'Waiting room disinfection', 'Consultation room cleaning', 'Bathroom & amenity maintenance', 'Reception & admin area cleaning', 'TGA-approved hospital disinfectants', 'Colour-coded microfibre system', 'After hours access', 'Infection control documentation', 'AHPRA-ready compliance logs', 'Police-checked staff'].map((item, i) => (
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
                  <li>✓ Hospital-adjacent standards</li>
                  <li>✓ Infection control logs</li>
                  <li>✓ SDS documentation</li>
                  <li>✓ Police-checked staff</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Clinical medical cleaning. Hurstville & St George.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Medical Cleaning Hurstville</h3>
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
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
                { label: 'Medical Office Cleaning Sydney', href: '/medical-office-cleaning-sydney' },
                { label: 'Commercial Cleaning Hurstville', href: '/commercial-cleaning-hurstville' },
                { label: 'Gym Cleaning Hurstville', href: '/gym-cleaning-hurstville' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Medical Cleaning Hurstville — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Hospital-adjacent protocols. Full infection control documentation. TGA-approved.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
