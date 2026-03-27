import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Office Cleaning Company Sydney | What to Look For | Pro Clean Corp',
  description: 'Choosing a medical office cleaning company? Know what to look for — infection control, TGA-approved products, trained staff. Pro Clean Corp: trusted by Sydney clinics.',
  keywords: ['medical office cleaning company', 'medical office cleaners sydney', 'clinic cleaning company sydney', 'healthcare cleaning services sydney', 'GP clinic cleaners'],
  openGraph: {
    title: 'Medical Office Cleaning Company Sydney | What to Look For | Pro Clean Corp',
    description: 'How to choose a medical office cleaning company in Sydney. Infection control, TGA products, trained staff — Pro Clean Corp meets every requirement.',
    url: 'https://www.procleancorp.com.au/medical-office-cleaning-company',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical office cleaning company Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Medical Office Cleaning Company Sydney | Pro Clean Corp', description: 'Choosing a medical office cleaning company — what to look for.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-office-cleaning-company' }
};

const faqs = [
  {
    question: 'What qualifications should a medical office cleaning company have?',
    answer: 'A medical office cleaning company should hold: NHMRC infection control certification or equivalent training, experience with AS/NZS 4187 decontamination standards (for clinical environments), TGA-registered disinfectant knowledge, current police clearances for all staff, $20M public liability insurance and documented cleaning protocols for each medical setting type.'
  },
  {
    question: 'Do medical office cleaners use different products than regular cleaners?',
    answer: 'Yes. Medical office cleaning requires TGA-registered hospital-grade disinfectants (minimum EN 1276 standard), colour-coded microfibre systems to prevent cross-contamination between zones, HEPA-filter vacuums to avoid aerosolising pathogens, and biohazard-safe disposal procedures for clinical waste. Pro Clean Corp uses only TGA-registered products in all medical settings.'
  },
  {
    question: 'How often should a medical office be professionally cleaned?',
    answer: 'Most general practice and specialist medical offices require daily cleaning of patient-facing areas and bathrooms, with thorough terminal cleaning each evening after the last patient. High-volume practices (50+ daily patients) may require mid-day touchpoint cleaning of waiting rooms and consultation areas. Pro Clean Corp will advise the appropriate frequency during your on-site assessment.'
  },
  {
    question: 'Can Pro Clean Corp clean after-hours at our medical centre?',
    answer: 'Yes. We schedule most medical office cleaning after business hours to avoid disrupting patients or clinical workflows. Our teams can access the premises securely, clean to protocol, and ensure the facility is ready for the first appointment the next morning — with a service confirmation sent to your practice manager.'
  }
];

export default function MedicalOfficeCleaningCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Office Cleaning Company Sydney"
        serviceDescription="Professional medical office cleaning company in Sydney. TGA-registered disinfectants, infection control protocols, after-hours service for clinics and GP practices."
        serviceUrl="/medical-office-cleaning-company"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['GP Clinic Cleaning', 'Specialist Suite Cleaning', 'Medical Centre Cleaning', 'Pathology Lab Cleaning', 'Dental Clinic Cleaning', 'Allied Health Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Trusted by Sydney Medical Practices</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Choosing the Right Medical Office Cleaning Company
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Not every cleaning company is equipped for medical environments. <strong>Pro Clean Corp is a specialist medical office cleaning company</strong> — with TGA-registered products, infection control protocols and staff trained to NHMRC standards.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-8">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {['TGA-registered disinfectants', 'NHMRC infection control training', '$20M public liability', 'Police-checked cleaners', 'After-hours scheduling', 'Service confirmation reports'].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-white">
                      <span className="text-green-300">✓</span>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/medical.webp"
                alt="Medical office cleaning company Sydney"
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
            <strong>A qualified medical office cleaning company must demonstrate</strong>: TGA-registered hospital-grade disinfectants, NHMRC-aligned infection control protocols, police-checked and trained staff, and documented cleaning procedures for each zone of your practice. Pro Clean Corp meets every requirement for GP clinics, specialist suites and allied health practices across Sydney.
          </p>
        </div>
      </section>

      {/* What to Look For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">What to Look for in a Medical Office Cleaning Company</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Use this checklist when evaluating cleaning companies for your medical practice.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Infection Control Training', detail: 'Staff should hold documented infection control training aligned with NHMRC guidelines. This is non-negotiable for any patient-facing medical environment.', priority: 'Must Have' },
              { title: 'TGA-Registered Disinfectants', detail: 'All disinfectants used in clinical areas must be TGA-registered and effective against the target pathogens for your practice setting.', priority: 'Must Have' },
              { title: 'Colour-Coded Cleaning Systems', detail: 'Separate colour-coded microfibre cloths and mop heads for different zones (clinical, bathroom, kitchen) prevent cross-contamination.', priority: 'Must Have' },
              { title: 'After-Hours Availability', detail: 'Medical cleaning should occur after the last patient of the day. Confirm the company can reliably schedule evening or early morning cleans.', priority: 'Essential' },
              { title: 'Public Liability Insurance', detail: 'Minimum $20M. Healthcare settings carry elevated risk — confirm insurance documentation before signing any agreement.', priority: 'Must Have' },
              { title: 'Clinical Waste Protocols', detail: 'The cleaning company must understand clinical waste disposal requirements and never handle sharps or biohazard material outside their training scope.', priority: 'Essential' },
              { title: 'Police-Checked Staff', detail: 'Medical practices hold sensitive patient data. All staff who access your premises should hold current police clearances.', priority: 'Must Have' },
              { title: 'Written Service Reports', detail: 'Service confirmation reports after each clean allow practice managers to verify the cleaning standard and maintain compliance records.', priority: 'Essential' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 rounded-xl p-5">
                <div className={`text-xs font-bold px-2 py-1 rounded h-fit mt-0.5 ${item.priority === 'Must Have' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>{item.priority}</div>
                <div>
                  <h3 className="font-bold text-darkblue mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Types */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/faq3.jpg"
                alt="Medical office cleaning types"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Medical Practice Types We Clean</h2>
              <div className="grid grid-cols-2 gap-3">
                {['General Practice (GP)', 'Specialist Medical Suites', 'Allied Health Clinics', 'Dental Practices', 'Physiotherapy Clinics', 'Psychology & Counselling', 'Pathology Rooms', 'Radiology Suites', 'Day Surgery Facilities', 'Medical Centres'].map((type, i) => (
                  <div key={i} className="bg-white rounded-lg px-4 py-3 text-sm text-darkblue font-medium border border-gray-100">
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Medical Office Cleaning Company</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
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
          <h2 className="text-3xl font-bold mb-4">Get a Free Medical Office Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment, written quote within 24 hours. After-hours scheduling available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
