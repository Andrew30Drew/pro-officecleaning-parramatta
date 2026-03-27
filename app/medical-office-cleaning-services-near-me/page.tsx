import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Office Cleaning Services Near Me | Healthcare Facility Cleaners Sydney',
  description: 'Professional medical office cleaning services near you in Sydney NSW. Specialized healthcare facility cleaning with infection control, sanitization, and compliance with medical standards.',
  keywords: 'medical office cleaning services near me, healthcare facility cleaning Sydney, medical center cleaning nearby, professional medical cleaning in my area',
  openGraph: {
    title: 'Medical Office Cleaning Services Near Me | Healthcare Facility Cleaners Sydney',
    description: 'Professional medical office cleaning services near you in Sydney NSW. Specialized healthcare facility cleaning with infection control, sanitization, and compliance with medical standards.',
    url: '/medical-office-cleaning-services-near-me',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical office cleaning services near me' }]
  },
  alternates: { canonical: '/medical-office-cleaning-services-near-me' }
};

export default function MedicalOfficeCleaningServicesNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary via-greenprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Office Cleaning Services Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional medical office cleaning services near you with Pro Clean Corp. Specialized healthcare facility cleaning throughout Sydney NSW with infection control protocols and medical-grade sanitization.
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
                src="/images/services/medical.webp"
                alt="Medical office cleaning services near me"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Specialized Medical Office Cleaning Services</h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Pro Clean Corp provides specialized medical office cleaning services throughout Sydney NSW, ensuring healthcare facilities maintain the highest standards of cleanliness, infection control, and patient safety. Our trained teams understand medical facility requirements and provide comprehensive cleaning solutions that comply with healthcare regulations and create safe environments for patients and staff.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Medical Office Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Examination room sanitization',
                  'Waiting area cleaning',
                  'Medical equipment cleaning',
                  'Infection control protocols',
                  'Medical waste management',
                  'Floor disinfection',
                  'Restroom deep sanitization',
                  'Reception area maintenance',
                  'Laboratory cleaning',
                  'Surgical suite cleaning',
                  'Compliance documentation',
                  'Emergency cleaning response'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Medical Areas We Service</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'North Sydney', 'Parramatta', 'Chatswood',
                'Bondi Junction', 'Liverpool', 'Blacktown', 'Penrith',
                'Randwick', 'Kensington', 'Westmead', 'Royal Prince Alfred',
                'St Leonards', 'Hornsby', 'Bankstown', 'Sutherland',
                'Campbelltown', 'Fairfield', 'Auburn', 'Hurstville'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary via-greenprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Medical Office Cleaning Services Near You</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for specialized medical facility cleaning. Healthcare compliance, infection control, professional standards.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Medical Office Cleaning
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}