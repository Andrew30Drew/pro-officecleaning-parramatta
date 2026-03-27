import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `https://www.procleancorp.com.au${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-gray-500 py-3 px-4">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1">
            {index > 0 && <span className="text-gray-400" aria-hidden="true">/</span>}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-greenprimary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium" aria-current={index === items.length - 1 ? 'page' : undefined}>
                {item.name}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
