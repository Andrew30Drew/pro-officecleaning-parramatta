import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Camperdown NSW 2050 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Camperdown NSW 2050. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Camperdown',
    'commercial cleaning Camperdown NSW',
    'office cleaning Camperdown',
    'cleaners Camperdown NSW',
    'cleaning services Camperdown',
    'commercial cleaners near me Camperdown',
    'office cleaners Camperdown NSW',
    'strata cleaning Camperdown',
    'industrial cleaning Camperdown',
    'medical cleaning Camperdown',
    'childcare cleaning Camperdown',
    'end of lease cleaning Camperdown',
    'Camperdown NSW 2050 cleaning',
    'Pro Clean Corp Camperdown',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/camperdown-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/camperdown-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Camperdown NSW 2050 | Pro Clean Corp',
    description: 'Camperdown businesses trust Pro Clean Corp for commercial cleaning NSW 2050. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/camperdown-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Camperdown NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Camperdown',
  },
};

export default function CamperdownCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Camperdown"
      postcode="2050"
      region="Sydney Inner West"
      slug="camperdown-nsw"
    />
  );
}
