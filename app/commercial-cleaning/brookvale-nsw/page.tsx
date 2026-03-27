import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Brookvale NSW 2100 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Brookvale NSW 2100. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Brookvale',
    'commercial cleaning Brookvale NSW',
    'office cleaning Brookvale',
    'cleaners Brookvale NSW',
    'cleaning services Brookvale',
    'commercial cleaners near me Brookvale',
    'office cleaners Brookvale NSW',
    'strata cleaning Brookvale',
    'industrial cleaning Brookvale',
    'medical cleaning Brookvale',
    'childcare cleaning Brookvale',
    'end of lease cleaning Brookvale',
    'Brookvale NSW 2100 cleaning',
    'Pro Clean Corp Brookvale',
    'Sydney Northern Beaches commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/brookvale-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/brookvale-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Brookvale NSW 2100 | Pro Clean Corp',
    description: 'Brookvale businesses trust Pro Clean Corp for commercial cleaning NSW 2100. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/brookvale-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Brookvale NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Brookvale',
  },
};

export default function BrookvaleCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Brookvale"
      postcode="2100"
      region="Sydney Northern Beaches"
      slug="brookvale-nsw"
    />
  );
}
