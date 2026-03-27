import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Body Corporate & Strata Cleaning Sydney | Professional Services',
  description: 'Top-rated body corporate cleaning services in Sydney NSW. Pro Clean Corp provides reliable, high-quality body corporate and strata cleaning services across Sydney. We understand the unique challenges of maintaining common areas in residential and commercial strata schemes. Expert teams, competitive rates.',
  keywords: 'body corporate cleaning Sydney, strata cleaning Sydney, strata maintenance Sydney, residential strata cleaning, commercial strata cleaning, common area cleaning Sydney, strata gardeners Sydney, building management cleaning, apartment block cleaning, unit complex cleaning, foyer cleaning services, stairwell cleaning Sydney, garbage chute cleaning, bin room maintenance, high pressure cleaning strata, window cleaning strata, carpet cleaning strata, emergency strata cleaning, strata cleaning companies Sydney, best strata cleaners Sydney',
  openGraph: {
    title: 'Body Corporate & Strata Cleaning Sydney | Pro Clean Corp',
    description: 'Pro Clean Corp provides reliable, high-quality body corporate and strata cleaning services across Sydney. We understand the unique challenges of maintaining common areas in residential and commercial strata schemes.',
    url: '/body-corporate-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Body Corporate & Strata Cleaning Sydney' }]
  },
  alternates: { canonical: '/body-corporate-cleaning-sydney' }
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
                Body Corporate Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides reliable, high-quality body corporate and strata cleaning services across Sydney. We understand the unique challenges of maintaining common areas in residential and commercial strata schemes.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Body Corporate & Strata Cleaning Sydney"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Body Corporate Cleaning Sydney</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers specialized <strong>body corporate cleaning</strong> throughout Sydney. Pro Clean Corp provides reliable, high-quality body corporate and strata cleaning services across Sydney. We understand the unique challenges of maintaining common areas in residential and commercial strata schemes. Our team allows you to focus on your core activities while we maintain a pristine environment.
                </p>
                
                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Choose Us for Body Corporate Cleaning Sydney?</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  We verify that every corner is attended to. Whether it's a high-traffic showroom or a heavy-duty industrial site, our protocols are adapted to your specific industry constraints and WHS requirements.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Reliable Scheduler</h4>
                    <p className="text-gray-600 text-sm">Consistent service on days that work for your residents.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Detailed Reporting</h4>
                    <p className="text-gray-600 text-sm">Regular reports for strata managers and committees.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Resident Friendly</h4>
                    <p className="text-gray-600 text-sm">Polite, uniformed staff who respect resident privacy.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Safety Compliant</h4>
                    <p className="text-gray-600 text-sm">Fully insured with WHS management systems in place.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Our Services Include</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Common area maintenance</li><li>• Foyer and hallway cleaning</li><li>• Lift and stairwell sanitization</li><li>• Bin room cleaning and management</li><li>• Window and glass cleaning</li><li>• Car park sweeping and scrubbing</li><li>• Garden and outdoor area maintenance</li><li>• Emergency spill response</li>
                  </ul>
                </div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Need a Quote?</h4>
                    <p className="text-sm mb-4">Contact us for a tailored cleaning plan.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

             <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6 mb-12">
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">What is included in your body corporate cleaning service?</h4>
                  <p className="text-gray-700 leading-relaxed">Our service is comprehensive, covering all common areas including foyers, hallways, lifts, stairwells, glass/windows, bin rooms, and outdoor areas like gardens and car parks. We customize the scope based on your specific strata plan requirements.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">How often do you service strata properties in Sydney?</h4>
                  <p className="text-gray-700 leading-relaxed">We offer flexible schedules tailored to the property's needs. This can range from daily visits for large high-rise complexes to weekly or fortnightly services for smaller blocks.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">Do you provide reports for strata meetings?</h4>
                  <p className="text-gray-700 leading-relaxed">Yes, we provide detailed cleaning reports and can attend strata committee meetings if required to discuss maintenance schedules or specific issues.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">Are your staff background checked?</h4>
                  <p className="text-gray-700 leading-relaxed">Absolutely. All our cleaners undergo strict police checks and are fully trained in WHS protocols to ensure the safety and security of all residents.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">Do you handle bin management?</h4>
                  <p className="text-gray-700 leading-relaxed">Yes, we can manage the entire bin cycle, including taking bins out for collection, bringing them in, and cleaning/sanitizing the bin rooms to prevent odors and pests.</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Service Areas</h3>
            <p className="text-gray-700 mb-6 text-lg">
              We provide body corporate cleaning services across all major Sydney districts including Sydney CBD, Parramatta, North Sydney, and industrial hubs like Wetherill Park and Smithfield.
            </p>
            
            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Facility?</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today for professional body corporate cleaning services.
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
