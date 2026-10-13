import { Button } from '@/components/Button';
import { EnquiryForm } from '@/components/EnquiryForm';
import { PageBanner } from '@/components/PageBanner';
import { manufacturer, site } from '@/data/site';
import { generalEnquireMessage, telHref, whatsappHref } from '@/lib/enquiry';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Bishnoi Sales, Kalasipalya, Bengaluru',
  alternates: { canonical: '/contact' },
  description: `Buy from Bishnoi Sales at ${site.address.line}, or call ${site.contact.phoneDisplay}. Manufactured by ${manufacturer.name}, ${manufacturer.city}.`,
};

export default function ContactPage() {
  return (
    <main className="page-offset">
      <PageBanner title="Visit the shop" />
      <section className="section">
        <div className="container split">
          <div>
            <p className="breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Contact</span>
            </p>
            <p className="eyebrow" style={{ marginTop: 28 }}>
              Sales · Bengaluru
            </p>
            <h1 className="page-title">{site.shopName}</h1>
            <p className="long-body" style={{ marginTop: 20 }}>
              {site.owner}
              <br />
              {site.address.line}
            </p>
            <p className="long-body">
              Mob <a href={telHref()}>{site.contact.phoneDisplay}</a>
              <br />
              Ph <a href={`tel:${site.contact.landline}`}>{site.contact.landlineDisplay}</a> ·
              Centrex {site.contact.centrex}
              <br />
              GSTIN {site.gstin}
            </p>
            <p className="long-body">
              Distributors in: {site.distributorOf}.
              <br />
              Dealers in: {site.dealerIn}.
            </p>
            <p className="long-body">
              {site.contact.hoursShort}. Sunday closed.
            </p>
            <div className="hero__actions">
              <Button href={telHref()} variant="dark">
                Call
              </Button>
              <Button href={whatsappHref(generalEnquireMessage())} external>
                WhatsApp
              </Button>
              <Button href={site.maps.directions} external>
                Directions
              </Button>
            </div>

            <div className="maker-card">
              <p className="eyebrow">{manufacturer.role}</p>
              <h2 className="h2" style={{ fontSize: 28 }}>
                {manufacturer.name}
              </h2>
              <p className="long-body" style={{ marginTop: 12 }}>
                {manufacturer.line}
                <br />
                Tel <a href={`tel:${manufacturer.phone}`}>{manufacturer.phoneDisplay}</a>
              </p>
              <p className="long-body">
                GSTIN {manufacturer.gstin}
                <br />
                PAN {manufacturer.pan}
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Enquiry</p>
            <h2 className="h2" style={{ fontSize: 32, marginBottom: 24 }}>
              Send a size and quantity
            </h2>
            <EnquiryForm />
          </div>
        </div>
      </section>
      <section className="section section--band" style={{ paddingTop: 0 }}>
        <div className="container">
          <iframe
            className="map-frame"
            title="Bishnoi Sales on Google Maps"
            src={site.maps.searchEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
