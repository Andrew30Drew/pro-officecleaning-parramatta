import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCleaningCompanyPage() {
  const serviceData = {
    title: 'Commercial Cleaning Company Sydney NSW - Trusted Professional Cleaning Business',
    description: 'Leading commercial cleaning company serving Sydney NSW businesses since 2016. Pro Clean Corp delivers reliable, professional cleaning solutions with experienced teams, advanced equipment, and guaranteed satisfaction.',
    benefits: [
      'Established commercial cleaning company with 8+ years of proven experience',
      'Professional cleaning teams with comprehensive training and certifications',
      'State-of-the-art cleaning equipment and eco-friendly product solutions',
      'Comprehensive insurance coverage protecting your business and property',
      'Flexible service contracts tailored to your company\'s specific requirements',
      'Dedicated account management ensuring consistent service quality',
      'Competitive commercial rates with transparent pricing and no hidden fees',
      '24/7 emergency cleaning response for urgent commercial situations'
    ],
    process: [
      'Initial consultation and comprehensive commercial property assessment',
      'Customized cleaning plan development based on your company requirements',
      'Professional service implementation with trained commercial cleaning teams',
      'Ongoing quality monitoring and regular client feedback integration'
    ],
    whyChooseUs: [
      'Trusted commercial cleaning company serving 500+ Sydney businesses',
      'Professional staff with background checks and ongoing training programs',
      'Advanced commercial cleaning technology and environmentally safe products',
      'Comprehensive business insurance including public liability and professional indemnity',
      'Proven track record with excellent client retention and satisfaction rates',
      'Local Sydney company understanding unique commercial cleaning challenges',
      'Professional certifications and compliance with Australian cleaning standards',
      'Commitment to excellence with 100% satisfaction guarantee on all services'
    ],
    serviceAreas: [
      'Sydney CBD Commercial District', 'North Sydney Business Hub', 'Parramatta Commercial Center',
      'Chatswood Business District', 'Liverpool Commercial Area', 'Campbelltown Business Zone',
      'Penrith Commercial Sector', 'Blacktown Business District', 'Bankstown Commercial Hub',
      'Fairfield Business Center', 'Hornsby Commercial Area', 'Sutherland Business Zone'
    ],
    faqs: [
      {
        question: 'What makes Pro Clean Corp a reliable commercial cleaning company?',
        answer: 'We are an established company with 8+ years of experience, comprehensive insurance, professional certifications, trained staff, advanced equipment, and a proven track record serving 500+ commercial clients across Sydney NSW.'
      },
      {
        question: 'How does your commercial cleaning company ensure service quality?',
        answer: 'Our company maintains quality through detailed service protocols, regular inspections, client feedback systems, ongoing staff training, dedicated account management, and comprehensive quality assurance programs.'
      },
      {
        question: 'What types of businesses does your cleaning company serve?',
        answer: 'Our commercial cleaning company serves all business types including corporate offices, retail stores, medical facilities, restaurants, gyms, schools, warehouses, industrial facilities, and professional services.'
      },
      {
        question: 'Is your commercial cleaning company fully insured?',
        answer: 'Yes, Pro Clean Corp carries comprehensive public liability insurance, professional indemnity coverage, and workers compensation insurance specifically designed for commercial cleaning companies.'
      },
      {
        question: 'How long has your commercial cleaning company been operating?',
        answer: 'Pro Clean Corp has been a trusted commercial cleaning company in Sydney NSW since 2016, building strong relationships with local businesses and maintaining excellent service standards.'
      },
      {
        question: 'Does your cleaning company provide emergency services?',
        answer: 'Yes, our commercial cleaning company offers 24/7 emergency cleaning services for urgent situations including floods, accidents, or unexpected events requiring immediate cleaning response.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaning company Sydney NSW - Professional cleaning business team'
      },
      {
        src: '/images/hero/hero6.jpg',
        alt: 'Trusted commercial cleaning company serving Sydney businesses'
      }
    ],
    relatedServices: ['Office Cleaning Company', 'Business Cleaning Services', 'Commercial Contractors', 'Professional Cleaners']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Company Sydney NSW"
        serviceDescription="Leading commercial cleaning company serving Sydney NSW businesses since 2016. Reliable professional cleaning solutions with experienced teams and guaranteed satisfaction."
        serviceUrl="/commercial-cleaning-company"
        serviceType="Commercial Cleaning Company"
        price="$$-$$$$"
        additionalServices={[
          'Corporate Office Cleaning',
          'Retail Business Cleaning',
          'Medical Facility Cleaning',
          'Restaurant Cleaning Services',
          'Warehouse Cleaning Solutions',
          'Industrial Facility Cleaning',
          'Emergency Cleaning Services',
          'Specialized Commercial Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}