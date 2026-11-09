/**
 * Centralised Product Data Structure for Bombay Sofa & Furnishing
 * Silvassa, Dadra and Nagar Haveli
 *
 * Designed for easy future API/CMS/Admin integration.
 * Features 100% authentic genuine client installations, workshop builds and showroom displays.
 */

const PRODUCTS_DATA = [
  // --- REAL CLIENT SHOWCASE 1: Terracotta & Ivory L-Shaped Sectional ---
  {
    id: "l-shape-terracotta-sofa",
    slug: "custom-l-shaped-terracotta-sofa",
    name: "Custom L-Shaped Sectional Sofa in Terracotta & Ivory",
    category: "l-shaped-sofas",
    categoryLabel: "L-Shaped Sofas",
    shortDescription: "Bespoke dual-tone L-sectional with rust terracotta fabric and fluted accent cushions.",
    description: "Designed and crafted for modern living, this bespoke L-shaped sectional sofa brings warmth, style, and functional comfort into your home. Built on a sturdy seasoned wooden framework with high-resilience foam padding, it features an inviting rust terracotta fabric paired with a warm ivory lower surround. Comes with tailored ribbed accent cushions.",
    images: [
      "images/sofas/l-shape-terracotta-sofa.jpg?v=unique_v12"
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
    shortDescription: "Contemporary teal L-shaped sectional with a matching upholstered center coffee table.",
    description: "A show-stopping living room centerpiece delivered to a Silvassa residence. Features an expansive chaise lounge, padded backrest channel stitching, and a custom matching geometric coffee table with glass top insert.",
    images: [
      "images/sofas/teal-l-shaped-sectional-hd.jpg?v=unique_v12"
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
    shortDescription: "Luxurious 3-seater sofa with vertical fluted backrest tailoring and slender brass legs.",
    description: "An elegant centerpiece for contemporary formal living rooms. This designer sofa showcases fine vertical channel tufting on the backrest, generous dual seat cushions with wrapped comfort layers, and refined brass legs that lift the silhouette off the floor to create an airy, spacious ambience.",
    images: [
      "images/sofas/designer-fluted-sofa-hd.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Available as 3-seater, 2-seater love seat, and armchair set",
      "Leg finishes: Polished Brass, Matte Black, or Brushed Nickel",
      "Selection of stain-resistant textured fabrics and velvets"
    ],
    highlights: ["Vertical Channel Tufting", "Reinforced Hardwood Frame", "Metallic Accent Legs", "Plush Multi-Layer Cushions"],
    servicesAvailable: ["Custom Sizing", "Showroom Fabric Selection", "Doorstep Delivery in Silvassa Region"]
  },

  // --- REAL CLIENT SHOWCASE 4: Modern Curved Aesthetic Lounge Sofa ---
  {
    id: "curved-taupe-lounge-sofa",
    slug: "modern-curved-aesthetic-lounge-sofa",
    name: "Modern Curved Aesthetic Lounge Sofa in Textured Fabric",
    category: "designer-sofas",
    categoryLabel: "Designer Sofas",
    shortDescription: "Sculptural curved 3-seater sofa in warm taupe weave with spherical accent cushion.",
    description: "Photographed installed in a luxury residence. Features an organic curved silhouette that effortlessly anchors open-plan living rooms, continuous tailored backrest foam, and ultra-comfortable deep seating cushions complemented by a spherical statement cushion.",
    images: [
      "images/sofas/curved-taupe-lounge-sofa.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom radius and length (7ft, 8ft, 9ft+)",
      "Choice of bouclé, chenille, or linen-blend fabrics",
      "Matching accent ball cushions and ottomans"
    ],
    highlights: ["Sculptural Curved Architecture", "Ball Accent Cushion", "Continuous Padded Backrest", "Client Residence Setup"],
    servicesAvailable: ["Custom Sizing", "Showroom Fabric Swatches", "Silvassa White-Glove Delivery"]
  },

  // --- REAL WORKSHOP SHOWCASE 5: Bespoke Camel Modular L-Sectional ---
  {
    id: "camel-modular-l-sectional",
    slug: "bespoke-camel-modular-l-sectional-sofa",
    name: "Bespoke Camel Tan Modular L-Shaped Sectional Sofa",
    category: "l-shaped-sofas",
    categoryLabel: "L-Shaped Sofas",
    shortDescription: "Expansive corner modular sectional in warm camel upholstery with supportive headrests.",
    description: "Captured freshly fabricated at our Silvassa workshop ready for dispatch. Built with heavy-duty internal framing, individual seat modular sections for versatile room arrangements, and dual-density foam cushions that offer lasting lumbar and shoulder support.",
    images: [
      "images/sofas/camel-modular-l-sectional-sofa.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Configurable section counts (4-seater, 6-seater, 8-seater corner)",
      "Adjustable or fixed headrest inclinations",
      "Over 100+ stain-resistant upholstery fabrics"
    ],
    highlights: ["Workshop Fresh Build", "High-Back Headrest Support", "Modular Locking Units", "Plush Lumbar Pillows"],
    servicesAvailable: ["Custom Fabrication", "Showroom Fabric Preview", "Direct Workshop Inspection"]
  },

  // --- REAL WORKSHOP SHOWCASE 6: Handcrafted Cream & Tan Dual-Tone Sofa ---
  {
    id: "custom-cream-tan-sofa",
    slug: "handcrafted-cream-tan-accent-sofa",
    name: "Handcrafted Cream & Tan Dual-Tone Accent Sofa",
    category: "modern-sofas",
    categoryLabel: "Modern Sofas",
    shortDescription: "Curved silhouette sofa in textured cream fabric with tan leatherette accents.",
    description: "Built by our craftsmen in the Silvassa workshop. Showcases a soft curved platform, premium comfort padding, and dual-material construction that pairs warm tan leatherette accents with durable textured white seating.",
    images: [
      "images/sofas/custom-cream-tan-sofa-hd.jpg?v=unique_v12"
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

  // --- REAL CLIENT SHOWCASE 7: Architectural Backlit Channel-Tufted Bed ---
  {
    id: "backlit-channel-tufted-bed",
    slug: "architectural-backlit-channel-tufted-bed",
    name: "Architectural Warm-Backlit Channel-Tufted Bed Frame",
    category: "headboards",
    categoryLabel: "Designer Headboards",
    shortDescription: "Custom platform bed with vertical channel tufting and integrated LED backlighting.",
    description: "A signature bedroom installation in Silvassa. Designed with a curved-contour vertical channel tufted headboard, concealed indirect warm LED illumination, and a heavy-duty platform foundation engineered for complete silence and maximum mattress support.",
    images: [
      "images/beds/backlit-channel-tufted-bed.jpg?v=unique_v12",
      "images/beds/terracotta-arch-luxury-bed.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "King, Queen, or Custom Mattress Dimensions",
      "Integrated LED channel lighting with warm/cool temperature options",
      "Choice of velvet, suede, or performance bouclé headboard fabrics",
      "Optional hydraulic under-bed storage box"
    ],
    highlights: ["Concealed LED Warm Lighting", "Vertical Fluted Padding", "Heavy-Duty Framework", "Architectural Fit"],
    servicesAvailable: ["Custom Sizing", "On-site Room Measurement", "Complete Bedroom Installation"]
  },

  // --- REAL CLIENT SHOWCASE 8: Master Bedroom Suite & Botanical Wall ---
  {
    id: "botanical-luxury-bedroom-suite",
    slug: "master-bedroom-suite-fluted-bed",
    name: "Master Bedroom Suite: Fluted Bed Frame with Botanical Wall",
    category: "headboards",
    categoryLabel: "Designer Headboards",
    shortDescription: "Master bedroom suite with dusty-rose fluted headboard and matching floating side drawers.",
    description: "An authentic turn-key bedroom furnishing by Bombay Sofa & Furnishing. Includes a generous vertical-fluted headboard upholstered in premium dusty rose velvet, integrated floating nightstands, and coordinated botanical feature wallpaper styling.",
    images: [
      "images/beds/botanical-luxury-bedroom-bed.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Headboard height and width customized to your wall size",
      "Integrated floating nightstand modules with soft-close drawers",
      "Matching feature wallpapers and sheer window curtains"
    ],
    highlights: ["Complete Bedroom Styling", "Floating Nightstands", "Vertical Fluting", "Client Installation"],
    servicesAvailable: ["Complete Room Furnishing", "Wall Measurement", "Showroom Consultation"]
  },

  // --- REAL CLIENT SHOWCASE 9: Custom Platform Bed Frame ---
  {
    id: "custom-platform-bed",
    slug: "custom-upholstered-platform-bed",
    name: "Custom Upholstered Platform Bed with Extended Headboard",
    category: "beds",
    categoryLabel: "Beds & Furniture",
    shortDescription: "Low-profile platform bed with full-width upholstered headboard and integrated side tables.",
    description: "Crafted to redefine bedroom aesthetics, this custom platform bed features clean minimalist architecture, heavy-duty slat support for any mattress type, and an upholstered headboard tailored in durable, soft-touch fabric.",
    images: [
      "images/beds/custom-platform-bed-hd.jpg?v=unique_v12"
    ],
    featured: false,
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

  // --- ADDITIONAL CURATED SHOWROOM DESIGNS ---
  {
    id: "designer-coffee-table",
    slug: "handcrafted-designer-coffee-table",
    name: "Handcrafted Organic Wood & Stone Coffee Table",
    category: "coffee-tables",
    categoryLabel: "Coffee Tables",
    shortDescription: "Organic minimalist coffee table with smooth rounded corners and rich timber finish.",
    description: "The ideal centerpiece to complement bespoke sofa arrangements. Made from premium seasoned timber with smooth hand-finished edges, offering both functional surface area and tactile craftsmanship.",
    images: [
      "images/sofas/designer-coffee-table.jpg?v=unique_v12"
    ],
    featured: false,
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
    id: "quilted-orthopedic-spine-mattress",
    slug: "quilted-orthopedic-spine-mattress",
    name: "Quilted Orthopedic Spine Care Mattress",
    category: "mattresses",
    categoryLabel: "Orthopedic Mattresses",
    shortDescription: "Therapeutic orthopedic mattress in charcoal quilting, tailored to any bed dimension.",
    description: "Handcrafted at our Silvassa workshop, this orthopedic mattress features high-density rebonded foam composites, therapeutic lumbar posture zones, and a breathable charcoal geometric jacquard quilt that maintains optimal sleep temperature.",
    images: [
      "images/mattresses/orthopedic-quilted-charcoal-mattress.jpg?v=unique_v13",
      "images/mattresses/workshop-craftsmen-tape-edge-stitching.jpg?v=unique_v13"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Exact millimeter sizing for King, Queen, Single, or bespoke beds",
      "Choice of firmness: Balanced Medium, Ortho-Firm, or Dual-Sided Comfort",
      "Thickness customized from 5 inches up to 12+ inches",
      "Anti-sag heavy rebonded base core with multi-year warranty"
    ],
    highlights: ["100% Real Workshop Photo", "Spine Alignment Core", "Heavy Quilted Jacquard", "Silvassa Direct Pricing"],
    servicesAvailable: ["Custom Sizing to Fit Any Bed Frame", "Firmness Consultation", "Free Silvassa Delivery"]
  },
  {
    id: "dual-tone-pocket-spring-mattress",
    slug: "dual-tone-pocket-spring-mattress",
    name: "Dual-Tone Luxury Pocket Spring Mattress",
    category: "mattresses",
    categoryLabel: "Pocket Spring Mattresses",
    shortDescription: "Zero-motion pocket spring mattress with reinforced edge piping and plush comfort layers.",
    description: "Engineered for peaceful sleep without disturbance, this mattress features individually encased barrel pocket coils that respond independently to body contours, reinforced by high-density edge encasement and dual-tone perimeter piping.",
    images: [
      "images/mattresses/dual-tone-pocket-spring-mattress.jpg?v=unique_v13",
      "images/mattresses/client-installation-orthopedic-bed-mattress.jpg?v=unique_v13"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Individually wrapped pocket coils with zero motion transfer",
      "Dual-tone edge binding with high-density perimeter rail",
      "Plush pillow-top or euro-top comfort quilting layer",
      "Custom King, Queen, or odd-size cot dimensions"
    ],
    highlights: ["Zero Partner Motion Transfer", "Independent Pocket Coils", "Dual-Tone Workshop Finish", "Edge-to-Edge Support"],
    servicesAvailable: ["Free Bed Measurement in Silvassa", "Showroom Testing", "Doorstep Setup"]
  },
  {
    id: "luxury-sheer-blackout-curtains",
    slug: "luxury-sheer-blackout-curtains",
    name: "Made-to-Measure Sheer & Blackout Drapes",
    category: "curtains",
    categoryLabel: "Curtains",
    shortDescription: "Custom floor-to-ceiling sheer drapes and blackout curtains tailored for optimal light control.",
    description: "Transform windows into refined architectural statements. Our made-to-measure curtain services include on-site measurement, fabric consultation from our showroom's curated collection, and precision pleat stitching.",
    images: [
      "images/curtains/sheer-window-drapes.jpg?v=unique_v12"
    ],
    featured: false,
    isRealClientPhoto: false,
    customizationOptions: [
      "Header styles: Eyelet, Pinch Pleat, Wave Fold, or Rod Pocket",
      "Motorized smart curtain tracks or designer manual rods",
      "100% Blackout linings or airy semi-sheer fabrics"
    ],
    highlights: ["Made-to-Measure Precision", "Motorization Compatible", "Showroom Fabric Library", "On-site Installation"],
    servicesAvailable: ["Free Home Measurement in Silvassa", "Showroom Fabric Consultation", "Professional Installation"]
  },
  {
    id: "modern-window-blinds",
    slug: "architectural-window-blinds",
    name: "Architectural Zebra & Roller Blinds",
    category: "blinds",
    categoryLabel: "Blinds",
    shortDescription: "Contemporary zebra daylight control blinds and moisture-resistant roller shades.",
    description: "Engineered for precise light control, privacy, and streamlined aesthetics. Featuring durable aluminum cassettes, smooth pull mechanisms, and dual-layer striped fabrics that allow continuous adjustment between sheer and full blackout modes.",
    images: [
      "images/blinds/wooden-roller-blinds.jpg?v=unique_v12"
    ],
    featured: false,
    isRealClientPhoto: false,
    customizationOptions: [
      "Zebra dual-shade, blackout roller, wooden Venetian, or honeycomb styles",
      "Manual chain drive or motorized remote control",
      "Custom millimeter-precise window frame fitting"
    ],
    highlights: ["Dual-Layer Light Control", "Dust & Moisture Resistant", "Slim Aluminum Cassette", "Commercial & Residential"],
    servicesAvailable: ["On-site Window Measurement", "Custom Fabrication", "Professional Mounting"]
  },
  {
    id: "designer-furnishing-fabrics",
    slug: "designer-furnishing-fabrics",
    name: "Curated Upholstery & Furnishing Fabric Swatches",
    category: "bedsheets-fabrics",
    categoryLabel: "Fabrics & Linen",
    shortDescription: "Premium velvet, bouclé, textured jacquard, and linen upholstery fabrics by the meter.",
    description: "Explore hundreds of carefully curated upholstery and furnishing textiles at our Silvassa showroom. From heavy-duty commercial rub-count velvets to breathable linen and stain-resistant performance textiles.",
    images: [
      "images/fabrics/upholstery-fabric-textures.jpg?v=unique_v12"
    ],
    featured: false,
    isRealClientPhoto: false,
    customizationOptions: [
      "Available by the meter for sofas, headboards, cushions, and curtains",
      "Wide spectrum of plain shades, micro-textures, and designer patterns"
    ],
    highlights: ["Over 200+ Swatches in Showroom", "High Rub-Count Durability", "Fade-Resistant Dyes"],
    servicesAvailable: ["Fabric Selection Consultation", "Showroom Walk-in Browsing"]
  },
  {
    id: "textured-luxury-wallpapers",
    slug: "textured-luxury-wallpapers",
    name: "Textured & Metallic Accent Wallpapers",
    category: "wallpapers",
    categoryLabel: "Wallpapers",
    shortDescription: "Tactile textured and geometric pattern wallpapers designed for statement walls.",
    description: "Give living rooms, bedrooms, and feature niches unmistakable character. Our curated catalog includes non-woven embossed papers, washable textured vinyls, and contemporary geometric prints.",
    images: [
      "images/wallpapers/textured-luxury-wallpaper.jpg?v=unique_v12"
    ],
    featured: false,
    isRealClientPhoto: false,
    customizationOptions: [
      "Extensive catalogue of geometric, damask, modern abstract, and botanical patterns",
      "Roll-by-roll matching and seamless pattern alignment"
    ],
    highlights: ["Washable Surface", "Seamless Pattern Fit", "Vibrant Lightfast Inks", "Showroom Catalog Selection"],
    servicesAvailable: ["Wall Area Measurement", "Professional Wallpaper Application in Silvassa"]
  }
,
  // --- PUFFIES & OTTOMANS (5 BESPOKE DESIGNS) ---
  {
    id: "rectangular-bed-bench-puffy",
    slug: "nordic-rectangular-bed-end-bench-puffy",
    name: "Nordic Rectangular Bed-End Bench Puffy",
    category: "puffies",
    categoryLabel: "Puffies & Ottomans",
    shortDescription: "Generous 4-foot upholstered bench with textured weave and natural timber legs.",
    description: "A versatile statement piece crafted in our Silvassa workshop. Designed for foot-of-bed placement, dressing areas, entryways, or extra living room seating. Features a solid seasoned wood foundation and high-resilience foam padding.",
    images: [
      "images/puffies/rectangular-bed-bench-puffy.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom lengths: 3ft, 4ft, 5ft or custom bed-width match",
      "Choice of tapered round or square timber legs in natural teak, walnut, or black finish",
      "Over 100+ stain-resistant textured fabrics and velvets"
    ],
    highlights: ["Tapered Solid Timber Legs", "High-Density Foam Cushioning", "Multi-Room Utility", "Workshop Build"],
    servicesAvailable: ["Custom Sizing", "Showroom Fabric Selection", "Silvassa Region Delivery"]
  },
  {
    id: "square-minimalist-ottoman-puffy",
    slug: "square-minimalist-low-ottoman-puffy",
    name: "Square Minimalist Low Ottoman Puffy",
    category: "puffies",
    categoryLabel: "Puffies & Ottomans",
    shortDescription: "Low-profile square ottoman with curved timber corner bracket legs.",
    description: "Built for relaxed modern living. Features curved solid timber corner bracket legs, clean tailored seams, and generous high-resilience seating foam suitable as a footrest, coffee table companion, or occasional seat.",
    images: [
      "images/puffies/square-minimalist-ottoman-puffy.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom square dimensions (24x24 in, 30x30 in, 36x36 in+)",
      "Timber corner bracket finishes (Natural, Walnut, Dark Oak)",
      "Fabric choices: Bouclé, Chenille, Woven Linen, Velvet"
    ],
    highlights: ["Curved Corner Timber Brackets", "Tailored Seams", "Low-Profile Relaxed Height", "Multi-Functional"],
    servicesAvailable: ["Custom Dimensions", "Fabric Swatches at Showroom"]
  },
  {
    id: "artisan-tufted-chaise-bench-puffy",
    slug: "artisan-channel-tufted-chaise-bench-puffy",
    name: "Artisan Channel-Tufted Chaise Bench Puffy",
    category: "puffies",
    categoryLabel: "Puffies & Ottomans",
    shortDescription: "Artisan tufted daybed bench with curved arm bolsters and angled hardwood legs.",
    description: "An elegant accent daybed bench crafted in our Silvassa workshop. Showcases deep channel/button tufting, contoured side bolsters for lounging, and angled solid hardwood legs that bring mid-century sophistication into bedrooms and living areas.",
    images: [
      "images/puffies/artisan-tufted-chaise-bench-puffy.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Single or dual-sided contoured arm bolsters",
      "Deep button tufted or vertical channel stitch finish",
      "Over 150+ luxury velvet and bouclé textiles"
    ],
    highlights: ["Deep Channel/Button Tufting", "Contoured Arm Bolsters", "Mid-Century Angled Legs", "Silvassa Craftsmanship"],
    servicesAvailable: ["Custom Sizing", "Showroom Consultation"]
  },
  {
    id: "curved-flared-footstool-puffy",
    slug: "modern-curved-flared-footstool-puffy",
    name: "Modern Curved Flared Footstool Puffy",
    category: "puffies",
    categoryLabel: "Puffies & Ottomans",
    shortDescription: "Dual-tone curved footstool with plush padded cushion and round tapered legs.",
    description: "Ergonomically designed to pair with lounge armchairs, vanity dressers, or relaxed reading nooks. Features a dual-tone curved flared silhouette, plush comfort wrapped top foam, and sturdy round dowel timber legs.",
    images: [
      "images/puffies/curved-flared-footstool-puffy.jpg?v=unique_v12"
    ],
    featured: false,
    isRealClientPhoto: true,
    customizationOptions: [
      "Dual-tone or single-tone fabric color combinations",
      "Custom seat height to match specific armchair or bed",
      "Stain-resistant and pet-friendly upholstery options"
    ],
    highlights: ["Flared Curved Base", "Deep Padded Top Cushion", "Round Tapered Legs", "Ergonomic Comfort"],
    servicesAvailable: ["Custom Height Match", "Fabric Swatches at Showroom"]
  },
  {
    id: "round-cylindrical-tier-pouf-puffy",
    slug: "nordic-double-tier-round-pouf-stool-puffy",
    name: "Nordic Double-Tier Round Pouf Stool Puffy",
    category: "puffies",
    categoryLabel: "Puffies & Ottomans",
    shortDescription: "Double-tier cylindrical pouf with timber divider ring and solid dowel legs.",
    description: "A trendy boutique design popular for vanity dressing tables, boutique bedrooms, and modern living rooms. Features a tiered cylindrical silhouette with an accent wood trim ring and 4 vertical solid timber dowel legs.",
    images: [
      "images/puffies/round-cylindrical-tier-pouf-puffy.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom diameter and height for vanity table clearance",
      "Timber accent band stain matching bedroom furniture",
      "Choice of bouclé, velvet, and textured weave textiles"
    ],
    highlights: ["Double-Tier Cylinder Silhouette", "Timber Divider Ring", "4 Solid Wood Dowel Legs", "Vanity & Dressing Fit"],
    servicesAvailable: ["Custom Sizing", "Showroom Fabric Selection"]
  }
,
  {
    id: "cozy-boucle-round-pouf-puffy",
    slug: "cozy-boucle-round-pouf-puffy",
    name: "Cozy Bouclé Round Pouf Puffy with Timber Legs",
    category: "puffies",
    categoryLabel: "Puffies & Ottomans",
    shortDescription: "Plush round pouf in textured teddy bouclé with tapered timber legs.",
    description: "Designed for effortless, tactile luxury. Brings warm Scandinavian comfort and secondary casual seating into bedrooms and living spaces. Built with high-density resilient foam core and solid timber tapered legs.",
    images: [
      "images/puffies/cozy-boucle-round-pouf-puffy.jpg?v=unique_v12"
    ],
    featured: false,
    isRealClientPhoto: true,
    customizationOptions: [
      "Custom diameter: 18 in, 22 in, 26 in+",
      "Timber leg finishes: Natural Oak, Warm Walnut, Ebonized Black",
      "Fabric options: Teddy Bouclé, Velvet, Heavy Textured Linen"
    ],
    highlights: ["Teddy Bouclé Texture", "Tapered Timber Dowel Legs", "Compact Circular Footprint", "High-Density Core"],
    servicesAvailable: ["Custom Sizing", "Showroom Fabric Selection"]
  },
  {
    id: "luxury-tufted-square-ottoman-puffy",
    slug: "biscuit-tufted-velvet-square-ottoman-puffy",
    name: "Biscuit-Tufted Velvet Square Ottoman Puffy with Brass Legs",
    category: "puffies",
    categoryLabel: "Puffies & Ottomans",
    shortDescription: "Square velvet ottoman with deep biscuit grid tufting and brass-finished legs.",
    description: "A formal living room statement piece. Handcrafted with deep geometric biscuit tufting, high-resilience wrapped foam padding, and polished brass-finished metallic legs. Available in pairs or individual accent units.",
    images: [
      "images/puffies/luxury-tufted-square-ottoman-puffy.jpg?v=unique_v12"
    ],
    featured: true,
    isRealClientPhoto: true,
    customizationOptions: [
      "Available as individual unit or coordinated color pairs",
      "Choice of 100+ luxury velvet shades (Champagne, Mustard, Teal, Rust, Olive)",
      "Leg finishes: Polished Brass, Brushed Gold, Matte Black"
    ],
    highlights: ["Deep Biscuit Grid Tufting", "Polished Brass Accent Legs", "Plush Woven Velvet", "Pair Options"],
    servicesAvailable: ["Custom Dimensions", "Showroom Fabric Selection"]
  },
  {
    id: "cylindrical-boucle-trio-stools-puffy",
    slug: "minimalist-boucle-cylindrical-stool-puffy",
    name: "Minimalist Bouclé Cylindrical Stool Puffy",
    category: "puffies",
    categoryLabel: "Puffies & Ottomans",
    shortDescription: "Modern cylindrical stool wrapped in ivory bouclé with natural timber legs.",
    description: "Lightweight, chic, and endlessly versatile. Features a seamless curved cylindrical foam core wrapped in ivory teddy bouclé, elevated on 4 solid natural timber dowel legs. Perfect for dressing vanity setups or clustered living room seating.",
    images: [
      "images/puffies/cylindrical-boucle-trio-stools-puffy.jpg?v=unique_v12"
    ],
    featured: false,
    isRealClientPhoto: true,
    customizationOptions: [
      "Single stool or set of 2, 3 nested stools",
      "Custom seat height to fit specific dressing vanity table clearance",
      "Fabric texture choices in warm neutrals, charcoal, and pastels"
    ],
    highlights: ["Seamless Cylindrical Contour", "Natural Light Wood Dowel Legs", "Multi-Room Vanity & Lounge Fit"],
    servicesAvailable: ["Vanity Height Fit", "Showroom Fabric Selection"]
  }
];

if (typeof window !== 'undefined') {
  window.PRODUCTS = PRODUCTS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS_DATA;
}
