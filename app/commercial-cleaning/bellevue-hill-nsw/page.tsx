import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bellevue Hill NSW 2023 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bellevue Hill NSW 2023. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bellevue Hill',
    'commercial cleaning Bellevue Hill NSW',
    'office cleaning Bellevue Hill',
    'cleaners Bellevue Hill NSW',
    'cleaning services Bellevue Hill',
    'commercial cleaners near me Bellevue Hill',
    'office cleaners Bellevue Hill NSW',
    'strata cleaning Bellevue Hill',
    'industrial cleaning Bellevue Hill',
    'medical cleaning Bellevue Hill',
    'childcare cleaning Bellevue Hill',
    'end of lease cleaning Bellevue Hill',
    'Bellevue Hill NSW 2023 cleaning',
    'Pro Clean Corp Bellevue Hill',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bellevue-hill-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bellevue-hill-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bellevue Hill NSW 2023 | Pro Clean Corp',
    description: 'Bellevue Hill businesses trust Pro Clean Corp for commercial cleaning NSW 2023. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bellevue-hill-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bellevue Hill NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bellevue Hill',
  },
};

export default function BellevueHillCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bellevue Hill"
      postcode="2023"
      region="Sydney Eastern Suburbs"
      slug="bellevue-hill-nsw"
    />
  );
}
