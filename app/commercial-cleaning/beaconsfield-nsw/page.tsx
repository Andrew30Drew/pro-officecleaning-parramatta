import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Beaconsfield NSW 2015 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Beaconsfield NSW 2015. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Beaconsfield',
    'commercial cleaning Beaconsfield NSW',
    'office cleaning Beaconsfield',
    'cleaners Beaconsfield NSW',
    'cleaning services Beaconsfield',
    'commercial cleaners near me Beaconsfield',
    'office cleaners Beaconsfield NSW',
    'strata cleaning Beaconsfield',
    'industrial cleaning Beaconsfield',
    'medical cleaning Beaconsfield',
    'childcare cleaning Beaconsfield',
    'end of lease cleaning Beaconsfield',
    'Beaconsfield NSW 2015 cleaning',
    'Pro Clean Corp Beaconsfield',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/beaconsfield-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/beaconsfield-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Beaconsfield NSW 2015 | Pro Clean Corp',
    description: 'Beaconsfield businesses trust Pro Clean Corp for commercial cleaning NSW 2015. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/beaconsfield-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Beaconsfield NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Beaconsfield',
  },
};

export default function BeaconsfieldCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Beaconsfield"
      postcode="2015"
      region="Sydney Eastern Suburbs"
      slug="beaconsfield-nsw"
    />
  );
}
