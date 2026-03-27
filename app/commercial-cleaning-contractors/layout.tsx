import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Contractors Sydney NSW - Licensed Professional Cleaning Services | Pro Clean Corp',
  description: 'Trusted commercial cleaning contractors in Sydney NSW. Pro Clean Corp provides licensed, insured, and bonded cleaning contractors for businesses requiring reliable, professional commercial cleaning solutions.',
  keywords: [
    'commercial cleaning contractors Sydney NSW',
    'licensed cleaning contractors Sydney',
    'professional cleaning contractors Sydney NSW',
    'commercial contractors Sydney',
    'business cleaning contractors Sydney NSW',
    'insured cleaning contractors Sydney',
    'bonded cleaning contractors Sydney NSW',
    'certified commercial contractors Sydney',
    'cleaning service contractors Sydney NSW',
    'Pro Clean Corp contractors'
  ],
  openGraph: {
    title: 'Commercial Cleaning Contractors Sydney NSW - Licensed Professional Cleaning Services',
    description: 'Trusted commercial cleaning contractors in Sydney NSW. Licensed, insured, and bonded cleaning contractors for reliable professional commercial cleaning solutions.',
    url: '/commercial-cleaning-contractors',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Cleaning Contractors Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Contractors Sydney NSW - Licensed Professional Cleaning Services',
    description: 'Trusted commercial cleaning contractors with licensed, insured, and bonded professional cleaning services.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-cleaning-contractors',
  },
};

export default function CommercialCleaningContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}