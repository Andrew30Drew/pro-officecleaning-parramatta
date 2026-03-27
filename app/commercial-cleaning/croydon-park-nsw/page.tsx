import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Croydon Park NSW 2133 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Croydon Park NSW 2133. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Croydon Park',
    'commercial cleaning Croydon Park NSW',
    'office cleaning Croydon Park',
    'cleaners Croydon Park NSW',
    'cleaning services Croydon Park',
    'commercial cleaners near me Croydon Park',
    'office cleaners Croydon Park NSW',
    'strata cleaning Croydon Park',
    'industrial cleaning Croydon Park',
    'medical cleaning Croydon Park',
    'childcare cleaning Croydon Park',
    'end of lease cleaning Croydon Park',
    'Croydon Park NSW 2133 cleaning',
    'Pro Clean Corp Croydon Park',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/croydon-park-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/croydon-park-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Croydon Park NSW 2133 | Pro Clean Corp',
    description: 'Croydon Park businesses trust Pro Clean Corp for commercial cleaning NSW 2133. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/croydon-park-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Croydon Park NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Croydon Park',
  },
};

export default function CroydonParkCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Croydon Park"
      postcode="2133"
      region="Sydney Inner West"
      slug="croydon-park-nsw"
    />
  );
}
