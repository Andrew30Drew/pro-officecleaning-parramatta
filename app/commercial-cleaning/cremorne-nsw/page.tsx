import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Cremorne NSW 2090 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Cremorne NSW 2090. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Cremorne',
    'commercial cleaning Cremorne NSW',
    'office cleaning Cremorne',
    'cleaners Cremorne NSW',
    'cleaning services Cremorne',
    'commercial cleaners near me Cremorne',
    'office cleaners Cremorne NSW',
    'strata cleaning Cremorne',
    'industrial cleaning Cremorne',
    'medical cleaning Cremorne',
    'childcare cleaning Cremorne',
    'end of lease cleaning Cremorne',
    'Cremorne NSW 2090 cleaning',
    'Pro Clean Corp Cremorne',
    'Sydney North Shore commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/cremorne-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/cremorne-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Cremorne NSW 2090 | Pro Clean Corp',
    description: 'Cremorne businesses trust Pro Clean Corp for commercial cleaning NSW 2090. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/cremorne-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Cremorne NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Cremorne',
  },
};

export default function CremorneCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Cremorne"
      postcode="2090"
      region="Sydney North Shore"
      slug="cremorne-nsw"
    />
  );
}
