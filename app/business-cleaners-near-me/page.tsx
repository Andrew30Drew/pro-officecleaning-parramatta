import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Cleaners Near Me | Local Professional Cleaning Teams Sydney',
  description: 'Trusted business cleaners near you in Sydney NSW. Local professional cleaning teams providing reliable commercial cleaning services with fast response and competitive rates.',
  keywords: 'business cleaners near me, local commercial cleaners Sydney, professional business cleaning teams nearby, commercial cleaners in my area',
  openGraph: {
    title: 'Business Cleaners Near Me | Local Professional Cleaning Teams Sydney',
    description: 'Trusted business cleaners near you in Sydney NSW. Local professional cleaning teams providing reliable commercial cleaning services with fast response and competitive rates.',
    url: '/business-cleaners-near-me',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Business cleaners near me' }]
  },
  alternates: { canonical: '/business-cleaners-near-me' }
};

export default function BusinessCleanersNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenprimary via-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Business Cleaners Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional business cleaners near you with Pro Clean Corp. Local cleaning teams throughout Sydney NSW providing reliable commercial cleaning services with fast response times and competitive rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:1300494983" 
                  className="bg-white text-darkblue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Call Now: 1300 494 983
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-darkblue transition-colors">
                  Get Free Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Business cleaners near me - Professional cleaning teams"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Business Cleaners Near You</h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Pro Clean Corp provides professional business cleaners throughout Sydney NSW, delivering reliable commercial cleaning services that maintain professional business environments, support workplace productivity, and create positive impressions for clients and employees. Our local cleaning teams understand business requirements and provide flexible, comprehensive cleaning solutions tailored to diverse commercial needs.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Business Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Office cleaning & maintenance',
                  'Retail store cleaning',
                  'Restaurant cleaning services',
                  'Warehouse cleaning',
                  'Medical facility cleaning',
                  'Gym & fitness center cleaning',
                  'Childcare center cleaning',
                  'Strata building cleaning',
                  'Carpet & upholstery cleaning',
                  'Window cleaning services',
                  'Deep cleaning services',
                  'Emergency cleaning response'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greenprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Business Areas We Service</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'North Sydney', 'Parramatta', 'Chatswood',
                'Bondi Junction', 'Liverpool', 'Blacktown', 'Penrith',
                'St Leonards', 'Artarmon', 'Granville', 'Westmead',
                'Randwick', 'Kensington', 'Mascot', 'Green Valley',
                'Mount Druitt', 'Eastern Creek', 'Kingswood', 'Emu Plains'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-greenprimary via-darkblue to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Business Cleaners Near You</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for reliable business cleaning services. Local teams, fast response, competitive rates.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Business Cleaning Services
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}