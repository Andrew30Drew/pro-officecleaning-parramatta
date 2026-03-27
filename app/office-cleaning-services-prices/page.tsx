import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function OfficeCleaningServicesPricesPage() {
  const serviceData = {
    title: 'Office Cleaning Services Prices Sydney NSW - Workplace Cleaning Quotes',
    description: 'Looking for competitive office cleaning services prices in Sydney NSW? Pro Clean Corp provides transparent workplace cleaning quotes, executive office service rates, and comprehensive packages designed for modern workplaces. Get your free detailed estimate and discover why over 1,200 offices trust our affordable, professional cleaning solutions.',
    benefits: [
      'Transparent office cleaning services prices with comprehensive service breakdowns',
      'Competitive workplace cleaning quotes for all types of office environments',
      'Flexible executive office service rates for premium workplace standards',
      'Professional business office cleaning prices that deliver exceptional value',
      'Corporate cleaning prices designed for large-scale office operations',
      'Office cleaning services prices with volume discounts for regular clients',
      'Workplace cleaning quotes that include all supplies and professional equipment',
      'Executive office service rates with specialized attention to professional image'
    ],
    process: [
      'Comprehensive workplace evaluation to determine office cleaning services prices',
      'Detailed workplace cleaning quotes based on your specific office requirements',
      'Customized executive office service rates with flexible scheduling options',
      'Consistent service delivery at guaranteed office cleaning services prices'
    ],
    whyChooseUs: [
      'Most competitive office cleaning services prices in Sydney NSW',
      'Transparent workplace cleaning quotes with detailed service inclusions',
      'Flexible executive office service rates for premium office environments',
      'Professional business office cleaning prices backed by comprehensive insurance',
      'Corporate cleaning prices with 24/7 emergency service availability',
      'Office cleaning services prices efficiency through trained, certified staff',
      'Workplace cleaning quotes that guarantee consistent, high-quality results',
      'Executive office service rates that maintain professional business standards'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Macquarie Park',
      'Rhodes', 'Olympic Park', 'Mascot', 'Alexandria', 'Surry Hills',
      'Pyrmont', 'Ultimo', 'Redfern', 'Waterloo', 'Green Square'
    ],
    faqs: [
      {
        question: 'How are office cleaning services prices determined?',
        answer: 'Office cleaning services prices are determined by office size, cleaning frequency, services included, and specific workplace requirements. Our workplace cleaning quotes are competitive and transparent, with detailed breakdowns for every service component.'
      },
      {
        question: 'What affects workplace cleaning quotes?',
        answer: 'Workplace cleaning quotes are affected by square footage, employee count, cleaning schedules, specialized services, and office layout complexity. We provide customized executive office service rates for each unique workspace environment.'
      },
      {
        question: 'Do you offer discounts on business office cleaning prices?',
        answer: 'Yes, we offer significant discounts for long-term contracts, regular cleaning schedules, and multiple office locations. Our office cleaning services prices become more economical with extended agreements and volume cleaning packages.'
      },
      {
        question: "What\'s included in corporate cleaning prices?",
        answer: 'Corporate cleaning prices include comprehensive office cleaning, workstation sanitization, floor care, restroom maintenance, kitchen cleaning, and waste management. Executive office service rates include additional premium services and specialized care.'
      },
      {
        question: 'Are your office cleaning services prices quotes guaranteed?',
        answer: 'Yes, our office cleaning services prices quotes are guaranteed and binding. We provide accurate workplace cleaning quotes based on thorough office assessments and honor all quoted executive office service rates with no hidden fees.'
      },
      {
        question: 'How can I optimize my workplace cleaning quotes?',
        answer: 'You can optimize workplace cleaning quotes through regular service contracts, combining multiple services, flexible scheduling, and preventive maintenance programs. Our team will customize your office cleaning services prices to maximize value while maintaining quality.'
      }
    ],
    images: [
      {
        src: '/images/multi-users.png',
        alt: 'Office cleaning services prices Sydney NSW - Professional workplace cleaning team'
      },
      {
        src: '/images/user1.png',
        alt: 'Workplace cleaning quotes Sydney NSW - Executive office cleaning services'
      }
    ],
    relatedServices: ['Office Cleaning Cost', 'Commercial Cleaning Services', 'Business Cleaning', 'Executive Office Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Services Prices Sydney NSW"
        serviceDescription="Competitive office cleaning services prices and workplace cleaning quotes across Sydney NSW. Professional office cleaning with transparent pricing and flexible service packages."
        serviceUrl="/office-cleaning-services-prices"
        serviceType="Office Cleaning Services Prices"
        price="Contact for Quote"
        additionalServices={[
          'Daily Office Cleaning Service Quotes',
          'Weekly Workplace Cleaning Prices',
          'Monthly Office Cleaning Packages',
          'Executive Office Cleaning Rates',
          'Corporate Office Cleaning Prices',
          'After Hours Office Cleaning Quotes',
          'Deep Office Cleaning Service Prices',
          'Business Office Maintenance Quotes'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <section className="py-12 lg:py-16 bg-darkblue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Your Office Cleaning Services Prices Quote
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover competitive workplace cleaning quotes and executive office service rates for your business.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Workplace Cleaning Quote Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ Premium Standards</h4>
                <p className="opacity-90">Office cleaning services prices with executive-level quality</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Flexible Scheduling</h4>
                <p className="opacity-90">Workplace cleaning quotes designed for business hours</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Contract Savings</h4>
                <p className="opacity-90">Executive office service rates with long-term discounts</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ All-Inclusive</h4>
                <p className="opacity-90">Business office cleaning prices include all materials</p>
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
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-darkblue rounded-full px-8 py-4 transition-colors duration-300"
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