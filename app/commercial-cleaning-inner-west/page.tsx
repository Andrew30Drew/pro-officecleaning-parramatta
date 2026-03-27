import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Inner West Sydney | ProCleanCorp from $35/hr',
  description: 'Professional commercial cleaning across the Inner West from $35/hr. Newtown, Leichhardt, Balmain, Glebe, Marrickville & Annandale. Offices, retail & strata. Free quote in 24hrs.',
  keywords: 'commercial cleaning inner west, inner west commercial cleaning, office cleaning inner west, commercial cleaning leichhardt, commercial cleaning newtown, commercial cleaning balmain, commercial cleaning glebe',
  openGraph: {
    title: 'Commercial Cleaning Inner West Sydney | ProCleanCorp from $35/hr',
    description: 'Professional commercial cleaning across Sydney\'s Inner West from $35/hr. Newtown, Leichhardt, Balmain and Glebe. Free quote in 24hrs.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-inner-west',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Inner West Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-inner-west' }
};

export default function InnerWestCleaningPage() {
  const serviceInfo = {
    title: 'Commercial Cleaning Inner West Sydney NSW',
    description: 'The Inner West is one of Sydney\'s most diverse commercial precincts — from the creative business hubs of Newtown and Marrickville to the heritage offices and boutique retail of Balmain, Leichhardt, and Annandale. Pro Clean Corp delivers professional commercial cleaning services across the entire Inner West, with locally based teams who understand the unique mix of property types and business cultures in the area.',
    benefits: [
      'Leichhardt & Annandale: Office cleaning and retail cleaning for Norton Street businesses, professional suites, and commercial tenancies throughout Leichhardt and Annandale.',
      'Newtown & Glebe: Commercial cleaning for creative offices, cafes, retail stores, and mixed-use commercial buildings along King Street and Glebe Point Road.',
      'Balmain Commercial Cleaning: Premium office and retail cleaning for heritage buildings, boutique businesses, and waterfront commercial properties in Balmain and Rozelle.',
      'Marrickville Industrial & Office: Warehouse and office cleaning for Marrickville\'s growing industrial and creative business precinct — including Sydenham and Tempe.',
      'Strata & Body Corporate: Common area cleaning for Inner West strata complexes, apartment buildings, and mixed-use developments.',
      'After-Hours Scheduling: Evening and early-morning cleaning that works around the Inner West\'s busy business and hospitality rhythms.'
    ],
    process: [
      'Free Site Visit: We come to your Inner West property, understand the layout, access requirements, and your cleaning priorities.',
      'Custom Plan: A tailored checklist covering offices, amenities, floors, windows, strata common areas, or retail specifics.',
      'Consistent Local Team: The same assigned cleaners each visit — familiar with your property and your expectations.',
      'Direct Account Management: One point of contact who knows your site and can respond quickly to any changes.'
    ],
    whyChooseUs: [
      'Inner West Local Coverage: Teams positioned in the Inner West — fast, reliable service without city-wide travel delays.',
      'Heritage Property Experience: We understand the care required for older buildings — timber floors, stone surfaces, period features.',
      'Mixed-Use Expertise: From a single retail tenancy to a multi-building strata complex, we scale to your needs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance. Certificates available on request.',
      'No Lock-In Contracts: Flexible month-to-month arrangements — we earn your business every visit.'
    ],
    serviceAreas: [
      'Leichhardt', 'Newtown', 'Balmain', 'Annandale',
      'Glebe', 'Rozelle', 'Marrickville', 'Sydenham',
      'Tempe', 'Petersham', 'Stanmore', 'Camperdown'
    ],
    faqs: [
      {
        question: 'Do you clean offices and retail shops in Newtown?',
        answer: 'Yes. Newtown is one of our core Inner West service areas. We clean commercial offices, retail stores, cafes, and mixed-use buildings along King Street and surrounding streets. After-hours scheduling is available so your business is never disrupted during trading.'
      },
      {
        question: 'Can you clean heritage buildings in Balmain and Annandale?',
        answer: 'Yes. We have experience cleaning heritage and period commercial buildings throughout Balmain, Annandale, and Leichhardt. We use surface-appropriate cleaning products and methods for timber floors, sandstone, brick, and period features — cleaning thoroughly without causing damage.'
      },
      {
        question: 'Do you clean strata complexes in the Inner West?',
        answer: 'Absolutely. We provide strata and body corporate cleaning for apartment buildings and mixed-use complexes throughout the Inner West, including common area cleaning, lobby maintenance, car park cleaning, and bin bay management. We work with strata managers and owners corporations directly.'
      },
      {
        question: 'Can you service the Marrickville and Sydenham industrial precinct?',
        answer: 'Yes. Marrickville\'s industrial and creative precinct — including Sydenham and Tempe — is a key service area. We provide warehouse, factory, and office cleaning for the growing number of businesses operating in the area, including after-hours and weekend scheduling.'
      },
      {
        question: 'How quickly can you start commercial cleaning in the Inner West?',
        answer: 'In most cases we can have a team at your Inner West property within 3–5 business days of quote acceptance. For urgent requirements, contact us on 1300 494 983 and we will do our best to accommodate a faster start.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Inner West Sydney NSW' },
      { src: '/images/services/office.webp', alt: 'Office cleaning Leichhardt Newtown Balmain NSW' }
    ],
    relatedServices: [
      'Strata Cleaning Sydney',
      'Office Cleaning Sydney',
      'Commercial Cleaning Marrickville',
      'Commercial Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Inner West Sydney"
        serviceDescription="Professional commercial cleaning services across the Inner West Sydney NSW. Serving Leichhardt, Newtown, Balmain, Annandale, Glebe, Rozelle, Marrickville and surrounding suburbs."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-inner-west"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Strata Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Heritage Building Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
