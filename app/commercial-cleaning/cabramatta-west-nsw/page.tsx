import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Cabramatta West NSW 2166 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Cabramatta West NSW 2166. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Cabramatta West',
    'commercial cleaning Cabramatta West NSW',
    'office cleaning Cabramatta West',
    'cleaners Cabramatta West NSW',
    'cleaning services Cabramatta West',
    'commercial cleaners near me Cabramatta West',
    'office cleaners Cabramatta West NSW',
    'strata cleaning Cabramatta West',
    'industrial cleaning Cabramatta West',
    'medical cleaning Cabramatta West',
    'childcare cleaning Cabramatta West',
    'end of lease cleaning Cabramatta West',
    'Cabramatta West NSW 2166 cleaning',
    'Pro Clean Corp Cabramatta West',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/cabramatta-west-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/cabramatta-west-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Cabramatta West NSW 2166 | Pro Clean Corp',
    description: 'Cabramatta West businesses trust Pro Clean Corp for commercial cleaning NSW 2166. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/cabramatta-west-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Cabramatta West NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Cabramatta West',
  },
};

export default function CabramattaWestCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Cabramatta West"
      postcode="2166"
      region="Sydney Western Suburbs"
      slug="cabramatta-west-nsw"
    />
  );
}
