import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function OfficeCleaningServicesPage() {
  const serviceData = {
    title: 'Office Cleaning Services Sydney NSW - Professional Workplace Solutions',
    description: 'Expert office cleaning services throughout Sydney NSW. Pro Clean Corp delivers comprehensive workplace cleaning solutions including daily office maintenance, deep cleaning, sanitization, and specialized office care services.',
    benefits: [
      'Professional office cleaning services that enhance workplace productivity',
      'Comprehensive sanitization reducing employee sick days and absenteeism',
      'Flexible office cleaning schedules that suit your business operations',
      'Enhanced professional image through consistently clean office environments',
      'Extended lifespan of office assets through proper cleaning maintenance',
      'Improved air quality and employee wellness in cleaned workspaces',
      'Compliance with workplace health and safety cleaning standards',
      'Cost-effective office cleaning packages with transparent pricing'
    ],
    process: [
      'Comprehensive office assessment and customized cleaning service plan',
      'Professional office cleaning service implementation with trained staff',
      'Regular quality monitoring and client feedback integration',
      'Ongoing service optimization and performance improvement'
    ],
    whyChooseUs: [
      'Specialized expertise in office cleaning services across all business sectors',
      'Professional cleaning staff with background checks and comprehensive training',
      'Advanced office cleaning equipment and eco-friendly cleaning products',
      'Flexible office cleaning service contracts to meet your specific needs',
      'Competitive pricing for office cleaning services with volume discounts',
      'Comprehensive insurance coverage for complete peace of mind',
      'Emergency office cleaning services available 24/7 when needed',
      'Proven track record with 100% satisfaction guarantee'
    ],
    serviceAreas: [
      'Sydney CBD', 'Martin Place', 'Wynyard', 'Circular Quay', 'Barangaroo',
      'North Sydney', 'Milsons Point', 'St Leonards', 'Chatswood', 'Artarmon',
      'Parramatta', 'Westmead', 'Harris Park', 'Granville', 'Auburn'
    ],
    faqs: [
      {
        question: 'What do office cleaning services include?',
        answer: 'Our office cleaning services include workstation cleaning, floor care, restroom sanitization, kitchen cleaning, waste removal, window cleaning, carpet maintenance, dusting, and specialized deep cleaning services.'
      },
      {
        question: 'How much do office cleaning services cost?',
        answer: 'Office cleaning service costs vary based on office size, frequency, and specific requirements. We offer competitive rates starting from $30/hour with discounted pricing for regular service contracts.'
      },
      {
        question: 'Can office cleaning services be scheduled after hours?',
        answer: 'Yes, our office cleaning services can be scheduled during after hours, early mornings, weekends, or during business hours based on your preference and operational requirements.'
      },
      {
        question: 'Do you provide supplies for office cleaning services?',
        answer: 'Yes, we provide all cleaning supplies, equipment, and eco-friendly products as part of our office cleaning services. We use professional-grade materials for optimal results.'
      },
      {
        question: 'Are your office cleaning services insured?',
        answer: 'Yes, Pro Clean Corp carries comprehensive public liability insurance, professional indemnity coverage, and workers compensation specifically for our office cleaning services.'
      },
      {
        question: 'How often should I book office cleaning services?',
        answer: 'Office cleaning service frequency depends on office size, staff count, and foot traffic. We typically recommend daily cleaning for busy offices, with weekly or monthly deep cleaning services.'
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Office cleaning services Sydney NSW - Professional workplace cleaning team'
      },
      {
        src: '/images/services/commercial.webp',
        alt: 'Professional office cleaning services provider Sydney NSW'
      }
    ],
    relatedServices: ['Commercial Cleaning Services', 'Business Cleaning Services', 'Workplace Cleaning Services', 'Corporate Cleaning Services']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Services Sydney NSW"
        serviceDescription="Expert office cleaning services throughout Sydney NSW. Comprehensive workplace cleaning solutions including daily maintenance, deep cleaning, and specialized office care services."
        serviceUrl="/office-cleaning-services"
        serviceType="Office Cleaning Services"
        price="$$-$$$"
        additionalServices={[
          'Daily Office Cleaning Services',
          'Weekly Office Maintenance Services',
          'Monthly Deep Office Cleaning',
          'Executive Office Cleaning',
          'Medical Office Cleaning Services',
          'Legal Office Cleaning Services',
          'After Hours Office Cleaning',
          'Emergency Office Cleaning Services'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}