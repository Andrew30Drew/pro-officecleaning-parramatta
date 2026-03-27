import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Badgerys Creek NSW 2555 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Badgerys Creek NSW 2555. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Badgerys Creek',
    'commercial cleaning Badgerys Creek NSW',
    'office cleaning Badgerys Creek',
    'cleaners Badgerys Creek NSW',
    'cleaning services Badgerys Creek',
    'commercial cleaners near me Badgerys Creek',
    'office cleaners Badgerys Creek NSW',
    'strata cleaning Badgerys Creek',
    'industrial cleaning Badgerys Creek',
    'medical cleaning Badgerys Creek',
    'childcare cleaning Badgerys Creek',
    'end of lease cleaning Badgerys Creek',
    'Badgerys Creek NSW 2555 cleaning',
    'Pro Clean Corp Badgerys Creek',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/badgerys-creek-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/badgerys-creek-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Badgerys Creek NSW 2555 | Pro Clean Corp',
    description: 'Badgerys Creek businesses trust Pro Clean Corp for commercial cleaning NSW 2555. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/badgerys-creek-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Badgerys Creek NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Badgerys Creek',
  },
};

export default function BadgerysCreekCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Badgerys Creek"
      postcode="2555"
      region="Sydney Western Suburbs"
      slug="badgerys-creek-nsw"
    />
  );
}
