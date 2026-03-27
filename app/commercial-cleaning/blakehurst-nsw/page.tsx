import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Blakehurst NSW 2221 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Blakehurst NSW 2221. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Blakehurst',
    'commercial cleaning Blakehurst NSW',
    'office cleaning Blakehurst',
    'cleaners Blakehurst NSW',
    'cleaning services Blakehurst',
    'commercial cleaners near me Blakehurst',
    'office cleaners Blakehurst NSW',
    'strata cleaning Blakehurst',
    'industrial cleaning Blakehurst',
    'medical cleaning Blakehurst',
    'childcare cleaning Blakehurst',
    'end of lease cleaning Blakehurst',
    'Blakehurst NSW 2221 cleaning',
    'Pro Clean Corp Blakehurst',
    'Sydney Sutherland Shire commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/blakehurst-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/blakehurst-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Blakehurst NSW 2221 | Pro Clean Corp',
    description: 'Blakehurst businesses trust Pro Clean Corp for commercial cleaning NSW 2221. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/blakehurst-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Blakehurst NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Blakehurst',
  },
};

export default function BlakehurstCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Blakehurst"
      postcode="2221"
      region="Sydney Sutherland Shire"
      slug="blakehurst-nsw"
    />
  );
}
