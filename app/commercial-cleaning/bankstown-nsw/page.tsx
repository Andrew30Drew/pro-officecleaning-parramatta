import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Bankstown NSW 2200 | Pro Clean Corp',
  description:
    'Professional commercial cleaning in Bankstown NSW 2200. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Bankstown',
    'commercial cleaning Bankstown NSW',
    'office cleaning Bankstown',
    'cleaners Bankstown NSW',
    'cleaning services Bankstown',
    'commercial cleaners near me Bankstown',
    'office cleaners Bankstown NSW',
    'strata cleaning Bankstown',
    'industrial cleaning Bankstown',
    'medical cleaning Bankstown',
    'childcare cleaning Bankstown',
    'end of lease cleaning Bankstown',
    'Bankstown NSW 2200 cleaning',
    'Pro Clean Corp Bankstown',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/bankstown-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/bankstown-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Bankstown NSW 2200 | Pro Clean Corp',
    description:
      'Bankstown businesses trust Pro Clean Corp for commercial cleaning NSW 2200. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/bankstown-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Bankstown NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Bankstown',
  },
};

export default function BankstownCommercialCleaning() {
  return <StaticLocationPage suburb="Bankstown" postcode="2200" region="Sydney Western Suburbs" slug="bankstown-nsw" />;
}
