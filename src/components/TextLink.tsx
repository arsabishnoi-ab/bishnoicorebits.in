import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function TextLink({ href, children, external = false, className = '' }: Props) {
  const cls = `text-link ${className}`.trim();

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}
