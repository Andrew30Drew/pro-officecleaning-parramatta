import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bonnyrigg NSW 2177 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bonnyrigg NSW 2177. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bonnyrigg',
    'commercial cleaning Bonnyrigg NSW',
    'office cleaning Bonnyrigg',
    'cleaners Bonnyrigg NSW',
    'cleaning services Bonnyrigg',
    'commercial cleaners near me Bonnyrigg',
    'office cleaners Bonnyrigg NSW',
    'strata cleaning Bonnyrigg',
    'industrial cleaning Bonnyrigg',
    'medical cleaning Bonnyrigg',
    'childcare cleaning Bonnyrigg',
    'end of lease cleaning Bonnyrigg',
    'Bonnyrigg NSW 2177 cleaning',
    'Pro Clean Corp Bonnyrigg',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bonnyrigg-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bonnyrigg-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bonnyrigg NSW 2177 | Pro Clean Corp',
    description: 'Bonnyrigg businesses trust Pro Clean Corp for commercial cleaning NSW 2177. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bonnyrigg-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bonnyrigg NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bonnyrigg',
  },
};

export default function BonnyriggCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bonnyrigg"
      postcode="2177"
      region="Sydney Western Suburbs"
      slug="bonnyrigg-nsw"
    />
  );
}
