import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Banksmeadow NSW 2019 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Banksmeadow NSW 2019. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Banksmeadow',
    'commercial cleaning Banksmeadow NSW',
    'office cleaning Banksmeadow',
    'cleaners Banksmeadow NSW',
    'cleaning services Banksmeadow',
    'commercial cleaners near me Banksmeadow',
    'office cleaners Banksmeadow NSW',
    'strata cleaning Banksmeadow',
    'industrial cleaning Banksmeadow',
    'medical cleaning Banksmeadow',
    'childcare cleaning Banksmeadow',
    'end of lease cleaning Banksmeadow',
    'Banksmeadow NSW 2019 cleaning',
    'Pro Clean Corp Banksmeadow',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/banksmeadow-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/banksmeadow-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Banksmeadow NSW 2019 | Pro Clean Corp',
    description: 'Banksmeadow businesses trust Pro Clean Corp for commercial cleaning NSW 2019. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/banksmeadow-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Banksmeadow NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Banksmeadow',
  },
};

export default function BanksmeadowCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Banksmeadow"
      postcode="2019"
      region="Sydney Eastern Suburbs"
      slug="banksmeadow-nsw"
    />
  );
}
