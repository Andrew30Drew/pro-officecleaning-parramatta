import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Carpet Cleaning Sydney NSW | Professional Workplace Carpet Care',
  description: 'Expert office carpet cleaning services in Sydney NSW. Professional workplace carpet maintenance for corporate offices, business centers & commercial buildings. Deep cleaning & restoration.',
  keywords: 'office carpet cleaning Sydney, workplace carpet cleaning NSW, corporate carpet care Sydney, business carpet cleaning services, professional office carpet maintenance',
  openGraph: {
    title: 'Office Carpet Cleaning Sydney NSW | Professional Workplace Carpet Care',
    description: 'Expert office carpet cleaning services in Sydney NSW. Professional workplace carpet maintenance for corporate offices, business centers & commercial buildings. Deep cleaning & restoration.',
    url: '/office-carpet-cleaning-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office carpet cleaning Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-carpet-cleaning-sydney'
  }
};

export default function OfficeCarpetCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Carpet Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional workplace carpet cleaning that enhances your office environment. Deep cleaning, stain removal, and carpet protection services for corporate offices throughout Sydney NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office carpet cleaning Sydney NSW - Professional workplace carpet care"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Carpet Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers exceptional office carpet cleaning services throughout Sydney NSW, helping businesses maintain professional, healthy workplace environments. Our specialized office carpet cleaning technicians understand the unique challenges of corporate environments and provide tailored solutions that minimize disruption while maximizing results.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Office carpets face constant challenges from high foot traffic, coffee spills, food stains, and daily wear that can quickly impact your professional image. Our comprehensive office carpet cleaning services restore carpets to pristine condition, remove harmful allergens and bacteria, and protect your investment while creating healthier, more attractive workspaces for employees and visitors.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Professional Office Carpet Cleaning Matters</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Professional office carpet cleaning goes beyond surface-level maintenance, addressing deep-seated contaminants that affect air quality, employee health, and business image. Regular professional cleaning extends carpet life, maintains warranties, and ensures your office always presents a professional, welcoming environment to clients and staff.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/carpet.jpg"
                  alt="Professional office carpet cleaning process Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Office Cleaning Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Improved air quality</li>
                    <li>• Enhanced professional image</li>
                    <li>• Reduced allergens & bacteria</li>
                    <li>• Extended carpet lifespan</li>
                    <li>• Flexible scheduling options</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Our Office Carpet Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Workplace Assessment</h4>
                <p className="text-gray-700 mb-4">
                  Our office carpet cleaning specialists conduct comprehensive assessments, evaluating carpet types, traffic patterns, stain locations, and workspace layout. We identify high-priority areas and develop customized cleaning strategies that work around your business schedule and operational requirements.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Preparation & Protection</h4>
                <p className="text-gray-700 mb-4">
                  We carefully protect office furniture, equipment, and work areas while preparing carpets for deep cleaning. Our team uses specialized furniture sliders and protective coverings to prevent any disruption to your workplace while ensuring thorough access to all carpet areas.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Advanced Steam Cleaning</h4>
                <p className="text-gray-700 mb-4">
                  Using truck-mounted hot water extraction systems, we perform deep steam cleaning that penetrates carpet fibers, removing embedded dirt, allergens, bacteria, and office pollutants. This process eliminates up to 99% of bacteria and allergens while restoring carpet appearance and freshness.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Stain Treatment & Finishing</h4>
                <p className="text-gray-700 mb-4">
                  We provide specialized treatment for office-specific stains including coffee, ink, food, and beverage spills. Carpet protection application helps prevent future staining while professional grooming ensures even drying and optimal appearance for immediate workplace use.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Office Carpet Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Corporate office carpet cleaning',
                  'Executive suite carpet care', 
                  'Reception area carpet cleaning',
                  'Conference room carpet maintenance',
                  'Cubicle area carpet cleaning',
                  'Break room carpet cleaning',
                  'Hallway carpet cleaning',
                  'Lobby carpet maintenance',
                  'Office stair carpet cleaning',
                  'Emergency carpet cleaning',
                  'After-hours carpet cleaning',
                  'Weekend carpet cleaning services'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Office Carpet Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/hero_img2.jpg"
                  alt="Clean office carpet Sydney NSW workplace"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Professional Workplace Image</h4>
                    <p className="text-gray-700">Clean carpets create positive impressions for clients, visitors, and employees, reflecting your business professionalism and attention to detail.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Improved Indoor Air Quality</h4>
                    <p className="text-gray-700">Remove allergens, dust mites, and pollutants that can affect employee health, reducing sick days and improving workplace productivity.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Extended Carpet Investment</h4>
                    <p className="text-gray-700">Regular professional cleaning prevents premature wear, maintains carpet warranties, and extends replacement cycles.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Flexible Scheduling</h4>
                    <p className="text-gray-700">After-hours and weekend cleaning options minimize business disruption while maintaining pristine office environments.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Office Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides office carpet cleaning services throughout Sydney NSW's major business districts and commercial areas. Our professional teams service offices in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'North Sydney', 'Parramatta CBD', 'Chatswood',
                'Bondi Junction', 'Macquarie Park', 'Pyrmont', 'Surry Hills',
                'Redfern', 'Alexandria', 'Mascot', 'Rhodes',
                'St Leonards', 'Crows Nest', 'Artarmon', 'Lane Cove',
                'Olympic Park', 'Homebush', 'Ryde', 'Meadowbank',
                'Bankstown', 'Liverpool', 'Campbelltown', 'Penrith'
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
                  question: 'How often should office carpets be professionally cleaned in Sydney NSW?',
                  answer: 'Office carpets in Sydney should be professionally cleaned every 3-6 months depending on office size, employee count, and foot traffic levels. High-traffic areas like reception areas and hallways may require quarterly cleaning, while executive offices and low-traffic areas can be cleaned bi-annually. Regular professional cleaning maintains appearance, air quality, and carpet warranties while creating healthier work environments.'
                },
                {
                  question: 'What are the costs for office carpet cleaning in Sydney?',
                  answer: 'Office carpet cleaning costs in Sydney vary based on office size, carpet condition, access requirements, and cleaning frequency. Our competitive rates typically range from $3-$10 per square meter for standard office cleaning, with discounts available for regular maintenance contracts. We provide free, detailed quotes with transparent pricing and flexible payment terms for businesses.'
                },
                {
                  question: 'Can you clean office carpets after business hours in Sydney?',
                  answer: 'Yes, Pro Clean Corp specializes in after-hours office carpet cleaning throughout Sydney NSW. We offer evening, overnight, weekend, and holiday cleaning services to minimize disruption to your business operations. Our flexible scheduling accommodates your workplace requirements while ensuring carpets are clean and dry for the next business day.'
                },
                {
                  question: 'How long does office carpet cleaning take and when can we use the office?',
                  answer: 'Office carpet cleaning typically takes 2-4 hours for average-sized offices, depending on carpet area and soil level. Using professional truck-mounted equipment, carpets usually dry within 4-6 hours. We can schedule cleaning to ensure carpets are completely dry and ready for use when employees arrive for work the next day.'
                },
                {
                  question: 'Do you provide emergency office carpet cleaning in Sydney?',
                  answer: 'Yes, we offer emergency office carpet cleaning services throughout Sydney NSW for urgent situations including water damage, major spills, or last-minute cleaning needs before important meetings or events. Our rapid response team is available 24/7 with specialized equipment and techniques to address emergency situations promptly and professionally.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Office Carpet Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for expert office carpet cleaning services. Flexible scheduling, guaranteed results, competitive rates.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983 for Your Free Office Carpet Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}