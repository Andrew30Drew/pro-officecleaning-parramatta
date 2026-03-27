import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Services For Commercial Properties Sydney NSW - Professional Solutions | Pro Clean Corp',
  description: 'Comprehensive cleaning services for commercial properties across Sydney NSW. Pro Clean Corp delivers professional cleaning solutions for offices, warehouses, retail stores, and industrial facilities with guaranteed results.',
  keywords: [
    'cleaning services for commercial Sydney NSW',
    'commercial property cleaning services Sydney',
    'professional commercial cleaning Sydney NSW',
    'business facility cleaning Sydney',
    'office building cleaning services Sydney NSW',
    'warehouse cleaning services Sydney',
    'retail cleaning services Sydney NSW',
    'industrial cleaning services Sydney',
    'commercial facility maintenance Sydney NSW',
    'Pro Clean Corp commercial services'
  ],
  openGraph: {
    title: 'Cleaning Services For Commercial Properties Sydney NSW - Professional Solutions',
    description: 'Comprehensive cleaning services for commercial properties across Sydney NSW. Professional cleaning solutions for all types of commercial facilities with guaranteed results.',
    url: '/cleaning-services-for-commercial',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Cleaning Services For Commercial Properties Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Services For Commercial Properties Sydney NSW - Professional Solutions',
    description: 'Comprehensive cleaning services for commercial properties with professional solutions for all facility types.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/cleaning-services-for-commercial',
  },
};

export default function CleaningServicesForCommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}