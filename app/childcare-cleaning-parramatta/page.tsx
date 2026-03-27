import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Childcare Cleaning Parramatta | ProCleanCorp',
  description: 'Childcare centre cleaning in Parramatta. WWC-checked staff, non-toxic products, ACECQA-aware. Nap rooms, kitchens and outdoor areas. Free quote.',
  keywords: 'childcare cleaning parramatta, childcare centre cleaning parramatta, daycare cleaning parramatta, ACECQA cleaning parramatta, non-toxic childcare cleaning parramatta, WWC childcare cleaners parramatta',
  openGraph: {
    title: 'Childcare Cleaning Parramatta | ProCleanCorp',
    description: 'Childcare centre cleaning in Parramatta — WWC-checked, ACECQA-aware, non-toxic products safe for children. Free quote.',
    url: 'https://www.procleancorp.com.au/childcare-cleaning-parramatta',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Childcare cleaning Parramatta ACECQA compliant' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/childcare-cleaning-parramatta' }
};

const faqs = [
  {
    question: 'Do you use non-toxic, child-safe cleaning products in Parramatta childcare centres?',
    answer: 'Yes. ProCleanCorp uses pH-neutral, fragrance-free and non-toxic cleaning products for all childcare centre cleaning in Parramatta. Our standard childcare cleaning range includes TGA-approved disinfectants that meet infection control requirements without hazardous chemical residues, biodegradable floor cleaners safe for use in rooms where children crawl and play, and fragrance-free sanitisers appropriate for nap rooms and nursery areas. We can provide product safety data sheets (SDS) on request.'
  },
  {
    question: 'Are your childcare cleaners in Parramatta WWC-checked?',
    answer: 'Yes. All ProCleanCorp staff deployed to childcare centre cleaning in Parramatta hold current Working With Children (WWC) checks. This is a mandatory requirement under the Children (Education and Care Services) National Law for any contractor working in or around childcare facilities. We maintain records of all WWC checks and can provide copies to your centre director or nominated supervisor. Staff are also police-checked as standard.'
  },
  {
    question: 'What ACECQA standards do you meet for childcare cleaning in Parramatta?',
    answer: 'ProCleanCorp\'s childcare cleaning programs are designed to meet the infection prevention and facility hygiene standards referenced in the ACECQA Quality Area 2 (Children\'s Health and Safety). Specifically, our programs address: regular sanitisation of toys and surfaces that children contact, documented cleaning schedules available for ACECQA inspections, non-toxic products appropriate for the age groups in care, nap room cleaning protocols, and kitchen and food preparation area cleaning to food safety standards.'
  }
];

export default function ChildcareCleaningParramattaPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Childcare Cleaning Parramatta"
        serviceDescription="ProCleanCorp provides childcare centre cleaning in Parramatta with Working With Children-checked staff, ACECQA-aware infection control and non-toxic cleaning products safe for young children."
        serviceUrl="https://www.procleancorp.com.au/childcare-cleaning-parramatta"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['WWC-Checked Staff', 'Non-Toxic Products', 'ACECQA-Aware Protocols', 'Nap Room Cleaning', 'Outdoor Area Cleaning', 'Kitchen & Food Prep Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Parramatta Childcare Centre Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Childcare Centre Cleaning Parramatta — Safe, Certified Cleaning
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides childcare centre cleaning in Parramatta with WWC-checked staff, ACECQA-aware infection control protocols and non-toxic cleaning products safe for infants and young children.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ WWC-Checked &nbsp;|&nbsp; ✓ Non-Toxic Products &nbsp;|&nbsp; ✓ ACECQA-Aware</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Childcare cleaning Parramatta ACECQA compliant"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides childcare centre cleaning in Parramatta</strong> with Working With Children-checked staff, ACECQA-aware infection control and non-toxic cleaning products safe for young children. Childcare cleaning has the strictest safety requirements of any commercial sector — our program is built around what parents expect, not just what regulators require.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Childcare Centre Cleaning in Parramatta</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Childcare cleaning has the strictest safety requirements of any commercial sector. The decision-maker — centre directors and nominated supervisors — is ultimately driven by what they can say to parents about the cleanliness and hygiene of the facility. ProCleanCorp's childcare cleaning program is designed with this in mind: non-toxic products, documented protocols and WWC-checked staff that centre directors can confidently reference in their communications with families.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our ACECQA-aware infection control protocols cover all Quality Area 2 hygiene touchpoints — from nap room sanitisation to kitchen food safety and outdoor area maintenance. We provide cleaning schedule documentation suitable for ACECQA inspections.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Parramatta Childcare Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Classroom & play area sanitisation', 'Nap room & sleeping area cleaning', 'Kitchen & food prep area cleaning', 'Bathroom & nappy change area cleaning', 'Toy & equipment surface sanitisation', 'Outdoor play area cleaning', 'Reception & entry cleaning', 'Bin emptying & waste management', 'Non-toxic disinfection throughout', 'ACECQA cleaning documentation', 'WWC-checked & police-checked staff', 'After hours cleaning access'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Parramatta Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Parramatta', 'Westmead', 'Merrylands', 'Granville', 'South Granville', 'Harris Park', 'Woodville', 'Guildford'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">ACECQA-aware childcare cleaning. Parramatta & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Childcare Cleaning Parramatta</h3>
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
                { label: 'Childcare Centre Cleaning Sydney', href: '/childcare-cleaning-sydney' },
                { label: 'School Cleaning Parramatta', href: '/school-cleaning-parramatta' },
                { label: 'Medical Cleaning Parramatta', href: '/medical-cleaning-parramatta' },
                { label: 'Commercial Cleaning Parramatta', href: '/commercial-cleaning-parramatta' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Childcare Cleaning Parramatta — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">WWC-checked. Non-toxic products. ACECQA cleaning documentation available.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
