import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Berala NSW 2141 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Berala NSW 2141. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Berala',
    'commercial cleaning Berala NSW',
    'office cleaning Berala',
    'cleaners Berala NSW',
    'cleaning services Berala',
    'commercial cleaners near me Berala',
    'office cleaners Berala NSW',
    'strata cleaning Berala',
    'industrial cleaning Berala',
    'medical cleaning Berala',
    'childcare cleaning Berala',
    'end of lease cleaning Berala',
    'Berala NSW 2141 cleaning',
    'Pro Clean Corp Berala',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/berala-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/berala-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Berala NSW 2141 | Pro Clean Corp',
    description: 'Berala businesses trust Pro Clean Corp for commercial cleaning NSW 2141. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/berala-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Berala NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Berala',
  },
};

export default function BeralaCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Berala"
      postcode="2141"
      region="Sydney Western Suburbs"
      slug="berala-nsw"
    />
  );
}
