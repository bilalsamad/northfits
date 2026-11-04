/* =========================================================
   NORTH FITS — PRODUCTS (plain text — ab ghalati se bhi
   poori site nahi tootegi! Har product ka apna block hai.)
   =========================================================

   NAYA PRODUCT KAISE ADD KAREIN:

   1. Neeche "NAYA PRODUCT TEMPLATE" wala block copy karo
      (woh aakhri section ke baad milta hai).
   2. Usay products ki list ke AAKHIR mein paste karo —
      pehle ek khaali line aur phir '-----' wali line.
   3. Sirf values badlo (naam, price, photos...). Comma,
      quotes ya brackets ki zaroorat NAHI — sirf plain text.
   4. Photo files 'uploads' folder mein copy karo (same
      naam), phir PHOTOS mein 'uploads/photo.jpg' likho.
   5. File save karo → browser par Ctrl+F5 (refresh).

   RULES (simple):
   - Zaaroori sirf 4 fields: NAME, CATEGORY, PRICE, PHOTOS.
   - Ek line = ek field. Har line "FIELD : value" jaisi hoti hai.
   - COLORS aur PHOTOS mein har cheez apni alag line par.
   - '#' se shuru wali lines sirf note hain — ignore hoti hain.
   - Koi bhi ek block ghalat likh jao to SIRF wohi product site
     par nahi dikhega — baqi saare products theek rahenge.
   - Field ke beech ('NAME' waghera) ghalat spelling bhi chalegi?
     Nahi — spelling sahi likho, warna woh field skip ho jayegi.

   PHOTOS ki tarteeb = display tarteeb (pehli photo main photo).

   SHOW ON ki values (comma se separate):
     home, new, trousers, outfits, collections
   - Khaali chhodo to category ke hisaab se khud decide hoga.
   - 'none' likho to product kahin nahi dikhega (temporary hide).

   DESC ki value EK hi line mein likho (long line bhi chalegi).

   NOTE: backtick ` aur dollar-bracket ${ text mein kabhi use
   mat karna — woh code ke liye special characters hain.
   ========================================================= */

