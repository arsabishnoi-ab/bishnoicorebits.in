import { products } from '@/data/products';
import { reviews } from '@/data/reviews';
import { sampleReviews } from '@/data/sample-reviews';
import { site } from '@/data/site';
import { ReviewsReveal } from './ReviewsReveal';

const avatarColors = ['#1a73e8', '#d93025', '#188038', '#e37400', '#9334e6', '#007b83', '#c5221f'];

function Star({ fill }: { fill: number }) {
  const id = `s${Math.round(fill * 100)}`;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="#fbbc04" />
          <stop offset={`${fill * 100}%`} stopColor="#dadce0" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
}

export function Stars({ value }: { value: number }) {
  return (
    <span className="g-stars" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} fill={Math.max(0, Math.min(1, value - i))} />
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export function GoogleReviews() {
  const productName = (slug?: string) => products.find((p) => p.slug === slug)?.name;
  const preview = reviews.length === 0 && process.env.NODE_ENV !== 'production';
  const shown = preview ? sampleReviews : reviews;
  const score = preview
    ? shown.reduce((sum, r) => sum + r.rating, 0) / shown.length
    : site.rating.value;
  const count = preview ? shown.length : site.rating.count;

  return (
    <div className="g-reviews">
      <div className="g-reviews__summary">
        <div className="g-reviews__brand">
          <GoogleG />
          <span>Google reviews</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="g-reviews__score">{score.toFixed(1)}</span>
          <div>
            <Stars value={score} />
            <div className="g-reviews__count">{count} reviews</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginLeft: 'auto', flexWrap: 'wrap' }}>
          <a className="g-btn" href={site.maps.reviews} target="_blank" rel="noopener noreferrer">
            See all reviews
          </a>
          <a className="g-btn" href={site.maps.reviews} target="_blank" rel="noopener noreferrer">
            Write a review
          </a>
        </div>
      </div>

      {shown.length > 0 && (
        <ReviewsReveal
          cards={shown.map((review, i) => (
            <article className="g-review" key={`${review.author}-${i}`}>
              <div className="g-review__head">
                <span
                  className="g-review__avatar"
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {review.author.charAt(0).toUpperCase()}
                </span>
                <div>
                  <div className="g-review__name">{review.author}</div>
                  <div className="g-review__meta">Google review</div>
                </div>
              </div>
              <div className="g-review__rating">
                <Stars value={review.rating} />
                <span>{review.when}</span>
              </div>
              <p className="g-review__text">{review.text}</p>
              {productName(review.product) && (
                <span className="g-review__product">{productName(review.product)}</span>
              )}
            </article>
          ))}
        />
      )}
    </div>
  );
}
