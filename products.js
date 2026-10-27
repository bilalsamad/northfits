/* =========================================================
   NORTH FITS — Products
   ---------------------------------------------------------
   AB KOI ADMIN PANEL / BACKEND NAHI HAI.
   Apne products YAHIN edit karo — yeh file kholo aur neeche
   objects copy-paste karke apna data likho.

   Ek product aise banta hai:

   {
     name: 'Product ka naam',                    // zaroori
     category: 'Trousers' ya 'Outfit',           // zaroori
     price: 2499,                                // zaroori (Rs.)
     oldPrice: 2999,                             // optional (sale price)
     colors: [ { name: 'Black', hex: '#111111' } ],   // at least 1
     sizes: ['30', '32', '34'],                  // at least 1
     new: false,                                 // true = "New" badge
     desc: 'Chhoti si description',              // optional
     images: ['uploads/trousers-1.jpg'],         // optional, 1-3 photos
     badge: { label: 'Hot', type: 'hot' },       // optional ('new' ya 'hot')
     insta: 'https://www.instagram.com/...',     // optional
     locations: ['trousers']                     // optional — neeche dekho
   }

   images: photo 'uploads/' folder mein dalo aur yeh likho:
           'uploads/aapki-photo.jpg'

   locations (optional): jahan jahan product dikhe.
     ['home']         → home page ki "New Arrivals" wali row
     ['new']          → New Arrivals page
     ['trousers']     → Trousers page
     ['outfits']      → Outfits page
     ['collections']  → Collections page
   Agaz yeh field mat likho to khud decide hoga (new → New Arrivals,
   Trousers → Trousers page, Outfit → Outfits page, Collections → hamesha).
   ========================================================= */

const NF_PRODUCTS = [
  {
    name: "Men's Baggy DryFit Relaxed Trouser",
    category: 'Trousers',
    price: 1700,
    oldPrice: 1900,
    visual: 'visual-fabric',
    colors: [
      { name: 'Beige / Cream', hex: '#C0B0A0' },
      { name: 'Dark Brown', hex: '#411900' },
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#c5c6c7' }
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    new: true,
    desc: 'Baggy-fit mens trouser in premium dry-fit fabric — lightweight, breathable and quick-drying. Relaxed through the thigh with a straight drape for all-day comfort. Moisture-wicking stretch keeps you cool on the move.',
    locations: ['new', 'trousers', 'collections'],
    images: [
      'uploads/product1-1.jpg',
      'uploads/product1-2.jpg',
      'uploads/product1-3.jpg'
    ]
  },
  {
    name: 'Cotton Relaxed Linen Fitted Trouser',
    category: 'Trousers',
    price: 1950,
    oldPrice: 2450,
    visual: 'visual-fabric',
    colors: [
      { name: 'Slate Grey', hex: '#778899' },
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['M', 'L', 'XL'],
    new: true,
    desc: 'Relaxed-fit cotton trouser with a clean, tapered drape. Soft, breathable fabric and an easy mid-rise waist make it an everyday staple that moves with you. Pairs effortlessly with both casual tees and structured shirts.',
    locations: ['new', 'trousers', 'collections'],
    images: [
      'uploads/product2-1.jpg',
      'uploads/product2-2.jpg'
    ]
  },
  {
    name: 'Straight China Dry Fit Trouser',
    category: 'Trousers',
    price: 2050,
    oldPrice: 2450,
    visual: 'visual-fabric',
    colors: [
      { name: 'Peach', hex: '#FAD6A5' },
      { name: 'Navy', hex: '#0B3954' },
      { name: 'Black', hex: '#000000' },
      { name: 'Cream', hex: '#FEFBEA' },
      { name: 'Taupe', hex: '#A38368' }
    ],
    sizes: ['M', 'L', 'XL'],
    new: true,
    desc: 'Straight-leg trouser in lightweight China dry-fit fabric — crisp, breathable and wrinkle-resistant. A clean tailored line with an easy mid-rise fit keeps you sharp all day, whether you dress it up or keep it casual.',
    locations: ['new', 'trousers', 'collections'],
    images: [
      'uploads/product3-1.jpg',
      'uploads/product3-2.jpg'
    ]
  },
  {
    name: 'North Fits Premium Heavy Cotton Track Trouser',
    category: 'Trousers',
    price: 2250,
    visual: 'visual-fabric',
    colors: [
      { name: 'Off White', hex: '#F3EFE6' },
      { name: 'Mustard', hex: '#C49A28' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Grey', hex: '#808080' }
    ],
    sizes: ['M', 'L', 'XL'],
    new: true,
    desc: 'Soft, slightly thick cotton-type fabric with a relaxed fit, designed for everyday comfort and a clean, premium streetwear look.',
    locations: ['new', 'trousers', 'collections'],
    images: [
      'uploads/product4-1.jpeg',
      'uploads/product4-2.jpeg'
    ]
  },
  {
    name: 'Cotton Utility Straight Trouser',
    category: 'Trousers',
    price: 2150,
    visual: 'visual-fabric',
    colors: [
      { name: 'Dark Brown', hex: '#65402F' },
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['M', 'L'],
    new: true,
    desc: 'Premium cotton-style fabric with a structured feel, clean straight-leg fit, and functional cargo pockets. Designed for everyday comfort with a modern streetwear look.',
    locations: ['new', 'trousers', 'collections'],
    images: [
      'uploads/product5-1.jpeg',
      'uploads/product5-2.jpeg'
    ]
  },
  {
    name: 'Chiffon Relaxed-Fit Trouser – Coffee Brown',
    category: 'Trousers',
    price: 2499,
    visual: 'visual-fabric',
    colors: [
      { name: 'Off-White', hex: '#F1F0E9' },
      { name: 'Light Grey', hex: '#A8AAA5' },
      { name: 'Khaki', hex: '#777466' },
      { name: 'Cream Beige', hex: '#E7DDC9' },
      { name: 'Slate Blue', hex: '#454B5A' },
      { name: 'Olive / Mustard', hex: '#8D8050' },
      { name: 'Dark Charcoal', hex: '#30333A' }
    ],
    sizes: ['M', 'L', 'XL'],
    new: true,
    desc: 'Crafted from premium chiffon fabric, featuring a rich coffee-brown shade, relaxed straight fit, elasticated waistband, and adjustable drawstring for effortless everyday style.',
    locations: ['new', 'trousers', 'collections'],
    images: [
      'uploads/product6-1.jpeg',
      'uploads/product6-2.jpeg'
    ]
  },
  {
    name: 'Premium Fall Trouser',
    category: 'Trousers',
    price: 1850,
    visual: 'visual-fabric',
    colors: [
      { name: 'Light Grey', hex: '#D3D3D3' },
      { name: 'Black', hex: '#1C1C1C' },
      { name: 'Dark Grey', hex: '#4A4A4A' }
    ],
    sizes: ['M', 'L', 'XL'],
    new: true,
    desc: 'Experience effortless style with a smooth finish, lightweight comfort, and a natural fall. Perfect for everyday wear with a clean, modern look.',
    locations: ['new', 'trousers', 'collections'],
    images: [
      'uploads/product7-1.png',
      'uploads/product7-2.png'
    ]
  }
];
