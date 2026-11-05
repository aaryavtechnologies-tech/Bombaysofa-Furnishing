/**
 * Bombay Sofa & Furnishing - Product Detail Hydration
 */

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'l-shape-terracotta-sofa';

  if (typeof PRODUCTS_DATA === 'undefined') return;

  const product = PRODUCTS_DATA.find(p => p.id === productId || p.slug === productId) || PRODUCTS_DATA[0];

  // Update Page Title & Meta
  document.title = `${product.name} | Bombay Sofa & Furnishing Silvassa`;

  // Hydrate Breadcrumbs
  const breadcrumbEl = document.getElementById('productBreadcrumbCurrent');
  if (breadcrumbEl) breadcrumbEl.textContent = product.name;

  // Hydrate Title & Category
  const titleEl = document.getElementById('productDetailTitle');
  const catEl = document.getElementById('productDetailCategory');
  const descEl = document.getElementById('productDetailDesc');
  const badgeEl = document.getElementById('productDetailBadge');

  if (titleEl) titleEl.textContent = product.name;
  if (catEl) catEl.textContent = product.categoryLabel;
  if (descEl) descEl.textContent = product.description;

  if (badgeEl) {
    badgeEl.textContent = product.isRealClientPhoto ? "Real Client Showcase" : "Showroom Design";
    if (product.isRealClientPhoto) badgeEl.classList.add('product-badge-real');
  }

  // Hydrate Main Image & Gallery Thumbnails
  const mainImg = document.getElementById('productMainImage');
  const thumbWrap = document.getElementById('productThumbnails');

  if (mainImg) {
    mainImg.src = product.images[0];
    mainImg.alt = product.name;
    mainImg.onclick = () => {
      openLightbox(mainImg.src, product.name, product.categoryLabel);
    };
  }

  if (thumbWrap) {
    thumbWrap.innerHTML = '';
    product.images.forEach((imgSrc, idx) => {
      const thumb = document.createElement('button');
      thumb.className = `product-thumb-btn ${idx === 0 ? 'active' : ''}`;
      thumb.setAttribute('aria-label', `View image ${idx + 1}`);
      thumb.innerHTML = `<img src="${imgSrc}" alt="${product.name} thumb ${idx + 1}">`;
      thumb.onclick = () => {
        document.querySelectorAll('.product-thumb-btn').forEach(b => b.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) mainImg.src = imgSrc;
      };
      thumbWrap.appendChild(thumb);
    });
  }

  // Hydrate Customisation Highlights
  const customList = document.getElementById('productCustomizationList');
  if (customList) {
    customList.innerHTML = '';
    if (product.customizationOptions && product.customizationOptions.length > 0) {
      product.customizationOptions.forEach(opt => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'flex-start';
        li.style.gap = '0.75rem';
        li.style.marginBottom = '0.65rem';
        li.innerHTML = `
          <i data-lucide="check" style="stroke: var(--color-bronze); width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;"></i>
          <span style="font-size: 0.9375rem; color: var(--color-charcoal);">${opt}</span>
        `;
        customList.appendChild(li);
      });
    }
  }

  // Hydrate Highlights Tags
  const tagsWrap = document.getElementById('productHighlightsTags');
  if (tagsWrap && product.highlights) {
    tagsWrap.innerHTML = '';
    product.highlights.forEach(h => {
      const span = document.createElement('span');
      span.style.cssText = 'background: var(--color-beige-subtle); color: var(--color-charcoal); font-size: 0.8125rem; font-weight: 600; padding: 5px 12px; border-radius: 4px; border: 1px solid var(--color-grey-light);';
      span.textContent = h;
      tagsWrap.appendChild(span);
    });
  }

  // Configure WhatsApp Buttons
  const detailWaBtn = document.getElementById('productDetailWaBtn');
  const waMsg = `Hello Bombay Sofa & Furnishing, I am interested in '${product.name}' (Product ID: ${product.id}). Please share more details and customisation options.`;
  const waUrl = getWhatsAppUrl(waMsg);

  if (detailWaBtn) {
    detailWaBtn.href = waUrl;
  }

  // Populate Related Products
  const relatedGrid = document.getElementById('relatedProductsGrid');
  if (relatedGrid) {
    relatedGrid.innerHTML = '';
    const related = PRODUCTS_DATA
      .filter(p => p.id !== product.id)
      .slice(0, 3);

    related.forEach(rel => {
      const card = document.createElement('article');
      card.className = 'product-card';
      const relWa = getWhatsAppUrl(`Hello, I am interested in ${rel.name}`);
      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${rel.images[0]}" alt="${rel.name}" class="product-img" loading="lazy">
        </div>
        <div class="product-body">
          <span class="product-cat-label">${rel.categoryLabel}</span>
          <h4 class="product-title" style="font-size: 1.15rem;">${rel.name}</h4>
          <p class="product-desc" style="font-size: 0.875rem;">${rel.shortDescription}</p>
          <div class="product-actions">
            <a href="product-detail.html?id=${encodeURIComponent(rel.id)}" class="btn btn-outline btn-sm">View Details</a>
            <a href="${relWa}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
              <i data-lucide="message-circle"></i>
              <span>Enquire</span>
            </a>
          </div>
        </div>
      `;
      relatedGrid.appendChild(card);
    });
  }

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});

