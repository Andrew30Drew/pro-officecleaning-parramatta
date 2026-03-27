import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCleaningPricePage() {
  const serviceData = {
    title: 'Commercial Cleaning Price Sydney NSW - Business Cleaning Quote',
    description: 'Searching for competitive commercial cleaning price in Sydney NSW? Pro Clean Corp offers transparent business cleaning quotes, facility cleaning rates, and comprehensive service packages designed for your business needs. Get your free detailed estimate and discover why over 1,200 businesses choose our affordable, professional cleaning solutions.',
    benefits: [
      'Transparent commercial cleaning price structure with detailed quote breakdowns',
      'Competitive business cleaning quote rates across all Sydney NSW areas',
      'Flexible facility cleaning rates to suit businesses of every size',
      'Professional cleaning quote accuracy with no hidden fees or surprises',
      'Business facility cleaning price packages tailored to your industry',
      'Commercial cleaning pricing that includes all equipment and supplies',
      'Facility cleaning rates with volume discounts for larger businesses',
      'Business cleaning quote stability through long-term service contracts'
    ],
    process: [
      'Free business facility assessment to determine commercial cleaning price',
      'Detailed business cleaning quote based on your specific requirements',
      'Customized facility cleaning rates with flexible scheduling options',
      'Professional service delivery at guaranteed commercial cleaning pricing'
    ],
    whyChooseUs: [
      'Most competitive commercial cleaning price in Sydney NSW',
      'Transparent business cleaning quote with detailed service inclusions',
      'Flexible facility cleaning rates for businesses of all industries',
      'Professional cleaning quote backed by comprehensive insurance',
      'Business facility cleaning price efficiency through trained staff',
      'Commercial cleaning pricing with satisfaction guarantee included',
      'Facility cleaning rates that deliver measurable business value',
      'Business cleaning quote accuracy with binding price commitments'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Macquarie Park',
      'Rhodes', 'Olympic Park', 'Mascot', 'Alexandria', 'Surry Hills',
      'Pyrmont', 'Ultimo', 'Redfern', 'Waterloo', 'Green Square'
    ],
    faqs: [
      {
        question: 'How is commercial cleaning price calculated?',
        answer: "Commercial cleaning price is calculated based on facility size, cleaning frequency, specific services required, and business type. Our business cleaning quote includes detailed breakdowns so you understand exactly what you\'re paying for with complete transparency."
      },
      {
        question: 'What factors affect business cleaning quote rates?',
        answer: 'Business cleaning quote rates are affected by square footage, cleaning frequency, industry requirements, after-hours scheduling, and specialized cleaning needs. We provide customized facility cleaning rates for each unique business environment.'
      },
      {
        question: 'Do you offer discounts on facility cleaning rates?',
        answer: 'Yes, we offer substantial discounts for long-term contracts, multiple locations, and regular cleaning schedules. Our commercial cleaning pricing becomes more economical with extended service agreements and bulk cleaning packages.'
      },
      {
        question: "What\'s included in your professional cleaning quote?",
        answer: 'Professional cleaning quote includes comprehensive cleaning services, all supplies and equipment, trained staff, insurance coverage, and quality guarantees. Business facility cleaning price covers everything needed for complete facility maintenance.'
      },
      {
        question: 'Are your commercial cleaning price quotes binding?',
        answer: 'Yes, our commercial cleaning price quotes are binding and guaranteed. We provide accurate business cleaning quote estimates based on thorough facility assessments and honor all quoted facility cleaning rates with no surprise charges.'
      },
      {
        question: 'How quickly can I get a business cleaning quote?',
        answer: 'We provide business cleaning quote estimates within 24 hours of your inquiry. Our commercial cleaning pricing is detailed, accurate, and includes all service specifications with facility cleaning rates valid for 30 days.'
      }
    ],
    images: [
      {
        src: '/images/whychoose.jpg',
        alt: 'Commercial cleaning price Sydney NSW - Professional business cleaning services'
      },
      {
        src: '/images/document.png',
        alt: 'Business cleaning quote Sydney NSW - Facility cleaning rates documentation'
      }
    ],
    relatedServices: ['Commercial Cleaning Cost', 'Business Cleaning Services', 'Facility Management', 'Professional Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Price Sydney NSW"
        serviceDescription="Competitive commercial cleaning price and business cleaning quote estimates across Sydney NSW. Professional facility cleaning with transparent pricing and customized packages."
        serviceUrl="/commercial-cleaning-price"
        serviceType="Commercial Cleaning Price"
        price="Contact for Quote"
        additionalServices={[
          'Daily Commercial Cleaning Quotes',
          'Weekly Business Cleaning Rates',
          'Monthly Facility Cleaning Prices',
          'Deep Commercial Cleaning Quotes',
          'Emergency Cleaning Service Rates',
          'Specialized Business Cleaning Prices',
          'Multi-Location Cleaning Quotes',
          'Contract Cleaning Service Rates'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <section className="py-12 lg:py-16 bg-greenprimary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Your Commercial Cleaning Price Quote Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover transparent business cleaning quote rates and facility cleaning prices tailored to your business needs.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Business Cleaning Quote Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ Fixed Pricing</h4>
                <p className="opacity-90">Commercial cleaning price locked in with no surprises</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Custom Solutions</h4>
                <p className="opacity-90">Business cleaning quote tailored to your industry</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Bulk Discounts</h4>
                <p className="opacity-90">Facility cleaning rates reduced for larger contracts</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Quality Guarantee</h4>
                <p className="opacity-90">Professional cleaning quote backed by satisfaction promise</p>
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