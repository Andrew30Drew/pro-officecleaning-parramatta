import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Chipping Norton NSW 2170 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Chipping Norton NSW 2170. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Chipping Norton',
    'commercial cleaning Chipping Norton NSW',
    'office cleaning Chipping Norton',
    'cleaners Chipping Norton NSW',
    'cleaning services Chipping Norton',
    'commercial cleaners near me Chipping Norton',
    'office cleaners Chipping Norton NSW',
    'strata cleaning Chipping Norton',
    'industrial cleaning Chipping Norton',
    'medical cleaning Chipping Norton',
    'childcare cleaning Chipping Norton',
    'end of lease cleaning Chipping Norton',
    'Chipping Norton NSW 2170 cleaning',
    'Pro Clean Corp Chipping Norton',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/chipping-norton-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/chipping-norton-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Chipping Norton NSW 2170 | Pro Clean Corp',
    description: 'Chipping Norton businesses trust Pro Clean Corp for commercial cleaning NSW 2170. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/chipping-norton-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Chipping Norton NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Chipping Norton',
  },
};

export default function ChippingNortonCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Chipping Norton"
      postcode="2170"
      region="Sydney Western Suburbs"
      slug="chipping-norton-nsw"
    />
  );
}
