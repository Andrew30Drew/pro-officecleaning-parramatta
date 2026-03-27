import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Campbelltown NSW 2560 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Campbelltown NSW 2560. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Campbelltown',
    'commercial cleaning Campbelltown NSW',
    'office cleaning Campbelltown',
    'cleaners Campbelltown NSW',
    'cleaning services Campbelltown',
    'commercial cleaners near me Campbelltown',
    'office cleaners Campbelltown NSW',
    'strata cleaning Campbelltown',
    'industrial cleaning Campbelltown',
    'medical cleaning Campbelltown',
    'childcare cleaning Campbelltown',
    'end of lease cleaning Campbelltown',
    'Campbelltown NSW 2560 cleaning',
    'Pro Clean Corp Campbelltown',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/campbelltown-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/campbelltown-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Campbelltown NSW 2560 | Pro Clean Corp',
    description: 'Campbelltown businesses trust Pro Clean Corp for commercial cleaning NSW 2560. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/campbelltown-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Campbelltown NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Campbelltown',
  },
};

export default function CampbelltownCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Campbelltown"
      postcode="2560"
      region="Sydney Western Suburbs"
      slug="campbelltown-nsw"
    />
  );
}
