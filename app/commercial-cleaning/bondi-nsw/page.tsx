import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bondi NSW 2026 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bondi NSW 2026. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bondi',
    'commercial cleaning Bondi NSW',
    'office cleaning Bondi',
    'cleaners Bondi NSW',
    'cleaning services Bondi',
    'commercial cleaners near me Bondi',
    'office cleaners Bondi NSW',
    'strata cleaning Bondi',
    'industrial cleaning Bondi',
    'medical cleaning Bondi',
    'childcare cleaning Bondi',
    'end of lease cleaning Bondi',
    'Bondi NSW 2026 cleaning',
    'Pro Clean Corp Bondi',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bondi-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bondi-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bondi NSW 2026 | Pro Clean Corp',
    description: 'Bondi businesses trust Pro Clean Corp for commercial cleaning NSW 2026. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bondi-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bondi NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bondi',
  },
};

export default function BondiCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bondi"
      postcode="2026"
      region="Sydney Eastern Suburbs"
      slug="bondi-nsw"
    />
  );
}
