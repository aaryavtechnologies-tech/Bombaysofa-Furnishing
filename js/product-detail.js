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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="whatsapp-icon" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
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

