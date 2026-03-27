import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function BusinessCleaningPage() {
  const serviceData = {
    title: 'Business Cleaning Services Sydney NSW - Professional Workplace Solutions',
    description: 'Comprehensive business cleaning services across Sydney NSW. Pro Clean Corp provides professional business cleaning solutions for all types of enterprises, from small businesses to large corporations with customized cleaning programs.',
    benefits: [
      'Enhanced business image through consistently clean and professional premises',
      'Improved employee productivity and morale in clean business environments',
      'Reduced operational costs through preventive cleaning maintenance programs',
      'Professional business appearance that impresses clients and stakeholders',
      'Compliance with business health and safety cleaning regulations',
      'Flexible business cleaning schedules that accommodate your operations',
      'Cost-effective business cleaning solutions with transparent pricing',
      'Supporting business growth through reliable cleaning partnership'
    ],
    process: [
      'Comprehensive business assessment and cleaning requirement analysis',
      'Customized business cleaning program development for your enterprise',
      'Professional cleaning implementation with business-focused service delivery',
      'Ongoing business relationship management and service optimization'
    ],
    whyChooseUs: [
      'Specialized expertise in business cleaning across all industry sectors',
      'Professional understanding of diverse business cleaning requirements',
      'Scalable business cleaning solutions from startups to large enterprises',
      'Business-focused approach with minimal disruption to operations',
      'Competitive business cleaning rates with volume pricing available',
      'Professional business relationships built on trust and reliability',
      'Comprehensive insurance coverage protecting your business interests',
      'Proven track record supporting business success through quality cleaning'
    ],
    serviceAreas: [
      'Business Cleaning Sydney CBD', 'Business Cleaning North Sydney',
      'Business Cleaning Parramatta', 'Business Cleaning Chatswood',
      'Business Cleaning Mascot', 'Business Cleaning Alexandria',
      'Business Cleaning Pyrmont', 'Business Cleaning Surry Hills',
      'Business Cleaning Redfern', 'Business Cleaning Waterloo'
    ],
    faqs: [
      {
        question: 'What types of businesses do you provide cleaning services for?',
        answer: 'We provide business cleaning services for all types of enterprises including corporate offices, retail stores, restaurants, medical practices, legal firms, accounting offices, consulting businesses, and manufacturing facilities.'
      },
      {
        question: 'How do you customize business cleaning for different industries?',
        answer: 'Our business cleaning is customized based on industry requirements, business size, foot traffic, compliance needs, and operational schedules to deliver optimal cleaning solutions for each business type.'
      },
      {
        question: 'Can you provide business cleaning during operating hours?',
        answer: 'Yes, we offer flexible business cleaning schedules including during business hours with minimal disruption, after hours, early mornings, and weekends based on your business needs.'
      },
      {
        question: 'What is included in business cleaning services?',
        answer: 'Business cleaning includes office areas, reception areas, meeting rooms, restrooms, kitchens, storage areas, retail spaces, and specialized areas specific to your business operations.'
      },
      {
        question: "How do you ensure business cleaning doesn\'t disrupt operations?",
        answer: 'Our business cleaning teams are trained to work efficiently around your operations, use quiet equipment when needed, and follow protocols that minimize disruption to your business activities.'
      },
      {
        question: 'Do you offer business cleaning contracts?',
        answer: 'Yes, we provide flexible business cleaning contracts from daily to monthly services, with customizable terms that align with your business requirements and budget constraints.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Business cleaning services Sydney NSW - Professional workplace solutions'
      },
      {
        src: '/images/hero/hero4.jpg',
        alt: 'Professional business cleaning team serving Sydney enterprises'
      }
    ],
    relatedServices: ['Commercial Cleaning', 'Office Cleaning', 'Corporate Cleaning', 'Enterprise Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Business Cleaning Services Sydney NSW"
        serviceDescription="Comprehensive business cleaning services across Sydney NSW. Professional business cleaning solutions for all types of enterprises with customized cleaning programs."
        serviceUrl="/business-cleaning"
        serviceType="Business Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Small Business Cleaning',
          'Corporate Business Cleaning',
          'Retail Business Cleaning',
          'Office Business Cleaning',
          'Restaurant Business Cleaning',
          'Medical Business Cleaning',
          'Professional Service Cleaning',
          'Enterprise Facility Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}