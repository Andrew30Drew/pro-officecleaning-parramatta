import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Camden NSW 2570 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Camden NSW 2570. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Camden',
    'commercial cleaning Camden NSW',
    'office cleaning Camden',
    'cleaners Camden NSW',
    'cleaning services Camden',
    'commercial cleaners near me Camden',
    'office cleaners Camden NSW',
    'strata cleaning Camden',
    'industrial cleaning Camden',
    'medical cleaning Camden',
    'childcare cleaning Camden',
    'end of lease cleaning Camden',
    'Camden NSW 2570 cleaning',
    'Pro Clean Corp Camden',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/camden-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/camden-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Camden NSW 2570 | Pro Clean Corp',
    description: 'Camden businesses trust Pro Clean Corp for commercial cleaning NSW 2570. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/camden-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Camden NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Camden',
  },
};

export default function CamdenCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Camden"
      postcode="2570"
      region="Sydney Western Suburbs"
      slug="camden-nsw"
    />
  );
}
