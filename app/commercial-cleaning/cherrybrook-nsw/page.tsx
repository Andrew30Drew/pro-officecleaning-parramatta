import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Cherrybrook NSW 2126 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Cherrybrook NSW 2126. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Cherrybrook',
    'commercial cleaning Cherrybrook NSW',
    'office cleaning Cherrybrook',
    'cleaners Cherrybrook NSW',
    'cleaning services Cherrybrook',
    'commercial cleaners near me Cherrybrook',
    'office cleaners Cherrybrook NSW',
    'strata cleaning Cherrybrook',
    'industrial cleaning Cherrybrook',
    'medical cleaning Cherrybrook',
    'childcare cleaning Cherrybrook',
    'end of lease cleaning Cherrybrook',
    'Cherrybrook NSW 2126 cleaning',
    'Pro Clean Corp Cherrybrook',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/cherrybrook-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/cherrybrook-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Cherrybrook NSW 2126 | Pro Clean Corp',
    description: 'Cherrybrook businesses trust Pro Clean Corp for commercial cleaning NSW 2126. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/cherrybrook-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Cherrybrook NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Cherrybrook',
  },
};

export default function CherrybrookCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Cherrybrook"
      postcode="2126"
      region="Northwest Sydney"
      slug="cherrybrook-nsw"
    />
  );
}
