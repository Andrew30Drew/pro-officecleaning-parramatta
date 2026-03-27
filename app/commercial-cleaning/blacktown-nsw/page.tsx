import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Blacktown NSW 2148 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Blacktown NSW 2148. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Blacktown',
    'commercial cleaning Blacktown NSW',
    'office cleaning Blacktown',
    'cleaners Blacktown NSW',
    'cleaning services Blacktown',
    'commercial cleaners near me Blacktown',
    'office cleaners Blacktown NSW',
    'strata cleaning Blacktown',
    'industrial cleaning Blacktown',
    'medical cleaning Blacktown',
    'childcare cleaning Blacktown',
    'end of lease cleaning Blacktown',
    'Blacktown NSW 2148 cleaning',
    'Pro Clean Corp Blacktown',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/blacktown-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/blacktown-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Blacktown NSW 2148 | Pro Clean Corp',
    description: 'Blacktown businesses trust Pro Clean Corp for commercial cleaning NSW 2148. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/blacktown-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Blacktown NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Blacktown',
  },
};

export default function BlacktownCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Blacktown"
      postcode="2148"
      region="Sydney Western Suburbs"
      slug="blacktown-nsw"
    />
  );
}
