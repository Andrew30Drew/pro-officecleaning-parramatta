import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Cammeray NSW 2062 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Cammeray NSW 2062. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Cammeray',
    'commercial cleaning Cammeray NSW',
    'office cleaning Cammeray',
    'cleaners Cammeray NSW',
    'cleaning services Cammeray',
    'commercial cleaners near me Cammeray',
    'office cleaners Cammeray NSW',
    'strata cleaning Cammeray',
    'industrial cleaning Cammeray',
    'medical cleaning Cammeray',
    'childcare cleaning Cammeray',
    'end of lease cleaning Cammeray',
    'Cammeray NSW 2062 cleaning',
    'Pro Clean Corp Cammeray',
    'Sydney North Shore commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/cammeray-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/cammeray-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Cammeray NSW 2062 | Pro Clean Corp',
    description: 'Cammeray businesses trust Pro Clean Corp for commercial cleaning NSW 2062. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/cammeray-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Cammeray NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Cammeray',
  },
};

export default function CammerayCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Cammeray"
      postcode="2062"
      region="Sydney North Shore"
      slug="cammeray-nsw"
    />
  );
}
