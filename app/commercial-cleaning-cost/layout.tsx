import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Cost Sydney NSW - Office Cleaning Prices & Quotes',
  description: 'Get competitive commercial cleaning cost estimates in Sydney NSW. Professional office cleaning prices, commercial carpet cleaning rates, and customized service packages. Contact us for your free quote today.',
  keywords: 'commercial cleaning cost, office cleaning cost, commercial cleaning price, office cleaning price, commercial cleaning services cost, office cleaning services cost, commercial carpet cleaning prices, commercial cleaning services prices, office cleaning services prices, professional carpet cleaner cost',
  openGraph: {
    title: 'Commercial Cleaning Cost Sydney NSW - Office Cleaning Prices & Quotes',
    description: 'Get competitive commercial cleaning cost estimates in Sydney NSW. Professional office cleaning prices, commercial carpet cleaning rates, and customized service packages.',
    url: '/commercial-cleaning-cost',
    siteName: 'Pro Clean Corp',
    images: [
      {
        url: '/images/carpet-cleaning-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Commercial cleaning cost and office cleaning prices Sydney NSW'
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Cost Sydney NSW - Office Cleaning Prices & Quotes',
    description: 'Get competitive commercial cleaning cost estimates in Sydney NSW. Professional office cleaning prices and customized service packages.',
    images: ['/images/carpet-cleaning-1.jpg'],
  },
  alternates: {
    canonical: '/commercial-cleaning-cost',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommercialCleaningCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}