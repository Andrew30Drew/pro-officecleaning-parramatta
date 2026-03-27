import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bronte NSW 2024 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bronte NSW 2024. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bronte',
    'commercial cleaning Bronte NSW',
    'office cleaning Bronte',
    'cleaners Bronte NSW',
    'cleaning services Bronte',
    'commercial cleaners near me Bronte',
    'office cleaners Bronte NSW',
    'strata cleaning Bronte',
    'industrial cleaning Bronte',
    'medical cleaning Bronte',
    'childcare cleaning Bronte',
    'end of lease cleaning Bronte',
    'Bronte NSW 2024 cleaning',
    'Pro Clean Corp Bronte',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bronte-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bronte-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bronte NSW 2024 | Pro Clean Corp',
    description: 'Bronte businesses trust Pro Clean Corp for commercial cleaning NSW 2024. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bronte-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bronte NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bronte',
  },
};

export default function BronteCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bronte"
      postcode="2024"
      region="Sydney Eastern Suburbs"
      slug="bronte-nsw"
    />
  );
}
