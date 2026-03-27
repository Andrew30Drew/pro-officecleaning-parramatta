import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Caringbah NSW 2229 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Caringbah NSW 2229. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Caringbah',
    'commercial cleaning Caringbah NSW',
    'office cleaning Caringbah',
    'cleaners Caringbah NSW',
    'cleaning services Caringbah',
    'commercial cleaners near me Caringbah',
    'office cleaners Caringbah NSW',
    'strata cleaning Caringbah',
    'industrial cleaning Caringbah',
    'medical cleaning Caringbah',
    'childcare cleaning Caringbah',
    'end of lease cleaning Caringbah',
    'Caringbah NSW 2229 cleaning',
    'Pro Clean Corp Caringbah',
    'Sydney Sutherland Shire commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/caringbah-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/caringbah-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Caringbah NSW 2229 | Pro Clean Corp',
    description: 'Caringbah businesses trust Pro Clean Corp for commercial cleaning NSW 2229. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/caringbah-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Caringbah NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Caringbah',
  },
};

export default function CaringbahCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Caringbah"
      postcode="2229"
      region="Sydney Sutherland Shire"
      slug="caringbah-nsw"
    />
  );
}
