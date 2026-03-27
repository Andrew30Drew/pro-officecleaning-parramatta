import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Cost Sydney NSW - Business Cleaning Rates',
  description: 'Get competitive commercial cleaning services cost estimates in Sydney NSW. Professional business cleaning rates, facility cleaning costs, and comprehensive service packages. Contact us for your free detailed quote today.',
  keywords: 'commercial cleaning services cost, business cleaning rates, facility cleaning costs, commercial cleaning services prices, professional cleaning service rates, industrial cleaning costs, corporate cleaning prices',
  openGraph: {
    title: 'Commercial Cleaning Services Cost Sydney NSW - Business Cleaning Rates',
    description: 'Get competitive commercial cleaning services cost estimates in Sydney NSW. Professional business cleaning rates and comprehensive service packages.',
    url: '/commercial-cleaning-services-cost',
    siteName: 'Pro Clean Corp',
    images: [
      {
        url: '/images/hero_img5.jpg',
        width: 1200,
        height: 630,
        alt: 'Commercial cleaning services cost and business cleaning rates Sydney NSW'
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Services Cost Sydney NSW - Business Cleaning Rates',
    description: 'Get competitive commercial cleaning services cost estimates in Sydney NSW. Professional business cleaning rates and packages.',
    images: ['/images/hero_img5.jpg'],
  },
  alternates: {
    canonical: '/commercial-cleaning-services-cost',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommercialCleaningServicesCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}