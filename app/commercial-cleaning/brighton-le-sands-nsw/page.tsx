import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Brighton-Le-Sands NSW 2216 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Brighton-Le-Sands NSW 2216. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Brighton-Le-Sands',
    'commercial cleaning Brighton-Le-Sands NSW',
    'office cleaning Brighton-Le-Sands',
    'cleaners Brighton-Le-Sands NSW',
    'cleaning services Brighton-Le-Sands',
    'commercial cleaners near me Brighton-Le-Sands',
    'office cleaners Brighton-Le-Sands NSW',
    'strata cleaning Brighton-Le-Sands',
    'industrial cleaning Brighton-Le-Sands',
    'medical cleaning Brighton-Le-Sands',
    'childcare cleaning Brighton-Le-Sands',
    'end of lease cleaning Brighton-Le-Sands',
    'Brighton-Le-Sands NSW 2216 cleaning',
    'Pro Clean Corp Brighton-Le-Sands',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/brighton-le-sands-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/brighton-le-sands-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Brighton-Le-Sands NSW 2216 | Pro Clean Corp',
    description: 'Brighton-Le-Sands businesses trust Pro Clean Corp for commercial cleaning NSW 2216. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/brighton-le-sands-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Brighton-Le-Sands NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Brighton-Le-Sands',
  },
};

export default function BrightonLeSandsCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Brighton-Le-Sands"
      postcode="2216"
      region="Sydney Inner West"
      slug="brighton-le-sands-nsw"
    />
  );
}
