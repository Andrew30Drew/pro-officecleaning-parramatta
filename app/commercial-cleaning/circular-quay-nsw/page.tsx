import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Circular Quay NSW 2000 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Circular Quay NSW 2000. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Circular Quay',
    'commercial cleaning Circular Quay NSW',
    'office cleaning Circular Quay',
    'cleaners Circular Quay NSW',
    'cleaning services Circular Quay',
    'commercial cleaners near me Circular Quay',
    'office cleaners Circular Quay NSW',
    'strata cleaning Circular Quay',
    'industrial cleaning Circular Quay',
    'medical cleaning Circular Quay',
    'childcare cleaning Circular Quay',
    'end of lease cleaning Circular Quay',
    'Circular Quay NSW 2000 cleaning',
    'Pro Clean Corp Circular Quay',
    'Sydney CBD commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/circular-quay-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/circular-quay-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Circular Quay NSW 2000 | Pro Clean Corp',
    description: 'Circular Quay businesses trust Pro Clean Corp for commercial cleaning NSW 2000. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/circular-quay-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Circular Quay NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Circular Quay',
  },
};

export default function CircularQuayCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Circular Quay"
      postcode="2000"
      region="Sydney CBD"
      slug="circular-quay-nsw"
    />
  );
}
