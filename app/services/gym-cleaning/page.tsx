import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../../components/Ourservices';

export default function GymCleaningPage() {
  const serviceData = {
    title: 'Professional Gym Cleaning Services Sydney NSW',
    description: "Keep your fitness facility spotless with Pro Clean Corp\'s specialized gym cleaning services in Sydney NSW. Our expert team ensures hygienic, safe environments for gym members with comprehensive equipment sanitization and facility maintenance.",
    benefits: [
      'Enhanced member safety through thorough equipment sanitization and disinfection',
      'Improved air quality and reduced odors in workout areas and locker rooms',
      'Professional appearance that attracts and retains gym members',
      'Compliance with health department regulations and fitness industry standards',
      'Reduced risk of infections and cross-contamination between gym users',
      'Specialized cleaning for high-touch surfaces like weights, machines, and mats',
      'Flexible scheduling including after-hours and early morning cleaning',
      'Extended equipment lifespan through proper cleaning and maintenance protocols'
    ],
    process: [
      'Fitness facility assessment and equipment inventory for cleaning protocols',
      'Development of specialized sanitization procedures for gym equipment and areas',
      'Implementation of high-frequency cleaning schedules for high-traffic zones',
      'Regular monitoring and quality checks to maintain hygiene standards'
    ],
    whyChooseUs: [
      'Specialized experience in fitness facility cleaning and sanitization protocols',
      'Hospital-grade disinfectants effective against bacteria, viruses, and fungi',
      'Trained staff understanding of gym equipment and proper cleaning techniques',
      'Flexible scheduling to accommodate peak gym hours and member access',
      'Comprehensive cleaning including locker rooms, showers, and common areas',
      'Eco-friendly cleaning options safe for gym members and staff',
      'Emergency cleaning services for spills, accidents, and urgent situations',
      'Competitive rates with customized packages for fitness facilities'
    ],
    serviceAreas: [
      'Sydney CBD', 'Surry Hills', 'Paddington', 'Bondi', 'Coogee',
      'Maroubra', 'North Sydney', 'Neutral Bay', 'Chatswood', 'St Leonards',
      'Parramatta', 'Westmead', 'Blacktown', 'Mount Druitt', 'Penrith',
      'Liverpool', 'Bankstown', 'Hurstville', 'Kogarah', 'Miranda'
    ],
    faqs: [
      {
        question: 'How often should gym facilities be professionally cleaned?',
        answer: 'Most gyms require daily cleaning for high-touch equipment and surfaces, with deep cleaning weekly. We customize schedules based on gym size, member volume, and specific requirements including peak usage times and equipment types.'
      },
      {
        question: 'Do you clean gym equipment and exercise machines?',
        answer: "Yes, we specialize in cleaning all types of gym equipment including cardio machines, weight equipment, yoga mats, exercise bikes, and strength training apparatus using appropriate disinfectants that won\'t damage equipment."
      },
      {
        question: 'Can you clean during gym operating hours?',
        answer: 'We offer flexible scheduling including early morning (before opening), late evening (after closing), and during off-peak hours to minimize disruption to gym operations and member workouts.'
      },
      {
        question: 'What areas of the gym do you clean?',
        answer: 'We clean all areas including workout floors, equipment, locker rooms, showers, changing areas, reception, offices, mirrors, windows, and HVAC vents. We also handle specialized areas like swimming pools and saunas if applicable.'
      },
      {
        question: 'Do you use gym-safe cleaning products?',
        answer: "Yes, we use specialized cleaning products that are effective against germs while being safe for gym equipment, members, and staff. Our disinfectants won\'t damage rubber, metal, or electronic components of fitness equipment."
      },
      {
        question: 'How do you handle locker room and shower cleaning?',
        answer: 'We provide thorough locker room and shower cleaning including mold prevention, drain maintenance, fixture sanitization, and floor disinfection using products specifically designed for high-moisture environments.'
      }
    ],
    images: [
      {
        src: '/images/services/gym.webp',
        alt: 'Professional gym cleaning services Sydney NSW - Clean fitness facility'
      },
      {
        src: '/images/services/commercial.webp',
        alt: 'Gym cleaning team sanitizing equipment - Pro Clean Corp Sydney NSW'
      }
    ],
    relatedServices: ['Commercial Cleaning', 'Medical Centre Cleaning', 'School Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Gym Cleaning Services Sydney NSW"
        serviceDescription="Specialized gym and fitness facility cleaning services with equipment sanitization and hygiene protocols. Serving fitness centers, health clubs, and sports facilities across Sydney NSW."
        serviceUrl="/services/gym-cleaning"
        serviceType="Gym Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Fitness Equipment Sanitization',
          'Locker Room Deep Cleaning',
          'Shower and Changing Room Cleaning',
          'Exercise Mat and Equipment Cleaning',
          'Pool and Spa Area Cleaning',
          'Reception and Office Cleaning',
          'Emergency Gym Cleaning',
          'Health Department Compliance Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}
