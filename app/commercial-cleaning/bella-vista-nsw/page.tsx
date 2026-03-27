import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bella Vista NSW 2153 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bella Vista NSW 2153. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bella Vista',
    'commercial cleaning Bella Vista NSW',
    'office cleaning Bella Vista',
    'cleaners Bella Vista NSW',
    'cleaning services Bella Vista',
    'commercial cleaners near me Bella Vista',
    'office cleaners Bella Vista NSW',
    'strata cleaning Bella Vista',
    'industrial cleaning Bella Vista',
    'medical cleaning Bella Vista',
    'childcare cleaning Bella Vista',
    'end of lease cleaning Bella Vista',
    'Bella Vista NSW 2153 cleaning',
    'Pro Clean Corp Bella Vista',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bella-vista-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bella-vista-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bella Vista NSW 2153 | Pro Clean Corp',
    description: 'Bella Vista businesses trust Pro Clean Corp for commercial cleaning NSW 2153. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bella-vista-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bella Vista NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bella Vista',
  },
};

export default function BellaVistaCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bella Vista"
      postcode="2153"
      region="Northwest Sydney"
      slug="bella-vista-nsw"
    />
  );
}
