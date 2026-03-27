import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Condell Park NSW 2200 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Condell Park NSW 2200. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Condell Park',
    'commercial cleaning Condell Park NSW',
    'office cleaning Condell Park',
    'cleaners Condell Park NSW',
    'cleaning services Condell Park',
    'commercial cleaners near me Condell Park',
    'office cleaners Condell Park NSW',
    'strata cleaning Condell Park',
    'industrial cleaning Condell Park',
    'medical cleaning Condell Park',
    'childcare cleaning Condell Park',
    'end of lease cleaning Condell Park',
    'Condell Park NSW 2200 cleaning',
    'Pro Clean Corp Condell Park',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/condell-park-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/condell-park-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Condell Park NSW 2200 | Pro Clean Corp',
    description: 'Condell Park businesses trust Pro Clean Corp for commercial cleaning NSW 2200. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/condell-park-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Condell Park NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Condell Park',
  },
};

export default function CondellParkCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Condell Park"
      postcode="2200"
      region="Sydney Western Suburbs"
      slug="condell-park-nsw"
    />
  );
}
