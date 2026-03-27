import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Carramar NSW 2163 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Carramar NSW 2163. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Carramar',
    'commercial cleaning Carramar NSW',
    'office cleaning Carramar',
    'cleaners Carramar NSW',
    'cleaning services Carramar',
    'commercial cleaners near me Carramar',
    'office cleaners Carramar NSW',
    'strata cleaning Carramar',
    'industrial cleaning Carramar',
    'medical cleaning Carramar',
    'childcare cleaning Carramar',
    'end of lease cleaning Carramar',
    'Carramar NSW 2163 cleaning',
    'Pro Clean Corp Carramar',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/carramar-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/carramar-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Carramar NSW 2163 | Pro Clean Corp',
    description: 'Carramar businesses trust Pro Clean Corp for commercial cleaning NSW 2163. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/carramar-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Carramar NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Carramar',
  },
};

export default function CarramarCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Carramar"
      postcode="2163"
      region="Sydney Western Suburbs"
      slug="carramar-nsw"
    />
  );
}
