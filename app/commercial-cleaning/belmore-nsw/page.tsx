import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Belmore NSW 2192 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Belmore NSW 2192. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Belmore',
    'commercial cleaning Belmore NSW',
    'office cleaning Belmore',
    'cleaners Belmore NSW',
    'cleaning services Belmore',
    'commercial cleaners near me Belmore',
    'office cleaners Belmore NSW',
    'strata cleaning Belmore',
    'industrial cleaning Belmore',
    'medical cleaning Belmore',
    'childcare cleaning Belmore',
    'end of lease cleaning Belmore',
    'Belmore NSW 2192 cleaning',
    'Pro Clean Corp Belmore',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/belmore-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/belmore-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Belmore NSW 2192 | Pro Clean Corp',
    description: 'Belmore businesses trust Pro Clean Corp for commercial cleaning NSW 2192. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/belmore-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Belmore NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Belmore',
  },
};

export default function BelmoreCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Belmore"
      postcode="2192"
      region="Sydney Inner West"
      slug="belmore-nsw"
    />
  );
}
