# Bombay Sofa & Furnishing — Premium Showroom Website

A complete, production-ready, multi-page website designed and developed for **Bombay Sofa & Furnishing**, based in Silvassa, Dadra and Nagar Haveli and Daman and Diu, India.

## Business Details
- **Business Name:** Bombay Sofa & Furnishing
- **Category:** Furniture, Sofa and Home Furnishing Showroom
- **Address:** Shop No. 06, Shiv Shakti Residency, Mandir Faliya, Char Rasta, Amli Industrial Estate, Silvassa, Dadra and Nagar Haveli and Daman and Diu – 396230, India.
- **Phone / WhatsApp:** +91 70585 73889 (WhatsApp: `917058573889`)
- **Instagram:** [@bombaysofafurnituring](https://www.instagram.com/bombaysofafurnituring/)
- **Google Profile:** [Google Business Link](https://share.google/4zyBRtd5UZelUgpP9)
- **Verified Reputation:** 5.0 / 5.0 Rating based on 15 Google Reviews

---

## Website Structure & Pages

1. **Home (`index.html`)**
   - Sticky navigation with mobile drawer & brand monogram logo
   - Luxury editorial hero section featuring client's actual photography
   - Introduction to the Silvassa showroom
   - Shop By Category (Sofas, Beds, Mattresses, Curtains, Blinds, Fabrics, Wallpapers)
   - Custom Sofa Solutions spotlight
   - Why Choose Us (showcasing authenticity and localized craftsmanship)
   - Featured Collection powered by structured product data
   - Verified 5.0★ Google customer reviews with real reviewer feedback
   - Instagram gallery section linking to @bombaysofafurnituring
   - Final conversion CTA & comprehensive footer

2. **About Us (`about.html`)**
   - Brand philosophy: "Bringing Comfort & Style Into Every Home"
   - Specialisations and customer-first approach
   - Showroom location at Shiv Shakti Residency, Silvassa

3. **Sofas & Furniture (`sofas-furniture.html`)**
   - Interactive category filter pills (L-Shaped, Designer, Modern, Beds, Coffee Tables, Accent Chairs)
   - Real client showcase badges
   - Dynamic product cards with WhatsApp enquiry integration
   - Centralized data architecture in `js/products-data.js`

4. **Product Detail (`product-detail.html`)**
   - Dynamic product hydration via URL parameter `?id=...`
   - Image gallery stage with thumbnail switcher and lightbox zoom
   - Customisation highlights and dimensions guidance
   - Pre-filled WhatsApp enquiry buttons
   - Related products suggestions

5. **Home Furnishing (`home-furnishing.html`)**
   - 6 core verticals: Mattresses, Curtains, Window Blinds, Bedsheets, Fabrics, and Wallpapers
   - Detailed options breakdowns
   - Dedicated WhatsApp consultation CTAs for each vertical

6. **Customisation & Repair (`customisation-repair.html`)**
   - Core lead-generation page for sofa repair, reupholstery, and custom fabrication
   - 5-step service breakdown
   - Direct "Send sofa photos on WhatsApp" action

7. **Gallery (`gallery.html`)**
   - Responsive grid displaying client installations and showroom photography
   - Category filtering (Sofa Designs, Living Room, Bedroom, Curtains & Blinds, Showroom, Custom Sofas)
   - Fullscreen Lightbox modal with Prev/Next keyboard navigation

8. **Contact Us (`contact.html`)**
   - Complete showroom address, direct phone, and social media handles
   - Interactive enquiry form with client-side validation
   - Automatic pre-filled WhatsApp message generation (no fake database claims)
   - Embedded interactive Google Map and directions link

---

## Technical Stack & Features
- **Semantic HTML5** & **Modern CSS3**: Custom design tokens, CSS variables, `clamp()` fluid typography, and flex/grid layouts.
- **Modern JavaScript**: Zero external bloat; fast, modular, and native.
- **Lucide Icons**: Feather/Lucide vector icons.
- **Local SEO**: LocalBusiness/FurnitureStore schema, BreadcrumbList schema, canonical tags, Open Graph meta tags, `sitemap.xml`, and `robots.txt`.
- **Mobile First**: Fixed mobile quick-action bar (Call + WhatsApp), touch-friendly targets (min 48px), and responsive drawer.

---

## How to Run Locally

You can open any `.html` file directly in any modern browser, or run the included zero-dependency server:

```bash
npm start
```
Visit `http://localhost:3000` in your web browser.

