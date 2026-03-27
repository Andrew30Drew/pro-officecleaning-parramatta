import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Cabarita NSW 2137 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Cabarita NSW 2137. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Cabarita',
    'commercial cleaning Cabarita NSW',
    'office cleaning Cabarita',
    'cleaners Cabarita NSW',
    'cleaning services Cabarita',
    'commercial cleaners near me Cabarita',
    'office cleaners Cabarita NSW',
    'strata cleaning Cabarita',
    'industrial cleaning Cabarita',
    'medical cleaning Cabarita',
    'childcare cleaning Cabarita',
    'end of lease cleaning Cabarita',
    'Cabarita NSW 2137 cleaning',
    'Pro Clean Corp Cabarita',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/cabarita-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/cabarita-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Cabarita NSW 2137 | Pro Clean Corp',
    description: 'Cabarita businesses trust Pro Clean Corp for commercial cleaning NSW 2137. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/cabarita-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Cabarita NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Cabarita',
  },
};

export default function CabaritaCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Cabarita"
      postcode="2137"
      region="Sydney Inner West"
      slug="cabarita-nsw"
    />
  );
}
