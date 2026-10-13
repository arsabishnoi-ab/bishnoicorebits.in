export const categories = [
  { id: 'all', label: 'All' },
  { id: 'core-bits', label: 'Core bits' },
  { id: 'flap-discs', label: 'Flap discs' },
  { id: 'mat-discs', label: 'Mat discs' },
  { id: 'cut-off-wheels', label: 'Cut-off discs' },
  { id: 'felt-discs', label: 'Felt discs' },
  { id: 'grinding-discs', label: 'Grinding discs' },
  { id: 'buffing', label: 'Buffing' },
  { id: 'welding', label: 'Welding' },
  { id: 'grout', label: 'Grout' },
  { id: 'hand-pads', label: 'Hand pads' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export const shopCategories = categories.filter(
  (category) => category.id !== 'all' && category.id !== 'core-bits',
);

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: Exclude<CategoryId, 'all'>;
  diameterMm?: number;
  price: number | null;
  unit: string;
  featured?: boolean;
  image: string;
  original?: string;
  gallery?: string[];
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: 'bishnoi-6-5mm-diamond-core-bit',
    name: 'Bishnoi 6.5 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 6.5,
    price: null,
    unit: 'piece',
    featured: true,
    image: '/products/bishnoi-6-5mm-catalog.jpg',
    original: '/products/originals/bishnoi-6-5mm-original.jpeg',
    gallery: [
      '/products/bishnoi-6-5mm-jar.jpeg',
      '/products/bishnoi-6-5mm.jpg',
      '/products/core-bit-shank.jpg',
    ],
    summary: 'Smallest listed sleeve for tile, granite, and light concrete.',
    description:
      'Bishnoi 6.5 mm diamond core bit in a white vial with red cap. Packed for wet drilling on an angle grinder or drill, for making a small clean hole in granite, marble, and concrete. Price on request.',
    specs: [
      { label: 'Diameter', value: '6.5 mm' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Machine', value: 'Angle grinder and drill' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: '8-5mm-diamond-core-bit',
    name: 'Bishnoi 8.5 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 8.5,
    price: null,
    unit: 'piece',
    image: '/products/core-bit-8-5mm-catalog.jpg',
    original: '/products/originals/core-bit-8-5mm-original.jpeg',
    gallery: ['/products/core-bit-8-5mm-jar.jpeg', '/products/core-bit-8-5mm.jpg'],
    summary: 'Red-tube 8.5 mm core for granite, marble, and concrete.',
    description:
      'An 8.5 mm diamond core drill packed in a red tube for angle grinders and drill machines. For making holes in granite, marble, and concrete. Price on request.',
    specs: [
      { label: 'Diameter', value: '8.5 mm' },
      { label: 'Machine', value: 'Angle grinder and drill' },
      { label: 'Use', value: 'Granite, marble, concrete' },
      { label: 'Origin', value: 'Made in India' },
    ],
  },
  {
    slug: 'bishnoi-10mm-diamond-core-bit',
    name: 'Bishnoi 10 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 10,
    price: null,
    unit: 'piece',
    image: '/products/bishnoi-10mm-catalog.jpg',
    original: '/products/originals/bishnoi-10mm-original.jpeg',
    gallery: ['/products/bishnoi-10mm-jar.jpeg', '/products/bishnoi-10mm.jpg'],
    summary: 'Ten millimetre Bishnoi vial for small service holes.',
    description:
      'Bishnoi 10 mm diamond core bit, white vial, red cap, yellow trade label. Wet use on an angle grinder or drill. Enquire for the day’s piece rate.',
    specs: [
      { label: 'Diameter', value: '10 mm' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Machine', value: 'Angle grinder and drill' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-14mm-diamond-core-bit',
    name: 'Bishnoi 14 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 14,
    price: null,
    unit: 'piece',
    image: '/products/bishnoi-14mm-catalog.jpg',
    original: '/products/originals/bishnoi-14mm-original.jpeg',
    gallery: ['/products/bishnoi-14mm-jar.jpeg', '/products/bishnoi-14mm.jpg'],
    summary: 'Yellow-vial 14 mm core for tile and masonry sleeves.',
    description:
      'Bishnoi 14 mm diamond core bit in the yellow vial. Same wet-drill instruction as the rest of the range — water during drilling on an angle grinder or drill. Price on request.',
    specs: [
      { label: 'Diameter', value: '14 mm' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Machine', value: 'Angle grinder and drill' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-19mm-diamond-core-bit',
    name: 'Bishnoi 19 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 19,
    price: null,
    unit: 'piece',
    image: '/products/bishnoi-19mm-catalog.jpg',
    original: '/products/originals/bishnoi-19mm-original.jpeg',
    gallery: ['/products/bishnoi-19mm-jar.jpeg', '/products/bishnoi-19mm.jpg'],
    summary: 'Nineteen millimetre Bishnoi vial, three-quarter inch class.',
    description:
      'Bishnoi 19 mm diamond core bit in a slim white vial. For granite, marble, and concrete on an angle grinder or drill, with water. Price on request.',
    specs: [
      { label: 'Diameter', value: '19 mm' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Machine', value: 'Angle grinder and drill' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-26mm-diamond-core-bit',
    name: 'Bishnoi 26 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 26,
    price: null,
    unit: 'piece',
    featured: true,
    image: '/products/bishnoi-26mm-catalog.jpg',
    original: '/products/originals/bishnoi-26mm-original.jpeg',
    gallery: ['/products/bishnoi-26mm-jar.jpeg', '/products/bishnoi-26mm.jpg'],
    summary: 'One-inch class Bishnoi core for pipe and service holes.',
    description:
      'Bishnoi 26 mm diamond core bit for pipe and service penetrations in granite, marble, and concrete. Packed in the white vial with red cap. Wet use. Price on request.',
    specs: [
      { label: 'Diameter', value: '26 mm' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Machine', value: 'Angle grinder and drill' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-33mm-diamond-core-bit',
    name: 'Bishnoi 33 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 33,
    price: null,
    unit: 'piece',
    featured: true,
    image: '/products/bishnoi-33mm-catalog.jpg',
    original: '/products/originals/bishnoi-33mm-original.jpeg',
    gallery: ['/products/bishnoi-33mm-jar.jpeg', '/products/bishnoi-33mm.jpg'],
    summary: 'Thirty-three millimetre M-10 core, a counter staple.',
    description:
      'Bishnoi 33 mm (M-10) diamond core bit for mid-size holes in granite, marble, and concrete. Angle grinder or drill, water during the cut. Enquire for piece rate.',
    specs: [
      { label: 'Diameter', value: '33 mm' },
      { label: 'Thread', value: 'M-10' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-37mm-diamond-core-bit',
    name: 'Bishnoi 37 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 37,
    price: null,
    unit: 'piece',
    image: '/products/bishnoi-37mm-catalog.jpg',
    original: '/products/originals/bishnoi-37mm-original.jpeg',
    gallery: ['/products/bishnoi-37mm-jar.jpeg', '/products/bishnoi-37mm.jpg'],
    summary: 'Thirty-seven millimetre M-10 Bishnoi core.',
    description:
      'Bishnoi 37 mm (M-10) diamond core bit. Same wet-drill instruction and Kalasipalya counter supply as the rest of the labelled range. Price on request.',
    specs: [
      { label: 'Diameter', value: '37 mm' },
      { label: 'Thread', value: 'M-10' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-40mm-diamond-core-bit',
    name: 'Bishnoi 40 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 40,
    price: null,
    unit: 'piece',
    image: '/products/bishnoi-40mm-catalog.jpg',
    original: '/products/originals/bishnoi-40mm-original.jpeg',
    gallery: ['/products/bishnoi-40mm-jar.jpeg', '/products/bishnoi-40mm.jpg'],
    summary: 'Forty millimetre M-10 core for drains and sleeves.',
    description:
      'Bishnoi 40 mm (M-10) diamond core bit for larger sleeves in granite, marble, and concrete. Wet drilling on an angle grinder or drill. Price on request.',
    specs: [
      { label: 'Diameter', value: '40 mm' },
      { label: 'Thread', value: 'M-10' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-45mm-diamond-core-bit',
    name: 'Bishnoi 45 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 45,
    price: null,
    unit: 'piece',
    image: '/products/bishnoi-45mm-catalog.jpg',
    original: '/products/originals/bishnoi-45mm-original.jpeg',
    gallery: ['/products/bishnoi-45mm-jar.jpeg', '/products/bishnoi-45mm.jpg'],
    summary: 'Forty-five millimetre M-10 Bishnoi barrel.',
    description:
      'Bishnoi 45 mm (M-10) diamond core bit. Packed in the white jar with red cap and yellow export-quality label. Wet use. Price on request.',
    specs: [
      { label: 'Diameter', value: '45 mm' },
      { label: 'Thread', value: 'M-10' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-50mm-diamond-core-bit',
    name: 'Bishnoi 50 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 50,
    price: null,
    unit: 'piece',
    featured: true,
    image: '/products/bishnoi-50mm-catalog.jpg',
    original: '/products/originals/bishnoi-50mm-original.jpeg',
    gallery: ['/products/bishnoi-50mm-jar.jpeg', '/products/bishnoi-50mm.jpg'],
    summary: 'Two-inch class 50 mm (M-10) Bishnoi core.',
    description:
      'Bishnoi 50 mm (M-10) diamond core bit for plumbing and structural penetrations in granite, marble, and concrete. Wet drilling. Confirm stock on WhatsApp.',
    specs: [
      { label: 'Diameter', value: '50 mm' },
      { label: 'Thread', value: 'M-10' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bishnoi-57mm-diamond-core-bit',
    name: 'Bishnoi 57 mm diamond core bit',
    brand: 'Bishnoi',
    category: 'core-bits',
    diameterMm: 57,
    price: null,
    unit: 'piece',
    featured: true,
    image: '/products/bishnoi-57mm-catalog.jpg',
    original: '/products/originals/bishnoi-57mm-original.jpeg',
    gallery: ['/products/bishnoi-57mm-jar.jpeg', '/products/bishnoi-57mm.jpg'],
    summary: 'Largest labelled Bishnoi jar on the counter, 57 mm (M-10).',
    description:
      'Bishnoi 57 mm (M-10) diamond core bit — the largest size in the photographed range. For wide cores in granite, marble, and concrete. Use water during drilling. Price on request.',
    specs: [
      { label: 'Diameter', value: '57 mm' },
      { label: 'Thread', value: 'M-10' },
      { label: 'Brand', value: 'Bishnoi' },
      { label: 'Use', value: 'Granite, marble, concrete — wet' },
    ],
  },
  {
    slug: 'bhinmal-diamond-core-bit',
    name: 'Bhinmal Power Tools diamond core bit',
    brand: 'Bhinmal',
    category: 'core-bits',
    price: null,
    unit: 'piece',
    image: '/products/bhinmal-catalog.jpg',
    original: '/products/originals/bhinmal-original.jpeg',
    gallery: ['/products/bhinmal-jar.jpeg', '/products/bhinmal.jpg'],
    summary: 'Bhinmal red-tube core for granite, marble, and concrete.',
    description:
      'Bhinmal Power Tools diamond core drill in the red plastic tube, for making holes in granite, marble, and concrete. Stocked beside the Bishnoi vials. Share the diameter you need on WhatsApp.',
    specs: [
      { label: 'Brand', value: 'Bhinmal Power Tools' },
      { label: 'Type', value: 'Diamond core' },
      { label: 'Use', value: 'Granite, marble, concrete' },
    ],
  },
  {
    slug: 'staarek-4-inch-flap-disc-60',
    name: 'Staarek 4 inch flap disc 60 grit',
    brand: 'Staarek',
    category: 'flap-discs',
    diameterMm: 100,
    price: null,
    unit: 'piece',
    image: '/products/staarek-flap-disc.jpg',
    original: '/products/originals/staarek-flap-disc-face-original.jpg',
    gallery: [
      '/products/staarek-flap-disc-face.jpg',
      '/products/staarek-flap-disc-stack.jpg',
    ],
    summary: 'Four-inch 60-grit flap disc, 100 × 16 mm, 15,200 RPM.',
    description:
      'Staarek 4 inch flap disc, grit 60, 100 × 16 mm arbor. For blending and stock removal on metal. Max 15,200 RPM, EN13743. Sold piece or shrink-wrapped stack. Price on request.',
    specs: [
      { label: 'Size', value: '4 inch / 100 × 16 mm' },
      { label: 'Grit', value: '60' },
      { label: 'Brand', value: 'Staarek' },
      { label: 'Max RPM', value: '15,200' },
    ],
  },
  {
    slug: 'champion-mat-non-woven-disc',
    name: 'Champion mat / non-woven polishing disc',
    brand: 'Champion',
    category: 'mat-discs',
    price: null,
    unit: 'piece',
    image: '/products/champion-mat-disc.jpg',
    original: '/products/originals/champion-mat-disc-face-original.jpg',
    gallery: [
      '/products/champion-mat-disc-face.jpg',
      '/products/champion-mat-disc-face-2.jpg',
      '/products/champion-mat-disc-stack.jpg',
    ],
    summary: 'Non-woven mat disc for blending and polish work.',
    description:
      'Champion non-woven mat / polishing disc (U3). Softer than a flap disc — for blending and finish on metal. Sold piece or shrink-wrapped stack. Price on request.',
    specs: [
      { label: 'Type', value: 'Mat / non-woven disc' },
      { label: 'Brand', value: 'Champion' },
      { label: 'Range', value: 'Polishing disc U3' },
      { label: 'Max RPM', value: '12,000' },
    ],
  },
  {
    slug: 'staarek-4-inch-cut-off-wheel',
    name: 'Staarek 4 inch cut-off wheel',
    brand: 'Staarek',
    category: 'cut-off-wheels',
    diameterMm: 107,
    price: null,
    unit: 'piece',
    image: '/products/staarek-cutoff.jpg',
    original: '/products/originals/staarek-cutoff-face-original.jpg',
    gallery: [
      '/products/staarek-cutoff-face.jpg',
      '/products/staarek-cutoff-wrapped.jpg',
    ],
    summary: 'Thin 4 inch cutting disc for metal and stainless, 107 × 1.2 × 16 mm.',
    description:
      'Staarek Export 4 inch cutting wheel for metal, inox, and stainless. 107 × 1.2 × 16 mm, max 15,200 RPM. Sold loose or shrink-wrapped. Price on request.',
    specs: [
      { label: 'Size', value: '4 inch / 107 × 1.2 × 16 mm' },
      { label: 'Brand', value: 'Staarek' },
      { label: 'Use', value: 'Metal, inox, stainless' },
      { label: 'Max RPM', value: '15,200' },
    ],
  },
  {
    slug: 'felt-polishing-disc',
    name: 'Felt polishing disc',
    brand: 'Trade',
    category: 'felt-discs',
    price: null,
    unit: 'piece',
    image: '/products/felt-disc.jpg',
    original: '/products/originals/felt-disc-stack-original.jpg',
    gallery: ['/products/felt-disc-stack.jpg', '/products/felt-disc-top.jpg'],
    summary: 'Soft felt disc for final polish on metal and stone.',
    description:
      'Cream felt polishing discs with a plastic hub, sold as a shrink-wrapped stack. For final polish after the mat or flap disc. Price on request.',
    specs: [
      { label: 'Type', value: 'Felt polishing disc' },
      { label: 'Supply', value: 'Piece or stack' },
      { label: 'Use', value: 'Final polish' },
    ],
  },
  {
    slug: 'superon-super-stainless-308l',
    name: 'Superon Super Stainless 308L 2.50 × 350 mm',
    brand: 'Superon',
    category: 'welding',
    price: null,
    unit: 'box',
    image: '/products/superon-308l.jpg',
    original: '/products/originals/superon-308l-front-original.jpeg',
    gallery: ['/products/superon-308l-back.jpg'],
    summary: 'Stainless welding electrodes, 2.50 × 350 mm.',
    description:
      'Superon Super Stainless 308L electrodes, 2.50 × 350 mm, ISO 9001:2015. For stainless welding. Price on request.',
    specs: [
      { label: 'Range', value: 'Super Stainless 308L' },
      { label: 'Size', value: '2.50 × 350 mm' },
      { label: 'Brand', value: 'Superon' },
      { label: 'Origin', value: 'Made in India' },
    ],
  },
  {
    slug: 'staarek-4-inch-flexible-grinding-disc-36',
    name: 'Staarek 4 inch flexible grinding disc 36 grit',
    brand: 'Staarek',
    category: 'grinding-discs',
    diameterMm: 100,
    price: null,
    unit: 'piece',
    image: '/products/staarek-flex-grind-36.jpg',
    original: '/products/originals/staarek-flex-grind-36-original.jpeg',
    summary: 'Flexible grinding disc, 4 inch, grit 36, 100 × 2.7 × 16 mm.',
    description:
      'Staarek 4 inch flexible grinding disc, grit 36, for metal, inox, and stainless. 100 × 2.7 × 16 mm, max 12,000 RPM. Price on request.',
    specs: [
      { label: 'Size', value: '4 inch / 100 × 2.7 × 16 mm' },
      { label: 'Grit', value: '36' },
      { label: 'Brand', value: 'Staarek' },
      { label: 'Max RPM', value: '12,000' },
    ],
  },
  {
    slug: 'bostik-anchor-grout',
    name: 'Bostik Anchor Grout',
    brand: 'Bostik',
    category: 'grout',
    price: null,
    unit: 'pack',
    image: '/products/bostik-anchor-grout.jpg',
    original: '/products/originals/bostik-anchor-grout-original.jpeg',
    summary: 'Polyester resin based grout for anchors.',
    description:
      'Bostik Anchor Grout, polyester resin based, for rapid strength, vibration resistance, and corrosion resistance. Price on request.',
    specs: [
      { label: 'Type', value: 'Polyester resin grout' },
      { label: 'Brand', value: 'Bostik' },
      { label: 'Use', value: 'Anchoring' },
    ],
  },
  {
    slug: 'white-cotton-buffing-wheel',
    name: 'White cotton buffing wheel',
    brand: 'Trade',
    category: 'buffing',
    price: null,
    unit: 'piece',
    image: '/products/white-buffing-wheel.jpg',
    original: '/products/originals/white-buffing-wheel-original.jpeg',
    summary: 'Stitched white cloth buff with green hub.',
    description:
      'White cotton buffing wheel, spiral stitched, green plastic hub. For polish on metal. Price on request.',
    specs: [
      { label: 'Type', value: 'Cotton buffing wheel' },
      { label: 'Colour', value: 'White' },
      { label: 'Use', value: 'Polishing' },
    ],
  },
  {
    slug: 'staarek-6x1-u3-disc',
    name: 'Staarek 6 × 1 U3 disc',
    brand: 'Staarek',
    category: 'grinding-discs',
    price: null,
    unit: 'piece',
    image: '/products/staarek-6x1-u3.jpg',
    original: '/products/originals/staarek-6x1-u3-original.jpeg',
    summary: 'Staarek unitized disc, size 6 × 1, density U3.',
    description:
      'Staarek 6 × 1 density U3 disc for industrial blending and finish. Shrink-wrapped. Price on request.',
    specs: [
      { label: 'Size', value: '6 × 1' },
      { label: 'Density', value: 'U3' },
      { label: 'Brand', value: 'Staarek' },
    ],
  },
  {
    slug: '3m-scotch-brite-all-rounder',
    name: '3M Scotch-Brite All-Rounder hand pad',
    brand: '3M',
    category: 'hand-pads',
    price: null,
    unit: 'pack',
    image: '/products/scotch-brite-all-rounder.jpg',
    original: '/products/originals/scotch-brite-all-rounder-original.jpeg',
    summary: 'Hand pad for wood, metal, and ceramic.',
    description:
      '3M Scotch-Brite All-Rounder hand pad for wood, metal, and ceramic finishing, rust removal, and tile or wall clean-up. Price on request.',
    specs: [
      { label: 'Type', value: 'Hand pad' },
      { label: 'Brand', value: '3M Scotch-Brite' },
      { label: 'Use', value: 'Wood, metal, ceramic' },
    ],
  },
  {
    slug: 'staarek-6x2-u3-disc',
    name: 'Staarek 6 × 2 U3 disc',
    brand: 'Staarek',
    category: 'grinding-discs',
    price: null,
    unit: 'piece',
    image: '/products/staarek-6x2-u3.jpg',
    original: '/products/originals/staarek-6x2-u3-original.jpeg',
    summary: 'Thicker Staarek unitized disc, size 6 × 2, density U3.',
    description:
      'Staarek 6 × 2 density U3 disc — thicker than the 6 × 1. For industrial blending. Price on request.',
    specs: [
      { label: 'Size', value: '6 × 2' },
      { label: 'Density', value: 'U3' },
      { label: 'Brand', value: 'Staarek' },
    ],
  },
  {
    slug: 'black-cotton-buffing-wheel',
    name: 'Black cotton buffing wheel',
    brand: 'Trade',
    category: 'buffing',
    price: null,
    unit: 'piece',
    image: '/products/black-buffing-wheel.jpg',
    original: '/products/originals/black-buffing-wheel-original.jpeg',
    summary: 'Stitched black cloth buff with green hub.',
    description:
      'Black cotton buffing wheel, spiral stitched, green plastic hub. For cutting compound and polish. Price on request.',
    specs: [
      { label: 'Type', value: 'Cotton buffing wheel' },
      { label: 'Colour', value: 'Black' },
      { label: 'Use', value: 'Polishing' },
    ],
  },
  {
    slug: 'champion-14-inch-cutting-wheel',
    name: 'Champion 14 inch cutting wheel',
    brand: 'Champion',
    category: 'cut-off-wheels',
    diameterMm: 355,
    price: null,
    unit: 'piece',
    image: '/products/champion-14-cutoff.jpg',
    original: '/products/originals/champion-14-cutoff-original.jpeg',
    summary: 'Fourteen-inch cutting wheel, 355 × 2.5 × 25.4 mm, 4,400 RPM.',
    description:
      'Champion 14 inch cutting wheel, 355 × 2.5 × 25.4 mm, max 4,400 RPM. For chop saws. Price on request.',
    specs: [
      { label: 'Size', value: '14 inch / 355 × 2.5 × 25.4 mm' },
      { label: 'Brand', value: 'Champion' },
      { label: 'Max RPM', value: '4,400' },
    ],
  },
  {
    slug: 'easygut-power-flap-wheel-220',
    name: 'Easygut Power Flap Wheel 220 grit',
    brand: 'Easygut',
    category: 'flap-discs',
    price: null,
    unit: 'piece',
    image: '/products/easygut-flap-220.jpg',
    original: '/products/originals/easygut-flap-220-original.jpeg',
    summary: 'Easygut flap wheel, grit 220, size 6 × 1.',
    description:
      'Easygut The Original Power Flap Wheel, grit 220, size 6 × 1. For finer blending. Price on request.',
    specs: [
      { label: 'Size', value: '6 × 1' },
      { label: 'Grit', value: '220' },
      { label: 'Brand', value: 'Easygut' },
    ],
  },
  {
    slug: 'classic-flap-wheel-120',
    name: 'Classic Flap Wheel 120 grit',
    brand: 'Classic',
    category: 'flap-discs',
    price: null,
    unit: 'piece',
    image: '/products/classic-flap-120.jpg',
    original: '/products/originals/classic-flap-120-original.jpeg',
    summary: 'Classic flap wheel, grit 120.',
    description:
      'Classic Flap Wheel, grit 120. For general blending on metal. Price on request.',
    specs: [
      { label: 'Grit', value: '120' },
      { label: 'Brand', value: 'Classic' },
      { label: 'Type', value: 'Flap wheel' },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: CategoryId | string | undefined) {
  if (!category || category === 'all') return products;
  return products.filter((product) => product.category === category);
}

export function featuredProducts() {
  return products.filter((product) => product.featured);
}

export function coreBitProducts() {
  return products.filter((product) => product.category === 'core-bits');
}

export function otherProducts() {
  return products.filter((product) => product.category !== 'core-bits');
}

export function formatPrice(product: Product) {
  if (product.price == null) return 'Price on request';
  return `₹${product.price.toLocaleString('en-IN')} / ${product.unit}`;
}

export function categoryLabel(id: Product['category']) {
  return categories.find((category) => category.id === id)?.label ?? id;
}
