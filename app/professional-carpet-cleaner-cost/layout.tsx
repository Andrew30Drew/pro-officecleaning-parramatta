import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Carpet Cleaner Cost Sydney NSW - Expert Carpet Cleaning Rates',
  description: 'Get competitive professional carpet cleaner cost estimates in Sydney NSW. Expert carpet cleaning rates, certified technician costs, and premium service packages. Contact us for your free detailed quote today.',
  keywords: 'professional carpet cleaner cost, expert carpet cleaning rates, certified carpet technician cost, premium carpet cleaning prices, professional carpet service rates, specialist carpet cleaner cost',
  openGraph: {
    title: 'Professional Carpet Cleaner Cost Sydney NSW - Expert Carpet Cleaning Rates',
    description: 'Get competitive professional carpet cleaner cost estimates in Sydney NSW. Expert carpet cleaning rates and premium service packages.',
    url: '/professional-carpet-cleaner-cost',
    siteName: 'Pro Clean Corp',
    images: [
      {
        url: '/images/carpet-cleaning-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional carpet cleaner cost and expert carpet cleaning rates Sydney NSW'
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Carpet Cleaner Cost Sydney NSW - Expert Carpet Cleaning Rates',
    description: 'Get competitive professional carpet cleaner cost estimates in Sydney NSW. Expert carpet cleaning rates and premium packages.',
    images: ['/images/carpet-cleaning-1.jpg'],
  },
  alternates: {
    canonical: '/professional-carpet-cleaner-cost',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProfessionalCarpetCleanerCostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}