import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bexley NSW 2207 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bexley NSW 2207. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bexley',
    'commercial cleaning Bexley NSW',
    'office cleaning Bexley',
    'cleaners Bexley NSW',
    'cleaning services Bexley',
    'commercial cleaners near me Bexley',
    'office cleaners Bexley NSW',
    'strata cleaning Bexley',
    'industrial cleaning Bexley',
    'medical cleaning Bexley',
    'childcare cleaning Bexley',
    'end of lease cleaning Bexley',
    'Bexley NSW 2207 cleaning',
    'Pro Clean Corp Bexley',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bexley-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bexley-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bexley NSW 2207 | Pro Clean Corp',
    description: 'Bexley businesses trust Pro Clean Corp for commercial cleaning NSW 2207. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bexley-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bexley NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bexley',
  },
};

export default function BexleyCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bexley"
      postcode="2207"
      region="Sydney Inner West"
      slug="bexley-nsw"
    />
  );
}
