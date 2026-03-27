import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Healthcare Facility Cleaning Sydney | Hospital & Clinic Cleaning NSW | Pro Clean Corp',
  description: 'Expert healthcare facility cleaning across Sydney NSW. Comprehensive cleaning programs for hospitals, clinics, aged care, and specialist centres. TGA products, IPC protocols. Call 1300 494 983.',
  keywords: ['healthcare facility cleaning', 'healthcare facility cleaning Sydney', 'hospital facility cleaning NSW', 'clinic cleaning Sydney', 'aged care cleaning Sydney'],
  openGraph: { title: 'Healthcare Facility Cleaning Sydney | Pro Clean Corp', description: 'Comprehensive healthcare facility cleaning programs for Sydney hospitals, clinics, and specialist centres.', url: '/healthcare-facility-cleaning', type: 'website', images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Healthcare Facility Cleaning Sydney' }] },
  twitter: { card: 'summary_large_image', title: 'Healthcare Facility Cleaning Sydney | Pro Clean Corp', description: 'TGA-compliant healthcare facility cleaning across Sydney NSW.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: '/healthcare-facility-cleaning' }
};

export default function HealthcareFacilityCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData serviceName="Healthcare Facility Cleaning" serviceDescription="Pro Clean Corp provides expert healthcare facility cleaning across Sydney NSW. Our IPC-trained teams deliver comprehensive cleaning programs for hospitals, medical centres, aged care facilities, and specialist clinics." serviceUrl="/healthcare-facility-cleaning" serviceType="Healthcare Facility Cleaning" price="$$$" additionalServices={['Hospital Cleaning', 'Aged Care Cleaning', 'Specialist Centre Cleaning', 'Day Surgery Cleaning', 'Community Health Cleaning', 'After-Hours Healthcare Cleaning']} faqs={[{ question: 'What is healthcare facility cleaning?', answer: 'Healthcare facility cleaning is a comprehensive cleaning and disinfection program designed for medical and health premises. It covers all areas of the facility from patient-facing clinical zones to back-of-house staff areas, using TGA-registered products and IPC-compliant methods.' }, { question: 'How do you clean different areas of a healthcare facility?', answer: 'We apply zone-based cleaning protocols. Clinical zones (patient rooms, treatment areas) receive hospital-grade disinfection after every use. High-traffic areas (waiting rooms, corridors) are cleaned and sanitised multiple times daily. Staff areas and amenities are cleaned daily. All cleaning follows documented checklists.' }]} />
      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Comprehensive Facility Programs</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Healthcare Facility Cleaning Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp designs and delivers comprehensive healthcare facility cleaning programs for Sydney&apos;s hospitals, specialist centres, aged care facilities, and allied health practices — with IPC-trained teams and TGA-registered disinfectants, 7 days a week.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Request Assessment</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Zone-Based Protocols</span><span>✓ IPC Certified</span><span>✓ All Facility Types</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/medical.webp" alt="Healthcare facility cleaning Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -left-4 bg-greenprimary rounded-xl shadow-lg p-4 text-white"><div className="text-2xl font-bold">7/7</div><div className="text-xs">Days Available</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Healthcare facility cleaning</strong> requires a zone-based approach — applying the right cleaning method, product, and frequency to each area of your facility based on its infection risk level. Pro Clean Corp builds custom programs for each healthcare facility we service, aligned with Australian IPC guidelines.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">Zone-Based Healthcare Facility Cleaning</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { zone: 'Zone 1 — Clinical High Risk', color: 'bg-red-50 border-red-200', badge: 'bg-red-500', items: ['Operating theatres', 'ICU & isolation rooms', 'Treatment rooms', 'Procedure areas'], freq: 'After each use + daily deep' },
              { zone: 'Zone 2 — Clinical Medium Risk', color: 'bg-amber-50 border-amber-200', badge: 'bg-amber-500', items: ['Consultation rooms', 'Patient areas', 'Examination rooms', 'Nursing stations'], freq: 'Multiple times daily' },
              { zone: 'Zone 3 — Low Clinical Risk', color: 'bg-green-50 border-green-200', badge: 'bg-green-500', items: ['Waiting rooms', 'Reception', 'Corridors', 'Staff areas & amenities'], freq: 'Daily + spot cleans' },
            ].map((z, i) => (
              <div key={i} className={`p-6 rounded-xl border-2 ${z.color}`}>
                <div className={`inline-block ${z.badge} text-white text-xs font-bold px-2 py-1 rounded-full mb-3`}>{z.freq}</div>
                <h3 className="font-bold text-darkblue mb-3">{z.zone}</h3>
                <ul className="space-y-1">{z.items.map((item, j) => <li key={j} className="text-sm text-gray-700 flex items-center space-x-2"><span className="text-greenprimary">✓</span><span>{item}</span></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Healthcare Facilities We Clean Across Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">From large metropolitan hospitals to small GP practices, Pro Clean Corp has the training, equipment, and protocols to service every type of healthcare facility in Sydney NSW. We understand that each facility type has different regulatory requirements, patient demographics, and operational hours — and we build our cleaning programs accordingly.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Public & private hospitals', 'Day surgery centres', 'GP & bulk billing clinics', 'Specialist medical practices', 'Allied health clinics', 'Pathology centres', 'Aged care facilities', 'Mental health services'].map((item, i) => (
                  <div key={i} className="bg-blueprimary/5 p-3 rounded-lg text-sm text-gray-700 border border-blueprimary/10">✓ {item}</div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero5.jpg" alt="Healthcare facility cleaning team" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-80" width={600} height={320} loading="lazy" />
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Healthcare Facility Cleaning</h3>
            <div className="space-y-4">
              {[
                { q: 'What is healthcare facility cleaning?', a: 'A comprehensive cleaning and disinfection program for all areas of medical and health premises. It uses zone-based protocols, TGA-registered products, and IPC-trained staff to maintain hygiene standards appropriate for each area of the facility.' },
                { q: 'How do you manage different risk zones in a healthcare facility?', a: 'We apply zone-based cleaning protocols — high-risk clinical areas receive hospital-grade disinfection after every use, medium-risk areas are cleaned multiple times daily, and lower-risk areas like waiting rooms and staff areas are cleaned daily with spot-cleans as needed.' },
                { q: 'Can you provide cleaning documentation for compliance audits?', a: 'Yes. We provide cleaning logs, product SDS sheets, IPC compliance documentation, and quality audit reports for all healthcare facility accounts — supporting your accreditation and regulatory requirements.' },
                { q: 'Do you clean aged care facilities?', a: 'Yes. Pro Clean Corp provides specialist cleaning for residential aged care facilities across Sydney. Our teams are trained in the specific hygiene requirements of aged care including resident dignity, infection control, and compliance with the Aged Care Quality Standards.' }
              ].map((faq, i) => <div key={i} className="bg-gray-50 rounded-xl p-6"><h4 className="font-bold text-darkblue mb-2">{faq.q}</h4><p className="text-gray-700">{faq.a}</p></div>)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Healthcare Facility Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Let Pro Clean Corp design a comprehensive cleaning program for your healthcare facility. Free site assessment available.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">Request Free Assessment</a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
