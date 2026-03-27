import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  description:
    "Read Pro Clean Corp's terms of use for commercial cleaning services in Sydney NSW. Terms and conditions for office cleaning, industrial cleaning, and commercial property maintenance services.",
  authors: [{ name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW' }],
  creator: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  publisher: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  category: 'Commercial Cleaning Services',
  metadataBase: new URL('https://www.procleancorp.com.au'),
  alternates: {
    canonical: '/terms-of-use',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/terms-of-use',
    title: 'Terms of Use - Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    description:
      "Read Pro Clean Corp's terms of use for commercial cleaning services in Sydney NSW. Terms and conditions for professional cleaning services.",
    siteName: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Pro Clean Corp Terms of Use - Commercial Cleaning Services Sydney NSW',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use - Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    description:
      "Read Pro Clean Corp's terms of use for commercial cleaning services in Sydney NSW. Terms and conditions for professional cleaning services.",
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
            name: 'Terms of Use - Pro Clean Corp Commercial Cleaning Services Sydney NSW',
            description:
              'Terms of use and service conditions for Pro Clean Corp commercial cleaning services in Sydney NSW.',
            url: 'https://www.procleancorp.com.au/terms-of-use',
            inLanguage: 'en-AU',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              url: 'https://www.procleancorp.com.au',
            },
            about: {
              '@type': 'Thing',
              name: 'Terms of Use',
              description: 'Service terms and conditions for commercial cleaning services',
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
                'Janitorial Services',
              ],
            },
            termsOfService: {
              '@type': 'DigitalDocument',
              name: 'Pro Clean Corp Terms of Use',
              description:
                'Comprehensive terms of use outlining service conditions, responsibilities, and agreements for Pro Clean Corp commercial cleaning services.',
              url: 'https://www.procleancorp.com.au/terms-of-use',
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
              genre: 'Legal Document',
            },
            serviceTerms: [
              {
                '@type': 'Thing',
                name: 'Service Agreement',
                description: 'Terms governing commercial cleaning service provision',
              },
              {
                '@type': 'Thing',
                name: 'Payment Terms',
                description: 'Payment conditions and billing procedures',
              },
              {
                '@type': 'Thing',
                name: 'Liability Coverage',
                description: 'Insurance and liability terms for cleaning services',
              },
              {
                '@type': 'Thing',
                name: 'Cancellation Policy',
                description: 'Terms for service cancellation and rescheduling',
              },
              {
                '@type': 'Thing',
                name: 'Quality Guarantee',
                description: 'Service quality standards and satisfaction guarantee',
              },
            ],
            legalJurisdiction: {
              '@type': 'Place',
              name: 'New South Wales, Australia',
              description: 'Legal jurisdiction governing these terms of use',
            },
            applicableLaw: {
              '@type': 'Thing',
              name: 'Australian Consumer Law',
              description: 'Terms comply with Australian Consumer Law and Competition and Consumer Act 2010',
            },
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
                  name: 'Terms of Use',
                  item: 'https://www.procleancorp.com.au/terms-of-use',
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
