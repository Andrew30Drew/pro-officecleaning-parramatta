import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bondi Junction NSW 2022 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bondi Junction NSW 2022. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bondi Junction',
    'commercial cleaning Bondi Junction NSW',
    'office cleaning Bondi Junction',
    'cleaners Bondi Junction NSW',
    'cleaning services Bondi Junction',
    'commercial cleaners near me Bondi Junction',
    'office cleaners Bondi Junction NSW',
    'strata cleaning Bondi Junction',
    'industrial cleaning Bondi Junction',
    'medical cleaning Bondi Junction',
    'childcare cleaning Bondi Junction',
    'end of lease cleaning Bondi Junction',
    'Bondi Junction NSW 2022 cleaning',
    'Pro Clean Corp Bondi Junction',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bondi-junction-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bondi-junction-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bondi Junction NSW 2022 | Pro Clean Corp',
    description: 'Bondi Junction businesses trust Pro Clean Corp for commercial cleaning NSW 2022. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bondi-junction-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bondi Junction NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bondi Junction',
  },
};

export default function BondiJunctionCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bondi Junction"
      postcode="2022"
      region="Sydney Eastern Suburbs"
      slug="bondi-junction-nsw"
    />
  );
}
