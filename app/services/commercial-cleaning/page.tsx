import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../../components/Ourservices';

export default function CommercialCleaningPage() {
  const serviceData = {
    title: 'Professional Commercial Cleaning Services Sydney NSW',
    description: "Elevate your business with Pro Clean Corp\'s comprehensive commercial cleaning services in Sydney NSW. We specialize in maintaining pristine commercial properties including retail spaces, warehouses, medical facilities, and industrial complexes with customized cleaning solutions.",
    benefits: [
      'Enhanced business reputation through consistently clean and professional premises',
      'Improved customer experience and satisfaction in retail and service environments',
      'Reduced liability risks through proper sanitization and maintenance protocols',
      'Compliance with health and safety regulations specific to your industry',
      'Extended lifespan of commercial equipment, flooring, and fixtures',
      'Flexible service schedules designed around your business operations',
      'Specialized cleaning techniques for different commercial property types',
      'Cost-effective maintenance programs that prevent expensive deep cleaning needs'
    ],
    process: [
      'Comprehensive property assessment and customized cleaning plan development',
      'Implementation of industry-specific cleaning protocols and safety measures',
      'Regular cleaning services using commercial-grade equipment and products',
      'Ongoing monitoring and quality control with detailed reporting systems'
    ],
    whyChooseUs: [
      'Specialized experience across diverse commercial property types and industries',
      'Advanced equipment and cleaning technologies for superior results',
      'Trained staff with expertise in commercial cleaning standards and regulations',
      'Comprehensive insurance coverage including public liability and professional indemnity',
      'Proven track record with major commercial clients across Sydney NSW',
      'Emergency cleaning services available for urgent commercial needs',
      'Green cleaning options using environmentally safe commercial products',
      'Competitive commercial cleaning rates with volume discounts available'
    ],
    serviceAreas: [
      'Sydney CBD', 'Alexandria', 'Mascot', 'Botany', 'Rosebery',
      'Waterloo', 'Redfern', 'Surry Hills', 'Pyrmont', 'Ultimo',
      'North Sydney', 'Artarmon', 'Chatswood', 'St Leonards', 'Crows Nest',
      'Parramatta', 'Homebush', 'Olympic Park', 'Auburn', 'Granville'
    ],
    faqs: [
      {
        question: 'What types of commercial properties do you clean?',
        answer: 'We clean all types of commercial properties including offices, retail stores, warehouses, medical facilities, restaurants, gyms, schools, strata buildings, churches, and industrial facilities. Each property type receives specialized cleaning protocols.'
      },
      {
        question: 'How do you customize cleaning for different industries?',
        answer: 'We tailor our cleaning services based on industry requirements. For example, medical facilities require hospital-grade disinfection, food businesses need HACCP compliance, and retail stores need customer-focused cleaning schedules.'
      },
      {
        question: 'Can you handle large commercial cleaning contracts?',
        answer: 'Yes, Pro Clean Corp handles commercial cleaning contracts of all sizes, from small retail outlets to large industrial complexes. We have the staff, equipment, and systems to manage comprehensive commercial cleaning programs.'
      },
      {
        question: "What\'s included in your commercial cleaning service?",
        answer: 'Services include floor cleaning and maintenance, restroom sanitization, waste management, window cleaning, carpet cleaning, pressure washing, industrial equipment cleaning, and specialized cleaning for your industry requirements.'
      },
      {
        question: 'Do you provide emergency commercial cleaning services?',
        answer: 'Yes, we offer 24/7 emergency commercial cleaning for urgent situations like floods, accidents, or unexpected events that require immediate cleaning response to maintain your business operations.'
      },
      {
        question: 'How do you ensure minimal disruption to business operations?',
        answer: 'We work closely with you to schedule cleaning during off-peak hours, weekends, or after business hours. Our team is trained to work efficiently around your operations without disrupting daily activities.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Professional commercial cleaning services Sydney NSW - Large commercial facility cleaning'
      },
      {
        src: '/images/services/strata.jpg',
        alt: 'Commercial cleaning team with industrial equipment - Pro Clean Corp Sydney NSW'
      }
    ],
    relatedServices: ['Office Cleaning', 'Warehouse Cleaning', 'Medical Centre Cleaning', 'Strata Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Commercial Cleaning Services Sydney NSW"
        serviceDescription="Comprehensive commercial cleaning services for all types of commercial properties across Sydney NSW. Specialized cleaning solutions for retail, industrial, medical, and commercial facilities."
        serviceUrl="/services/commercial-cleaning"
        serviceType="Commercial Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Retail Store Cleaning',
          'Warehouse Cleaning',
          'Industrial Facility Cleaning',
          'Restaurant Cleaning',
          'Medical Facility Cleaning',
          'Gym and Fitness Center Cleaning',
          'School and Educational Facility Cleaning',
          'Emergency Commercial Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}
