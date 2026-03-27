import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Canada Bay NSW 2046 | Pro Clean Corp',
  description: 'Professional commercial cleaning in Canada Bay NSW 2046. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning Canada Bay',
    'commercial cleaning Canada Bay NSW',
    'office cleaning Canada Bay',
    'cleaners Canada Bay NSW',
    'cleaning services Canada Bay',
    'commercial cleaners near me Canada Bay',
    'office cleaners Canada Bay NSW',
    'strata cleaning Canada Bay',
    'industrial cleaning Canada Bay',
    'medical cleaning Canada Bay',
    'childcare cleaning Canada Bay',
    'end of lease cleaning Canada Bay',
    'Canada Bay NSW 2046 cleaning',
    'Pro Clean Corp Canada Bay',
    'Sydney Inner West commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/canada-bay-nsw',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/canada-bay-nsw' },
  },
  openGraph: {
    title: 'Commercial Cleaning Canada Bay NSW 2046 | Pro Clean Corp',
    description: 'Canada Bay businesses trust Pro Clean Corp for commercial cleaning NSW 2046. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/canada-bay-nsw',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Canada Bay NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Canada Bay',
  },
};

export default function CanadaBayCommercialCleaning() {
  return (
    <StaticLocationPage
      suburb="Canada Bay"
      postcode="2046"
      region="Sydney Inner West"
      slug="canada-bay-nsw"
    />
  );
}
