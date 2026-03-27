/**
 * Generates page.tsx for each of the 78 existing -nsw static folders.
 * Each page imports StaticLocationPage and passes suburb/postcode/region/slug.
 * Run: node scripts/generate-nsw-pages.mjs
 */

import fs from 'fs';
import path from 'path';

// Map folder slug -> { suburb, postcode, region }
const locations = [
  { slug: 'alexandria-nsw', suburb: 'Alexandria', postcode: '2015', region: 'Sydney Eastern Suburbs' },
  { slug: 'annandale-nsw', suburb: 'Annandale', postcode: '2038', region: 'Sydney Inner West' },
  { slug: 'arncliffe-nsw', suburb: 'Arncliffe', postcode: '2205', region: 'Sydney Inner West' },
  { slug: 'arndell-park-nsw', suburb: 'Arndell Park', postcode: '2148', region: 'Sydney Western Suburbs' },
  { slug: 'artarmon-nsw', suburb: 'Artarmon', postcode: '2064', region: 'Northwest Sydney' },
  { slug: 'ashfield-nsw', suburb: 'Ashfield', postcode: '2131', region: 'Sydney Inner West' },
  { slug: 'auburn-nsw', suburb: 'Auburn', postcode: '2144', region: 'Sydney Western Suburbs' },
  { slug: 'avalon-nsw', suburb: 'Avalon', postcode: '2107', region: 'Northwest Sydney' },
  { slug: 'badgerys-creek-nsw', suburb: 'Badgerys Creek', postcode: '2555', region: 'Sydney Western Suburbs' },
  { slug: 'balgowlah-nsw', suburb: 'Balgowlah', postcode: '2093', region: 'Northwest Sydney' },
  { slug: 'balmain-nsw', suburb: 'Balmain', postcode: '2041', region: 'Sydney Inner West' },
  { slug: 'banksmeadow-nsw', suburb: 'Banksmeadow', postcode: '2019', region: 'Sydney Eastern Suburbs' },
  { slug: 'bankstown-nsw', suburb: 'Bankstown', postcode: '2200', region: 'Sydney Western Suburbs' },
  { slug: 'barangaroo-nsw', suburb: 'Barangaroo', postcode: '2000', region: 'Sydney CBD' },
  { slug: 'bardwell-park-nsw', suburb: 'Bardwell Park', postcode: '2207', region: 'Sydney Inner West' },
  { slug: 'bass-hill-nsw', suburb: 'Bass Hill', postcode: '2197', region: 'Sydney Western Suburbs' },
  { slug: 'baulkham-hills-nsw', suburb: 'Baulkham Hills', postcode: '2153', region: 'Northwest Sydney' },
  { slug: 'bayview-nsw', suburb: 'Bayview', postcode: '2104', region: 'Northwest Sydney' },
  { slug: 'beaconsfield-nsw', suburb: 'Beaconsfield', postcode: '2015', region: 'Sydney Eastern Suburbs' },
  { slug: 'beecroft-nsw', suburb: 'Beecroft', postcode: '2119', region: 'Northwest Sydney' },
  { slug: 'belfield-nsw', suburb: 'Belfield', postcode: '2191', region: 'Sydney Inner West' },
  { slug: 'bella-vista-nsw', suburb: 'Bella Vista', postcode: '2153', region: 'Northwest Sydney' },
  { slug: 'bellevue-hill-nsw', suburb: 'Bellevue Hill', postcode: '2023', region: 'Sydney Eastern Suburbs' },
  { slug: 'belmore-nsw', suburb: 'Belmore', postcode: '2192', region: 'Sydney Inner West' },
  { slug: 'belrose-nsw', suburb: 'Belrose', postcode: '2085', region: 'Northwest Sydney' },
  { slug: 'berala-nsw', suburb: 'Berala', postcode: '2141', region: 'Sydney Western Suburbs' },
  { slug: 'berowra-waters-nsw', suburb: 'Berowra Waters', postcode: '2082', region: 'Northwest Sydney' },
  { slug: 'beverly-hills-nsw', suburb: 'Beverly Hills', postcode: '2209', region: 'Sydney Inner West' },
  { slug: 'bexley-nsw', suburb: 'Bexley', postcode: '2207', region: 'Sydney Inner West' },
  { slug: 'blacktown-nsw', suburb: 'Blacktown', postcode: '2148', region: 'Sydney Western Suburbs' },
  { slug: 'blakehurst-nsw', suburb: 'Blakehurst', postcode: '2221', region: 'Sydney Sutherland Shire' },
  { slug: 'bondi-junction-nsw', suburb: 'Bondi Junction', postcode: '2022', region: 'Sydney Eastern Suburbs' },
  { slug: 'bondi-nsw', suburb: 'Bondi', postcode: '2026', region: 'Sydney Eastern Suburbs' },
  { slug: 'bonnyrigg-nsw', suburb: 'Bonnyrigg', postcode: '2177', region: 'Sydney Western Suburbs' },
  { slug: 'bossley-park-nsw', suburb: 'Bossley Park', postcode: '2176', region: 'Sydney Western Suburbs' },
  { slug: 'botany-nsw', suburb: 'Botany', postcode: '2019', region: 'Sydney Eastern Suburbs' },
  { slug: 'box-hill-nsw', suburb: 'Box Hill', postcode: '2765', region: 'Northwest Sydney' },
  { slug: 'breakfast-point-nsw', suburb: 'Breakfast Point', postcode: '2137', region: 'Sydney Inner West' },
  { slug: 'brighton-le-sands-nsw', suburb: 'Brighton-Le-Sands', postcode: '2216', region: 'Sydney Inner West' },
  { slug: 'bronte-nsw', suburb: 'Bronte', postcode: '2024', region: 'Sydney Eastern Suburbs' },
  { slug: 'brookvale-nsw', suburb: 'Brookvale', postcode: '2100', region: 'Sydney Northern Beaches' },
  { slug: 'burwood-nsw', suburb: 'Burwood', postcode: '2134', region: 'Sydney Inner West' },
  { slug: 'cabarita-nsw', suburb: 'Cabarita', postcode: '2137', region: 'Sydney Inner West' },
  { slug: 'cabramatta-west-nsw', suburb: 'Cabramatta West', postcode: '2166', region: 'Sydney Western Suburbs' },
  { slug: 'camden-nsw', suburb: 'Camden', postcode: '2570', region: 'Sydney Western Suburbs' },
  { slug: 'camellia-nsw', suburb: 'Camellia', postcode: '2142', region: 'Sydney Western Suburbs' },
  { slug: 'cammeray-nsw', suburb: 'Cammeray', postcode: '2062', region: 'Sydney North Shore' },
  { slug: 'campbelltown-nsw', suburb: 'Campbelltown', postcode: '2560', region: 'Sydney Western Suburbs' },
  { slug: 'camperdown-nsw', suburb: 'Camperdown', postcode: '2050', region: 'Sydney Inner West' },
  { slug: 'campsie-nsw', suburb: 'Campsie', postcode: '2194', region: 'Sydney Inner West' },
  { slug: 'canada-bay-nsw', suburb: 'Canada Bay', postcode: '2046', region: 'Sydney Inner West' },
  { slug: 'canley-vale-nsw', suburb: 'Canley Vale', postcode: '2166', region: 'Sydney Western Suburbs' },
  { slug: 'canterbury-nsw', suburb: 'Canterbury', postcode: '2193', region: 'Sydney Inner West' },
  { slug: 'caringbah-nsw', suburb: 'Caringbah', postcode: '2229', region: 'Sydney Sutherland Shire' },
  { slug: 'carlingford-nsw', suburb: 'Carlingford', postcode: '2118', region: 'Northwest Sydney' },
  { slug: 'carlton-nsw', suburb: 'Carlton', postcode: '2218', region: 'Sydney Inner West' },
  { slug: 'carramar-nsw', suburb: 'Carramar', postcode: '2163', region: 'Sydney Western Suburbs' },
  { slug: 'castle-hill-nsw', suburb: 'Castle Hill', postcode: '2154', region: 'Northwest Sydney' },
  { slug: 'castlereagh-nsw', suburb: 'Castlereagh', postcode: '2749', region: 'Sydney Western Suburbs' },
  { slug: 'chatswood-nsw', suburb: 'Chatswood', postcode: '2067', region: 'Sydney North Shore' },
  { slug: 'cherrybrook-nsw', suburb: 'Cherrybrook', postcode: '2126', region: 'Northwest Sydney' },
  { slug: 'chester-hill-nsw', suburb: 'Chester Hill', postcode: '2162', region: 'Sydney Western Suburbs' },
  { slug: 'chinatown-nsw', suburb: 'Chinatown', postcode: '2000', region: 'Sydney CBD' },
  { slug: 'chippendale-nsw', suburb: 'Chippendale', postcode: '2008', region: 'Sydney CBD' },
  { slug: 'chipping-norton-nsw', suburb: 'Chipping Norton', postcode: '2170', region: 'Sydney Western Suburbs' },
  { slug: 'chullora-nsw', suburb: 'Chullora', postcode: '2190', region: 'Sydney Western Suburbs' },
  { slug: 'circular-quay-nsw', suburb: 'Circular Quay', postcode: '2000', region: 'Sydney CBD' },
  { slug: 'clovelly-nsw', suburb: 'Clovelly', postcode: '2031', region: 'Sydney Eastern Suburbs' },
  { slug: 'clyde-nsw', suburb: 'Clyde', postcode: '2142', region: 'Sydney Western Suburbs' },
  { slug: 'collaroy-nsw', suburb: 'Collaroy', postcode: '2097', region: 'Sydney Northern Beaches' },
  { slug: 'concord-nsw', suburb: 'Concord', postcode: '2137', region: 'Sydney Inner West' },
  { slug: 'condell-park-nsw', suburb: 'Condell Park', postcode: '2200', region: 'Sydney Western Suburbs' },
  { slug: 'coogee-nsw', suburb: 'Coogee', postcode: '2034', region: 'Sydney Eastern Suburbs' },
  { slug: 'cremorne-nsw', suburb: 'Cremorne', postcode: '2090', region: 'Sydney North Shore' },
  { slug: 'cronulla-nsw', suburb: 'Cronulla', postcode: '2230', region: 'Sydney Sutherland Shire' },
  { slug: 'crows-nest-nsw', suburb: 'Crows Nest', postcode: '2065', region: 'Sydney North Shore' },
  { slug: 'croydon-nsw', suburb: 'Croydon', postcode: '2132', region: 'Sydney Inner West' },
  { slug: 'croydon-park-nsw', suburb: 'Croydon Park', postcode: '2133', region: 'Sydney Inner West' },
];

