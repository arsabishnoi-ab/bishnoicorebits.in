'use client';

import { useState, type ReactNode } from 'react';

export function ReviewsReveal({ cards, initial = 10 }: { cards: ReactNode[]; initial?: number }) {
  const [open, setOpen] = useState(false);
  const visible = open ? cards : cards.slice(0, initial);
  const hidden = cards.length - initial;

  return (
    <>
      <div className="g-reviews__grid">{visible}</div>
      {hidden > 0 && (
        <div className="g-reviews__more">
          <button type="button" className="g-btn" onClick={() => setOpen((v) => !v)}>
            {open ? 'Show fewer reviews' : `See all ${cards.length} reviews`}
          </button>
        </div>
      )}
    </>
  );
}
