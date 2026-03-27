import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Near Me Sydney NSW - Local Professional Cleaners | Pro Clean Corp',
  description: 'Find the best commercial cleaning services near you in Sydney NSW. Pro Clean Corp provides local commercial cleaning solutions with fast response times, competitive rates, and personalized service.',
  keywords: [
    'commercial cleaning services near me Sydney NSW',
    'local commercial cleaning Sydney',
    'commercial cleaners near me Sydney NSW',
    'business cleaning services near me Sydney',
    'office cleaning services near me Sydney NSW',
    'local professional cleaners Sydney',
    'commercial cleaning company near me Sydney',
    'local business cleaning Sydney NSW',
    'Pro Clean Corp near me Sydney',
    'local cleaning services Sydney NSW'
  ],
  openGraph: {
    title: 'Commercial Cleaning Services Near Me Sydney NSW - Local Professional Cleaners',
    description: 'Find the best commercial cleaning services near you in Sydney NSW. Local commercial cleaning solutions with fast response times and personalized community service.',
    url: '/commercial-cleaning-services-near-me',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Cleaning Services Near Me Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Services Near Me Sydney NSW - Local Professional Cleaners',
    description: 'Find the best commercial cleaning services near you in Sydney NSW with fast response times and personalized local service.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-cleaning-services-near-me',
  },
};

export default function CommercialCleaningServicesNearMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}