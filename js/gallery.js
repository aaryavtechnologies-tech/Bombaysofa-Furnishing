/**
 * Bombay Sofa & Furnishing - Visual Gallery Engine
 * Category filtering, lightbox navigation, keyboard support.
 * Features 100% authentic genuine client installations, workshop builds and showroom displays.
 */

const GALLERY_ITEMS = [
  // --- REAL CLIENT SHOWCASE 1: Designer Fluted Beige 3-Seater ---
  {
    src: "images/sofas/designer-fluted-sofa-hd.jpg?v=unique_v12",
    title: "Designer Fluted 3-Seater Sofa with Brass Accents",
    category: "sofa-designs",
    categoryLabel: "Sofa Designs",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 2: Modern Curved Aesthetic Lounge Sofa ---
  {
    src: "images/sofas/curved-taupe-lounge-sofa.jpg?v=unique_v12",
    title: "Modern Curved Aesthetic Lounge Sofa in Textured Fabric",
    category: "sofa-designs",
    categoryLabel: "Sofa Designs",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 3: Teal L-Shaped Sectional with Matching Center Table ---
  {
    src: "images/sofas/teal-l-shaped-sectional-hd.jpg?v=unique_v12",
    title: "Custom Teal Blue L-Shaped Sectional with Matching Coffee Table",
    category: "custom-sofas",
    categoryLabel: "Custom Sofa Projects",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 4: Terracotta & Ivory Sectional ---
  {
    src: "images/sofas/l-shape-terracotta-sofa.jpg?v=unique_v12",
    title: "Custom L-Shaped Sectional in Terracotta & Ivory",
    category: "custom-sofas",
    categoryLabel: "Custom Sofa Projects",
    isReal: true
  },
  // --- REAL WORKSHOP SHOWCASE 5: Bespoke Camel Tan Modular Sectional ---
  {
    src: "images/sofas/camel-modular-l-sectional-sofa.jpg?v=unique_v12",
    title: "Bespoke Camel Tan Modular L-Shaped Sectional Sofa",
    category: "custom-sofas",
    categoryLabel: "Custom Sofa Projects",
    isReal: true
  },
  // --- REAL WORKSHOP SHOWCASE 6: Cream & Tan Dual-Tone Curved Sofa ---
  {
    src: "images/sofas/custom-cream-tan-sofa-hd.jpg?v=unique_v12",
    title: "Handcrafted Cream & Tan Dual-Tone Curved Workshop Sofa",
    category: "custom-sofas",
    categoryLabel: "Custom Sofa Projects",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 7: Backlit Architectural Channel-Tufted Bed ---
  {
    src: "images/beds/backlit-channel-tufted-bed.jpg?v=unique_v12",
    title: "Warm Backlit Architectural Headboard Bed with Vertical Fluting",
    category: "bedroom-furniture",
    categoryLabel: "Bedroom Furniture",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 8: Master Bedroom Suite & Botanical Feature Wall ---
  {
    src: "images/beds/botanical-luxury-bedroom-bed.jpg?v=unique_v12",
    title: "Master Bedroom Suite: Fluted Bed Frame with Botanical Feature Wall",
    category: "bedroom-furniture",
    categoryLabel: "Bedroom Furniture",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 9: Curved Terracotta Padded Headboard Bed ---
  {
    src: "images/beds/terracotta-arch-luxury-bed.jpg?v=unique_v12",
    title: "Curved Terracotta Padded Headboard Platform Bed in Arch Niche",
    category: "bedroom-furniture",
    categoryLabel: "Bedroom Furniture",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 10: Custom Upholstered Platform Bed ---
  {
    src: "images/beds/custom-platform-bed-hd.jpg?v=unique_v12",
    title: "Custom Upholstered Platform Bed Frame with Headboard",
    category: "bedroom-furniture",
    categoryLabel: "Bedroom Furniture",
    isReal: true
  },
  // --- SHOWROOM & FURNISHING DESIGNS (ALL 100% DISTINCT PHOTOGRAPHY) ---
  {
    src: "images/sofas/designer-coffee-table.jpg?v=unique_v12",
    title: "Handcrafted Solid Teak & Stone Coffee Table",
    category: "living-furniture",
    categoryLabel: "Living Room Furniture",
    isReal: false
  },
  {
    src: "images/curtains/sheer-window-drapes.jpg?v=unique_v12",
    title: "Tailored Sheer Linen Drapes & Sunlight Filtering",
    category: "curtains-blinds",
    categoryLabel: "Curtains & Blinds",
    isReal: false
  },
  {
    src: "images/blinds/wooden-roller-blinds.jpg?v=unique_v12",
    title: "Architectural Zebra & Wooden Roller Blinds",
    category: "curtains-blinds",
    categoryLabel: "Curtains & Blinds",
    isReal: false
  },
  {
    src: "images/fabrics/upholstery-fabric-textures.jpg?v=unique_v12",
    title: "Curated Upholstery Swatch Library",
    category: "home-furnishing",
    categoryLabel: "Home Furnishing",
    isReal: false
  },
  {
    src: "images/wallpapers/textured-luxury-wallpaper.jpg?v=unique_v12",
    title: "Textured Luxury Accent Wall Coverings",
    category: "home-furnishing",
    categoryLabel: "Home Furnishing",
    isReal: false
  },
  {
    src: "images/mattresses/orthopedic-mattress.jpg?v=unique_v12",
    title: "Custom Multi-Layer Orthopedic Comfort Mattress",
    category: "home-furnishing",
    categoryLabel: "Home Furnishing",
    isReal: false
  },
  {
    src: "images/curtains/luxury-linen-curtains.jpg?v=unique_v12",
    title: "Luxury Textured Linen Living Room Curtains",
    category: "curtains-blinds",
    categoryLabel: "Curtains & Blinds",
    isReal: false
  },
  {
    src: "images/blinds/modern-venetian-blinds.jpg?v=unique_v12",
    title: "Modern Precision Venetian Daylight Blinds",
    category: "curtains-blinds",
    categoryLabel: "Curtains & Blinds",
    isReal: false
  },
  {
    src: "images/gallery/showroom-interior-display.jpg?v=unique_v12",
    title: "Bombay Sofa & Furnishing Showroom Display",
    category: "showroom",
    categoryLabel: "Showroom",
    isReal: false
  },
  {
    src: "images/sofas/craftsman-upholstery-work.jpg?v=unique_v12",
    title: "Artisan Woodworking & Upholstery Craftsmanship",
    category: "custom-sofas",
    categoryLabel: "Custom Sofa Projects",
    isReal: false
  }
];

let activeFilteredGallery = [...GALLERY_ITEMS];
let currentLightboxIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('visualGalleryGrid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');

  if (!galleryGrid) return;

  function renderGallery(cat) {
    galleryGrid.innerHTML = '';
    activeFilteredGallery = (cat === 'all')
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(item => item.category === cat);

    activeFilteredGallery.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      
      const realBadge = item.isReal 
        ? `<span class="product-badge product-badge-real" style="position: absolute; top: 12px; left: 12px; z-index: 2;">Client Installation</span>`
        : '';

      card.innerHTML = `
        ${realBadge}
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-caption-cat">${item.categoryLabel}</span>
          <h3 class="gallery-caption-title">${item.title}</h3>
        </div>
      `;

      card.addEventListener('click', () => openGalleryLightbox(index));
      galleryGrid.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderGallery(cat);
    });
  });

  // Initial render
  renderGallery('all');
});

function openGalleryLightbox(index) {
  currentLightboxIdx = index;
  updateGalleryLightboxContent();
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function updateGalleryLightboxContent() {
  const item = activeFilteredGallery[currentLightboxIdx];
  if (!item) return;

  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const cat = document.getElementById('lightboxCat');

  if (img) {
    img.src = item.src;
    img.alt = item.title;
  }
  if (title) title.textContent = item.title;
  if (cat) cat.textContent = item.categoryLabel + (item.isReal ? ' • Genuine Client Installation' : '');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function nextLightboxImage() {
  if (activeFilteredGallery.length === 0) return;
  currentLightboxIdx = (currentLightboxIdx + 1) % activeFilteredGallery.length;
  updateGalleryLightboxContent();
}

function prevLightboxImage() {
  if (activeFilteredGallery.length === 0) return;
  currentLightboxIdx = (currentLightboxIdx - 1 + activeFilteredGallery.length) % activeFilteredGallery.length;
  updateGalleryLightboxContent();
}

// Global hook for inline onclick calls
window.openLightbox = function(src, title, cat) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const tEl = document.getElementById('lightboxTitle');
  const cEl = document.getElementById('lightboxCat');

  if (img) img.src = src;
  if (tEl) tEl.textContent = title;
  if (cEl) cEl.textContent = cat;
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeLightbox = closeLightbox;

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightboxModal');
  if (!modal || !modal.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightboxImage();
  if (e.key === 'ArrowLeft') prevLightboxImage();
});
