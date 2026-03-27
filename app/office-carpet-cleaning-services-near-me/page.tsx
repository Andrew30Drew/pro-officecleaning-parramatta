import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Carpet Cleaning Services Near Me | Local Professional Cleaners Sydney',
  description: 'Professional office carpet cleaning services near you in Sydney NSW. Local carpet cleaners specializing in office environments with fast response, deep cleaning, and stain removal.',
  keywords: 'office carpet cleaning services near me, local office carpet cleaners Sydney, professional carpet cleaning nearby, office carpet cleaning in my area',
  openGraph: {
    title: 'Office Carpet Cleaning Services Near Me | Local Professional Cleaners Sydney',
    description: 'Professional office carpet cleaning services near you in Sydney NSW. Local carpet cleaners specializing in office environments with fast response, deep cleaning, and stain removal.',
    url: '/office-carpet-cleaning-services-near-me',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office carpet cleaning services near me' }]
  },
  alternates: { canonical: '/office-carpet-cleaning-services-near-me' }
};

export default function OfficeCarpetCleaningServicesNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Carpet Cleaning Services Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional office carpet cleaning services near you with Pro Clean Corp. Local specialists providing deep cleaning, stain removal, and carpet maintenance for Sydney NSW office environments.
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
                src="/images/services/carpet.jpg"
                alt="Office carpet cleaning services near me"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Carpet Cleaning Services</h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Pro Clean Corp provides specialized office carpet cleaning services throughout Sydney NSW, delivering professional results that enhance workplace environments, improve indoor air quality, and maintain the professional appearance essential for business success. Our local teams understand office carpet requirements and provide comprehensive cleaning solutions tailored to Sydney's diverse business environments.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Office Carpet Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Deep steam carpet cleaning',
                  'Traffic lane restoration',
                  'Stain removal & treatment',
                  'Odor elimination services',
                  'Carpet protection application',
                  'Spot cleaning & maintenance',
                  'Conference room carpet care',
                  'Reception area cleaning',
                  'Office cubicle carpet cleaning',
                  'Executive office carpet care',
                  'Emergency carpet cleaning',
                  'Regular maintenance programs'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Office Areas We Service</h3>
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

            <div className="bg-gradient-to-r from-darkblue via-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Office Carpet Cleaning Services Near You</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for professional office carpet cleaning. Local specialists, fast response, guaranteed results.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Office Carpet Cleaning
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}