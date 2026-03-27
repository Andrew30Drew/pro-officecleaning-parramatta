import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clean Commercial Cleaning Services Sydney NSW - Spotless Business Solutions | Pro Clean Corp',
  description: 'Experience the cleanest commercial cleaning services in Sydney NSW with Pro Clean Corp. Meticulous approach ensures spotless commercial properties with eco-friendly cleaning solutions and attention to detail.',
  keywords: [
    'clean commercial cleaning Sydney NSW',
    'spotless commercial cleaning Sydney',
    'premium commercial cleaning services Sydney',
    'eco-friendly commercial cleaning Sydney',
    'detailed commercial cleaning Sydney NSW',
    'quality commercial cleaning Sydney',
    'professional commercial cleaning Sydney',
    'clean business cleaning Sydney NSW',
    'Pro Clean Corp Sydney',
    'commercial property cleaning Sydney'
  ],
  openGraph: {
    title: 'Clean Commercial Cleaning Services Sydney NSW - Spotless Business Solutions',
    description: 'Experience the cleanest commercial cleaning services in Sydney NSW. Meticulous commercial cleaning with eco-friendly products and superior attention to detail.',
    url: '/clean-commercial-cleaning',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Clean Commercial Cleaning Services Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Commercial Cleaning Services Sydney NSW - Spotless Business Solutions',
    description: 'Experience the cleanest commercial cleaning services in Sydney NSW with eco-friendly solutions and meticulous attention to detail.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/clean-commercial-cleaning',
  },
};

export default function CleanCommercialCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}