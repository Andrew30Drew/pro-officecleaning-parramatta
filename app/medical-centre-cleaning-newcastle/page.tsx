import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Centre Cleaning Newcastle | TGA-Certified | Pro Clean Corp',
  description: 'Professional medical centre cleaning in Newcastle NSW. TGA-registered disinfectants, infection control protocols, after-hours service. Serving Newcastle CBD and Hunter Valley.',
  keywords: ['medical centre cleaning newcastle', 'clinic cleaning newcastle', 'healthcare cleaning newcastle', 'GP clinic cleaners newcastle', 'medical office cleaning newcastle'],
  openGraph: {
    title: 'Medical Centre Cleaning Newcastle | TGA-Certified | Pro Clean Corp',
    description: 'Professional medical centre cleaning in Newcastle. TGA products, infection control training, after-hours service. Free quote.',
    url: 'https://www.procleancorp.com.au/medical-centre-cleaning-newcastle',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical centre cleaning Newcastle' }]
  },
  twitter: { card: 'summary_large_image', title: 'Medical Centre Cleaning Newcastle | Pro Clean Corp', description: 'Professional medical centre cleaning in Newcastle NSW.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-centre-cleaning-newcastle' }
};

const faqs = [
  {
    question: 'Do you provide medical centre cleaning in Newcastle?',
    answer: 'Yes. Pro Clean Corp services medical centres, GP practices, specialist suites, dental clinics and allied health facilities across Newcastle and the Hunter Valley. Our Newcastle-area teams use the same TGA-registered disinfectants and NHMRC-aligned infection control protocols as our Sydney operations — with after-hours scheduling available for all medical premises.'
  },
  {
    question: 'What infection control standards do you follow for Newcastle medical centres?',
    answer: 'We follow NHMRC Infection Control Guidelines for cleaning in healthcare settings, using TGA-registered hospital-grade disinfectants, colour-coded microfibre systems per zone, HEPA-filter vacuuming in patient areas and documented procedures for each room type. Our Newcastle team is trained and assessed before being assigned to any medical facility.'
  },
  {
    question: 'Can you clean our Newcastle medical centre after hours?',
    answer: 'Yes. After-hours medical centre cleaning is our standard approach for all Newcastle clinics. Our teams typically clean from 6pm after the last patient, ensuring the facility is clean, disinfected and ready for the first appointment the following morning. Service confirmation is emailed to your practice manager within 30 minutes of completion.'
  },
  {
    question: 'What Newcastle suburbs do you service for medical cleaning?',
    answer: 'Pro Clean Corp services medical facilities across Newcastle CBD, Hamilton, Broadmeadow, Charlestown, Kotara, Jesmond, Adamstown, Lambton, New Lambton, Warners Bay and surrounding Hunter Valley areas. Contact us for availability in specific suburban locations.'
  }
];

const newcastleSuburbs = [
  { suburb: 'Newcastle CBD', href: '/medical-cleaning' },
  { suburb: 'Hamilton', href: '/medical-cleaning' },
  { suburb: 'Broadmeadow', href: '/medical-cleaning' },
  { suburb: 'Charlestown', href: '/medical-cleaning' },
  { suburb: 'Kotara', href: '/medical-cleaning' },
  { suburb: 'Jesmond', href: '/medical-cleaning' }
];

export default function MedicalCentreCleaningNewcastlePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Centre Cleaning Newcastle"
        serviceDescription="Professional medical centre cleaning in Newcastle NSW. TGA-registered disinfectants, NHMRC infection control protocols and after-hours service for GP clinics and healthcare facilities."
        serviceUrl="/medical-centre-cleaning-newcastle"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['GP Clinic Cleaning', 'Specialist Suite Cleaning', 'Dental Practice Cleaning', 'Allied Health Cleaning', 'After-Hours Cleaning', 'Infection Control Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Newcastle · Hunter Valley · 160km North of Sydney</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Medical Centre Cleaning Newcastle — Hospital-Grade Standard
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers medical centre cleaning across Newcastle</strong> and the Hunter Valley — using TGA-registered hospital-grade disinfectants, NHMRC infection control protocols and after-hours scheduling for every medical practice.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['TGA hospital-grade products', 'NHMRC infection control', 'After-hours scheduling', 'Police-checked cleaners', 'Written service reports', '$20M liability insurance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white text-sm">
                    <span className="text-green-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/medical.webp"
                alt="Medical centre cleaning Newcastle"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Medical centre cleaning in Newcastle from Pro Clean Corp</strong> uses TGA-registered hospital-grade disinfectants, colour-coded zone cleaning and NHMRC-aligned infection control protocols. After-hours scheduling ensures your practice is clean and ready for the first appointment — with a digital service confirmation to your practice manager.
          </p>
        </div>
      </section>

      {/* Newcastle Context */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">Medical Cleaning for Newcastle&apos;s Healthcare Sector</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Newcastle is the Hunter Valley&apos;s major healthcare hub, home to John Hunter Hospital, the Calvary Mater Newcastle, and a large network of GP practices, specialist suites and allied health clinics spread across suburbs including Hamilton, Charlestown, Kotara and Jesmond.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pro Clean Corp services Newcastle&apos;s growing medical sector with the same rigorous infection control standards applied in our Sydney operations. We understand the NHMRC guidelines, the TGA-registration requirements for hospital-grade products and the after-hours scheduling demands of busy Newcastle medical practices.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you operate a single-GP clinic in Hamilton or a multi-practitioner medical centre near Charlestown Square, Pro Clean Corp will design a cleaning program specific to your facility layout and patient volume.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero3.jpg"
                alt="Newcastle medical centre cleaning"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Cleaned */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">Medical Centre Cleaning Inclusions — Newcastle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { zone: 'Waiting Room', tasks: ['Seating wipe-down', 'Floor mop and vacuum', 'Reception desk disinfection', 'Magazine rack clean', 'Children\'s area disinfection'] },
              { zone: 'Consultation Rooms', tasks: ['Examination table disinfection', 'All surface wipe-down', 'Floor mopping', 'Sink and tap cleaning', 'Bin emptying and lining'] },
              { zone: 'Nurse Station', tasks: ['Counter and bench disinfection', 'Equipment surface cleaning', 'Floor maintenance', 'Storage area cleaning', 'Touch surface disinfection'] },
              { zone: 'Bathrooms / Toilets', tasks: ['Full disinfection', 'Basin and tap cleaning', 'Mirror cleaning', 'Floor disinfection', 'Consumables restocking'] },
              { zone: 'Kitchen / Staff Areas', tasks: ['Bench and sink cleaning', 'Appliance wipe-down', 'Floor mopping', 'Fridge exterior clean', 'Bin service'] },
              { zone: 'Entry & Corridors', tasks: ['Floor sweep and mop', 'Door handle disinfection', 'Glass door cleaning', 'Signage wipe-down', 'Waiting overflow areas'] }
            ].map((zone, i) => (
              <div key={i} className="bg-white rounded-xl p-5">
                <h3 className="font-bold text-darkblue mb-3 text-sm">{zone.zone}</h3>
                <ul className="space-y-1.5">
                  {zone.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newcastle Suburbs */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6">Newcastle Suburbs We Serve</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {newcastleSuburbs.map((s, i) => (
              <Link key={i} href={s.href} className="bg-gray-50 hover:bg-blueprimary hover:text-white border border-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center transition">{s.suburb}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Medical Centre Cleaning Newcastle</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Free Newcastle Medical Centre Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment across Newcastle and Hunter Valley. Written quote within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
