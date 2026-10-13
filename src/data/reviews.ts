export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** As shown on Google, e.g. "2 months ago". */
  when: string;
  text: string;
  /** Product slug from products.ts, if the review mentions one. */
  product?: string;
  /** Link to the review on Google Maps. */
  url?: string;
};

/* Copy reviews verbatim from the Bishnoi Sales Google Maps listing. */
export const reviews: Review[] = [];
