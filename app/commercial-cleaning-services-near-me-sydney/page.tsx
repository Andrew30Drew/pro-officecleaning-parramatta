import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';
import { Contact } from '../components/Contact';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Near Me Sydney NSW | Local Business Cleaning',
  description: 'Find commercial cleaning services near me in Sydney NSW. Local business cleaning experts serving your area. Quick response, competitive rates, professional service.',
  keywords: 'commercial cleaning services near me, business cleaning near me Sydney, local commercial cleaners NSW, cleaning services near me commercial',
  openGraph: {
    title: 'Commercial Cleaning Services Near Me Sydney NSW | Local Business Cleaning',
    description: 'Find commercial cleaning services near me in Sydney NSW. Local business cleaning experts serving your area. Quick response, competitive rates, professional service.',
    url: '/commercial-cleaning-services-near-me-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Commercial cleaning services near me Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/commercial-cleaning-services-near-me-sydney'
  }
};

export default function CommercialCleaningServicesNearMeSydneyPage() {
  const serviceData = {
    title: 'Commercial Cleaning Services Near Me Sydney NSW - Local Business Cleaning Experts',
    description: 'Discover reliable commercial cleaning services near me throughout Sydney NSW. Pro Clean Corp provides local business cleaning expertise with quick response times, competitive pricing, and professional service quality that businesses in your area trust for their commercial cleaning needs.',
    benefits: [
      'Local commercial cleaning services with quick response times and flexible scheduling',
      'Personalized service from cleaning professionals who understand your local area',
      'Competitive pricing with transparent quotes and no travel surcharges for nearby locations',
      'Reliable local team providing consistent service quality and building lasting relationships',
      'Quick emergency response for urgent commercial cleaning situations in your area',
      'Local knowledge of area businesses, regulations, and specific cleaning requirements',
      'Supporting local business community with professional cleaning services and employment',
      'Easy communication and coordination with local cleaning service team and management'
    ],
    process: [
      'Quick local response with prompt assessment of your commercial cleaning requirements',
      'On-site consultation providing customized cleaning solutions for your specific location',
      'Professional service delivery by local teams familiar with your area and business type',
      'Ongoing local support with regular quality checks and responsive customer service'
    ],
    whyChooseUs: [
      'Established local presence throughout Sydney NSW with area expertise and knowledge',
      'Quick response times with local teams ready to serve businesses in your neighborhood',
      'Professional local staff with comprehensive training and area-specific experience',
      'Competitive local pricing without compromise on service quality or reliability',
      'Strong local reputation built through years of serving area businesses',
      'Local emergency response capability for urgent commercial cleaning situations',
      'Community commitment supporting local business growth and employment opportunities',
      'Personalized local service with direct access to management and support teams'
    ],
    serviceAreas: [
      'Sydney CBD', 'Alexandria', 'Mascot', 'Botany', 'Rosebery',
      'Waterloo', 'Redfern', 'Surry Hills', 'Pyrmont', 'Ultimo',
      'North Sydney', 'Artarmon', 'Chatswood', 'St Leonards', 'Crows Nest',
      'Parramatta', 'Homebush', 'Olympic Park', 'Auburn', 'Granville'
    ],
    faqs: [
      {
        question: 'How do I find reliable commercial cleaning services near me in Sydney NSW?',
        answer: 'Pro Clean Corp provides commercial cleaning services throughout Sydney NSW with local teams in your area. We offer quick response, personalized service, and competitive pricing for businesses seeking reliable local cleaning services.'
      },
      {
        question: 'What are the benefits of choosing local commercial cleaning services?',
        answer: 'Local commercial cleaning services provide quick response times, personalized attention, competitive pricing without travel costs, emergency availability, and support for the local business community in Sydney NSW.'
      },
      {
        question: 'Do you provide commercial cleaning services in my specific Sydney area?',
        answer: 'Yes, we provide commercial cleaning services throughout Sydney NSW including CBD, Inner West, Eastern Suburbs, Northern Beaches, Hills District, and Western Sydney with local teams serving each area.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaning services near me Sydney NSW - Local business cleaning team'
      }
    ],
    relatedServices: ['Office Cleaning Services Near Me', 'Local Business Cleaning', 'Commercial Cleaners Near Me']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Services Near Me Sydney NSW - Local Business Cleaning Experts"
        serviceDescription="Local commercial cleaning services near you in Sydney NSW. Professional business cleaning with quick response and competitive rates."
        serviceUrl="/commercial-cleaning-services-near-me-sydney"
        serviceType="Commercial Cleaning Services"
        price="$$-$$$$"
      />
      <ServiceSEOContent {...serviceData} />
      <Ourservices bg_color="bg-slate-50" />
      <Contact />
    </>
  );
}