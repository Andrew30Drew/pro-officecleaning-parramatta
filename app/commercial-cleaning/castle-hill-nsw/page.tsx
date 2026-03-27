import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Castle Hill NSW 2154 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Castle Hill NSW 2154. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Castle Hill',
    'commercial cleaning Castle Hill NSW',
    'office cleaning Castle Hill',
    'cleaners Castle Hill NSW',
    'cleaning services Castle Hill',
    'commercial cleaners near me Castle Hill',
    'office cleaners Castle Hill NSW',
    'strata cleaning Castle Hill',
    'industrial cleaning Castle Hill',
    'medical cleaning Castle Hill',
    'childcare cleaning Castle Hill',
    'end of lease cleaning Castle Hill',
    'Castle Hill NSW 2154 cleaning',
    'Pro Clean Corp Castle Hill',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/castle-hill-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/castle-hill-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Castle Hill NSW 2154 | Pro Clean Corp',
    description: 'Castle Hill businesses trust Pro Clean Corp for commercial cleaning NSW 2154. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/castle-hill-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Castle Hill NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Castle Hill',
  },
};

export default function CastleHillCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Castle Hill"
      postcode="2154"
      region="Northwest Sydney"
      slug="castle-hill-nsw"
    />
  );
}
