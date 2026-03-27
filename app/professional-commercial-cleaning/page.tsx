import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function ProfessionalCommercialCleaningPage() {
  const serviceData = {
    title: 'Professional Commercial Cleaning Sydney NSW - Expert Business Cleaning Services',
    description: 'Discover professional commercial cleaning excellence in Sydney NSW. Pro Clean Corp delivers expert commercial cleaning services with certified professionals, advanced techniques, and superior results for discerning businesses.',
    benefits: [
      'Professional commercial cleaning delivered by certified industry experts',
      'Advanced cleaning techniques and state-of-the-art professional equipment',
      'Superior results that meet the highest professional cleaning standards',
      'Expert knowledge of industry-specific commercial cleaning requirements',
      'Professional reputation enhancement through consistently pristine premises',
      'Certified cleaning professionals with ongoing training and development',
      'Professional-grade cleaning products and eco-friendly solutions',
      'Expert project management ensuring seamless professional service delivery'
    ],
    process: [
      'Professional consultation and detailed commercial property assessment',
      'Expert cleaning plan development using industry-best practices',
      'Professional cleaning execution by certified commercial cleaning specialists',
      'Expert quality assurance and professional service optimization'
    ],
    whyChooseUs: [
      'Certified professional commercial cleaning specialists with advanced training',
      'Expert knowledge of commercial cleaning standards across all industries',
      'Professional-grade equipment and advanced cleaning technologies',
      'Comprehensive professional development programs for all cleaning staff',
      'Expert project management ensuring professional service delivery',
      'Professional certifications and industry compliance standards',
      'Advanced quality control systems maintaining professional excellence',
      'Expert customer service with dedicated professional account management'
    ],
    serviceAreas: [
      'Professional Cleaning Sydney CBD', 'Professional Cleaning North Sydney', 
      'Professional Cleaning Parramatta', 'Professional Cleaning Chatswood',
      'Professional Cleaning Bondi Junction', 'Professional Cleaning Liverpool',
      'Professional Cleaning Campbelltown', 'Professional Cleaning Penrith',
      'Professional Cleaning Blacktown', 'Professional Cleaning Bankstown'
    ],
    faqs: [
      {
        question: 'What makes your commercial cleaning professional?',
        answer: 'Our professional commercial cleaning features certified cleaning specialists, advanced techniques, professional-grade equipment, industry-standard procedures, and expert quality control systems that deliver superior results.'
      },
      {
        question: 'Are your commercial cleaning staff professionally trained?',
        answer: 'Yes, all our commercial cleaning professionals undergo comprehensive certification training, ongoing professional development, and regular skills assessment to maintain the highest professional standards.'
      },
      {
        question: 'Do you provide professional cleaning for specialized industries?',
        answer: 'Our professional commercial cleaning experts have specialized knowledge and training for medical facilities, food service, manufacturing, retail, education, and other industries with specific requirements.'
      },
      {
        question: 'What professional equipment do you use for commercial cleaning?',
        answer: 'We use professional-grade commercial cleaning equipment including industrial vacuum systems, professional floor machines, advanced sanitization equipment, and specialized tools for optimal results.'
      },
      {
        question: 'How do you ensure professional quality control?',
        answer: 'Our professional quality control includes detailed checklists, regular inspections, client feedback systems, professional supervision, and continuous improvement processes to maintain excellence.'
      },
      {
        question: 'Can you provide professional cleaning references?',
        answer: 'Yes, we can provide professional references from satisfied commercial clients across various industries who can attest to our professional cleaning standards and service excellence.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Professional commercial cleaning Sydney NSW - Expert business cleaning services'
      },
      {
        src: '/images/hero/hero3.jpg',
        alt: 'Professional commercial cleaning specialists delivering expert services'
      }
    ],
    relatedServices: ['Professional Office Cleaning', 'Expert Business Cleaning', 'Professional Industrial Cleaning', 'Certified Commercial Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Commercial Cleaning Sydney NSW"
        serviceDescription="Discover professional commercial cleaning excellence in Sydney NSW. Expert commercial cleaning services with certified professionals, advanced techniques, and superior results."
        serviceUrl="/professional-commercial-cleaning"
        serviceType="Professional Commercial Cleaning"
        price="$$$-$$$$"
        additionalServices={[
          'Professional Office Cleaning',
          'Expert Retail Cleaning',
          'Professional Medical Facility Cleaning',
          'Certified Industrial Cleaning',
          'Professional Restaurant Cleaning',
          'Expert Educational Facility Cleaning',
          'Professional Emergency Cleaning',
          'Advanced Commercial Sanitization'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}