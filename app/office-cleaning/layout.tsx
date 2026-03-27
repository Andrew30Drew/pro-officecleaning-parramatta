import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Services Sydney NSW - Professional Workplace Cleaners | Pro Clean Corp',
  description: 'Premium office cleaning services across Sydney NSW. Pro Clean Corp provides comprehensive office cleaning solutions including desk sanitization, floor care, restroom cleaning, and kitchen maintenance. Free quotes available.',
  keywords: [
    'office cleaning Sydney NSW',
    'office cleaning services Sydney',
    'professional office cleaners Sydney',
    'workplace cleaning Sydney NSW',
    'business office cleaning Sydney',
    'corporate office cleaning Sydney',
    'daily office cleaning Sydney NSW',
    'after hours office cleaning Sydney',
    'office maintenance Sydney',
    'Pro Clean Corp office cleaning'
  ],
  openGraph: {
    title: 'Office Cleaning Services Sydney NSW - Professional Workplace Cleaners',
    description: 'Premium office cleaning services across Sydney NSW. Professional workplace cleaning solutions including desk sanitization, floor care, and comprehensive office maintenance.',
    url: '/office-cleaning',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Office Cleaning Services Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Services Sydney NSW - Professional Workplace Cleaners',
    description: 'Premium office cleaning services across Sydney NSW. Professional workplace cleaning solutions for businesses of all sizes.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/office-cleaning',
  },
};

export default function OfficeCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}