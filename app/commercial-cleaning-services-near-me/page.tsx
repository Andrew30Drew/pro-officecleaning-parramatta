import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCleaningServicesNearMePage() {
  const serviceData = {
    title: 'Commercial Cleaning Services Near Me Sydney NSW - Local Professional Cleaners',
    description: 'Find the best commercial cleaning services near you in Sydney NSW. Pro Clean Corp provides local commercial cleaning solutions with fast response times, competitive rates, and personalized service for businesses in your area.',
    benefits: [
      'Local commercial cleaning services with fast response times',
      'Personalized service from local cleaning professionals who know your area',
      'Competitive rates for commercial cleaning in your local Sydney suburbs',
      'Quick emergency cleaning response from nearby cleaning teams',
      'Support for local businesses with community-focused service approach',
      'Familiar with local business requirements and industry standards',
      'Flexible scheduling to accommodate local business operating hours',
      'Building long-term relationships with businesses in your community'
    ],
    process: [
      'Local area assessment and immediate service availability confirmation',
      'On-site consultation with local cleaning professionals familiar with your area',
      'Customized commercial cleaning plan designed for your specific location',
      'Regular service delivery by consistent local cleaning teams'
    ],
    whyChooseUs: [
      'Established local presence serving Sydney NSW businesses for over 8 years',
      'Local cleaning teams familiar with your area and business community',
      'Fast response times with teams located throughout Sydney suburbs',
      'Competitive local rates without compromising on service quality',
      'Strong community reputation with local business references',
      'Local knowledge of area-specific cleaning requirements and challenges',
      'Personalized service that builds lasting local business relationships',
      'Supporting local economy with community-focused cleaning solutions'
    ],
    serviceAreas: [
      'Near Sydney CBD', 'Near North Sydney', 'Near Parramatta', 'Near Chatswood',
      'Near Liverpool', 'Near Campbelltown', 'Near Penrith', 'Near Blacktown',
      'Near Bankstown', 'Near Fairfield', 'Near Hornsby', 'Near Sutherland',
      'Near Burwood', 'Near Strathfield', 'Near Auburn'
    ],
    faqs: [
      {
        question: 'How do I find commercial cleaning services near me?',
        answer: 'Pro Clean Corp serves businesses throughout Sydney NSW with local teams in your area. Call 1300 494 983 or search "Pro Clean Corp" to find commercial cleaning services near your business location.'
      },
      {
        question: 'Do you have local commercial cleaning teams in my area?',
        answer: 'Yes, we have local commercial cleaning teams strategically located across Sydney NSW to provide fast, reliable service to businesses in your area with minimal travel time.'
      },
      {
        question: 'How quickly can local commercial cleaners respond?',
        answer: 'Our local commercial cleaning teams can typically respond within 24-48 hours for regular bookings and within 2-4 hours for emergency cleaning situations in the Sydney NSW area.'
      },
      {
        question: 'Are your local commercial cleaning rates competitive?',
        answer: 'Yes, we offer competitive local rates for commercial cleaning services while maintaining high quality standards. Our local presence allows us to provide cost-effective solutions without travel surcharges.'
      },
      {
        question: 'Do local cleaners understand area-specific requirements?',
        answer: 'Our local cleaning teams are familiar with area-specific requirements, local business practices, and community standards, ensuring personalized service that meets your local needs.'
      },
      {
        question: 'Can I get a quote from local commercial cleaners?',
        answer: 'Yes, our local commercial cleaning teams provide free, no-obligation quotes. Contact us at 1300 494 983 or hello@procleancorp.com.au for a personalized quote for your location.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaning services near me Sydney NSW - Local professional cleaners'
      },
      {
        src: '/images/hero/hero1.jpg',
        alt: 'Local commercial cleaning team serving Sydney NSW businesses'
      }
    ],
    relatedServices: ['Local Office Cleaning', 'Local Business Cleaning', 'Local Industrial Cleaning', 'Local Retail Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Services Near Me Sydney NSW"
        serviceDescription="Find the best commercial cleaning services near you in Sydney NSW. Local commercial cleaning solutions with fast response times and personalized service for businesses in your area."
        serviceUrl="/commercial-cleaning-services-near-me"
        serviceType="Local Commercial Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Local Office Cleaning Services',
          'Local Retail Store Cleaning',
          'Local Warehouse Cleaning',
          'Local Medical Facility Cleaning',
          'Local Restaurant Cleaning',
          'Local Emergency Cleaning',
          'Local Industrial Cleaning',
          'Local Property Maintenance'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}