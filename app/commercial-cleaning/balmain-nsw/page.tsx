import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Balmain NSW 2041 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Balmain NSW 2041. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Balmain',
    'commercial cleaning Balmain NSW',
    'office cleaning Balmain',
    'cleaners Balmain NSW',
    'cleaning services Balmain',
    'commercial cleaners near me Balmain',
    'office cleaners Balmain NSW',
    'strata cleaning Balmain',
    'industrial cleaning Balmain',
    'medical cleaning Balmain',
    'childcare cleaning Balmain',
    'end of lease cleaning Balmain',
    'Balmain NSW 2041 cleaning',
    'Pro Clean Corp Balmain',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/balmain-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/balmain-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Balmain NSW 2041 | Pro Clean Corp',
    description: 'Balmain businesses trust Pro Clean Corp for commercial cleaning NSW 2041. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/balmain-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Balmain NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Balmain',
  },
};

export default function BalmainCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Balmain"
      postcode="2041"
      region="Sydney Inner West"
      slug="balmain-nsw"
    />
  );
}
