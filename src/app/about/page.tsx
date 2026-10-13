import { PageBanner } from '@/components/PageBanner';
import { manufacturer, site } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Diamond Core Bit Manufacturer in Jaipur & Dealer in Bengaluru',
  description: site.shortDescription,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main className="page-offset">
      <PageBanner title={`About ${site.name}`} />
      <section className="section">
        <div className="container split">
          <div>
            <p className="breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>About</span>
            </p>
            <p className="eyebrow" style={{ marginTop: 28 }}>
              Since {site.established}
            </p>
            <h1 className="page-title">Diamond core bits, made in Jaipur</h1>
          </div>
          <div>
            <p className="long-body">{site.longDescription}</p>
            <p className="long-body" style={{ marginTop: 20 }}>
              {site.shopName} in Kalasipalya is run by {site.owner}. Trade buyers come for
              Bishnoi Diamond Core Bit vials from 6.5 mm to 57 mm and Bhinmal tubes. If a
              diameter is on the wall, we sell it at a counter price; if it is not, we say so.
            </p>
            <p className="person-name" style={{ marginTop: 32 }}>
              {site.owner}
            </p>
            <p className="eyebrow" style={{ marginBottom: 0 }}>
              {site.shopName}
            </p>
          </div>
        </div>
      </section>
      <section className="section section--band">
        <div className="container split">
          <div>
            <p className="eyebrow">{manufacturer.role}</p>
            <h2 className="h2">{manufacturer.name}</h2>
            <p className="long-body" style={{ marginTop: 16 }}>
              Every Bishnoi diamond core bit is made at the head office in {manufacturer.city}.
              <br />
              {manufacturer.line}
              <br />
              Tel {manufacturer.phoneDisplay}
            </p>
            <p className="long-body">
              GSTIN {manufacturer.gstin}
              <br />
              PAN {manufacturer.pan}
            </p>
          </div>
          <div>
            <p className="eyebrow">Sales · {site.address.city}</p>
            <h2 className="h2">{site.shopName}</h2>
            <p className="long-body" style={{ marginTop: 16 }}>
              Where the core bits and the rest of the shop stock are sold.
              <br />
              {site.address.line}
              <br />
              Mob {site.contact.phoneDisplay} · Ph {site.contact.landlineDisplay}
            </p>
            <p className="long-body">
              GSTIN {site.gstin}
              <br />
              Distributors in: {site.distributorOf}
              <br />
              Dealers in: {site.dealerIn}
            </p>
          </div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="container">
          <blockquote className="quote">{site.quote}</blockquote>
          <p className="sign-off">{site.signOff}</p>
        </div>
      </section>
    </main>
  );
}
