import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Balgowlah NSW 2093 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Balgowlah NSW 2093. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Balgowlah',
    'commercial cleaning Balgowlah NSW',
    'office cleaning Balgowlah',
    'cleaners Balgowlah NSW',
    'cleaning services Balgowlah',
    'commercial cleaners near me Balgowlah',
    'office cleaners Balgowlah NSW',
    'strata cleaning Balgowlah',
    'industrial cleaning Balgowlah',
    'medical cleaning Balgowlah',
    'childcare cleaning Balgowlah',
    'end of lease cleaning Balgowlah',
    'Balgowlah NSW 2093 cleaning',
    'Pro Clean Corp Balgowlah',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/balgowlah-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/balgowlah-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Balgowlah NSW 2093 | Pro Clean Corp',
    description: 'Balgowlah businesses trust Pro Clean Corp for commercial cleaning NSW 2093. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/balgowlah-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Balgowlah NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Balgowlah',
  },
};

export default function BalgowlahCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Balgowlah"
      postcode="2093"
      region="Northwest Sydney"
      slug="balgowlah-nsw"
    />
  );
}
