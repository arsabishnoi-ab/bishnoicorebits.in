const mapAddress =
  '10, 3rd Cross Rd, Kalasipalyam New Extension, Kalasipalya, Bengaluru, Karnataka 560002';
const encodedMap = encodeURIComponent(mapAddress);

export const manufacturer = {
  name: 'Bishnoi Diamond Industries',
  role: 'Manufacturer · Head office',
  street: 'F-02, 153 Patel Nagar, Near Muhana Mandi',
  city: 'Jaipur',
  region: 'Rajasthan',
  country: 'IN',
  line: 'F-02, 153 Patel Nagar, Near Muhana Mandi, Jaipur, Rajasthan',
  pan: 'EUZPD3483B',
  gstin: '08EUZPD3483B1ZB',
  phone: '+917413812371',
  phoneDisplay: '+91 74138 12371',
} as const;

export const site = {
  name: 'Bishnoi Diamond Core Bit',
  shopName: 'Bishnoi Sales',
  legalName: 'Bishnoi Sales',
  owner: 'Suresh Kumar',
  origin: 'Jaipur',
  tagline: 'Diamond core bits manufactured by Bishnoi Diamond Industries, Jaipur',
  established: 2019,
  shortDescription:
    'Bishnoi Diamond Core Bit is manufactured by Bishnoi Diamond Industries, Jaipur, and sold by Bishnoi Sales, Kalasipalya, Bengaluru — sizes from 6.5 mm to 57 mm for angle grinders and drills.',
  longDescription:
    'Bishnoi Diamond Core Bit is manufactured at the Bishnoi Diamond Industries head office in Patel Nagar, Jaipur, and packed for granite, marble, and concrete. The range runs from 6.5 mm sleeves to 57 mm (M-10) barrels. Wet use on an angle grinder or drill. Bishnoi Sales in Kalasipalya, Bengaluru sells the core bits and is a distributor of Bhinmal diamond core bits, alongside industrial buffing items — emery powder, flap wheels, mat wheels, Superon welding rods, Staarek discs, Champion wheels, Bostik grout, 3M pads, and felt polishers.',
  distributorOf: 'Bhinmal Diamond Corebit',
  dealerIn:
    'Industrial buffing items — emery powder, flap wheels, mat wheels, Superon welding rods',
  rating: {
    value: 4.8,
    count: 8,
  },
  contact: {
    phone: '+919880979411',
    phoneDisplay: '+91 98809 79411',
    landline: '+918041132673',
    landlineDisplay: '080-4113 2673',
    centrex: '2673',
    whatsapp: '919880979411',
    hoursShort: 'Mon–Sat, 10:00 AM – 8:00 PM',
    hours: {
      monday: '10:00 AM – 8:00 PM',
      tuesday: '10:00 AM – 8:00 PM',
      wednesday: '10:00 AM – 8:00 PM',
      thursday: '10:00 AM – 8:00 PM',
      friday: '10:00 AM – 8:00 PM',
      saturday: '10:00 AM – 8:00 PM',
      sunday: 'Closed',
    },
  },
  address: {
    street: 'No. 21, 3rd Cross, 3rd Main Road, Kalasipalya New Extension',
    locality: 'Kalasipalya',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560002',
    country: 'IN',
    countryName: 'India',
    latitude: 12.960726,
    longitude: 77.580305,
    line: 'No. 21, 3rd Cross, 3rd Main Road, Kalasipalya New Extension, Bengaluru, Karnataka 560002',
    plusCode: 'XH6J+74',
  },
  gstin: '29CUTPK5643L1ZP',
  maps: {
    shortUrl: 'https://maps.app.goo.gl/FST9TU1tAPsk4NZ1A',
    searchEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(
      'Bishnoi Sales, 3rd Cross Rd, Kalasipalya, Bengaluru, Karnataka 560002',
    )}&ll=12.960726,77.580305&hl=en&z=17&output=embed`,
    reviews: 'https://maps.app.goo.gl/FST9TU1tAPsk4NZ1A',
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodedMap}`,
    place: 'https://maps.app.goo.gl/FST9TU1tAPsk4NZ1A',
  },
  quote:
    'Use water during drilling. Clean holes in granite, marble, and concrete — from six-and-a-half millimetre sleeves to fifty-seven millimetre cores.',
  signOff: 'Bishnoi Diamond Industries, Jaipur · Bishnoi Sales, Bengaluru',
} as const;
