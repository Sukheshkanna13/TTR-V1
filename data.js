// Temples & Towns — client-editable data
// Update properties[], rooms{}, and reviews[] below when the client provides real content.
// Images: place files in /images/ and update the placeholder/label keys.

window.WA_URL = 'https://api.whatsapp.com/send/?phone=918553441449&text=Hi%2C+I%27d+like+to+chat+about+Temple+and+Towns+Resorts.&type=phone_number&app_absent=0';

window.TT_DATA = {
  cities: [
    {
      slug: 'pondicherry',
      name: 'Pondicherry',
      tag: 'French quarter, slow mornings',
      hue: 210,
    },
    {
      slug: 'auroville',
      name: 'Auroville',
      tag: 'Nature retreat, simple living',
      hue: 145,
    },
  ],
  properties: [
    {
      id: 'p1',
      city: 'pondicherry',
      name: 'White Town 1BHK - 1st Floor',
      area: 'White Town · 100m from beach',
      blurb: 'Madhubani 1 on 1st Floor, is located centrally in Pondicherry White Town. You will be close to beach, Sri Aurobindo Ashram, and nightlife. A cozy 1BHK with a small balcony and fully functional kitchen.',
      rating: 4.9,
      reviews: 112,
      from: 'Request to book',
      placeholder: 'colonial villa exterior, courtyard',
      tone: 'oklch(0.88 0.04 230)',
    },
    {
      id: 'p2',
      city: 'pondicherry',
      name: 'White Town 1BHK - 2nd Floor',
      area: 'White Town · 100m from beach',
      blurb: 'Madhubani 2 on 2nd Floor, located centrally in White Town. Steps from the marketplace, groceries, and all daily needs. A cozy 1BHK independent floor for long stays.',
      rating: 4.8,
      reviews: 95,
      from: 'Request to book',
      placeholder: 'seafront balcony view, palms',
      tone: 'oklch(0.9 0.04 215)',
    },
    {
      id: 'p3',
      city: 'pondicherry',
      name: 'White Town 2BHK - 1st Floor',
      area: 'White Town · 200m from beach',
      blurb: 'Decor Inspired by Rajasthani Art and Traditions. 2BHK apartment in the 1st floor of a 3 storied independent building with a full kitchen and in close proximity to all attractions.',
      rating: 4.9,
      reviews: 144,
      from: 'Request to book',
      placeholder: 'garden hotel courtyard',
      tone: 'oklch(0.88 0.04 200)',
    },
    {
      id: 'p4',
      city: 'auroville',
      name: 'TempleAndTowns Nature Retreat',
      area: 'Edayanchavadi · Auroville',
      blurb: 'Nestled in the peaceful surroundings of Auroville, designed for resting and simple living. 12 Rooms with attached baths, Swimming Pool, Parking, Garden on a one acre facility. 5-7 minutes from Matrimandir.',
      rating: 5.0,
      reviews: 210,
      from: 'Request to book',
      placeholder: 'resort',
      tone: 'oklch(0.88 0.04 145)',
    },
  ],
  rooms: {
    p1: [
      { id: 'r1a', type: '1BHK 1st Floor', capacity: 3, price: 'Request to book', beds: '1 Queen + Living Room', size: 'Independent floor', amenities: ['Wi-Fi', 'Kitchen', 'Laundry', 'Balcony'] },
    ],
    p2: [
      { id: 'r2a', type: '1BHK 2nd Floor', capacity: 3, price: 'Request to book', beds: '1 Queen + Living Room', size: 'Independent floor', amenities: ['Wi-Fi', 'Kitchen', 'Laundry', 'Balcony'] },
    ],
    p3: [
      { id: 'r3a', type: '2BHK 1st Floor', capacity: 5, price: 'Request to book', beds: '2 Queen + Living Room', size: 'Independent floor', amenities: ['Wi-Fi', 'Kitchen', 'Rajasthani Decor'] },
    ],
    p4: [
      { id: 'r4a', type: 'Nature Retreat Standard', capacity: 2, price: 'Request to book', beds: '1 Queen', size: 'Attached Bath', amenities: ['Garden View', 'Pool Access'] },
      { id: 'r4b', type: 'Nature Retreat Twin', capacity: 2, price: 'Request to book', beds: '2 Twin', size: 'Attached Bath', amenities: ['Garden View', 'Pool Access'] },
    ],
  },
  reviews: [
    { name: 'Ananya R.', tier: 'Gold', rating: 5, text: 'The nature retreat was incredibly peaceful. Exactly what I needed.', when: 'Two weeks ago' },
    { name: 'Marcus L.', tier: 'Silver', rating: 5, text: 'Booking via WhatsApp was fast and the host called personally to confirm.', when: 'Last month' },
    { name: 'Priya S.', tier: 'Bronze', rating: 4, text: 'Quiet, beautiful location. The White town stay is exceptionally close to the beach.', when: 'Last month' },
  ]
};
