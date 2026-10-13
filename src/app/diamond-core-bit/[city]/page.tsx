import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Button } from '@/components/Button';
import { PageBanner } from '@/components/PageBanner';
import { ProductCard } from '@/components/ProductCard';
import { SupplyBlock } from '@/components/SupplyBlock';
import { getLocation, locations } from '@/data/locations';
import { coreBitProducts } from '@/data/products';
import { manufacturer, site } from '@/data/site';
import { telHref, whatsappHref } from '@/lib/enquiry';
import { absolute, breadcrumbLd, JsonLd, ORG_ID, STORE_ID } from '@/lib/seo';

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};
  const title = `Diamond Core Bit Dealer & Wholesale Supplier in ${location.name}`;
  const description = `Buy Bishnoi diamond core bits in ${location.name}, ${location.region} — 6.5 mm to 57 mm for granite, marble, and tile. Manufacturer-direct wholesale and retail. ${location.supply}`;
  const path = `/diamond-core-bit/${location.slug}`;
  return {
    title,
    description,
    keywords: [
      `diamond core bit ${location.name}`,
      `core bit dealer in ${location.name}`,
      `diamond core bit wholesale ${location.name}`,
      `core bit supplier ${location.name}`,
      `granite core bit ${location.name}`,
      `tile core bit ${location.name}`,
      `diamond core bit manufacturer`,
    ],
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: ['/images/hero-wide-poster.jpg'] },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  const cores = coreBitProducts().slice(0, 6);
  const others = locations.filter((l) => l.slug !== location.slug);
  const path = `/diamond-core-bit/${location.slug}`;
  const message = `Hello ${site.shopName}, I am in ${location.name}. I would like the wholesale/retail rate for diamond core bits.`;

  return (
    <main className="page-offset">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Diamond core bit suppliers', path: '/diamond-core-bit' },
            { name: location.name, path },
          ]),
          {
            '@type': 'Service',
            '@id': absolute(`${path}#service`),
            name: `Diamond core bit supply in ${location.name}`,
            serviceType: 'Wholesale and retail supply of diamond core bits',
            provider: [{ '@id': ORG_ID }, { '@id': STORE_ID }],
            areaServed: {
              '@type': location.kind === 'city' ? 'City' : 'State',
              name: location.name,
              containedInPlace: { '@type': 'Country', name: 'India' },
            },
            url: absolute(path),
          },
        ]}
      />
      <PageBanner title={`Diamond core bits · ${location.name}`} />

      <section className="section">
        <div className="container split">
          <div>
            <p className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/diamond-core-bit">Suppliers</Link>
              <span>/</span>
              <span>{location.name}</span>
            </p>
            <p className="eyebrow" style={{ marginTop: 28 }}>
              {location.region}
            </p>
            <h1 className="page-title">Diamond core bit dealer &amp; wholesale supplier in {location.name}</h1>
            <p className="long-body" style={{ marginTop: 20 }}>
              {location.local}
            </p>
            <p className="long-body">
              Bishnoi diamond core bits are manufactured by {manufacturer.name}, {manufacturer.city}, and
              sold wholesale and retail by {site.shopName}. {location.supply}
            </p>
            <div className="hero__actions">
              <Button href={whatsappHref(message)} variant="dark" external>
                Get {location.name} rate on WhatsApp
              </Button>
              <Button href={telHref()}>Call {site.contact.phoneDisplay}</Button>
            </div>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: 28 }}>
              Areas we supply in {location.name}
            </h2>
            <ul className="area-chips">
              {location.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <h2 className="h2" style={{ fontSize: 28, marginTop: 36 }}>
              Who buys from us
            </h2>
            <p className="long-body" style={{ marginTop: 12 }}>
              Hardware and tool dealers, tile and granite showrooms, marble fitters, plumbers,
              electricians, and building contractors in {location.name}.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--band">
        <div className="container">
          <SupplyBlock place={location.name} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 32 }}>Popular core bit sizes in {location.name}</h2>
          <div className="product-grid">
            {cores.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <h2 className="h2" style={{ fontSize: 28 }}>
            We also supply diamond core bits in
          </h2>
          <ul className="area-chips area-chips--links">
            {others.map((l) => (
              <li key={l.slug}>
                <Link href={`/diamond-core-bit/${l.slug}`}>{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
