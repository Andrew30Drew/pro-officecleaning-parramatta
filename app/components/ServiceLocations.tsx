'use client';
import { useState } from 'react';
import { alphabet, locations, Location } from '../lib/locations-constant';
import Link from 'next/link';
import { Building2, CheckCircle, Leaf, ArrowRight, MapPin } from 'lucide-react';

export default function ServiceLocations() {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');

  const filteredLocations = locations.filter((loc) => loc.name.toUpperCase().startsWith(selectedLetter));

  // Generate JSON-LD structured data
  const generateJSONLD = () => {
    const serviceAreas = locations.map((location) => ({
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        addressLocality: location.name.replace(' NSW', ''),
        addressRegion: 'NSW',
        addressCountry: 'AU',
        postalCode: location.postcode,
      },
      geoRadius: '5000',
    }));

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.procleancorp.com.au/#business',
      name: 'Pro Clean Corp',
      description:
        'Professional cleaning services across Sydney NSW including childcare cleaning, commercial cleaning, office cleaning and medical facility cleaning.',
      url: 'https://www.procleancorp.com.au/',
      telephone: '1300-494-983',
      email: 'hello@procleancorp.com.au',
      foundingDate: '2015',
      logo: 'https://www.procleancorp.com.au/images/logo.png',
      image: 'https://www.procleancorp.com.au/meta.png',
      priceRange: '$',
      currenciesAccepted: 'AUD',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      openingHours: 'Mo-Su 06:00-22:00',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-33.8688',
        longitude: '151.2093',
      },
      areaServed: serviceAreas,
      serviceType: [
        'Childcare Cleaning',
        'Commercial Cleaning',
        'Office Cleaning',
        'Medical Facility Cleaning',
        'Carpet Cleaning',
        'Deep Cleaning',
        'Sanitization Services',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Cleaning Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Childcare Cleaning Services',
              description:
                'Professional cleaning services for childcare centers, daycare facilities and early learning centers across Sydney NSW.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Cleaning Services',
              description:
                'Comprehensive commercial cleaning services for offices, retail spaces and business facilities throughout Sydney.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Office Cleaning Services',
              description:
                'Professional office cleaning services including daily maintenance, deep cleaning and sanitization.',
            },
          },
        ],
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Sydney Business Owner',
          },
          reviewBody:
            'Excellent cleaning service across multiple Sydney locations. Professional, reliable and thorough.',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
      },
    };

    return JSON.stringify(structuredData);
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJSONLD() }} />

      <section className="py-6 md:py-4 lg:py-24  flex justify-center">
        <div className="w-full max-w-[1440px] px-5 md:px-10 lg:px-20">
          {/* SEO-Optimized Header */}
          <header className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-greenprimary mb-4">
              Professional Cleaning Services Across Sydney NSW
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-darkblue mb-6">
              Expert Childcare, Commercial & Office Cleaning Solutions
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pro Clean Corp provides trusted professional cleaning services across all Sydney regions. Our experienced
              team delivers comprehensive childcare cleaning, commercial cleaning, office cleaning, and medical facility
              cleaning services to businesses and organizations throughout New South Wales.
            </p>
          </header>

          {/* SEO-Enhanced Alphabet Filter */}
          <nav aria-label="Filter locations by alphabet" className="mb-10">
            <h3 className="text-lg font-semibold text-center mb-6 text-darkblue">
              Browse Cleaning Services by Location
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`font-medium transition-all duration-300 rounded-full w-10 h-10 md:w-12 md:h-12 text-sm md:text-base ${
                    selectedLetter === letter
                      ? 'text-white font-bold bg-greenprimary shadow-lg transform scale-105'
                      : 'hover:text-greenprimary hover:bg-gray-100 bg-slate-100 text-gray-700'
                  }`}
                  aria-label={`Show cleaning services in locations starting with ${letter}`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </nav>

          {/* Location Results */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-darkblue mb-6 text-center">
              Professional Cleaning Services in "{selectedLetter}" Areas
            </h3>

            {filteredLocations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredLocations.map((loc: Location) => {
                  const suburb = loc.name.replace(' NSW', '');
                  const slug = suburb.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                  const regionServices: Record<string, string[]> = {
                    'Sydney CBD': ['✓ Office & Corporate Cleaning', '✓ Commercial Cleaning', '✓ High-Rise Window Cleaning'],
                    'Sydney Eastern Suburbs': ['✓ Office Cleaning', '✓ Medical Centre Cleaning', '✓ Strata Cleaning'],
                    'Sydney Inner West': ['✓ Commercial Cleaning', '✓ Restaurant & Café Cleaning', '✓ Strata Cleaning'],
                    'Sydney Western Suburbs': ['✓ Warehouse & Industrial Cleaning', '✓ Commercial Cleaning', '✓ Childcare Cleaning'],
                    'Sydney Sutherland Shire': ['✓ Office Cleaning', '✓ Strata Cleaning', '✓ End of Lease Cleaning'],
                    'Northwest Sydney': ['✓ Childcare Cleaning', '✓ Office Cleaning', '✓ Medical Cleaning'],
                    'Sydney Northern Beaches': ['✓ Commercial Cleaning', '✓ Strata Cleaning', '✓ End of Lease Cleaning'],
                    'Sydney North Shore': ['✓ Office & Corporate Cleaning', '✓ Medical Centre Cleaning', '✓ Childcare Cleaning'],
                  };
                  const services = regionServices[loc.region] ?? ['✓ Commercial Cleaning', '✓ Office Cleaning', '✓ Strata Cleaning'];
                  return (
                  <Link
                    key={loc.name}
                    href={`/commercial-cleaning/${slug}`}
                    aria-label={`Commercial cleaning services in ${suburb} NSW ${loc.postcode}`}
                  >
                  <article
                    className="bg-white border border-gray-200 hover:border-greenprimary p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 h-full cursor-pointer"
                  >
                    <header>
                      <h4 className="text-lg font-semibold text-darkblue group-hover:text-greenprimary transition-colors">
                        Commercial Cleaning {suburb}
                      </h4>
                    </header>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">NSW {loc.postcode}</span>
                    </div>

                    <div className="text-greenprimary font-medium text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {loc.region}
                    </div>

                    <div className="mt-2 text-sm text-gray-600 space-y-1">
                      {services.map((s) => <p key={s}>{s}</p>)}
                    </div>

                    <footer className="mt-auto pt-3">
                      <span className="inline-flex items-center text-sm font-medium text-greenprimary hover:text-darkblue transition-colors">
                        Cleaning Services in {suburb}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </footer>
                  </article>
                  </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No locations found starting with "{selectedLetter}".</p>
                <p className="text-gray-400 text-sm mt-2">Try selecting a different letter above.</p>
              </div>
            )}
          </div>

          {/* SEO Footer Content */}
          <footer className="bg-gray-50 rounded-xl p-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-darkblue mb-4">
                Why Choose Pro Clean Corp for Your Sydney Cleaning Needs?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="bg-greenprimary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-darkblue mb-2">Local Sydney Experts</h4>
                  <p className="text-sm text-gray-600">
                    Serving all Sydney regions since 2016 with local knowledge and reliable service.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-greenprimary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-darkblue mb-2">Fully Licensed & Insured</h4>
                  <p className="text-sm text-gray-600">
                    Professional cleaning team with comprehensive insurance and certifications.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-greenprimary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-darkblue mb-2">Eco-Friendly Products</h4>
                  <p className="text-sm text-gray-600">
                    Safe, non-toxic cleaning solutions perfect for childcare and commercial spaces.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact-us?source=service-locations&section=footer-cta"
                  className="inline-flex items-center bg-greenprimary text-white px-8 py-3 rounded-full font-semibold hover:bg-darkblue transition-colors duration-300"
                >
                  Get Your Free Cleaning Quote Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
