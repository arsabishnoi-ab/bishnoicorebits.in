'use client';

import { products } from '@/data/products';
import { contactEnquireMessage, whatsappHref } from '@/lib/enquiry';
import { FormEvent, useState } from 'react';

export function EnquiryForm({ defaultProduct }: { defaultProduct?: string }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(defaultProduct ?? '');
  const [message, setMessage] = useState('');

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const href = whatsappHref(
      contactEnquireMessage({ name, phone, product, message }),
    );
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="product">Product</label>
        <select
          id="product"
          name="product"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
        >
          <option value="">Diamond core bits</option>
          {products.map((item) => (
            <option key={item.slug} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Size, quantity, and when you need it"
        />
      </div>
      <button className="btn btn--dark" type="submit">
        Send on WhatsApp
      </button>
    </form>
  );
}
