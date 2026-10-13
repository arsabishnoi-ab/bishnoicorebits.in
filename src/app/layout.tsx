import type { Metadata } from 'next';
import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MobileEnquireBar } from '@/components/MobileEnquireBar';
import { locations } from '@/data/locations';
import { manufacturer, site } from '@/data/site';
import { absolute, coreKeywords, JsonLd, ORG_ID, organizationLd, SITE_URL, STORE_ID } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Diamond Core Bit Manufacturer & Wholesale Supplier in India | Bishnoi',
    template: `%s | ${site.name}`,
  },
  description:
    'Bishnoi diamond core bits, 6.5 mm to 57 mm, manufactured by Bishnoi Diamond Industries, Jaipur. Wholesale dealers and retail supply across India from Bishnoi Sales, Bengaluru — granite, marble, tile, and concrete.',
  keywords: coreKeywords,
  applicationName: site.name,
  authors: [{ name: manufacturer.name }],
  creator: manufacturer.name,
  publisher: manufacturer.name,
  category: 'Industrial tools',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: site.name,
    title: 'Bishnoi Diamond Core Bit — Manufacturer & Wholesale Supplier',
    description:
      'Diamond core bits 6.5–57 mm made in Jaipur. Wholesale and retail supply across India.',
    images: [{ url: '/images/hero-wide-poster.jpg', width: 1920, height: 1080, alt: 'Bishnoi diamond core bits' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bishnoi Diamond Core Bit — Manufacturer & Wholesale Supplier',
    description: 'Diamond core bits 6.5–57 mm made in Jaipur. Supplied across India.',
    images: ['/images/hero-wide-poster.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

const storeLd = {
  '@type': 'HardwareStore',
  '@id': STORE_ID,
  url: absolute('/'),
  image: absolute('/images/hero-wide-poster.jpg'),
  priceRange: '₹₹',
  parentOrganization: { '@id': ORG_ID },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    ...locations.map((location) => ({ '@type': location.kind === 'city' ? 'City' : 'State', name: location.name })),
  ],
  name: site.shopName,
  alternateName: site.name,
  description: site.shortDescription,
  telephone: site.contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.address.latitude,
    longitude: site.address.longitude,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '20:00',
  },
  taxID: site.gstin,
  hasMap: site.maps.place,
};

const websiteLd = {
  '@type': 'WebSite',
  '@id': absolute('/#website'),
  url: absolute('/'),
  name: site.name,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-IN',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500;600&family=Outfit:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={[organizationLd, storeLd, websiteLd]} />
        <Header />
        {children}
        <Footer />
        <MobileEnquireBar />
        <BackToTop />
      </body>
    </html>
  );
}
