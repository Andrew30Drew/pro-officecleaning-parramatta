import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Carpet Cleaning Sydney NSW - Professional Business Carpet Care | Pro Clean Corp',
  description: 'Expert commercial carpet cleaning services across Sydney NSW. Pro Clean Corp provides professional carpet care for offices, retail stores, hotels, and commercial facilities using advanced cleaning techniques.',
  keywords: [
    'commercial carpet cleaning Sydney NSW',
    'business carpet cleaning Sydney',
    'office carpet cleaning Sydney NSW',
    'professional carpet cleaning Sydney',
    'commercial carpet cleaners Sydney NSW',
    'retail carpet cleaning Sydney',
    'hotel carpet cleaning Sydney NSW',
    'restaurant carpet cleaning Sydney',
    'carpet cleaning services Sydney NSW',
    'Pro Clean Corp carpet cleaning'
  ],
  openGraph: {
    title: 'Commercial Carpet Cleaning Sydney NSW - Professional Business Carpet Care',
    description: 'Expert commercial carpet cleaning services across Sydney NSW. Professional carpet care using advanced cleaning techniques and equipment.',
    url: '/commercial-carpet-cleaning',
    type: 'website',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Carpet Cleaning Sydney NSW - Pro Clean Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Carpet Cleaning Sydney NSW - Professional Business Carpet Care',
    description: 'Expert commercial carpet cleaning services with advanced techniques for superior carpet care results.',
    images: ['https://www.procleancorp.com.au/meta.png'],
  },
  alternates: {
    canonical: '/commercial-carpet-cleaning',
  },
};

export default function CommercialCarpetCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}