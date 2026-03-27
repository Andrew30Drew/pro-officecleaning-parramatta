import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function ProfessionalOfficeCleaningPage() {
  const serviceData = {
    title: 'Professional Office Cleaning Sydney NSW - Expert Workplace Cleaning Services',
    description: 'Discover professional office cleaning excellence in Sydney NSW. Pro Clean Corp delivers expert office cleaning services with certified professionals, advanced techniques, and superior results for discerning businesses.',
    benefits: [
      'Professional office cleaning delivered by certified workplace cleaning experts',
      'Advanced office cleaning techniques and state-of-the-art professional equipment',
      'Superior office cleaning results meeting the highest professional standards',
      'Expert knowledge of workplace-specific office cleaning requirements and protocols',
      'Professional reputation enhancement through consistently pristine office environments',
      'Certified office cleaning professionals with ongoing training and development',
      'Professional-grade office cleaning products and eco-friendly workplace solutions',
      'Expert project management ensuring seamless professional office service delivery'
    ],
    process: [
      'Professional office consultation and detailed workplace assessment',
      'Expert office cleaning plan development using industry-best practices',
      'Professional office cleaning execution by certified workplace specialists',
      'Expert quality assurance and professional office service optimization'
    ],
    whyChooseUs: [
      'Certified professional office cleaning specialists with advanced workplace training',
      'Expert knowledge of office cleaning standards across all business industries',
      'Professional-grade office cleaning equipment and advanced workplace technologies',
      'Comprehensive professional development programs for all office cleaning staff',
      'Expert office cleaning project management ensuring professional service delivery',
      'Professional office cleaning certifications and workplace compliance standards',
      'Advanced office cleaning quality control systems maintaining professional excellence',
      'Expert office cleaning customer service with dedicated professional account management'
    ],
    serviceAreas: [
      'Professional Office Cleaning Sydney CBD', 'Professional Office Cleaning North Sydney',
      'Professional Office Cleaning Parramatta', 'Professional Office Cleaning Chatswood',
      'Professional Office Cleaning Bondi Junction', 'Professional Office Cleaning Liverpool',
      'Professional Office Cleaning Campbelltown', 'Professional Office Cleaning Penrith',
      'Professional Office Cleaning Blacktown', 'Professional Office Cleaning Bankstown'
    ],
    faqs: [
      {
        question: 'What makes your office cleaning truly professional?',
        answer: 'Our professional office cleaning features certified workplace specialists, advanced cleaning techniques, professional-grade equipment, industry-standard procedures, and expert quality control systems delivering superior results.'
      },
      {
        question: 'Are your office cleaning staff professionally trained?',
        answer: 'Yes, all our professional office cleaning staff undergo comprehensive certification training, ongoing professional development, and regular skills assessment to maintain the highest professional workplace standards.'
      },
      {
        question: 'Do you provide professional cleaning for specialized office environments?',
        answer: 'Our professional office cleaning experts have specialized knowledge and training for medical offices, legal firms, accounting practices, corporate headquarters, and other professional environments with specific requirements.'
      },
      {
        question: 'What professional equipment do you use for office cleaning?',
        answer: 'We use professional-grade office cleaning equipment including commercial vacuum systems, professional floor machines, advanced sanitization equipment, and specialized tools for optimal workplace results.'
      },
      {
        question: 'How do you ensure professional quality control in office cleaning?',
        answer: 'Our professional quality control includes detailed office cleaning checklists, regular workplace inspections, client feedback systems, professional supervision, and continuous improvement processes to maintain excellence.'
      },
      {
        question: 'Can you provide professional office cleaning references?',
        answer: 'Yes, we can provide professional references from satisfied office clients across various industries who can attest to our professional office cleaning standards and service excellence.'
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Professional office cleaning Sydney NSW - Expert workplace cleaning services'
      },
      {
        src: '/images/hero/hero4.jpg',
        alt: 'Professional office cleaning specialists delivering expert workplace services'
      }
    ],
    relatedServices: ['Professional Commercial Cleaning', 'Expert Office Services', 'Professional Workplace Cleaning', 'Certified Office Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Office Cleaning Sydney NSW"
        serviceDescription="Discover professional office cleaning excellence in Sydney NSW. Expert office cleaning services with certified professionals, advanced techniques, and superior results."
        serviceUrl="/professional-office-cleaning"
        serviceType="Professional Office Cleaning"
        price="$$$-$$$$"
        additionalServices={[
          'Professional Executive Office Cleaning',
          'Expert Corporate Office Cleaning',
          'Professional Medical Office Cleaning',
          'Certified Legal Office Cleaning',
          'Professional Accounting Office Cleaning',
          'Expert Professional Service Cleaning',
          'Professional Office Maintenance',
          'Advanced Office Sanitization'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}