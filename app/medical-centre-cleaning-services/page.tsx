import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Centre Cleaning Services Sydney NSW | Hospital-Grade Hygiene | Pro Clean Corp',
  description: 'Specialist medical centre cleaning services across Sydney NSW. TGA-registered disinfectants, infection control protocols, after-hours availability. Clinics, GP practices, specialist centres. Call 1300 494 983.',
  keywords: [
    'medical centre cleaning services',
    'medical centre cleaning Sydney',
    'medical cleaning services NSW',
    'clinic cleaning Sydney',
    'GP practice cleaning',
    'healthcare cleaning services Sydney',
    'infection control cleaning NSW'
  ],
  openGraph: {
    title: 'Medical Centre Cleaning Services | Pro Clean Corp Sydney',
    description: 'Hospital-grade cleaning for medical centres, GP clinics, and specialist practices across Sydney. TGA-registered disinfectants, infection control protocols.',
    url: '/medical-centre-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical Centre Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Centre Cleaning Services Sydney | Pro Clean Corp',
    description: 'Specialist medical centre cleaning with infection control protocols and TGA-registered disinfectants. Serving all Sydney suburbs.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/medical-centre-cleaning-services' }
};

const relatedAreas = [
  { name: 'Medical Centre Cleaning', slug: 'medical-centre-cleaning' },
  { name: 'Medical Grade Cleaning', slug: 'medical-grade-cleaning-services' },
  { name: 'Hospital Grade Cleaning', slug: 'hospital-grade-cleaning-services' },
  { name: 'North Sydney Medical', slug: 'medical-cleaning-north-sydney' },
  { name: 'Hurstville Medical', slug: 'medical-cleaning-hurstville' },
  { name: 'Hornsby Medical', slug: 'medical-cleaning-hornsby' },
  { name: 'Eastern Suburbs Medical', slug: 'medical-cleaning-eastern-suburbs' },
  { name: 'Campbelltown Medical', slug: 'medical-cleaning-campbelltown' },
];

