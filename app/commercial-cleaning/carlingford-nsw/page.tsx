import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Carlingford NSW 2118 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Carlingford NSW 2118. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Carlingford',
    'commercial cleaning Carlingford NSW',
    'office cleaning Carlingford',
    'cleaners Carlingford NSW',
    'cleaning services Carlingford',
    'commercial cleaners near me Carlingford',
    'office cleaners Carlingford NSW',
    'strata cleaning Carlingford',
    'industrial cleaning Carlingford',
    'medical cleaning Carlingford',
    'childcare cleaning Carlingford',
    'end of lease cleaning Carlingford',
    'Carlingford NSW 2118 cleaning',
    'Pro Clean Corp Carlingford',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/carlingford-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/carlingford-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Carlingford NSW 2118 | Pro Clean Corp',
    description: 'Carlingford businesses trust Pro Clean Corp for commercial cleaning NSW 2118. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/carlingford-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Carlingford NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Carlingford',
  },
};

export default function CarlingfordCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Carlingford"
      postcode="2118"
      region="Northwest Sydney"
      slug="carlingford-nsw"
    />
  );
}
