import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCarpetCleaningPricesPage() {
  const serviceData = {
    title: 'Commercial Carpet Cleaning Prices Sydney NSW - Business Carpet Cleaning Rates',
    description: 'Seeking competitive commercial carpet cleaning prices in Sydney NSW? Pro Clean Corp delivers transparent business carpet cleaning rates, office carpet service costs, and comprehensive deep cleaning packages. Get your free detailed estimate and discover why over 1,200 businesses trust our professional, cost-effective carpet cleaning solutions.',
    benefits: [
      'Transparent commercial carpet cleaning prices with detailed service breakdowns',
      'Competitive business carpet cleaning rates across all Sydney NSW locations',
      'Flexible office carpet cleaning cost packages for workspaces of any size',
      'Professional carpet cleaning prices that deliver exceptional deep cleaning results',
      'Commercial carpet service rates with advanced stain removal technology',
      'Industrial carpet cleaning costs designed for high-traffic commercial areas',
      'Business carpet cleaning rates that include eco-friendly cleaning solutions',
      'Office carpet cleaning cost savings through regular maintenance programs'
    ],
    process: [
      'Comprehensive carpet assessment to determine commercial carpet cleaning prices',
      'Detailed business carpet cleaning rates proposal based on carpet type and condition',
      'Professional deep cleaning service using advanced commercial carpet cleaning equipment',
      'Quality inspection with guaranteed results at competitive office carpet cleaning cost'
    ],
    whyChooseUs: [
      'Most competitive commercial carpet cleaning prices in Sydney NSW',
      'Transparent business carpet cleaning rates with no hidden fees',
      'Advanced office carpet cleaning cost efficiency through professional equipment',
      'Professional carpet cleaning prices backed by satisfaction guarantee',
      'Commercial carpet service rates with emergency cleaning availability',
      'Industrial carpet cleaning costs that meet strict commercial standards',
      'Business carpet cleaning rates with comprehensive insurance coverage',
      'Office carpet cleaning cost reductions through regular service contracts'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Macquarie Park',
      'Rhodes', 'Olympic Park', 'Mascot', 'Alexandria', 'Surry Hills',
      'Pyrmont', 'Ultimo', 'Redfern', 'Waterloo', 'Green Square'
    ],
    faqs: [
      {
        question: 'How are commercial carpet cleaning prices determined?',
        answer: 'Commercial carpet cleaning prices are determined by carpet square footage, carpet type, soil level, stain complexity, and cleaning frequency. Our business carpet cleaning rates are competitive and include detailed cost breakdowns for complete transparency.'
      },
      {
        question: 'What factors affect business carpet cleaning rates?',
        answer: 'Business carpet cleaning rates are affected by carpet material, room size, traffic patterns, stain types, and cleaning methods required. We provide customized office carpet cleaning cost estimates based on your specific carpet cleaning needs.'
      },
      {
        question: 'Do you offer discounts on office carpet cleaning cost?',
        answer: 'Yes, we offer significant discounts for regular carpet cleaning contracts and large commercial spaces. Our commercial carpet cleaning prices become more economical with scheduled maintenance programs and multi-room cleaning packages.'
      },
      {
        question: "What\'s included in your professional carpet cleaning prices?",
        answer: 'Professional carpet cleaning prices include pre-treatment, deep extraction cleaning, stain removal, deodorizing, and carpet grooming. Commercial carpet service rates also include advanced equipment, eco-friendly products, and post-cleaning inspection.'
      },
      {
        question: 'Are your commercial carpet cleaning prices guaranteed?',
        answer: 'Yes, our commercial carpet cleaning prices are guaranteed and binding. We provide accurate business carpet cleaning rates based on thorough carpet assessments and honor all quoted office carpet cleaning cost with no surprise charges.'
      },
      {
        question: 'How often should commercial carpets be professionally cleaned?',
        answer: 'Commercial carpets should be professionally cleaned every 3-6 months depending on traffic. Regular cleaning reduces long-term commercial carpet cleaning prices and extends carpet life, making our business carpet cleaning rates a smart investment.'
      }
    ],
    images: [
      {
        src: '/images/carpet-cleaning-1.jpg',
        alt: 'Commercial carpet cleaning prices Sydney NSW - Professional carpet cleaning service'
      },
      {
        src: '/images/hero_img4-removebg-preview.png',
        alt: 'Business carpet cleaning rates Sydney NSW - Commercial carpet deep cleaning'
      }
    ],
    relatedServices: ['Office Carpet Cleaning', 'Commercial Cleaning Services', 'Business Cleaning', 'Deep Carpet Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Carpet Cleaning Prices Sydney NSW"
        serviceDescription="Competitive commercial carpet cleaning prices and business carpet cleaning rates across Sydney NSW. Professional carpet cleaning with transparent pricing and comprehensive deep cleaning packages."
        serviceUrl="/commercial-carpet-cleaning-prices"
        serviceType="Commercial Carpet Cleaning Prices"
        price="Contact for Quote"
        additionalServices={[
          'Office Carpet Deep Cleaning',
          'Business Carpet Stain Removal',
          'Commercial Carpet Maintenance',
          'Industrial Carpet Cleaning',
          'Retail Carpet Cleaning Services',
          'Medical Facility Carpet Cleaning',
          'Hotel Carpet Cleaning Services',
          'Restaurant Carpet Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <section className="py-12 lg:py-16 bg-greenprimary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Your Commercial Carpet Cleaning Prices Quote
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover competitive business carpet cleaning rates and office carpet cleaning cost solutions for your facility.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Carpet Cleaning Price Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ Advanced Equipment</h4>
                <p className="opacity-90">Professional carpet cleaning prices with cutting-edge technology</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Eco-Friendly Solutions</h4>
                <p className="opacity-90">Business carpet cleaning rates with safe, green products</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Stain Guarantee</h4>
                <p className="opacity-90">Office carpet cleaning cost includes stain removal guarantee</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Fast Drying</h4>
                <p className="opacity-90">Commercial carpet service rates with rapid drying technology</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-darkblue hover:bg-blue-900 text-white rounded-full px-8 py-4 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="font-semibold">Get Free Quote Now</span>
            </a>
            
            <a
              href="tel:1300494983"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-greenprimary rounded-full px-8 py-4 transition-colors duration-300"
            >
              <span className="font-semibold">Call 1300 494 983</span>
            </a>
          </div>
        </div>
      </section>
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}