import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Annandale NSW 2038 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Annandale NSW 2038. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Annandale',
    'commercial cleaning Annandale NSW',
    'office cleaning Annandale',
    'cleaners Annandale NSW',
    'cleaning services Annandale',
    'commercial cleaners near me Annandale',
    'office cleaners Annandale NSW',
    'strata cleaning Annandale',
    'industrial cleaning Annandale',
    'medical cleaning Annandale',
    'childcare cleaning Annandale',
    'end of lease cleaning Annandale',
    'Annandale NSW 2038 cleaning',
    'Pro Clean Corp Annandale',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/annandale-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/annandale-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Annandale NSW 2038 | Pro Clean Corp',
    description: 'Annandale businesses trust Pro Clean Corp for commercial cleaning NSW 2038. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/annandale-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Annandale NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Annandale',
  },
};

export default function AnnandaleCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Annandale"
      postcode="2038"
      region="Sydney Inner West"
      slug="annandale-nsw"
    />
  );
}
