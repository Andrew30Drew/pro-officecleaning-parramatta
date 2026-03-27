import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Pyrmont | Professional Cleaners',
  description: 'Reliable commercial cleaning services in Pyrmont. We service offices, shops, and businesses in Pyrmont with expert cleaning teams. Get a free quote.',
  keywords: 'commercial cleaning Pyrmont, office cleaning Pyrmont, business cleaning Pyrmont, commercial cleaners Pyrmont, office cleaners Pyrmont, cleaning services Pyrmont, retail cleaning Pyrmont, strata cleaning Pyrmont, bonded cleaners Pyrmont',
  openGraph: {
    title: 'Commercial Cleaning Pyrmont | Professional Cleaners',
    description: 'Reliable commercial cleaning services in Pyrmont. We service offices, shops, and businesses.',
    url: '/commercial-cleaning-pyrmont',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial Cleaning Pyrmont' }]
  },
  alternates: { canonical: '/commercial-cleaning-pyrmont' }
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
                Commercial Cleaning Pyrmont
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                 Reliable, professional commercial cleaning for businesses in Pyrmont. From daily office maintenance to deep cleans, we ensure your premises sparkle.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial Cleaning Pyrmont"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Expert Commercial Cleaning in Pyrmont</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Looking for a cleaning partner in <strong>Pyrmont</strong>? Pro Clean Corp delivers consistent, high-quality cleaning results. We service a wide range of properties including offices, retail stores, strata buildings, and commercial facilities.
                </p>
                 <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Our team is fully insured, police-checked, and trained in modern cleaning techniques. We understand the fast-paced nature of businesses in Pyrmont and offer flexible scheduling to minimize disruption.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Our Pyrmont Cleaning Solutions</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-blueprimary">Office Cleaning</h4>
                        <p className="text-sm text-gray-600">Daily or weekly maintenance for productivity.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-blueprimary">Retail Cleaning</h4>
                        <p className="text-sm text-gray-600">Spotless showrooms and shops.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-blueprimary">Strata Maintenance</h4>
                        <p className="text-sm text-gray-600">Common area and foyer cleaning.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-blueprimary">Specialized Cleans</h4>
                        <p className="text-sm text-gray-600">Carpet, window, and deep cleaning.</p>
                    </div>
                </div>
              </div>
              
              <div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Get a Quote for Pyrmont</h4>
                    <p className="text-sm mb-4">Fast, free, and competitive.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Your Local Cleaners in Pyrmont</h3>
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
