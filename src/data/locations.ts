export type Location = {
  slug: string;
  name: string;
  /** State or region shown beside the name. */
  region: string;
  kind: 'city' | 'region';
  /** Towns and areas covered from this page. */
  areas: string[];
  /** One or two sentences specific to this market. */
  local: string;
  /** How orders reach this location. */
  supply: string;
};

const fromBengaluru = 'Dispatched from our Bengaluru counter by transport or courier.';
const fromJaipur = 'Dispatched direct from the Jaipur factory by transport or courier.';

export const locations: Location[] = [
  {
    slug: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan',
    kind: 'city',
    areas: ['Patel Nagar', 'Muhana Mandi', 'Sanganer', 'Vishwakarma Industrial Area', 'Mansarovar', 'Sitapura'],
    local:
      'Jaipur is where Bishnoi diamond core bits are made — at the Bishnoi Diamond Industries head office in Patel Nagar, near Muhana Mandi. Stone fitters and hardware shops in the city buy factory-direct.',
    supply: 'Collect from the factory or get same-week dispatch within the city.',
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    region: 'Rajasthan',
    kind: 'region',
    areas: ['Jaipur', 'Kishangarh', 'Makrana', 'Udaipur', 'Jodhpur', 'Jalore', 'Ajmer', 'Kota', 'Bikaner'],
    local:
      'Rajasthan is the heart of India’s marble and granite trade — Makrana and Kishangarh marble, Jalore granite, Udaipur stone yards. Our bits are made in Jaipur for exactly this kind of hard stone.',
    supply: fromJaipur,
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    region: 'Karnataka',
    kind: 'city',
    areas: ['Kalasipalya', 'KR Market', 'Jayanagar', 'Whitefield', 'Electronic City', 'Yelahanka', 'Peenya', 'Hebbal'],
    local:
      'Our Bangalore counter, Bishnoi Sales, is in Kalasipalya New Extension near KR Market. Plumbers, electricians, and granite fitters across the city pick up core bits, flap discs, and welding rods here.',
    supply: 'Walk in at Kalasipalya, or order on WhatsApp for pickup or local delivery.',
  },
  {
    slug: 'north-karnataka',
    name: 'North Karnataka',
    region: 'Karnataka',
    kind: 'region',
    areas: ['Hubballi', 'Dharwad', 'Belagavi', 'Kalaburagi', 'Vijayapura', 'Ballari', 'Bagalkot', 'Ilkal', 'Raichur'],
    local:
      'North Karnataka cuts some of India’s best-known granite — Ilkal pink in Bagalkot district — and Shahabad stone around Kalaburagi. Dealers in Hubballi, Belagavi, and Ballari stock our 6.5–57 mm range.',
    supply: fromBengaluru,
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    region: 'Kerala',
    kind: 'region',
    areas: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur', 'Palakkad', 'Kottayam'],
    local:
      'Across Kerala, homes and villas use granite counters and large vitrified tiles. Fitters in Kochi, Thiruvananthapuram, and Kozhikode use our bits for tap, sink, and pipe holes.',
    supply: fromBengaluru,
  },
  {
    slug: 'visakhapatnam',
    name: 'Visakhapatnam',
    region: 'Andhra Pradesh',
    kind: 'city',
    areas: ['Gajuwaka', 'MVP Colony', 'Madhurawada', 'Dwaraka Nagar', 'Pendurthi', 'Anakapalli'],
    local:
      'Visakhapatnam’s building boom runs on Andhra granite — black galaxy from Ongole and Prakasam district. Contractors here use our core bits for counters, flooring, and plumbing cut-outs.',
    supply: fromBengaluru,
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    region: 'Tamil Nadu',
    kind: 'city',
    areas: ['Parrys', 'T Nagar', 'Anna Nagar', 'Velachery', 'Ambattur', 'Porur', 'Tambaram', 'Guindy'],
    local:
      'Chennai builders work with Tamil Nadu granite from Krishnagiri and Salem along with imported marble. Our diamond core bits drill both cleanly with water.',
    supply: fromBengaluru,
  },
  {
    slug: 'kolkata',
    name: 'Kolkata',
    region: 'West Bengal',
    kind: 'city',
    areas: ['Burrabazar', 'Howrah', 'Salt Lake', 'New Town', 'Dum Dum', 'Behala', 'Garia'],
    local:
      'Kolkata and Howrah hardware dealers stock core bits for tile installers, plumbers, and electricians across the city’s new apartments and old buildings alike.',
    supply: 'Dispatched by transport from Bengaluru or Jaipur, whichever is faster.',
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    region: 'Maharashtra',
    kind: 'city',
    areas: ['Lohar Chawl', 'Andheri', 'Thane', 'Navi Mumbai', 'Bhiwandi', 'Borivali', 'Kurla'],
    local:
      'Mumbai’s high-rise interiors use Italian marble, quartz, and granite. Hardware traders around Lohar Chawl and fitters across Thane and Navi Mumbai order our core bits in bulk.',
    supply: fromJaipur,
  },
  {
    slug: 'delhi',
    name: 'Delhi NCR',
    region: 'Delhi',
    kind: 'city',
    areas: ['Delhi', 'Gurugram', 'Noida', 'Ghaziabad', 'Faridabad'],
    local:
      'Delhi NCR’s marble and granite installers rely on Rajasthan stone — and on core bits made close to it. Our Jaipur factory is the nearest source for NCR dealers.',
    supply: fromJaipur,
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    region: 'Telangana',
    kind: 'city',
    areas: ['Secunderabad', 'Begum Bazar', 'Kukatpally', 'Gachibowli', 'LB Nagar', 'Uppal'],
    local:
      'Telangana’s granite comes from Karimnagar and Khammam, and Hyderabad’s construction sites use it everywhere. Our bits cut it with water on an angle grinder or drill.',
    supply: fromBengaluru,
  },
  {
    slug: 'pune',
    name: 'Pune',
    region: 'Maharashtra',
    kind: 'city',
    areas: ['Pimpri-Chinchwad', 'Hadapsar', 'Kothrud', 'Wakad', 'Hinjewadi', 'Kharadi'],
    local:
      'Pune’s apartment and IT-park projects keep tile and stone fitters busy. Our 19–37 mm sizes are the common picks for plumbing and electrical work here.',
    supply: fromJaipur,
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    region: 'Gujarat',
    kind: 'city',
    areas: ['Naroda', 'Vatva', 'Odhav', 'Maninagar', 'SG Highway', 'Gandhinagar'],
    local:
      'Gujarat works with Ambaji marble and Rajasthan stone, and Ahmedabad’s industrial estates buy tools by the box. Our Jaipur factory supplies dealers here directly.',
    supply: fromJaipur,
  },
  {
    slug: 'surat',
    name: 'Surat',
    region: 'Gujarat',
    kind: 'city',
    areas: ['Udhna', 'Varachha', 'Adajan', 'Katargam', 'Sachin', 'Pandesara'],
    local:
      'Surat’s fast-growing residential projects use marble and vitrified tile through and through. Contractors order our core bits in mixed-size boxes.',
    supply: fromJaipur,
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    region: 'Uttar Pradesh',
    kind: 'city',
    areas: ['Aminabad', 'Gomti Nagar', 'Alambagh', 'Indira Nagar', 'Chinhat'],
    local:
      'Lucknow’s builders and hardware dealers use Rajasthan marble and granite. Core bits ship from our Jaipur factory in a few days.',
    supply: fromJaipur,
  },
  {
    slug: 'indore',
    name: 'Indore',
    region: 'Madhya Pradesh',
    kind: 'city',
    areas: ['Siyaganj', 'Pithampur', 'Vijay Nagar', 'Palasia', 'Rau'],
    local:
      'Indore sits between the Rajasthan stone belt and central India’s building markets. Hardware dealers here stock our full 6.5–57 mm range.',
    supply: fromJaipur,
  },
  {
    slug: 'nagpur',
    name: 'Nagpur',
    region: 'Maharashtra',
    kind: 'city',
    areas: ['Itwari', 'Hingna MIDC', 'Butibori', 'Dharampeth', 'Sadar'],
    local:
      'Right at the centre of India, Nagpur dealers serve contractors across Vidarbha. Our core bits reach here from both Jaipur and Bengaluru.',
    supply: 'Dispatched by transport from Jaipur or Bengaluru.',
  },
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    region: 'Tamil Nadu',
    kind: 'city',
    areas: ['Gandhipuram', 'Peelamedu', 'Ukkadam', 'Singanallur', 'Tiruppur'],
    local:
      'Coimbatore’s engineering workshops and builders use both our core bits and our abrasives — flap discs, cut-off wheels, and buffing wheels.',
    supply: fromBengaluru,
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
