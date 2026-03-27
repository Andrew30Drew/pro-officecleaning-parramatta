import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Canterbury NSW 2193 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Canterbury NSW 2193. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Canterbury',
    'commercial cleaning Canterbury NSW',
    'office cleaning Canterbury',
    'cleaners Canterbury NSW',
    'cleaning services Canterbury',
    'commercial cleaners near me Canterbury',
    'office cleaners Canterbury NSW',
    'strata cleaning Canterbury',
    'industrial cleaning Canterbury',
    'medical cleaning Canterbury',
    'childcare cleaning Canterbury',
    'end of lease cleaning Canterbury',
    'Canterbury NSW 2193 cleaning',
    'Pro Clean Corp Canterbury',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/canterbury-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/canterbury-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Canterbury NSW 2193 | Pro Clean Corp',
    description: 'Canterbury businesses trust Pro Clean Corp for commercial cleaning NSW 2193. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/canterbury-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Canterbury NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Canterbury',
  },
};

export default function CanterburyCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Canterbury"
      postcode="2193"
      region="Sydney Inner West"
      slug="canterbury-nsw"
    />
  );
}
