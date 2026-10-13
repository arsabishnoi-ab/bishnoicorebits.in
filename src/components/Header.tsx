'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { generalEnquireMessage, whatsappHref } from '@/lib/enquiry';
import { Button } from './Button';
import { Logo } from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products?category=core-bits', label: 'Core bits' },
  { href: '/#bishnoi-sales', label: 'Bishnoi Sales' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled;

  return (
    <header className={`site-header${solid || open ? ' is-solid' : ' is-overlay'}`}>
      <div className="container site-header__inner">
        <Logo />

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  (link.href === '/' && pathname === '/') ||
                  (link.href.startsWith('/products') && pathname === '/products') ||
                  (link.href === '/about' && pathname === '/about') ||
                  (link.href === '/wholesale' && pathname === '/wholesale') ||
                  (link.href === '/contact' && pathname === '/contact')
                    ? 'is-active'
                    : undefined
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="header-cluster">
          <Button href={whatsappHref(generalEnquireMessage())} variant="dark" external>
            Enquire
          </Button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <nav className={`mobile-nav${open ? ' is-open' : ''}`} aria-label="Mobile">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Button href={whatsappHref(generalEnquireMessage())} variant="dark" external>
          Enquire
        </Button>
      </nav>
    </header>
  );
}
