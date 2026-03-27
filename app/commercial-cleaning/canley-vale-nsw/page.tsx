import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Canley Vale NSW 2166 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Canley Vale NSW 2166. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Canley Vale',
    'commercial cleaning Canley Vale NSW',
    'office cleaning Canley Vale',
    'cleaners Canley Vale NSW',
    'cleaning services Canley Vale',
    'commercial cleaners near me Canley Vale',
    'office cleaners Canley Vale NSW',
    'strata cleaning Canley Vale',
    'industrial cleaning Canley Vale',
    'medical cleaning Canley Vale',
    'childcare cleaning Canley Vale',
    'end of lease cleaning Canley Vale',
    'Canley Vale NSW 2166 cleaning',
    'Pro Clean Corp Canley Vale',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/canley-vale-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/canley-vale-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Canley Vale NSW 2166 | Pro Clean Corp',
    description: 'Canley Vale businesses trust Pro Clean Corp for commercial cleaning NSW 2166. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/canley-vale-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Canley Vale NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Canley Vale',
  },
};

export default function CanleyValeCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Canley Vale"
      postcode="2166"
      region="Sydney Western Suburbs"
      slug="canley-vale-nsw"
    />
  );
}
