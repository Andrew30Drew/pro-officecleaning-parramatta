import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';
import { Contact } from '../components/Contact';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Company Sydney NSW | Trusted Business Cleaning Experts',
  description: 'Leading commercial cleaning company in Sydney NSW. Established business cleaning experts serving offices, retail, healthcare & industrial facilities. Fully insured, reliable service.',
  keywords: 'commercial cleaning company Sydney, business cleaning company NSW, professional cleaning company, commercial cleaners Sydney, cleaning company services',
  openGraph: {
    title: 'Commercial Cleaning Company Sydney NSW | Trusted Business Cleaning Experts',
    description: 'Leading commercial cleaning company in Sydney NSW. Established business cleaning experts serving offices, retail, healthcare & industrial facilities. Fully insured, reliable service.',
    url: '/commercial-cleaning-company-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Commercial cleaning company Sydney NSW - Professional cleaning team'
      }
    ]
  },
  alternates: {
    canonical: '/commercial-cleaning-company-sydney'
  }
};

export default function CommercialCleaningCompanySydneyPage() {
  const serviceData = {
    title: 'Commercial Cleaning Company Sydney NSW - Trusted Business Cleaning Experts',
    description: "Pro Clean Corp is Sydney NSW\'s leading commercial cleaning company with over 15 years of experience delivering exceptional business cleaning services. We specialize in comprehensive commercial cleaning solutions for diverse industries including corporate offices, retail establishments, healthcare facilities, educational institutions, and industrial complexes.",
    benefits: [
      'Established commercial cleaning company with proven track record and industry reputation',
      'Comprehensive business expertise across multiple industries and commercial property types',
      'Professional team of trained, uniformed, and fully insured commercial cleaning specialists',
      'Advanced cleaning technology and equipment ensuring superior results for all business types',
      'Reliable service delivery with consistent quality standards and dependable scheduling',
      'Complete insurance coverage providing peace of mind for all commercial cleaning projects',
      'Local Sydney knowledge with understanding of regional business needs and regulations',
      'Competitive pricing with transparent quotes and flexible service packages for businesses'
    ],
    process: [
      'Initial consultation and comprehensive business cleaning needs assessment',
      'Customized service proposal development with detailed scope and pricing information',
      'Professional service implementation using trained staff and commercial-grade equipment',
      'Ongoing relationship management with regular quality reviews and service optimization'
    ],
    whyChooseUs: [
      'Established commercial cleaning company with over 15 years of Sydney NSW experience',
      'Comprehensive industry expertise serving major corporations and small businesses alike',
      'Professional staff with extensive training, background checks, and comprehensive insurance',
      'Advanced commercial cleaning equipment and eco-friendly products for all business types',
      'Complete service offerings from basic maintenance to specialized commercial cleaning',
      'Proven reliability with consistent service delivery and emergency response capabilities',
      'Strong local reputation with excellent client testimonials and industry recognition',
      'Transparent business practices with competitive pricing and honest communication'
    ],
    serviceAreas: [
      'Sydney CBD', 'Alexandria', 'Mascot', 'Botany', 'Rosebery',
      'Waterloo', 'Redfern', 'Surry Hills', 'Pyrmont', 'Ultimo',
      'North Sydney', 'Artarmon', 'Chatswood', 'St Leonards', 'Crows Nest',
      'Parramatta', 'Homebush', 'Olympic Park', 'Auburn', 'Granville',
      'Bankstown', 'Liverpool', 'Campbelltown', 'Penrith', 'Blacktown',
      'Manly', 'Dee Why', 'Brookvale', 'Frenchs Forest', 'Hornsby',
      'Miranda', 'Cronulla', 'Sutherland', 'Hurstville', 'Kogarah'
    ],
    faqs: [
      {
        question: 'Why should I choose Pro Clean Corp as my commercial cleaning company?',
        answer: "Pro Clean Corp stands out as Sydney NSW\'s trusted commercial cleaning company through our 15+ years experience, comprehensive insurance coverage, trained professional staff, advanced equipment, and proven track record with major commercial clients across diverse industries."
      },
      {
        question: 'What makes your commercial cleaning company different from competitors?',
        answer: 'Our commercial cleaning company differentiates through specialized industry expertise, comprehensive service offerings, advanced cleaning technology, fully trained and insured staff, transparent pricing, and commitment to exceptional customer service throughout Sydney NSW.'
      },
      {
        question: 'Does your commercial cleaning company handle large contracts?',
        answer: 'Yes, our commercial cleaning company has the capacity, expertise, and resources to handle large commercial contracts including multi-site facilities, major corporate accounts, and comprehensive facility management projects throughout Sydney NSW.'
      },
      {
        question: 'Is your commercial cleaning company fully licensed and insured?',
        answer: 'Absolutely. Our commercial cleaning company maintains comprehensive licensing, $20M public liability insurance, workers compensation coverage, and all necessary certifications for commercial cleaning operations in Sydney NSW.'
      },
      {
        question: 'How long has your commercial cleaning company been operating?',
        answer: 'Pro Clean Corp has been operating as a trusted commercial cleaning company for over 15 years, building strong relationships with Sydney NSW businesses and establishing a reputation for reliable, professional commercial cleaning services.'
      },
      {
        question: 'Does your commercial cleaning company provide emergency services?',
        answer: 'Yes, our commercial cleaning company offers 24/7 emergency cleaning services for urgent situations including water damage, contamination incidents, and other events requiring immediate professional cleaning response throughout Sydney NSW.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaning company Sydney NSW - Professional cleaning equipment and team'
      },
      {
        src: '/images/services/office.webp',
        alt: 'Trusted commercial cleaning company serving Sydney NSW businesses'
      }
    ],
    relatedServices: ['Business Cleaning Services', 'Corporate Cleaning', 'Industrial Cleaning', 'Professional Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Company Sydney NSW - Trusted Business Cleaning Experts"
        serviceDescription="Established commercial cleaning company serving Sydney NSW businesses for over 15 years. Professional, reliable, and fully insured commercial cleaning services."
        serviceUrl="/commercial-cleaning-company-sydney"
        serviceType="Commercial Cleaning Company"
        price="$$-$$$$"
        additionalServices={[
          'Commercial Office Cleaning',
          'Retail Cleaning Services',
          'Industrial Cleaning Solutions',
          'Healthcare Facility Cleaning',
          'Educational Facility Cleaning',
          'Restaurant Cleaning Services',
          'Warehouse Cleaning Services',
          'Strata Cleaning Services',
          'Emergency Cleaning Services',
          'Specialized Commercial Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
      
      <Contact />
    </>
  );
}