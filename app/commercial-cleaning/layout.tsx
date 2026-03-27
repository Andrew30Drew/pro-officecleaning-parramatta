import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Sydney NSW - Professional Business Cleaners | Pro Clean Corp',
  description: 'Premier commercial cleaning services across Sydney NSW. Pro Clean Corp delivers exceptional commercial cleaning solutions for offices, retail spaces, warehouses, and industrial facilities. Get a free quote today.',
  keywords: [
    'commercial cleaning Sydney NSW',
    'commercial cleaning services Sydney',
    'business cleaning Sydney NSW',
    'professional commercial cleaners Sydney',
    'office cleaning commercial Sydney',
    'retail cleaning services Sydney NSW',
    'warehouse cleaning Sydney',
    'industrial cleaning Sydney NSW',
    'commercial property cleaning Sydney',
    'Pro Clean Corp commercial cleaning'
  ],
  openGraph: {
    title: 'Commercial Cleaning Services Sydney NSW - Professional Business Cleaners',
    description: 'Premier commercial cleaning services across Sydney NSW. Professional office cleaning, retail cleaning, warehouse cleaning, and industrial facility cleaning services.',
    url: '/commercial-cleaning',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Cleaning Services Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Services Sydney NSW - Professional Business Cleaners',
    description: 'Premier commercial cleaning services across Sydney NSW. Professional cleaning solutions for offices, retail, warehouses, and industrial facilities.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-cleaning',
  },
};

export default function CommercialCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}