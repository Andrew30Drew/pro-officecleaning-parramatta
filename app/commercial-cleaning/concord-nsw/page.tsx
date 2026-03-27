import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Concord NSW 2137 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Concord NSW 2137. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Concord',
    'commercial cleaning Concord NSW',
    'office cleaning Concord',
    'cleaners Concord NSW',
    'cleaning services Concord',
    'commercial cleaners near me Concord',
    'office cleaners Concord NSW',
    'strata cleaning Concord',
    'industrial cleaning Concord',
    'medical cleaning Concord',
    'childcare cleaning Concord',
    'end of lease cleaning Concord',
    'Concord NSW 2137 cleaning',
    'Pro Clean Corp Concord',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/concord-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/concord-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Concord NSW 2137 | Pro Clean Corp',
    description: 'Concord businesses trust Pro Clean Corp for commercial cleaning NSW 2137. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/concord-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Concord NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Concord',
  },
};

export default function ConcordCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Concord"
      postcode="2137"
      region="Sydney Inner West"
      slug="concord-nsw"
    />
  );
}
