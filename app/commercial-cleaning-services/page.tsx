import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCleaningServicesPage() {
  const serviceData = {
    title: 'Commercial Cleaning Services Sydney NSW - Professional Business Solutions',
    description: 'Comprehensive commercial cleaning services across Sydney NSW. Pro Clean Corp offers reliable, professional commercial cleaning solutions for offices, retail stores, warehouses, medical facilities, and industrial properties.',
    benefits: [
      'Comprehensive commercial cleaning solutions for all business types',
      'Professional service delivery with consistent quality standards',
      'Customized commercial cleaning programs tailored to your industry',
      'Improved workplace productivity through clean, healthy environments',
      'Enhanced professional image with consistently maintained premises',
      'Cost-effective commercial cleaning packages with flexible contracts',
      'Compliance with industry-specific health and safety regulations',
      'Emergency commercial cleaning response available when needed'
    ],
    process: [
      'Detailed commercial property consultation and service requirement assessment',
      'Custom commercial cleaning program design based on your specific needs',
      'Professional cleaning service implementation using industry-best practices',
      'Ongoing service monitoring and quality assurance with regular reviews'
    ],
    whyChooseUs: [
      'Comprehensive range of commercial cleaning services under one roof',
      'Professional cleaning teams with specialized industry training',
      'Advanced commercial cleaning equipment and eco-friendly products',
      'Flexible service contracts from one-time to long-term agreements',
      'Competitive commercial cleaning rates with transparent pricing',
      'Fully insured and licensed commercial cleaning company',
      'Proven track record serving diverse commercial clients across Sydney',
      'Commitment to excellence with 100% satisfaction guarantee'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Parramatta', 'Chatswood', 'Bondi Junction',
      'Liverpool', 'Campbelltown', 'Penrith', 'Blacktown', 'Bankstown',
      'Fairfield', 'Hornsby', 'Sutherland', 'Burwood', 'Strathfield'
    ],
    faqs: [
      {
        question: 'What commercial cleaning services do you offer?',
        answer: 'We offer comprehensive commercial cleaning services including office cleaning, retail cleaning, warehouse cleaning, medical facility cleaning, restaurant cleaning, gym cleaning, school cleaning, and specialized industrial cleaning services.'
      },
      {
        question: 'How do you price commercial cleaning services?',
        answer: 'Our commercial cleaning services are priced based on property size, cleaning frequency, service requirements, and complexity. We offer competitive hourly rates, package deals, and volume discounts for regular contracts.'
      },
      {
        question: 'Are your commercial cleaning services customizable?',
        answer: 'Yes, we customize all commercial cleaning services to meet your specific business needs, industry requirements, budget constraints, and scheduling preferences for optimal service delivery.'
      },
      {
        question: 'Do you provide commercial cleaning services on weekends?',
        answer: 'Yes, we provide commercial cleaning services 7 days a week including weekends, holidays, and after-hours to accommodate your business schedule and minimize operational disruption.'
      },
      {
        question: 'What industries do your commercial cleaning services cover?',
        answer: 'Our commercial cleaning services cover all industries including corporate offices, retail stores, medical facilities, educational institutions, hospitality venues, fitness centers, manufacturing facilities, and more.'
      },
      {
        question: 'How do I book commercial cleaning services?',
        answer: 'You can book our commercial cleaning services by calling 1300 494 983, emailing hello@procleancorp.com.au, or requesting a quote through our website. We provide free consultations and quotes.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaning services Sydney NSW - Professional business cleaning team'
      },
      {
        src: '/images/services/office.webp',
        alt: 'Commercial cleaning services provider serving Sydney businesses'
      }
    ],
    relatedServices: ['Office Cleaning Services', 'Business Cleaning Services', 'Industrial Cleaning Services', 'Retail Cleaning Services']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Services Sydney NSW"
        serviceDescription="Comprehensive commercial cleaning services across Sydney NSW. Professional business cleaning solutions for offices, retail, warehouses, and industrial facilities with customized service programs."
        serviceUrl="/commercial-cleaning-services"
        serviceType="Commercial Cleaning Services"
        price="$$-$$$$"
        additionalServices={[
          'Office Cleaning Services',
          'Retail Store Cleaning Services',
          'Warehouse Cleaning Services',
          'Medical Facility Cleaning Services',
          'Restaurant Cleaning Services',
          'Gym Cleaning Services',
          'School Cleaning Services',
          'Emergency Cleaning Services'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}