import Link from 'next/link';
import { site } from '@/data/site';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`logo${light ? ' logo--light' : ''}`}
      aria-label={site.name}
    >
      <img src="/logo.png?v=2" alt="" width={56} height={56} />
      <span className="logo-wordmark">
        <strong>Bishnoi</strong>
        <span>Diamond Core Bit</span>
      </span>
    </Link>
  );
}
