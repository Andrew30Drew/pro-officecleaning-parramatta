import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap - Pro Clean Corp Commercial Cleaning Sydney NSW',
  description: 'Complete sitemap of Pro Clean Corp commercial cleaning services. Find all suburb pages, service pages, and information across Sydney NSW.',
  alternates: { canonical: '/sitemap-page' },
  robots: { index: true, follow: true },
};

const commercialCleaningSuburbs = [
  { name: 'Alexandria', slug: 'commercial-cleaning-alexandria' },
  { name: 'Arndell Park', slug: 'commercial-cleaning-arndell-park' },
  { name: 'Artarmon', slug: 'commercial-cleaning-artarmon' },
  { name: 'Auburn', slug: 'commercial-cleaning-auburn' },
  { name: 'Bankstown', slug: 'commercial-cleaning-bankstown' },
  { name: 'Barangaroo', slug: 'commercial-cleaning-barangaroo' },
  { name: 'Blacktown', slug: 'commercial-cleaning-blacktown' },
  { name: 'Bondi', slug: 'commercial-cleaning-bondi' },
  { name: 'Bondi Junction', slug: 'commercial-cleaning-bondi-junction' },
  { name: 'Brookvale', slug: 'commercial-cleaning-brookvale' },
  { name: 'Castle Hill', slug: 'commercial-cleaning-castle-hill' },
  { name: 'Chatswood', slug: 'commercial-cleaning-chatswood' },
  { name: 'Crows Nest', slug: 'commercial-cleaning-crows-nest' },
  { name: 'Eastern Suburbs', slug: 'commercial-cleaning-eastern-suburbs' },
  { name: 'Fairfield', slug: 'commercial-cleaning-fairfield' },
  { name: 'Hills District', slug: 'commercial-cleaning-hills-district' },
  { name: 'Hornsby', slug: 'commercial-cleaning-hornsby' },
  { name: 'Hurstville', slug: 'commercial-cleaning-hurstville' },
  { name: 'Inner West', slug: 'commercial-cleaning-inner-west' },
  { name: 'Kings Cross', slug: 'commercial-cleaning-kings-cross' },
  { name: 'Kogarah', slug: 'commercial-cleaning-kogarah' },
  { name: 'Lane Cove', slug: 'commercial-cleaning-lane-cove' },
  { name: 'Macquarie Park', slug: 'commercial-cleaning-macquarie-park' },
  { name: 'Manly', slug: 'commercial-cleaning-manly' },
  { name: 'Marrickville', slug: 'commercial-cleaning-marrickville' },
  { name: 'Mascot', slug: 'commercial-cleaning-mascot' },
  { name: 'North Sydney', slug: 'commercial-cleaning-north-sydney' },
  { name: 'Parramatta', slug: 'commercial-cleaning-parramatta' },
  { name: 'Pyrmont', slug: 'commercial-cleaning-pyrmont' },
  { name: 'Redfern', slug: 'commercial-cleaning-redfern' },
  { name: 'Silverwater', slug: 'commercial-cleaning-silverwater' },
  { name: 'Surry Hills', slug: 'commercial-cleaning-surry-hills' },
  { name: 'Sydney CBD', slug: 'commercial-cleaning-sydney' },
  { name: 'Western Sydney', slug: 'commercial-cleaning-western-sydney' },
];

const officeCleaningSuburbs = [
  { name: 'Alexandria', slug: 'office-cleaning-alexandria' },
  { name: 'Arncliffe', slug: 'office-cleaning-arncliffe' },
  { name: 'Artarmon', slug: 'office-cleaning-artarmon' },
  { name: 'Auburn', slug: 'office-cleaning-auburn' },
  { name: 'Bankstown', slug: 'office-cleaning-bankstown' },
  { name: 'Blacktown', slug: 'office-cleaning-blacktown' },
  { name: 'Brookvale', slug: 'office-cleaning-brookvale' },
  { name: 'Chatswood', slug: 'office-cleaning-chatswood' },
  { name: 'Hornsby', slug: 'office-cleaning-hornsby' },
  { name: 'Kogarah', slug: 'office-cleaning-kogarah' },
  { name: 'Liverpool', slug: 'office-cleaning-liverpool' },
  { name: 'Macquarie Park', slug: 'office-cleaning-macquarie-park' },
  { name: 'North Sydney', slug: 'office-cleaning-north-sydney' },
  { name: 'Parramatta', slug: 'office-cleaning-parramatta' },
  { name: 'Penrith', slug: 'office-cleaning-penrith' },
  { name: 'Silverwater', slug: 'office-cleaning-silverwater' },
  { name: 'Sydney CBD', slug: 'office-cleaning-sydney-cbd' },
  { name: 'Sydney', slug: 'office-cleaning-sydney' },
];

