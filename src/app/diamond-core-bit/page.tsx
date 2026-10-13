import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { PageBanner } from '@/components/PageBanner';
import { SupplyBlock } from '@/components/SupplyBlock';
import { locations } from '@/data/locations';
import { manufacturer, site } from '@/data/site';
import { generalEnquireMessage, whatsappHref } from '@/lib/enquiry';
import { breadcrumbLd, JsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Diamond Core Bit Suppliers & Wholesale Dealers Across India',
  description:
    'Bishnoi diamond core bits supplied all over India — Rajasthan, Bangalore, North Karnataka, Kerala, Visakhapatnam, Chennai, Kolkata, Mumbai, Delhi NCR, Hyderabad, Pune, Ahmedabad and more. Manufacturer-direct wholesale.',
  keywords: [
    'diamond core bit supplier India',
    'diamond core bit wholesale dealer',
    'diamond core bit manufacturer India',
    ...locations.map((l) => `diamond core bit ${l.name}`),
  ],
  alternates: { canonical: '/diamond-core-bit' },
};

export default function SuppliersPage() {
  const cities = locations.filter((l) => l.kind === 'city');
  const regions = locations.filter((l) => l.kind === 'region');

  return (
    <main className="page-offset">
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Diamond core bit suppliers', path: '/diamond-core-bit' },
        ])}
      />
      <PageBanner title="Supplied all over India" />
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Suppliers</span>
          </p>
          <p className="eyebrow" style={{ marginTop: 28 }}>
            All over India
          </p>
          <h1 className="page-title">Diamond core bit suppliers &amp; wholesale dealers across India</h1>
          <p className="long-body" style={{ marginTop: 20, maxWidth: '70ch' }}>
            Bishnoi diamond core bits are manufactured by {manufacturer.name} in {manufacturer.city} and
            sold by {site.shopName}, {site.address.city}. We supply hardware dealers, distributors, and
            contractors in every state — by transport or courier from Jaipur or Bengaluru.
          </p>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 48 }}>
            States and regions
          </h2>
          <ul className="area-chips area-chips--links">
            {regions.map((l) => (
              <li key={l.slug}>
                <Link href={`/diamond-core-bit/${l.slug}`}>{l.name}</Link>
              </li>
            ))}
          </ul>

          <h2 className="h2" style={{ fontSize: 28, marginTop: 40 }}>
            Cities
          </h2>
          <ul className="area-chips area-chips--links">
            {cities.map((l) => (
              <li key={l.slug}>
                <Link href={`/diamond-core-bit/${l.slug}`}>
                  {l.name}, {l.region}
                </Link>
              </li>
            ))}
          </ul>

          <p className="long-body" style={{ marginTop: 32 }}>
            Not listed? We ship anywhere in India — send your city and sizes on WhatsApp.
          </p>
          <div className="hero__actions">
            <Button href={whatsappHref(generalEnquireMessage())} variant="dark" external>
              Enquire on WhatsApp
            </Button>
            <Button href="/wholesale">Wholesale enquiries</Button>
          </div>
        </div>
      </section>
      <section className="section section--band">
        <div className="container">
          <SupplyBlock />
        </div>
      </section>
    </main>
  );
}