const base = path.resolve('app/commercial-cleaning');

for (const loc of locations) {
  const dir = path.join(base, loc.slug);
  if (!fs.existsSync(dir)) {
    console.log(`SKIP — folder not found: ${loc.slug}`);
    continue;
  }

  const funcName = loc.suburb.replace(/[^a-zA-Z]/g, '') + 'CommercialCleaning';

  const content = `import type { Metadata } from 'next';
import StaticLocationPage from '@/app/components/StaticLocationPage';

export const metadata: Metadata = {
  title: 'Commercial Cleaning ${loc.suburb} NSW ${loc.postcode} | Pro Clean Corp',
  description: 'Professional commercial cleaning in ${loc.suburb} NSW ${loc.postcode}. Office cleaning, strata cleaning, medical facility cleaning and more. Trusted local cleaners. Free quote.',
  keywords: [
    'commercial cleaning ${loc.suburb}',
    'commercial cleaning ${loc.suburb} NSW',
    'office cleaning ${loc.suburb}',
    'cleaners ${loc.suburb} NSW',
    'cleaning services ${loc.suburb}',
    'commercial cleaners near me ${loc.suburb}',
    'office cleaners ${loc.suburb} NSW',
    'strata cleaning ${loc.suburb}',
    'industrial cleaning ${loc.suburb}',
    'medical cleaning ${loc.suburb}',
    'childcare cleaning ${loc.suburb}',
    'end of lease cleaning ${loc.suburb}',
    '${loc.suburb} NSW ${loc.postcode} cleaning',
    'Pro Clean Corp ${loc.suburb}',
    '${loc.region} commercial cleaning',
  ],
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning/${loc.slug}',
    languages: { 'en-AU': 'https://www.procleancorp.com.au/commercial-cleaning/${loc.slug}' },
  },
  openGraph: {
    title: 'Commercial Cleaning ${loc.suburb} NSW ${loc.postcode} | Pro Clean Corp',
    description: '${loc.suburb} businesses trust Pro Clean Corp for commercial cleaning NSW ${loc.postcode}. Office, strata, medical & industrial cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning/${loc.slug}',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning ${loc.suburb} NSW' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': '${loc.suburb}',
  },
};

export default function ${funcName}() {
  return (
    <StaticLocationPage
      suburb="${loc.suburb}"
      postcode="${loc.postcode}"
      region="${loc.region}"
      slug="${loc.slug}"
    />
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log(`✓ ${loc.slug}`);
}

console.log('\nDone — all 78 pages updated.');
