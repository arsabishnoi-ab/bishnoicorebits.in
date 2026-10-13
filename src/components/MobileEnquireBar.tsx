'use client';

import { generalEnquireMessage, telHref, whatsappHref } from '@/lib/enquiry';
import { Button } from './Button';

export function MobileEnquireBar() {
  return (
    <div className="mobile-enquire" aria-label="Enquire">
      <Button href={telHref()}>Call</Button>
      <Button href={whatsappHref(generalEnquireMessage())} variant="dark" external>
        Enquire
      </Button>
    </div>
  );
}
