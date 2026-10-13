import { CategoryNav } from '@/components/CategoryNav';
import { PageBanner } from '@/components/PageBanner';
import { ProductCard } from '@/components/ProductCard';
import {
  categories,
  coreBitProducts,
  getProductsByCategory,
  otherProducts,
} from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diamond Core Bits 6.5–57 mm, Flap Discs, Cut-off Wheels & Welding Rods',
  description:
    'Full catalogue: Bishnoi diamond core bits 6.5, 8.5, 10, 14, 19, 26, 33, 37, 40, 45, 50, 57 mm made in Jaipur, Bhinmal core bits, Staarek and Champion discs, Superon welding rods, Bostik grout. Wholesale and retail.',
  alternates: { canonical: '/products' },
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const list = getProductsByCategory(category);
  const label =
    categories.find((item) => item.id === category)?.label ?? 'All products';
  const showSplit = !category || category === 'all';
  const cores = coreBitProducts();
  const shop = otherProducts();

  return (
    <main className="page-offset">
      <PageBanner title="Product catalogue" />
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Products</span>
          </p>
          <p className="eyebrow" style={{ marginTop: 28 }}>
            {label}
          </p>
          <h1 className="page-title">Diamond core bits and shop stock</h1>
          <p className="long-body" style={{ marginTop: 20, marginBottom: 40 }}>
            Bishnoi Diamond Core Bit is manufactured in Jaipur. Bishnoi Sales lists the other
            counter products from Kalasipalya. Piece rates are on enquiry.
          </p>
          <CategoryNav current={category} />
          {showSplit ? (
            <>
              <div className="section-head" style={{ marginTop: 16 }} id="core-bits">
                <h2>Bishnoi Diamond Core Bit</h2>
              </div>
              <div className="product-grid">
                {cores.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
              <div className="section-head" style={{ marginTop: 72 }} id="bishnoi-sales">
                <h2>Bishnoi Sales</h2>
              </div>
              <div className="product-grid">
                {shop.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="product-grid">
              {list.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
