interface StructuredDataProps {
  type?: 'homepage' | 'services' | 'about' | 'contact';
}

export default function StructuredData({ type = 'homepage' }: StructuredDataProps) {
  const baseOrganizationData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.procleancorp.com.au/#organization',
    name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    alternateName: 'Pro Clean Corp',
    description: 'Premier commercial cleaning services in Sydney NSW specializing in office cleaning, industrial cleaning, medical centre cleaning, and warehouse cleaning. Licensed, insured professionals with 9+ years experience serving over 1,200 businesses.',
    url: 'https://www.procleancorp.com.au',
    sameAs: [
      'https://share.google/rVLemiF0puaBnNCAf',
      'https://www.facebook.com/profile.php?id=61557847062414',
      'https://www.instagram.com/procleancorps/',
      'https://www.linkedin.com/company/pro-clean-corp/',
      'https://x.com/Pro_Clean_Corp',
      'https://www.youtube.com/@ProCleanCorp',
    ],
    logo: 'https://www.procleancorp.com.au/meta.png',
    image: 'https://www.procleancorp.com.au/meta.png',
    telephone: '1300494983',
    email: 'hello@procleancorp.com.au',
    foundingDate: '2015',
    slogan: 'Professional Commercial Cleaning Services Sydney NSW',
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
    areaServed: [
      { '@type': 'City', name: 'Sydney NSW' },
      { '@type': 'AdministrativeArea', name: 'Parramatta' },
      { '@type': 'AdministrativeArea', name: 'Blacktown' },
      { '@type': 'AdministrativeArea', name: 'Penrith' },
      { '@type': 'AdministrativeArea', name: 'Liverpool' },
      { '@type': 'AdministrativeArea', name: 'Campbelltown' },
      { '@type': 'AdministrativeArea', name: 'Auburn' },
      { '@type': 'AdministrativeArea', name: 'Wetherill Park' },
      { '@type': 'AdministrativeArea', name: 'Silverwater' },
      { '@type': 'AdministrativeArea', name: 'Macquarie Park' },
      { '@type': 'AdministrativeArea', name: 'North Sydney' },
      { '@type': 'AdministrativeArea', name: 'Chatswood' },
      { '@type': 'AdministrativeArea', name: 'Hornsby' },
      { '@type': 'AdministrativeArea', name: 'Manly' },
      { '@type': 'AdministrativeArea', name: 'Dee Why' },
      { '@type': 'AdministrativeArea', name: 'Brookvale' },
      { '@type': 'AdministrativeArea', name: 'Frenchs Forest' },
      { '@type': 'AdministrativeArea', name: 'Lane Cove' },
      { '@type': 'AdministrativeArea', name: 'Artarmon' },
      { '@type': 'AdministrativeArea', name: 'Cremorne' },
      { '@type': 'AdministrativeArea', name: 'Mosman' },
      { '@type': 'AdministrativeArea', name: 'Alexandria' },
      { '@type': 'AdministrativeArea', name: 'Mascot' },
      { '@type': 'AdministrativeArea', name: 'Botany' },
      { '@type': 'AdministrativeArea', name: 'Rosebery' },
      { '@type': 'AdministrativeArea', name: 'Zetland' },
      { '@type': 'AdministrativeArea', name: 'Waterloo' },
      { '@type': 'AdministrativeArea', name: 'Redfern' },
      { '@type': 'AdministrativeArea', name: 'Surry Hills' },
      { '@type': 'AdministrativeArea', name: 'Darlinghurst' },
      { '@type': 'AdministrativeArea', name: 'Pyrmont' },
      { '@type': 'AdministrativeArea', name: 'Ultimo' },
      { '@type': 'AdministrativeArea', name: 'Chippendale' },
      { '@type': 'AdministrativeArea', name: 'Newtown' },
      { '@type': 'AdministrativeArea', name: 'Marrickville' },
      { '@type': 'AdministrativeArea', name: 'Leichhardt' },
      { '@type': 'AdministrativeArea', name: 'Balmain' },
      { '@type': 'AdministrativeArea', name: 'Glebe' },
      { '@type': 'AdministrativeArea', name: 'Drummoyne' },
      { '@type': 'AdministrativeArea', name: 'Concord' },
      { '@type': 'AdministrativeArea', name: 'Five Dock' },
      { '@type': 'AdministrativeArea', name: 'Burwood' },
      { '@type': 'AdministrativeArea', name: 'Strathfield' },
      { '@type': 'AdministrativeArea', name: 'Earlwood' },
      { '@type': 'AdministrativeArea', name: 'Arncliffe' },
      { '@type': 'AdministrativeArea', name: 'Kogarah' },
      { '@type': 'AdministrativeArea', name: 'Hurstville' },
      { '@type': 'AdministrativeArea', name: 'Penshurst' },
      { '@type': 'AdministrativeArea', name: 'Mortdale' },
      { '@type': 'AdministrativeArea', name: 'Oatley' },
      { '@type': 'AdministrativeArea', name: 'Revesby' },
      { '@type': 'AdministrativeArea', name: 'Bankstown' },
      { '@type': 'AdministrativeArea', name: 'Fairfield' },
      { '@type': 'AdministrativeArea', name: 'Cronulla' },
      { '@type': 'AdministrativeArea', name: 'Miranda' },
      { '@type': 'AdministrativeArea', name: 'Caringbah' },
      { '@type': 'AdministrativeArea', name: 'Sutherland' },
      { '@type': 'AdministrativeArea', name: 'Engadine' },
      { '@type': 'AdministrativeArea', name: 'Menai' },
      { '@type': 'AdministrativeArea', name: 'Castle Hill' },
      { '@type': 'AdministrativeArea', name: 'Norwest' },
      { '@type': 'AdministrativeArea', name: 'Hills District' },
      { '@type': 'AdministrativeArea', name: 'Carlingford' },
      { '@type': 'AdministrativeArea', name: 'Seven Hills' },
      { '@type': 'AdministrativeArea', name: 'Rydalmere' },
      { '@type': 'AdministrativeArea', name: 'Westmead' },
      { '@type': 'AdministrativeArea', name: 'Granville' },
      { '@type': 'AdministrativeArea', name: 'Merrylands' },
      { '@type': 'AdministrativeArea', name: 'Arndell Park' },
      { '@type': 'AdministrativeArea', name: 'Smithfield' },
      { '@type': 'AdministrativeArea', name: 'Prospect' },
      { '@type': 'AdministrativeArea', name: 'Bondi' },
      { '@type': 'AdministrativeArea', name: 'Coogee' },
      { '@type': 'AdministrativeArea', name: 'Maroubra' },
      { '@type': 'AdministrativeArea', name: 'Pagewood' },
      { '@type': 'AdministrativeArea', name: 'Kingsgrove' },
      { '@type': 'AdministrativeArea', name: 'Dulwich Hill' },
      { '@type': 'AdministrativeArea', name: 'Bexley' },
    ],
    serviceType: [
      'Commercial Cleaning Services',
      'Office Cleaning Sydney NSW',
      'Industrial Cleaning Sydney NSW',
      'Medical Centre Cleaning',
      'Warehouse Cleaning',
      'Strata Cleaning',
      'Retail Cleaning',
      'Gym Cleaning Services',
      'Restaurant Cleaning'
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Insurance Provider',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1200',
      bestRating: '5',
      worstRating: '1'
    },
    openingHours: [
      'Mo-Fr 07:00-18:00',
      'Sa 08:00-16:00',
      'Su 08:00-14:00'
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'AUD'
  };

  const servicesOffered = [
    {
      '@type': 'Service',
      name: 'Commercial Office Cleaning Sydney NSW',
      description: 'Professional office cleaning services including desk cleaning, floor maintenance, bathroom sanitization, and window cleaning for offices across Sydney NSW.',
      provider: {
        '@id': 'https://www.procleancorp.com.au/#organization'
      },
      areaServed: {
        '@type': 'City',
        name: 'Sydney NSW'
      }
    },
    {
      '@type': 'Service',
      name: 'Industrial Cleaning Sydney NSW',
      description: 'Heavy-duty industrial cleaning services for warehouses, factories, and industrial facilities in Sydney NSW using specialized equipment and techniques.',
      provider: {
        '@id': 'https://www.procleancorp.com.au/#organization'
      },
      areaServed: {
        '@type': 'City',
        name: 'Sydney NSW'
      }
    },
    {
      '@type': 'Service',
      name: 'Medical Centre Cleaning Sydney NSW',
      description: 'Specialized medical facility cleaning services ensuring compliance with health standards and infection control protocols for medical centres in Sydney NSW.',
      provider: {
        '@id': 'https://www.procleancorp.com.au/#organization'
      },
      areaServed: {
        '@type': 'City',
        name: 'Sydney NSW'
      }
    }
  ];

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.procleancorp.com.au/#website',
    url: 'https://www.procleancorp.com.au',
    name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    description: 'Premier commercial cleaning services in Sydney NSW. Professional office cleaning, industrial cleaning, and commercial property maintenance.',
    publisher: {
      '@id': 'https://www.procleancorp.com.au/#organization'
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.procleancorp.com.au/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    ]
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.procleancorp.com.au'
      }
    ]
  };

  if (type === 'homepage') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              baseOrganizationData,
              websiteData,
              breadcrumbData,
              ...servicesOffered
            ]),
          }}
        />
      </>
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseOrganizationData),
      }}
    />
  );
}