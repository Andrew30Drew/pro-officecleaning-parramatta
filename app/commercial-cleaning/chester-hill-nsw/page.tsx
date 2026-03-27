import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Chester Hill NSW 2162 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Chester Hill NSW 2162. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Chester Hill',
    'commercial cleaning Chester Hill NSW',
    'office cleaning Chester Hill',
    'cleaners Chester Hill NSW',
    'cleaning services Chester Hill',
    'commercial cleaners near me Chester Hill',
    'office cleaners Chester Hill NSW',
    'strata cleaning Chester Hill',
    'industrial cleaning Chester Hill',
    'medical cleaning Chester Hill',
    'childcare cleaning Chester Hill',
    'end of lease cleaning Chester Hill',
    'Chester Hill NSW 2162 cleaning',
    'Pro Clean Corp Chester Hill',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/chester-hill-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/chester-hill-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Chester Hill NSW 2162 | Pro Clean Corp',
    description: 'Chester Hill businesses trust Pro Clean Corp for commercial cleaning NSW 2162. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/chester-hill-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Chester Hill NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Chester Hill',
  },
};

export default function ChesterHillCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Chester Hill"
      postcode="2162"
      region="Sydney Western Suburbs"
      slug="chester-hill-nsw"
    />
  );
}
