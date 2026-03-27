import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Collaroy NSW 2097 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Collaroy NSW 2097. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Collaroy',
    'commercial cleaning Collaroy NSW',
    'office cleaning Collaroy',
    'cleaners Collaroy NSW',
    'cleaning services Collaroy',
    'commercial cleaners near me Collaroy',
    'office cleaners Collaroy NSW',
    'strata cleaning Collaroy',
    'industrial cleaning Collaroy',
    'medical cleaning Collaroy',
    'childcare cleaning Collaroy',
    'end of lease cleaning Collaroy',
    'Collaroy NSW 2097 cleaning',
    'Pro Clean Corp Collaroy',
    'Sydney Northern Beaches commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/collaroy-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/collaroy-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Collaroy NSW 2097 | Pro Clean Corp',
    description: 'Collaroy businesses trust Pro Clean Corp for commercial cleaning NSW 2097. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/collaroy-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Collaroy NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Collaroy',
  },
};

export default function CollaroyCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Collaroy"
      postcode="2097"
      region="Sydney Northern Beaches"
      slug="collaroy-nsw"
    />
  );
}
