import { categories, type CategoryId } from '@/data/products';
import Link from 'next/link';

export function CategoryNav({ current }: { current?: string }) {
  const active = (current as CategoryId) || 'all';

  return (
    <nav className="category-nav" aria-label="Product categories">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.id === 'all' ? '/products' : `/products?category=${category.id}`}
          className={active === category.id ? 'is-active' : undefined}
        >
          {category.label}
        </Link>
      ))}
    </nav>
  );
}
