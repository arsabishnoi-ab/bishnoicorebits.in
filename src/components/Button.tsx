import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'dark';
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = 'default',
  external = false,
  className = '',
}: Props) {
  const cls = `btn${variant === 'dark' ? ' btn--dark' : ''} ${className}`.trim();

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
