import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Beverly Hills NSW 2209 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Beverly Hills NSW 2209. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Beverly Hills',
    'commercial cleaning Beverly Hills NSW',
    'office cleaning Beverly Hills',
    'cleaners Beverly Hills NSW',
    'cleaning services Beverly Hills',
    'commercial cleaners near me Beverly Hills',
    'office cleaners Beverly Hills NSW',
    'strata cleaning Beverly Hills',
    'industrial cleaning Beverly Hills',
    'medical cleaning Beverly Hills',
    'childcare cleaning Beverly Hills',
    'end of lease cleaning Beverly Hills',
    'Beverly Hills NSW 2209 cleaning',
    'Pro Clean Corp Beverly Hills',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/beverly-hills-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/beverly-hills-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Beverly Hills NSW 2209 | Pro Clean Corp',
    description: 'Beverly Hills businesses trust Pro Clean Corp for commercial cleaning NSW 2209. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/beverly-hills-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Beverly Hills NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Beverly Hills',
  },
};

export default function BeverlyHillsCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Beverly Hills"
      postcode="2209"
      region="Sydney Inner West"
      slug="beverly-hills-nsw"
    />
  );
}
