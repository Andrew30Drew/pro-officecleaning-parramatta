import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Centre Cleaning Sydney | GP Clinic & Medical Centre Cleaners NSW | Pro Clean Corp',
  description: 'Specialist medical centre cleaning in Sydney. Hospital-grade disinfection for GP clinics, bulk billing centres, and multi-practitioner medical centres. Infection control compliant. Call 1300 494 983.',
  keywords: [
    'medical centre cleaning Sydney',
    'medical centre cleaners Sydney',
    'GP clinic cleaning Sydney',
    'bulk billing centre cleaning',
    'medical centre hygiene Sydney',
    'clinical cleaning Sydney',
    'healthcare centre cleaning NSW',
    'Pro Clean Corp medical centre'
  ],
  openGraph: {
    title: 'Medical Centre Cleaning Sydney | Pro Clean Corp',
    description: 'Hospital-grade medical centre cleaning for Sydney GP clinics and bulk billing centres. Infection control compliant protocols.',
    url: '/medical-centre-cleaning-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical Centre Cleaning Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Centre Cleaning Sydney | Pro Clean Corp',
    description: 'Specialist medical centre cleaning for Sydney GP clinics and healthcare facilities. Hospital-grade and infection control compliant.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/medical-centre-cleaning-sydney' }
};

