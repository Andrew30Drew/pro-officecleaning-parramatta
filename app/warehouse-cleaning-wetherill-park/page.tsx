import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Wetherill Park | Professional Industrial Cleaning',
  description: 'Top-rated warehouse cleaning services in Wetherill Park NSW. Heavy-duty cleaning solutions for factories, manufacturing plants, and industrial sites. We handle grime, grease, and dust. Expert teams, competitive rates.',
  keywords: 'warehouse cleaning Wetherill Park, industrial cleaning Wetherill Park, factory cleaning Wetherill Park, warehouse cleaners Wetherill Park, industrial cleaners Wetherill Park, manufacturing plant cleaning Wetherill Park, industrial floor scrubbing Wetherill Park, warehouse sweeping Wetherill Park, high pressure cleaning Wetherill Park, heavy duty cleaning Wetherill Park, industrial shed cleaning Wetherill Park, distribution centre cleaning Wetherill Park, warehouse floor maintenance Wetherill Park, industrial sanitization Wetherill Park, workshop cleaning Wetherill Park, safety line marking Wetherill Park, hazardous waste removal Wetherill Park, industrial dusting Wetherill Park, commercial cleaning Wetherill Park, best warehouse cleaners Wetherill Park',
  openGraph: {
    title: 'Warehouse Cleaning Wetherill Park | Pro Clean Corp',
    description: 'Heavy-duty cleaning solutions for factories and warehouses in Wetherill Park. We handle the tough grime, grease, and dust to keep your operations running safely.',
    url: '/warehouse-cleaning-wetherill-park',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Warehouse Cleaning Wetherill Park' }]
  },
  alternates: { canonical: '/warehouse-cleaning-wetherill-park' }
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
                Warehouse Cleaning Wetherill Park
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Heavy-duty cleaning solutions for warehouses, factories, and industrial sites in Wetherill Park. We handle the tough grime, grease, and dust to keep your operations running safely.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Warehouse Cleaning Wetherill Park"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Warehouse Cleaning Wetherill Park</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers specialized <strong>warehouse cleaning</strong> throughout Wetherill Park. Our industrial cleaning team is equipped with heavy-duty scrubbers and pressure washers to maintain your facility's safety and hygiene standards.
                </p>
                
                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Choose Us for Warehouse Cleaning in Wetherill Park?</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  We understand the industrial landscape of Wetherill Park. Our protocols are adapted to specific WHS requirements and operational schedules to minimize downtime.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">WHS Compliance</h4>
                    <p className="text-gray-600 text-sm">Strict adherence to safety protocols and SWMS.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Heavy Duty Gear</h4>
                    <p className="text-gray-600 text-sm">Industrial-grade scrubbers and pressure washers.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Minimised Downtime</h4>
                    <p className="text-gray-600 text-sm">Efficient cleaning during shutdowns or off-hours.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Experienced Team</h4>
                    <p className="text-gray-600 text-sm">Staff trained in industrial environments.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Our Services Include</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Floor scrubbing and sweeping</li><li>• High-pressure cleaning</li><li>• Machinery degreasing</li><li>• High-level dusting</li><li>• Staff amenity cleaning</li><li>• Safety line marking maintenance</li><li>• Hazardous waste removal</li>
                  </ul>
                </div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Need a Quote?</h4>
                    <p className="text-sm mb-4">Contact us for a tailored cleaning plan.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions about Industrial Cleaning Wetherill Park</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'Do you have the capacity to clean large logistic centres in Wetherill Park?',
                  answer: 'Yes, we are equipped with industrial ride-on scrubbers and sweepers perfect for large-scale warehouses and distribution centres in Wetherill Park, ensuring efficient cleaning of vast floor spaces.'
                },
                {
                  question: 'Is your team trained for chemical handling and safety?',
                  answer: 'Absolutely. All our staff working in Wetherill Park industrial sites are trained in chemical handling, spill response, and strictly adhere to WHS guidelines and SWMS to ensure a safe working environment.'
                },
                {
                  question: 'Can you clean our Wetherill Park factory during shutdown periods?',
                  answer: 'Yes, we frequently perform deep cleans during scheduled shutdowns or maintenance periods in Wetherill Park factories to minimize disruption to your production schedules.'
                },
                {
                  question: 'Do you offer high-pressure cleaning for exterior surfaces?',
                  answer: 'Yes, we provide high-pressure cleaning for Wetherill Park industrial sites, including concrete floors, external walls, loading docks, and machinery to remove grime, oil, and grease buildup.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Warehouse?</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today for professional warehouse cleaning services in Wetherill Park.
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
