import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';
import { Contact } from '../components/Contact';

export const metadata: Metadata = {
  title: 'Office Cleaning Company Sydney NSW | Professional Workplace Cleaning Experts',
  description: 'Trusted office cleaning company in Sydney NSW. Professional workplace cleaning experts for corporate offices, business centers & commercial buildings. Reliable, insured service.',
  keywords: 'office cleaning company Sydney, workplace cleaning company NSW, professional office cleaners, corporate cleaning company Sydney, office maintenance company',
  openGraph: {
    title: 'Office Cleaning Company Sydney NSW | Professional Workplace Cleaning Experts',
    description: 'Trusted office cleaning company in Sydney NSW. Professional workplace cleaning experts for corporate offices, business centers & commercial buildings. Reliable, insured service.',
    url: '/office-cleaning-company-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office Cleaning Company Sydney NSW - Professional Workplace Cleaning Experts'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-company-sydney'
  }
};

export default function OfficeCleaningCompanySydneyPage() {
  const serviceData = {
    title: 'Office Cleaning Company Sydney NSW - Professional Workplace Cleaning Experts',
    description: "Trust Pro Clean Corp, Sydney NSW\'s premier office cleaning company, to maintain your professional workspace. With specialized expertise in corporate environments, we deliver exceptional office cleaning services that enhance productivity, health, and business image across all types of professional buildings.",
    benefits: [
      'Specialized office cleaning company with deep understanding of corporate environments',
      'Professional workplace expertise that enhances business image and employee satisfaction',
      'Reliable service delivery ensuring consistent cleanliness and professional appearance',
      'Comprehensive office maintenance reducing long-term facility costs and asset deterioration',
      'Health-focused cleaning protocols promoting employee wellbeing and reducing sick days',
      'Flexible scheduling options accommodating diverse business operations and requirements',
      'Professional staff representing your office cleaning company with uniform and courteous service',
      'Established reputation as trusted office cleaning company throughout Sydney NSW'
    ],
    process: [
      'Professional workplace assessment by experienced office cleaning company specialists',
      'Customized cleaning plan development based on specific office requirements and schedule',
      'Professional service implementation using trained office cleaning teams and equipment',
      'Ongoing quality management with regular reviews and service optimization'
    ],
    whyChooseUs: [
      'Established office cleaning company with specialized corporate cleaning expertise',
      'Professional team trained specifically in office environments and workplace protocols',
      'Advanced office cleaning equipment and products designed for professional spaces',
      'Comprehensive insurance and bonding providing complete protection for office cleaning services',
      'Proven track record as reliable office cleaning company serving major Sydney corporations',
      'Flexible service options from daily maintenance to specialized deep cleaning projects',
      'Environmental commitment using eco-friendly products safe for office environments',
      'Competitive pricing with transparent quotes and comprehensive service value'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Pyrmont', 'Ultimo', 'Surry Hills',
      'Redfern', 'Alexandria', 'Waterloo', 'Green Square', 'Rosebery',
      'Chatswood', 'St Leonards', 'Crows Nest', 'Artarmon', 'Lane Cove',
      'Parramatta', 'Homebush', 'Olympic Park', 'Rhodes', 'Meadowbank',
      'Macquarie Park', 'North Ryde', 'Ryde', 'Gladesville', 'Hunters Hill'
    ],
    faqs: [
      {
        question: 'What makes Pro Clean Corp the best office cleaning company in Sydney NSW?',
        answer: "As Sydney\'s leading office cleaning company, we combine specialized corporate expertise, professional trained staff, advanced equipment, comprehensive insurance, proven reliability, and competitive pricing to deliver exceptional office cleaning services."
      },
      {
        question: 'How does your office cleaning company ensure consistent service quality?',
        answer: 'Our office cleaning company maintains quality through comprehensive staff training, detailed cleaning protocols, regular quality inspections, client feedback systems, and continuous service improvement processes across all Sydney NSW locations.'
      },
      {
        question: 'Can your office cleaning company handle multiple office locations?',
        answer: 'Yes, our office cleaning company has the capacity and systems to manage multiple office locations throughout Sydney NSW, providing consistent service standards and centralized account management for corporate clients.'
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Office cleaning company Sydney NSW - Professional workplace cleaning team'
      }
    ],
    relatedServices: ['Commercial Cleaning Company', 'Corporate Cleaning', 'Workplace Sanitization', 'Business Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Company Sydney NSW - Professional Workplace Cleaning Experts"
        serviceDescription="Trusted office cleaning company serving Sydney NSW corporate environments. Professional workplace cleaning experts with reliable service."
        serviceUrl="/office-cleaning-company-sydney"
        serviceType="Office Cleaning Company"
        price="$$-$$$"
      />
      <ServiceSEOContent {...serviceData} />
      <Ourservices bg_color="bg-slate-50" />
      <Contact />
    </>
  );
}