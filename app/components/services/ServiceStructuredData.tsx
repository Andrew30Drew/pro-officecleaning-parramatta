interface ServiceStructuredDataProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  serviceType: string;
  price?: string;
  additionalServices?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export default function ServiceStructuredData({
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceType,
  price = '$$',
  additionalServices = [],
  faqs = []
}: ServiceStructuredDataProps) {
  const baseUrl = 'https://www.procleancorp.com.au';

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}${serviceUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    url: `${baseUrl}${serviceUrl}`,
    serviceType: serviceType,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#organization`,
      name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
      telephone: '1300494983',
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
        latitude: -33.8688,
        longitude: 151.2093,
      },
      areaServed: {
        '@type': 'City',
        name: 'Sydney NSW',
        containedInPlace: {
          '@type': 'State',
          name: 'New South Wales',
          containedInPlace: {
            '@type': 'Country',
            name: 'Australia'
          }
        },
      },
      openingHours: [
        'Mo-Fr 07:00-18:00',
        'Sa 08:00-16:00',
        'Su 08:00-14:00'
      ],
      priceRange: price,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1200',
        bestRating: '5',
        worstRating: '1'
      }
    },
    category: serviceType,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'AUD',
      priceRange: price,
      validFrom: new Date().toISOString().split('T')[0],
      seller: {
        '@id': `${baseUrl}/#organization`
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} Services`,
      itemListElement: additionalServices.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@id': `${baseUrl}/#organization`
          }
        }
      }))
    }
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${baseUrl}/services`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: serviceName,
        item: `${baseUrl}${serviceUrl}`
      }
    ]
  };

  const faqData = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceData, breadcrumbData]),
        }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
      )}
    </>
  );
}