import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Coogee NSW 2034 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Coogee NSW 2034. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Coogee',
    'commercial cleaning Coogee NSW',
    'office cleaning Coogee',
    'cleaners Coogee NSW',
    'cleaning services Coogee',
    'commercial cleaners near me Coogee',
    'office cleaners Coogee NSW',
    'strata cleaning Coogee',
    'industrial cleaning Coogee',
    'medical cleaning Coogee',
    'childcare cleaning Coogee',
    'end of lease cleaning Coogee',
    'Coogee NSW 2034 cleaning',
    'Pro Clean Corp Coogee',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/coogee-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/coogee-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Coogee NSW 2034 | Pro Clean Corp',
    description: 'Coogee businesses trust Pro Clean Corp for commercial cleaning NSW 2034. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/coogee-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Coogee NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Coogee',
  },
};

export default function CoogeeCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Coogee"
      postcode="2034"
      region="Sydney Eastern Suburbs"
      slug="coogee-nsw"
    />
  );
}
