import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Botany NSW 2019 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Botany NSW 2019. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Botany',
    'commercial cleaning Botany NSW',
    'office cleaning Botany',
    'cleaners Botany NSW',
    'cleaning services Botany',
    'commercial cleaners near me Botany',
    'office cleaners Botany NSW',
    'strata cleaning Botany',
    'industrial cleaning Botany',
    'medical cleaning Botany',
    'childcare cleaning Botany',
    'end of lease cleaning Botany',
    'Botany NSW 2019 cleaning',
    'Pro Clean Corp Botany',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/botany-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/botany-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Botany NSW 2019 | Pro Clean Corp',
    description: 'Botany businesses trust Pro Clean Corp for commercial cleaning NSW 2019. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/botany-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Botany NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Botany',
  },
};

export default function BotanyCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Botany"
      postcode="2019"
      region="Sydney Eastern Suburbs"
      slug="botany-nsw"
    />
  );
}
