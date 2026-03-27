import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Office Cleaning Services Sydney | Doctor & Clinic Office Cleaning NSW | Pro Clean Corp',
  description: 'Professional medical office cleaning services across Sydney NSW. Specialist cleaning for GP offices, specialist rooms, and medical administration areas. IPC protocols. Call 1300 494 983.',
  keywords: ['medical office cleaning services', 'medical office cleaning Sydney', 'doctor office cleaning NSW', 'GP office cleaning Sydney', 'clinical office cleaning'],
  openGraph: { title: 'Medical Office Cleaning Services Sydney | Pro Clean Corp', description: 'Specialist medical office cleaning across Sydney. GP rooms, specialist offices, and medical administration.', url: '/medical-office-cleaning-services', type: 'website', images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical Office Cleaning Services Sydney' }] },
  twitter: { card: 'summary_large_image', title: 'Medical Office Cleaning Services Sydney | Pro Clean Corp', description: 'Professional medical office cleaning for Sydney GP practices and specialist clinics.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: '/medical-office-cleaning-services' }
};

export default function MedicalOfficeCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData serviceName="Medical Office Cleaning Services" serviceDescription="Pro Clean Corp provides professional medical office cleaning services across Sydney NSW. Specialist cleaning for GP consultation rooms, specialist offices, administration areas, and medical reception." serviceUrl="/medical-office-cleaning-services" serviceType="Medical Office Cleaning" price="$$-$$$" additionalServices={['GP Office Cleaning', 'Specialist Room Cleaning', 'Medical Reception Cleaning', 'Administration Area Cleaning', 'Staff Room Cleaning', 'After-Hours Medical Office Cleaning']} faqs={[{ question: 'What does medical office cleaning include?', answer: 'Medical office cleaning covers consultation room disinfection, examination table cleaning, reception and waiting area sanitisation, administration office cleaning, staff rooms and kitchens, and bathroom disinfection. All clinical areas use TGA-registered disinfectants and IPC protocols.' }, { question: 'Can medical office cleaners work outside clinic hours?', answer: 'Yes. Pro Clean Corp medical office cleaners are available after hours, early morning, and on weekends to clean your medical office without disrupting patient appointments or staff workflows.' }]} />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Medical Office Cleaning Experts</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Medical Office Cleaning Services</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp&apos;s medical office cleaning services cover every room in your practice — from consultation rooms and examination areas to reception, administration offices, staff rooms, and bathrooms — using TGA-registered disinfectants and IPC-compliant methods, after hours across Sydney.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ After-Hours Scheduling</span><span>✓ IPC Protocols</span><span>✓ All Sydney Suburbs</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/medical.webp" alt="Medical office cleaning services Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Medical office cleaning services</strong> ensure every room in your practice meets the hygiene standards expected of a professional healthcare environment — from spotless reception areas that create a strong first impression to properly disinfected consultation rooms that protect patient safety.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Complete Medical Office Cleaning</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">A medical practice is both a clinical environment and a professional office. It requires cleaning at two standards simultaneously — the infection control rigour of a healthcare facility and the professional presentation of a business office. Pro Clean Corp&apos;s medical office cleaning service delivers both.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">We handle every area of your practice: consultation rooms get full clinical disinfection with TGA-registered products, your reception and waiting room gets thorough commercial cleaning that creates a welcoming environment, and your administration offices get the same quality cleaning your team expects.</p>
            </div>
            <Image src="/images/services/faq3.jpg" alt="Medical office cleaning Sydney" className="rounded-2xl shadow-xl w-full h-72 object-cover" width={600} height={288} loading="lazy" />
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">What&apos;s Included in Medical Office Cleaning</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { area: 'Clinical Areas', items: ['Consultation room bench disinfection', 'Examination table sanitisation', 'Medical equipment surface wipe-down', 'Clinical waste area cleaning', 'Hand hygiene station restocking'] },
                { area: 'Reception & Waiting', items: ['Reception counter disinfection', 'Seating sanitisation', 'Magazine/reading material management', 'Floor vacuuming & mopping', 'High-touch point disinfection'] },
                { area: 'Administration Offices', items: ['Desk & workstation cleaning', 'Computer & phone sanitisation', 'Filing area dusting', 'Floor vacuuming', 'Bin emptying'] },
                { area: 'Amenities', items: ['Bathroom full disinfection', 'Staff kitchen cleaning', 'Consumables restocking', 'Bin replacement', 'Mirror & glass cleaning'] },
              ].map((section, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-darkblue mb-3">{section.area}</h4>
                  <ul className="space-y-1">{section.items.map((item, j) => <li key={j} className="text-sm text-gray-600 flex items-center space-x-2"><span className="text-greenprimary">✓</span><span>{item}</span></li>)}</ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Medical Office Cleaning Services</h3>
            <div className="space-y-4">
              {[
                { q: 'What does medical office cleaning include?', a: 'Consultation room disinfection, examination table cleaning, reception and waiting area sanitisation, administration office cleaning, staff rooms and kitchens, and bathroom disinfection. All clinical areas use TGA-registered disinfectants.' },
                { q: 'Can medical office cleaners work outside clinic hours?', a: 'Yes. We specialise in after-hours cleaning for medical offices across Sydney so your practice is spotless before the first patient appointment each morning.' },
                { q: 'How is medical office cleaning different from regular office cleaning?', a: 'Medical office cleaning includes clinical area disinfection with TGA-registered products, IPC protocols, and infection control measures in consultation and treatment rooms — in addition to the standard commercial office cleaning services.' },
                { q: 'How much does medical office cleaning cost in Sydney?', a: 'Costs depend on practice size, number of consultation rooms, and cleaning frequency. We provide free, detailed quotes after a site visit. Most small medical practices (2–4 consulting rooms) pay $100–$200 per clean.' }
              ].map((faq, i) => <div key={i} className="bg-gray-50 rounded-xl p-6"><h4 className="font-bold text-darkblue mb-2">{faq.q}</h4><p className="text-gray-700">{faq.a}</p></div>)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Medical Office Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">A clean medical office starts with the right specialist cleaner. Contact Pro Clean Corp for a free quote today.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983 — Free Quotes All Sydney</div>
          </div>
        </div>
      </section>
    </div>
  );
}
