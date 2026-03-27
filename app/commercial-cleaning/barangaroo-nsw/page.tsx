import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Barangaroo NSW 2000 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Barangaroo NSW 2000. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Barangaroo',
    'commercial cleaning Barangaroo NSW',
    'office cleaning Barangaroo',
    'cleaners Barangaroo NSW',
    'cleaning services Barangaroo',
    'commercial cleaners near me Barangaroo',
    'office cleaners Barangaroo NSW',
    'strata cleaning Barangaroo',
    'industrial cleaning Barangaroo',
    'medical cleaning Barangaroo',
    'childcare cleaning Barangaroo',
    'end of lease cleaning Barangaroo',
    'Barangaroo NSW 2000 cleaning',
    'Pro Clean Corp Barangaroo',
    'Sydney CBD commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/barangaroo-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/barangaroo-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Barangaroo NSW 2000 | Pro Clean Corp',
    description: 'Barangaroo businesses trust Pro Clean Corp for commercial cleaning NSW 2000. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/barangaroo-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Barangaroo NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Barangaroo',
  },
};

export default function BarangarooCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Barangaroo"
      postcode="2000"
      region="Sydney CBD"
      slug="barangaroo-nsw"
    />
  );
}
