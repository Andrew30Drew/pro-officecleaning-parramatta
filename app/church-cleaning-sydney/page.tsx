
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Church Cleaning Services Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional church & religious facility cleaning in Sydney since 2015. Regular services, Easter & Christmas events, RSL halls & heritage buildings. Licensed & insured. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'church cleaning sydney, church cleaning services sydney, religious building cleaning, chapel cleaning sydney, church janitorial services, place of worship cleaning, weekly church cleaning, church hall cleaning sydney, RSL hall cleaning sydney, heritage building cleaning sydney, event cleaning church sydney',
  openGraph: {
    title: 'Church Cleaning Services Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional church and religious facility cleaning in Sydney. Regular services, Easter & Christmas events, RSL halls & heritage buildings. Call 1300 494 983.',
    url: 'https://www.procleancorp.com.au/church-cleaning-sydney',
    type: 'website',
    images: [
      {
        url: '/images/services/commercial.webp',
        alt: 'Church cleaning services Sydney NSW',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.procleancorp.com.au/church-cleaning-sydney',
  },
};

export default function ChurchCleaningPage() {
  const serviceInfo = {
    title: 'Church Cleaning Services Sydney NSW',
    description: 'Your place of worship deserves a cleaning partner who understands its significance. Pro Clean Corp provides specialist church and religious facility cleaning across Sydney — from weekly sanctuary maintenance to post-event deep cleans after Easter and Christmas services, RSL and community hall cleaning, and careful heritage building care. We work around your calendar, your congregation, and your traditions.',
    benefits: [
      'Weekly & Regular Sanctuary Cleaning: Routine cleaning of pews, flooring, windows, and high-touch surfaces between services — keeping the space welcoming every week.',
      'Easter & Christmas Event Cleaning: Pre-event and post-event cleaning for Sydney\'s highest-attendance church services. We prepare the space before and restore it after large congregations.',
      'RSL Hall & Community Hall Cleaning: Thorough post-function cleaning for church halls, RSL buildings, and community centres used for dinners, fundraisers, and meetings.',
      'Heritage Building Cleaning: Specialist care for sandstone churches, timber floors, stained glass, ornate timber joinery, and period features — using appropriate, non-damaging methods.',
      'Childcare & School Area Cleaning: Hygienic cleaning for Sunday school rooms, creche spaces, and church-run childcare areas with WWCC-checked staff.',
      'Carpet Steam Cleaning: Professional steam cleaning for carpeted aisles, pew areas, and hall floors — including stain removal and odour treatment.'
    ],
    process: [
      'Respectful Site Visit: We visit your church or facility at a time that suits your schedule and discuss your specific needs, access requirements, and any special areas of concern.',
      'Calendar-Based Plan: We build your cleaning schedule around your weekly service times, special events like Easter and Christmas, and any regular hall bookings.',
      'Trained, Background-Checked Staff: All cleaners assigned to religious facilities hold current police checks and Working With Children Checks where required.',
      'Ongoing Communication: Your account manager is available directly — fast response to any last-minute event cleaning needs or schedule changes.'
    ],
    whyChooseUs: [
      'Religious Facility Experience: We currently serve churches, mosques, temples, and community chapels across Sydney — we understand the respect and care required.',
      'Event Cleaning Specialists: Experienced in the scale of Easter and Christmas cleaning — large congregations, extra chairs, catering cleanup, and rapid turnaround.',
      'Heritage Property Care: We use pH-neutral, surface-safe products for sandstone, timber, and historic finishes — no shortcuts that damage irreplaceable features.',
      'WWCC Compliant: Staff with Working With Children Checks available for facilities with active childcare, Sunday school, or youth programs.',
      'Community Pricing: We offer non-profit and community organisation pricing for registered churches and religious organisations.'
    ],
    serviceAreas: [
      'Sydney Metropolitan', 'Western Sydney', 'North Shore', 'Eastern Suburbs',
      'Inner West', 'Hills District', 'Sutherland Shire', 'Parramatta',
      'Blacktown', 'Liverpool', 'Campbelltown', 'Macarthur Region'
    ],
    faqs: [
      {
        question: 'Do you provide cleaning for Easter and Christmas church services?',
        answer: 'Yes — and it is one of our most requested services. We provide pre-event cleaning to prepare the church before major services, and post-event cleaning to restore the space after large congregations. This includes extra seating cleanup, restroom maintenance, kitchen cleanup after refreshments, and carpet care. We recommend booking at least 2 weeks in advance for Easter and Christmas.'
      },
      {
        question: 'Can you clean RSL halls and community halls attached to churches?',
        answer: 'Absolutely. We clean church halls, RSL buildings, and community halls used for functions, dinners, and meetings. Our post-function service covers floor cleaning, kitchen cleanup, restroom sanitisation, table and chair wipe-downs, and rubbish removal — restoring the hall to a clean, ready state for the next booking.'
      },
      {
        question: 'Do you clean heritage sandstone and timber churches?',
        answer: 'Yes. We have experience cleaning heritage-listed and period church buildings across Sydney. We use pH-neutral, surface-appropriate products for sandstone walls, timber pews, timber floors, and ornate joinery. Our team is briefed on the specific care requirements of heritage materials before working on any historic building.'
      },
      {
        question: 'Are your staff police checked and do they hold Working With Children Checks?',
        answer: 'All Pro Clean Corp staff are police-checked. For facilities with active childcare, Sunday school, or youth programs, we can provide staff who also hold current Working With Children Checks (WWCC). Please advise us when booking and we will ensure the right team is assigned.'
      },
      {
        question: 'Can you clean around weekly service times and special events?',
        answer: 'Yes — flexibility is a core part of our church cleaning service. We build your cleaning schedule around your weekly service times, special events, and community bookings. Whether you need cleaning every Wednesday morning or a one-off deep clean after a fundraiser dinner, we will fit around your calendar.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Church hall cleaning Sydney NSW' },
      { src: '/images/services/office.webp', alt: 'Religious facility cleaning Sydney heritage building' }
    ],
    relatedServices: [
      'Commercial Cleaning Sydney',
      'School Cleaning Sydney',
      'Childcare Cleaning Sydney',
      'Strata Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Church Cleaning Sydney"
        serviceDescription="Professional church and religious facility cleaning across Sydney NSW. Weekly services, Easter & Christmas event cleaning, RSL halls, heritage buildings, and childcare areas. Licensed, insured, WWCC-compliant staff."
        serviceUrl="https://www.procleancorp.com.au/church-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Event Cleaning', 'Heritage Building Cleaning', 'Hall Cleaning', 'Carpet Steam Cleaning', 'Childcare Area Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
