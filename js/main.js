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

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  initInstagramReels();
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
