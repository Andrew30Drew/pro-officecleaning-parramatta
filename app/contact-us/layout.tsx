import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Pro Clean Corp Commercial Cleaning Services Sydney NSW - Get Free Quote',
  description:
    'Contact Pro Clean Corp for professional commercial cleaning services in Sydney NSW. Get free quotes for office cleaning, industrial cleaning, and commercial property maintenance. Call today for reliable cleaning solutions.',
  keywords: [
    'contact Pro Clean Corp Sydney NSW',
    'commercial cleaning quotes Sydney NSW',
    'free cleaning estimate Sydney NSW',
    'office cleaning contact Sydney NSW',
    'commercial cleaners phone Sydney NSW',
    'cleaning services inquiry Sydney NSW',
    'Pro Clean Corp contact details',
    'commercial cleaning consultation Sydney NSW',
    'cleaning company contact Sydney NSW',
    'professional cleaners contact Sydney NSW',
    'business cleaning quotes Sydney NSW',
    'industrial cleaning contact Sydney NSW',
    'cleaning services phone number Sydney NSW',
    'commercial cleaning email Sydney NSW',
    'cleaning company address Sydney NSW',
    'office cleaning inquiry Sydney NSW',
    'cleaning services consultation Sydney NSW',
    'commercial property cleaning contact Sydney NSW',
    'janitorial services contact Sydney NSW',
    'cleaning company enquiry Sydney NSW',
    'professional cleaning quote Sydney NSW',
    'commercial cleaning booking Sydney NSW',
    'cleaning services appointment Sydney NSW',
    'office maintenance contact Sydney NSW',
    'workplace cleaning inquiry Sydney NSW',
    'retail cleaning contact Sydney NSW',
    'warehouse cleaning quote Sydney NSW',
    'medical facility cleaning contact Sydney NSW',
    'restaurant cleaning inquiry Sydney NSW',
    'gym cleaning services contact Sydney NSW',
  ],
  authors: [{ name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW' }],
  creator: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  publisher: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  category: 'Commercial Cleaning Services',
  metadataBase: new URL('https://www.procleancorp.com.au'),
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/contact-us',
    title: 'Contact Pro Clean Corp Commercial Cleaning Services Sydney NSW - Get Free Quote',
    description:
      'Contact Pro Clean Corp for professional commercial cleaning services in Sydney NSW. Get free quotes for office cleaning, industrial cleaning, and commercial property maintenance.',
    siteName: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Contact Pro Clean Corp Commercial Cleaning Services Sydney NSW - Professional Cleaners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    description:
      'Contact Pro Clean Corp for professional commercial cleaning services in Sydney NSW. Get free quotes for office cleaning, industrial cleaning, and commercial property maintenance.',
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
            '@type': 'ContactPage',
            name: 'Contact Pro Clean Corp Commercial Cleaning Services Sydney NSW',
            description:
              'Contact Pro Clean Corp for professional commercial cleaning services in Sydney NSW. Get free quotes and consultations for all your commercial cleaning needs.',
            url: 'https://www.procleancorp.com.au/contact-us',
            mainEntity: {
              '@type': 'LocalBusiness',
              '@id': 'https://www.procleancorp.com.au/#organization',
              name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
              alternateName: 'Pro Clean Corp',
              description:
                'Professional commercial cleaning services in Sydney NSW. Contact us for office cleaning, industrial cleaning, and commercial property maintenance solutions.',
              url: 'https://www.procleancorp.com.au',
              logo: 'https://www.procleancorp.com.au/meta.png',
              image: 'https://www.procleancorp.com.au/meta.png',
              telephone: '1300 494 983',
              email: 'hello@procleancorp.com.au',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '1300 494 983',
                  contactType: 'customer service',
                  availableLanguage: 'English',
                  areaServed: 'AU',
                  hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '07:00',
                    closes: '18:00',
                  },
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '1300 494 983',
                  contactType: 'emergency service',
                  availableLanguage: 'English',
                  areaServed: 'AU',
                  hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '00:00',
                    closes: '23:59',
                  },
                },
                {
                  '@type': 'ContactPoint',
                  email: 'hello@procleancorp.com.au',
                  contactType: 'customer service',
                  availableLanguage: 'English',
                  areaServed: 'AU',
                },
                {
                  '@type': 'ContactPoint',
                  email: 'quotes@procleancorp.com.au',
                  contactType: 'sales',
                  availableLanguage: 'English',
                  areaServed: 'AU',
                },
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: '77 Garfield Street',
                addressLocality: 'Wentworthville',
                addressRegion: 'NSW',
                postalCode: '2145',
                addressCountry: 'AU',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -33.807,
                longitude: 150.9684,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Wentworthville',
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
                'Emergency Cleaning Services',
              ],
              priceRange: '$$',
              paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'Invoice'],
              currenciesAccepted: 'AUD',
              openingHours: ['Mo-Fr 07:00-18:00', 'Sa 08:00-16:00'],
              hasMap: 'https://maps.google.com/?q=77+Garfield+Street,+Wentworthville+NSW+2145',
              slogan: 'Let Us Handle The Mess, While You Focus On Success',
            },
            potentialAction: [
              {
                '@type': 'CommunicateAction',
                name: 'Call for Free Quote',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'tel:1300494983',
                  actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
                },
              },
              {
                '@type': 'CommunicateAction',
                name: 'Email Inquiry',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'mailto:hello@procleancorp.com.au',
                  actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
                },
              },
              {
                '@type': 'ConsumeAction',
                name: 'Request Quote Form',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.procleancorp.com.au/contact-us#quote-form',
                  actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
                },
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
                  name: 'Contact Us',
                  item: 'https://www.procleancorp.com.au/contact-us',
                },
              ],
            },
            offers: {
              '@type': 'Offer',
              name: 'Free Commercial Cleaning Quote',
              description: 'Get a free, no-obligation quote for commercial cleaning services in Sydney NSW',
              price: '0',
              priceCurrency: 'AUD',
              availability: 'https://schema.org/InStock',
              validFrom: '2025-01-01',
              seller: {
                '@id': 'https://www.procleancorp.com.au/#organization',
              },
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
