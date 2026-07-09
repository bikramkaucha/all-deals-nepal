export function initListingPage() {
  const listingPage = document.querySelector('.listing-page');
  if (!listingPage) return;

  const CATEGORIES = [
    { id: 'tech', name: 'Technology & IT', count: 124 },
    { id: 'finance', name: 'Finance & Banking', count: 83 },
    { id: 'health', name: 'Healthcare & Medical', count: 62 },
    { id: 'edu', name: 'Education & Training', count: 97 },
    { id: 'retail', name: 'Retail & Shopping', count: 210 },
    { id: 'const', name: 'Construction', count: 74 },
    { id: 'food', name: 'Food & Dining', count: 188 },
    { id: 'travel', name: 'Travel & Tourism', count: 56 },
    { id: 'mfg', name: 'Manufacturing', count: 48 },
    { id: 'auto', name: 'Automotive', count: 39 },
    { id: 'media', name: 'Media & Advertising', count: 31 },
    { id: 'ngo', name: 'NGO & Non-Profit', count: 27 },
    { id: 'legal', name: 'Legal & Consulting', count: 44 },
    { id: 'agri', name: 'Agriculture', count: 52 },
    { id: 'energy', name: 'Energy & Utilities', count: 19 },
  ];

  const CITIES = [
    'Banepa', 'Bhaktapur', 'Bharatpur', 'Biratnagar', 'Birgunj', 'Butwal', 'Damak', 'Dharan', 'Dhangadhi',
    'Gorkha', 'Hetauda', 'Itahari', 'Janakpur', 'Kathmandu', 'Kirtipur', 'Lalitpur', 'Lekhnath', 'Nepalgunj',
    'Pokhara', 'Rajbiraj', 'Siddharthanagar', 'Sundhara', 'Tansen', 'Tulsipur', 'Waling'
  ];

  const DISTRICTS = [
    'Achham', 'Arghakhanchi', 'Baglung', 'Baitadi', 'Bajhang', 'Bajura', 'Banke', 'Bara', 'Bardiya', 'Bhaktapur',
    'Bhojpur', 'Chitwan', 'Dadeldhura', 'Dailekh', 'Dang', 'Darchula', 'Dhading', 'Dhankuta', 'Dhanusa', 'Dholkha',
    'Dolpa', 'Doti', 'Gorkha', 'Gulmi', 'Humla', 'Ilam', 'Jajarkot', 'Jhapa', 'Jumla', 'Kailali', 'Kalikot',
    'Kanchanpur', 'Kapilvastu', 'Kaski', 'Kathmandu', 'Kavrepalanchok', 'Khotang', 'Lalitpur', 'Lamjung', 'Mahottari',
    'Makwanpur', 'Manang', 'Morang', 'Mugu', 'Mustang', 'Myagdi', 'Nawalpur', 'Nuwakot', 'Okhaldhunga', 'Palpa',
    'Panchthar', 'Parasi', 'Parbat', 'Parsa', 'Pyuthan', 'Ramechhap', 'Rasuwa', 'Rautahat', 'Rolpa', 'Rukum (East)',
    'Rukum (West)', 'Rupandehi', 'Salyan', 'Sankhuwasabha', 'Saptari', 'Sarlahi', 'Sindhuli', 'Sindhupalchok',
    'Siraha', 'Solukhumbu', 'Sunsari', 'Surkhet', 'Syangja', 'Tanahun', 'Taplejung', 'Terhathum', 'Udayapur'
  ];

  const state = {
    selectedCats: new Set(),
    selectedLocType: 'city',
    selectedLoc: null,
    alphaFilter: null,
    searchQuery: '',
    sortBy: 'featured',
  };

  const companyGrid = document.getElementById('companyGrid');
  const cards = companyGrid ? Array.from(companyGrid.querySelectorAll('.company-card')) : [];
  const resultsCount = document.getElementById('resultsCount');
  const loadMoreBtn = document.getElementById('btnLoadMore');
  const loadInfo = document.getElementById('loadInfo');
  const loadMoreWrap = document.getElementById('loadMoreWrap');

  function getVisibleCards() {
    return cards.filter((card) => !card.classList.contains('is-hidden'));
  }

  function updateResultsCount() {
    if (!resultsCount) return;
    const visibleCount = getVisibleCards().length;
    resultsCount.innerHTML = `Showing <strong>${visibleCount}</strong> companies`;
  }

  function applyFiltersAndSort() {
    const query = state.searchQuery.trim().toLowerCase();

    cards.forEach((card) => {
      const category = card.dataset.category || '';
      const city = (card.dataset.city || '').toLowerCase();
      const district = (card.dataset.district || '').toLowerCase();
      const name = (card.dataset.name || '').toLowerCase();
      const tags = (card.dataset.tags || '').toLowerCase();
      const desc = (card.dataset.desc || '').toLowerCase();
      const badge = card.dataset.badge || '';
      const rating = Number(card.dataset.rating || 0);
      const year = Number(card.dataset.year || 0);

      const catMatch = state.selectedCats.size === 0 || state.selectedCats.has(category);
      const locationMatch = !state.selectedLoc || (state.selectedLocType === 'city' ? city === state.selectedLoc.toLowerCase() : district === state.selectedLoc.toLowerCase());
      const searchMatch = !query || name.includes(query) || tags.includes(query) || desc.includes(query);
      const visible = catMatch && locationMatch && searchMatch;

      card.classList.toggle('is-hidden', !visible);
      card.dataset.visible = visible ? 'true' : 'false';

      if (visible && card.dataset.sortOrder) {
        card.dataset.sortOrder = card.dataset.sortOrder;
      }
    });

    const visibleCards = getVisibleCards();

    if (state.sortBy === 'az') {
      visibleCards.sort((a, b) => (a.dataset.name || '').localeCompare(b.dataset.name || ''));
    } else if (state.sortBy === 'za') {
      visibleCards.sort((a, b) => (b.dataset.name || '').localeCompare(a.dataset.name || ''));
    } else if (state.sortBy === 'rating') {
      visibleCards.sort((a, b) => Number(b.dataset.rating || 0) - Number(a.dataset.rating || 0));
    } else if (state.sortBy === 'newest') {
      visibleCards.sort((a, b) => Number(b.dataset.year || 0) - Number(a.dataset.year || 0));
    } else {
      const priority = { featured: 0, verified: 1, new: 2 };
      visibleCards.sort((a, b) => (priority[a.dataset.badge] ?? 3) - (priority[b.dataset.badge] ?? 3));
    }

    visibleCards.forEach((card) => companyGrid.appendChild(card));

    cards.forEach((card) => {
      if (card.classList.contains('is-hidden')) {
        card.style.display = 'none';
      } else {
        card.style.display = '';
      }
    });

    updateResultsCount();
    if (loadMoreBtn) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'All companies loaded';
      loadMoreBtn.classList.remove('loading');
    }
    if (loadInfo) {
      loadInfo.textContent = '';
    }
    if (loadMoreWrap) {
      loadMoreWrap.style.display = 'block';
    }
  }

  function buildCategories() {
    const el = document.getElementById('catList');
    if (!el) return;

    el.innerHTML = CATEGORIES.map((category) => `
      <label class="filter-check">
        <input type="checkbox" value="${category.id}" ${state.selectedCats.has(category.id) ? 'checked' : ''}>
        <span class="check-box">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="2,6 5,9 10,3"/></svg>
        </span>
        <span class="check-label">${category.name}</span>
        <span class="check-count">${category.count}</span>
      </label>
    `).join('');

    el.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) state.selectedCats.add(checkbox.value);
        else state.selectedCats.delete(checkbox.value);
        applyFiltersAndSort();
      });
    });
  }

  function getLocItems() {
    return state.selectedLocType === 'city' ? CITIES : DISTRICTS;
  }

  function buildAlphaBar() {
    const bar = document.getElementById('alphaBar');
    if (!bar) return;

    const items = getLocItems();
    const letters = [...new Set(items.map((item) => item[0].toUpperCase()))].sort();
    const all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    bar.innerHTML = all.map((letter) => `
      <button class="alpha-btn ${!letters.includes(letter) ? 'disabled' : ''} ${state.alphaFilter === letter ? 'active' : ''}" data-l="${letter}">${letter}</button>
    `).join('');

    bar.querySelectorAll('.alpha-btn:not(.disabled)').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.alphaFilter = state.alphaFilter === btn.dataset.l ? null : btn.dataset.l;
        buildAlphaBar();
        buildLocList();
      });
    });
  }

  function buildLocList() {
    const input = document.getElementById('locSearch');
    const query = (input ? input.value : '').toLowerCase();
    const items = getLocItems().filter((item) => {
      const matchesQuery = !query || item.toLowerCase().includes(query);
      const matchesLetter = !state.alphaFilter || item[0].toUpperCase() === state.alphaFilter;
      return matchesQuery && matchesLetter;
    });

    const groups = {};
    items.forEach((item) => {
      const key = item[0].toUpperCase();
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });

    const el = document.getElementById('locList');
    if (!el) return;

    if (items.length === 0) {
      el.innerHTML = '<div style="padding:12px 8px; font-size:0.8rem; color:var(--ink-muted); text-align:center;">No locations found</div>';
      return;
    }

    el.innerHTML = Object.keys(groups).sort().map((letter) => `
      <div class="loc-group-label">${letter}</div>
      ${groups[letter].map((loc) => `
        <label class="filter-check">
          <input type="radio" name="loc" value="${loc}" ${state.selectedLoc === loc ? 'checked' : ''}>
          <span class="check-box"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="2,6 5,9 10,3"/></svg></span>
          <span class="check-label">${loc}</span>
        </label>
      `).join('')}
    `).join('');

    el.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener('change', () => {
        state.selectedLoc = radio.value;
        applyFiltersAndSort();
      });
    });
  }

  document.querySelectorAll('.loc-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.loc-tab').forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      state.selectedLocType = tab.dataset.tab;
      state.selectedLoc = null;
      state.alphaFilter = null;
      const locSearch = document.getElementById('locSearch');
      if (locSearch) locSearch.value = '';
      buildAlphaBar();
      buildLocList();
      applyFiltersAndSort();
    });
  });

  const locSearch = document.getElementById('locSearch');
  if (locSearch) {
    locSearch.addEventListener('input', () => {
      state.alphaFilter = null;
      buildAlphaBar();
      buildLocList();
    });
  }

  function buildActivePills() {
    const wrap = document.getElementById('activeFilters');
    if (!wrap) return;

    const pills = [];
    state.selectedCats.forEach((catId) => {
      const cat = CATEGORIES.find((item) => item.id === catId);
      if (cat) {
        pills.push({ label: cat.name, remove: () => state.selectedCats.delete(catId) });
      }
    });

    if (state.selectedLoc) {
      pills.push({ label: state.selectedLoc, remove: () => { state.selectedLoc = null; } });
    }

    if (pills.length === 0) {
      wrap.classList.remove('has-items');
      wrap.innerHTML = '';
      return;
    }

    wrap.classList.add('has-items');
    wrap.innerHTML = pills.map((pill, index) => `
      <span class="filter-pill" data-idx="${index}">
        ${pill.label}
        <button type="button">?</button>
      </span>
    `).join('');

    wrap.querySelectorAll('.filter-pill').forEach((pill, index) => {
      pill.querySelector('button').addEventListener('click', () => {
        pills[index].remove();
        applyFiltersAndSort();
      });
    });

    const clearBtn = document.getElementById('btnClearAll');
    if (clearBtn) {
      clearBtn.classList.toggle('visible', pills.length > 0);
    }

    const badge = document.getElementById('filterBadge');
    if (badge) {
      badge.textContent = pills.length;
      badge.classList.toggle('has-filters', pills.length > 0);
    }
  }

  const btnClearAll = document.getElementById('btnClearAll');
  if (btnClearAll) {
    btnClearAll.addEventListener('click', () => {
      state.selectedCats.clear();
      state.selectedLoc = null;
      state.alphaFilter = null;
      buildCategories();
      buildAlphaBar();
      buildLocList();
      applyFiltersAndSort();
    });
  }

  const searchBtn = document.getElementById('searchBtn');
  const mainSearch = document.getElementById('mainSearch');
  if (searchBtn && mainSearch) {
    searchBtn.addEventListener('click', () => {
      state.searchQuery = mainSearch.value.trim();
      applyFiltersAndSort();
    });
  }

  if (mainSearch) {
    mainSearch.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        state.searchQuery = event.target.value.trim();
        applyFiltersAndSort();
      }
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      state.sortBy = this.value;
      applyFiltersAndSort();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      cards.forEach((card) => card.classList.remove('is-hidden'));
      updateResultsCount();
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'All companies loaded';
      if (loadInfo) loadInfo.textContent = 'All companies are already loaded.';
    });
  }

  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const filterToggle = document.getElementById('filterToggle');
  const closeBtn = document.getElementById('sidebarClose');

  function toggleSidebar(isOpen) {
    if (!sidebar || !overlay || !filterToggle) return;
    sidebar.classList.toggle('mobile-open', isOpen);
    overlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    filterToggle.setAttribute('aria-expanded', String(isOpen));
  }

  if (sidebar && overlay && filterToggle) {
    filterToggle.addEventListener('click', () => toggleSidebar(true));
    overlay.addEventListener('click', () => toggleSidebar(false));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleSidebar(false));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
        toggleSidebar(false);
      }
    });
  }

  cards.forEach((card) => card.classList.remove('is-hidden'));
  buildCategories();
  buildAlphaBar();
  buildLocList();
  applyFiltersAndSort();
  buildActivePills();
}