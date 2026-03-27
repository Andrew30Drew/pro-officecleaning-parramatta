import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function OfficeCleaningPricePage() {
  const serviceData = {
    title: 'Office Cleaning Price Sydney NSW - Professional Workplace Cleaning Costs',
    description: 'Looking for transparent office cleaning price estimates in Sydney NSW? Pro Clean Corp offers competitive workplace cleaning costs, executive office cleaning rates, and flexible service packages designed for businesses of all sizes. Get your free detailed quote and discover why over 1,200 offices trust our affordable, professional cleaning services.',
    benefits: [
      'Transparent office cleaning price structure with detailed breakdowns',
      'Competitive workplace cleaning costs across all Sydney NSW areas',
      'Flexible office cleaning services prices to suit any business budget',
      'Professional office cleaning cost that delivers exceptional value',
      'Executive office cleaning rates with premium service standards',
      'Business office cleaning cost savings through regular contracts',
      'No hidden fees in our office cleaning price quotes',
      'Customized workplace cleaning prices based on your specific needs'
    ],
    process: [
      'Free workplace assessment to determine your office cleaning price requirements',
      'Detailed office cleaning cost analysis tailored to your business space',
      'Customized office cleaning services prices with flexible scheduling options',
      'Consistent service delivery with guaranteed workplace cleaning costs'
    ],
    whyChooseUs: [
      'Most competitive office cleaning price rates in Sydney NSW',
      'Transparent workplace cleaning costs with no surprise charges',
      'Flexible office cleaning services prices for daily, weekly, monthly cleaning',
      'Professional office cleaning cost efficiency through trained staff',
      'Executive office cleaning rates that maintain premium standards',
      'Business office cleaning cost reductions through service contracts',
      'Guaranteed office cleaning price stability with long-term agreements',
      'Workplace cleaning prices that include all supplies and equipment'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Macquarie Park',
      'Rhodes', 'Olympic Park', 'Mascot', 'Alexandria', 'Surry Hills',
      'Pyrmont', 'Ultimo', 'Redfern', 'Waterloo', 'Green Square'
    ],
    faqs: [
      {
        question: 'How is office cleaning price calculated in Sydney NSW?',
        answer: 'Office cleaning price is calculated based on workspace size, cleaning frequency, specific services required, and location. Our workplace cleaning costs are competitive and transparent, with detailed breakdowns provided for every quote.'
      },
      {
        question: 'What affects workplace cleaning costs?',
        answer: 'Workplace cleaning costs depend on office square footage, number of employees, cleaning frequency, special requirements like carpet cleaning, and after-hours scheduling. We provide customized office cleaning services prices for each unique workspace.'
      },
      {
        question: 'Do you offer discounts on office cleaning services prices?',
        answer: 'Yes, we offer significant discounts for regular service contracts. Our office cleaning price becomes more economical with longer-term agreements, and we provide volume discounts for larger office spaces or multiple locations.'
      },
      {
        question: "What\'s included in your professional office cleaning cost?",
        answer: 'Our professional office cleaning cost includes desk cleaning, floor care, restroom sanitization, kitchen cleaning, trash removal, and dusting. Executive office cleaning rates include additional services like window cleaning and specialized equipment care.'
      },
      {
        question: 'Are your office cleaning price quotes accurate?',
        answer: "Our office cleaning price quotes are highly accurate as they\'re based on thorough on-site assessments. We provide detailed workplace cleaning costs breakdowns and honor all quoted prices with no hidden fees."
      },
      {
        question: 'How quickly can I get an office cleaning price estimate?',
        answer: 'We provide office cleaning price estimates within 24 hours of your inquiry. Our business office cleaning cost quotes are detailed, accurate, and valid for 30 days with no obligation to proceed.'
      }
    ],
    images: [
      {
        src: '/images/hero_img1.jpg',
        alt: 'Office cleaning price Sydney NSW - Professional workplace cleaning services'
      },
      {
        src: '/images/clean-house.png',
        alt: 'Workplace cleaning costs Sydney NSW - Professional office cleaning team'
      }
    ],
    relatedServices: ['Commercial Cleaning Cost', 'Business Cleaning Services', 'Executive Office Cleaning', 'Professional Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Price Sydney NSW"
        serviceDescription="Competitive office cleaning price estimates and workplace cleaning costs across Sydney NSW. Professional cleaning services with transparent pricing and flexible packages for offices of all sizes."
        serviceUrl="/office-cleaning-price"
        serviceType="Office Cleaning Price"
        price="Contact for Quote"
        additionalServices={[
          'Daily Office Cleaning Prices',
          'Weekly Workplace Cleaning Costs',
          'Monthly Office Cleaning Rates',
          'Executive Office Cleaning Prices',
          'After Hours Office Cleaning Costs',
          'Deep Office Cleaning Prices',
          'Medical Office Cleaning Rates',
          'Corporate Office Cleaning Costs'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <section className="py-12 lg:py-16 bg-greenprimary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Your Office Cleaning Price Quote Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover competitive workplace cleaning costs and office cleaning services prices designed for your business needs.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Office Cleaning Price Advantages</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ Transparent Pricing</h4>
                <p className="opacity-90">Clear office cleaning price with detailed service breakdown</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Flexible Schedules</h4>
                <p className="opacity-90">Workplace cleaning costs that fit your business hours</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Contract Savings</h4>
                <p className="opacity-90">Reduced office cleaning services prices for regular clients</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ All-Inclusive</h4>
                <p className="opacity-90">Professional office cleaning cost includes all supplies</p>
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