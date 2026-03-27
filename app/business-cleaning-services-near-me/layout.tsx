import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Cleaning Services Near Me Sydney NSW - Local Professional Cleaners | Pro Clean Corp',
  description: 'Find professional business cleaning services near you in Sydney NSW. Pro Clean Corp provides local cleaning teams with fast response times, competitive rates, and personalized service for businesses in your area.',
  keywords: [
    'business cleaning services near me Sydney NSW',
    'local business cleaning Sydney',
    'commercial cleaning near me Sydney NSW',
    'office cleaning services near me Sydney',
    'local commercial cleaners Sydney NSW',
    'business cleaners near me Sydney',
    'professional cleaning services near me Sydney NSW',
    'local cleaning company Sydney',
    'cleaning services in my area Sydney NSW',
    'Pro Clean Corp near me Sydney'
  ],
  openGraph: {
    title: 'Business Cleaning Services Near Me Sydney NSW - Local Professional Cleaners',
    description: 'Find professional business cleaning services near you in Sydney NSW. Local cleaning teams with fast response times and personalized service.',
    url: '/business-cleaning-services-near-me',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Business Cleaning Services Near Me Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Cleaning Services Near Me Sydney NSW - Local Professional Cleaners',
    description: 'Find professional business cleaning services near you with fast response times and competitive local rates.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/business-cleaning-services-near-me',
  },
};

export default function BusinessCleaningServicesNearMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}