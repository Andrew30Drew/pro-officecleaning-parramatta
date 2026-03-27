import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Cronulla NSW 2230 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Cronulla NSW 2230. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Cronulla',
    'commercial cleaning Cronulla NSW',
    'office cleaning Cronulla',
    'cleaners Cronulla NSW',
    'cleaning services Cronulla',
    'commercial cleaners near me Cronulla',
    'office cleaners Cronulla NSW',
    'strata cleaning Cronulla',
    'industrial cleaning Cronulla',
    'medical cleaning Cronulla',
    'childcare cleaning Cronulla',
    'end of lease cleaning Cronulla',
    'Cronulla NSW 2230 cleaning',
    'Pro Clean Corp Cronulla',
    'Sydney Sutherland Shire commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/cronulla-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/cronulla-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Cronulla NSW 2230 | Pro Clean Corp',
    description: 'Cronulla businesses trust Pro Clean Corp for commercial cleaning NSW 2230. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/cronulla-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Cronulla NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Cronulla',
  },
};

export default function CronullaCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Cronulla"
      postcode="2230"
      region="Sydney Sutherland Shire"
      slug="cronulla-nsw"
    />
  );
}