export default function MedicalCentreCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Centre Cleaning Sydney"
        serviceDescription="Specialist medical centre cleaning services in Sydney NSW. Hospital-grade disinfection protocols for GP clinics, bulk billing centres, and multi-practitioner medical facilities."
        serviceUrl="/medical-centre-cleaning-sydney"
        serviceType="Medical Centre Cleaning"
        price="$$$"
        additionalServices={[
          'GP Consulting Room Cleaning',
          'Waiting Room Sanitisation',
          'Reception & Admin Area Cleaning',
          'Patient Toilet Disinfection',
          'Treatment Room Terminal Clean',
          'Nurse Station Cleaning',
          'Medical Waste Area Maintenance',
          'After-Hours Deep Clean'
        ]}
        faqs={[
          {
            question: 'What is included in medical centre cleaning in Sydney?',
            answer: 'Medical centre cleaning in Sydney includes daily cleaning and disinfection of all consulting rooms, waiting rooms, reception counters, staff areas, patient toilets, and corridors. It also includes weekly deep cleans of treatment rooms, periodic terminal cleans for high-risk areas, and documented cleaning logs for infection control compliance. All work uses TGA-registered hospital-grade disinfectants.'
          },
          {
            question: 'How do you clean a GP consulting room without disrupting patients?',
            answer: 'We coordinate our cleaning schedule directly with your practice manager to work around your appointment bookings. Consulting rooms are typically cleaned first thing in the morning before patients arrive, again during a scheduled break, and after the last appointment of the day. We use low-disturbance, rapid-dry cleaning agents so rooms are patient-ready within minutes of cleaning.'
          }
        ]}
      />

      {/* Hero — trust & compliance focused */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                GP Clinic & Medical Centre Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Centre Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides specialist medical centre cleaning for Sydney GP clinics, bulk billing centres, and multi-practitioner practices. Our infection control-trained teams use TGA-registered disinfectants and follow documented cleaning protocols for every visit.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Infection Control Trained</span>
                <span>✓ TGA-Registered Products</span>
                <span>✓ NSQHS Compatible Docs</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/medical.webp"
                alt="Medical centre cleaning Sydney GP clinic"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                width={800}
                height={400}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">200+</div>
                <div className="text-xs text-gray-500">Medical Clients in Sydney</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Medical centre cleaning in Sydney</strong> is a patient safety matter — not just a presentation concern. The correct cleaning and disinfection of GP consulting rooms, waiting areas, and patient-contact surfaces directly reduces the risk of healthcare-associated infection transmission. Pro Clean Corp trains every medical cleaning team member in infection control protocols specific to general practice and primary healthcare settings.
          </p>
        </div>
      </section>

      {/* Room-by-room cleaning scope */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Medical Centre Cleaning — Room by Room</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">Each area of your medical centre has a specific cleaning protocol. Here&apos;s what our teams do in each zone.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              {
                room: 'Waiting Room',
                tasks: ['Chair and seating surface disinfection', 'Magazine rack wipe-down', 'Floor mopping with TGA disinfectant', 'Reception counter cleaning', 'Touch-screen & payment terminal disinfection', 'Children\'s play area sanitisation']
              },
              {
                room: 'Consulting Rooms',
                tasks: ['Patient chair / examination table wipe-down', 'Doctor\'s desk and keyboard cleaning', 'Blood pressure cuff housing disinfection', 'All touch points (light switches, door handles)', 'Basin and tap disinfection', 'Bin liner replacement']
              },
              {
                room: 'Treatment Room',
                tasks: ['Terminal clean after procedures', 'Trolley and surface disinfection', 'Instrument holder exterior cleaning', 'Floor disinfection with hospital-grade product', 'Sharps bin surrounds cleaned', 'Biohazard waste area maintenance']
              },
              {
                room: 'Patient Toilets',
                tasks: ['Full bowl, cistern, and seat disinfection', 'Hand basin and tap disinfection', 'Mirror and dispenser cleaning', 'Floor disinfection', 'Restocking soap and hand towel', 'Bin liner replacement']
              },
              {
                room: 'Staff Areas',
                tasks: ['Kitchen and lunch area cleaning', 'Staff toilet cleaning', 'Staffroom surfaces', 'Lockers and bench wipe-down', 'Shared equipment cleaning', 'Coffee machine exterior cleaning']
              },
              {
                room: 'Corridors & Reception',
                tasks: ['Floor mopping (high-traffic)', 'Reception desk disinfection', 'Sliding door glass cleaning', 'Signage dusting', 'Dispenser refills (hand sanitiser)', 'Entry mat vacuuming']
              },
            ].map((zone, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-darkblue mb-3">{zone.room}</h3>
                <ul className="space-y-1">
                  {zone.tasks.map((task, j) => (
                    <li key={j} className="text-xs text-gray-600 flex items-start space-x-2">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Sydney Medical Centres Trust Pro Clean Corp</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                GP clinics and multi-practitioner medical centres across Sydney have specific cleaning requirements driven by their accreditation obligations, patient volumes, and infection control policies. Pro Clean Corp has served the Sydney medical cleaning sector for over a decade, building cleaning protocols that align with the RACGP Standards for general practices and the NSQHS Standards applicable to primary care.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our medical centre cleaning teams are specifically inducted into healthcare environments — understanding the importance of hand hygiene, PPE use when appropriate, colour-coded cleaning equipment to prevent cross-contamination between zones, and the correct dilution and application of hospital-grade disinfectants. We provide cleaning documentation on every visit.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/medical.webp"
                alt="GP clinic cleaning Sydney medical centre"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Related Medical Cleaning</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Medical Cleaning Sydney', href: '/medical-cleaning-sydney' },
                    { label: 'Medical Centre Cleaning', href: '/medical-centre-cleaning' },
                    { label: 'Healthcare Cleaning Services', href: '/healthcare-cleaning-services' },
                    { label: 'Hospital Grade Cleaning', href: '/hospital-grade-cleaning-sydney' },
                    { label: 'Medical Grade Services', href: '/medical-grade-cleaning-services' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-blueprimary hover:text-darkblue transition">→ {link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Medical Centre Cleaning Sydney — FAQs</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What is included in medical centre cleaning in Sydney?', a: 'Medical centre cleaning includes daily cleaning and disinfection of consulting rooms, waiting rooms, reception counters, staff areas, patient toilets, and corridors. It also includes weekly deep cleans of treatment rooms, periodic terminal cleans for high-risk areas, and documented cleaning logs. All work uses TGA-registered hospital-grade disinfectants.' },
              { q: 'How do you clean a GP consulting room without disrupting patients?', a: 'We coordinate directly with your practice manager to work around appointment bookings. Consulting rooms are typically cleaned before patients arrive, during a scheduled break, and after the last appointment. We use rapid-dry cleaning agents so rooms are patient-ready within minutes of cleaning.' },
              { q: 'Do you provide cleaning logs for medical centre accreditation?', a: 'Yes. We provide visit completion records, product information sheets, and cleaning method documentation on every visit. These records can be collated for RACGP accreditation or NSQHS Standards audit purposes. Your practice manager receives monthly summary reports.' },
              { q: 'Can you clean our medical centre after-hours?', a: 'Yes. Many GP clinics and medical centres prefer after-hours cleaning to avoid disruption to patient consultations. We offer morning cleans from 5:30am and evening cleans from 7pm. We can work with your security access arrangements and meet any building management requirements for after-hours contractors.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Medical Centre Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-8 text-gray-100">Protect your patients and practitioners with infection control-compliant medical centre cleaning from Pro Clean Corp. Serving Sydney GP clinics, medical centres, and healthcare facilities.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Medical Centre Quote
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
