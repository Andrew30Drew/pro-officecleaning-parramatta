import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Chippendale NSW 2008 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Chippendale NSW 2008. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Chippendale',
    'commercial cleaning Chippendale NSW',
    'office cleaning Chippendale',
    'cleaners Chippendale NSW',
    'cleaning services Chippendale',
    'commercial cleaners near me Chippendale',
    'office cleaners Chippendale NSW',
    'strata cleaning Chippendale',
    'industrial cleaning Chippendale',
    'medical cleaning Chippendale',
    'childcare cleaning Chippendale',
    'end of lease cleaning Chippendale',
    'Chippendale NSW 2008 cleaning',
    'Pro Clean Corp Chippendale',
    'Sydney CBD commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/chippendale-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/chippendale-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Chippendale NSW 2008 | Pro Clean Corp',
    description: 'Chippendale businesses trust Pro Clean Corp for commercial cleaning NSW 2008. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/chippendale-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Chippendale NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Chippendale',
  },
};

export default function ChippendaleCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Chippendale"
      postcode="2008"
      region="Sydney CBD"
      slug="chippendale-nsw"
    />
  );
}
