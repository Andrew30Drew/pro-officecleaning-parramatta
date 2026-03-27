import { Metadata } from 'next';
import Link from 'next/link';
import { locations } from '@/app/lib/locations-constant';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Sydney NSW | All Locations | Pro Clean Corp',
  description: 'Pro Clean Corp provides professional commercial cleaning across all Sydney suburbs. Browse 650+ locations and find your local commercial cleaning service in NSW.',
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning',
  },
  openGraph: {
    title: 'Commercial Cleaning Sydney NSW | All Locations | Pro Clean Corp',
    description: 'Professional commercial cleaning services across all Sydney suburbs — offices, warehouses, medical centres, childcare facilities and more.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Sydney NSW — Pro Clean Corp' }],
  },
  robots: { index: true, follow: true },
};

function toSlug(name: string) {
  return name
    .replace(' NSW', '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const regionDescriptions: Record<string, string> = {
  'Sydney CBD': 'High-rise offices, corporate towers and premium retail in the heart of Sydney.',
  'Sydney Eastern Suburbs': 'Medical centres, creative studios, warehouses and offices from Alexandria to Bondi.',
  'Sydney Inner West': 'Cafés, restaurants, strata buildings and professional offices across Newtown, Marrickville and beyond.',
  'Sydney Western Suburbs': 'Warehouses, childcare centres, factories and commercial offices across Parramatta, Blacktown and surrounds.',
  'Sydney Sutherland Shire': 'Offices, medical practices, retail and strata cleaning from Cronulla to Engadine.',
  'Northwest Sydney': 'Corporate campuses, childcare centres and medical suites from Castle Hill to Norwest.',
  'Sydney Northern Beaches': 'Boutique retail, hospitality, professional services and strata from Manly to Avalon.',
  'Sydney North Shore': 'Premium corporate offices, medical suites and childcare cleaning from Chatswood to Pymble.',
};

export default function CommercialCleaningHubPage() {
  const byRegion = locations.reduce<Record<string, typeof locations>>((acc, loc) => {
    if (!acc[loc.region]) acc[loc.region] = [];
    acc[loc.region].push(loc);
    return acc;
  }, {});

  const byLetter = alphabet.reduce<Record<string, typeof locations>>((acc, letter) => {
    const matches = locations.filter((loc) => loc.name.startsWith(letter));
    if (matches.length) acc[letter] = matches;
    return acc;
  }, {});

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.procleancorp.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Commercial Cleaning', item: 'https://www.procleancorp.com.au/commercial-cleaning' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-greenprimary transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-greenprimary font-medium">Commercial Cleaning</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-darkblue leading-tight mb-6">
              Commercial Cleaning Services Across Sydney NSW
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Pro Clean Corp delivers professional commercial cleaning to over 650 suburbs across Greater Sydney NSW.
              Browse by region or location below to find your local commercial cleaning service — offices, warehouses,
              medical centres, childcare facilities, strata buildings and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white rounded-full px-8 py-4 font-semibold transition-colors duration-300 shadow-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:1300494983"
                className="inline-flex items-center justify-center border-2 border-greenprimary text-greenprimary hover:bg-greenprimary hover:text-white rounded-full px-8 py-4 font-semibold transition-colors duration-300"
              >
                Call 1300 494 983
              </a>
            </div>
          </div>
        </section>

        {/* By Region */}
        <section className="py-14 lg:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-darkblue text-center mb-12">
              Commercial Cleaning by Sydney Region
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.entries(byRegion).map(([region, locs]) => (
                <div key={region} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-base font-bold text-darkblue mb-2">{region}</h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    {regionDescriptions[region] ?? `${locs.length} locations across this region.`}
                  </p>
                  <ul className="space-y-1">
                    {locs.slice(0, 6).map((loc) => {
                      const suburb = loc.name.replace(' NSW', '');
                      return (
                        <li key={loc.name}>
                          <Link
                            href={`/commercial-cleaning/${toSlug(loc.name)}`}
                            className="text-sm text-greenprimary hover:text-darkblue transition-colors"
                          >
                            {suburb}
                          </Link>
                        </li>
                      );
                    })}
                    {locs.length > 6 && (
                      <li className="text-xs text-gray-400 pt-1">+{locs.length - 6} more locations</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full A–Z directory */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-darkblue text-center mb-4">
              All Commercial Cleaning Locations A–Z
            </h2>
            <p className="text-gray-500 text-center mb-12">
              {locations.length} suburbs across Greater Sydney NSW
            </p>

            {/* Jump links */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {Object.keys(byLetter).map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-greenprimary hover:text-white text-sm font-semibold text-gray-700 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>

            {/* Location grid per letter */}
            <div className="space-y-10">
              {Object.entries(byLetter).map(([letter, locs]) => (
                <div key={letter} id={`letter-${letter}`}>
                  <h3 className="text-xl font-bold text-greenprimary border-b border-gray-200 pb-2 mb-4">{letter}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {locs.map((loc) => {
                      const suburb = loc.name.replace(' NSW', '');
                      return (
                        <Link
                          key={loc.name}
                          href={`/commercial-cleaning/${toSlug(loc.name)}`}
                          className="text-sm text-gray-700 hover:text-greenprimary transition-colors py-1"
                        >
                          {suburb}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-20 bg-darkblue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Can&apos;t Find Your Suburb? We Still Service It.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Pro Clean Corp services all of Greater Sydney NSW. Call{' '}
              <a href="tel:1300494983" className="underline">1300 494 983</a>{' '}
              or get a free quote online and we&apos;ll come to you.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white rounded-full px-8 py-4 font-semibold transition-colors duration-300 shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
