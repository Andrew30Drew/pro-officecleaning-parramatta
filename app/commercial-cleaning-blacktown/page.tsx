
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import NearbySuburbs from '@/app/components/NearbySuburbs';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Blacktown NSW | Free Quote | Pro Clean Corp',
  description: 'Professional commercial cleaning in Blacktown, Seven Hills, Rooty Hill & Mount Druitt since 2015. Offices, warehouses & industrial sites. Licensed & insured. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'commercial cleaning blacktown, commercial cleaners blacktown, office cleaning blacktown, commercial cleaning seven hills, commercial cleaning rooty hill, industrial cleaning blacktown, business cleaning blacktown nsw, commercial cleaning mount druitt, warehouse cleaning blacktown, commercial cleaning western sydney',
  openGraph: {
    title: 'Commercial Cleaning Blacktown NSW | Free Quote | Pro Clean Corp',
    description: 'Professional commercial cleaning in Blacktown, Seven Hills, Rooty Hill & Mount Druitt. Offices, warehouses & industrial sites. Call 1300 494 983.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-blacktown',
    type: 'website',
    images: [
      {
        url: '/images/services/commercial.webp',
        alt: 'Commercial cleaning Blacktown NSW',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning-blacktown',
  },
};

export default function BlacktownCleaningPage() {
  const serviceInfo = {
    title: 'Commercial Cleaning Blacktown NSW',
    description: 'Blacktown is Western Sydney\'s largest commercial hub — and keeping it clean is serious business. Pro Clean Corp delivers professional commercial cleaning services across Blacktown, Seven Hills, Rooty Hill, and Mount Druitt for offices, warehouses, industrial estates, and retail premises. Our Western Sydney team is locally based, fully insured, and experienced in the heavy-duty cleaning demands of the region.',
    benefits: [
      'Office Cleaning Blacktown: Daily and regular office cleaning for corporate suites, business parks, and professional offices across the Blacktown LGA.',
      'Warehouse & Industrial Cleaning: Heavy-duty floor scrubbing, high-level dusting, amenities cleaning, and WHS-compliant industrial cleaning for Arndell Park, Huntingwood, and Eastern Creek estates.',
      'Seven Hills Commercial Cleaning: Offices, showrooms, and light industrial premises throughout Seven Hills and the Norwest corridor.',
      'Rooty Hill & Mount Druitt: Reliable commercial cleaning for businesses, retail centres, and industrial properties in Rooty Hill, Mount Druitt, and Doonside.',
      'Retail & Showroom Cleaning: Floor polishing, window cleaning, and customer-ready presentation for retail businesses across Blacktown CBD and Westpoint precinct.',
      'After-Hours & Weekend Scheduling: We clean around your operations — evenings, weekends, or early mornings to avoid business disruption.'
    ],
    process: [
      'Site Inspection: We visit your Blacktown facility and identify all areas, high-traffic zones, and any industrial or compliance requirements.',
      'Custom Scope of Work: A detailed cleaning plan covering offices, amenities, floors, windows, and any specialist areas.',
      'Local Team Assigned: The same Western Sydney-based cleaners on your site each visit for consistency and security.',
      'Quality Control: Regular supervisor inspections and a direct account manager for fast issue resolution.'
    ],
    whyChooseUs: [
      'Western Sydney Based: Our teams live and work in Blacktown — no long travel times, reliable arrival every time.',
      'Industrial Capability: Auto-scrubbers, ride-on sweepers, and commercial degreasers for Blacktown\'s warehouses and factories.',
      'Fully Licensed & Insured: $20M public liability insurance, police-checked staff, WHS-compliant work practices.',
      'One Provider: Office cleaning, warehouse cleaning, gym cleaning, and strata — all through Pro Clean Corp.',
      'No Lock-In Contracts: Month-to-month arrangements with consistent service quality.'
    ],
    serviceAreas: [
      'Blacktown', 'Seven Hills', 'Rooty Hill', 'Mount Druitt',
      'Arndell Park', 'Huntingwood', 'Eastern Creek', 'Doonside',
      'Kings Park', 'Prospect', 'Marayong', 'Quakers Hill'
    ],
    faqs: [
      {
        question: 'Do you clean commercial properties in Seven Hills?',
        answer: 'Yes. Seven Hills is one of our core service areas. We clean offices, showrooms, warehouses, and light industrial sites throughout Seven Hills and the surrounding Norwest and Baulkham Hills commercial precincts. Same local team, consistent standards.'
      },
      {
        question: 'Can you clean warehouses and industrial sites in Blacktown?',
        answer: 'Absolutely. We are specialists in industrial and warehouse cleaning across Blacktown\'s industrial estates including Arndell Park, Huntingwood, and Eastern Creek. We use auto-scrubbers, ride-on sweepers, and commercial degreasers to handle large concrete floors, loading docks, and high-bay areas.'
      },
      {
        question: 'Do you service Rooty Hill and Mount Druitt?',
        answer: 'Yes. Our Western Sydney team services Rooty Hill, Mount Druitt, Doonside, and surrounding suburbs. Whether you manage a retail shop, a small office, or an industrial unit, we can provide reliable commercial cleaning on your schedule.'
      },
      {
        question: 'Can you provide daily office cleaning in Blacktown?',
        answer: 'Yes. We offer daily, 3x weekly, and weekly office cleaning schedules for Blacktown businesses. Our standard service covers desk wiping, restroom sanitisation, kitchen cleaning, vacuuming, mopping, and bin emptying. We can also include carpet care and window cleaning.'
      },
      {
        question: 'Are your Blacktown cleaners insured and police checked?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold $20M public liability insurance. You will receive the same assigned team on each visit. Certificates of currency available on request.'
      }
    ],
    images: [
      { src: '/images/services/warehouse.webp', alt: 'Warehouse and industrial cleaning Blacktown NSW' },
      { src: '/images/services/office.webp', alt: 'Office cleaning Blacktown Seven Hills NSW' }
    ],
    relatedServices: [
      'Office Cleaning Blacktown',
      'Gym Cleaning Blacktown',
      'Warehouse Cleaning Sydney',
      'Commercial Cleaning Western Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Blacktown"
        serviceDescription="Professional commercial cleaning services for offices, warehouses, and industrial sites in Blacktown, Seven Hills, Rooty Hill, and Mount Druitt NSW."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-blacktown"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Warehouse Cleaning', 'Industrial Cleaning', 'Office Cleaning', 'Gym Cleaning', 'Strata Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <NearbySuburbs
          currentSuburb="Blacktown"
          serviceType="commercial-cleaning"
          suburbs={[
            { name: 'Seven Hills', slug: 'seven-hills' },
            { name: 'Penrith', slug: 'penrith' },
            { name: 'Parramatta', slug: 'parramatta' },
            { name: 'Westmead', slug: 'westmead' },
            { name: 'Norwest', slug: 'norwest' },
          ]}
        />
      </div>
    </>
  );
}
