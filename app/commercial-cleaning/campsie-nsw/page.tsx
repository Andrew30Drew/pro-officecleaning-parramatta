import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Campsie NSW 2194 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Campsie NSW 2194. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Campsie',
    'commercial cleaning Campsie NSW',
    'office cleaning Campsie',
    'cleaners Campsie NSW',
    'cleaning services Campsie',
    'commercial cleaners near me Campsie',
    'office cleaners Campsie NSW',
    'strata cleaning Campsie',
    'industrial cleaning Campsie',
    'medical cleaning Campsie',
    'childcare cleaning Campsie',
    'end of lease cleaning Campsie',
    'Campsie NSW 2194 cleaning',
    'Pro Clean Corp Campsie',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/campsie-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/campsie-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Campsie NSW 2194 | Pro Clean Corp',
    description: 'Campsie businesses trust Pro Clean Corp for commercial cleaning NSW 2194. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/campsie-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Campsie NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Campsie',
  },
};

export default function CampsieCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Campsie"
      postcode="2194"
      region="Sydney Inner West"
      slug="campsie-nsw"
    />
  );
}
