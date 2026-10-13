import Link from 'next/link';
import { coreBitProducts } from '@/data/products';
import { manufacturer, site } from '@/data/site';

/* Shared wholesale / manufacturer copy and the size list used on location and wholesale pages. */
export function SupplyBlock({ place }: { place?: string }) {
  const sizes = coreBitProducts().filter((p) => p.diameterMm);
  const where = place ? ` in ${place}` : ' across India';

  return (
    <div className="split">
      <div>
        <h2 className="h2" style={{ fontSize: 32 }}>
          Manufacturer and wholesale dealer
        </h2>
        <p className="long-body" style={{ marginTop: 16 }}>
          {manufacturer.name} manufactures Bishnoi diamond core bits in {manufacturer.city} (GSTIN{' '}
          {manufacturer.gstin}). {site.shopName}, {site.address.city} (GSTIN {site.gstin}) sells them
          wholesale to hardware dealers, tile and granite shops, and contractors{where}, and retail
          over the counter.
        </p>
        <ul className="supply-list">
          <li>Factory-direct wholesale rates for dealers and distributors</li>
          <li>Mixed-size boxes — 6.5 mm to 57 mm in one order</li>
          <li>GST invoice on every order</li>
          <li>Retail single pieces for fitters and contractors</li>
          <li>Also stocked: Bhinmal core bits, flap discs, cut-off wheels, Superon welding rods</li>
        </ul>
      </div>
      <div>
        <h2 className="h2" style={{ fontSize: 32 }}>
          Diamond core bit sizes
        </h2>
        <ul className="size-links">
          {sizes.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`}>{p.diameterMm} mm diamond core bit</Link>
            </li>
          ))}
        </ul>
        <p className="long-body" style={{ marginTop: 16 }}>
          For granite, marble, quartz, vitrified tile, and concrete. Wet drilling on an angle grinder
          (M14) or drill machine.
        </p>
      </div>
    </div>
  );
}
