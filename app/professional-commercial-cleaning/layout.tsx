import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Commercial Cleaning Sydney NSW - Expert Business Cleaning Services | Pro Clean Corp',
  description: 'Discover professional commercial cleaning excellence in Sydney NSW. Pro Clean Corp delivers expert commercial cleaning services with certified professionals, advanced techniques, and superior results.',
  keywords: [
    'professional commercial cleaning Sydney NSW',
    'expert commercial cleaning Sydney',
    'certified commercial cleaning Sydney NSW',
    'professional business cleaning Sydney',
    'advanced commercial cleaning Sydney NSW',
    'professional cleaning services Sydney',
    'expert cleaning professionals Sydney NSW',
    'professional office cleaning Sydney',
    'certified cleaning specialists Sydney NSW',
    'Pro Clean Corp professional cleaning'
  ],
  openGraph: {
    title: 'Professional Commercial Cleaning Sydney NSW - Expert Business Cleaning Services',
    description: 'Discover professional commercial cleaning excellence in Sydney NSW. Expert commercial cleaning services with certified professionals and advanced techniques.',
    url: '/professional-commercial-cleaning',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Professional Commercial Cleaning Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Commercial Cleaning Sydney NSW - Expert Business Cleaning Services',
    description: 'Professional commercial cleaning excellence with certified professionals and advanced techniques for superior results.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/professional-commercial-cleaning',
  },
};

export default function ProfessionalCommercialCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}