const NF_PRODUCT_TEXT = `

NAME : Men's Baggy DryFit Relaxed Trouser
CATEGORY : Trousers
PRICE : 1700
OLD PRICE : 1900
SIZES : 28, 30, 32, 34, 36, 38
NEW : yes
COLORS : Beige / Cream - #C0B0A0
         Dark Brown - #411900
         Black - #000000
         Grey - #c5c6c7
DESC : Baggy-fit mens trouser in premium dry-fit fabric — lightweight, breathable and quick-drying. Relaxed through the thigh with a straight drape for all-day comfort. Moisture-wicking stretch keeps you cool on the move.
PHOTOS : uploads/product1-1.jpg
         uploads/product1-2.jpg
         uploads/product1-3.jpg
SHOW ON : new, trousers, collections

-----

NAME : Cotton Relaxed Linen Fitted Trouser
CATEGORY : Trousers
PRICE : 1950
OLD PRICE : 2450
SIZES : M, L, XL
NEW : yes
COLORS : Slate Grey - #778899
         Black - #000000
DESC : Relaxed-fit cotton trouser with a clean, tapered drape. Soft, breathable fabric and an easy mid-rise waist make it an everyday staple that moves with you. Pairs effortlessly with both casual tees and structured shirts.
PHOTOS : uploads/product2-1.jpg
         uploads/product2-2.jpg
SHOW ON : new, trousers, collections

-----

NAME : Straight China Dry Fit Trouser
CATEGORY : Trousers
PRICE : 2050
OLD PRICE : 2450
SIZES : M, L, XL
NEW : yes
COLORS : Peach - #FAD6A5
         Navy - #0B3954
         Black - #000000
         Cream - #FEFBEA
         Taupe - #A38368
DESC : Straight-leg trouser in lightweight China dry-fit fabric — crisp, breathable and wrinkle-resistant. A clean tailored line with an easy mid-rise fit keeps you sharp all day, whether you dress it up or keep it casual.
PHOTOS : uploads/product3-1.jpg
         uploads/product3-2.jpg
SHOW ON : new, trousers, collections

-----

NAME : North Fits Premium Heavy Cotton Track Trouser
CATEGORY : Trousers
PRICE : 2250
SIZES : M, L, XL
NEW : yes
COLORS : Off White - #F3EFE6
         Mustard - #C49A28
         White - #FFFFFF
         Grey - #808080
DESC : Soft, slightly thick cotton-type fabric with a relaxed fit, designed for everyday comfort and a clean, premium streetwear look.
PHOTOS : uploads/product4-1.jpeg
         uploads/product4-2.jpeg
SHOW ON : new, trousers, collections

-----

NAME : Cotton Utility Straight Trouser
CATEGORY : Trousers
PRICE : 2150
SIZES : M, L
NEW : yes
COLORS : Dark Brown - #65402F
         Black - #000000
DESC : Premium cotton-style fabric with a structured feel, clean straight-leg fit, and functional cargo pockets. Designed for everyday comfort with a modern streetwear look.
PHOTOS : uploads/product5-1.jpeg
         uploads/product5-2.jpeg
SHOW ON : new, trousers, collections

-----

NAME : Chiffon Relaxed-Fit Trouser – Coffee Brown
CATEGORY : Trousers
PRICE : 2499
SIZES : M, L, XL
NEW : yes
COLORS : Off-White - #F1F0E9
         Light Grey - #A8AAA5
         Khaki - #777466
         Cream Beige - #E7DDC9
         Slate Blue - #454B5A
         Olive / Mustard - #8D8050
         Dark Charcoal - #30333A
DESC : Crafted from premium chiffon fabric, featuring a rich coffee-brown shade, relaxed straight fit, elasticated waistband, and adjustable drawstring for effortless everyday style.
PHOTOS : uploads/product6-1.jpeg
         uploads/product6-2.jpeg
SHOW ON : new, trousers, collections

-----

NAME : Premium Fall Trouser
CATEGORY : Trousers
PRICE : 1999
SIZES : M, L, XL
NEW : yes
COLORS : Light Grey - #D3D3D3
         Black - #1C1C1C
         Dark Grey - #4A4A4A
DESC : Experience effortless style with a smooth finish, lightweight comfort, and a natural fall. Perfect for everyday wear with a clean, modern look.
PHOTOS : uploads/product7-1.png
         uploads/product7-2.png
SHOW ON : new, trousers, collections

-----

NAME : Soft Lelan Falling Trouser
CATEGORY : Trousers
PRICE : 2100  
OLD PRICE : 2499
SIZES : M, L, XL
NEW : yes 
COLORS : Black - #000000
         Beige - #C0B0A0
         Bottle Green - #0F2A3D
         Mustard - #e48400
         Grey - #808080
DESC : Soft dry-fit fabric with a smooth, natural fall — lightweight, comfortable and easy to style for everyday wear.
PHOTOS : uploads/product8-1.jpeg
         uploads/product8-2.jpeg
SHOW ON : new, trousers, collections

=========================================================
 NAYA PRODUCT TEMPLATE — copy karke UPAR paste karoo
 (aakhri product ke baad, '-----' line ke baad), phir sirf
 values badlo aur 'Naya Product ka Naam' waghera replace karo.
 =========================================================

NAME : Naya Product ka Naam
CATEGORY : Trousers
PRICE : 1999
OLD PRICE : 2499
SIZES : M, L, XL
NEW : yes
COLORS : Black - #000000
         Beige - #C0B0A0
DESC : Chhoti si description yahan likho (single line).
PHOTOS : uploads/product8-1.jpg
         uploads/product8-2.jpg
SHOW ON : new, trousers, collections

=========================================================
 YAHAN SE NEECHE KUCH MAT CHHER-DO (engine / parser hai)
==========================================================
`;

