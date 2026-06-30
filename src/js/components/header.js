// ═══════════════════════════════════════════════════════
// Header & Mobile Menu
// ═══════════════════════════════════════════════════════

export function initHeader() {
  // Header scroll effect
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
}

export function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');

  if (!hamburger || !mobileMenu || !mobileOverlay) return;

  function toggleMenu(force) {
    const isOpen = force !== undefined ? force : !hamburger.classList.contains('open');
    hamburger.classList.toggle('open', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu());
  mobileOverlay.addEventListener('click', () => toggleMenu(false));

  // Close on nav link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMenu(false));
  });

  // Mobile submenu toggle
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    const trigger = item.querySelector('.mobile-nav-toggle');
    if (!trigger) return;

    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);
    });
  });
}

export function initSearchTags() {
  document.querySelectorAll('.popular-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const searchInput = document.querySelector('.search-field input');
      if (searchInput) {
        searchInput.value = tag.textContent;
      }
    });
  });
}
