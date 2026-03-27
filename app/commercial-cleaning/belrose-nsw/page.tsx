import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Belrose NSW 2085 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Belrose NSW 2085. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Belrose',
    'commercial cleaning Belrose NSW',
    'office cleaning Belrose',
    'cleaners Belrose NSW',
    'cleaning services Belrose',
    'commercial cleaners near me Belrose',
    'office cleaners Belrose NSW',
    'strata cleaning Belrose',
    'industrial cleaning Belrose',
    'medical cleaning Belrose',
    'childcare cleaning Belrose',
    'end of lease cleaning Belrose',
    'Belrose NSW 2085 cleaning',
    'Pro Clean Corp Belrose',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/belrose-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/belrose-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Belrose NSW 2085 | Pro Clean Corp',
    description: 'Belrose businesses trust Pro Clean Corp for commercial cleaning NSW 2085. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/belrose-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Belrose NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Belrose',
  },
};

export default function BelroseCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Belrose"
      postcode="2085"
      region="Northwest Sydney"
      slug="belrose-nsw"
    />
  );
}
