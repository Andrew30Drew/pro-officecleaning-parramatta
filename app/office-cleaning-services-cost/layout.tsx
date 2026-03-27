import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Services Cost Sydney NSW - Workplace Cleaning Rates',
  description: 'Get competitive office cleaning services cost estimates in Sydney NSW. Professional workplace cleaning rates, executive office service costs, and flexible packages. Contact us for your free detailed quote today.',
  keywords: 'office cleaning services cost, workplace cleaning rates, executive office cleaning cost, business office service rates, professional office cleaning prices, corporate cleaning service costs',
  openGraph: {
    title: 'Office Cleaning Services Cost Sydney NSW - Workplace Cleaning Rates',
    description: 'Get competitive office cleaning services cost estimates in Sydney NSW. Professional workplace cleaning rates and flexible service packages.',
    url: '/office-cleaning-services-cost',
    siteName: 'Pro Clean Corp',
    images: [
      {
        url: '/images/hero_img2.jpg',
        width: 1200,
        height: 630,
        alt: 'Office cleaning services cost and workplace cleaning rates Sydney NSW'
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Services Cost Sydney NSW - Workplace Cleaning Rates',
    description: 'Get competitive office cleaning services cost estimates in Sydney NSW. Professional workplace cleaning rates and packages.',
    images: ['/images/hero_img2.jpg'],
  },
  alternates: {
    canonical: '/office-cleaning-services-cost',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OfficeCleaningServicesCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}