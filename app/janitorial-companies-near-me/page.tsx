import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Janitorial Companies Near Me | Local Professional Janitorial Services Sydney',
  description: 'Top-rated janitorial companies near you in Sydney NSW. Local janitorial services with experienced teams, comprehensive cleaning solutions, and reliable maintenance programs.',
  keywords: 'janitorial companies near me, local janitorial services Sydney, commercial janitorial cleaning nearby, professional janitorial services in my area',
  openGraph: {
    title: 'Janitorial Companies Near Me | Local Professional Janitorial Services Sydney',
    description: 'Top-rated janitorial companies near you in Sydney NSW. Local janitorial services with experienced teams, comprehensive cleaning solutions, and reliable maintenance programs.',
    url: '/janitorial-companies-near-me',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Janitorial companies near me' }]
  },
  alternates: { canonical: '/janitorial-companies-near-me' }
};

export default function JanitorialCompaniesNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenprimary via-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Janitorial Companies Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Find trusted janitorial companies near you with Pro Clean Corp. Professional janitorial services throughout Sydney NSW providing comprehensive cleaning solutions, maintenance programs, and reliable facility management.
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
                alt="Janitorial companies near me - Professional cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Janitorial Services Near You</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Finding reliable janitorial companies near you is essential for maintaining clean, professional, and healthy business environments. Pro Clean Corp provides comprehensive janitorial services throughout Sydney NSW with local teams offering daily maintenance, deep cleaning, specialized services, and customized cleaning programs that meet the diverse needs of commercial facilities, office buildings, and institutional properties.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Local janitorial companies offer significant advantages including consistent service delivery, personalized attention, community accountability, and deep understanding of local business requirements and regulatory compliance. Our experienced janitorial teams provide reliable cleaning solutions that enhance workplace environments, support business operations, and maintain the professional image essential for business success throughout Sydney's competitive commercial landscape.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Comprehensive Janitorial Solutions</h3>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Daily office maintenance',
                      'Floor cleaning & maintenance',
                      'Restroom sanitization',
                      'Waste removal & recycling',
                      'Window & glass cleaning',
                      'Carpet care & vacuuming',
                      'Kitchen & breakroom cleaning',
                      'Deep cleaning services'
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-greenprimary rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Professional janitorial services Sydney"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-greenprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Local Janitorial Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Reliable daily service</li>
                    <li>✓ Local team accountability</li>
                    <li>✓ Flexible scheduling</li>
                    <li>✓ Community reputation</li>
                    <li>✓ Personalized service</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-darkblue mb-8">Complete Janitorial Services</h3>
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Daily office cleaning',
                  'Floor care & maintenance',
                  'Restroom deep cleaning',
                  'Kitchen & breakroom sanitization',
                  'Window & glass cleaning',
                  'Carpet cleaning & care',
                  'Waste management & recycling',
                  'Supply restocking',
                  'High dusting & surface cleaning',
                  'Lobby & reception maintenance',
                  'Conference room cleaning',
                  'Emergency cleaning response',
                  'Deep cleaning services',
                  'Post-construction cleanup',
                  'Specialized facility cleaning',
                  'Maintenance program management'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides janitorial services throughout Sydney NSW's business districts and commercial areas:
            </p>
            
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

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'How do I find reliable janitorial companies near me?',
                  answer: 'Look for local janitorial companies with strong community reputation, proper insurance, experienced staff, and comprehensive service offerings. Pro Clean Corp provides professional janitorial services throughout Sydney NSW with local teams, reliable service delivery, and customized cleaning solutions for diverse commercial facilities.'
                },
                {
                  question: 'What services do professional janitorial companies provide?',
                  answer: 'Professional janitorial companies provide daily office cleaning, floor care, restroom maintenance, waste management, window cleaning, carpet care, kitchen cleaning, and specialized services. Pro Clean Corp offers comprehensive janitorial solutions including regular maintenance, deep cleaning, and emergency response throughout Sydney NSW.'
                },
                {
                  question: 'What are the benefits of hiring local janitorial companies?',
                  answer: 'Local janitorial companies offer consistent service, community accountability, personalized attention, flexible scheduling, and understanding of local business needs. Pro Clean Corp provides local expertise with professional standards, ensuring reliable janitorial services that support your business operations and maintain professional environments.'
                },
                {
                  question: 'How do janitorial companies ensure quality and reliability?',
                  answer: 'Professional janitorial companies ensure quality through trained staff, standardized procedures, regular inspections, client feedback systems, and continuous improvement programs. Pro Clean Corp maintains high standards through comprehensive training, quality assurance protocols, and dedicated local management throughout Sydney NSW.'
                },
                {
                  question: 'Can janitorial companies customize services for my specific needs?',
                  answer: 'Yes, professional janitorial companies provide customized cleaning programs based on your facility requirements, budget, and scheduling preferences. Pro Clean Corp offers flexible service plans including daily maintenance, weekly deep cleaning, monthly services, and specialized cleaning solutions tailored to your business needs.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-greenprimary via-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Janitorial Companies Near You</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for reliable janitorial services. Local teams, comprehensive solutions, professional results.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Janitorial Services
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}