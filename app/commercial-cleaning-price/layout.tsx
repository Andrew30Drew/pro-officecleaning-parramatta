import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Price Sydney NSW - Business Cleaning Quote',
  description: 'Get competitive commercial cleaning price estimates in Sydney NSW. Professional business cleaning quotes, facility cleaning rates, and customized service packages. Contact us for your free detailed estimate today.',
  keywords: 'commercial cleaning price, business cleaning quote, facility cleaning rates, commercial cleaning pricing, professional cleaning quote, business facility cleaning price',
  openGraph: {
    title: 'Commercial Cleaning Price Sydney NSW - Business Cleaning Quote',
    description: 'Get competitive commercial cleaning price estimates in Sydney NSW. Professional business cleaning quotes and customized service packages.',
    url: '/commercial-cleaning-price',
    siteName: 'Pro Clean Corp',
    images: [
      {
        url: '/images/whychoose.jpg',
        width: 1200,
        height: 630,
        alt: 'Commercial cleaning price and business cleaning quotes Sydney NSW'
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Price Sydney NSW - Business Cleaning Quote',
    description: 'Get competitive commercial cleaning price estimates in Sydney NSW. Professional business cleaning quotes and packages.',
    images: ['/images/whychoose.jpg'],
  },
  alternates: {
    canonical: '/commercial-cleaning-price',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommercialCleaningPriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}