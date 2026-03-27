import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Avalon NSW 2107 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Avalon NSW 2107. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Avalon',
    'commercial cleaning Avalon NSW',
    'office cleaning Avalon',
    'cleaners Avalon NSW',
    'cleaning services Avalon',
    'commercial cleaners near me Avalon',
    'office cleaners Avalon NSW',
    'strata cleaning Avalon',
    'industrial cleaning Avalon',
    'medical cleaning Avalon',
    'childcare cleaning Avalon',
    'end of lease cleaning Avalon',
    'Avalon NSW 2107 cleaning',
    'Pro Clean Corp Avalon',
    'Northwest Sydney commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/avalon-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/avalon-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Avalon NSW 2107 | Pro Clean Corp',
    description: 'Avalon businesses trust Pro Clean Corp for commercial cleaning NSW 2107. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/avalon-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Avalon NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Avalon',
  },
};

export default function AvalonCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Avalon"
      postcode="2107"
      region="Northwest Sydney"
      slug="avalon-nsw"
    />
  );
}