export default function MedicalCentreCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Centre Cleaning Services"
        serviceDescription="Pro Clean Corp provides specialist medical centre cleaning services across Sydney NSW using TGA-registered disinfectants and infection control protocols. Serving GP clinics, specialist centres, allied health practices, and bulk billing medical centres."
        serviceUrl="/medical-centre-cleaning-services"
        serviceType="Medical Centre Cleaning"
        price="$$$"
        additionalServices={[
          'GP Clinic Cleaning', 'Specialist Medical Centre Cleaning',
          'Allied Health Practice Cleaning', 'Waiting Room Sanitation',
          'Treatment Room Deep Clean', 'Medical Waste Area Cleaning',
          'Infection Control Protocols', 'After-Hours Medical Cleaning'
        ]}
        faqs={[
          {
            question: 'What is included in medical centre cleaning services?',
            answer: 'Medical centre cleaning services include clinical area deep cleaning, waiting room sanitation, treatment room disinfection, bathroom and toilet cleaning, reception area cleaning, high-touch point disinfection, medical waste area cleaning, and floor mopping with TGA-registered hospital-grade disinfectants. All work follows infection control protocols.'
          },
          {
            question: 'How often should a medical centre be cleaned?',
            answer: 'Medical centres should be cleaned daily at minimum, with clinical areas requiring cleaning after every patient session. High-touch surfaces including door handles, examination tables, and reception counters should be disinfected multiple times throughout the day. We offer tailored cleaning schedules for every type of medical practice.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Healthcare Cleaning Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Centre Cleaning Services
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers specialist medical centre cleaning services across Sydney NSW. We use TGA-registered hospital-grade disinfectants, follow strict infection control protocols, and operate after-hours to minimise disruption to your patients and staff.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Request a Cleaning Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ TGA-Registered Disinfectants</span>
                <span>✓ Infection Control Certified</span>
                <span>✓ After-Hours Available</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/medical.webp"
                alt="Medical centre cleaning services Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">200+</div>
                <div className="text-xs text-gray-500">Medical Facilities Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Medical centre cleaning services</strong> from Pro Clean Corp go beyond standard commercial cleaning. We apply infection control protocols, hospital-grade disinfectants, and specialised techniques for clinical areas to ensure your practice meets health authority standards and keeps patients and staff safe.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Medical Centre Cleaning — Sydney NSW</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Medical centres present unique cleaning challenges that general commercial cleaners are not equipped to handle. Cross-contamination risks, the presence of bodily fluids, high-traffic patient areas, and the need for infection control compliance all require a specialist approach. Pro Clean Corp&apos;s medical cleaning teams are trained in healthcare facility sanitation and understand the critical importance of their role in patient safety.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We service GP clinics, specialist medical centres, allied health practices, bulk billing clinics, urgent care centres, and multi-disciplinary health hubs across Sydney. Our teams use TGA-registered hospital-grade disinfectants proven effective against a wide range of pathogens including bacteria, viruses, and fungi.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Infection Control That Meets Healthcare Standards</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our medical centre cleaning protocols are aligned with infection prevention and control (IPC) guidelines used by Australian health authorities. From colour-coded cleaning equipment to separate clinical and non-clinical area protocols, every aspect of our service is designed to prevent the spread of infection within your medical centre.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero2.jpg"
                alt="Medical cleaning team Sydney clinic"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-greenprimary/10 p-6 rounded-xl border border-greenprimary/20">
                <h4 className="font-bold text-darkblue mb-3">IPC Standards We Follow</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Standard precautions</li>
                  <li>✓ Colour-coded equipment</li>
                  <li>✓ TGA-registered products</li>
                  <li>✓ PPE for all staff</li>
                  <li>✓ Documented cleaning records</li>
                  <li>✓ Waste segregation protocols</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Checklist */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Complete Medical Centre Cleaning Checklist</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Waiting room cleaning & sanitisation',
                'Reception desk & counter disinfection',
                'Consultation room deep clean',
                'Examination table disinfection',
                'Treatment room sterilisation clean',
                'Medical equipment surface wipe-down',
                'Bathroom & toilet deep clean',
                'Staff room & kitchen cleaning',
                'High-touch point disinfection',
                'Clinical waste area cleaning',
                'Floor mopping with hospital-grade products',
                'Window sill & ledge dusting',
                'Bin replacement & sanitisation',
                'Air vent & filter dusting',
                'Glass & mirror cleaning'
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Types */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Types of Medical Centres We Clean</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'GP Clinics', desc: 'Bulk billing and private GP practices across Sydney.' },
                { title: 'Specialist Centres', desc: 'Cardiology, dermatology, orthopaedic and all specialist rooms.' },
                { title: 'Allied Health', desc: 'Physiotherapy, psychology, podiatry, and chiropractic clinics.' },
                { title: 'Multi-Disciplinary', desc: 'Large health hubs with multiple practitioners on-site.' },
              ].map((type, i) => (
                <div key={i} className="bg-blueprimary/5 p-5 rounded-xl border border-blueprimary/10">
                  <h4 className="font-bold text-darkblue mb-2">{type.title}</h4>
                  <p className="text-sm text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Medical Centre Cleaning — Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                { q: 'What is included in medical centre cleaning services?', a: 'Medical centre cleaning services include clinical area deep cleaning, waiting room and reception sanitation, treatment room disinfection, bathroom cleaning, high-touch point disinfection, medical waste area cleaning, and floor mopping with TGA-registered disinfectants. All work follows documented infection control protocols.' },
                { q: 'How often should a medical centre be cleaned?', a: 'Medical centres require daily cleaning at minimum, with clinical areas cleaned after every patient session where possible. High-touch surfaces require multiple sanitisations throughout the day. We create custom cleaning schedules to meet your specific patient flow and clinical requirements.' },
                { q: 'Do your cleaners hold infection control training?', a: 'Yes. All Pro Clean Corp medical cleaning staff receive specific training in infection prevention and control (IPC) protocols including standard precautions, proper PPE use, colour-coded cleaning equipment, and safe waste handling. We keep documented training records for all team members.' },
                { q: 'Can you clean our medical centre after hours?', a: 'Yes. We specialise in after-hours medical centre cleaning to ensure your clinic is thoroughly clean and ready for patients each morning without disrupting appointments or staff workflows during operating hours.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Specialist Medical Centre Cleaning Services</h3>
            <p className="text-xl mb-6 text-gray-100">
              Protect your patients, staff, and practice with Pro Clean Corp&apos;s hospital-grade medical centre cleaning. Operating across all Sydney suburbs, 7 days a week.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 — Free Quote for Your Medical Centre
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
