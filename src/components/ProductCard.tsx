import Link from 'next/link';
import { categoryLabel, formatPrice, type Product } from '@/data/products';
import { productEnquireMessage, whatsappHref } from '@/lib/enquiry';
import { Button } from './Button';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`}>
        <div className="product-card__media img-frame ratio-4-3">
          <img
            src={product.image}
            alt={product.name}
            className="img-editorial"
            width={640}
            height={480}
          />
        </div>
        <p className="product-card__meta">{categoryLabel(product.category)}</p>
        <h3 className="card-title">{product.name}</h3>
        <p className="product-card__price">{formatPrice(product)}</p>
      </Link>
      <Button href={whatsappHref(productEnquireMessage(product))} external>
        Enquire
      </Button>
    </article>
  );
}
