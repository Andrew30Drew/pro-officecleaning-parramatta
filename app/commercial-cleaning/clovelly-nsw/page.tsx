import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Clovelly NSW 2031 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Clovelly NSW 2031. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Clovelly',
    'commercial cleaning Clovelly NSW',
    'office cleaning Clovelly',
    'cleaners Clovelly NSW',
    'cleaning services Clovelly',
    'commercial cleaners near me Clovelly',
    'office cleaners Clovelly NSW',
    'strata cleaning Clovelly',
    'industrial cleaning Clovelly',
    'medical cleaning Clovelly',
    'childcare cleaning Clovelly',
    'end of lease cleaning Clovelly',
    'Clovelly NSW 2031 cleaning',
    'Pro Clean Corp Clovelly',
    'Sydney Eastern Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/clovelly-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/clovelly-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Clovelly NSW 2031 | Pro Clean Corp',
    description: 'Clovelly businesses trust Pro Clean Corp for commercial cleaning NSW 2031. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/clovelly-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Clovelly NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Clovelly',
  },
};

export default function ClovellyCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Clovelly"
      postcode="2031"
      region="Sydney Eastern Suburbs"
      slug="clovelly-nsw"
    />
  );
}
