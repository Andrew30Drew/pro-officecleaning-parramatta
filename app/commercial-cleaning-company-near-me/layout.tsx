import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Company Near Me Sydney NSW - Local Professional Cleaning Business | Pro Clean Corp',
  description: 'Find the best commercial cleaning company near you in Sydney NSW. Pro Clean Corp provides local commercial cleaning services with fast response times, competitive rates, and personalized business solutions.',
  keywords: [
    'commercial cleaning company near me Sydney NSW',
    'local commercial cleaning company Sydney',
    'commercial cleaning business near me Sydney NSW',
    'cleaning company near me Sydney',
    'local cleaning company Sydney NSW',
    'commercial cleaners company near me Sydney',
    'professional cleaning company near me Sydney NSW',
    'business cleaning company near me Sydney',
    'cleaning services company near me Sydney NSW',
    'Pro Clean Corp near me'
  ],
  openGraph: {
    title: 'Commercial Cleaning Company Near Me Sydney NSW - Local Professional Cleaning Business',
    description: 'Find the best commercial cleaning company near you in Sydney NSW. Local commercial cleaning services with fast response times and competitive rates.',
    url: '/commercial-cleaning-company-near-me',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Cleaning Company Near Me Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Company Near Me Sydney NSW - Local Professional Cleaning Business',
    description: 'Find the best commercial cleaning company near you with fast response times and competitive local rates.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-cleaning-company-near-me',
  },
};

export default function CommercialCleaningCompanyNearMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}