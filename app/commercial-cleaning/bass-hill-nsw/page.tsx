import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bass Hill NSW 2197 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bass Hill NSW 2197. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bass Hill',
    'commercial cleaning Bass Hill NSW',
    'office cleaning Bass Hill',
    'cleaners Bass Hill NSW',
    'cleaning services Bass Hill',
    'commercial cleaners near me Bass Hill',
    'office cleaners Bass Hill NSW',
    'strata cleaning Bass Hill',
    'industrial cleaning Bass Hill',
    'medical cleaning Bass Hill',
    'childcare cleaning Bass Hill',
    'end of lease cleaning Bass Hill',
    'Bass Hill NSW 2197 cleaning',
    'Pro Clean Corp Bass Hill',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bass-hill-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bass-hill-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bass Hill NSW 2197 | Pro Clean Corp',
    description: 'Bass Hill businesses trust Pro Clean Corp for commercial cleaning NSW 2197. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bass-hill-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bass Hill NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bass Hill',
  },
};

export default function BassHillCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bass Hill"
      postcode="2197"
      region="Sydney Western Suburbs"
      slug="bass-hill-nsw"
    />
  );
}
