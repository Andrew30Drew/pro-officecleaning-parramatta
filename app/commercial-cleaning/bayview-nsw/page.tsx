import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bayview NSW 2104 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Bayview NSW 2104. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bayview',
    'commercial cleaning Bayview NSW',
    'office cleaning Bayview',
    'cleaners Bayview NSW',
    'cleaning services Bayview',
    'commercial cleaners near me Bayview',
    'office cleaners Bayview NSW',
    'strata cleaning Bayview',
    'industrial cleaning Bayview',
    'medical cleaning Bayview',
    'childcare cleaning Bayview',
    'end of lease cleaning Bayview',
    'Bayview NSW 2104 cleaning',
    'Pro Clean Corp Bayview',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bayview-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bayview-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bayview NSW 2104 | Pro Clean Corp',
    description: 'Bayview businesses trust Pro Clean Corp for commercial cleaning NSW 2104. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bayview-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bayview NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bayview',
  },
};

export default function BayviewCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Bayview"
      postcode="2104"
      region="Northwest Sydney"
      slug="bayview-nsw"
    />
  );
}
