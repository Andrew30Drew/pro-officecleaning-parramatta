import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Cleaning Services Sydney | Professional Services',
  description: 'Top-rated industrial cleaning services services in Sydney. Heavy-duty industrial cleaning services across Sydney. We manage factories, plants, and hazardous environments with certified safety protocols. Expert teams, competitive rates.',
  keywords: 'industrial cleaning services, industrial cleaning services sydney, professional industrial cleaning services, commercial cleaning sydney, specialist cleaning sydney',
  openGraph: {
    title: 'Industrial Cleaning Services Sydney | Pro Clean Corp',
    description: 'Heavy-duty industrial cleaning services across Sydney. We manage factories, plants, and hazardous environments with certified safety protocols.',
    url: '/industrial-cleaning-services-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Industrial Cleaning Services Sydney' }]
  },
  alternates: { canonical: '/industrial-cleaning-services-sydney' }
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
                Industrial Cleaning Services Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Heavy-duty industrial cleaning services across Sydney. We manage factories, plants, and hazardous environments with certified safety protocols.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Industrial Cleaning Services Sydney"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Industrial Cleaning Services Sydney</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers specialized <strong>industrial cleaning services</strong> services throughout Sydney. We have the expertise, equipment, and protocols to handle demanding environments.
                </p>
                
                <h3 className="text-2xl font-bold text-darkblue mb-4">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Factory Maintenance</h4>
                    <p className="text-gray-600 text-sm">Regular contract cleaning for manufacturing plants.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">High Dusting</h4>
                    <p className="text-gray-600 text-sm">Removing dust from rafters, pipes, and high ceilings.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Floor Scrubbing</h4>
                    <p className="text-gray-600 text-sm">Ride-on scrubbing for sweeping large concrete areas.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Safety First</h4>
                    <p className="text-gray-600 text-sm">SWMS and WHS compliant staff for dangerous sites.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Need a Quote?</h4>
                    <p className="text-sm mb-4">Contact us for a tailored cleaning plan.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Specialized Cleaning Solutions</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today for industrial cleaning services.
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
