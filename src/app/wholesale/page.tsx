import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { PageBanner } from '@/components/PageBanner';
import { SupplyBlock } from '@/components/SupplyBlock';
import { locations } from '@/data/locations';
import { manufacturer, site } from '@/data/site';
import { telHref, whatsappHref } from '@/lib/enquiry';
import { breadcrumbLd, JsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Diamond Core Bit Wholesale Dealer & Manufacturer — Dealer Enquiries',
  description: `Wholesale diamond core bits direct from the manufacturer, ${manufacturer.name}, Jaipur. Dealer and distributor rates on 6.5–57 mm core bits, Bhinmal core bits, and abrasives. GST invoice, all-India dispatch.`,
  keywords: [
    'diamond core bit wholesale',
    'diamond core bit wholesale dealer',
    'diamond core bit distributor',
    'diamond core bit manufacturer',
    'core bit dealer price',
    'core bit bulk order',
    'Bhinmal core bit distributor',
  ],
  alternates: { canonical: '/wholesale' },
};

export default function WholesalePage() {
  const message = `Hello ${site.shopName}, I am a dealer. Please share wholesale rates for Bishnoi diamond core bits.`;

  return (
    <main className="page-offset">
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Wholesale', path: '/wholesale' },
        ])}
      />
      <PageBanner title="Wholesale & dealers" />
      <section className="section">
        <div className="container split">
          <div>
            <p className="breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Wholesale</span>
            </p>
            <p className="eyebrow" style={{ marginTop: 28 }}>
              For dealers and distributors
            </p>
            <h1 className="page-title">Diamond core bit wholesale — direct from the manufacturer</h1>
            <p className="long-body" style={{ marginTop: 20 }}>
              Buy Bishnoi diamond core bits at factory-direct wholesale rates. Made by {manufacturer.name}{' '}
              in {manufacturer.city}, sold by {site.shopName} in {site.address.city}, and dispatched to
              dealers all over India.
            </p>
            <p className="long-body">
              {site.shopName} is also a distributor of {site.distributorOf} and a dealer in{' '}
              {site.dealerIn.toLowerCase()}.
            </p>
            <div className="hero__actions">
              <Button href={whatsappHref(message)} variant="dark" external>
                Get dealer rates
              </Button>
              <Button href={telHref()}>Call {site.contact.phoneDisplay}</Button>
            </div>
          </div>
          <div>
            <h2 className="h2" style={{ fontSize: 28 }}>
              Manufacturer
            </h2>
            <p className="long-body" style={{ marginTop: 12 }}>
              {manufacturer.name}
              <br />
              {manufacturer.line}
              <br />
              GSTIN {manufacturer.gstin} · Tel {manufacturer.phoneDisplay}
            </p>
            <h2 className="h2" style={{ fontSize: 28, marginTop: 32 }}>
              Wholesale &amp; retail sales
            </h2>
            <p className="long-body" style={{ marginTop: 12 }}>
              {site.shopName} · {site.owner}
              <br />
              {site.address.line}
              <br />
              GSTIN {site.gstin} · Mob {site.contact.phoneDisplay}
            </p>
          </div>
        </div>
      </section>
      <section className="section section--band">
        <div className="container">
          <SupplyBlock />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="h2" style={{ fontSize: 28 }}>
            Dealers we supply across India
          </h2>
          <ul className="area-chips area-chips--links">
            {locations.map((l) => (
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
