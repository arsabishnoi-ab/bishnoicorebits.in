import { formatPrice, type Product } from '@/data/products';
import { site } from '@/data/site';

export function telHref() {
  return `tel:${site.contact.phone}`;
}

export function whatsappHref(text: string) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function productEnquireMessage(product: Product) {
  return `Hello ${site.shopName}, I would like to enquire about ${product.name} (${formatPrice(product)}).`;
}

export function generalEnquireMessage() {
  return `Hello ${site.shopName}, I would like to enquire about diamond core bits and current prices.`;
}

export function contactEnquireMessage(input: {
  name: string;
  phone: string;
  product?: string;
  message: string;
}) {
  const lines = [
    `Hello ${site.shopName}, a website enquiry:`,
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
  ];
  if (input.product) lines.push(`Product: ${input.product}`);
  if (input.message) lines.push(input.message);
  return lines.join('\n');
}
