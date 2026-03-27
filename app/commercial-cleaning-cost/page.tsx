import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCleaningCostPage() {
  const serviceData = {
    title: 'Commercial Cleaning Cost Sydney NSW - Office Cleaning Prices & Quotes',
    description: 'Looking for competitive commercial cleaning cost estimates in Sydney NSW? Pro Clean Corp provides transparent office cleaning prices, commercial carpet cleaning rates, and customized service packages tailored to your business needs. Get your free detailed quote today and discover why over 1,200 businesses trust our affordable, professional cleaning services.',
    benefits: [
      'Transparent commercial cleaning cost structure with no hidden fees',
      'Competitive office cleaning prices across all Sydney NSW locations',
      'Customized commercial cleaning services cost based on your specific needs',
      'Flexible office cleaning services pricing to match your budget',
      'Professional carpet cleaner cost that delivers exceptional value',
      'Commercial carpet cleaning prices that include deep sanitization',
      'Office cleaning cost savings through regular service contracts',
      'Commercial cleaning services prices with volume discounts available'
    ],
    process: [
      'Free on-site assessment to determine your commercial cleaning cost requirements',
      'Detailed office cleaning price breakdown tailored to your workspace size and needs',
      'Customized commercial cleaning services cost proposal with flexible payment options',
      'Regular service delivery with consistent office cleaning services prices and quality'
    ],
    whyChooseUs: [
      'Most competitive commercial cleaning cost rates in Sydney NSW',
      'Transparent office cleaning prices with detailed service breakdowns',
      'No surprise fees - our commercial cleaning services cost is always upfront',
      'Flexible office cleaning services pricing for daily, weekly, or monthly services',
      'Professional carpet cleaner cost that includes eco-friendly products',
      'Commercial carpet cleaning prices with advanced equipment and techniques',
      'Office cleaning cost efficiency through streamlined processes',
      'Commercial cleaning services prices with satisfaction guarantee included'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Macquarie Park',
      'Rhodes', 'Olympic Park', 'Mascot', 'Alexandria', 'Surry Hills',
      'Pyrmont', 'Ultimo', 'Redfern', 'Waterloo', 'Green Square'
    ],
    faqs: [
      {
        question: 'What factors affect commercial cleaning cost in Sydney NSW?',
        answer: 'Commercial cleaning cost depends on several factors including office size, cleaning frequency, specific services required, location accessibility, and any special requirements. Our team provides detailed assessments to give you accurate office cleaning prices that reflect your unique needs.'
      },
      {
        question: 'How are office cleaning prices calculated?',
        answer: "Office cleaning prices are calculated based on square footage, cleaning frequency, services included, and complexity of tasks. We provide transparent commercial cleaning services cost estimates with detailed breakdowns so you know exactly what you\'re paying for."
      },
      {
        question: 'Do you offer discounts on commercial cleaning services cost?',
        answer: 'Yes, we offer competitive discounts for regular service contracts. Our office cleaning services prices become more economical with longer-term agreements, and we provide volume discounts for larger commercial spaces or multiple locations.'
      },
      {
        question: "What\'s included in your commercial carpet cleaning prices?",
        answer: 'Our commercial carpet cleaning prices include pre-treatment, deep extraction cleaning, stain removal, deodorizing, and post-cleaning grooming. We use professional-grade equipment and eco-friendly products to ensure the best results at competitive professional carpet cleaner cost.'
      },
      {
        question: 'Are your office cleaning cost estimates accurate?',
        answer: "Our office cleaning cost estimates are highly accurate as they\'re based on detailed on-site assessments. We provide comprehensive commercial cleaning services cost breakdowns and honor our quoted prices with no hidden fees or surprise charges."
      },
      {
        question: 'How do I get a quote for commercial cleaning services prices?',
        answer: "Getting your commercial cleaning cost quote is easy - simply contact us for a free consultation. We\'ll assess your space, discuss your needs, and provide detailed office cleaning prices within 24 hours. All quotes are obligation-free and valid for 30 days."
      }
    ],
    images: [
      {
        src: '/images/carpet-cleaning-1.jpg',
        alt: 'Commercial cleaning cost Sydney NSW - Professional office cleaning services'
      },
      {
        src: '/images/hero_img2.jpg',
        alt: 'Office cleaning prices Sydney NSW - Commercial cleaning team at work'
      }
    ],
    relatedServices: ['Office Cleaning Services', 'Commercial Carpet Cleaning', 'Business Cleaning', 'Professional Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Cost Sydney NSW"
        serviceDescription="Competitive commercial cleaning cost estimates and office cleaning prices across Sydney NSW. Professional cleaning services with transparent pricing and customized packages for businesses of all sizes."
        serviceUrl="/commercial-cleaning-cost"
        serviceType="Commercial Cleaning Cost"
        price="Contact for Quote"
        additionalServices={[
          'Office Cleaning Cost Estimates',
          'Commercial Carpet Cleaning Prices',
          'Business Cleaning Service Rates',
          'Professional Cleaning Cost Analysis',
          'Customized Cleaning Package Pricing',
          'Regular Cleaning Contract Rates',
          'Deep Cleaning Service Costs',
          'Emergency Cleaning Service Pricing'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <section className="py-12 lg:py-16 bg-blueprimary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Your Commercial Cleaning Cost Quote Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let cleaning costs surprise you. Get transparent office cleaning prices and commercial cleaning services cost estimates tailored to your business needs.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Pricing?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ No Hidden Fees</h4>
                <p className="opacity-90">Our commercial cleaning cost includes everything upfront</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Competitive Rates</h4>
                <p className="opacity-90">Best office cleaning prices in Sydney NSW</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Flexible Packages</h4>
                <p className="opacity-90">Commercial cleaning services cost fits your budget</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Volume Discounts</h4>
                <p className="opacity-90">Better office cleaning services prices for regular clients</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white rounded-full px-8 py-4 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="font-semibold">Get Free Quote Now</span>
            </a>
            
            <a
              href="tel:1300494983"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blueprimary rounded-full px-8 py-4 transition-colors duration-300"
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