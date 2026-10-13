import { manufacturer, site } from '@/data/site';
import { generalEnquireMessage, whatsappHref } from '@/lib/enquiry';
import { Button } from './Button';
import { HeroVideoPlayer } from './HeroVideoPlayer';

export function HeroFullVideo() {
  return (
    <section className="hero-full" id="hero">
      <HeroVideoPlayer />
      <div className="hero-full__shade" />

      <div className="container hero-full__content">
        <p className="eyebrow hero-full__eyebrow">
          {manufacturer.name} · {manufacturer.city}
        </p>
        <h1 className="hero-full__title">Diamond core bits, made in Jaipur</h1>
        <p className="hero-full__lede">6.5 mm to 57 mm · Sold by {site.shopName}, Bengaluru</p>
        <div className="hero__actions">
          <Button href="#core-bits" className="btn--light">
            View core bits
          </Button>
          <Button href={whatsappHref(generalEnquireMessage())} className="btn--ghost-light" external>
            Enquire
          </Button>
        </div>
      </div>

      <a className="hero-scroll" href="#core-bits">
        Scroll
      </a>
    </section>
  );
}
