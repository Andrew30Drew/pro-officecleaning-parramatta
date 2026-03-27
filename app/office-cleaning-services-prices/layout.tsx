import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Services Prices Sydney NSW - Workplace Cleaning Quotes',
  description: 'Get competitive office cleaning services prices in Sydney NSW. Professional workplace cleaning quotes, executive office service rates, and flexible packages. Contact us for your free detailed estimate today.',
  keywords: 'office cleaning services prices, workplace cleaning quotes, executive office service rates, business office cleaning prices, professional office service quotes, corporate cleaning prices',
  openGraph: {
    title: 'Office Cleaning Services Prices Sydney NSW - Workplace Cleaning Quotes',
    description: 'Get competitive office cleaning services prices in Sydney NSW. Professional workplace cleaning quotes and flexible service packages.',
    url: '/office-cleaning-services-prices',
    siteName: 'Pro Clean Corp',
    images: [
      {
        url: '/images/multi-users.png',
        width: 1200,
        height: 630,
        alt: 'Office cleaning services prices and workplace cleaning quotes Sydney NSW'
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Services Prices Sydney NSW - Workplace Cleaning Quotes',
    description: 'Get competitive office cleaning services prices in Sydney NSW. Professional workplace cleaning quotes and packages.',
    images: ['/images/multi-users.png'],
  },
  alternates: {
    canonical: '/office-cleaning-services-prices',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OfficeCleaningServicesPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}