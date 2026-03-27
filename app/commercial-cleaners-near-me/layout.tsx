import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaners Near Me Sydney NSW - Local Professional Cleaning Teams | Pro Clean Corp',
  description: 'Find experienced commercial cleaners near you in Sydney NSW. Pro Clean Corp provides local professional cleaning teams with expertise in commercial cleaning, fast response times, and competitive rates.',
  keywords: [
    'commercial cleaners near me Sydney NSW',
    'local commercial cleaners Sydney',
    'professional cleaners near me Sydney NSW',
    'business cleaners near me Sydney',
    'office cleaners near me Sydney NSW',
    'local cleaning teams Sydney',
    'commercial cleaning professionals near me Sydney',
    'local professional cleaners Sydney NSW',
    'Pro Clean Corp cleaners near me',
    'cleaning teams Sydney NSW'
  ],
  openGraph: {
    title: 'Commercial Cleaners Near Me Sydney NSW - Local Professional Cleaning Teams',
    description: 'Find experienced commercial cleaners near you in Sydney NSW. Local professional cleaning teams with expertise in commercial cleaning and fast response times.',
    url: '/commercial-cleaners-near-me',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Cleaners Near Me Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaners Near Me Sydney NSW - Local Professional Cleaning Teams',
    description: 'Find experienced commercial cleaners near you in Sydney NSW with fast response times and competitive local rates.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-cleaners-near-me',
  },
};

export default function CommercialCleanersNearMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}