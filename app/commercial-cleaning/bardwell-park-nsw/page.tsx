import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bardwell Park NSW 2207 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bardwell Park NSW 2207. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bardwell Park',
    'commercial cleaning Bardwell Park NSW',
    'office cleaning Bardwell Park',
    'cleaners Bardwell Park NSW',
    'cleaning services Bardwell Park',
    'commercial cleaners near me Bardwell Park',
    'office cleaners Bardwell Park NSW',
    'strata cleaning Bardwell Park',
    'industrial cleaning Bardwell Park',
    'medical cleaning Bardwell Park',
    'childcare cleaning Bardwell Park',
    'end of lease cleaning Bardwell Park',
    'Bardwell Park NSW 2207 cleaning',
    'Pro Clean Corp Bardwell Park',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bardwell-park-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bardwell-park-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bardwell Park NSW 2207 | Pro Clean Corp',
    description: 'Bardwell Park businesses trust Pro Clean Corp for commercial cleaning NSW 2207. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bardwell-park-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bardwell Park NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bardwell Park',
  },
};

export default function BardwellParkCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bardwell Park"
      postcode="2207"
      region="Sydney Inner West"
      slug="bardwell-park-nsw"
    />
  );
}
