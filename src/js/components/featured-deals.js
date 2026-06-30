// ═══════════════════════════════════════════════════════
// Featured Deals Section
// ═══════════════════════════════════════════════════════

export function initFeaturedDeals() {
  const container = document.getElementById('featured-deals-grid');
  if (!container) return;

  attachDealEventListeners();
}

function attachDealEventListeners() {
  document.querySelectorAll('.deal-bookmark').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('bookmarked');
    });
  });

  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dealId = btn.dataset.dealId;
      console.log(`View details for deal ${dealId}`);
    });
  });

  document.querySelectorAll('.btn-share').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dealId = btn.dataset.dealId;
      if (navigator.share) {
        navigator.share({
          title: 'Check out this deal',
          text: 'Found an amazing deal on All Deals Nepal!',
          url: window.location.href
        });
      } else {
        console.log(`Share deal ${dealId}`);
      }
    });
  });
}
