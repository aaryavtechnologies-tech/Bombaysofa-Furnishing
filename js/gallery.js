/**
 * Bombay Sofa & Furnishing - Visual Gallery Engine
 * Category filtering, lightbox navigation, keyboard support.
 * Features 100% unique genuine client installations, workshop builds and showroom displays.
 */

const GALLERY_ITEMS = [
  // --- REAL CLIENT SHOWCASE 1: Designer Fluted Beige Sofa with Brass Accents ---
  {
    src: "images/sofas/designer-fluted-sofa-hd.jpg?v=unique_v11",
    title: "Designer Fluted 3-Seater Sofa with Brass Accents",
    category: "sofa-designs",
    categoryLabel: "Sofa Designs",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 2: Teal L-Shaped Sectional with Matching Center Table ---
  {
    src: "images/sofas/teal-l-shaped-sectional-hd.jpg?v=unique_v11",
    title: "Custom Teal Blue L-Shaped Sectional with Matching Coffee Table",
    category: "custom-sofas",
    categoryLabel: "Custom Sofa Projects",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 3: Terracotta & Ivory Sectional ---
  {
    src: "images/sofas/l-shape-terracotta-sofa.jpg?v=unique_v11",
    title: "Custom L-Shaped Sectional in Terracotta & Ivory",
    category: "custom-sofas",
    categoryLabel: "Custom Sofa Projects",
    isReal: true
  },
  // --- REAL WORKSHOP SHOWCASE 4: Cream & Tan Dual-Tone Curved Sofa ---
  {
    src: "images/sofas/custom-cream-tan-sofa-hd.jpg?v=unique_v11",
    title: "Handcrafted Cream & Tan Dual-Tone Curved Sofa",
    category: "custom-sofas",
    categoryLabel: "Custom Sofa Projects",
    isReal: true
  },
  // --- REAL CLIENT SHOWCASE 5: Custom Upholstered Platform Bed Frame ---
  {
    src: "images/beds/custom-platform-bed-hd.jpg?v=unique_v11",
    title: "Custom Upholstered Platform Bed Frame with Headboard",
    category: "bedroom-furniture",
    categoryLabel: "Bedroom Furniture",
    isReal: true
  },
  // --- SHOWROOM & FURNISHING DESIGNS (ALL UNIQUE PHOTOGRAPHS) ---
  {
    src: "images/sofas/designer-coffee-table.jpg?v=unique_v11",
    title: "Handcrafted Solid Teak & Stone Coffee Table",
    category: "living-furniture",
    categoryLabel: "Living Room Furniture",
    isReal: false
  },
  {
    src: "images/curtains/sheer-window-drapes.jpg?v=unique_v11",
    title: "Tailored Sheer Linen Drapes & Sunlight Filtering",
    category: "curtains-blinds",
    categoryLabel: "Curtains & Blinds",
    isReal: false
  },
  {
    src: "images/blinds/wooden-roller-blinds.jpg?v=unique_v11",
    title: "Architectural Zebra & Wooden Roller Blinds",
    category: "curtains-blinds",
    categoryLabel: "Curtains & Blinds",
    isReal: false
  },
  {
    src: "images/fabrics/upholstery-fabric-textures.jpg?v=unique_v11",
    title: "Curated Upholstery Swatch Library",
    category: "home-furnishing",
    categoryLabel: "Home Furnishing",
    isReal: false
  },
  {
    src: "images/wallpapers/textured-luxury-wallpaper.jpg?v=unique_v11",
    title: "Textured Luxury Accent Wall Coverings",
    category: "home-furnishing",
    categoryLabel: "Home Furnishing",
    isReal: false
  },
  {
    src: "images/mattresses/orthopedic-mattress.jpg?v=unique_v11",
    title: "Custom Multi-Layer Orthopedic Comfort Mattress",
    category: "home-furnishing",
    categoryLabel: "Home Furnishing",
    isReal: false
  },
  {
    src: "images/curtains/luxury-linen-curtains.jpg?v=unique_v11",
    title: "Luxury Textured Linen Living Room Curtains",
    category: "curtains-blinds",
    categoryLabel: "Curtains & Blinds",
    isReal: false
  },
  {
    src: "images/blinds/modern-venetian-blinds.jpg?v=unique_v11",
    title: "Modern Precision Venetian Daylight Blinds",
    category: "curtains-blinds",
    categoryLabel: "Curtains & Blinds",
    isReal: false
  },
  {
    src: "images/gallery/showroom-interior-display.jpg?v=unique_v11",
    title: "Bombay Sofa & Furnishing Showroom Display",
    category: "showroom",
    categoryLabel: "Showroom",
    isReal: false
  },
  {
    src: "images/sofas/craftsman-upholstery-work.jpg?v=unique_v11",
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
          <h4 class="gallery-caption-title">${item.title}</h4>
        </div>
      `;

      card.addEventListener('click', () => {
        openGalleryLightbox(index);
      });

      galleryGrid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderGallery(cat);
    });
  });

  // Lightbox navigation hooks
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevImage();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextImage();
    });
  }

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

  // Initial render
  renderGallery('all');
});

function openGalleryLightbox(index) {
  if (!activeFilteredGallery[index]) return;
  currentLightboxIdx = index;
  updateLightboxView();
  
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function updateLightboxView() {
  const item = activeFilteredGallery[currentLightboxIdx];
  if (!item) return;

  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalCat = document.getElementById('lightboxCat');

  if (modalImg) modalImg.src = item.src;
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalCat) modalCat.textContent = `${item.categoryLabel} ${item.isReal ? '• Client Installation' : ''}`;
}

function showNextImage() {
  if (activeFilteredGallery.length === 0) return;
  currentLightboxIdx = (currentLightboxIdx + 1) % activeFilteredGallery.length;
  updateLightboxView();
}

function showPrevImage() {
  if (activeFilteredGallery.length === 0) return;
  currentLightboxIdx = (currentLightboxIdx - 1 + activeFilteredGallery.length) % activeFilteredGallery.length;
  updateLightboxView();
}
