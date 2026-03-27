import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';
import { Contact } from '../components/Contact';

export const metadata: Metadata = {
  title: 'Office Cleaning Services Sydney NSW | Professional Workplace Solutions',
  description: 'Expert office cleaning services in Sydney NSW. Comprehensive workplace cleaning solutions for corporate offices, business centers & professional buildings. Daily, weekly & monthly schedules.',
  keywords: 'office cleaning services Sydney, workplace cleaning solutions NSW, corporate cleaning services, business office cleaning Sydney, professional office maintenance',
  openGraph: {
    title: 'Office Cleaning Services Sydney NSW | Professional Workplace Solutions',
    description: 'Expert office cleaning services in Sydney NSW. Comprehensive workplace cleaning solutions for corporate offices, business centers & professional buildings. Daily, weekly & monthly schedules.',
    url: '/office-cleaning-services-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services Sydney NSW - Professional workplace cleaning'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-services-sydney'
  }
};

export default function OfficeCleaningServicesSydneyPage() {
  const serviceData = {
    title: 'Office Cleaning Services Sydney NSW - Complete Workplace Cleaning Solutions',
    description: "Transform your workplace with Pro Clean Corp\'s comprehensive office cleaning services throughout Sydney NSW. We deliver complete workplace cleaning solutions for corporate offices, business centers, coworking spaces, and professional buildings with customized service schedules and competitive pricing.",
    benefits: [
      'Complete office cleaning services tailored to modern workplace requirements',
      'Enhanced professional image that impresses clients and supports business growth',
      'Improved employee satisfaction and productivity through clean work environments',
      'Reduced workplace illnesses and absenteeism through proper sanitization services',
      'Comprehensive maintenance that preserves office assets and reduces replacement costs',
      'Flexible service schedules designed around your business operations and meetings',
      'Professional cleaning standards that reflect your company\'s commitment to excellence',
      'Cost-effective service packages that provide maximum value for complete office maintenance'
    ],
    process: [
      'Detailed workplace assessment and customized office cleaning service plan development',
      'Implementation of comprehensive cleaning protocols using professional office equipment',
      'Regular service delivery by trained office cleaning specialists with quality monitoring',
      'Ongoing service optimization with feedback integration and schedule adjustments'
    ],
    whyChooseUs: [
      'Specialized expertise in corporate office environments and professional workplace standards',
      'Comprehensive service offerings from daily maintenance to deep cleaning services',
      'Advanced office cleaning equipment and eco-friendly products safe for workplace use',
      'Professional staff with extensive training in office cleaning and workplace protocols',
      'Complete insurance coverage with comprehensive liability protection for all services',
      'Proven track record with major Sydney corporations and professional service firms',
      'Flexible service delivery with minimal disruption to business operations',
      'Transparent pricing with competitive rates and comprehensive service value'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Pyrmont', 'Ultimo', 'Surry Hills',
      'Redfern', 'Alexandria', 'Waterloo', 'Green Square', 'Rosebery',
      'Chatswood', 'St Leonards', 'Crows Nest', 'Artarmon', 'Lane Cove',
      'Parramatta', 'Homebush', 'Olympic Park', 'Rhodes', 'Meadowbank',
      'Macquarie Park', 'North Ryde', 'Ryde', 'Gladesville', 'Hunters Hill',
      'Bondi Junction', 'Double Bay', 'Paddington', 'Woollahra', 'Randwick'
    ],
    faqs: [
      {
        question: 'What office cleaning services do you provide in Sydney NSW?',
        answer: 'Our comprehensive office cleaning services include workstation cleaning, kitchen and breakroom maintenance, restroom sanitization, floor care, waste management, window cleaning, carpet cleaning, conference room cleaning, reception area maintenance, and specialized deep cleaning services throughout Sydney NSW.'
      },
      {
        question: 'How often should we schedule office cleaning services?',
        answer: 'Office cleaning frequency depends on office size, staff numbers, and business requirements. We provide flexible scheduling including daily, weekly, bi-weekly, and monthly office cleaning services to match your specific needs and budget in Sydney NSW.'
      },
      {
        question: 'Can you provide office cleaning services outside business hours?',
        answer: 'Yes, we offer flexible office cleaning services including after-hours, early morning, weekend, and holiday cleaning to minimize disruption to your business operations throughout Sydney NSW.'
      },
      {
        question: 'Do your office cleaning services include specialized areas?',
        answer: 'Absolutely. Our office cleaning services cover all areas including executive offices, open-plan workspaces, conference rooms, reception areas, kitchens, restrooms, break rooms, server rooms, and common areas with specialized cleaning protocols for each space type.'
      },
      {
        question: 'Are your office cleaning services environmentally friendly?',
        answer: 'Yes, we prioritize eco-friendly office cleaning using green products and sustainable practices that are safe for indoor office environments while maintaining professional cleaning standards throughout Sydney NSW.'
      },
      {
        question: 'How do you ensure quality in your office cleaning services?',
        answer: 'We maintain service quality through comprehensive staff training, regular quality inspections, detailed cleaning checklists, client feedback systems, and continuous service improvement processes across all our office cleaning services in Sydney NSW.'
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Office cleaning services Sydney NSW - Modern office workspace cleaning'
      },
      {
        src: '/images/services/commercial.webp',
        alt: 'Professional office cleaning services team in Sydney NSW corporate building'
      }
    ],
    relatedServices: ['Commercial Cleaning Services', 'Corporate Cleaning', 'Workplace Sanitization', 'Business Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Services Sydney NSW - Complete Workplace Cleaning Solutions"
        serviceDescription="Comprehensive office cleaning services for corporate workplaces throughout Sydney NSW. Professional cleaning solutions with flexible schedules and competitive pricing."
        serviceUrl="/office-cleaning-services-sydney"
        serviceType="Office Cleaning Services"
        price="$$-$$$"
        additionalServices={[
          'Daily Office Cleaning Services',
          'Weekly Office Maintenance',
          'Corporate Cleaning Services',
          'Workspace Sanitization Services',
          'Conference Room Cleaning',
          'Executive Office Cleaning',
          'Reception Area Cleaning Services',
          'Office Kitchen Cleaning',
          'Restroom Cleaning Services',
          'After-Hours Office Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
      
      <Contact />
    </>
  );
}