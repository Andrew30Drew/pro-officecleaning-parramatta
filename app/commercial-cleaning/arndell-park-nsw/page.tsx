import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Arndell Park NSW 2148 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Arndell Park NSW 2148. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Arndell Park',
    'commercial cleaning Arndell Park NSW',
    'office cleaning Arndell Park',
    'cleaners Arndell Park NSW',
    'cleaning services Arndell Park',
    'commercial cleaners near me Arndell Park',
    'office cleaners Arndell Park NSW',
    'strata cleaning Arndell Park',
    'industrial cleaning Arndell Park',
    'medical cleaning Arndell Park',
    'childcare cleaning Arndell Park',
    'end of lease cleaning Arndell Park',
    'Arndell Park NSW 2148 cleaning',
    'Pro Clean Corp Arndell Park',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/arndell-park-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/arndell-park-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Arndell Park NSW 2148 | Pro Clean Corp',
    description: 'Arndell Park businesses trust Pro Clean Corp for commercial cleaning NSW 2148. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/arndell-park-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Arndell Park NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Arndell Park',
  },
};

export default function ArndellParkCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Arndell Park"
      postcode="2148"
      region="Sydney Western Suburbs"
      slug="arndell-park-nsw"
    />
  );
}
