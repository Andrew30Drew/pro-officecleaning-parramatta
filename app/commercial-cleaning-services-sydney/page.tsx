import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';
import { Contact } from '../components/Contact';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Sydney NSW | Business Cleaning Solutions',
  description: 'Comprehensive commercial cleaning services in Sydney NSW. Full-service business cleaning solutions for offices, retail, healthcare & industrial facilities. Get your free quote today.',
  keywords: 'commercial cleaning services Sydney, business cleaning solutions NSW, professional cleaning services, retail cleaning Sydney, industrial cleaning services',
  openGraph: {
    title: 'Commercial Cleaning Services Sydney NSW | Business Cleaning Solutions',
    description: 'Comprehensive commercial cleaning services in Sydney NSW. Full-service business cleaning solutions for offices, retail, healthcare & industrial facilities. Get your free quote today.',
    url: '/commercial-cleaning-services-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Commercial cleaning services Sydney NSW - Professional cleaning team'
      }
    ]
  },
  alternates: {
    canonical: '/commercial-cleaning-services-sydney'
  }
};

export default function CommercialCleaningServicesSydneyPage() {
  const serviceData = {
    title: 'Commercial Cleaning Services Sydney NSW - Complete Business Cleaning Solutions',
    description: "Discover Pro Clean Corp\'s comprehensive commercial cleaning services across Sydney NSW. We provide complete business cleaning solutions tailored to diverse industries including offices, retail establishments, healthcare facilities, educational institutions, and industrial complexes with flexible scheduling and competitive pricing.",
    benefits: [
      'Complete range of commercial cleaning services under one trusted provider',
      'Customized cleaning solutions designed for specific industry requirements and standards',
      'Improved business efficiency through professional cleaning that enhances workplace productivity',
      'Comprehensive sanitization services that promote health and safety in commercial environments',
      'Cost-effective service packages that combine multiple cleaning services for maximum value',
      'Flexible service scheduling that accommodates your business operations and customer needs',
      'Professional cleaning equipment and techniques that deliver superior commercial results',
      'Reliable service delivery with consistent quality standards across all commercial cleaning services'
    ],
    process: [
      'Comprehensive business assessment and detailed analysis of commercial cleaning requirements',
      'Development of customized service packages combining multiple cleaning solutions',
      'Implementation of integrated cleaning schedules using specialized commercial equipment and techniques',
      'Ongoing service management with regular quality reviews and client communication'
    ],
    whyChooseUs: [
      'Full spectrum of commercial cleaning services from basic maintenance to specialized solutions',
      'Industry-specific expertise across healthcare, retail, corporate, educational, and industrial sectors',
      'Advanced commercial cleaning equipment and eco-friendly products for all service types',
      'Comprehensive training programs ensuring staff expertise across all commercial cleaning services',
      'Complete insurance coverage including public liability and professional indemnity for all services',
      'Proven service delivery with major commercial clients throughout Sydney NSW',
      'Integrated service management with single point of contact for all cleaning needs',
      'Competitive pricing structures with volume discounts for multiple service combinations'
    ],
    serviceAreas: [
      'Sydney CBD', 'Alexandria', 'Mascot', 'Botany', 'Rosebery',
      'Waterloo', 'Redfern', 'Surry Hills', 'Pyrmont', 'Ultimo',
      'North Sydney', 'Artarmon', 'Chatswood', 'St Leonards', 'Crows Nest',
      'Parramatta', 'Homebush', 'Olympic Park', 'Auburn', 'Granville',
      'Bankstown', 'Liverpool', 'Campbelltown', 'Penrith', 'Blacktown',
      'Manly', 'Dee Why', 'Brookvale', 'Frenchs Forest', 'Hornsby'
    ],
    faqs: [
      {
        question: 'What commercial cleaning services do you provide in Sydney NSW?',
        answer: 'We provide comprehensive commercial cleaning services including office cleaning, retail cleaning, warehouse cleaning, medical facility cleaning, restaurant cleaning, gym cleaning, school cleaning, strata cleaning, carpet cleaning, window cleaning, and specialized industrial cleaning services throughout Sydney NSW.'
      },
      {
        question: 'Can you combine multiple cleaning services for our business?',
        answer: 'Absolutely. We specialize in creating integrated service packages that combine multiple commercial cleaning services. This approach provides better value, simplified management, and consistent quality across all your cleaning needs in Sydney NSW.'
      },
      {
        question: 'How do you customize cleaning services for different industries?',
        answer: 'We tailor our commercial cleaning services based on industry-specific requirements, regulations, and standards. For example, healthcare facilities receive medical-grade sanitization, food businesses get HACCP-compliant cleaning, and corporate offices receive professional workplace cleaning services.'
      },
      {
        question: 'Do you provide emergency commercial cleaning services?',
        answer: 'Yes, we offer 24/7 emergency commercial cleaning services for urgent situations including water damage, accidents, contamination incidents, and other events requiring immediate professional cleaning response throughout Sydney NSW.'
      },
      {
        question: 'What makes your commercial cleaning services different?',
        answer: 'Our commercial cleaning services stand out through comprehensive industry expertise, advanced equipment, fully trained and insured staff, flexible service packages, competitive pricing, and proven results with major Sydney NSW commercial clients.'
      },
      {
        question: 'How do you ensure quality across all commercial cleaning services?',
        answer: 'We maintain quality through standardized procedures, regular training programs, comprehensive quality control inspections, client feedback systems, and continuous service improvement processes across all our commercial cleaning services in Sydney NSW.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaning services Sydney NSW - Professional cleaning equipment'
      },
      {
        src: '/images/services/office.webp',
        alt: 'Commercial cleaning services team working in Sydney NSW facility'
      }
    ],
    relatedServices: ['Office Cleaning Services', 'Industrial Cleaning', 'Healthcare Cleaning', 'Retail Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Services Sydney NSW - Complete Business Cleaning Solutions"
        serviceDescription="Comprehensive commercial cleaning services for all business types throughout Sydney NSW. Full-service cleaning solutions with flexible packages and competitive pricing."
        serviceUrl="/commercial-cleaning-services-sydney"
        serviceType="Commercial Cleaning Services"
        price="$$-$$$$"
        additionalServices={[
          'Office Cleaning Services',
          'Retail Store Cleaning Services',
          'Warehouse Cleaning Services',
          'Industrial Cleaning Services',
          'Medical Facility Cleaning Services',
          'Restaurant Cleaning Services',
          'Gym Cleaning Services',
          'Educational Facility Cleaning Services',
          'Strata Cleaning Services',
          'Specialized Commercial Cleaning Services'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
      
      <Contact />
    </>
  );
}