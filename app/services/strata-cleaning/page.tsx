import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../../components/Ourservices';

export default function StrataCleaningPage() {
  const serviceData = {
    title: 'Professional Strata Cleaning Services Sydney NSW',
    description: "Maintain pristine common areas with Pro Clean Corp\'s comprehensive strata cleaning services in Sydney NSW. We specialize in apartment buildings, unit complexes, and multi-level properties with reliable, scheduled maintenance programs.",
    benefits: [
      'Enhanced property value through professionally maintained common areas and facilities',
      'Improved resident satisfaction with clean, welcoming shared spaces',
      'Compliance with strata management requirements and building regulations',
      'Reduced maintenance costs through preventive cleaning and care protocols',
      'Professional appearance that attracts quality tenants and buyers',
      'Specialized cleaning for lobbies, corridors, lifts, and outdoor areas',
      'Flexible scheduling to accommodate resident access and building operations',
      'Comprehensive maintenance including gardens, car parks, and recreational facilities'
    ],
    process: [
      'Property inspection and strata committee consultation for cleaning requirements',
      'Development of comprehensive cleaning schedules for all common areas',
      'Implementation of regular maintenance programs with detailed reporting',
      'Ongoing quality monitoring and resident feedback integration'
    ],
    whyChooseUs: [
      'Extensive experience with strata properties and body corporate requirements',
      'Comprehensive insurance coverage for multi-unit property cleaning operations',
      'Flexible service packages tailored to different property sizes and budgets',
      'Professional staff trained in strata property protocols and resident relations',
      'Emergency cleaning services for urgent situations and weather-related damage',
      'Detailed reporting and communication with strata managers and committees',
      'Eco-friendly cleaning options safe for residents, pets, and the environment',
      'Competitive rates with transparent pricing and no hidden fees'
    ],
    serviceAreas: [
      'Sydney CBD', 'Potts Point', 'Darlinghurst', 'Surry Hills', 'Redfern',
      'North Sydney', 'McMahons Point', 'Kirribilli', 'Neutral Bay', 'Mosman',
      'Bondi', 'Coogee', 'Maroubra', 'Randwick', 'Kensington',
      'Parramatta', 'Westmead', 'Harris Park', 'Granville', 'Auburn'
    ],
    faqs: [
      {
        question: 'What does strata cleaning include?',
        answer: 'Our strata cleaning covers all common areas including lobbies, corridors, stairwells, lifts, mailroom areas, garbage rooms, car parks, gardens, pool areas, gym facilities, and any shared recreational spaces within the building complex.'
      },
      {
        question: 'How often should strata properties be cleaned?',
        answer: 'Most strata properties require weekly cleaning for common areas, with high-traffic areas like lobbies and lifts needing more frequent attention. We customize schedules based on building size, resident count, and specific requirements.'
      },
      {
        question: 'Do you work with strata managers and body corporates?',
        answer: 'Yes, we work closely with strata managers, body corporates, and property management companies. We provide detailed reports, maintain clear communication, and ensure compliance with all building management requirements.'
      },
      {
        question: 'Can you handle emergency cleaning situations?',
        answer: 'Absolutely. We provide 24/7 emergency cleaning services for urgent situations such as floods, accidents, vandalism, or weather damage that affects common areas and requires immediate attention.'
      },
      {
        question: 'How do you ensure minimal disruption to residents?',
        answer: 'We schedule cleaning during optimal times to minimize resident disruption, use appropriate signage, and our staff are trained to work professionally around residents while maintaining building security protocols.'
      },
      {
        question: 'Do you provide cleaning for outdoor areas and car parks?',
        answer: 'Yes, we clean outdoor common areas including courtyards, gardens, pathways, car parks, driveways, and entrance areas. We also provide pressure washing, leaf removal, and general outdoor maintenance cleaning.'
      }
    ],
    images: [
      {
        src: '/images/services/strata.jpg',
        alt: 'Professional strata cleaning services Sydney NSW - Clean apartment building common areas'
      },
      {
        src: '/images/services/commercial.webp',
        alt: 'Strata cleaning team maintaining building facilities - Pro Clean Corp Sydney NSW'
      }
    ],
    relatedServices: ['Commercial Cleaning', 'Office Cleaning', 'Carpet Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Strata Cleaning Services Sydney NSW"
        serviceDescription="Comprehensive strata and apartment building cleaning services for common areas, facilities, and outdoor spaces. Serving residential complexes, unit buildings, and multi-level properties across Sydney NSW."
        serviceUrl="/services/strata-cleaning"
        serviceType="Strata Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Lobby and Entrance Cleaning',
          'Corridor and Stairwell Cleaning',
          'Lift and Common Area Maintenance',
          'Car Park and Garage Cleaning',
          'Garden and Outdoor Area Maintenance',
          'Pool and Recreation Area Cleaning',
          'Emergency Strata Cleaning',
          'Body Corporate Compliance Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}