(function () {
  var KNOWN = ['name', 'category', 'price', 'oldprice', 'sizes', 'new',
               'colors', 'desc', 'photos', 'showon', 'badge', 'insta', 'visual'];
  var ALIAS = {
    image: 'photos', images: 'photos', photo: 'photos',
    show: 'showon', location: 'showon', locations: 'showon',
    description: 'desc',
    instagram: 'insta', link: 'insta'
  };

  function warn(msg) {
    if (window.console && console.warn) console.warn('[North Fits] products.js: ' + msg);
  }

  function num(v) {
    var s = String(v == null ? '' : v).replace(/[^\d]/g, '');
    if (!s) return null;
    var n = parseInt(s, 10);
    return isNaN(n) ? null : n;
  }

  function boolVal(v, dflt) {
    var s = String(v == null ? '' : v).trim().toLowerCase();
    if (!s) return dflt;
    if (/^(yes|true|1|haan|haa|on)/.test(s)) return true;
    if (/^(no|false|0|nahi|off)/.test(s)) return false;
    return dflt;
  }

  function parseColorLine(line) {
    line = String(line || '').trim();
    if (!line) return null;
    var hex = (line.match(/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/) || [null])[0];
    var name = line.replace(/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g, '');
    name = name.replace(/^[-\u2013\u2014:]+\s*/, '').replace(/[-\u2013\u2014:]+\s*$/, '').trim();
    if (!name && !hex) return null;
    return { name: name || 'Colour', hex: (hex || '#999999').toLowerCase() };
  }

  function buildProduct(m) {
    function first(k) { return (m[k] && m[k][0] ? String(m[k][0]) : '').trim(); }
    function rest(k) { return m[k] ? m[k].slice(1) : []; }

    var name = first('name');
    if (!name) return null;
    if (/^naya product ka naam$/i.test(name)) return null; /* template placeholder */

    var price = num(first('price'));
    if (price == null) { warn('PRICE missing/ghalat — product skip hua: ' + name); return null; }

    var p = {
      name: name,
      category: first('category') || 'Trousers',
      price: price,
      visual: first('visual') || 'visual-fabric',
      new: boolVal(first('new'), true)
    };

    var old = num(first('oldprice'));
    if (old != null) p.oldPrice = old;

    var sizes = ((first('sizes') + ' ' + rest('sizes').join(' ')) || '')
      .split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    if (sizes.length) p.sizes = sizes;

    var colors = [];
    [first('colors')].concat(rest('colors')).forEach(function (cl) {
      var c = parseColorLine(cl);
      if (c) colors.push(c);
    });
    if (colors.length) p.colors = colors;

    var desc = [first('desc')].concat(rest('desc')).join(' ').trim();
    if (desc) p.desc = desc;

    var imgs = [first('photos')].concat(rest('photos')).join(',')
      .split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    if (imgs.length) p.images = imgs;

    var showRaw = first('showon');
    if (showRaw) {
      var locs = showRaw.split(',').map(function (s) { return s.trim().toLowerCase(); }).filter(Boolean);
      p.locations = (locs.length === 1 && locs[0] === 'none') ? [] : locs;
    }

    var badge = first('badge');
    if (badge) {
      var bm = badge.match(/^(new|hot)\b/i);
      p.badge = { label: badge, type: bm ? bm[1].toLowerCase() : undefined };
    }

    var insta = first('insta');
    if (insta) p.insta = insta;

    return p;
  }

  function parseAll(raw) {
    var products = [];
    var lines = String(raw || '').split(/\r?\n/);
    var cur = {};
    var lastKey = null;

    function endBlock() {
      if (cur && Object.keys(cur).length) {
        try {
          var p = buildProduct(cur);
          if (p) products.push(p);
        } catch (e) {
          warn('Ek product block parse nahi hua — skip kiya (' + e.message + ')');
        }
      }
      cur = {};
      lastKey = null;
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (!line.trim()) continue;
      if (/^\s*[-=*_]{3,}\s*$/.test(line)) { endBlock(); continue; }
      if (/^\s*#/.test(line)) continue;
      var fm = line.match(/^\s*([A-Za-z][A-Za-z ]{0,24}?)\s*[:=]\s*(.*)$/);
      var key = fm ? fm[1].toLowerCase().replace(/\s+/g, '') : null;
      if (fm && KNOWN.indexOf(key) !== -1) {
        key = ALIAS[key] || key;
        if (!cur[key]) cur[key] = [];
        cur[key].push(fm[2]);
        lastKey = key;
      } else if (lastKey && cur[lastKey]) {
        cur[lastKey].push(line.trim());
      }
    }
    endBlock();
    return products;
  }

  var parsed = [];
  try {
    parsed = parseAll(NF_PRODUCT_TEXT);
  } catch (e) {
    warn('Products parse nahi ho sake — ' + e.message);
  }
  window.NF_PRODUCTS = parsed;
})();
