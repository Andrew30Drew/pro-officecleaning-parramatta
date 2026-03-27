import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Centre Cleaning Penrith | Healthcare Cleaning Services',
  description: 'Specialized medical centre cleaning in Penrith NSW. Hospital-grade disinfection for clinics, dental surgeries, and healthcare facilities. CQC compliant standards.',
  keywords: 'medical cleaning Penrith, medical centre cleaning Penrith, healthcare cleaning Penrith, clinic cleaning Penrith, dental surgery cleaning Penrith, hospital grade cleaning Penrith, medical cleaners Penrith, doctor surgery cleaning Penrith, pathology cleaning Penrith, aged care cleaning Penrith, disinfection services Penrith, medical facility cleaning Penrith, healthcare cleaners Penrith, professional medical cleaning Penrith, sanitization services Penrith, clinical cleaning Penrith, medical waste management Penrith, infection control cleaning Penrith, best medical cleaners Penrith, commercial cleaning Penrith',
  openGraph: {
    title: 'Medical Centre Cleaning Penrith | Healthcare Cleaning Services',
    description: 'Specialized medical centre cleaning in Penrith NSW. Hospital-grade disinfection for clinics. CQC compliant standards.',
    url: '/medical-cleaning-penrith',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical Centre Cleaning Penrith' }]
  },
  alternates: { canonical: '/medical-cleaning-penrith' }
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Cleaning Penrith
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Specialized medical centre cleaning in Penrith. We provide hospital-grade disinfection for clinics, dental surgeries, and healthcare facilities with strict adherence to infection control protocols.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Medical Cleaning Penrith"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Medical Centre Cleaning Services in Penrith</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers specialized <strong>medical cleaning</strong> services throughout Penrith. We understand that healthcare environments require a higher standard of cleaning to ensure patient safety and prevent cross-contamination.
                </p>
                
                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Choose Us for Medical Cleaning in Penrith?</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Our team in Penrith is trained in infection control procedures. We use hospital-grade disinfectants and color-coded equipment to maintain the highest hygiene standards for your practice.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Infection Control</h4>
                    <p className="text-gray-600 text-sm">Strict adherence to hygiene protocols to prevent spread of illness.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Hospital-Grade</h4>
                    <p className="text-gray-600 text-sm">EPA-approved disinfectants effective against pathogens.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Trained Staff</h4>
                    <p className="text-gray-600 text-sm">Cleaners vetted and trained in medical environment safety.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Confidentiality</h4>
                    <p className="text-gray-600 text-sm">Respect for patient privacy and sensitive environments.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Our Services Include</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Waiting area sanitization</li><li>• Consulting room cleaning</li><li>• Dental surgery sterilization</li><li>• Hazardous waste management</li><li>• Floor polishing and waxing</li><li>• High-touch surface disinfection</li><li>• Restroom deep cleaning</li>
                  </ul>
                </div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Need a Quote?</h4>
                    <p className="text-sm mb-4">Contact us for a tailored cleaning plan.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions about Medical Cleaning in Penrith</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'Are your cleaners trained in infection control for Penrith clinics?',
                  answer: 'Yes, all our staff assigned to medical facilities in Penrith undergo specific training in infection control, cross-contamination prevention, and the correct use of hospital-grade disinfectants.'
                },
                {
                  question: 'Do you use non-toxic products for patient safety?',
                  answer: 'We use TGA-approved hospital-grade disinfectants that are effective against pathogens but safe for patients and staff. We can also provide Safety Data Sheets (SDS) for all chemicals used in your Penrith practice.'
                },
                {
                  question: 'Can you clean our Penrith dental surgery after hours?',
                  answer: 'Absolutely. We understand the busy nature of medical practices in Penrith. We offer flexible after-hours cleaning to ensure your clinic is sterilized and ready for patients the next morning.'
                },
                {
                  question: 'How do you prevent cross-contamination?',
                  answer: 'We strictly adhere to a color-coded cleaning system (e.g., separate cloths/mops for restrooms vs clinical areas) and change materials frequently to eliminate the risk of cross-contamination in your Penrith facility.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Ensure Patient Safety</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today for specialized medical centre cleaning in Penrith.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
