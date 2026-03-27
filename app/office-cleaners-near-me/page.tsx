import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function OfficeCleanersNearMePage() {
  const serviceData = {
    title: 'Office Cleaners Near Me Sydney NSW - Local Professional Cleaning Teams',
    description: 'Find experienced office cleaners near you in Sydney NSW. Pro Clean Corp provides local professional cleaning teams with fast response times, competitive rates, and personalized office cleaning services in your area.',
    benefits: [
      'Local office cleaners with intimate knowledge of your Sydney area',
      'Fast response times from nearby professional cleaning teams',
      'Competitive local rates without travel surcharges or hidden fees',
      'Personalized office cleaning service from cleaners familiar with your community',
      'Reliable local teams building long-term client relationships',
      'Quick emergency response from office cleaners in your vicinity',
      'Supporting local employment with community-based cleaning professionals',
      'Consistent local service from dedicated area cleaning specialists'
    ],
    process: [
      'Connect with experienced office cleaners located in your specific area',
      'On-site office assessment by local cleaning professionals familiar with your locality',
      'Customized cleaning plan developed by local teams understanding area requirements',
      'Regular service delivery from consistent local office cleaning teams'
    ],
    whyChooseUs: [
      'Network of professional office cleaners strategically located throughout Sydney NSW',
      'Local cleaning teams with area-specific expertise and community knowledge',
      'Fast deployment of office cleaners from nearby locations within your suburb',
      'Competitive local pricing from cleaners who understand your area market',
      'Strong local reputation with community business references and testimonials',
      'Dedicated office cleaners who prioritize building local client relationships',
      'Comprehensive insurance coverage for all local office cleaning teams',
      'Proven local track record with satisfied office clients across Sydney suburbs'
    ],
    serviceAreas: [
      'Local Cleaners Sydney CBD', 'Local Cleaners North Sydney', 'Local Cleaners Parramatta',
      'Local Cleaners Chatswood', 'Local Cleaners Bondi Junction', 'Local Cleaners Liverpool',
      'Local Cleaners Campbelltown', 'Local Cleaners Penrith', 'Local Cleaners Blacktown',
      'Local Cleaners Bankstown', 'Local Cleaners Fairfield', 'Local Cleaners Hornsby'
    ],
    faqs: [
      {
        question: 'How do I find reliable office cleaners near me in Sydney?',
        answer: 'Pro Clean Corp has professional office cleaners located throughout Sydney NSW. Call 1300 494 983 to connect with experienced office cleaners in your specific area who can provide immediate local service.'
      },
      {
        question: 'Are there office cleaners available in my local Sydney area?',
        answer: 'Yes, we have professional office cleaners strategically positioned across Sydney suburbs to ensure fast, reliable service to offices in your immediate area with minimal travel time.'
      },
      {
        question: 'How quickly can local office cleaners respond to my needs?',
        answer: 'Our local office cleaners can typically respond within 24-48 hours for regular cleaning services and within 2-4 hours for emergency office cleaning situations in the Sydney area.'
      },
      {
        question: 'Do local office cleaners cost more than distant services?',
        answer: 'No, our local office cleaners offer competitive rates without travel surcharges. Being located nearby allows us to provide cost-effective office cleaning services in your area.'
      },
      {
        question: 'Are office cleaners near me properly trained and insured?',
        answer: 'Yes, all our local office cleaners are professionally trained, background checked, and fully insured with comprehensive public liability and professional indemnity coverage.'
      },
      {
        question: 'Can I meet the office cleaners before hiring them?',
        answer: "Absolutely! We encourage meeting your assigned local office cleaners during our free consultation to ensure you\'re comfortable with the cleaning team serving your office."
      }
    ],
    images: [
      {
        src: '/images/services/office.webp',
        alt: 'Office cleaners near me Sydney NSW - Local professional cleaning teams'
      },
      {
        src: '/images/hero/hero3.jpg',
        alt: 'Professional office cleaners serving local Sydney businesses'
      }
    ],
    relatedServices: ['Local Office Cleaning', 'Office Cleaning Company', 'Professional Office Cleaning', 'Business Cleaners Near Me']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaners Near Me Sydney NSW"
        serviceDescription="Find experienced office cleaners near you in Sydney NSW. Local professional cleaning teams with fast response times, competitive rates, and personalized office cleaning services."
        serviceUrl="/office-cleaners-near-me"
        serviceType="Local Office Cleaners"
        price="$$-$$$"
        additionalServices={[
          'Local Daily Office Cleaning',
          'Local Weekly Office Service',
          'Local After Hours Cleaning',
          'Local Emergency Office Cleaning',
          'Local Executive Office Cleaning',
          'Local Medical Office Cleaning',
          'Local Corporate Office Cleaning',
          'Local Office Maintenance'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}