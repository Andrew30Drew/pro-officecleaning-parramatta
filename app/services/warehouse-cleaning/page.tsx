import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../../components/Ourservices';

export default function WarehouseCleaningPage() {
  const serviceData = {
    title: 'Professional Warehouse Cleaning Services Sydney NSW',
    description: "Maintain operational efficiency and safety with Pro Clean Corp\'s specialized warehouse cleaning services in Sydney NSW. Our industrial cleaning experts handle large-scale facilities, ensuring clean, safe, and compliant warehouse environments.",
    benefits: [
      'Enhanced workplace safety through removal of dust, debris, and hazardous materials',
      'Improved operational efficiency with clean, organized warehouse spaces',
      'Compliance with occupational health and safety regulations and standards',
      'Extended equipment lifespan through professional industrial cleaning protocols',
      'Reduced fire hazards and improved air quality for worker health',
      'Professional cleaning of high-bay areas, mezzanines, and hard-to-reach spaces',
      'Customized cleaning schedules to minimize disruption to warehouse operations',
      'Specialized cleaning for different warehouse types including cold storage and distribution centers'
    ],
    process: [
      'Comprehensive warehouse assessment and safety protocol development',
      'Implementation of industrial cleaning procedures using specialized equipment',
      'High-level cleaning of warehouse structures, racking, and storage areas',
      'Floor deep cleaning, degreasing, and maintenance using industrial-grade solutions'
    ],
    whyChooseUs: [
      'Specialized industrial cleaning equipment for large-scale warehouse facilities',
      'Experienced team trained in warehouse safety protocols and industrial cleaning standards',
      'Flexible scheduling options including overnight and weekend cleaning services',
      'Comprehensive insurance coverage for high-risk industrial cleaning operations',
      'Proven experience with major logistics and distribution companies across Sydney NSW',
      'Advanced cleaning techniques for specialized warehouse environments including cold storage',
      'Compliance with workplace health and safety regulations and industry standards',
      'Cost-effective solutions designed for large-scale industrial and warehouse facilities'
    ],
    serviceAreas: [
      'Alexandria', 'Mascot', 'Botany', 'Banksmeadow', 'Matraville',
      'Homebush', 'Auburn', 'Granville', 'Smithfield', 'Wetherill Park',
      'Blacktown', 'Mount Druitt', 'Eastern Creek', 'Erskine Park', 'St Marys',
      'Penrith', 'Emu Plains', 'Campbelltown', 'Ingleburn', 'Minto'
    ],
    faqs: [
      {
        question: 'What makes warehouse cleaning different from regular commercial cleaning?',
        answer: 'Warehouse cleaning requires specialized industrial equipment for high-bay areas, heavy-duty degreasing, dust control systems, compliance with industrial safety standards, and the ability to work around heavy machinery and inventory.'
      },
      {
        question: 'Can you clean warehouses during operational hours?',
        answer: 'Yes, we specialize in working around warehouse operations. We coordinate with facility managers to clean during optimal times, often overnight or during low-activity periods to minimize disruption to your operations.'
      },
      {
        question: 'Do you handle specialized warehouse environments like cold storage?',
        answer: 'Yes, we have experience cleaning various specialized warehouse environments including cold storage facilities, food distribution centers, pharmaceutical warehouses, and hazardous material storage facilities with appropriate protocols.'
      },
      {
        question: 'What equipment do you use for high-level warehouse cleaning?',
        answer: 'We use specialized industrial equipment including scissor lifts, boom lifts, industrial vacuum systems, pressure washers, and professional degreasing equipment designed specifically for warehouse and industrial facilities.'
      },
      {
        question: 'How do you ensure safety during warehouse cleaning?',
        answer: 'Our team follows strict safety protocols including risk assessments, safety equipment, coordination with warehouse staff, lockout/tagout procedures, and compliance with all workplace health and safety regulations.'
      },
      {
        question: 'Can you clean around inventory and equipment?',
        answer: "Absolutely. We\'re experienced in cleaning around inventory, racking systems, machinery, and equipment. We coordinate with your team to ensure minimal disruption while maintaining thorough cleaning standards."
      }
    ],
    images: [
      {
        src: '/images/services/warehouse.webp',
        alt: 'Professional warehouse cleaning services Sydney NSW - Industrial facility cleaning'
      },
      {
        src: '/images/services/commercial.webp',
        alt: 'Warehouse cleaning team with industrial equipment - Pro Clean Corp Sydney NSW'
      }
    ],
    relatedServices: ['Commercial Cleaning', 'Industrial Cleaning', 'Factory Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Warehouse Cleaning Services Sydney NSW"
        serviceDescription="Specialized warehouse and industrial facility cleaning services with advanced equipment and safety protocols. Serving distribution centers, warehouses, and industrial facilities across Sydney NSW."
        serviceUrl="/services/warehouse-cleaning"
        serviceType="Warehouse Cleaning"
        price="$$$-$$$$"
        additionalServices={[
          'Industrial Warehouse Deep Cleaning',
          'High-Bay Area Cleaning',
          'Cold Storage Facility Cleaning',
          'Distribution Center Cleaning',
          'Warehouse Floor Degreasing',
          'Racking System Cleaning',
          'Industrial Equipment Cleaning',
          'Emergency Warehouse Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}
