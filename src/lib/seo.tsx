import { manufacturer, site } from '@/data/site';

/** Set NEXT_PUBLIC_SITE_URL to the live domain, e.g. https://www.bishnoicorebit.com */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001').replace(/\/$/, '');

export const absolute = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const coreKeywords = [
  'diamond core bit',
  'diamond core drill bit',
  'core bit',
  'core bit for granite',
  'core bit for marble',
  'tile core bit',
  'diamond hole saw',
  'angle grinder core bit',
  'M14 core bit',
  'wet core bit',
  'diamond core bit manufacturer',
  'diamond core bit manufacturer in Jaipur',
  'diamond core bit wholesale',
  'core bit wholesale dealer',
  'core bit supplier India',
  'Bishnoi core bit',
  'Bishnoi Diamond Industries',
  'Bishnoi Sales',
  'Bhinmal core bit',
];

export const ORG_ID = absolute('/#manufacturer');
export const STORE_ID = absolute('/#store');

export const organizationLd = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: manufacturer.name,
  alternateName: site.name,
  url: absolute('/'),
  logo: absolute('/logo.png'),
  taxID: manufacturer.gstin,
  telephone: manufacturer.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: manufacturer.street,
    addressLocality: manufacturer.city,
    addressRegion: manufacturer.region,
    addressCountry: manufacturer.country,
  },
  areaServed: { '@type': 'Country', name: 'India' },
  description: `${manufacturer.name} manufactures Bishnoi diamond core bits in ${manufacturer.city} and supplies wholesale dealers across India.`,
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const graph = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
