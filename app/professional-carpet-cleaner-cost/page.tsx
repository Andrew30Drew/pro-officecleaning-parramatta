import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function ProfessionalCarpetCleanerCostPage() {
  const serviceData = {
    title: 'Professional Carpet Cleaner Cost Sydney NSW - Expert Carpet Cleaning Rates',
    description: 'Looking for competitive professional carpet cleaner cost in Sydney NSW? Pro Clean Corp provides transparent expert carpet cleaning rates, certified technician costs, and premium service packages. Get your free detailed estimate and discover why over 1,200 customers trust our qualified, experienced carpet cleaning professionals.',
    benefits: [
      'Transparent professional carpet cleaner cost with certified technician expertise',
      'Competitive expert carpet cleaning rates for residential and commercial properties',
      'Qualified certified carpet technician cost that delivers superior results',
      'Premium carpet cleaning prices with advanced equipment and techniques',
      'Professional carpet service rates backed by industry certifications',
      'Specialist carpet cleaner cost for delicate and specialty carpet types',
      'Expert carpet cleaning rates that include comprehensive stain treatment',
      'Professional carpet cleaner cost savings through maintenance programs'
    ],
    process: [
      'Professional carpet assessment by certified technicians to determine exact cost',
      'Customized expert carpet cleaning rates based on carpet type and condition',
      'Specialized cleaning process using professional-grade equipment and solutions',
      'Quality guarantee with follow-up service at competitive professional carpet cleaner cost'
    ],
    whyChooseUs: [
      'Most competitive professional carpet cleaner cost in Sydney NSW',
      'Certified expert carpet cleaning rates with industry-leading techniques',
      'Qualified certified carpet technician cost backed by comprehensive training',
      'Premium carpet cleaning prices with state-of-the-art equipment',
      'Professional carpet service rates with satisfaction guarantee included',
      'Specialist carpet cleaner cost for antique, Persian, and delicate carpets',
      'Expert carpet cleaning rates with eco-friendly, safe cleaning solutions',
      'Professional carpet cleaner cost efficiency through advanced drying technology'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Macquarie Park',
      'Rhodes', 'Olympic Park', 'Mascot', 'Alexandria', 'Surry Hills',
      'Pyrmont', 'Ultimo', 'Redfern', 'Waterloo', 'Green Square'
    ],
    faqs: [
      {
        question: 'How is professional carpet cleaner cost calculated?',
        answer: 'Professional carpet cleaner cost is calculated based on carpet size, material type, cleaning method required, stain complexity, and accessibility. Our expert carpet cleaning rates are transparent and include detailed service breakdowns with certified technician expertise.'
      },
      {
        question: 'What makes certified carpet technician cost worthwhile?',
        answer: 'Certified carpet technician cost includes professional training, industry certifications, specialized equipment knowledge, and guaranteed results. Our premium carpet cleaning prices reflect the expertise and quality that only qualified professionals can deliver.'
      },
      {
        question: 'Do you offer discounts on expert carpet cleaning rates?',
        answer: 'Yes, we offer discounts for multiple rooms, regular cleaning schedules, and seasonal promotions. Our professional carpet service rates become more economical with maintenance programs and bulk service packages.'
      },
      {
        question: "What\'s included in specialist carpet cleaner cost?",
        answer: 'Specialist carpet cleaner cost includes pre-inspection, customized cleaning solutions, professional extraction, stain protection treatment, and post-cleaning grooming. Premium carpet cleaning prices also include specialized care for delicate materials.'
      },
      {
        question: 'Are your professional carpet cleaner cost estimates accurate?',
        answer: 'Our professional carpet cleaner cost estimates are highly accurate, based on thorough assessments by certified technicians. We provide binding expert carpet cleaning rates with no hidden fees or unexpected charges.'
      },
      {
        question: 'How do I know if I need specialist carpet cleaner cost services?',
        answer: 'Specialist carpet cleaner cost services are recommended for antique carpets, Persian rugs, silk carpets, or heavily stained areas. Our certified carpet technicians assess your carpets to recommend the most appropriate premium carpet cleaning prices and methods.'
      }
    ],
    images: [
      {
        src: '/images/carpet-cleaning-1.jpg',
        alt: 'Professional carpet cleaner cost Sydney NSW - Expert carpet cleaning service'
      },
      {
        src: '/images/user.png',
        alt: 'Expert carpet cleaning rates Sydney NSW - Certified carpet cleaning technician'
      }
    ],
    relatedServices: ['Commercial Carpet Cleaning', 'Residential Carpet Cleaning', 'Rug Cleaning Services', 'Upholstery Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Carpet Cleaner Cost Sydney NSW"
        serviceDescription="Competitive professional carpet cleaner cost and expert carpet cleaning rates across Sydney NSW. Certified technicians providing premium carpet cleaning with transparent pricing."
        serviceUrl="/professional-carpet-cleaner-cost"
        serviceType="Professional Carpet Cleaner Cost"
        price="Contact for Quote"
        additionalServices={[
          'Residential Carpet Cleaning',
          'Commercial Carpet Cleaning',
          'Rug Cleaning Services',
          'Upholstery Cleaning',
          'Stain Removal Services',
          'Carpet Protection Treatment',
          'Pet Odor Removal',
          'Water Damage Restoration'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <section className="py-12 lg:py-16 bg-darkblue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Get Your Professional Carpet Cleaner Cost Quote
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover competitive expert carpet cleaning rates and certified carpet technician cost for premium results.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Professional Carpet Cleaners</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ Certified Technicians</h4>
                <p className="opacity-90">Professional carpet cleaner cost with qualified, trained experts</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Advanced Methods</h4>
                <p className="opacity-90">Expert carpet cleaning rates using latest industry techniques</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Premium Equipment</h4>
                <p className="opacity-90">Certified carpet technician cost includes professional-grade tools</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Satisfaction Guarantee</h4>
                <p className="opacity-90">Premium carpet cleaning prices backed by quality assurance</p>
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