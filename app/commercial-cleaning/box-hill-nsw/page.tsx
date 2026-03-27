import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Box Hill NSW 2765 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Box Hill NSW 2765. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Box Hill',
    'commercial cleaning Box Hill NSW',
    'office cleaning Box Hill',
    'cleaners Box Hill NSW',
    'cleaning services Box Hill',
    'commercial cleaners near me Box Hill',
    'office cleaners Box Hill NSW',
    'strata cleaning Box Hill',
    'industrial cleaning Box Hill',
    'medical cleaning Box Hill',
    'childcare cleaning Box Hill',
    'end of lease cleaning Box Hill',
    'Box Hill NSW 2765 cleaning',
    'Pro Clean Corp Box Hill',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/box-hill-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/box-hill-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Box Hill NSW 2765 | Pro Clean Corp',
    description: 'Box Hill businesses trust Pro Clean Corp for commercial cleaning NSW 2765. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/box-hill-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Box Hill NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Box Hill',
  },
};

export default function BoxHillCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Box Hill"
      postcode="2765"
      region="Northwest Sydney"
      slug="box-hill-nsw"
    />
  );
}
