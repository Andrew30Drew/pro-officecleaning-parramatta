import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';
import { Contact } from '../components/Contact';

export const metadata: Metadata = {
  title: 'Office Cleaning Services Near Me Sydney NSW | Local Workplace Cleaning',
  description: 'Find office cleaning services near me in Sydney NSW. Local workplace cleaning experts in your area. Professional office cleaners with flexible schedules.',
  keywords: 'office cleaning services near me, workplace cleaning near me Sydney, local office cleaners NSW, office cleaning near me',
  openGraph: {
    title: 'Office Cleaning Services Near Me Sydney NSW | Local Workplace Cleaning',
    description: 'Find office cleaning services near me in Sydney NSW. Local workplace cleaning experts in your area. Professional office cleaners with flexible schedules.',
    url: '/office-cleaning-services-near-me-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services near me Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-services-near-me-sydney'
  }
};

export default function OfficeCleaningServicesNearMeSydneyPage() {
  const serviceData = {
    title: 'Office Cleaning Services Near Me Sydney NSW - Local Workplace Cleaning Experts',
    description: 'Find trusted office cleaning services near me throughout Sydney NSW. Pro Clean Corp delivers local workplace cleaning expertise with personalized service, competitive pricing, and flexible scheduling that offices in your area rely on for professional cleaning solutions.',
    benefits: [
      'Local office cleaning services with quick response and personalized attention',
      'Professional workplace cleaning by teams familiar with your specific area',
      'Competitive local pricing with transparent quotes and no hidden travel costs',
      'Flexible scheduling accommodating diverse office operations and time requirements',
      'Emergency office cleaning response available for urgent workplace situations',
      'Local expertise understanding area business needs and workplace regulations',
      'Supporting local business community through professional cleaning services',
      'Direct communication with local cleaning teams and management for better service'
    ],
    process: [
      'Quick local response with prompt office cleaning assessment and consultation',
      'Customized workplace cleaning plan development based on your specific office needs',
      'Professional cleaning service delivery by trained local office cleaning teams',
      'Ongoing local support with regular quality monitoring and responsive service adjustments'
    ],
    whyChooseUs: [
      'Established local presence in Sydney NSW with specialized office cleaning expertise',
      'Professional local teams trained specifically in workplace cleaning protocols',
      'Quick response times with office cleaning services available in your neighborhood',
      'Competitive local rates without compromising professional service quality',
      'Strong local reputation built through consistent office cleaning service delivery',
      'Emergency office cleaning capability with rapid response throughout Sydney areas',
      'Local business commitment supporting workplace cleaning needs and community growth',
      'Personalized office cleaning service with direct access to local management teams'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Pyrmont', 'Ultimo', 'Surry Hills',
      'Redfern', 'Alexandria', 'Waterloo', 'Green Square', 'Rosebery',
      'Chatswood', 'St Leonards', 'Crows Nest', 'Artarmon', 'Lane Cove',
      'Parramatta', 'Homebush', 'Olympic Park', 'Rhodes', 'Meadowbank'
    ],
    faqs: [
      {
        question: 'How do I find quality office cleaning services near me in Sydney NSW?',
        answer: 'Pro Clean Corp provides office cleaning services throughout Sydney NSW with local teams in your area. We offer personalized service, competitive pricing, and professional workplace cleaning solutions for offices seeking reliable local cleaning services.'
      },
      {
        question: 'What are the advantages of local office cleaning services?',
        answer: 'Local office cleaning services provide quick response times, personalized attention, competitive pricing, emergency availability, and direct communication with cleaning teams familiar with your area in Sydney NSW.'
      },
      {
        question: 'Do you provide office cleaning services in my specific Sydney location?',
        answer: 'Yes, we provide office cleaning services throughout Sydney NSW including all major business districts and suburban office areas with dedicated local teams serving each region.'
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Office cleaning services near me Sydney NSW - Local workplace cleaning team'
      }
    ],
    relatedServices: ['Commercial Cleaning Services Near Me', 'Local Office Cleaning', 'Workplace Cleaning Near Me']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Services Near Me Sydney NSW - Local Workplace Cleaning Experts"
        serviceDescription="Local office cleaning services near you in Sydney NSW. Professional workplace cleaning with quick response and competitive rates."
        serviceUrl="/office-cleaning-services-near-me-sydney"
        serviceType="Office Cleaning Services"
        price="$$-$$$"
      />
      <ServiceSEOContent {...serviceData} />
      <Ourservices bg_color="bg-slate-50" />
      <Contact />
    </>
  );
}