import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Crows Nest NSW 2065 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Crows Nest NSW 2065. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Crows Nest',
    'commercial cleaning Crows Nest NSW',
    'office cleaning Crows Nest',
    'cleaners Crows Nest NSW',
    'cleaning services Crows Nest',
    'commercial cleaners near me Crows Nest',
    'office cleaners Crows Nest NSW',
    'strata cleaning Crows Nest',
    'industrial cleaning Crows Nest',
    'medical cleaning Crows Nest',
    'childcare cleaning Crows Nest',
    'end of lease cleaning Crows Nest',
    'Crows Nest NSW 2065 cleaning',
    'Pro Clean Corp Crows Nest',
    'Sydney North Shore commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/crows-nest-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/crows-nest-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Crows Nest NSW 2065 | Pro Clean Corp',
    description: 'Crows Nest businesses trust Pro Clean Corp for commercial cleaning NSW 2065. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/crows-nest-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Crows Nest NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Crows Nest',
  },
};

export default function CrowsNestCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Crows Nest"
      postcode="2065"
      region="Sydney North Shore"
      slug="crows-nest-nsw"
    />
  );
}
