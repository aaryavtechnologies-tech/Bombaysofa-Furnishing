/**
 * Bombay Sofa & Furnishing - Catalogue Engine
 * Supports filtering by category, search, and seamless WhatsApp enquiry integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('catalogueGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const emptyState = document.getElementById('catalogueEmptyState');
  const activeCountEl = document.getElementById('catalogCount');

  if (!productGrid || typeof PRODUCTS_DATA === 'undefined') return;

  // Determine initial category from URL query param
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'all';

  function renderProducts(category) {
    productGrid.innerHTML = '';
    const filtered = (category === 'all') 
      ? PRODUCTS_DATA 
      : PRODUCTS_DATA.filter(p => p.category === category);

    if (activeCountEl) {
      activeCountEl.textContent = `Showing ${filtered.length} curated design${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    filtered.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      
      const badgeHtml = product.isRealClientPhoto 
        ? `<span class="product-badge product-badge-real">Client Showcase</span>`
        : `<span class="product-badge">Showroom Design</span>`;

      const waMsg = `Hello Bombay Sofa & Furnishing, I am interested in '${product.name}'. Please share more details and customisation options.`;
      const waUrl = getWhatsAppUrl(waMsg);

      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy">
          ${badgeHtml}
        </div>
        <div class="product-body">
          <span class="product-cat-label">${product.categoryLabel}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.shortDescription}</p>
          <div class="product-actions">
            <a href="product-detail.html?id=${encodeURIComponent(product.id)}" class="btn btn-outline btn-sm">
              <span>View Details</span>
            </a>
            <a href="${waUrl}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
              <i data-lucide="message-circle"></i>
              <span>Enquire</span>
            </a>
          </div>
        </div>
      `;

      productGrid.appendChild(card);
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // Set active button style and trigger rendering
  function setCategory(category) {
    activeCategory = category;
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update URL history without reload
    const newUrl = category === 'all' 
      ? window.location.pathname 
      : `${window.location.pathname}?category=${encodeURIComponent(category)}`;
    window.history.replaceState({ category }, '', newUrl);

    renderProducts(category);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      setCategory(category);
    });
  });

  // Initial render
  setCategory(activeCategory);
});

