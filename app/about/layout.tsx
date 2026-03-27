import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Pro Clean Corp Commercial Cleaning Services Sydney NSW - Our Story & Experience',
  description:
    "Learn about Pro Clean Corp, Sydney NSW's trusted commercial cleaning company. Over years of experience providing professional office cleaning, industrial cleaning, and commercial property maintenance services to local businesses.",
  keywords: [
    'about Pro Clean Corp Sydney NSW',
    'commercial cleaning company Sydney NSW',
    'professional cleaners Sydney NSW history',
    'experienced cleaning services Sydney NSW',
    'trusted commercial cleaners Sydney NSW',
    'office cleaning specialists Sydney NSW',
    'cleaning company background Sydney NSW',
    'commercial cleaning expertise Sydney NSW',
    'Pro Clean Corp team Sydney NSW',
    'reliable cleaning services Sydney NSW',
    'established cleaners Sydney NSW',
    'commercial cleaning professionals Sydney NSW',
    'business cleaning specialists Sydney NSW',
    'cleaning company credentials Sydney NSW',
    'industrial cleaning experts Sydney NSW',
    'local commercial cleaners Sydney NSW',
    'cleaning service experience Sydney NSW',
    'professional cleaning team Sydney NSW',
    'commercial property maintenance Sydney NSW',
    'workplace cleaning experts Sydney NSW',
    'certified cleaning professionals Sydney NSW',
    'eco-friendly cleaning company Sydney NSW',
    'insured commercial cleaners Sydney NSW',
    'quality cleaning services Sydney NSW',
    'customer focused cleaners Sydney NSW',
    'cleaning industry leaders Sydney NSW',
    'comprehensive cleaning solutions Sydney NSW',
    'modern cleaning techniques Sydney NSW',
    'trained cleaning staff Sydney NSW',
    'commercial cleaning standards Sydney NSW',
  ],
  authors: [{ name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW' }],
  creator: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  publisher: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  category: 'Commercial Cleaning Services',
  metadataBase: new URL('https://www.procleancorp.com.au'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/about',
    title: 'About Pro Clean Corp Commercial Cleaning Services Sydney NSW - Our Story & Experience',
    description:
      "Learn about Pro Clean Corp, Sydney NSW's trusted commercial cleaning company with years of experience providing professional cleaning services to local businesses.",
    siteName: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'About Pro Clean Corp Commercial Cleaning Services Sydney NSW - Professional Cleaning Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    description:
      "Learn about Sydney NSW's trusted commercial cleaning company with years of experience providing professional cleaning services to local businesses.",
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
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'LocalBusiness',
              '@id': 'https://www.procleancorp.com.au/#organization',
              name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              alternateName: 'Pro Clean Corp',
              description:
                'Professional commercial cleaning services in Sydney NSW. Specializing in office cleaning, industrial cleaning, and commercial property maintenance for local businesses.',
              url: 'https://www.procleancorp.com.au',
              logo: 'https://www.procleancorp.com.au/meta.png',
              image: 'https://www.procleancorp.com.au/meta.png',
              telephone: '1300 494 983',
              email: 'hello@procleancorp.com.au',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '77 Garfield Street,',
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
                    '@id': 'https://en.wikipedia.org/wiki/New_South_Wales',
                  },
                },
              ],
              serviceType: [
                'Commercial Cleaning Services',
                'Office Cleaning',
                'Industrial Cleaning',
                'Commercial Property Maintenance',
                'Janitorial Services',
                'Workplace Sanitization',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Commercial Cleaning Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Office Cleaning',
                      description:
                        'Professional office cleaning services including desk cleaning, floor maintenance, and sanitization.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Industrial Cleaning',
                      description:
                        'Specialized industrial cleaning for warehouses, factories, and manufacturing facilities.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Commercial Property Maintenance',
                      description: 'Comprehensive commercial property cleaning and maintenance services.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Janitorial Services',
                      description: 'Complete janitorial services for commercial properties and office buildings.',
                    },
                  },
                ],
              },
              founder: {
                '@type': 'Person',
                name: 'Pro Clean Corp Founder',
              },
              foundingDate: '2015',
              numberOfEmployees: '10-50',
              knowsAbout: [
                'Commercial Cleaning',
                'Office Cleaning',
                'Industrial Cleaning',
                'Sanitization',
                'Property Maintenance',
                'Eco-friendly Cleaning',
              ],
              memberOf: {
                '@type': 'Organization',
                name: 'Commercial Cleaning Industry Association',
              },
              hasCredential: [
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'Commercial Cleaning Certification',
                },
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'Workplace Safety Certification',
                },
              ],
              slogan: 'Let Us Handle The Mess, While You Focus On Success',
              priceRange: '$$',
              paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
              currenciesAccepted: 'AUD',
              openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-16:00',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '150',
                bestRating: '5',
                worstRating: '1',
              },
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
                  name: 'About',
                  item: 'https://www.procleancorp.com.au/about',
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
