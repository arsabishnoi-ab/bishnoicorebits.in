import Link from 'next/link';
import { locations } from '@/data/locations';
import { shopCategories } from '@/data/products';
import { manufacturer, site } from '@/data/site';
import { telHref } from '@/lib/enquiry';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <Logo light />
            <p className="footer-blurb">{site.tagline}</p>
            <ul>
              <li>
                <Link href="/products?category=core-bits">Diamond core bits</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>{site.shopName}</h4>
            <ul>
              {shopCategories.map((category) => (
                <li key={category.id}>
                  <Link href={`/products?category=${category.id}`}>{category.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Manufacturer</h4>
            <ul className="footer-details">
              <li>{manufacturer.name}</li>
              <li>{manufacturer.line}</li>
              <li>
                <a href={`tel:${manufacturer.phone}`}>{manufacturer.phoneDisplay}</a>
              </li>
              <li>GSTIN {manufacturer.gstin}</li>
              <li>PAN {manufacturer.pan}</li>
            </ul>
          </div>
          <div>
            <h4>Sales · Bengaluru</h4>
            <ul className="footer-details">
              <li>
                {site.shopName} · {site.owner}
              </li>
              <li>
                <a href={site.maps.place} target="_blank" rel="noopener noreferrer">
                  {site.address.line}
                </a>
              </li>
              <li>
                <a href={telHref()}>Mob {site.contact.phoneDisplay}</a>
              </li>
              <li>
                <a href={`tel:${site.contact.landline}`}>Ph {site.contact.landlineDisplay}</a>
              </li>
              <li>GSTIN {site.gstin}</li>
              <li>{site.contact.hoursShort}</li>
            </ul>
          </div>
        </div>
        <div className="site-footer__cities">
          <h4>Diamond core bit suppliers across India</h4>
          <ul>
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/diamond-core-bit/${l.slug}`}>{l.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/wholesale">Wholesale dealers</Link>
            </li>
          </ul>
        </div>
        <div className="site-footer__legal">
          <p>
            © {year} {manufacturer.name} · {site.legalName}. All rights reserved.
          </p>
          <span>
            Made in {manufacturer.city} · Sold in {site.address.city}
          </span>
        </div>
      </div>
    </footer>
  );
}
