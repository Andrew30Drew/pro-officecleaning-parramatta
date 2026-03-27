import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Carlton NSW 2218 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Carlton NSW 2218. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Carlton',
    'commercial cleaning Carlton NSW',
    'office cleaning Carlton',
    'cleaners Carlton NSW',
    'cleaning services Carlton',
    'commercial cleaners near me Carlton',
    'office cleaners Carlton NSW',
    'strata cleaning Carlton',
    'industrial cleaning Carlton',
    'medical cleaning Carlton',
    'childcare cleaning Carlton',
    'end of lease cleaning Carlton',
    'Carlton NSW 2218 cleaning',
    'Pro Clean Corp Carlton',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/carlton-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/carlton-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Carlton NSW 2218 | Pro Clean Corp',
    description: 'Carlton businesses trust Pro Clean Corp for commercial cleaning NSW 2218. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/carlton-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Carlton NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Carlton',
  },
};

export default function CarltonCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Carlton"
      postcode="2218"
      region="Sydney Inner West"
      slug="carlton-nsw"
    />
  );
}
