import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Berowra Waters NSW 2082 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Berowra Waters NSW 2082. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Berowra Waters',
    'commercial cleaning Berowra Waters NSW',
    'office cleaning Berowra Waters',
    'cleaners Berowra Waters NSW',
    'cleaning services Berowra Waters',
    'commercial cleaners near me Berowra Waters',
    'office cleaners Berowra Waters NSW',
    'strata cleaning Berowra Waters',
    'industrial cleaning Berowra Waters',
    'medical cleaning Berowra Waters',
    'childcare cleaning Berowra Waters',
    'end of lease cleaning Berowra Waters',
    'Berowra Waters NSW 2082 cleaning',
    'Pro Clean Corp Berowra Waters',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/berowra-waters-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/berowra-waters-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Berowra Waters NSW 2082 | Pro Clean Corp',
    description: 'Berowra Waters businesses trust Pro Clean Corp for commercial cleaning NSW 2082. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/berowra-waters-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Berowra Waters NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Berowra Waters',
  },
};

export default function BerowraWatersCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Berowra Waters"
      postcode="2082"
      region="Northwest Sydney"
      slug="berowra-waters-nsw"
    />
  );
}
