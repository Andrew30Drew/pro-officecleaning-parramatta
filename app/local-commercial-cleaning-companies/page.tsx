import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Commercial Cleaning Companies | Professional Business Cleaners Sydney',
  description: 'Top local commercial cleaning companies in Sydney NSW. Professional business cleaning services with community reputation, competitive rates, and reliable local teams.',
  keywords: 'local commercial cleaning companies, professional business cleaners Sydney, commercial cleaning services nearby, local cleaning contractors',
  openGraph: {
    title: 'Local Commercial Cleaning Companies | Professional Business Cleaners Sydney',
    description: 'Top local commercial cleaning companies in Sydney NSW. Professional business cleaning services with community reputation, competitive rates, and reliable local teams.',
    url: '/local-commercial-cleaning-companies',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Local commercial cleaning companies' }]
  },
  alternates: { canonical: '/local-commercial-cleaning-companies' }
};

export default function LocalCommercialCleaningCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-blueprimary to-greenprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Local Commercial Cleaning Companies
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Choose local commercial cleaning companies with Pro Clean Corp. Established Sydney NSW cleaning services with strong community reputation, personalized service, and comprehensive commercial solutions.
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
                src="/images/services/warehouse.webp"
                alt="Local commercial cleaning companies Sydney"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Leading Local Commercial Cleaning Companies</h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Pro Clean Corp stands among Sydney NSW's premier local commercial cleaning companies, providing comprehensive business cleaning services with deep community roots, personalized attention, and proven track records. Local commercial cleaning companies offer unique advantages including community accountability, area expertise, flexible service delivery, and competitive pricing that supports local business growth and success.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Complete Commercial Cleaning Solutions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Office building cleaning',
                  'Retail store maintenance',
                  'Restaurant & hospitality cleaning',
                  'Warehouse & industrial cleaning',
                  'Medical facility sanitization',
                  'Educational institution cleaning',
                  'Childcare center maintenance',
                  'Gym & fitness facility cleaning',
                  'Strata & residential cleaning',
                  'Carpet & upholstery services',
                  'Window cleaning & maintenance',
                  'Specialized deep cleaning',
                  'Emergency cleaning response',
                  'Post-construction cleanup',
                  'End of lease cleaning',
                  'Regular maintenance programs'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Service Areas</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Circular Quay', 'The Rocks', 'Barangaroo',
                'North Sydney', 'Crows Nest', 'St Leonards', 'Chatswood',
                'Parramatta', 'Westmead', 'Olympic Park', 'Ryde',
                'Bondi Junction', 'Randwick', 'Kensington', 'Mascot',
                'Liverpool', 'Campbelltown', 'Green Valley', 'Prestons',
                'Blacktown', 'Mount Druitt', 'Seven Hills', 'Eastern Creek',
                'Penrith', 'Kingswood', 'St Marys', 'Emu Plains',
                'Manly', 'Brookvale', 'Dee Why', 'Frenchs Forest'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-darkblue via-blueprimary to-greenprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Local Commercial Cleaning Companies You Can Trust</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for professional commercial cleaning services. Local expertise, community reputation, comprehensive solutions.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Commercial Cleaning Services
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}