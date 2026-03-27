import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Sydney NSW - Pro Clean Corp Professional Cleaners',
  description:
    'Professional commercial cleaning services in Sydney NSW by Pro Clean Corp. Office cleaning, industrial cleaning, retail cleaning, warehouse cleaning, and specialized commercial property maintenance. Trusted local cleaners serving Sydney NSW businesses.',
  keywords: [
    'commercial cleaning services Sydney NSW',
    'office cleaning Sydney NSW',
    'professional cleaners Sydney NSW',
    'commercial cleaners Sydney NSW',
    'industrial cleaning Sydney NSW',
    'business cleaning services Sydney NSW',
    'Pro Clean Corp Sydney NSW',
    'cleaning company Sydney NSW',
    'commercial property cleaning Sydney NSW',
    'office maintenance Sydney NSW',
    'workplace cleaning Sydney NSW',
    'commercial janitorial services Sydney NSW',
    'retail cleaning Sydney NSW',
    'warehouse cleaning Sydney NSW',
    'medical facility cleaning Sydney NSW',
    'strata cleaning Sydney NSW',
    'factory cleaning Sydney NSW',
    'shopping centre cleaning Sydney NSW',
    'gym cleaning services Sydney NSW',
    'restaurant cleaning Sydney NSW',
    'carpet cleaning commercial Sydney NSW',
    'window cleaning commercial Sydney NSW',
    'deep cleaning services Sydney NSW',
    'sanitisation services Sydney NSW',
    'COVID cleaning Sydney NSW',
    'end of lease cleaning commercial Sydney NSW',
    'construction cleanup Sydney NSW',
    'pressure washing Sydney NSW',
    'floor cleaning services Sydney NSW',
    'bathroom cleaning commercial Sydney NSW',
  ],
  authors: [{ name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW' }],
  creator: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  publisher: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  category: 'Commercial Cleaning Services',
  metadataBase: new URL('https://www.procleancorp.com.au'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/services',
    title: 'Commercial Cleaning Services Sydney NSW - Pro Clean Corp Professional Cleaners',
    description:
      'Professional commercial cleaning services in Sydney NSW by Pro Clean Corp. Office cleaning, industrial cleaning, retail cleaning, and specialized commercial property maintenance.',
    siteName: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW - Professional Office and Industrial Cleaners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Services Sydney NSW - Pro Clean Corp',
    description:
      'Professional commercial cleaning services in Sydney NSW. Office cleaning, industrial cleaning, retail cleaning, and specialized commercial property maintenance.',
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
            '@type': 'CollectionPage',
            name: 'Commercial Cleaning Services Sydney NSW',
            description:
              'Comprehensive commercial cleaning services in Sydney NSW including office cleaning, industrial cleaning, retail cleaning, and specialized commercial property maintenance.',
            url: 'https://www.procleancorp.com.au/services',
            mainEntity: {
              '@type': 'LocalBusiness',
              '@id': 'https://www.procleancorp.com.au/#organization',
              name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              alternateName: 'Pro Clean Corp',
              description:
                'Professional commercial cleaning services in Sydney NSW specializing in office cleaning, industrial cleaning, retail cleaning, warehouse cleaning, and commercial property maintenance.',
              url: 'https://www.procleancorp.com.au',
              logo: 'https://www.procleancorp.com.au/meta.png',
              image: 'https://www.procleancorp.com.au/meta.png',
              telephone: '1300 494 983',
              email: 'hello@procleancorp.com.au',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '77 Garfield Street',
                addressLocality: 'Sydney NSW',
                addressRegion: 'NSW',
                postalCode: '2164',
                addressCountry: 'AU',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -33.8518,
                longitude: 150.9024,
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
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Commercial Cleaning Services Catalog',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Office Cleaning Services',
                      description:
                        'Professional office cleaning including desk sanitization, floor maintenance, window cleaning, and waste management for commercial offices.',
                      provider: {
                        '@id': 'https://www.procleancorp.com.au/#organization',
                      },
                      areaServed: 'Sydney NSW, NSW',
                      availableChannel: {
                        '@type': 'ServiceChannel',
                        serviceUrl: 'https://www.procleancorp.com.au/services/office-cleaning',
                        serviceName: 'Office Cleaning Services',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Industrial Cleaning Services',
                      description:
                        'Specialized industrial cleaning for warehouses, factories, manufacturing facilities, and industrial complexes in Sydney NSW.',
                      provider: {
                        '@id': 'https://www.procleancorp.com.au/#organization',
                      },
                      areaServed: 'Sydney NSW, NSW',
                      availableChannel: {
                        '@type': 'ServiceChannel',
                        serviceUrl:
                          'https://www.procleancorp.com.au/services/industrial-cleaning',
                        serviceName: 'Industrial Cleaning Services',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Retail Cleaning Services',
                      description:
                        'Professional retail cleaning for shopping centers, stores, and commercial retail spaces including floor cleaning and display maintenance.',
                      provider: {
                        '@id': 'https://www.procleancorp.com.au/#organization',
                      },
                      areaServed: 'Sydney NSW, NSW',
                      availableChannel: {
                        '@type': 'ServiceChannel',
                        serviceUrl: 'https://www.procleancorp.com.au/services/retail-cleaning',
                        serviceName: 'Retail Cleaning Services',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Medical Facility Cleaning',
                      description:
                        'Specialized medical facility cleaning and sanitization services for clinics, medical centers, and healthcare facilities.',
                      provider: {
                        '@id': 'https://www.procleancorp.com.au/#organization',
                      },
                      areaServed: 'Sydney NSW, NSW',
                      availableChannel: {
                        '@type': 'ServiceChannel',
                        serviceUrl:
                          'https://www.procleancorp.com.au/services/medical-cleaning',
                        serviceName: 'Medical Facility Cleaning',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Warehouse Cleaning Services',
                      description:
                        'Comprehensive warehouse cleaning including floor scrubbing, high-level cleaning, and specialized industrial equipment cleaning.',
                      provider: {
                        '@id': 'https://www.procleancorp.com.au/#organization',
                      },
                      areaServed: 'Sydney NSW, NSW',
                      availableChannel: {
                        '@type': 'ServiceChannel',
                        serviceUrl:
                          'https://www.procleancorp.com.au/services/warehouse-cleaning',
                        serviceName: 'Warehouse Cleaning Services',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Restaurant & Kitchen Cleaning',
                      description:
                        'Professional restaurant and commercial kitchen cleaning including deep cleaning, equipment sanitization, and grease removal.',
                      provider: {
                        '@id': 'https://www.procleancorp.com.au/#organization',
                      },
                      areaServed: 'Sydney NSW, NSW',
                      availableChannel: {
                        '@type': 'ServiceChannel',
                        serviceUrl:
                          'https://www.procleancorp.com.au/services/restaurant-cleaning',
                        serviceName: 'Restaurant & Kitchen Cleaning',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Gym & Fitness Center Cleaning',
                      description:
                        'Specialized gym and fitness center cleaning including equipment sanitization, locker room cleaning, and floor maintenance.',
                      provider: {
                        '@id': 'https://www.procleancorp.com.au/#organization',
                      },
                      areaServed: 'Sydney NSW, NSW',
                      availableChannel: {
                        '@type': 'ServiceChannel',
                        serviceUrl: 'https://www.procleancorp.com.au/services/gym-cleaning',
                        serviceName: 'Gym & Fitness Center Cleaning',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Strata Cleaning Services',
                      description:
                        'Professional strata cleaning for apartment buildings, commercial complexes, and multi-unit properties including common areas and facilities.',
                      provider: {
                        '@id': 'https://www.procleancorp.com.au/#organization',
                      },
                      areaServed: 'Sydney NSW, NSW',
                      availableChannel: {
                        '@type': 'ServiceChannel',
                        serviceUrl: 'https://www.procleancorp.com.au/services/strata-cleaning',
                        serviceName: 'Strata Cleaning Services',
                      },
                    },
                  },
                ],
              },
              serviceType: [
                'Commercial Cleaning Services',
                'Office Cleaning',
                'Industrial Cleaning',
                'Retail Cleaning',
                'Medical Facility Cleaning',
                'Warehouse Cleaning',
                'Restaurant Cleaning',
                'Gym Cleaning',
                'Strata Cleaning',
                'Janitorial Services',
              ],
              priceRange: '$$',
              paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'Invoice'],
              currenciesAccepted: 'AUD',
              openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-16:00',
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
                  name: 'Services',
                  item: 'https://www.procleancorp.com.au/services',
                },
              ],
            },
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
