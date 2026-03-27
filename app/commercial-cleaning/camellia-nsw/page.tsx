import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Camellia NSW 2142 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Camellia NSW 2142. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Camellia',
    'commercial cleaning Camellia NSW',
    'office cleaning Camellia',
    'cleaners Camellia NSW',
    'cleaning services Camellia',
    'commercial cleaners near me Camellia',
    'office cleaners Camellia NSW',
    'strata cleaning Camellia',
    'industrial cleaning Camellia',
    'medical cleaning Camellia',
    'childcare cleaning Camellia',
    'end of lease cleaning Camellia',
    'Camellia NSW 2142 cleaning',
    'Pro Clean Corp Camellia',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/camellia-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/camellia-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Camellia NSW 2142 | Pro Clean Corp',
    description: 'Camellia businesses trust Pro Clean Corp for commercial cleaning NSW 2142. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/camellia-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Camellia NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Camellia',
  },
};

export default function CamelliaCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Camellia"
      postcode="2142"
      region="Sydney Western Suburbs"
      slug="camellia-nsw"
    />
  );
}
