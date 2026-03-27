import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../../components/Ourservices';

export default function OfficeCleaningPage() {
  const serviceData = {
    title: 'Professional Office Cleaning Services Sydney NSW',
    description: "Transform your workplace with Pro Clean Corp\'s professional office cleaning services in Sydney NSW. Our experienced team delivers comprehensive cleaning solutions for offices of all sizes, ensuring a pristine, healthy, and productive work environment for your staff and visitors.",
    benefits: [
      'Enhanced employee productivity and morale through a clean, organized workspace',
      'Improved indoor air quality reducing sick days and health-related issues',
      'Professional appearance that impresses clients and business partners',
      'Customized cleaning schedules to minimize disruption to your operations',
      'Cost-effective solutions that extend the life of office furniture and equipment',
      'Eco-friendly cleaning products safe for employees and the environment',
      'Fully insured and bonded team with 9+ years of commercial cleaning experience',
      'Consistent quality standards maintained through regular inspections and training'
    ],
    process: [
      'Initial consultation and workspace assessment to understand your specific needs',
      'Customized cleaning plan development with detailed schedules and requirements',
      'Professional cleaning execution using industry-grade equipment and products',
      'Quality assurance checks and client feedback to ensure satisfaction'
    ],
    whyChooseUs: [
      'Over 9 years of experience serving 1,200+ businesses across Sydney NSW',
      'Fully licensed, insured, and bonded professional cleaning team',
      '4.8-star customer satisfaction rating with consistent quality delivery',
      'Flexible scheduling including after-hours and weekend cleaning services',
      'Comprehensive range of office cleaning services under one roof',
      'Competitive pricing with transparent quotes and no hidden fees',
      'Environmentally responsible cleaning practices and green certified products',
      'Local Sydney NSW business with deep understanding of area requirements'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Parramatta', 'Chatswood', 'Bondi Junction',
      'Manly', 'Cronulla', 'Liverpool', 'Bankstown', 'Penrith',
      'Blacktown', 'Hornsby', 'Sutherland', 'Campbelltown', 'Macquarie Park',
      'Neutral Bay', 'Mosman', 'Double Bay', 'Surry Hills', 'Pyrmont'
    ],
    faqs: [
      {
        question: 'How often should office cleaning be performed?',
        answer: 'Most offices benefit from daily cleaning for high-traffic areas and weekly deep cleaning. We customize frequency based on your office size, employee count, and specific requirements. Options include daily, weekly, bi-weekly, or monthly services.'
      },
      {
        question: "What\'s included in your office cleaning services?",
        answer: 'Our comprehensive office cleaning includes desk and workspace cleaning, floor mopping and vacuuming, bathroom sanitization, kitchen and break room cleaning, window cleaning, trash removal, and dusting of all surfaces and equipment.'
      },
      {
        question: 'Do you provide cleaning supplies and equipment?',
        answer: 'Yes, Pro Clean Corp provides all necessary cleaning supplies, equipment, and tools. We use professional-grade, eco-friendly products that are safe for office environments and effective against germs and bacteria.'
      },
      {
        question: 'Can you clean outside regular business hours?',
        answer: 'Absolutely! We offer flexible scheduling including early morning, evening, and weekend cleaning services to minimize disruption to your business operations. Most of our office cleaning is performed outside business hours.'
      },
      {
        question: 'Are your cleaners insured and background checked?',
        answer: "Yes, all Pro Clean Corp team members are fully insured, bonded, and undergo comprehensive background checks. We maintain full liability insurance and workers\' compensation coverage for your peace of mind."
      },
      {
        question: 'How do you ensure consistent quality?',
        answer: 'We maintain consistency through detailed cleaning checklists, regular supervisor inspections, ongoing staff training, and client feedback systems. Each cleaning is verified against our quality standards before completion.'
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Professional office cleaning services Sydney NSW - Clean modern office workspace'
      },
      {
        src: '/images/services/commercial.webp',
        alt: 'Office cleaning team in action - Professional commercial cleaners Sydney NSW'
      }
    ],
    relatedServices: ['Commercial Cleaning', 'Medical Centre Cleaning', 'Strata Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Office Cleaning Services Sydney NSW"
        serviceDescription="Comprehensive office cleaning services for businesses across Sydney NSW. Daily cleaning, deep cleaning, and maintenance services for offices of all sizes."
        serviceUrl="/services/office-cleaning"
        serviceType="Office Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Daily Office Cleaning',
          'Deep Office Cleaning',
          'Carpet Cleaning',
          'Window Cleaning',
          'Bathroom Sanitization',
          'Kitchen Cleaning',
          'Desk and Workstation Cleaning',
          'Floor Maintenance'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}
