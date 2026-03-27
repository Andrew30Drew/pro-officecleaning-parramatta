import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  description:
    "Read Pro Clean Corp's privacy policy for commercial cleaning services in Sydney NSW. Learn how we protect your personal information and data when providing office cleaning, industrial cleaning, and commercial property maintenance services.",
  authors: [{ name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW' }],
  creator: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  publisher: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  category: 'Commercial Cleaning Services',
  metadataBase: new URL('https://www.procleancorp.com.au'),
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/privacy-policy',
    title: 'Privacy Policy - Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    description:
      "Read Pro Clean Corp's privacy policy for commercial cleaning services in Sydney NSW. Learn how we protect your personal information and data.",
    siteName: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Pro Clean Corp Privacy Policy - Commercial Cleaning Services Sydney NSW',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    description:
      "Read Pro Clean Corp's privacy policy for commercial cleaning services in Sydney NSW. Learn how we protect your personal information and data.",
    images: ['https://www.procleancorp.com.au/meta.png'],
    creator: '@procleancompany',
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy - Pro Clean Corp Commercial Cleaning Services Sydney NSW',
            description:
              'Privacy policy and data protection information for Pro Clean Corp commercial cleaning services in Sydney NSW.',
            url: 'https://www.procleancorp.com.au/privacy-policy',
            inLanguage: 'en-AU',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              url: 'https://www.procleancorp.com.au',
            },
            about: {
              '@type': 'Thing',
              name: 'Privacy Policy',
              description: 'Data protection and privacy information for commercial cleaning services',
            },
            mainEntity: {
              '@type': 'LocalBusiness',
              '@id': 'https://www.procleancorp.com.au/#organization',
              name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              alternateName: 'Pro Clean Corp',
              url: 'https://www.procleancorp.com.au',
              logo: 'https://www.procleancorp.com.au/meta.png',
              telephone: '1300 494 983',
              email: 'hello@procleancorp.com.au',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '77 Garfield Street',
                addressLocality: 'Wentworthville',
                addressRegion: 'NSW',
                postalCode: '2145',
                addressCountry: 'AU',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Sydney NSW',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'New South Wales',
                  },
                },
              ],
              serviceType: [
                'Commercial Cleaning Services',
                'Office Cleaning',
                'Industrial Cleaning',
                'Commercial Property Maintenance',
              ],
            },
            privacyPolicy: {
              '@type': 'DigitalDocument',
              name: 'Pro Clean Corp Privacy Policy',
              description:
                'Comprehensive privacy policy outlining how Pro Clean Corp protects customer personal information and data.',
              url: 'https://www.procleancorp.com.au/privacy-policy',
              dateModified: '2025-01-01',
              author: {
                '@type': 'Organization',
                name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.procleancorp.com.au/meta.png',
                },
              },
              copyrightHolder: {
                '@type': 'Organization',
                name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              },
              license: 'All Rights Reserved',
              inLanguage: 'en-AU',
            },
            dataProtectionRegime: [
              {
                '@type': 'Thing',
                name: 'Australian Privacy Principles',
                description: 'Compliance with Australian Privacy Act 1988',
              },
              {
                '@type': 'Thing',
                name: 'GDPR Compliance',
                description: 'General Data Protection Regulation compliance for international customers',
              },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.procleancorp.com.au',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Privacy Policy',
                  item: 'https://www.procleancorp.com.au/privacy-policy',
                },
              ],
            },
            datePublished: '2025-01-01',
            dateModified: '2025-01-01',
            publisher: {
              '@type': 'Organization',
              name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.procleancorp.com.au/meta.png',
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
