import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bossley Park NSW 2176 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bossley Park NSW 2176. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bossley Park',
    'commercial cleaning Bossley Park NSW',
    'office cleaning Bossley Park',
    'cleaners Bossley Park NSW',
    'cleaning services Bossley Park',
    'commercial cleaners near me Bossley Park',
    'office cleaners Bossley Park NSW',
    'strata cleaning Bossley Park',
    'industrial cleaning Bossley Park',
    'medical cleaning Bossley Park',
    'childcare cleaning Bossley Park',
    'end of lease cleaning Bossley Park',
    'Bossley Park NSW 2176 cleaning',
    'Pro Clean Corp Bossley Park',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bossley-park-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bossley-park-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bossley Park NSW 2176 | Pro Clean Corp',
    description: 'Bossley Park businesses trust Pro Clean Corp for commercial cleaning NSW 2176. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bossley-park-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bossley Park NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bossley Park',
  },
};

export default function BossleyParkCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bossley Park"
      postcode="2176"
      region="Sydney Western Suburbs"
      slug="bossley-park-nsw"
    />
  );
}
