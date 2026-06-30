// ═══════════════════════════════════════════════════════
// Featured Deals Section
// ═══════════════════════════════════════════════════════

export function initFeaturedDeals() {
  const container = document.getElementById('featured-deals-grid');
  if (!container) return;

  // Sample featured deals data
  const featuredDeals = [
    {
      id: 1,
      name: "Premium Coffee Package",
      provider: "Brew & Bliss Cafe",
      image: "https://via.placeholder.com/300x200?text=Coffee+Deal",
      location: "Kathmandu, Thamel",
      rating: 4.8,
      reviews: 324,
      trending: true,
      badge: "HOT"
    },
    {
      id: 2,
      name: "Web Development Bundle",
      provider: "Tech Solutions Ltd",
      image: "https://via.placeholder.com/300x200?text=Web+Dev",
      location: "Kathmandu, Patan",
      rating: 4.9,
      reviews: 512,
      trending: true,
      badge: "TRENDING"
    },
    {
      id: 3,
      name: "Fitness Membership Offer",
      provider: "FitZone Gym",
      image: "https://via.placeholder.com/300x200?text=Fitness",
      location: "Lalitpur, Jawalakhel",
      rating: 4.6,
      reviews: 189,
      trending: false,
      badge: "SALE"
    },
    {
      id: 4,
      name: "Interior Design Consultation",
      provider: "Design Minds Studio",
      image: "https://via.placeholder.com/300x200?text=Interior",
      location: "Kathmandu, Bhainsepati",
      rating: 4.7,
      reviews: 156,
      trending: true,
      badge: "FEATURED"
    },
    {
      id: 5,
      name: "Digital Marketing Course",
      provider: "Learn & Grow Academy",
      image: "https://via.placeholder.com/300x200?text=Marketing",
      location: "Kathmandu, Balkumari",
      rating: 4.8,
      reviews: 423,
      trending: false,
      badge: "HOT"
    },
    {
      id: 6,
      name: "Restaurant Grand Opening",
      provider: "Himalayan Flavors",
      image: "https://via.placeholder.com/300x200?text=Restaurant",
      location: "Pokhara, Lakeside",
      rating: 4.5,
      reviews: 267,
      trending: true,
      badge: "NEW"
    },
    {
      id: 7,
      name: "Real Estate Investment",
      provider: "Prime Properties Nepal",
      image: "https://via.placeholder.com/300x200?text=Real+Estate",
      location: "Bhaktapur, Durbar Sq",
      rating: 4.9,
      reviews: 891,
      trending: true,
      badge: "TRENDING"
    },
    {
      id: 8,
      name: "Auto Service Package",
      provider: "AutoCare Pro",
      image: "https://via.placeholder.com/300x200?text=Auto+Service",
      location: "Kathmandu, Baluwatar",
      rating: 4.7,
      reviews: 198,
      trending: false,
      badge: "SALE"
    }
  ];

  // Render featured deals cards
  container.innerHTML = featuredDeals
    .slice(0, 8)
    .map((deal, index) => createDealCard(deal, index))
    .join('');

  // Add event listeners
  attachDealEventListeners();
}

function createDealCard(deal, index) {
  const ratingStars = generateStars(deal.rating);
  const badgeClass = getBadgeClass(deal.badge);

  return `
    <div class="deal-card" style="animation-delay: ${index * 50}ms">
      <!-- Card Image Container -->
      <div class="deal-image-container">
        <img src="${deal.image}" alt="${deal.name}" class="deal-image">
        
        <!-- Badge (top-left) -->
        <span class="deal-badge ${badgeClass}">
          ${deal.badge}
        </span>
        
        <!-- Bookmark Button (top-right) -->
        <button class="deal-bookmark" data-deal-id="${deal.id}" aria-label="Bookmark deal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
        
        <!-- Trending Badge (if applicable) -->
        ${deal.trending ? '<div class="deal-trending">🔥 Trending</div>' : ''}
      </div>

      <!-- Card Content -->
      <div class="deal-content">
        <h3 class="deal-name">${deal.name}</h3>
        <p class="deal-provider">${deal.provider}</p>
        
        <!-- Location -->
        <div class="deal-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${deal.location}</span>
        </div>

        <!-- Reviews -->
        <div class="deal-reviews">
          <div class="deal-stars">${ratingStars}</div>
          <span class="deal-rating">${deal.rating}</span>
          <span class="deal-review-count">(${deal.reviews})</span>
        </div>

        <!-- Actions -->
        <div class="deal-actions">
          <button class="btn btn--primary btn-view-details" data-deal-id="${deal.id}">
            View Details
          </button>
          <button class="btn-share" data-deal-id="${deal.id}" aria-label="Share deal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    '★'.repeat(full) +
    (half ? '½' : '') +
    '☆'.repeat(5 - full - (half ? 1 : 0))
  );
}

function getBadgeClass(badge) {
  const badgeMap = {
    'HOT': 'badge-hot',
    'TRENDING': 'badge-trending',
    'SALE': 'badge-sale',
    'FEATURED': 'badge-featured',
    'NEW': 'badge-new'
  };
  return badgeMap[badge] || 'badge-default';
}

function attachDealEventListeners() {
  // Bookmark button
  document.querySelectorAll('.deal-bookmark').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('bookmarked');
    });
  });

  // View Details button
  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dealId = btn.dataset.dealId;
      console.log(`View details for deal ${dealId}`);
      // Navigate to deal details or show modal
    });
  });

  // Share button
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
