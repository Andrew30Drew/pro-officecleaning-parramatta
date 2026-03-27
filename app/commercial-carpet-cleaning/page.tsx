import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCarpetCleaningPage() {
  const serviceData = {
    title: 'Commercial Carpet Cleaning Sydney NSW - Professional Business Carpet Care',
    description: 'Expert commercial carpet cleaning services across Sydney NSW. Pro Clean Corp provides professional carpet care for offices, retail stores, hotels, and commercial facilities using advanced cleaning techniques and equipment.',
    benefits: [
      'Professional carpet cleaning extending carpet lifespan and appearance',
      'Advanced stain removal techniques for all types of commercial carpets',
      'Improved indoor air quality through deep carpet sanitization',
      'Enhanced business image with fresh, clean commercial carpets',
      'Cost-effective carpet maintenance preventing premature replacement',
      'Specialized cleaning for high-traffic commercial carpet areas',
      'Quick-dry carpet cleaning minimizing business disruption',
      'Professional carpet protection treatments for ongoing maintenance'
    ],
    process: [
      'Comprehensive carpet assessment and fiber type identification',
      'Pre-treatment of stains and high-traffic commercial carpet areas',
      'Professional carpet cleaning using appropriate commercial-grade methods',
      'Post-cleaning carpet protection and maintenance recommendations'
    ],
    whyChooseUs: [
      'Specialized commercial carpet cleaning expertise across all carpet types',
      'Advanced carpet cleaning equipment and professional-grade products',
      'Trained carpet cleaning technicians with industry certifications',
      'Flexible commercial carpet cleaning schedules to minimize disruption',
      'Comprehensive insurance coverage for all commercial carpet services',
      'Competitive commercial carpet cleaning rates with package deals',
      'Emergency carpet cleaning services for urgent commercial situations',
      'Proven results with satisfied commercial carpet cleaning clients'
    ],
    serviceAreas: [
      'Carpet Cleaning Sydney CBD', 'Carpet Cleaning North Sydney',
      'Carpet Cleaning Parramatta', 'Carpet Cleaning Chatswood',
      'Carpet Cleaning Liverpool', 'Carpet Cleaning Campbelltown',
      'Carpet Cleaning Penrith', 'Carpet Cleaning Blacktown',
      'Carpet Cleaning Bankstown', 'Carpet Cleaning Fairfield'
    ],
    faqs: [
      {
        question: 'What types of commercial carpets can you clean?',
        answer: 'We clean all types of commercial carpets including office carpets, hotel carpets, retail carpets, restaurant carpets, medical facility carpets, and specialized commercial carpet installations.'
      },
      {
        question: 'How often should commercial carpets be professionally cleaned?',
        answer: 'Commercial carpets should be professionally cleaned every 3-6 months for high-traffic areas, every 6-12 months for moderate traffic, depending on usage and industry requirements.'
      },
      {
        question: 'Do you provide emergency commercial carpet cleaning?',
        answer: 'Yes, we offer 24/7 emergency commercial carpet cleaning for urgent situations like spills, flooding, or accidents that require immediate carpet cleaning response.'
      },
      {
        question: 'How long does commercial carpet cleaning take to dry?',
        answer: 'Our commercial carpet cleaning typically dries within 2-4 hours using our advanced quick-dry methods, minimizing downtime for your business operations.'
      },
      {
        question: 'Can you remove tough stains from commercial carpets?',
        answer: 'Yes, our commercial carpet cleaning includes advanced stain removal techniques for wine, coffee, grease, ink, and other common commercial carpet stains using specialized treatments.'
      },
      {
        question: 'Do you offer carpet protection after cleaning?',
        answer: 'Yes, we provide professional carpet protection treatments that help repel stains and extend the life of your commercial carpets between professional cleanings.'
      }
    ],
    images: [
      {
        src: '/images/services/carpet.jpg',
        alt: 'Commercial carpet cleaning Sydney NSW - Professional business carpet care'
      },
      {
        src: '/images/carpet-cleaning-1.jpg',
        alt: 'Professional commercial carpet cleaning team Sydney NSW'
      }
    ],
    relatedServices: ['Commercial Cleaning', 'Office Cleaning', 'Retail Cleaning', 'Hotel Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Carpet Cleaning Sydney NSW"
        serviceDescription="Expert commercial carpet cleaning services across Sydney NSW. Professional carpet care for offices, retail stores, hotels, and commercial facilities using advanced techniques."
        serviceUrl="/commercial-carpet-cleaning"
        serviceType="Commercial Carpet Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Carpet Cleaning',
          'Retail Store Carpet Cleaning',
          'Hotel Carpet Cleaning',
          'Restaurant Carpet Cleaning',
          'Medical Facility Carpet Cleaning',
          'Emergency Carpet Cleaning',
          'Carpet Stain Removal',
          'Carpet Protection Services'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}