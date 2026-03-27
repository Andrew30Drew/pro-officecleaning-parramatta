import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Sydney NSW - Professional Business Solutions | Pro Clean Corp',
  description: 'Comprehensive commercial cleaning services across Sydney NSW. Pro Clean Corp offers reliable, professional commercial cleaning solutions for offices, retail stores, warehouses, and medical facilities. Free quotes available.',
  keywords: [
    'commercial cleaning services Sydney NSW',
    'professional commercial cleaning Sydney',
    'business cleaning services Sydney NSW',
    'commercial cleaning company Sydney',
    'office cleaning services Sydney',
    'retail cleaning services Sydney NSW',
    'warehouse cleaning services Sydney',
    'medical facility cleaning Sydney NSW',
    'industrial cleaning services Sydney',
    'Pro Clean Corp commercial services'
  ],
  openGraph: {
    title: 'Commercial Cleaning Services Sydney NSW - Professional Business Solutions',
    description: 'Comprehensive commercial cleaning services across Sydney NSW. Professional business cleaning solutions with customized service programs for all industries.',
    url: '/commercial-cleaning-services',
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
    title: 'Commercial Cleaning Services Sydney NSW - Professional Business Solutions',
    description: 'Comprehensive commercial cleaning services across Sydney NSW. Professional business cleaning solutions for all industries.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-cleaning-services',
  },
};

export default function CommercialCleaningServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}