/**
 * Bombay Sofa & Furnishing - Main JavaScript Module
 * Silvassa, Dadra and Nagar Haveli
 */

// Central Business Config
const BUSINESS_CONFIG = {
  name: "Bombay Sofa & Furnishing",
  phoneDisplay: "+91 70585 73889",
  phoneRaw: "+917058573889",
  whatsappNumber: "917058573889",
  address: "Shop No. 06, Shiv Shakti Residency, Mandir Faliya, Char Rasta, Amli Industrial Estate, Silvassa, Dadra and Nagar Haveli and Daman and Diu – 396230, India.",
  instagram: "https://www.instagram.com/bombaysofafurnituring/",
  googleBusiness: "https://share.google/4zyBRtd5UZelUgpP9"
};

/**
 * Generate formatted, encoded WhatsApp URL
 * @param {string} customMessage 
 * @returns {string}
 */
function getWhatsAppUrl(customMessage) {
  const defaultMsg = "Hello Bombay Sofa & Furnishing, I would like to know more about your furniture and home furnishing products in Silvassa.";
  const text = customMessage && customMessage.trim().length > 0 ? customMessage.trim() : defaultMsg;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Open WhatsApp with contextual prefilled message
 * @param {string} message 
 */
function triggerWhatsApp(message) {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Sticky Header Elevation
  const header = document.querySelector('.header-sticky');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Navigation Drawer Management
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');

  const openDrawer = () => {
    if (drawer && backdrop) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
  };

  const closeDrawer = () => {
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeLightbox();
      closeProductModal();
    }
  });

  // 3. Mark Active Navigation Item
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 4. Global WhatsApp CTA Handlers
  document.querySelectorAll('[data-wa-message]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = btn.getAttribute('data-wa-message');
      triggerWhatsApp(msg);
    });
  });

  // 5. Initialize Lucide Icons if available
  
  // Polyfill Instagram SVG icons (since Lucide v0.400+ removed brand icons)
  function polyfillInstagramIcons() {
    var svgCode = '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>';
    var elements = document.querySelectorAll('[data-lucide="instagram"], i.lucide-instagram');
    elements.forEach(function (el) {
      var w = el.style.width || el.getAttribute('width') || '18';
      var h = el.style.height || el.getAttribute('height') || '18';
      var numW = parseInt(w) || 18;
      var numH = parseInt(h) || 18;
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', numW);
      svg.setAttribute('height', numH);
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('class', 'lucide lucide-instagram ' + (el.className || ''));
      svg.setAttribute('aria-hidden', 'true');
      if (el.style.cssText) svg.style.cssText = el.style.cssText;
      svg.innerHTML = svgCode;
      el.replaceWith(svg);
    });
  }

  // Official WhatsApp vector logo polyfill
  function polyfillWhatsAppIcons() {
    var waPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';
    // Target any remaining i elements inside whatsapp buttons or links
    var elements = document.querySelectorAll('.btn-whatsapp i, .floating-whatsapp-btn i, a[href*="wa.me"] i, button[type="submit"].btn-whatsapp i');
    elements.forEach(function (el) {
      var w = el.style.width || el.getAttribute('width') || (el.closest('.floating-whatsapp-btn') ? '30' : '18');
      var h = el.style.height || el.getAttribute('height') || (el.closest('.floating-whatsapp-btn') ? '30' : '18');
      var numW = parseInt(w) || 18;
      var numH = parseInt(h) || 18;
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', numW);
      svg.setAttribute('height', numH);
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('class', 'whatsapp-icon ' + (el.className || ''));
      svg.setAttribute('aria-hidden', 'true');
      if (el.style.cssText) svg.style.cssText = el.style.cssText;
      svg.innerHTML = '<path d="' + waPath + '"/>';
      el.replaceWith(svg);
    });
  }

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
    polyfillInstagramIcons();
    polyfillWhatsAppIcons();
    initInstagramReels();
  } else {
    polyfillInstagramIcons();
    polyfillWhatsAppIcons();
  }
});

