import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Eastern Suburbs | Professional Business Cleaning',
  description: 'Top-rated commercial cleaning services in Eastern Suburbs Sydney. Professional solutions for offices, retail, and industrial sites. From Bondi Junction to Rose Bay, we service the entire Eastern Suburbs region with premium commercial cleaning.',
  keywords: 'commercial cleaning Eastern Suburbs, commercial cleaners Eastern Suburbs, office cleaning Eastern Suburbs, business cleaning Eastern Suburbs, strata cleaning Eastern Suburbs, industrial cleaning Eastern Suburbs, cleaning services Eastern Suburbs, professional cleaners Eastern Suburbs, commercial cleaning company Eastern Suburbs, office cleaners Eastern Suburbs',
  openGraph: {
    title: 'Commercial Cleaning Eastern Suburbs | Pro Clean Corp',
    description: 'Top-rated commercial cleaning services in Eastern Suburbs Sydney. Professional solutions for offices, retail, and industrial sites.',
    url: '/commercial-cleaning-eastern-suburbs',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial Cleaning Eastern Suburbs' }]
  },
  alternates: { canonical: '/commercial-cleaning-eastern-suburbs' }
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
                Commercial Cleaning Eastern Suburbs
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                From Bondi Junction to Rose Bay, we service the entire Eastern Suburbs region with premium commercial cleaning. Pro Clean Corp delivers reliable, high-quality cleaning services for businesses of all sizes across Eastern Suburbs.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial Cleaning Eastern Suburbs"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Cleaning Services in Eastern Suburbs</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp is a trusted partner for businesses throughout the <strong>Eastern Suburbs</strong> region. We understand the diverse mix of commercial properties here, from corporate offices and retail boutiques to industrial warehouses and strata complexes.
                </p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Our local teams are positioned to provide prompt, reliable service. We customize our cleaning protocols to match your specific industry requirements, ensuring a safe and hygienic environment for your staff and customers.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Choose Us in Eastern Suburbs?</h3>
                <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
                  <li><strong>Local Expertise:</strong> We know the area and have teams ready to deploy.</li>
                  <li><strong>Comprehensive Service:</strong> One provider for office, carpet, window, and strata cleaning.</li>
                  <li><strong>Quality Guaranteed:</strong> Regular inspections and a satisfaction guarantee.</li>
                  <li><strong>Flexible Scheduling:</strong> After-hours and weekend cleaning available.</li>
                </ul>
              </div>
              
              <div>
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Our Services Include</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Office Cleaning</li>
                    <li>• Strata & Body Corporate</li>
                    <li>• Retail & Showroom</li>
                    <li>• Medical Centers</li>
                    <li>• Gyms & Fitness Centers</li>
                    <li>• Warehouse & Industrial</li>
                    <li>• Childcare Centers</li>
                  </ul>
                </div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Need a Quote?</h4>
                    <p className="text-sm mb-4">Contact us for a tailored cleaning plan.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Business?</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today for commercial cleaning in Eastern Suburbs.
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
