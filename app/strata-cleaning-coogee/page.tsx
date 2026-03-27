import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Body Corporate & Strata Cleaning Coogee | Professional Services',
  description: 'Top-rated body corporate cleaning services in Coogee NSW. Pro Clean Corp provides reliable, high-quality body corporate and strata cleaning services across Coogee. We understand the unique challenges of maintaining common areas. Expert teams, competitive rates.',
  keywords: 'strata cleaning Coogee, body corporate cleaning Coogee, residential strata cleaning Coogee, commercial strata cleaning Coogee, corporate body cleaning Coogee, common area cleaning Coogee, strata maintenance Coogee, apartment building cleaning Coogee, unit complex cleaning Coogee, foyer cleaning Coogee, stairwell cleaning Coogee, strata cleaners Coogee, professional strata cleaning Coogee, building management cleaning Coogee, strata gardening Coogee, waste management Coogee, bin room cleaning Coogee, window cleaning Coogee, strata cleaning companies Coogee, best strata cleaners Coogee',
  openGraph: {
    title: 'Body Corporate & Strata Cleaning Coogee | Pro Clean Corp',
    description: 'Pro Clean Corp provides reliable, high-quality body corporate and strata cleaning services across Coogee. We understand the unique challenges of maintaining common areas.',
    url: '/strata-cleaning-coogee',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Body Corporate & Strata Cleaning Coogee' }]
  },
  alternates: { canonical: '/strata-cleaning-coogee' }
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
                Strata Cleaning Coogee
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides reliable, high-quality body corporate and strata cleaning services across Coogee. We understand the unique challenges of maintaining common areas in residential and commercial strata schemes.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Strata Cleaning Coogee"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Strata Cleaning Coogee</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers specialized <strong>strata cleaning</strong> throughout Coogee. We maintain pristine common areas including foyers, hallways, lifts, and gardens. Our team works discreetly and respectfully in residential environments.
                </p>
                
                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Choose Us for Strata Cleaning in Coogee?</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  We understand the expectations of strata committees and residents in Coogee. Our staff are trained to be polite, efficient, and thorough.
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
                    <li>• Common area maintenance</li><li>• Foyer and hallway cleaning</li><li>• Lift and stairwell sanitization</li><li>• Bin room cleaning</li><li>• Window and glass cleaning</li><li>• Car park sweeping</li><li>• Garden maintenance</li>
                  </ul>
                </div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Need a Quote?</h4>
                    <p className="text-sm mb-4">Contact us for a tailored cleaning plan.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions about Strata Cleaning in Coogee</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'What areas do you clean in Coogee strata buildings?',
                  answer: 'We clean all common areas suitable for Coogee residential and commercial blocks, including entrance foyers, hallways, stairwells, elevators, mailrooms, garbage chutes, bin rooms, and communal outdoor areas such as gardens and carparks.'
                },
                {
                  question: 'Do you work directly with Coogee strata managers?',
                  answer: 'Yes, we work closely with Strata Managers and Body Corporate committees in Coogee. We provide detailed reporting, attend site meetings if requested, and ensure open communication regarding maintenance issues.'
                },
                {
                  question: 'Can you handle bin management for our Coogee complex?',
                  answer: 'Depending on your needs, we can include bin services—taking bins to the kerb for collection, returning them, and sanitizing the bin room to prevent odors and pests in your Coogee property.'
                },
                {
                  question: 'How often do you service Coogee strata properties?',
                  answer: "We can tailor a schedule to fit your building\'s size and traffic. This ranges from daily cleaning for large high-rises in Coogee to weekly or fortnightly visits for smaller unit blocks."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Building?</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today for professional strata cleaning services in Coogee.
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
