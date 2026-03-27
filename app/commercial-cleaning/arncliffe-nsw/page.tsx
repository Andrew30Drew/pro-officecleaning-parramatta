import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Arncliffe NSW 2205 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Arncliffe NSW 2205. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Arncliffe',
    'commercial cleaning Arncliffe NSW',
    'office cleaning Arncliffe',
    'cleaners Arncliffe NSW',
    'cleaning services Arncliffe',
    'commercial cleaners near me Arncliffe',
    'office cleaners Arncliffe NSW',
    'strata cleaning Arncliffe',
    'industrial cleaning Arncliffe',
    'medical cleaning Arncliffe',
    'childcare cleaning Arncliffe',
    'end of lease cleaning Arncliffe',
    'Arncliffe NSW 2205 cleaning',
    'Pro Clean Corp Arncliffe',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/arncliffe-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/arncliffe-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Arncliffe NSW 2205 | Pro Clean Corp',
    description: 'Arncliffe businesses trust Pro Clean Corp for commercial cleaning NSW 2205. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/arncliffe-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Arncliffe NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Arncliffe',
  },
};

export default function ArncliffeCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Arncliffe"
      postcode="2205"
      region="Sydney Inner West"
      slug="arncliffe-nsw"
    />
  );
}
