import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';
import { Contact } from '../components/Contact';

export const metadata: Metadata = {
  title: 'Commercial Cleaners Near Me Sydney NSW | Local Business Cleaning Team',
  description: 'Find commercial cleaners near me in Sydney NSW. Professional local business cleaning teams in your area. Reliable commercial cleaning with competitive rates.',
  keywords: 'commercial cleaners near me, business cleaners near me Sydney, local commercial cleaning team NSW, commercial cleaning near me',
  openGraph: {
    title: 'Commercial Cleaners Near Me Sydney NSW | Local Business Cleaning Team',
    description: 'Find commercial cleaners near me in Sydney NSW. Professional local business cleaning teams in your area. Reliable commercial cleaning with competitive rates.',
    url: '/commercial-cleaners-near-me-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Commercial cleaners near me Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/commercial-cleaners-near-me-sydney'
  }
};

export default function CommercialCleanersNearMeSydneyPage() {
  const serviceData = {
    title: 'Commercial Cleaners Near Me Sydney NSW - Professional Local Business Cleaning Team',
    description: 'Connect with experienced commercial cleaners near me throughout Sydney NSW. Pro Clean Corp provides professional local business cleaning teams with proven expertise, reliable service, and competitive pricing that businesses in your area trust for their commercial cleaning needs.',
    benefits: [
      'Professional commercial cleaners with local area knowledge and business expertise',
      'Quick response times from cleaning teams located near your business location',
      'Personalized commercial cleaning service with dedicated local team members',
      'Competitive pricing with no travel charges for nearby commercial cleaning jobs',
      'Reliable local commercial cleaners building long-term business relationships',
      'Emergency commercial cleaning response available from nearby cleaning teams',
      'Local business understanding with knowledge of area regulations and requirements',
      'Supporting local employment and business community through professional cleaning services'
    ],
    process: [
      'Quick response from local commercial cleaners with prompt business assessment',
      'On-site consultation by experienced cleaning team members familiar with your area',
      'Professional commercial cleaning service delivery by trained local cleaning teams',
      'Ongoing local support with regular quality checks and responsive team communication'
    ],
    whyChooseUs: [
      'Established network of professional commercial cleaners throughout Sydney NSW',
      'Local cleaning teams with specialized commercial cleaning training and experience',
      'Quick response capability with commercial cleaners ready to serve your area',
      'Competitive local rates from nearby cleaning teams without quality compromise',
      'Strong local reputation built by reliable commercial cleaners serving area businesses',
      'Emergency cleaning response from local commercial cleaners available 24/7',
      'Community commitment with local commercial cleaners supporting business growth',
      'Direct communication with local cleaning teams and area management for better service'
    ],
    serviceAreas: [
      'Sydney CBD', 'Alexandria', 'Mascot', 'Botany', 'Rosebery',
      'Waterloo', 'Redfern', 'Surry Hills', 'Pyrmont', 'Ultimo',
      'North Sydney', 'Artarmon', 'Chatswood', 'St Leonards', 'Crows Nest',
      'Parramatta', 'Homebush', 'Olympic Park', 'Auburn', 'Granville'
    ],
    faqs: [
      {
        question: 'How do I find reliable commercial cleaners near me in Sydney NSW?',
        answer: 'Pro Clean Corp has professional commercial cleaners throughout Sydney NSW ready to serve your area. Our local cleaning teams provide personalized service, competitive pricing, and reliable commercial cleaning solutions for businesses seeking quality cleaners nearby.'
      },
      {
        question: 'What makes local commercial cleaners better than distant cleaning services?',
        answer: 'Local commercial cleaners provide quick response times, personalized attention, competitive pricing without travel costs, emergency availability, and better communication through direct contact with nearby cleaning teams.'
      },
      {
        question: 'Are your commercial cleaners available in my specific Sydney area?',
        answer: 'Yes, we have commercial cleaners throughout Sydney NSW including all major business areas and suburban commercial districts with local teams ready to serve your specific location.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaners near me Sydney NSW - Local business cleaning team'
      }
    ],
    relatedServices: ['Office Cleaners Near Me', 'Local Business Cleaning', 'Commercial Cleaning Services Near Me']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaners Near Me Sydney NSW - Professional Local Business Cleaning Team"
        serviceDescription="Professional commercial cleaners near you in Sydney NSW. Local business cleaning teams with reliable service and competitive rates."
        serviceUrl="/commercial-cleaners-near-me-sydney"
        serviceType="Commercial Cleaners"
        price="$$-$$$$"
      />
      <ServiceSEOContent {...serviceData} />
      <Ourservices bg_color="bg-slate-50" />
      <Contact />
    </>
  );
}