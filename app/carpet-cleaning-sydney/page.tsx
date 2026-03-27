import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carpet Cleaning Sydney NSW | Professional Steam Cleaning & Stain Removal Services',
  description: 'Expert carpet cleaning services in Sydney NSW. Professional steam cleaning, stain removal, upholstery cleaning for residential & commercial carpets. Deep cleaning, odor removal, carpet restoration.',
  keywords: 'carpet cleaning Sydney, steam cleaning NSW, carpet stain removal, upholstery cleaning, rug cleaning services, professional carpet cleaners',
  openGraph: {
    title: 'Carpet Cleaning Sydney NSW | Professional Steam Cleaning & Stain Removal Services',
    description: 'Expert carpet cleaning services in Sydney NSW. Professional steam cleaning, stain removal, upholstery cleaning for residential & commercial carpets. Deep cleaning, odor removal, carpet restoration.',
    url: '/carpet-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Carpet cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/carpet-cleaning-sydney' }
};

export default function CarpetCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Carpet Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional carpet cleaning services delivering deep cleaning, stain removal, and carpet restoration. Expert steam cleaning, upholstery care, and comprehensive carpet maintenance for residential and commercial properties across Sydney NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/carpet.jpg"
                alt="Carpet cleaning Sydney NSW - Professional steam cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Carpet Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp provides specialized carpet cleaning services throughout Sydney NSW, delivering deep cleaning, stain removal, and carpet restoration for residential and commercial properties. Our carpet cleaning specialists understand the critical importance of maintaining healthy indoor environments, extending carpet lifespan, and preserving the appearance and hygiene of carpeted spaces that enhance property value and occupant wellbeing.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Carpet cleaning requires specialized knowledge of fiber types, stain chemistry, cleaning methods, and equipment operation that address various carpet materials, soil conditions, and restoration requirements. Our experienced carpet cleaning teams provide comprehensive solutions including hot water extraction, steam cleaning, stain treatment, and odor elimination using professional-grade equipment and eco-friendly cleaning products.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Deep Cleaning & Restoration Expertise</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Professional carpet cleaning is essential for maintaining indoor air quality, removing allergens, and preserving carpet appearance and durability. Our carpet cleaning services support property maintenance by delivering deep cleaning results, extending carpet lifespan, and creating healthier environments that enhance comfort and property value throughout Sydney NSW residential and commercial spaces.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/home.jpg"
                  alt="Professional carpet cleaning Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Carpet Services</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Deep steam cleaning</li>
                    <li>✓ Stain removal & treatment</li>
                    <li>✓ Odor elimination</li>
                    <li>✓ Upholstery cleaning</li>
                    <li>✓ Carpet protection</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Carpet Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Carpet Assessment & Pre-Treatment</h4>
                <p className="text-gray-700 mb-4">
                  Our carpet cleaning specialists conduct comprehensive carpet assessments, identifying fiber types, soil conditions, stain locations, and cleaning requirements. We apply targeted pre-treatments that address specific stains, high-traffic areas, and soil conditions while protecting carpet fibers and ensuring optimal cleaning results.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Professional Deep Cleaning</h4>
                <p className="text-gray-700 mb-4">
                  We perform intensive carpet cleaning using hot water extraction, steam cleaning, and professional equipment that removes deep-seated soil, allergens, and contaminants. Our cleaning process addresses embedded dirt, pet dander, dust mites, and bacteria using heated cleaning solutions and powerful extraction systems.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Stain Treatment & Restoration</h4>
                <p className="text-gray-700 mb-4">
                  Our specialized stain treatment includes targeted removal of wine stains, food spills, pet accidents, and other challenging marks. We use professional stain removal techniques, specialized products, and proven methods to restore carpet appearance while protecting fiber integrity and color stability.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Protective Finishing & Maintenance</h4>
                <p className="text-gray-700 mb-4">
                  We apply carpet protection treatments, deodorizing solutions, and provide maintenance recommendations to extend cleaning results and carpet lifespan. Our finishing process includes proper drying techniques, fiber restoration, and quality inspection to ensure optimal results and client satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Carpet Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Steam cleaning & hot water extraction',
                  'Stain removal & spot treatment', 
                  'Odor elimination & deodorizing',
                  'Upholstery & furniture cleaning',
                  'Rug cleaning & restoration',
                  'Pet stain & odor removal',
                  'Commercial carpet cleaning',
                  'Residential carpet care',
                  'Carpet protection treatments',
                  'End of lease carpet cleaning',
                  'Emergency stain response',
                  'Maintenance cleaning programs'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Carpet Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Clean carpets Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Improved Indoor Air Quality</h4>
                    <p className="text-gray-700">Professional carpet cleaning removes allergens, dust mites, and contaminants that improve indoor air quality and health.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Extended Carpet Lifespan</h4>
                    <p className="text-gray-700">Regular professional cleaning removes damaging soil and debris, extending carpet durability and appearance retention.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Enhanced Appearance</h4>
                    <p className="text-gray-700">Deep cleaning restores carpet color, texture, and appearance while removing stains and embedded soil.</p>
                  </div>
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Healthier Environment</h4>
                    <p className="text-gray-700">Professional cleaning eliminates bacteria, odors, and contaminants creating healthier living and working environments.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides carpet cleaning services throughout Sydney NSW's residential suburbs and commercial districts. Our specialized teams service properties in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Surry Hills', 'Paddington', 'Darlinghurst',
                'Bondi', 'Coogee', 'Randwick', 'Kensington',
                'Manly', 'Dee Why', 'Brookvale', 'Avalon',
                'Hornsby', 'Turramurra', 'Pymble', 'Gordon',
                'Chatswood', 'Lane Cove', 'Willoughby', 'Artarmon',
                'Parramatta', 'Westmead', 'Granville', 'Harris Park',
                'Liverpool', 'Casula', 'Prestons', 'Green Valley',
                'Penrith', 'Kingswood', 'St Marys', 'Emu Plains'
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
                  question: 'What carpet cleaning methods do you use in Sydney NSW?',
                  answer: 'We use professional hot water extraction (steam cleaning), dry cleaning methods, and specialized stain treatments depending on carpet type and condition. Our primary method is hot water extraction using truck-mounted equipment that provides superior cleaning power, faster drying, and optimal soil removal for most carpet types throughout Sydney NSW.'
                },
                {
                  question: 'How long does it take for carpets to dry after professional cleaning?',
                  answer: 'Carpet drying time typically ranges from 4-8 hours depending on carpet type, humidity, airflow, and cleaning method used. We use powerful extraction equipment to minimize moisture content and accelerate drying. Factors like weather conditions, carpet thickness, and room ventilation affect drying times throughout Sydney NSW.'
                },
                {
                  question: 'Can you remove all types of stains from carpets?',
                  answer: 'We successfully remove most common stains including food spills, wine, coffee, pet accidents, mud, and general soiling using specialized stain removal techniques and professional products. Some permanent stains from bleach, certain dyes, or long-set stains may be improved but not completely eliminated. We provide honest assessments and guaranteed efforts for all stain removal attempts.'
                },
                {
                  question: 'Do you offer carpet protection treatments after cleaning?',
                  answer: 'Yes, we provide professional carpet protection treatments including Scotchgard application and fiber protection services. These treatments create invisible barriers that help resist future stains, extend cleaning intervals, and maintain carpet appearance. Protection treatments are especially beneficial for high-traffic areas and homes with children or pets throughout Sydney NSW.'
                },
                {
                  question: 'How often should residential and commercial carpets be professionally cleaned?',
                  answer: 'Residential carpets typically benefit from professional cleaning every 12-18 months, while high-traffic commercial carpets may require cleaning every 3-6 months. Factors including foot traffic, pets, children, allergies, and manufacturer warranties influence cleaning frequency recommendations. We provide customized maintenance schedules based on specific carpet and usage requirements.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-darkblue via-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Carpet Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for expert carpet cleaning services. Deep cleaning, stain removal, healthier environments guaranteed.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Carpet Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}