// Lightbox controller
let currentGalleryIndex = 0;
let currentGalleryItems = [];

function openLightbox(imageUrl, title, category) {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalCat = document.getElementById('lightboxCat');

  if (modal && modalImg) {
    modalImg.src = imageUrl;
    if (modalTitle) modalTitle.textContent = title || '';
    if (modalCat) modalCat.textContent = category || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Product Quick Modal Controller
function openProductModal(productId) {
  if (typeof PRODUCTS_DATA === 'undefined') return;
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  if (!modal) {
    // If on a page without in-page modal, redirect to product-detail.html?id=...
    window.location.href = `product-detail.html?id=${encodeURIComponent(product.id)}`;
    return;
  }

  // Populate modal fields
  const imgEl = modal.querySelector('.modal-product-img');
  const titleEl = modal.querySelector('.modal-product-title');
  const catEl = modal.querySelector('.modal-product-category');
  const descEl = modal.querySelector('.modal-product-desc');
  const listEl = modal.querySelector('.modal-product-customizations');
  const waBtn = modal.querySelector('.modal-product-wa-btn');

  if (imgEl) imgEl.src = product.images[0];
  if (titleEl) titleEl.textContent = product.name;
  if (catEl) catEl.textContent = product.categoryLabel;
  if (descEl) descEl.textContent = product.description;

  if (listEl) {
    listEl.innerHTML = '';
    if (product.customizationOptions && product.customizationOptions.length > 0) {
      product.customizationOptions.forEach(opt => {
        const li = document.createElement('li');
        li.textContent = opt;
        listEl.appendChild(li);
      });
    }
  }

  if (waBtn) {
    const msg = `Hello Bombay Sofa & Furnishing, I am interested in '${product.name}' (Ref: ${product.id}). Please share more details and customisation options.`;
    waBtn.onclick = (e) => {
      e.preventDefault();
      triggerWhatsApp(msg);
    };
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}


/**
 * Instagram Reels Autoplay and Sound Controls
 */
function initInstagramReels() {
  const reelCards = document.querySelectorAll('.reel-card');
  if (!reelCards.length) return;

  const videos = document.querySelectorAll('.reel-video');

  // IntersectionObserver to auto-play when visible, pause when out of view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        const card = video.closest('.reel-card');
        if (entry.isIntersecting) {
          if (!card.classList.contains('manual-paused')) {
            video.play().catch(() => {});
            card.classList.remove('is-paused');
          }
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    videos.forEach(v => observer.observe(v));
  }

  // Card click to pause/play & sound toggle
  reelCards.forEach(card => {
    const video = card.querySelector('.reel-video');
    const soundBtn = card.querySelector('.reel-sound-btn');

    if (video) {
      video.addEventListener('click', (e) => {
        if (e.target.closest('.reel-overlay-top') || e.target.closest('.reel-actions-row')) return;
        if (video.paused) {
          video.play().catch(() => {});
          card.classList.remove('is-paused');
          card.classList.remove('manual-paused');
        } else {
          video.pause();
          card.classList.add('is-paused');
          card.classList.add('manual-paused');
        }
      });
    }

    if (soundBtn && video) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.muted) {
          videos.forEach(otherVid => {
            if (otherVid !== video) {
              otherVid.muted = true;
              const otherBtn = otherVid.closest('.reel-card')?.querySelector('.reel-sound-btn');
              if (otherBtn) {
                otherBtn.innerHTML = '<i data-lucide="volume-x" style="width: 18px; height: 18px;"></i>';
              }
            }
          });
          video.muted = false;
          soundBtn.innerHTML = '<i data-lucide="volume-2" style="width: 18px; height: 18px; color: #E1306C;"></i>';
          soundBtn.setAttribute('aria-label', 'Mute video');
        } else {
          video.muted = true;
          soundBtn.innerHTML = '<i data-lucide="volume-x" style="width: 18px; height: 18px;"></i>';
          soundBtn.setAttribute('aria-label', 'Unmute video');
        }
        if (window.lucide) window.lucide.createIcons();
      });
    }
  });
}
