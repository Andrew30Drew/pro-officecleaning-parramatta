import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Price Sydney NSW - Professional Workplace Cleaning Costs',
  description: 'Get competitive office cleaning price quotes in Sydney NSW. Professional workplace cleaning costs, executive office cleaning rates, and customized service packages. Contact us for your free detailed estimate today.',
  keywords: 'office cleaning price, office cleaning cost, office cleaning services prices, professional office cleaning cost, workplace cleaning prices, executive office cleaning rates, business office cleaning cost',
  openGraph: {
    title: 'Office Cleaning Price Sydney NSW - Professional Workplace Cleaning Costs',
    description: 'Get competitive office cleaning price quotes in Sydney NSW. Professional workplace cleaning costs and customized service packages.',
    url: '/office-cleaning-price',
    siteName: 'Pro Clean Corp',
    images: [
      {
        url: '/images/hero_img1.jpg',
        width: 1200,
        height: 630,
        alt: 'Office cleaning price and workplace cleaning costs Sydney NSW'
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Price Sydney NSW - Professional Workplace Cleaning Costs',
    description: 'Get competitive office cleaning price quotes in Sydney NSW. Professional workplace cleaning costs and customized packages.',
    images: ['/images/hero_img1.jpg'],
  },
  alternates: {
    canonical: '/office-cleaning-price',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OfficeCleaningPriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}