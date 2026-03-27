import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Clyde NSW 2142 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Clyde NSW 2142. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Clyde',
    'commercial cleaning Clyde NSW',
    'office cleaning Clyde',
    'cleaners Clyde NSW',
    'cleaning services Clyde',
    'commercial cleaners near me Clyde',
    'office cleaners Clyde NSW',
    'strata cleaning Clyde',
    'industrial cleaning Clyde',
    'medical cleaning Clyde',
    'childcare cleaning Clyde',
    'end of lease cleaning Clyde',
    'Clyde NSW 2142 cleaning',
    'Pro Clean Corp Clyde',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/clyde-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/clyde-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Clyde NSW 2142 | Pro Clean Corp',
    description: 'Clyde businesses trust Pro Clean Corp for commercial cleaning NSW 2142. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/clyde-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Clyde NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Clyde',
  },
};

export default function ClydeCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Clyde"
      postcode="2142"
      region="Sydney Western Suburbs"
      slug="clyde-nsw"
    />
  );
}
