import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gym Cleaning Services Sydney NSW - Pro Clean Corp Professional Cleaners',
  description:
    'Professional Gym Cleaning services in Sydney NSW by Pro Clean Corp. Office cleaning, industrial cleaning, retail cleaning, warehouse cleaning, and specialized commercial property maintenance. Trusted local cleaners serving Sydney NSW businesses.',
  keywords: [
    'Gym Cleaning services Sydney NSW',
    'office cleaning Sydney NSW',
    'professional cleaners Sydney NSW',
    'commercial cleaners Sydney NSW',
    'industrial cleaning Sydney NSW',
    'business cleaning services Sydney NSW',
    'Pro Clean Corp Sydney NSW',
    'cleaning company Sydney NSW',
    'commercial property cleaning Sydney NSW',
    'office maintenance Sydney NSW',
    'workplace cleaning Sydney NSW',
    'commercial janitorial services Sydney NSW',
    'retail cleaning Sydney NSW',
    'warehouse cleaning Sydney NSW',
    'medical facility cleaning Sydney NSW',
    'strata cleaning Sydney NSW',
    'factory cleaning Sydney NSW',
    'shopping centre cleaning Sydney NSW',
    'gym cleaning services Sydney NSW',
    'restaurant cleaning Sydney NSW',
    'carpet cleaning commercial Sydney NSW',
    'window cleaning commercial Sydney NSW',
    'deep cleaning services Sydney NSW',
    'sanitisation services Sydney NSW',
    'COVID cleaning Sydney NSW',
    'end of lease cleaning commercial Sydney NSW',
    'construction cleanup Sydney NSW',
    'pressure washing Sydney NSW',
    'floor cleaning services Sydney NSW',
    'bathroom cleaning commercial Sydney NSW',
  ],
  authors: [{ name: 'Pro Clean Corp Gym Cleaning Services Sydney NSW' }],
  creator: 'Pro Clean Corp Gym Cleaning Services Sydney NSW',
  publisher: 'Pro Clean Corp Gym Cleaning Services Sydney NSW',
  category: 'Gym Cleaning Services',
  metadataBase: new URL('https://www.procleancorp.com.au'),
  alternates: {
    canonical: '/services/gym-cleaning',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/services/gym-cleaning',
    title: 'Gym Cleaning Services Sydney NSW - Pro Clean Corp Professional Cleaners',
    description:
      'Professional Gym Cleaning services in Sydney NSW by Pro Clean Corp. Office cleaning, industrial cleaning, retail cleaning, and specialized commercial property maintenance.',
    siteName: 'Pro Clean Corp Gym Cleaning Services Sydney NSW',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Pro Clean Corp Gym Cleaning Services Sydney NSW - Professional Office and Industrial Cleaners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Cleaning Services Sydney NSW - Pro Clean Corp',
    description:
      'Professional Gym Cleaning services in Sydney NSW. Office cleaning, industrial cleaning, retail cleaning, and specialized commercial property maintenance.',
    images: ['https://www.procleancorp.com.au/meta.png'],
    creator: '@procleancompany',
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
   
      {children}
    </>
  );
}
