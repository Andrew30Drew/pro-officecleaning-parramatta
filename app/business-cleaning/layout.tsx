import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Cleaning Services Sydney NSW - Professional Workplace Solutions | Pro Clean Corp',
  description: 'Comprehensive business cleaning services across Sydney NSW. Pro Clean Corp provides professional business cleaning solutions for all types of enterprises with customized cleaning programs and flexible schedules.',
  keywords: [
    'business cleaning Sydney NSW',
    'business cleaning services Sydney',
    'professional business cleaning Sydney NSW',
    'commercial business cleaning Sydney',
    'office business cleaning Sydney NSW',
    'retail business cleaning Sydney',
    'corporate business cleaning Sydney NSW',
    'small business cleaning Sydney',
    'enterprise cleaning Sydney NSW',
    'Pro Clean Corp business cleaning'
  ],
  openGraph: {
    title: 'Business Cleaning Services Sydney NSW - Professional Workplace Solutions',
    description: 'Comprehensive business cleaning services across Sydney NSW. Professional business cleaning solutions for all types of enterprises with customized programs.',
    url: '/business-cleaning',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Business Cleaning Services Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Cleaning Services Sydney NSW - Professional Workplace Solutions',
    description: 'Comprehensive business cleaning services across Sydney NSW for all types of enterprises with customized cleaning programs.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/business-cleaning',
  },
};

export default function BusinessCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}