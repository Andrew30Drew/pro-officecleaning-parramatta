import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'School Cleaning Parramatta | ProCleanCorp Education',
  description: 'Professional school cleaning in Parramatta for primary schools, high schools and TAFE campuses. Working with WWC-checked staff, eco products. Free quote.',
  keywords: 'school cleaning parramatta, school cleaners parramatta, school cleaning services parramatta, DET cleaning parramatta, education cleaning parramatta, WWC school cleaners parramatta',
  openGraph: {
    title: 'School Cleaning Parramatta | ProCleanCorp Education',
    description: 'School cleaning in Parramatta — WWC-checked staff, eco products, DET-compliant. Primary schools, high schools and TAFE. Free quote.',
    url: 'https://www.procleancorp.com.au/school-cleaning-parramatta',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'School cleaning Parramatta education facility cleaners' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/school-cleaning-parramatta' }
};

const faqs = [
  {
    question: 'Do your school cleaners in Parramatta have Working With Children checks?',
    answer: 'Yes. All ProCleanCorp staff deployed to school cleaning in Parramatta hold current Working With Children (WWC) checks — this is a mandatory requirement for any cleaning contractor working in NSW schools, including public (DET) and independent schools. We maintain records of all WWC checks and can provide copies to school administration. All staff are also police-checked as standard.'
  },
  {
    question: 'Can you provide school cleaning that works around the school term calendar?',
    answer: 'Yes. ProCleanCorp provides school cleaning programs specifically structured around the NSW school term calendar. Regular cleaning runs during term time, with scheduled deep clean programs during holiday breaks — when classrooms and common areas can be accessed without disrupting students. We provide term-break deep cleans that cover carpet shampooing, classroom chair and desk sanitisation, gymnasium floor maintenance and outdoor area pressure washing.'
  },
  {
    question: 'What eco-friendly products do you use for school cleaning in Parramatta?',
    answer: 'ProCleanCorp uses eco-certified, low-VOC cleaning products for all school cleaning in Parramatta. Our standard range includes biodegradable disinfectants, fragrance-free floor cleaners and pH-neutral surface sanitisers appropriate for use in classrooms and common areas where students are present. We avoid harsh chemicals (bleach-based aerosols, solvent cleaners) in occupied school environments and can provide product safety data sheets on request.'
  }
];

export default function SchoolCleaningParramattaPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="School Cleaning Parramatta"
        serviceDescription="ProCleanCorp provides professional school cleaning in Parramatta with Working With Children-checked staff, eco-certified products and flexible scheduling that works around school term calendars."
        serviceUrl="https://www.procleancorp.com.au/school-cleaning-parramatta"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['WWC-Checked Staff', 'Term-Break Deep Cleans', 'Eco-Certified Products', 'DET Compliance Documentation', 'TAFE Campus Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Parramatta School & Education Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                School Cleaning Parramatta — Education Facility Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides professional school cleaning in Parramatta with WWC-checked staff, eco-certified products and DET-compliant documentation. Primary schools, high schools, TAFE campuses and private colleges.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ WWC-Checked Staff &nbsp;|&nbsp; ✓ Eco Products &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="School cleaning Parramatta education facility cleaners"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides professional school cleaning in Parramatta</strong> with Working With Children-checked staff, eco-certified products and flexible scheduling that works around school term calendars. Parramatta is the centre of Western Sydney's education corridor — we serve public schools, independent schools, TAFE campuses and the Parramatta City Campus.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">School Cleaning Services in Parramatta</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Parramatta is the centre of Western Sydney's education corridor — dozens of public and private schools, TAFE campuses and tertiary institutions are located within the local government area. School cleaning has requirements that differ significantly from standard commercial cleaning: WWC-checked staff, DET compliance capability, eco-appropriate products for student environments, and scheduling that respects the school calendar.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp provides school cleaning in Parramatta with all these requirements built into our standard program. Our staff are WWC-checked, our products are eco-certified and low-VOC, and our cleaning schedules can be structured around term dates — with deep clean programs scheduled for the school holiday periods when full access is available.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Parramatta School Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Classroom cleaning & sanitisation', 'Toilet block cleaning', 'Staff room & administration', 'Canteen & kitchen cleaning', 'Gymnasium & sports hall', 'Library & computer labs', 'Reception & foyer', 'External area sweeping', 'Term-break deep cleans', 'Carpet & hard floor care', 'Bin emptying & waste management', 'COVID & infection control protocols'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Parramatta School Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Parramatta CBD', 'Westmead', 'North Parramatta', 'South Parramatta', 'Rydalmere', 'Dundas', 'Carlingford', 'Toongabbie'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">School & education cleaning. Parramatta & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — School Cleaning Parramatta</h3>
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
                { label: 'School Cleaning Sydney', href: '/school-cleaning-sydney' },
                { label: 'Childcare Cleaning Parramatta', href: '/childcare-cleaning-parramatta' },
                { label: 'Commercial Cleaning Parramatta', href: '/commercial-cleaning-parramatta' },
                { label: 'Medical Cleaning Parramatta', href: '/medical-cleaning-parramatta' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">School Cleaning Parramatta — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">WWC-checked staff. Eco-certified products. Term calendar scheduling.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
