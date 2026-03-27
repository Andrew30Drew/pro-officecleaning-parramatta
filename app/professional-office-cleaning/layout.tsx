import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Office Cleaning Sydney NSW - Expert Workplace Cleaning Services | Pro Clean Corp',
  description: 'Discover professional office cleaning excellence in Sydney NSW. Pro Clean Corp delivers expert office cleaning services with certified professionals, advanced techniques, and superior results for discerning businesses.',
  keywords: [
    'professional office cleaning Sydney NSW',
    'expert office cleaning Sydney',
    'certified office cleaning Sydney NSW',
    'professional workplace cleaning Sydney',
    'advanced office cleaning Sydney NSW',
    'professional cleaning services Sydney',
    'expert cleaning professionals Sydney NSW',
    'professional office maintenance Sydney',
    'certified workplace cleaning Sydney NSW',
    'Pro Clean Corp professional office'
  ],
  openGraph: {
    title: 'Professional Office Cleaning Sydney NSW - Expert Workplace Cleaning Services',
    description: 'Discover professional office cleaning excellence in Sydney NSW. Expert office cleaning services with certified professionals and advanced techniques.',
    url: '/professional-office-cleaning',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Professional Office Cleaning Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Office Cleaning Sydney NSW - Expert Workplace Cleaning Services',
    description: 'Professional office cleaning excellence with certified professionals and advanced techniques for superior results.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/professional-office-cleaning',
  },
};

export default function ProfessionalOfficeCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}