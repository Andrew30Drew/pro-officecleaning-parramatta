import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Belfield NSW 2191 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Belfield NSW 2191. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Belfield',
    'commercial cleaning Belfield NSW',
    'office cleaning Belfield',
    'cleaners Belfield NSW',
    'cleaning services Belfield',
    'commercial cleaners near me Belfield',
    'office cleaners Belfield NSW',
    'strata cleaning Belfield',
    'industrial cleaning Belfield',
    'medical cleaning Belfield',
    'childcare cleaning Belfield',
    'end of lease cleaning Belfield',
    'Belfield NSW 2191 cleaning',
    'Pro Clean Corp Belfield',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/belfield-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/belfield-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Belfield NSW 2191 | Pro Clean Corp',
    description: 'Belfield businesses trust Pro Clean Corp for commercial cleaning NSW 2191. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/belfield-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Belfield NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Belfield',
  },
};

export default function BelfieldCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Belfield"
      postcode="2191"
      region="Sydney Inner West"
      slug="belfield-nsw"
    />
  );
}
