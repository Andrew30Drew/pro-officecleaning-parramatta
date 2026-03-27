import Link from 'next/link';

interface NearbySuburb {
  name: string;
  slug: string;
}

interface NearbySuburbsProps {
  currentSuburb: string;
  serviceType: 'commercial-cleaning' | 'office-cleaning' | 'strata-cleaning';
  suburbs: NearbySuburb[];
}

export default function NearbySuburbs({ currentSuburb, serviceType, suburbs }: NearbySuburbsProps) {
  const serviceLabel =
    serviceType === 'commercial-cleaning'
      ? 'Commercial Cleaning'
      : serviceType === 'office-cleaning'
      ? 'Office Cleaning'
      : 'Strata Cleaning';

  return (
    <div className="bg-blueprimary/5 rounded-2xl p-8 mb-12 border border-blueprimary/10">
      <h3 className="text-xl font-bold text-darkblue mb-2">
        {serviceLabel} Near {currentSuburb}
      </h3>
      <p className="text-gray-600 mb-6 text-sm">
        We also service businesses in these nearby areas:
      </p>
      <div className="flex flex-wrap gap-3">
        {suburbs.map((suburb) => (
          <Link
            key={suburb.slug}
            href={`/${serviceType}-${suburb.slug}`}
            className="bg-white text-gray-700 hover:text-blueprimary hover:shadow-md border border-gray-200 rounded-full px-4 py-2 text-sm font-medium transition"
          >
            {serviceLabel} {suburb.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
