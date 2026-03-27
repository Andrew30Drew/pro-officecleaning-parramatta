import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Alexandria NSW 2015 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Alexandria NSW 2015. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Alexandria',
    'commercial cleaning Alexandria NSW',
    'office cleaning Alexandria',
    'cleaners Alexandria NSW',
    'cleaning services Alexandria',
    'commercial cleaners near me Alexandria',
    'office cleaners Alexandria NSW',
    'strata cleaning Alexandria',
    'industrial cleaning Alexandria',
    'medical cleaning Alexandria',
    'childcare cleaning Alexandria',
    'end of lease cleaning Alexandria',
    'Alexandria NSW 2015 cleaning',
    'Pro Clean Corp Alexandria',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/alexandria-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/alexandria-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Alexandria NSW 2015 | Pro Clean Corp',
    description: 'Alexandria businesses trust Pro Clean Corp for commercial cleaning NSW 2015. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/alexandria-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Alexandria NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Alexandria',
  },
};

export default function AlexandriaCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Alexandria"
      postcode="2015"
      region="Sydney Eastern Suburbs"
      slug="alexandria-nsw"
    />
  );
}
