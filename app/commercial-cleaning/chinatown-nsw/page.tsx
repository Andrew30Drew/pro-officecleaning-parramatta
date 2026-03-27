import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Chinatown NSW 2000 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Chinatown NSW 2000. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Chinatown',
    'commercial cleaning Chinatown NSW',
    'office cleaning Chinatown',
    'cleaners Chinatown NSW',
    'cleaning services Chinatown',
    'commercial cleaners near me Chinatown',
    'office cleaners Chinatown NSW',
    'strata cleaning Chinatown',
    'industrial cleaning Chinatown',
    'medical cleaning Chinatown',
    'childcare cleaning Chinatown',
    'end of lease cleaning Chinatown',
    'Chinatown NSW 2000 cleaning',
    'Pro Clean Corp Chinatown',
    'Sydney CBD commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/chinatown-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/chinatown-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Chinatown NSW 2000 | Pro Clean Corp',
    description: 'Chinatown businesses trust Pro Clean Corp for commercial cleaning NSW 2000. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/chinatown-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Chinatown NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Chinatown',
  },
};

export default function ChinatownCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Chinatown"
      postcode="2000"
      region="Sydney CBD"
      slug="chinatown-nsw"
    />
  );
}
