import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCleaningServicesCostPage() {
  const serviceData = {
    title: 'Commercial Cleaning Services Cost Sydney NSW - Business Cleaning Rates',
    description: 'Seeking competitive commercial cleaning services cost in Sydney NSW? Pro Clean Corp delivers transparent business cleaning rates, facility cleaning costs, and comprehensive service packages tailored to your industry needs. Get your free detailed estimate and discover why over 1,200 businesses choose our cost-effective, professional cleaning solutions.',
    benefits: [
      'Transparent commercial cleaning services cost with detailed service breakdowns',
      'Competitive business cleaning rates across all industries in Sydney NSW',
      'Flexible facility cleaning costs to accommodate any business budget',
      'Professional cleaning service rates that maximize value and efficiency',
      'Industrial cleaning costs designed for manufacturing and warehouse facilities',
      'Corporate cleaning prices with executive-level service standards',
      'Commercial cleaning services prices with volume discounts available',
      'Business cleaning rates that include all equipment and eco-friendly supplies'
    ],
    process: [
      'Comprehensive facility assessment to determine commercial cleaning services cost',
      'Detailed business cleaning rates proposal based on your industry requirements',
      'Customized facility cleaning costs with flexible service scheduling',
      'Ongoing service delivery with consistent commercial cleaning services prices'
    ],
    whyChooseUs: [
      'Most competitive commercial cleaning services cost in Sydney NSW',
      'Transparent business cleaning rates with no hidden fees or charges',
      'Scalable facility cleaning costs for businesses of all sizes',
      'Professional cleaning service rates backed by comprehensive insurance',
      'Industrial cleaning costs that meet strict safety and compliance standards',
      'Corporate cleaning prices with 24/7 emergency service availability',
      'Commercial cleaning services prices with satisfaction guarantee included',
      'Business cleaning rates that deliver measurable ROI through productivity gains'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Macquarie Park',
      'Rhodes', 'Olympic Park', 'Mascot', 'Alexandria', 'Surry Hills',
      'Pyrmont', 'Ultimo', 'Redfern', 'Waterloo', 'Green Square'
    ],
    faqs: [
      {
        question: 'How are commercial cleaning services cost determined?',
        answer: 'Commercial cleaning services cost is determined by facility size, cleaning frequency, industry requirements, specialized services needed, and compliance standards. Our business cleaning rates are competitive and include detailed cost breakdowns for transparency.'
      },
      {
        question: 'What factors influence business cleaning rates?',
        answer: 'Business cleaning rates are influenced by square footage, cleaning frequency, industry-specific requirements, after-hours scheduling, and specialized equipment needs. We provide customized facility cleaning costs for each unique business environment.'
      },
      {
        question: 'Do you offer discounts on facility cleaning costs?',
        answer: 'Yes, we offer substantial discounts for long-term contracts and multiple locations. Our commercial cleaning services prices become more economical with regular service agreements, and we provide volume discounts for larger facilities.'
      },
      {
        question: "What\'s included in your professional cleaning service rates?",
        answer: 'Our professional cleaning service rates include general cleaning, floor care, restroom sanitization, waste management, and specialized cleaning based on your industry. Industrial cleaning costs may include additional safety protocols and specialized equipment.'
      },
      {
        question: 'Are your commercial cleaning services cost estimates binding?',
        answer: 'Yes, our commercial cleaning services cost estimates are binding and accurate. We provide detailed business cleaning rates based on thorough facility assessments and honor all quoted prices with no surprise charges.'
      },
      {
        question: 'How do I reduce my facility cleaning costs?',
        answer: 'You can reduce facility cleaning costs through regular service contracts, combining multiple services, flexible scheduling, and preventive maintenance programs. Our team will work with you to optimize your commercial cleaning services cost while maintaining quality.'
      }
    ],
    images: [
      {
        src: '/images/hero_img5.jpg',
        alt: 'Commercial cleaning services cost Sydney NSW - Professional business cleaning team'
      },
      {
        src: '/images/about_img1.webp',
        alt: 'Business cleaning rates Sydney NSW - Facility cleaning services'
      }
    ],
    relatedServices: ['Office Cleaning Cost', 'Industrial Cleaning', 'Corporate Cleaning', 'Facility Management']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Services Cost Sydney NSW"
        serviceDescription="Competitive commercial cleaning services cost and business cleaning rates across Sydney NSW. Professional facility cleaning with transparent pricing and comprehensive service packages."
        serviceUrl="/commercial-cleaning-services-cost"
        serviceType="Commercial Cleaning Services Cost"
        price="Contact for Quote"
        additionalServices={[
          'Daily Commercial Cleaning Rates',
          'Weekly Business Cleaning Costs',
          'Monthly Facility Cleaning Prices',
          'Industrial Cleaning Service Rates',
          'Corporate Cleaning Package Costs',
          'Retail Cleaning Service Rates',
          'Medical Facility Cleaning Costs',
          'Emergency Cleaning Service Prices'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <section className="py-12 lg:py-16 bg-darkblue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Your Commercial Cleaning Services Cost Quote
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover competitive business cleaning rates and facility cleaning costs tailored to your industry requirements.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Our Business Cleaning Rates Stand Out</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ Industry Expertise</h4>
                <p className="opacity-90">Commercial cleaning services cost tailored to your sector</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Scalable Solutions</h4>
                <p className="opacity-90">Business cleaning rates that grow with your company</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Compliance Ready</h4>
                <p className="opacity-90">Facility cleaning costs include regulatory compliance</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ 24/7 Availability</h4>
                <p className="opacity-90">Professional cleaning service rates for any schedule</p>
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