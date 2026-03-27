import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Office Cleaning Service Sydney NSW - Professional Workplace Solutions | Pro Clean Corp',
  description: 'Premium commercial office cleaning service across Sydney NSW. Pro Clean Corp delivers comprehensive office cleaning solutions with flexible scheduling, eco-friendly products, and guaranteed satisfaction.',
  keywords: [
    'commercial office cleaning service Sydney NSW',
    'professional office cleaning service Sydney',
    'workplace cleaning service Sydney NSW',
    'business office cleaning service Sydney',
    'corporate office cleaning service Sydney NSW',
    'office maintenance service Sydney',
    'commercial workplace cleaning Sydney NSW',
    'office cleaning service company Sydney',
    'professional workplace cleaning Sydney NSW',
    'Pro Clean Corp office service'
  ],
  openGraph: {
    title: 'Commercial Office Cleaning Service Sydney NSW - Professional Workplace Solutions',
    description: 'Premium commercial office cleaning service across Sydney NSW. Comprehensive office cleaning solutions with flexible scheduling and guaranteed satisfaction.',
    url: '/commercial-office-cleaning-service',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Office Cleaning Service Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Office Cleaning Service Sydney NSW - Professional Workplace Solutions',
    description: 'Premium commercial office cleaning service with comprehensive solutions and flexible scheduling for Sydney businesses.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-office-cleaning-service',
  },
};

export default function CommercialOfficeCleaningServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}