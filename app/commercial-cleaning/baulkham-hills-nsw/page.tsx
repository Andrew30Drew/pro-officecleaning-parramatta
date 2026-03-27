import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Baulkham Hills NSW 2153 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Baulkham Hills NSW 2153. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Baulkham Hills',
    'commercial cleaning Baulkham Hills NSW',
    'office cleaning Baulkham Hills',
    'cleaners Baulkham Hills NSW',
    'cleaning services Baulkham Hills',
    'commercial cleaners near me Baulkham Hills',
    'office cleaners Baulkham Hills NSW',
    'strata cleaning Baulkham Hills',
    'industrial cleaning Baulkham Hills',
    'medical cleaning Baulkham Hills',
    'childcare cleaning Baulkham Hills',
    'end of lease cleaning Baulkham Hills',
    'Baulkham Hills NSW 2153 cleaning',
    'Pro Clean Corp Baulkham Hills',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/baulkham-hills-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/baulkham-hills-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Baulkham Hills NSW 2153 | Pro Clean Corp',
    description: 'Baulkham Hills businesses trust Pro Clean Corp for commercial cleaning NSW 2153. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/baulkham-hills-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Baulkham Hills NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Baulkham Hills',
  },
};

export default function BaulkhamHillsCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Baulkham Hills"
      postcode="2153"
      region="Northwest Sydney"
      slug="baulkham-hills-nsw"
    />
  );
}
