import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Company Sydney NSW - Professional Workplace Cleaning Business | Pro Clean Corp',
  description: 'Premier office cleaning company in Sydney NSW with 900% growth in demand. Pro Clean Corp specializes in professional office cleaning with trained teams, flexible scheduling, and comprehensive workplace solutions.',
  keywords: [
    'office cleaning company Sydney NSW',
    'professional office cleaning company Sydney',
    'workplace cleaning company Sydney NSW',
    'office cleaning business Sydney',
    'corporate office cleaning company Sydney NSW',
    'commercial office cleaning company Sydney',
    'office maintenance company Sydney NSW',
    'business office cleaning company Sydney',
    'trusted office cleaners Sydney NSW',
    'Pro Clean Corp office company'
  ],
  openGraph: {
    title: 'Office Cleaning Company Sydney NSW - Professional Workplace Cleaning Business',
    description: 'Premier office cleaning company with 900% growth in demand. Professional workplace cleaning with trained teams and flexible scheduling.',
    url: '/office-cleaning-company',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Office Cleaning Company Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Company Sydney NSW - Professional Workplace Cleaning Business',
    description: 'Premier office cleaning company with professional workplace cleaning solutions and flexible scheduling.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/office-cleaning-company',
  },
};

export default function OfficeCleaningCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}