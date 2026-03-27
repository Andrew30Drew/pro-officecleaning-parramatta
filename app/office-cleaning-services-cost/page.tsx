import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function OfficeCleaningServicesCostPage() {
  const serviceData = {
    title: 'Office Cleaning Services Cost Sydney NSW - Workplace Cleaning Rates',
    description: 'Looking for competitive office cleaning services cost in Sydney NSW? Pro Clean Corp offers transparent workplace cleaning rates, executive office service costs, and comprehensive packages designed for modern businesses. Get your free detailed estimate and discover why over 1,200 offices trust our affordable, professional cleaning solutions.',
    benefits: [
      'Transparent office cleaning services cost with comprehensive service inclusions',
      'Competitive workplace cleaning rates for all types of office environments',
      'Flexible executive office cleaning cost packages for premium workspaces',
      'Professional business office service rates that deliver exceptional value',
      'Corporate cleaning service costs designed for large-scale operations',
      'Office cleaning services cost savings through regular maintenance contracts',
      'Workplace cleaning rates that include all supplies and professional equipment',
      'Executive office cleaning cost with specialized attention to detail'
    ],
    process: [
      'Detailed workplace assessment to determine office cleaning services cost',
      'Customized workplace cleaning rates based on your specific office requirements',
      'Flexible executive office cleaning cost scheduling to minimize disruption',
      'Consistent service delivery with guaranteed office cleaning services cost'
    ],
    whyChooseUs: [
      'Most competitive office cleaning services cost in Sydney NSW',
      'Transparent workplace cleaning rates with detailed service breakdowns',
      'Flexible executive office cleaning cost options for premium offices',
      'Professional business office service rates backed by insurance coverage',
      'Corporate cleaning service costs with 24/7 emergency availability',
      'Office cleaning services cost efficiency through trained, background-checked staff',
      'Workplace cleaning rates that guarantee consistent, high-quality results',
      'Executive office cleaning cost that maintains professional business image'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Macquarie Park',
      'Rhodes', 'Olympic Park', 'Mascot', 'Alexandria', 'Surry Hills',
      'Pyrmont', 'Ultimo', 'Redfern', 'Waterloo', 'Green Square'
    ],
    faqs: [
      {
        question: 'How is office cleaning services cost calculated?',
        answer: 'Office cleaning services cost is calculated based on office size, cleaning frequency, services included, and specific requirements. Our workplace cleaning rates are competitive and transparent, with detailed breakdowns provided for every service package.'
      },
      {
        question: 'What affects workplace cleaning rates?',
        answer: 'Workplace cleaning rates are affected by square footage, employee count, cleaning frequency, specialized services, and scheduling preferences. We provide customized executive office cleaning cost estimates for each unique workspace environment.'
      },
      {
        question: 'Do you offer discounts on business office service rates?',
        answer: 'Yes, we offer significant discounts for long-term contracts and regular cleaning schedules. Our office cleaning services cost becomes more economical with extended agreements, and we provide volume pricing for larger office spaces.'
      },
      {
        question: "What\'s included in corporate cleaning service costs?",
        answer: 'Corporate cleaning service costs include comprehensive office cleaning, desk sanitization, floor care, restroom maintenance, kitchen cleaning, and waste management. Executive office cleaning cost includes additional premium services and specialized care.'
      },
      {
        question: 'Are your office cleaning services cost quotes guaranteed?',
        answer: 'Yes, our office cleaning services cost quotes are guaranteed and binding. We provide accurate workplace cleaning rates based on thorough assessments and honor all quoted prices with no hidden fees or surprise charges.'
      },
      {
        question: 'How can I optimize my workplace cleaning rates?',
        answer: 'You can optimize workplace cleaning rates through regular service contracts, combining multiple services, flexible scheduling, and preventive maintenance programs. Our team will customize your office cleaning services cost to maximize value while maintaining quality.'
      }
    ],
    images: [
      {
        src: '/images/hero_img2.jpg',
        alt: 'Office cleaning services cost Sydney NSW - Professional workplace cleaning'
      },
      {
        src: '/images/whychoose.jpg',
        alt: 'Workplace cleaning rates Sydney NSW - Executive office cleaning services'
      }
    ],
    relatedServices: ['Commercial Cleaning Services', 'Business Cleaning', 'Executive Cleaning', 'Corporate Office Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Services Cost Sydney NSW"
        serviceDescription="Competitive office cleaning services cost and workplace cleaning rates across Sydney NSW. Professional office cleaning with transparent pricing and flexible service packages."
        serviceUrl="/office-cleaning-services-cost"
        serviceType="Office Cleaning Services Cost"
        price="Contact for Quote"
        additionalServices={[
          'Daily Office Cleaning Service Rates',
          'Weekly Workplace Cleaning Costs',
          'Monthly Office Cleaning Packages',
          'Executive Office Cleaning Services',
          'Corporate Office Cleaning Rates',
          'After Hours Office Cleaning Costs',
          'Deep Office Cleaning Service Prices',
          'Business Office Maintenance Costs'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <section className="py-12 lg:py-16 bg-blueprimary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Your Office Cleaning Services Cost Quote
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover competitive workplace cleaning rates and executive office cleaning cost solutions for your business.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Workplace Cleaning Rate Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ Executive Standards</h4>
                <p className="opacity-90">Office cleaning services cost with premium quality delivery</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Flexible Packages</h4>
                <p className="opacity-90">Workplace cleaning rates designed for every business size</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Contract Benefits</h4>
                <p className="opacity-90">Executive office cleaning cost reductions for regular clients</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Complete Service</h4>
                <p className="opacity-90">Business office service rates include all cleaning supplies</p>
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