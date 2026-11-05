/**
 * Centralised Product Data Structure for Bombay Sofa & Furnishing
 * Silvassa, Dadra and Nagar Haveli
 *
 * Designed for easy future API/CMS/Admin integration
 * Note: Specifications and prices are intentionally omitted or kept strictly authentic
 * to comply with business rules.
 */

const PRODUCTS_DATA = [
  // --- REAL CLIENT SHOWCASE 1: Terracotta & Ivory L-Shaped Sectional ---
  {
    id: "l-shape-terracotta-sofa",
    slug: "custom-l-shaped-terracotta-sofa",
    name: "Custom L-Shaped Sectional Sofa in Terracotta & Ivory",
    category: "l-shaped-sofas",
    categoryLabel: "L-Shaped Sofas",
    shortDescription: "Bespoke dual-tone L-shaped sectional sofa with rust terracotta upholstery, warm ivory platform base, and designer fluted accent cushions.",
    description: "Designed and crafted for modern living, this bespoke L-shaped sectional sofa brings warmth, style, and functional comfort into your home. Built on a sturdy seasoned wooden framework with high-resilience foam padding, it features an inviting rust terracotta fabric paired with a warm ivory lower surround. Comes with tailored ribbed accent cushions.",
    images: [
      "images/sofas/l-shape-terracotta-sofa.jpg?v=unique_v11",
      "images/gallery/custom-terracotta-sectional.png?v=unique_v11"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom sizing to match your exact room dimensions",
      "Left-hand or right-hand chaise orientation",
      "Over 100+ fabric texture and colour choices available at showroom",
      "Custom foam firmness (Soft, Medium, Orthopedic Firm)"
    ],
    highlights: ["Handcrafted in Silvassa", "High-Density Foam", "Solid Teakwood Structure", "Dual-Tone Aesthetics"],
    servicesAvailable: ["New Custom Build", "Dimension Consultation", "Fabric Swatch Selection at Showroom"]
  },

  // --- REAL CLIENT SHOWCASE 2: Teal Blue Sectional with Matching Coffee Table ---
  {
    id: "teal-l-shaped-sectional",
    slug: "custom-teal-l-shaped-sectional",
    name: "Custom Teal Blue L-Shaped Sectional with Matching Center Table",
    category: "l-shaped-sofas",
    categoryLabel: "L-Shaped Sofas",
    shortDescription: "Striking contemporary L-shaped sofa in textured teal upholstery with a matching fabric-upholstered center coffee table.",
    description: "A show-stopping living room centerpiece delivered to a Silvassa residence. Features an expansive chaise lounge, padded backrest channel stitching, and a custom matching geometric coffee table with glass top insert.",
    images: [
      "images/sofas/teal-l-shaped-sectional-hd.jpg?v=unique_v11",
      "images/sofas/teal-l-shaped-sectional-portrait.jpg?v=unique_v11"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Available with custom matching center table or storage ottoman",
      "Tailored length to fit specific living room wall sizes",
      "Choice of high-resilience foam densities"
    ],
    highlights: ["Matching Upholstered Coffee Table", "Contemporary Teal Hue", "Deep Chaise Lounge", "Client Installation"],
    servicesAvailable: ["Custom Sizing", "Showroom Fabric Selection", "Delivery Across Silvassa Region"]
  },

  // --- REAL CLIENT SHOWCASE 3: Designer Fluted Beige 3-Seater ---
  {
    id: "designer-fluted-beige-sofa",
    slug: "designer-fluted-beige-sofa",
    name: "Designer Fluted 3-Seater Sofa with Brass Accents",
    category: "designer-sofas",
    categoryLabel: "Designer Sofas",
    shortDescription: "Luxurious 3-seater sofa with vertical fluted backrest tailoring, champagne beige textured weave, and slender brass-finished legs.",
    description: "An elegant centerpiece for contemporary formal living rooms. This designer sofa showcases fine vertical channel tufting on the backrest, generous dual seat cushions with wrapped comfort layers, and refined brass legs that lift the silhouette off the floor to create an airy, spacious ambience.",
    images: [
      "images/sofas/designer-fluted-sofa-hd.jpg?v=unique_v11",
      "images/hero/luxury-fluted-sofa-hd.jpg?v=unique_v11"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Available as 3-seater, 2-seater, single accent chair, or 3+2+1 suite",
      "Choice of leg finishes: Matte Brass, Brushed Gold, Dark Walnut, or Chrome",
      "Fabric choices: Textured Bouclé, Premium Velvet, or Breathable Linen"
    ],
    highlights: ["Vertical Channel Tufting", "Reinforced Hardwood Frame", "Metallic Accent Legs", "Plush Multi-Layer Cushions"],
    servicesAvailable: ["Custom Sizing", "Showroom Fabric Selection", "Doorstep Delivery in Silvassa Region"]
  },

  // --- REAL CLIENT SHOWCASE 4: Dusty Rose Fluted L-Shaped Sectional ---
  {
    id: "blush-pink-fluted-l-sofa",
    slug: "blush-pink-fluted-l-shaped-sofa",
    name: "Fluted Velvet L-Shaped Corner Sofa in Dusty Rose",
    category: "designer-sofas",
    categoryLabel: "Designer Sofas",
    shortDescription: "Expansive luxury corner sofa in subtle dusty rose fabric with vertical fluted back and matching scatter pillows.",
    description: "Photographed installed in a modern Silvassa residence. Features full-wrap vertical back fluting, deep supportive seating, and durable woven velvet upholstery that complements bright, curtained living rooms.",
    images: [
      "images/sofas/blush-pink-fluted-l-sofa-hd.jpg?v=unique_v11"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom corner or chaise dimensions",
      "Over 50+ pastel, jewel, and neutral shade choices",
      "Choice of matching circular or rectangular center tables"
    ],
    highlights: ["Vertical Fluted Back", "Soft-Touch Velvet Weave", "Generous Corner Seating", "Client Home Installation"],
    servicesAvailable: ["On-Site Measurement", "Showroom Swatches"]
  },

  // --- REAL CLIENT SHOWCASE 5: Handcrafted Cream & Tan Dual-Tone Sofa ---
  {
    id: "custom-cream-tan-sofa",
    slug: "handcrafted-cream-tan-accent-sofa",
    name: "Handcrafted Cream & Tan Dual-Tone Accent Sofa",
    category: "modern-sofas",
    categoryLabel: "Modern Sofas",
    shortDescription: "Contemporary curved-silhouette sofa crafted in textured cream fabric with tan leatherette armrest cushions and base.",
    description: "Built by our craftsmen in the Silvassa workshop. Showcases a soft curved platform, premium comfort padding, and dual-material construction that pairs warm tan leatherette accents with durable textured white seating.",
    images: [
      "images/sofas/custom-cream-tan-sofa-hd.jpg?v=unique_v11"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Available in 2-seater, 3-seater, and custom width",
      "Leatherette color matching (Tan, Chocolate, Black, Grey)",
      "Choice of fabric texture for upper seating"
    ],
    highlights: ["Fresh Workshop Build", "Dual-Material Detailing", "Curved Base Architecture", "High-Density Core"],
    servicesAvailable: ["Bespoke Fabrication", "Workshop Inspection"]
  },

  // --- REAL CLIENT SHOWCASE 6: Tufted Pink Corner Sofa ---
  {
    id: "pink-tufted-corner-sofa",
    slug: "artisan-button-tufted-corner-sofa",
    name: "Artisan Button-Tufted Corner Sectional Sofa",
    category: "l-shaped-sofas",
    categoryLabel: "L-Shaped Sofas",
    shortDescription: "Generous corner sectional sofa with classic button-tufted backrests, tapered wooden legs, and tailored cushions.",
    description: "Crafted in our workshop with precision tufting, reinforced wooden frame, and tapered legs that provide easy cleaning clearance underneath. Built for spacious family living.",
    images: [
      "images/sofas/pink-tufted-corner-sofa.jpg?v=unique_v11"
    ],
    featured: false,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom section lengths (3-seater + 2-seater corner or custom)",
      "Deep button tufting or clean smooth backrest option",
      "Custom wooden leg stains"
    ],
    highlights: ["Precision Button Tufting", "Solid Timber Framework", "Workshop Build", "Removable Scatter Cushions"],
    servicesAvailable: ["Custom Sizing", "Showroom Fabric Selection"]
  },

  // --- REAL CLIENT SHOWCASE 7: Custom Upholstered Platform Bed ---
  {
    id: "custom-platform-bed",
    slug: "custom-upholstered-platform-bed",
    name: "Custom Upholstered Platform Bed with Extended Headboard",
    category: "beds",
    categoryLabel: "Beds & Furniture",
    shortDescription: "Contemporary low-profile platform bed with full-width upholstered headboard and integrated seamless side tables.",
    description: "Crafted to redefine bedroom aesthetics, this custom platform bed features clean minimalist architecture, heavy-duty slat support for any mattress type, and an upholstered headboard tailored in durable, soft-touch fabric. Shown installed with matching window blinds in a Silvassa residence.",
    images: [
      "images/beds/custom-platform-bed-hd.jpg?v=unique_v11",
      "images/beds/luxury-bedroom-interior.jpg?v=unique_v11"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "King Size, Queen Size, or Custom Mattress Fit",
      "Hydraulic storage box or pull-out drawer mechanism",
      "Headboard height and width customized to your wall",
      "Matching bedside pedestals and dressing unit"
    ],
    highlights: ["Custom Headboard Geometry", "Heavy-Duty Internal Framework", "Hydraulic Lift Option", "Noise-Free Construction"],
    servicesAvailable: ["Custom Woodworking", "On-site Room Measurement", "Complete Bedroom Furnishing"]
  },

  // --- ADDITIONAL CURATED SHOWROOM DESIGNS (Preserved) ---
  {
    id: "modern-emerald-sofa",
    slug: "modern-curved-emerald-sofa",
    name: "Modern Curved Velvet 3-Seater Sofa",
    category: "modern-sofas",
    categoryLabel: "Modern Sofas",
    shortDescription: "Architectural curved 3-seater sofa in rich jewel-toned velvet with continuous cushioned back and track armrests.",
    description: "A statement piece combining modern sculptural form with everyday luxury. Deep seating cushions wrapped in soft premium velvet create a serene lounge experience, supported by a precision-crafted inner wooden frame.",
    images: [
      "images/sofas/modern-emerald-sofa.jpg?v=unique_v11"
    ],
    featured: false,
    isRealClientPhoto: false,
    customizationOptions: [
      "Available in 2-seater, 3-seater, and custom sectional configurations",
      "Wide spectrum of velvet, linen, and pet-friendly performance textiles"
    ],
    highlights: ["Curvilinear Form", "Plush Deep Cushioning", "Stain-Resistant Fabric Options", "Minimalist Profile"],
    servicesAvailable: ["Custom Dimension Fit", "Fabric Swatch Preview"]
  },
  {
    id: "designer-coffee-table",
    slug: "handcrafted-designer-coffee-table",
    name: "Handcrafted Organic Wood & Stone Coffee Table",
    category: "coffee-tables",
    categoryLabel: "Coffee Tables",
    shortDescription: "Minimalist organic coffee table crafted with rich natural wood tones, smooth rounded corners, and durable surface finish.",
    description: "The ideal centerpiece to complement bespoke sofa arrangements. Made from premium seasoned timber with smooth hand-finished edges, offering both functional surface area and tactile craftsmanship.",
    images: [
      "images/sofas/designer-coffee-table.jpg?v=unique_v11"
    ],
    featured: true,
    isRealClientPhoto: false,
    customizationOptions: [
      "Natural Teak, Warm Walnut, or Ebonized Oak stain",
      "Custom sizing (Rectangular, Oval, or Round)",
      "Optional marble or tempered glass inset"
    ],
    highlights: ["Solid Wood Construction", "Smooth Beveled Edges", "Moisture-Resistant Lacquer"],
    servicesAvailable: ["Custom Sizing", "Matching Side Tables"]
  },
  {
    id: "orthopedic-comfort-mattress",
    slug: "orthopedic-comfort-mattress",
    name: "Custom Multi-Layer Orthopedic Comfort Mattress",
    category: "mattresses",
    categoryLabel: "Mattresses",
    shortDescription: "Advanced spine-support mattress featuring pocket springs, high-density rebonded foam, and breathable quilted top.",
    description: "A rejuvenating sleep system that adapts to your body's natural contours. Built with multi-layer orthopedic engineering to relieve pressure points and minimize partner motion disturbance.",
    images: [
      "images/mattresses/orthopedic-mattress.jpg?v=unique_v11",
      "images/mattresses/premium-mattress-setup.png?v=unique_v11"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom length and width tailored to any bed frame",
      "Thickness options: 6-inch, 8-inch, 10-inch, or 12-inch",
      "Firmness options: Medium Soft, Medium Firm, Orthopedic Extra Firm"
    ],
    highlights: ["Spinal Alignment Support", "Breathable Quilted Fabric", "Edge-Support Technology"],
    servicesAvailable: ["Custom Sizing for Odd Bed Frames", "Doorstep Delivery in Silvassa"]
  },
  {
    id: "luxury-sheer-blackout-curtains",
    slug: "made-to-measure-curtains",
    name: "Made-to-Measure Sheer & Blackout Drapes",
    category: "curtains",
    categoryLabel: "Curtains",
    shortDescription: "Custom tailored window drapery spanning airy textured sheers, architectural linen drapes, and 100% blackout fabrics.",
    description: "Transform your living spaces with professionally tailored curtains. From sun-dappled translucent sheers that soften daylight to acoustic blackout drapes that guarantee restful sleep, our collection is stitched to perfection.",
    images: [
      "images/curtains/sheer-window-drapes.jpg",
      "images/curtains/luxury-linen-curtains.jpg"
    ],
    featured: true,
    isRealClientPhoto: false,
    customizationOptions: [
      "Stitching styles: American Pleat, Ripple Fold, Eyelet, or Rod Pocket",
      "Motorized track compatibility and silent manual tracks",
      "Full room-darkening linings and thermal insulation"
    ],
    highlights: ["Precision Tailoring", "Fade-Resistant Fabrics", "Complete Light Management"],
    servicesAvailable: ["On-Site Window Measurement", "Fabric Catalogue Preview", "Showroom Installation Assistance"]
  },
  {
    id: "modern-window-blinds",
    slug: "architectural-window-blinds",
    name: "Architectural Zebra & Roller Blinds",
    category: "blinds",
    categoryLabel: "Blinds",
    shortDescription: "Sleek window blinds providing effortless daylight control, UV shielding, and clean modern aesthetic for homes and offices.",
    description: "A smart, contemporary alternative to traditional curtains. Zebra dual-shade blinds allow seamless shifting between ambient view and private room dimming with a single pull.",
    images: [
      "images/blinds/wooden-roller-blinds.jpg",
      "images/blinds/modern-venetian-blinds.jpg"
    ],
    featured: true,
    isRealClientPhoto: false,
    customizationOptions: [
      "Zebra dual shades, Blackout roller blinds, or Wooden Venetian slats",
      "Manual chain mechanism or remote motorized integration"
    ],
    highlights: ["Precision Sizing", "Smooth Cord / Motor Operation", "Moisture & Dust Resistant"],
    servicesAvailable: ["Site Measurement in Silvassa", "Custom Fabrication", "Professional Mounting"]
  },
  {
    id: "designer-furnishing-fabrics",
    slug: "designer-furnishing-fabrics",
    name: "Curated Upholstery & Furnishing Fabric Swatches",
    category: "bedsheets-fabrics",
    categoryLabel: "Bedsheets & Fabrics",
    shortDescription: "Extensive showroom library of luxury jacquards, velvets, bouclés, linens, and stain-resistant upholstery textiles.",
    description: "Touch and feel premium textile collections directly at our Silvassa showroom. Whether reupholstering an heirloom sofa, stitching custom cushions, or choosing designer bed runners, we offer textures suited for every interior vision.",
    images: [
      "images/fabrics/upholstery-fabric-textures.jpg"
    ],
    featured: true,
    isRealClientPhoto: false,
    customizationOptions: [
      "Sold per meter or bundled with our custom sofa stitching and reupholstery services",
      "Washable, pet-friendly, and water-repellent treatments available"
    ],
    highlights: ["Over 500+ Swatches at Showroom", "High Durability Ratings", "Rich Textural Varieties"],
    servicesAvailable: ["Showroom Consultation", "Fabric Matching for Existing Decor"]
  },
  {
    id: "textured-luxury-wallpapers",
    slug: "textured-luxury-wallpapers",
    name: "Textured & Metallic Accent Wallpapers",
    category: "wallpapers",
    categoryLabel: "Wallpapers",
    shortDescription: "High-grade designer wall coverings in subtle textures, geometric motifs, and tactile metallics to transform feature walls.",
    description: "Add warmth, tactile depth, and architectural drama to bedrooms and living rooms. Our curated wallpaper catalogs include wash-resistant, durable materials designed for long-lasting beauty.",
    images: [
      "images/wallpapers/textured-luxury-wallpaper.jpg"
    ],
    featured: true,
    isRealClientPhoto: false,
    customizationOptions: [
      "Extensive roll catalogue viewable at our Silvassa showroom",
      "Texture options: Linen weave, Subtle mica shimmer, Modern geometry, Natural stone effects"
    ],
    highlights: ["Seamless Pattern Repeat", "Durable Vinyl & Non-Woven Backing", "Mildew & Peel Resistant"],
    servicesAvailable: ["Showroom Roll Catalogues", "Wall Surface Assessment in Silvassa"]
  }
];

// Reusable Helper to Get Product by ID or Slug
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id || p.slug === id);
}

// Reusable Helper to Get Products by Category
function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p => p.category === category);
}

// Reusable Helper to Get Featured Products
function getFeaturedProducts() {
  return PRODUCTS_DATA.filter(p => p.featured);
}
