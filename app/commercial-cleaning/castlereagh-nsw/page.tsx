import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Castlereagh NSW 2749 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Castlereagh NSW 2749. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Castlereagh',
    'commercial cleaning Castlereagh NSW',
    'office cleaning Castlereagh',
    'cleaners Castlereagh NSW',
    'cleaning services Castlereagh',
    'commercial cleaners near me Castlereagh',
    'office cleaners Castlereagh NSW',
    'strata cleaning Castlereagh',
    'industrial cleaning Castlereagh',
    'medical cleaning Castlereagh',
    'childcare cleaning Castlereagh',
    'end of lease cleaning Castlereagh',
    'Castlereagh NSW 2749 cleaning',
    'Pro Clean Corp Castlereagh',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/castlereagh-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/castlereagh-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Castlereagh NSW 2749 | Pro Clean Corp',
    description: 'Castlereagh businesses trust Pro Clean Corp for commercial cleaning NSW 2749. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/castlereagh-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Castlereagh NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Castlereagh',
  },
};

export default function CastlereaghCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Castlereagh"
      postcode="2749"
      region="Sydney Western Suburbs"
      slug="castlereagh-nsw"
    />
  );
}
