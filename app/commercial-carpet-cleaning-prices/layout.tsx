import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Carpet Cleaning Prices Sydney NSW - Business Carpet Cleaning Rates',
  description: 'Get competitive commercial carpet cleaning prices in Sydney NSW. Professional business carpet cleaning rates, office carpet service costs, and deep cleaning packages. Contact us for your free detailed quote today.',
  keywords: 'commercial carpet cleaning prices, business carpet cleaning rates, office carpet cleaning cost, professional carpet cleaning prices, commercial carpet service rates, industrial carpet cleaning costs',
  openGraph: {
    title: 'Commercial Carpet Cleaning Prices Sydney NSW - Business Carpet Cleaning Rates',
    description: 'Get competitive commercial carpet cleaning prices in Sydney NSW. Professional business carpet cleaning rates and deep cleaning packages.',
    url: '/commercial-carpet-cleaning-prices',
    siteName: 'Pro Clean Corp',
    images: [
      {
        url: '/images/carpet-cleaning-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Commercial carpet cleaning prices and business carpet cleaning rates Sydney NSW'
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Carpet Cleaning Prices Sydney NSW - Business Carpet Cleaning Rates',
    description: 'Get competitive commercial carpet cleaning prices in Sydney NSW. Professional business carpet cleaning rates and packages.',
    images: ['/images/carpet-cleaning-1.jpg'],
  },
  alternates: {
    canonical: '/commercial-carpet-cleaning-prices',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommercialCarpetCleaningPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}