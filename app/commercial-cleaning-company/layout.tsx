import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Company Sydney NSW - Trusted Professional Cleaning Business | Pro Clean Corp',
  description: 'Leading commercial cleaning company serving Sydney NSW businesses since 2016. Pro Clean Corp delivers reliable, professional cleaning solutions with experienced teams, advanced equipment, and guaranteed satisfaction.',
  keywords: [
    'commercial cleaning company Sydney NSW',
    'professional cleaning company Sydney',
    'business cleaning company Sydney NSW',
    'trusted cleaning company Sydney',
    'commercial cleaning business Sydney NSW',
    'office cleaning company Sydney',
    'cleaning company Sydney NSW',
    'professional cleaners company Sydney',
    'established cleaning company Sydney NSW',
    'Pro Clean Corp Sydney company'
  ],
  openGraph: {
    title: 'Commercial Cleaning Company Sydney NSW - Trusted Professional Cleaning Business',
    description: 'Leading commercial cleaning company serving Sydney NSW businesses since 2016. Reliable professional cleaning solutions with experienced teams and guaranteed satisfaction.',
    url: '/commercial-cleaning-company',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Cleaning Company Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Company Sydney NSW - Trusted Professional Cleaning Business',
    description: 'Leading commercial cleaning company with experienced teams and guaranteed satisfaction for Sydney businesses.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-cleaning-company',
  },
};

export default function CommercialCleaningCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}