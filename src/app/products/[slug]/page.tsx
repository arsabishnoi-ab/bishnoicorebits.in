import { Button } from '@/components/Button';
import { PageBanner } from '@/components/PageBanner';
import { ProductCard } from '@/components/ProductCard';
import { categoryLabel, formatPrice, getProduct, products } from '@/data/products';
import { manufacturer, site } from '@/data/site';
import { absolute, breadcrumbLd, JsonLd, ORG_ID } from '@/lib/seo';
import { productEnquireMessage, telHref, whatsappHref } from '@/lib/enquiry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Product' };
  const isCore = product.category === 'core-bits';
  const title = isCore
    ? `${product.name} for Granite, Marble & Tile — Manufacturer & Wholesale`
    : `${product.name} — Wholesale & Retail, Bengaluru`;
  const description = isCore
    ? `${product.name}${product.diameterMm ? ` (${product.diameterMm} mm)` : ''} — ${product.summary} Made by ${manufacturer.name}, Jaipur. Wholesale dealer rates and all-India supply from ${site.shopName}.`
    : `${product.name} — ${product.summary} Wholesale and retail from ${site.shopName}, Kalasipalya, Bengaluru. All-India dispatch.`;
  const path = `/products/${product.slug}`;
  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.brand} ${categoryLabel(product.category)}`,
      ...(product.diameterMm && isCore
        ? [`${product.diameterMm} mm diamond core bit`, `${product.diameterMm}mm core bit`, `${product.diameterMm} mm core bit price`]
        : []),
      isCore ? 'diamond core bit wholesale' : `${categoryLabel(product.category)} wholesale`,
    ],
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: product.image, alt: product.name }] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .sort((a, b) => {
      const target = product.diameterMm ?? 0;
      return Math.abs((a.diameterMm ?? 99) - target) - Math.abs((b.diameterMm ?? 99) - target);
    })
    .slice(0, 3);

  const path = `/products/${product.slug}`;
  const isCore = product.category === 'core-bits';

  return (
    <main className="page-offset">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
            { name: product.name, path },
          ]),
          {
            '@type': 'Product',
            '@id': absolute(`${path}#product`),
            name: product.name,
            description: product.description,
            image: [absolute(product.image), ...(product.gallery ?? []).map((src) => absolute(src))],
            sku: product.slug,
            category: categoryLabel(product.category),
            brand: { '@type': 'Brand', name: product.brand },
            ...(isCore && product.brand === 'Bishnoi' ? { manufacturer: { '@id': ORG_ID } } : {}),
            ...(product.diameterMm
              ? {
                  additionalProperty: {
                    '@type': 'PropertyValue',
                    name: 'Diameter',
                    value: product.diameterMm,
                    unitCode: 'MMT',
                  },
                }
              : {}),
            url: absolute(path),
          },
        ]}
      />
      <PageBanner title={product.name} image={product.image} />
      <section className="section">
        <div className="container split">
          <div>
            <p className="breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/products">Products</a>
              <span>/</span>
              <span>{product.name}</span>
            </p>
            <p className="eyebrow" style={{ marginTop: 28 }}>
              {product.brand}
            </p>
            <h1 className="page-title product-name">{product.name}</h1>
            <p className="price-lg">{formatPrice(product)}</p>
            <div className="img-frame ratio-4-3" style={{ marginBottom: 16 }}>
              <img
                src={product.image}
                alt={product.name}
                className="img-editorial"
                width={800}
                height={600}
              />
            </div>
            {product.gallery?.length ? (
              <div className="product-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {product.gallery.map((src, i) => (
                  <div className="img-frame ratio-4-3" key={src}>
                    <img
                      src={src}
                      alt={`${product.name} — photo ${i + 2}`}
                      className="img-editorial"
                      width={400}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <p className="long-body">{product.description}</p>
            <ul className="spec-list">
              {product.specs.map((spec) => (
                <li key={spec.label}>
                  <span>{spec.label}</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
            <div className="hero__actions" style={{ marginTop: 32 }}>
              <Button href={whatsappHref(productEnquireMessage(product))} variant="dark" external>
                Enquire on WhatsApp
              </Button>
              <Button href={telHref()}>Call</Button>
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 ? (
        <section className="section section--band">
          <div className="container">
            <p className="eyebrow">Related</p>
            <h2 style={{ marginBottom: 48 }}>More in this range</h2>
            <div className="product-grid">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
