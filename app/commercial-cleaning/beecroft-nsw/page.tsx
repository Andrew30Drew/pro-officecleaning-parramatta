import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Beecroft NSW 2119 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Beecroft NSW 2119. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Beecroft',
    'commercial cleaning Beecroft NSW',
    'office cleaning Beecroft',
    'cleaners Beecroft NSW',
    'cleaning services Beecroft',
    'commercial cleaners near me Beecroft',
    'office cleaners Beecroft NSW',
    'strata cleaning Beecroft',
    'industrial cleaning Beecroft',
    'medical cleaning Beecroft',
    'childcare cleaning Beecroft',
    'end of lease cleaning Beecroft',
    'Beecroft NSW 2119 cleaning',
    'Pro Clean Corp Beecroft',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/beecroft-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/beecroft-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Beecroft NSW 2119 | Pro Clean Corp',
    description: 'Beecroft businesses trust Pro Clean Corp for commercial cleaning NSW 2119. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/beecroft-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Beecroft NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Beecroft',
  },
};

export default function BeecroftCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Beecroft"
      postcode="2119"
      region="Northwest Sydney"
      slug="beecroft-nsw"
    />
  );
}
