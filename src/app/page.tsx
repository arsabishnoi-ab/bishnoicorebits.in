import { Button } from '@/components/Button';
import { GoogleReviews } from '@/components/GoogleReviews';
import { HeroFullVideo } from '@/components/HeroFullVideo';
import { ShopMap } from '@/components/ShopMap';
import { ProductCard } from '@/components/ProductCard';
import { TextLink } from '@/components/TextLink';
import Link from 'next/link';
import { locations } from '@/data/locations';
import { coreBitProducts, otherProducts } from '@/data/products';
import { manufacturer, site } from '@/data/site';
import { generalEnquireMessage, telHref, whatsappHref } from '@/lib/enquiry';
import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  const cores = coreBitProducts();
  const shop = otherProducts();

  return (
    <main>
      <HeroFullVideo />

      <section className="section" id="core-bits">
        <div className="container">
          <p className="eyebrow">{manufacturer.name} · {manufacturer.city}</p>
          <div className="section-head">
            <div>
              <h2>Bishnoi Diamond Core Bit</h2>
              <p className="long-body" style={{ marginTop: 16, maxWidth: '52ch' }}>
                The main range. Twelve sizes, made by {manufacturer.name} in Jaipur (GSTIN{' '}
                {manufacturer.gstin}), sold by {site.shopName} in Kalasipalya.
              </p>
            </div>
            <TextLink href="/products?category=core-bits">All core bits</TextLink>
          </div>
          <div className="product-grid">
            {cores.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--band" id="bishnoi-sales">
        <div className="container">
          <p className="eyebrow">{site.shopName}</p>
          <div className="section-head">
            <div>
              <h2>Bishnoi Sales</h2>
              <p className="long-body" style={{ marginTop: 16, maxWidth: '52ch' }}>
                The Kalasipalya sales counter for the core bits and everything else —
                distributors of {site.distributorOf}, dealers in industrial buffing items,
                emery powder, flap wheels, mat wheels, and Superon welding rods.
              </p>
            </div>
            <TextLink href="/products">All shop stock</TextLink>
          </div>
          <div className="product-grid">
            {shop.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">From the counter</p>
          <blockquote className="quote">{site.quote}</blockquote>
          <p className="sign-off">{site.signOff}</p>
        </div>
      </section>

      <section className="section section--paper" id="all-india">
        <div className="container">
          <p className="eyebrow">Manufacturer · Wholesale dealer · All India</p>
          <div className="section-head">
            <div>
              <h2>Diamond core bits supplied all over India</h2>
              <p className="long-body" style={{ marginTop: 16, maxWidth: '64ch' }}>
                {manufacturer.name} manufactures Bishnoi diamond core bits in Jaipur.{' '}
                {site.shopName}, Bengaluru, supplies them wholesale to dealers and distributors —
                and retail to fitters and contractors — across Rajasthan, Karnataka, Kerala,
                Andhra Pradesh, Tamil Nadu, West Bengal, Maharashtra, Gujarat, Delhi NCR, and more.
              </p>
            </div>
            <TextLink href="/wholesale">Wholesale enquiries</TextLink>
          </div>
          <ul className="area-chips area-chips--links">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/diamond-core-bit/${l.slug}`}>Core bits in {l.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <p className="eyebrow">What buyers say</p>
          <h2 style={{ marginBottom: 24 }}>Reviews</h2>
          <GoogleReviews />
        </div>
      </section>

      <section className="section section--band" id="map">
        <div className="container">
          <ShopMap />
        </div>
      </section>

      <section className="section cta-band">
        <div className="container split" style={{ alignItems: 'center' }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--color-neutral-default)' }}>
              Kalasipalya
            </p>
            <h2>Need a size today?</h2>
            <p style={{ marginTop: 16 }}>
              Call the shop or send the diameter, quantity, and machine on WhatsApp. Open{' '}
              {site.contact.hoursShort}.
            </p>
          </div>
          <div className="hero__actions">
            <Button href={telHref()}>Call</Button>
            <Button href={whatsappHref(generalEnquireMessage())} external>
              WhatsApp
            </Button>
            <a
              className="arrow-btn"
              href="/contact"
              aria-label="Contact"
              style={{ marginLeft: 8 }}
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
