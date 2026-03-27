import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Facility Cleaning Services Sydney NSW | Clinic & Hospital Cleaning | Pro Clean Corp',
  description: 'Specialist medical facility cleaning services in Sydney NSW. TGA disinfectants, IPC protocols, after-hours cleaning for all medical facilities. Free quotes. Call 1300 494 983.',
  keywords: ['medical facility cleaning services', 'medical facility cleaning Sydney', 'hospital cleaning services NSW', 'medical cleaning company Sydney', 'clinical cleaning Sydney'],
  openGraph: { title: 'Medical Facility Cleaning Services | Pro Clean Corp Sydney', description: 'Specialist medical facility cleaning with TGA disinfectants and IPC protocols across Sydney.', url: '/medical-facility-cleaning-services', type: 'website', images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical Facility Cleaning Services Sydney' }] },
  twitter: { card: 'summary_large_image', title: 'Medical Facility Cleaning Services Sydney | Pro Clean Corp', description: 'Specialist medical facility cleaning across all Sydney suburbs. IPC certified teams.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: '/medical-facility-cleaning-services' }
};

export default function MedicalFacilityCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData serviceName="Medical Facility Cleaning Services" serviceDescription="Pro Clean Corp delivers specialist medical facility cleaning services using TGA-registered disinfectants and IPC protocols for clinics, hospitals, and specialist medical centres across Sydney NSW." serviceUrl="/medical-facility-cleaning-services" serviceType="Medical Facility Cleaning" price="$$$" additionalServices={['Clinical Area Cleaning', 'Terminal Cleaning', 'Waiting Room Sanitation', 'Medical Office Cleaning', 'Treatment Room Disinfection', 'After-Hours Medical Cleaning']} faqs={[{ question: 'What medical facility cleaning services do you offer?', answer: 'We provide terminal cleaning, routine clinical cleaning, waiting room sanitisation, consultation room disinfection, treatment room deep cleaning, bathroom and amenities cleaning, and after-hours scheduled cleaning for all types of medical facilities.' }, { question: 'Are your medical facility cleaners trained in infection control?', answer: 'Yes. All our medical facility cleaning staff complete infection prevention and control training including standard precautions, correct PPE use, TGA product handling, and colour-coded cleaning equipment protocols.' }]} />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Medical Facility Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Medical Facility Cleaning Services</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp provides specialist medical facility cleaning services across Sydney NSW. We serve GP clinics, specialist practices, hospitals, day surgeries, and all types of medical facilities with IPC-trained teams, TGA-registered disinfectants, and documented cleaning protocols.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ IPC Trained Staff</span><span>✓ TGA Disinfectants</span><span>✓ After-Hours Available</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/medical.webp" alt="Medical facility cleaning services Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Medical facility cleaning services</strong> from Pro Clean Corp apply the right product, protocol, and frequency to every area of your facility — from high-risk clinical zones to patient waiting areas — delivering a standard of hygiene that protects patients, staff, and your practice reputation.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Medical Facilities Need Specialist Cleaning</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Standard commercial cleaners are not equipped to service medical facilities. Medical environments have strict infection control requirements, specific regulatory standards, and the constant risk of cross-contamination between patients, staff, and clinical zones. Using the wrong product or method in a clinical setting can create liability — and more importantly, put patients at risk.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp&apos;s medical facility cleaning teams understand these requirements. We follow documented IPC protocols, use TGA-registered disinfectants appropriate for each zone, apply correct contact times, and maintain cleaning logs for compliance audits.</p>
              <div className="space-y-3">
                {['Correct disinfectant selection by area', 'Documented dwell times applied', 'Colour-coded equipment — no cross-zone contamination', 'PPE worn for all clinical area cleaning', 'Cleaning logs available for audits', 'After-hours scheduling to minimise disruption'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white text-xs">✓</span></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero6.jpg" alt="Medical facility cleaning team" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-96" width={600} height={384} loading="lazy" />
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Medical Facility Areas We Clean</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { area: 'Waiting Rooms', tasks: 'Sanitisation, seating wipe-down, floor mopping, high-touch disinfection' },
                { area: 'Consultation Rooms', tasks: 'Bench disinfection, equipment wipe-down, floor cleaning, bin emptying' },
                { area: 'Treatment Rooms', tasks: 'Full disinfection, surface sanitisation, clinical waste area cleaning' },
                { area: 'Bathrooms', tasks: 'Hospital-grade disinfection, floor scrubbing, consumables restocking' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-darkblue mb-2">{item.area}</h4>
                  <p className="text-xs text-gray-600">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Medical Facility Cleaning Services</h3>
            <div className="space-y-4">
              {[
                { q: 'What medical facility cleaning services do you offer?', a: 'We provide terminal cleaning, routine clinical cleaning, waiting room sanitisation, treatment room deep cleaning, bathroom disinfection, and after-hours scheduled cleaning for GP clinics, specialist practices, hospitals, and day surgeries.' },
                { q: 'Are your staff trained in infection control?', a: 'Yes. All medical facility cleaning staff complete IPC training including standard precautions, PPE use, TGA product handling, colour-coded equipment protocols, and correct disinfection dwell times.' },
                { q: 'How quickly can you start a medical facility cleaning contract?', a: 'We can typically start a new medical facility cleaning contract within 5–7 business days after site assessment and agreement. For urgent requirements, same-week starts may be available. Call 1300 494 983 to discuss your timeline.' },
                { q: 'Do you provide cleaning logs and compliance documentation?', a: 'Yes. All medical facility accounts receive documented cleaning checklists, product SDS sheets, and quality audit reports to support your accreditation and compliance requirements.' }
              ].map((faq, i) => <div key={i} className="bg-gray-50 rounded-xl p-6"><h4 className="font-bold text-darkblue mb-2">{faq.q}</h4><p className="text-gray-700">{faq.a}</p></div>)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Medical Facility Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Protect your patients and your practice with specialist medical facility cleaning. Free site assessment for all Sydney facilities.</p>
            <div className="text-2xl font-bold text-greenprimary">Call 1300 494 983 Today</div>
          </div>
        </div>
      </section>
    </div>
  );
}
