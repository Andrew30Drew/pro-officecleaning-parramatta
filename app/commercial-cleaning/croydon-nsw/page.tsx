import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Croydon NSW 2132 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Croydon NSW 2132. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Croydon',
    'commercial cleaning Croydon NSW',
    'office cleaning Croydon',
    'cleaners Croydon NSW',
    'cleaning services Croydon',
    'commercial cleaners near me Croydon',
    'office cleaners Croydon NSW',
    'strata cleaning Croydon',
    'industrial cleaning Croydon',
    'medical cleaning Croydon',
    'childcare cleaning Croydon',
    'end of lease cleaning Croydon',
    'Croydon NSW 2132 cleaning',
    'Pro Clean Corp Croydon',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/croydon-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/croydon-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Croydon NSW 2132 | Pro Clean Corp',
    description: 'Croydon businesses trust Pro Clean Corp for commercial cleaning NSW 2132. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/croydon-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Croydon NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Croydon',
  },
};

export default function CroydonCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Croydon"
      postcode="2132"
      region="Sydney Inner West"
      slug="croydon-nsw"
    />
  );
}
