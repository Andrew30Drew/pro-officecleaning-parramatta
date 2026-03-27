import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Services Sydney NSW - Professional Workplace Solutions | Pro Clean Corp',
  description: 'Expert office cleaning services throughout Sydney NSW. Pro Clean Corp delivers comprehensive workplace cleaning solutions including daily office maintenance, deep cleaning, and sanitization services.',
  keywords: [
    'office cleaning services Sydney NSW',
    'professional office cleaning services Sydney',
    'workplace cleaning services Sydney NSW',
    'business office cleaning services Sydney',
    'corporate office cleaning services Sydney',
    'daily office cleaning services Sydney NSW',
    'office maintenance services Sydney',
    'after hours office cleaning Sydney NSW',
    'office sanitization services Sydney',
    'Pro Clean Corp office services'
  ],
  openGraph: {
    title: 'Office Cleaning Services Sydney NSW - Professional Workplace Solutions',
    description: 'Expert office cleaning services throughout Sydney NSW. Comprehensive workplace cleaning solutions including daily maintenance, deep cleaning, and specialized office care.',
    url: '/office-cleaning-services',
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
    title: 'Office Cleaning Services Sydney NSW - Professional Workplace Solutions',
    description: 'Expert office cleaning services throughout Sydney NSW. Comprehensive workplace cleaning solutions for businesses of all sizes.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/office-cleaning-services',
  },
};

export default function OfficeCleaningServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}