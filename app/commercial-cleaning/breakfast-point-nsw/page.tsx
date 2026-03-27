import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Breakfast Point NSW 2137 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Breakfast Point NSW 2137. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Breakfast Point',
    'commercial cleaning Breakfast Point NSW',
    'office cleaning Breakfast Point',
    'cleaners Breakfast Point NSW',
    'cleaning services Breakfast Point',
    'commercial cleaners near me Breakfast Point',
    'office cleaners Breakfast Point NSW',
    'strata cleaning Breakfast Point',
    'industrial cleaning Breakfast Point',
    'medical cleaning Breakfast Point',
    'childcare cleaning Breakfast Point',
    'end of lease cleaning Breakfast Point',
    'Breakfast Point NSW 2137 cleaning',
    'Pro Clean Corp Breakfast Point',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/breakfast-point-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/breakfast-point-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Breakfast Point NSW 2137 | Pro Clean Corp',
    description: 'Breakfast Point businesses trust Pro Clean Corp for commercial cleaning NSW 2137. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/breakfast-point-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Breakfast Point NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Breakfast Point',
  },
};

export default function BreakfastPointCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Breakfast Point"
      postcode="2137"
      region="Sydney Inner West"
      slug="breakfast-point-nsw"
    />
  );
}
