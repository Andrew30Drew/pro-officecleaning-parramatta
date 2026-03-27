import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Rosebery | Professional Cleaners',
  description: "Top-rated commercial cleaning services in Rosebery. Serving Rosebery's design district, cafes, and creative offices. Get a free quote today.",
  keywords: 'commercial cleaning Rosebery, office cleaning Rosebery, business cleaning Rosebery, commercial cleaners Rosebery, office cleaners Rosebery, cleaning services Rosebery, retail cleaning Rosebery, strata cleaning Rosebery, industrial cleaning Rosebery',
  openGraph: {
    title: 'Commercial Cleaning Rosebery | Professional Cleaners',
    description: "Top-rated commercial cleaning services in Rosebery. Serving Rosebery's design district, cafes, and creative offices.",
    url: '/commercial-cleaning-rosebery',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial Cleaning Rosebery' }]
  },
  alternates: { canonical: '/commercial-cleaning-rosebery' }
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
                Commercial Cleaning Rosebery
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                 Serving Rosebery's design district, cafes, and creative offices. Pro Clean Corp delivers reliable, high-quality cleaning services for businesses of all sizes across Rosebery.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial Cleaning Rosebery"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Expert Commercial Cleaning in Rosebery</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp is a localized cleaning partner for <strong>Rosebery</strong>. We provide tailored cleaning solutions that meet the specific needs of businesses in this area.
                </p>
                 <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Whether you manage a busy office, a retail storefront, or an industrial facility, our team has the experience to maintain your property to the highest standards. We are fully insured and committed to delivering consistent quality.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Our Services in Rosebery</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-blueprimary">General Cleaning</h4>
                        <p className="text-sm text-gray-600">Offices, retail stores, and showrooms.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-blueprimary">Industrial Cleaning</h4>
                        <p className="text-sm text-gray-600">Warehouses, factories, and workshops.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-blueprimary">Strata Services</h4>
                        <p className="text-sm text-gray-600">Common areas, foyers, and bin management.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-blueprimary">Medical & Hygienic</h4>
                        <p className="text-sm text-gray-600">Clinics, dental surgeries, and gyms.</p>
                    </div>
                </div>
              </div>
              
              <div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Get a Quote for Rosebery</h4>
                    <p className="text-sm mb-4">Fast, free, and competitive.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Your Local Cleaners in Rosebery</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today.
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
