import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Burwood NSW 2134 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Burwood NSW 2134. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Burwood',
    'commercial cleaning Burwood NSW',
    'office cleaning Burwood',
    'cleaners Burwood NSW',
    'cleaning services Burwood',
    'commercial cleaners near me Burwood',
    'office cleaners Burwood NSW',
    'strata cleaning Burwood',
    'industrial cleaning Burwood',
    'medical cleaning Burwood',
    'childcare cleaning Burwood',
    'end of lease cleaning Burwood',
    'Burwood NSW 2134 cleaning',
    'Pro Clean Corp Burwood',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/burwood-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/burwood-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Burwood NSW 2134 | Pro Clean Corp',
    description: 'Burwood businesses trust Pro Clean Corp for commercial cleaning NSW 2134. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/burwood-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Burwood NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Burwood',
  },
};

export default function BurwoodCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Burwood"
      postcode="2134"
      region="Sydney Inner West"
      slug="burwood-nsw"
    />
  );
}
