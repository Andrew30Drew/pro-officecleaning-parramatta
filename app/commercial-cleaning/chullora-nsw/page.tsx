import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Chullora NSW 2190 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Chullora NSW 2190. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Chullora',
    'commercial cleaning Chullora NSW',
    'office cleaning Chullora',
    'cleaners Chullora NSW',
    'cleaning services Chullora',
    'commercial cleaners near me Chullora',
    'office cleaners Chullora NSW',
    'strata cleaning Chullora',
    'industrial cleaning Chullora',
    'medical cleaning Chullora',
    'childcare cleaning Chullora',
    'end of lease cleaning Chullora',
    'Chullora NSW 2190 cleaning',
    'Pro Clean Corp Chullora',
    'Sydney Western Suburbs commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/chullora-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/chullora-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Chullora NSW 2190 | Pro Clean Corp',
    description: 'Chullora businesses trust Pro Clean Corp for commercial cleaning NSW 2190. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/chullora-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Chullora NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Chullora',
  },
};

export default function ChulloraCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Chullora"
      postcode="2190"
      region="Sydney Western Suburbs"
      slug="chullora-nsw"
    />
  );
}
