// ═══════════════════════════════════════════════════════
// Main JS Entry Point
// ═══════════════════════════════════════════════════════

import { initHeader, initMobileMenu, initSearchTags } from './components/header.js';
import { initCategorySlider } from './components/slider.js';
import { initFeaturedDeals } from './components/featured-deals.js';
import { initListingPage } from './components/listing.js';

// Initialize all components
function initApp() {
  initHeader();
  initMobileMenu();
  initSearchTags();
  initFeaturedDeals();
  initCategorySlider();
  initListingPage();
}

// Initialize on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
