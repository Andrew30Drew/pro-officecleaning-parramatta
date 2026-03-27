import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaners Near Me Sydney NSW - Local Professional Cleaning Teams | Pro Clean Corp',
  description: 'Find experienced office cleaners near you in Sydney NSW. Pro Clean Corp provides local professional cleaning teams with fast response times, competitive rates, and personalized office cleaning services.',
  keywords: [
    'office cleaners near me Sydney NSW',
    'local office cleaners Sydney',
    'professional office cleaners near me Sydney NSW',
    'office cleaning teams near me Sydney',
    'local office cleaning Sydney NSW',
    'office cleaners in my area Sydney',
    'nearby office cleaners Sydney NSW',
    'local professional cleaners Sydney',
    'office cleaning near me Sydney NSW',
    'Pro Clean Corp near me'
  ],
  openGraph: {
    title: 'Office Cleaners Near Me Sydney NSW - Local Professional Cleaning Teams',
    description: 'Find experienced office cleaners near you in Sydney NSW. Local professional cleaning teams with fast response times and competitive rates.',
    url: '/office-cleaners-near-me',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Office Cleaners Near Me Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaners Near Me Sydney NSW - Local Professional Cleaning Teams',
    description: 'Find experienced office cleaners near you with fast response times and competitive local rates.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/office-cleaners-near-me',
  },
};

export default function OfficeCleanersNearMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}