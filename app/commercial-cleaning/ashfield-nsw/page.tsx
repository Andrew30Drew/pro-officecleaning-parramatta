import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Ashfield NSW 2131 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Ashfield NSW 2131. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Ashfield',
    'commercial cleaning Ashfield NSW',
    'office cleaning Ashfield',
    'cleaners Ashfield NSW',
    'cleaning services Ashfield',
    'commercial cleaners near me Ashfield',
    'office cleaners Ashfield NSW',
    'strata cleaning Ashfield',
    'industrial cleaning Ashfield',
    'medical cleaning Ashfield',
    'childcare cleaning Ashfield',
    'end of lease cleaning Ashfield',
    'Ashfield NSW 2131 cleaning',
    'Pro Clean Corp Ashfield',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/ashfield-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/ashfield-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Ashfield NSW 2131 | Pro Clean Corp',
    description: 'Ashfield businesses trust Pro Clean Corp for commercial cleaning NSW 2131. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/ashfield-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Ashfield NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Ashfield',
  },
};

export default function AshfieldCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Ashfield"
      postcode="2131"
      region="Sydney Inner West"
      slug="ashfield-nsw"
    />
  );
}
