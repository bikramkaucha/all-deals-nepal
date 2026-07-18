// ═══════════════════════════════════════════════════════
// Main JS Entry Point
// ═══════════════════════════════════════════════════════

import { initHeader, initMobileMenu, initSearchTags, initUserMenu } from './components/header.js';
import { initCategorySlider } from './components/slider.js';
import { initFeaturedDeals } from './components/featured-deals.js';
import { initListingPage } from './components/listing.js';
import { dealSlider } from './components/detail-page.js'
import { relatedSlider } from './components/related-slider.js'
import { initCompanyBannerSlider } from './components/company-banner.js'

// Initialize all components
function initApp() {
  initHeader();
  initMobileMenu();
  initSearchTags();
  initUserMenu();
  initFeaturedDeals();
  initCategorySlider();
  initListingPage();
  dealSlider();
  relatedSlider();
  initCompanyBannerSlider();
}

// Initialize on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
