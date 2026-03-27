import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Artarmon NSW 2064 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Artarmon NSW 2064. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Artarmon',
    'commercial cleaning Artarmon NSW',
    'office cleaning Artarmon',
    'cleaners Artarmon NSW',
    'cleaning services Artarmon',
    'commercial cleaners near me Artarmon',
    'office cleaners Artarmon NSW',
    'strata cleaning Artarmon',
    'industrial cleaning Artarmon',
    'medical cleaning Artarmon',
    'childcare cleaning Artarmon',
    'end of lease cleaning Artarmon',
    'Artarmon NSW 2064 cleaning',
    'Pro Clean Corp Artarmon',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/artarmon-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/artarmon-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Artarmon NSW 2064 | Pro Clean Corp',
    description: 'Artarmon businesses trust Pro Clean Corp for commercial cleaning NSW 2064. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/artarmon-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Artarmon NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Artarmon',
  },
};

export default function ArtarmonCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Artarmon"
      postcode="2064"
      region="Northwest Sydney"
      slug="artarmon-nsw"
    />
  );
}