const mainServices = [
  { name: 'Commercial Cleaning Sydney', slug: 'commercial-cleaning-sydney' },
  { name: 'Office Cleaning Sydney', slug: 'office-cleaning-sydney' },
  { name: 'Warehouse Cleaning Sydney', slug: 'warehouse-cleaning-sydney' },
  { name: 'Medical Office Cleaning Sydney', slug: 'medical-office-cleaning-sydney' },
  { name: 'Gym Cleaning Sydney', slug: 'gym-cleaning-sydney' },
  { name: 'Strata Cleaning Sydney', slug: 'strata-cleaning-sydney' },
  { name: 'Carpet Cleaning Sydney', slug: 'carpet-cleaning-sydney' },
  { name: 'Restaurant Cleaning Sydney', slug: 'restaurant-cleaning-sydney' },
  { name: 'School Cleaning Services Sydney', slug: 'school-cleaning-services-sydney' },
  { name: 'Childcare Centre Cleaning Sydney', slug: 'childcare-centre-cleaning-sydney' },
  { name: 'Industrial Cleaning Sydney', slug: 'industrial-cleaning-sydney' },
  { name: 'Shopping Centre Cleaning Sydney', slug: 'shopping-centre-cleaning-sydney' },
];

const servicePages = [
  { name: 'Commercial Cleaning', slug: 'services/commercial-cleaning' },
  { name: 'Office Cleaning', slug: 'services/office-cleaning' },
  { name: 'Warehouse Cleaning', slug: 'services/warehouse-cleaning' },
  { name: 'Medical Centre Cleaning', slug: 'services/medicalcentre-cleaning' },
  { name: 'Gym Cleaning', slug: 'services/gym-cleaning' },
  { name: 'Strata Cleaning', slug: 'services/strata-cleaning' },
  { name: 'Carpet Cleaning', slug: 'services/carpet-cleaning' },
  { name: 'School Cleaning', slug: 'services/school-cleaning' },
  { name: 'Childcare Cleaning', slug: 'services/childcare-cleaning' },
  { name: 'End of Lease Cleaning', slug: 'services/end-of-lease-cleaning' },
  { name: 'Home Cleaning', slug: 'services/home-cleaning' },
  { name: 'Church Cleaning', slug: 'services/church-cleaning' },
];

export default function SitemapPage() {
  return (
    <main className="py-16 flex justify-center">
      <div className="w-full max-w-5xl px-5 lg:px-20">
        <h1 className="text-3xl font-bold text-darkblue mb-2">Site Map</h1>
        <p className="text-gray-500 mb-10">
          All pages for Pro Clean Corp — Professional Commercial Cleaning Services Sydney NSW
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-greenprimary mb-4 border-b pb-2">Main Pages</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { name: 'Home', slug: '' },
              { name: 'About Us', slug: 'about' },
              { name: 'Contact Us', slug: 'contact-us' },
              { name: 'Case Studies', slug: 'case-studies' },
              { name: 'Privacy Policy', slug: 'privacy-policy' },
              { name: 'Terms of Use', slug: 'terms-of-use' },
            ].map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-blue-600 hover:underline text-sm">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-greenprimary mb-4 border-b pb-2">Service Pages</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {servicePages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-blue-600 hover:underline text-sm">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-greenprimary mb-4 border-b pb-2">Main Service Location Pages</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {mainServices.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-blue-600 hover:underline text-sm">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-greenprimary mb-4 border-b pb-2">Commercial Cleaning by Suburb</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {commercialCleaningSuburbs.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-blue-600 hover:underline text-sm">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-greenprimary mb-4 border-b pb-2">Office Cleaning by Suburb</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {officeCleaningSuburbs.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-blue-600 hover:underline text-sm">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 p-6 bg-greenprimary/10 rounded-xl text-center">
          <p className="text-darkblue font-semibold mb-3">
            Need commercial cleaning in your area?
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-greenprimary text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
