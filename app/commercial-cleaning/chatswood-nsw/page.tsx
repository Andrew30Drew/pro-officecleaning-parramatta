import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Chatswood NSW 2067 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Chatswood NSW 2067. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Chatswood',
    'commercial cleaning Chatswood NSW',
    'office cleaning Chatswood',
    'cleaners Chatswood NSW',
    'cleaning services Chatswood',
    'commercial cleaners near me Chatswood',
    'office cleaners Chatswood NSW',
    'strata cleaning Chatswood',
    'industrial cleaning Chatswood',
    'medical cleaning Chatswood',
    'childcare cleaning Chatswood',
    'end of lease cleaning Chatswood',
    'Chatswood NSW 2067 cleaning',
    'Pro Clean Corp Chatswood',
    'Sydney North Shore commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/chatswood-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/chatswood-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Chatswood NSW 2067 | Pro Clean Corp',
    description: 'Chatswood businesses trust Pro Clean Corp for commercial cleaning NSW 2067. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/chatswood-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Chatswood NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Chatswood',
  },
};

export default function ChatswoodCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Chatswood"
      postcode="2067"
      region="Sydney North Shore"
      slug="chatswood-nsw"
    />
  );
}
