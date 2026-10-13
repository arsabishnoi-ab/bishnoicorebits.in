import { site } from '@/data/site';
import { telHref } from '@/lib/enquiry';
import { Button } from './Button';

export function ShopMap() {
  return (
    <div className="map-block">
      <div className="map-block__info">
        <p className="eyebrow">Find us · Kalasipalya</p>
        <h2 className="h2">{site.shopName}</h2>
        <p className="long-body">{site.address.line}</p>
        <p className="long-body">
          {site.contact.hoursShort}. Sunday closed.
          <br />
          Mob {site.contact.phoneDisplay} · Ph {site.contact.landlineDisplay}
        </p>
        <div className="hero__actions">
          <Button href={site.maps.directions} variant="dark" external>
            Directions
          </Button>
          <Button href={telHref()}>Call</Button>
        </div>
      </div>
      <iframe
        className="map-frame"
        title={`${site.shopName} on Google Maps`}
        src={site.maps.searchEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
