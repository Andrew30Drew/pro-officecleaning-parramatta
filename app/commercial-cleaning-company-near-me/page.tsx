import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCleaningCompanyNearMePage() {
  const serviceData = {
    title: 'Commercial Cleaning Company Near Me Sydney NSW - Local Professional Cleaning Business',
    description: 'Find the best commercial cleaning company near you in Sydney NSW. Pro Clean Corp provides local commercial cleaning services with fast response times, competitive rates, and personalized business solutions in your area.',
    benefits: [
      'Local commercial cleaning company with intimate knowledge of your Sydney area',
      'Fast response times from nearby professional cleaning company teams',
      'Competitive local company rates without travel surcharges or additional fees',
      'Personalized commercial cleaning service from company teams familiar with your community',
      'Reliable local cleaning company building long-term business relationships',
      'Quick emergency response from commercial cleaning company in your vicinity',
      'Supporting local business community with locally-based cleaning company services',
      'Consistent local service from dedicated area commercial cleaning company specialists'
    ],
    process: [
      'Connect with established commercial cleaning company located in your specific area',
      'On-site commercial assessment by local company professionals familiar with your locality',
      'Customized cleaning company plan developed by local teams understanding area requirements',
      'Regular company service delivery from consistent local commercial cleaning teams'
    ],
    whyChooseUs: [
      'Established commercial cleaning company strategically located throughout Sydney NSW',
      'Local cleaning company teams with area-specific expertise and community knowledge',
      'Fast deployment of company services from nearby locations within your suburb',
      'Competitive local company pricing understanding your area market conditions',
      'Strong local cleaning company reputation with community business references',
      'Dedicated commercial cleaning company prioritizing local client relationships',
      'Comprehensive company insurance coverage for all local commercial cleaning services',
      'Proven local company track record with satisfied commercial clients across Sydney'
    ],
    serviceAreas: [
      'Local Company Sydney CBD', 'Local Company North Sydney', 'Local Company Parramatta',
      'Local Company Chatswood', 'Local Company Bondi Junction', 'Local Company Liverpool',
      'Local Company Campbelltown', 'Local Company Penrith', 'Local Company Blacktown',
      'Local Company Bankstown', 'Local Company Fairfield', 'Local Company Hornsby'
    ],
    faqs: [
      {
        question: 'How do I find a reliable commercial cleaning company near me?',
        answer: 'Pro Clean Corp is an established commercial cleaning company with local presence throughout Sydney NSW. Call 1300 494 983 to connect with our company representatives in your specific area for immediate local service.'
      },
      {
        question: 'Is there a commercial cleaning company available in my local area?',
        answer: 'Yes, our commercial cleaning company has teams strategically positioned across Sydney suburbs to ensure fast, reliable company services to businesses in your immediate area.'
      },
      {
        question: 'How quickly can a local commercial cleaning company respond?',
        answer: 'Our local commercial cleaning company can typically respond within 24-48 hours for regular company services and within 2-4 hours for emergency commercial cleaning situations.'
      },
      {
        question: 'Does a local commercial cleaning company cost more?',
        answer: 'No, our local commercial cleaning company offers competitive rates without travel surcharges. Being a local company allows us to provide cost-effective services in your area.'
      },
      {
        question: 'Is your commercial cleaning company properly licensed and insured?',
        answer: 'Yes, our commercial cleaning company is fully licensed, insured, and bonded with comprehensive public liability insurance, professional indemnity coverage, and workers compensation.'
      },
      {
        question: 'Can I visit your commercial cleaning company before hiring?',
        answer: "Absolutely! We encourage meeting with our local commercial cleaning company representatives and visiting our facilities to ensure you\'re comfortable with our company services."
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaning company near me Sydney NSW - Local professional cleaning business'
      },
      {
        src: '/images/hero/hero5.jpg',
        alt: 'Professional commercial cleaning company serving local Sydney businesses'
      }
    ],
    relatedServices: ['Local Commercial Cleaning', 'Commercial Cleaning Company', 'Business Cleaning Services Near Me', 'Local Professional Cleaners']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Company Near Me Sydney NSW"
        serviceDescription="Find the best commercial cleaning company near you in Sydney NSW. Local commercial cleaning services with fast response times, competitive rates, and personalized business solutions."
        serviceUrl="/commercial-cleaning-company-near-me"
        serviceType="Local Commercial Cleaning Company"
        price="$$-$$$$"
        additionalServices={[
          'Local Office Cleaning Company',
          'Local Retail Cleaning Company',
          'Local Warehouse Cleaning Company',
          'Local Medical Facility Cleaning',
          'Local Restaurant Cleaning Company',
          'Local Emergency Cleaning Company',
          'Local Industrial Cleaning Company',
          'Local Property Cleaning Company'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}