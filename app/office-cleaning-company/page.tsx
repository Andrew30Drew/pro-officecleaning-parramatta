import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function OfficeCleaningCompanyPage() {
  const serviceData = {
    title: 'Office Cleaning Company Sydney NSW - Professional Workplace Cleaning Business',
    description: 'Premier office cleaning company in Sydney NSW with 900% growth in demand. Pro Clean Corp specializes in professional office cleaning with trained teams, flexible scheduling, and comprehensive workplace solutions.',
    benefits: [
      'Specialized office cleaning company with expertise in workplace environments',
      'Professional office cleaning teams with police clearances and training',
      'Flexible scheduling options including after-hours and weekend services',
      'Comprehensive office cleaning solutions from daily maintenance to deep cleaning',
      'Advanced office cleaning equipment and eco-friendly product solutions',
      'Dedicated account management ensuring consistent office cleaning standards',
      'Competitive office cleaning rates with transparent pricing structures',
      'Emergency office cleaning response available 24/7 for urgent situations'
    ],
    process: [
      'Detailed office assessment and customized cleaning plan development',
      'Professional office cleaning team assignment and service scheduling',
      'Regular office cleaning implementation with quality control monitoring',
      'Ongoing service evaluation and client satisfaction management'
    ],
    whyChooseUs: [
      'Leading office cleaning company with 8+ years of workplace cleaning experience',
      'Professional office cleaning specialists with comprehensive training and certifications',
      'Advanced office cleaning technology and environmentally safe cleaning products',
      'Flexible office cleaning contracts from daily services to monthly deep cleaning',
      'Comprehensive insurance coverage including public liability and professional indemnity',
      'Proven office cleaning company serving corporate clients across Sydney NSW',
      'Emergency office cleaning services available for urgent workplace situations',
      '100% satisfaction guarantee on all office cleaning company services'
    ],
    serviceAreas: [
      'Sydney CBD Office Buildings', 'North Sydney Corporate Centers', 'Parramatta Business Parks',
      'Chatswood Office Complexes', 'Bondi Junction Commercial Towers', 'Liverpool Office Spaces',
      'Campbelltown Business Centers', 'Penrith Corporate Facilities', 'Blacktown Office Districts',
      'Fairfield Professional Buildings', 'Hornsby Office Developments', 'Sutherland Business Hubs'
    ],
    faqs: [
      {
        question: 'What makes Pro Clean Corp a trusted office cleaning company?',
        answer: 'We are a specialized office cleaning company with 8+ years of experience, professional certifications, trained staff with police clearances, comprehensive insurance, and a proven track record serving office clients across Sydney NSW.'
      },
      {
        question: 'How does your office cleaning company customize services?',
        answer: 'Our office cleaning company tailors services based on office size, staff count, industry requirements, cleaning frequency needs, and specific workplace challenges to deliver optimal cleaning solutions.'
      },
      {
        question: 'Can your office cleaning company work outside business hours?',
        answer: 'Yes, our office cleaning company specializes in after-hours services including early morning, evening, and weekend cleaning to minimize disruption to your office operations.'
      },
      {
        question: 'What does your office cleaning company service include?',
        answer: 'Our comprehensive office cleaning includes workstation cleaning, floor care, restroom sanitization, kitchen maintenance, waste management, window cleaning, carpet care, and office equipment cleaning.'
      },
      {
        question: 'Is your office cleaning company fully insured?',
        answer: 'Yes, our office cleaning company carries comprehensive public liability insurance, professional indemnity coverage, and workers compensation insurance for complete protection.'
      },
      {
        question: 'How often should we hire an office cleaning company?',
        answer: 'Most offices benefit from daily cleaning by a professional office cleaning company, with weekly deep cleaning and monthly comprehensive maintenance based on office traffic and requirements.'
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Office cleaning company Sydney NSW - Professional workplace cleaning business'
      },
      {
        src: '/images/hero/hero1.jpg',
        alt: 'Trusted office cleaning company serving Sydney workplaces'
      }
    ],
    relatedServices: ['Commercial Cleaning Company', 'Professional Office Cleaning', 'Workplace Cleaning Services', 'Corporate Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Company Sydney NSW"
        serviceDescription="Premier office cleaning company in Sydney NSW with 900% growth in demand. Professional workplace cleaning with trained teams, flexible scheduling, and comprehensive solutions."
        serviceUrl="/office-cleaning-company"
        serviceType="Office Cleaning Company"
        price="$$-$$$"
        additionalServices={[
          'Daily Office Cleaning',
          'Executive Office Suites',
          'Corporate Office Cleaning',
          'Medical Office Cleaning',
          'Legal Office Cleaning',
          'Accounting Office Cleaning',
          'After Hours Office Service',
          'Weekend Office Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}