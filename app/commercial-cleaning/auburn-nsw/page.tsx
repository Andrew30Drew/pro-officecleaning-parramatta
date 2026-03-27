import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Auburn NSW 2144 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Auburn NSW 2144. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Auburn',
    'commercial cleaning Auburn NSW',
    'office cleaning Auburn',
    'cleaners Auburn NSW',
    'cleaning services Auburn',
    'commercial cleaners near me Auburn',
    'office cleaners Auburn NSW',
    'strata cleaning Auburn',
    'industrial cleaning Auburn',
    'medical cleaning Auburn',
    'childcare cleaning Auburn',
    'end of lease cleaning Auburn',
    'Auburn NSW 2144 cleaning',
    'Pro Clean Corp Auburn',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/auburn-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/auburn-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Auburn NSW 2144 | Pro Clean Corp',
    description: 'Auburn businesses trust Pro Clean Corp for commercial cleaning NSW 2144. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/auburn-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Auburn NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Auburn',
  },
};

export default function AuburnCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Auburn"
      postcode="2144"
      region="Sydney Western Suburbs"
      slug="auburn-nsw"
    />
  );
}
