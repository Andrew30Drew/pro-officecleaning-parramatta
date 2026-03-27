import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';
import { Contact } from '../components/Contact';

export const metadata: Metadata = {
  title: 'Office Cleaners Near Me Sydney NSW | Local Workplace Cleaning Team',
  description: 'Find office cleaners near me in Sydney NSW. Professional local workplace cleaning teams in your area. Reliable office cleaning with flexible schedules.',
  keywords: 'office cleaners near me, workplace cleaners near me Sydney, local office cleaning team NSW, office cleaning near me',
  openGraph: {
    title: 'Office Cleaners Near Me Sydney NSW | Local Workplace Cleaning Team',
    description: 'Find office cleaners near me in Sydney NSW. Professional local workplace cleaning teams in your area. Reliable office cleaning with flexible schedules.',
    url: '/office-cleaners-near-me-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaners near me Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaners-near-me-sydney'
  }
};

export default function OfficeCleanersNearMeSydneyPage() {
  const serviceData = {
    title: 'Office Cleaners Near Me Sydney NSW - Professional Local Workplace Cleaning Team',
    description: 'Discover professional office cleaners near me throughout Sydney NSW. Pro Clean Corp provides experienced local workplace cleaning teams with specialized office expertise, reliable service, and competitive pricing that offices in your area depend on for professional cleaning solutions.',
    benefits: [
      'Professional office cleaners with local area knowledge and workplace expertise',
      'Quick response times from cleaning teams located near your office location',
      'Personalized office cleaning service with dedicated local cleaning team members',
      'Competitive pricing with no travel charges for nearby office cleaning services',
      'Reliable local office cleaners building long-term workplace relationships',
      'Emergency office cleaning response available from nearby cleaning teams',
      'Local workplace understanding with knowledge of area business practices',
      'Supporting local employment and business community through professional office cleaning services'
    ],
    process: [
      'Quick response from local office cleaners with prompt workplace assessment',
      'On-site consultation by experienced office cleaning team members familiar with your area',
      'Professional office cleaning service delivery by trained local cleaning specialists',
      'Ongoing local support with regular quality monitoring and responsive team communication'
    ],
    whyChooseUs: [
      'Established network of professional office cleaners throughout Sydney NSW',
      'Local cleaning teams with specialized office cleaning training and workplace experience',
      'Quick response capability with office cleaners ready to serve your area',
      'Competitive local rates from nearby cleaning teams without quality compromise',
      'Strong local reputation built by reliable office cleaners serving area workplaces',
      'Emergency cleaning response from local office cleaners available 24/7',
      'Community commitment with local office cleaners supporting workplace productivity',
      'Direct communication with local cleaning teams and area management for personalized service'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Pyrmont', 'Ultimo', 'Surry Hills',
      'Redfern', 'Alexandria', 'Waterloo', 'Green Square', 'Rosebery',
      'Chatswood', 'St Leonards', 'Crows Nest', 'Artarmon', 'Lane Cove',
      'Parramatta', 'Homebush', 'Olympic Park', 'Rhodes', 'Meadowbank'
    ],
    faqs: [
      {
        question: 'How do I find quality office cleaners near me in Sydney NSW?',
        answer: 'Pro Clean Corp has professional office cleaners throughout Sydney NSW ready to serve your area. Our local cleaning teams provide personalized service, competitive pricing, and reliable office cleaning solutions for workplaces seeking quality cleaners nearby.'
      },
      {
        question: 'What are the benefits of choosing local office cleaners?',
        answer: 'Local office cleaners provide quick response times, personalized attention, competitive pricing without travel costs, emergency availability, and better communication through direct contact with nearby cleaning teams.'
      },
      {
        question: 'Do you have office cleaners available in my specific Sydney location?',
        answer: 'Yes, we have office cleaners throughout Sydney NSW including all major business districts and suburban office areas with local teams ready to serve your specific workplace location.'
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Office cleaners near me Sydney NSW - Local workplace cleaning team'
      }
    ],
    relatedServices: ['Commercial Cleaners Near Me', 'Local Office Cleaning', 'Workplace Cleaning Services']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaners Near Me Sydney NSW - Professional Local Workplace Cleaning Team"
        serviceDescription="Professional office cleaners near you in Sydney NSW. Local workplace cleaning teams with reliable service and competitive rates."
        serviceUrl="/office-cleaners-near-me-sydney"
        serviceType="Office Cleaners"
        price="$$-$$$"
      />
      <ServiceSEOContent {...serviceData} />
      <Ourservices bg_color="bg-slate-50" />
      <Contact />
    </>
  );
}