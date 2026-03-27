import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Services Industrial Commercial Sydney NSW - Professional Facility Solutions | Pro Clean Corp',
  description: 'Expert cleaning services for industrial and commercial facilities across Sydney NSW. Pro Clean Corp delivers specialized cleaning solutions for manufacturing, warehouses, and industrial complexes with safety compliance.',
  keywords: [
    'cleaning services industrial commercial Sydney NSW',
    'industrial cleaning services Sydney',
    'commercial industrial cleaning Sydney NSW',
    'manufacturing facility cleaning Sydney',
    'warehouse cleaning services Sydney NSW',
    'industrial complex cleaning Sydney',
    'factory cleaning services Sydney NSW',
    'heavy duty industrial cleaning Sydney',
    'commercial facility cleaning Sydney NSW',
    'Pro Clean Corp industrial services'
  ],
  openGraph: {
    title: 'Cleaning Services Industrial Commercial Sydney NSW - Professional Facility Solutions',
    description: 'Expert cleaning services for industrial and commercial facilities across Sydney NSW. Specialized cleaning solutions with safety compliance and professional results.',
    url: '/cleaning-services-industrial-commercial',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Cleaning Services Industrial Commercial Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Services Industrial Commercial Sydney NSW - Professional Facility Solutions',
    description: 'Expert cleaning services for industrial and commercial facilities with specialized solutions and safety compliance.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/cleaning-services-industrial-commercial',
  },
};

export default function CleaningServicesIndustrialCommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}