import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CleanCommercialCleaningPage() {
  const serviceData = {
    title: 'Clean Commercial Cleaning Services Sydney NSW - Spotless Business Solutions',
    description: 'Experience the cleanest commercial cleaning services in Sydney NSW with Pro Clean Corp. Our meticulous approach ensures spotless commercial properties with eco-friendly cleaning solutions and attention to detail.',
    benefits: [
      'Immaculate commercial spaces that exceed cleanliness expectations',
      'Detailed cleaning protocols for superior hygiene standards',
      'Eco-friendly cleaning products for healthier work environments',
      'Consistent quality control ensuring spotless results every time',
      'Enhanced business reputation through pristine commercial premises',
      'Improved air quality and employee wellness in cleaned spaces',
      'Professional appearance that impresses clients and customers',
      'Reduced allergens and bacteria through comprehensive sanitization'
    ],
    process: [
      'Thorough commercial property inspection and detailed cleaning assessment',
      'Implementation of systematic cleaning procedures with quality checkpoints',
      'Meticulous cleaning using professional-grade equipment and eco-friendly products',
      'Final quality inspection ensuring spotless results before completion'
    ],
    whyChooseUs: [
      'Uncompromising commitment to cleanliness and attention to detail',
      'Trained cleaning professionals with expertise in commercial standards',
      'Premium cleaning equipment and environmentally safe products',
      'Systematic approach ensuring consistent spotless results',
      'Quality assurance program with regular inspections and feedback',
      'Flexible cleaning schedules tailored to your business requirements',
      'Competitive rates for premium commercial cleaning services',
      '100% satisfaction guarantee on all clean commercial services'
    ],
    serviceAreas: [
      'Sydney CBD', 'Barangaroo', 'Circular Quay', 'Martin Place', 'Wynyard',
      'North Sydney', 'Milsons Point', 'Chatswood', 'St Leonards', 'Crows Nest',
      'Parramatta', 'Westmead', 'Harris Park', 'Auburn', 'Granville'
    ],
    faqs: [
      {
        question: 'What makes your commercial cleaning the cleanest?',
        answer: 'Our clean commercial cleaning uses systematic procedures, premium equipment, eco-friendly products, and multiple quality checkpoints to ensure every surface is spotless and sanitized to the highest standards.'
      },
      {
        question: 'Do you use environmentally clean products?',
        answer: 'Yes, we prioritize eco-friendly, non-toxic cleaning products that are safe for employees and visitors while delivering superior cleaning results without harmful chemicals.'
      },
      {
        question: 'How do you ensure consistent clean results?',
        answer: 'We follow detailed cleaning protocols, conduct quality inspections, use standardized procedures, and maintain regular training programs to ensure consistent spotless results across all commercial properties.'
      },
      {
        question: 'Can you handle large commercial cleaning contracts?',
        answer: 'Yes, we have the capacity, equipment, and experienced staff to handle commercial cleaning contracts of all sizes, from small offices to large commercial complexes and industrial facilities.'
      },
      {
        question: 'What areas do you clean in commercial properties?',
        answer: 'We provide comprehensive cleaning for all areas including offices, lobbies, restrooms, kitchens, conference rooms, storage areas, warehouses, retail spaces, and specialized facilities.'
      },
      {
        question: 'How often should commercial properties be cleaned?',
        answer: 'Cleaning frequency depends on business type and foot traffic. We recommend daily cleaning for high-traffic offices, multiple cleanings for medical facilities, and customized schedules based on specific needs.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Clean commercial cleaning services Sydney NSW - Spotless office environment'
      },
      {
        src: '/images/services/office.webp',
        alt: 'Professional clean commercial cleaning team Sydney NSW'
      }
    ],
    relatedServices: ['Commercial Cleaning', 'Office Cleaning', 'Business Cleaning', 'Industrial Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Clean Commercial Cleaning Services Sydney NSW"
        serviceDescription="Experience the cleanest commercial cleaning services in Sydney NSW. Meticulous commercial cleaning with eco-friendly products and attention to detail for spotless business environments."
        serviceUrl="/clean-commercial-cleaning"
        serviceType="Clean Commercial Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Spotless Office Cleaning',
          'Eco-Friendly Commercial Cleaning',
          'Detail Commercial Cleaning',
          'Premium Business Cleaning',
          'Green Commercial Solutions',
          'Professional Facility Cleaning',
          'Quality Commercial Maintenance',
          'Comprehensive Property Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}