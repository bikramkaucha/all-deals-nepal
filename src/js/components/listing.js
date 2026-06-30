
// Only initialize listing features if on the listing page
export function initListingPage() {
  const listingPage = document.querySelector(".listing-page");
  if (!listingPage) return;
 /* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
    const CATEGORIES = [
      { id: "tech", name: "Technology & IT", count: 124 },
      { id: "finance", name: "Finance & Banking", count: 83 },
      { id: "health", name: "Healthcare & Medical", count: 62 },
      { id: "edu", name: "Education & Training", count: 97 },
      { id: "retail", name: "Retail & Shopping", count: 210 },
      { id: "const", name: "Construction", count: 74 },
      { id: "food", name: "Food & Dining", count: 188 },
      { id: "travel", name: "Travel & Tourism", count: 56 },
      { id: "mfg", name: "Manufacturing", count: 48 },
      { id: "auto", name: "Automotive", count: 39 },
      { id: "media", name: "Media & Advertising", count: 31 },
      { id: "ngo", name: "NGO & Non-Profit", count: 27 },
      { id: "legal", name: "Legal & Consulting", count: 44 },
      { id: "agri", name: "Agriculture", count: 52 },
      { id: "energy", name: "Energy & Utilities", count: 19 },
    ];

    const CITIES = [
      "Banepa",
      "Bhaktapur",
      "Bharatpur",
      "Biratnagar",
      "Birgunj",
      "Butwal",
      "Damak",
      "Dharan",
      "Dhangadhi",
      "Gorkha",
      "Hetauda",
      "Itahari",
      "Janakpur",
      "Kathmandu",
      "Kirtipur",
      "Lalitpur",
      "Lekhnath",
      "Nepalgunj",
      "Pokhara",
      "Rajbiraj",
      "Siddharthanagar",
      "Sundhara",
      "Tansen",
      "Tulsipur",
      "Waling",
    ];

    const DISTRICTS = [
      "Achham",
      "Arghakhanchi",
      "Baglung",
      "Baitadi",
      "Bajhang",
      "Bajura",
      "Banke",
      "Bara",
      "Bardiya",
      "Bhaktapur",
      "Bhojpur",
      "Chitwan",
      "Dadeldhura",
      "Dailekh",
      "Dang",
      "Darchula",
      "Dhading",
      "Dhankuta",
      "Dhanusa",
      "Dholkha",
      "Dolpa",
      "Doti",
      "Gorkha",
      "Gulmi",
      "Humla",
      "Ilam",
      "Jajarkot",
      "Jhapa",
      "Jumla",
      "Kailali",
      "Kalikot",
      "Kanchanpur",
      "Kapilvastu",
      "Kaski",
      "Kathmandu",
      "Kavrepalanchok",
      "Khotang",
      "Lalitpur",
      "Lamjung",
      "Mahottari",
      "Makwanpur",
      "Manang",
      "Morang",
      "Mugu",
      "Mustang",
      "Myagdi",
      "Nawalpur",
      "Nuwakot",
      "Okhaldhunga",
      "Palpa",
      "Panchthar",
      "Parasi",
      "Parbat",
      "Parsa",
      "Pyuthan",
      "Ramechhap",
      "Rasuwa",
      "Rautahat",
      "Rolpa",
      "Rukum (East)",
      "Rukum (West)",
      "Rupandehi",
      "Salyan",
      "Sankhuwasabha",
      "Saptari",
      "Sarlahi",
      "Sindhuli",
      "Sindhupalchok",
      "Siraha",
      "Solukhumbu",
      "Sunsari",
      "Surkhet",
      "Syangja",
      "Tanahun",
      "Taplejung",
      "Terhathum",
      "Udayapur",
    ];

    const COMPANY_DATA = [
      {
        id: 1,
        name: "TechSphere Solutions",
        cat: "tech",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "TS",
        lc: "lg-1",
        badge: "featured",
        rating: 4.9,
        year: 2014,
        desc: "Custom software development, cloud solutions, and digital transformation services for enterprises.",
        tags: ["Software", "Cloud", "ERP"],
      },
      {
        id: 2,
        name: "GoldFinance Group",
        cat: "finance",
        city: "Lalitpur",
        district: "Lalitpur",
        logo: "GF",
        lc: "lg-2",
        badge: "featured",
        rating: 4.8,
        year: 2008,
        desc: "Comprehensive financial services including loans, investment consulting, and wealth management.",
        tags: ["Loans", "Investment", "Banking"],
      },
      {
        id: 3,
        name: "HealthCare Plus",
        cat: "health",
        city: "Pokhara",
        district: "Kaski",
        logo: "HC",
        lc: "lg-3",
        badge: "new",
        rating: 4.6,
        year: 2021,
        desc: "Modern medical facilities with specialist doctors, diagnostics, and telemedicine services.",
        tags: ["Hospital", "Diagnostics", "Tele-med"],
      },
      {
        id: 4,
        name: "EduAcademy Nepal",
        cat: "edu",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "EA",
        lc: "lg-4",
        badge: "featured",
        rating: 4.9,
        year: 2011,
        desc: "Professional certification courses, skill development programs, and vocational training centers.",
        tags: ["Training", "Certification", "Skills"],
      },
      {
        id: 5,
        name: "BuildMasters Co.",
        cat: "const",
        city: "Bhaktapur",
        district: "Bhaktapur",
        logo: "BM",
        lc: "lg-5",
        badge: "new",
        rating: 4.5,
        year: 2019,
        desc: "Residential and commercial construction, interior design, and property development firm.",
        tags: ["Construction", "Interior", "Real Estate"],
      },
      {
        id: 6,
        name: "TrekTours Nepal",
        cat: "travel",
        city: "Pokhara",
        district: "Kaski",
        logo: "TT",
        lc: "lg-6",
        badge: "featured",
        rating: 5.0,
        year: 2007,
        desc: "Award-winning trekking, adventure tours, and customised travel packages across the Himalayas.",
        tags: ["Trekking", "Adventure", "Tours"],
      },
      {
        id: 7,
        name: "MegaMart Retail",
        cat: "retail",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "MR",
        lc: "lg-7",
        badge: "verified",
        rating: 4.4,
        year: 2015,
        desc: "Wide range of consumer goods, electronics, fashion and household products at affordable prices.",
        tags: ["Supermarket", "Electronics", "Fashion"],
      },
      {
        id: 8,
        name: "AutoZone Nepal",
        cat: "auto",
        city: "Lalitpur",
        district: "Lalitpur",
        logo: "AZ",
        lc: "lg-8",
        badge: "verified",
        rating: 4.3,
        year: 2012,
        desc: "Authorised dealer for passenger vehicles, SUVs, spare parts, and service center operations.",
        tags: ["Cars", "Spare Parts", "Service"],
      },
      {
        id: 9,
        name: "ClearSky Media",
        cat: "media",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "CM",
        lc: "lg-1",
        badge: "new",
        rating: 4.2,
        year: 2020,
        desc: "Creative advertising agency offering branding, digital marketing, and media production services.",
        tags: ["Branding", "Digital", "Advertising"],
      },
      {
        id: 10,
        name: "Green Harvest Agro",
        cat: "agri",
        city: "Bharatpur",
        district: "Chitwan",
        logo: "GH",
        lc: "lg-7",
        badge: "verified",
        rating: 4.6,
        year: 2010,
        desc: "Organic farming, agri-products export, and farmer cooperative support programs nationwide.",
        tags: ["Organic", "Export", "Farming"],
      },
      {
        id: 11,
        name: "PowerGrid Energy",
        cat: "energy",
        city: "Birgunj",
        district: "Parsa",
        logo: "PE",
        lc: "lg-5",
        badge: "featured",
        rating: 4.7,
        year: 2009,
        desc: "Renewable energy solutions, solar installations, and power distribution across Nepal.",
        tags: ["Solar", "Renewable", "Power"],
      },
      {
        id: 12,
        name: "LexCorp Legal",
        cat: "legal",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "LC",
        lc: "lg-4",
        badge: "verified",
        rating: 4.8,
        year: 2006,
        desc: "Corporate law, intellectual property, tax consulting, and dispute resolution services.",
        tags: ["Corporate Law", "IP", "Tax"],
      },
      {
        id: 13,
        name: "Savour Kitchen",
        cat: "food",
        city: "Pokhara",
        district: "Kaski",
        logo: "SK",
        lc: "lg-3",
        badge: "featured",
        rating: 4.9,
        year: 2018,
        desc: "Multi-cuisine restaurant chain offering authentic Nepali, Indian, and continental dining experiences.",
        tags: ["Restaurant", "Multi-cuisine", "Catering"],
      },
      {
        id: 14,
        name: "HopeNGO Foundation",
        cat: "ngo",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "HN",
        lc: "lg-6",
        badge: "verified",
        rating: 4.5,
        year: 2013,
        desc: "Non-profit working in education, livelihood, and disaster relief programs across rural Nepal.",
        tags: ["Education", "Relief", "Livelihood"],
      },
      {
        id: 15,
        name: "NepalMfg Industries",
        cat: "mfg",
        city: "Biratnagar",
        district: "Morang",
        logo: "NI",
        lc: "lg-8",
        badge: "verified",
        rating: 4.3,
        year: 2003,
        desc: "Large-scale manufacturing of textiles, garments, and industrial goods with export capability.",
        tags: ["Textiles", "Garments", "Export"],
      },
      {
        id: 16,
        name: "SwiftTech IT",
        cat: "tech",
        city: "Lalitpur",
        district: "Lalitpur",
        logo: "ST",
        lc: "lg-4",
        badge: "new",
        rating: 4.4,
        year: 2022,
        desc: "IT infrastructure, networking, cybersecurity services and managed support for businesses.",
        tags: ["Networking", "Cybersecurity", "IT Support"],
      },
      {
        id: 17,
        name: "Himalayan Finance",
        cat: "finance",
        city: "Pokhara",
        district: "Kaski",
        logo: "HF",
        lc: "lg-2",
        badge: "verified",
        rating: 4.5,
        year: 2016,
        desc: "Microfinance, SME loans, and rural banking services to underserved communities across Nepal.",
        tags: ["Microfinance", "SME", "Rural Banking"],
      },
      {
        id: 18,
        name: "CareHospital Pvt.",
        cat: "health",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "CH",
        lc: "lg-1",
        badge: "featured",
        rating: 4.7,
        year: 2005,
        desc: "200-bed multi-specialty hospital with advanced diagnostic and surgical facilities.",
        tags: ["Hospital", "Surgery", "Diagnostics"],
      },
      {
        id: 19,
        name: "BrightMinds School",
        cat: "edu",
        city: "Bhaktapur",
        district: "Bhaktapur",
        logo: "BS",
        lc: "lg-6",
        badge: "verified",
        rating: 4.6,
        year: 2008,
        desc: "K-12 international curriculum school focused on holistic child development and academic excellence.",
        tags: ["K-12", "International", "Curriculum"],
      },
      {
        id: 20,
        name: "FreshBite Restaurants",
        cat: "food",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "FB",
        lc: "lg-3",
        badge: "new",
        rating: 4.4,
        year: 2021,
        desc: "Fast-casual dining chain with healthy menu options, delivery, and cloud kitchen operations.",
        tags: ["Fast-casual", "Healthy", "Delivery"],
      },
      {
        id: 21,
        name: "VoyageNepal Tours",
        cat: "travel",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "VN",
        lc: "lg-7",
        badge: "verified",
        rating: 4.5,
        year: 2014,
        desc: "Cultural tours, heritage walks, and international travel packages designed for all budgets.",
        tags: ["Cultural", "Heritage", "International"],
      },
      {
        id: 22,
        name: "StyleHub Fashion",
        cat: "retail",
        city: "Pokhara",
        district: "Kaski",
        logo: "SH",
        lc: "lg-8",
        badge: "new",
        rating: 4.2,
        year: 2023,
        desc: "Contemporary fashion boutique offering local and imported apparel, accessories, and footwear.",
        tags: ["Fashion", "Apparel", "Boutique"],
      },
      {
        id: 23,
        name: "MotorWorld Pvt.",
        cat: "auto",
        city: "Biratnagar",
        district: "Morang",
        logo: "MW",
        lc: "lg-5",
        badge: "verified",
        rating: 4.3,
        year: 2011,
        desc: "Motorcycle dealership, repair workshop, and accessories shop serving eastern Nepal.",
        tags: ["Motorcycles", "Repair", "Accessories"],
      },
      {
        id: 24,
        name: "PixelForge Agency",
        cat: "media",
        city: "Lalitpur",
        district: "Lalitpur",
        logo: "PF",
        lc: "lg-2",
        badge: "featured",
        rating: 4.7,
        year: 2017,
        desc: "Full-service digital agency: web design, SEO, social media management, and video production.",
        tags: ["Web Design", "SEO", "Video"],
      },
      {
        id: 25,
        name: "RiceField Agro Pvt.",
        cat: "agri",
        city: "Birgunj",
        district: "Parsa",
        logo: "RA",
        lc: "lg-7",
        badge: "verified",
        rating: 4.4,
        year: 2007,
        desc: "Large-scale paddy cultivation, rice milling, and agricultural input supply to farmers.",
        tags: ["Rice", "Milling", "Input Supply"],
      },
      {
        id: 26,
        name: "SolarSpark Nepal",
        cat: "energy",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "SS",
        lc: "lg-3",
        badge: "new",
        rating: 4.5,
        year: 2019,
        desc: "Affordable solar home systems, commercial installations, and off-grid solutions for rural areas.",
        tags: ["Solar", "Off-grid", "Home Systems"],
      },
      {
        id: 27,
        name: "TrustLex Consultants",
        cat: "legal",
        city: "Pokhara",
        district: "Kaski",
        logo: "TL",
        lc: "lg-4",
        badge: "verified",
        rating: 4.4,
        year: 2015,
        desc: "Legal advisory, business registration, compliance, and intellectual property services.",
        tags: ["Advisory", "Compliance", "Registration"],
      },
      {
        id: 28,
        name: "MountainBrew Café",
        cat: "food",
        city: "Bhaktapur",
        district: "Bhaktapur",
        logo: "MB",
        lc: "lg-1",
        badge: "verified",
        rating: 4.8,
        year: 2016,
        desc: "Specialty coffee, artisan pastries, and co-working café spaces in a heritage setting.",
        tags: ["Coffee", "Artisan", "Co-working"],
      },
      {
        id: 29,
        name: "NexaCode Systems",
        cat: "tech",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "NC",
        lc: "lg-6",
        badge: "new",
        rating: 4.3,
        year: 2023,
        desc: "App development, API integration, and AI-powered analytics solutions for startups and enterprises.",
        tags: ["App Dev", "AI", "Analytics"],
      },
      {
        id: 30,
        name: "SafeGuard Insurance",
        cat: "finance",
        city: "Lalitpur",
        district: "Lalitpur",
        logo: "SG",
        lc: "lg-5",
        badge: "featured",
        rating: 4.6,
        year: 2004,
        desc: "Life, health, vehicle, and property insurance with easy claims and nationwide branch network.",
        tags: ["Life Insurance", "Health", "Vehicle"],
      },
      {
        id: 31,
        name: "WellnessFirst Clinic",
        cat: "health",
        city: "Pokhara",
        district: "Kaski",
        logo: "WF",
        lc: "lg-7",
        badge: "new",
        rating: 4.4,
        year: 2020,
        desc: "Wellness centre offering physiotherapy, nutrition counselling, and preventive health programs.",
        tags: ["Physiotherapy", "Nutrition", "Wellness"],
      },
      {
        id: 32,
        name: "CodeCamp Academy",
        cat: "edu",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "CA",
        lc: "lg-3",
        badge: "verified",
        rating: 4.7,
        year: 2018,
        desc: "Coding bootcamps, UI/UX design, data science, and digital marketing courses for youth.",
        tags: ["Coding", "UI/UX", "Data Science"],
      },
      {
        id: 33,
        name: "UrbanNest Builders",
        cat: "const",
        city: "Lalitpur",
        district: "Lalitpur",
        logo: "UB",
        lc: "lg-8",
        badge: "featured",
        rating: 4.6,
        year: 2012,
        desc: "Premium residential and commercial construction projects with modern architecture and quality finishes.",
        tags: ["Residential", "Commercial", "Architecture"],
      },
      {
        id: 34,
        name: "TrailBlazer Adventures",
        cat: "travel",
        city: "Biratnagar",
        district: "Morang",
        logo: "TA",
        lc: "lg-2",
        badge: "new",
        rating: 4.3,
        year: 2022,
        desc: "Eco-tourism, jungle safaris, bird watching, and adventure sports packages in eastern Nepal.",
        tags: ["Eco-tourism", "Safari", "Bird Watching"],
      },
      {
        id: 35,
        name: "DailyMart Superstore",
        cat: "retail",
        city: "Birgunj",
        district: "Parsa",
        logo: "DS",
        lc: "lg-1",
        badge: "verified",
        rating: 4.2,
        year: 2017,
        desc: "One-stop shopping destination for groceries, electronics, clothing, and household essentials.",
        tags: ["Groceries", "Electronics", "Household"],
      },
      {
        id: 36,
        name: "PrideAuto Service",
        cat: "auto",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "PA",
        lc: "lg-6",
        badge: "verified",
        rating: 4.5,
        year: 2009,
        desc: "Authorised multi-brand car service center, genuine spare parts, and body repair shop.",
        tags: ["Service Center", "Spare Parts", "Body Repair"],
      },
      {
        id: 37,
        name: "VisionMedia Nepal",
        cat: "media",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "VM",
        lc: "lg-4",
        badge: "verified",
        rating: 4.4,
        year: 2013,
        desc: "Television production, documentary filmmaking, and news media services for broadcast and digital.",
        tags: ["TV Production", "Documentary", "News"],
      },
      {
        id: 38,
        name: "FarmFresh Cooperative",
        cat: "agri",
        city: "Bharatpur",
        district: "Chitwan",
        logo: "FF",
        lc: "lg-7",
        badge: "new",
        rating: 4.5,
        year: 2019,
        desc: "Farmers cooperative for fresh produce aggregation, cold storage, and direct market linkages.",
        tags: ["Cooperative", "Cold Storage", "Produce"],
      },
      {
        id: 39,
        name: "EcoWatt Energy",
        cat: "energy",
        city: "Pokhara",
        district: "Kaski",
        logo: "EW",
        lc: "lg-3",
        badge: "featured",
        rating: 4.6,
        year: 2015,
        desc: "Hydro-micro energy projects, biogas solutions, and energy auditing for commercial clients.",
        tags: ["Hydro", "Biogas", "Energy Audit"],
      },
      {
        id: 40,
        name: "LawBridge Associates",
        cat: "legal",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "LB",
        lc: "lg-5",
        badge: "verified",
        rating: 4.7,
        year: 2010,
        desc: "Employment law, civil litigation, and corporate governance advisory for businesses and individuals.",
        tags: ["Employment Law", "Litigation", "Corporate"],
      },
      {
        id: 41,
        name: "CrunchBox Bakery",
        cat: "food",
        city: "Lalitpur",
        district: "Lalitpur",
        logo: "CB",
        lc: "lg-8",
        badge: "new",
        rating: 4.3,
        year: 2022,
        desc: "Artisan breads, custom cakes, and wholesale bakery supplies for hotels and restaurants.",
        tags: ["Bakery", "Custom Cakes", "Wholesale"],
      },
      {
        id: 42,
        name: "DataBridge Solutions",
        cat: "tech",
        city: "Pokhara",
        district: "Kaski",
        logo: "DB",
        lc: "lg-2",
        badge: "featured",
        rating: 4.5,
        year: 2016,
        desc: "Business intelligence, data warehousing, and cloud migration services for growing enterprises.",
        tags: ["BI", "Data Warehouse", "Cloud"],
      },
      {
        id: 43,
        name: "ApexBuild Contractors",
        cat: "const",
        city: "Kathmandu",
        district: "Kathmandu",
        logo: "AB",
        lc: "lg-6",
        badge: "verified",
        rating: 4.4,
        year: 2007,
        desc: "Infrastructure projects, road construction, and government contract work across Nepal.",
        tags: ["Infrastructure", "Roads", "Government"],
      },
      {
        id: 44,
        name: "PeakVenture Travel",
        cat: "travel",
        city: "Pokhara",
        district: "Kaski",
        logo: "PV",
        lc: "lg-1",
        badge: "verified",
        rating: 4.6,
        year: 2010,
        desc: "Luxury trekking expeditions, helicopter tours, and customised Himalayan adventure itineraries.",
        tags: ["Luxury", "Helicopter", "Expedition"],
      },
      {
        id: 45,
        name: "TextilePlus Mfg.",
        cat: "mfg",
        city: "Biratnagar",
        district: "Morang",
        logo: "TP",
        lc: "lg-4",
        badge: "featured",
        rating: 4.3,
        year: 2001,
        desc: "Garment and textile manufacturing with export quality standards and in-house design studio.",
        tags: ["Garments", "Textile", "Export"],
      },
    ];

    /* ══════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════ */
    const PAGE_SIZE = 20;
    let state = {
      selectedCats: new Set(),
      selectedLocType: "city",
      selectedLoc: null,
      alphaFilter: null,
      searchQuery: "",
      sortBy: "featured",
      page: 1,
    };

    /* ══════════════════════════════════════════════════════
   SIDEBAR: CATEGORIES
══════════════════════════════════════════════════════ */
    function buildCategories() {
      const el = document.getElementById("catList");
      if (!el) return;
      el.innerHTML = CATEGORIES.map(
        (c) => `
    <label class="filter-check">
      <input type="checkbox" value="${c.id}" ${state.selectedCats.has(c.id) ? "checked" : ""}>
      <span class="check-box">
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="2,6 5,9 10,3"/>
        </svg>
      </span>
      <span class="check-label">${c.name}</span>
      <span class="check-count">${c.count}</span>
    </label>
  `,
      ).join("");

      el.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        cb.addEventListener("change", () => {
          if (cb.checked) state.selectedCats.add(cb.value);
          else state.selectedCats.delete(cb.value);
          state.page = 1;
          render();
        });
      });
    }

    /* ══════════════════════════════════════════════════════
   SIDEBAR: LOCATION
══════════════════════════════════════════════════════ */
    function getLocItems() {
      return state.selectedLocType === "city" ? CITIES : DISTRICTS;
    }

    function buildAlphaBar() {
      const bar = document.getElementById("alphaBar");
      if (!bar) return;
      const items = getLocItems();
      const letters = [...new Set(items.map((i) => i[0].toUpperCase()))].sort();
      const all = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      bar.innerHTML = all
        .map(
          (l) => `
    <button class="alpha-btn ${!letters.includes(l) ? "disabled" : ""} ${state.alphaFilter === l ? "active" : ""}"
      data-l="${l}">${l}</button>
  `,
        )
        .join("");
      bar.querySelectorAll(".alpha-btn:not(.disabled)").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.alphaFilter =
            state.alphaFilter === btn.dataset.l ? null : btn.dataset.l;
          buildAlphaBar();
          buildLocList();
        });
      });
    }

    function buildLocList() {
      const q = document.getElementById("locSearch").value.toLowerCase();
      let items = getLocItems().filter(
        (i) =>
          (!q || i.toLowerCase().includes(q)) &&
          (!state.alphaFilter || i[0].toUpperCase() === state.alphaFilter),
      );

      // group alphabetically
      const groups = {};
      items.forEach((i) => {
        const k = i[0].toUpperCase();
        if (!groups[k]) groups[k] = [];
        groups[k].push(i);
      });

      const el = document.getElementById("locList");
      if (items.length === 0) {
        el.innerHTML = `<div style="padding:12px 8px; font-size:0.8rem; color:var(--ink-muted); text-align:center;">No locations found</div>`;
        return;
      }
      el.innerHTML = Object.keys(groups)
        .sort()
        .map(
          (letter) => `
    <div class="loc-group-label">${letter}</div>
    ${groups[letter]
      .map(
        (loc) => `
      <label class="filter-check">
        <input type="radio" name="loc" value="${loc}" ${state.selectedLoc === loc ? "checked" : ""}>
        <span class="check-box">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="2,6 5,9 10,3"/>
          </svg>
        </span>
        <span class="check-label">${loc}</span>
      </label>
    `,
      )
      .join("")}
  `,
        )
        .join("");

      el.querySelectorAll('input[type="radio"]').forEach((r) => {
        r.addEventListener("change", () => {
          state.selectedLoc = r.value;
          state.page = 1;
          render();
        });
      });
    }

    /* Tabs */
    const locTabs = document.querySelectorAll(".loc-tab");
    if (locTabs.length > 0) {
      locTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          document
            .querySelectorAll(".loc-tab")
            .forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          state.selectedLocType = tab.dataset.tab;
          state.selectedLoc = null;
          state.alphaFilter = null;
          const locSearch = document.getElementById("locSearch");
          if (locSearch) locSearch.value = "";
          buildAlphaBar();
          buildLocList();
          render();
        });
      });
    }

    const locSearch = document.getElementById("locSearch");
    if (locSearch) {
      locSearch.addEventListener("input", () => {
        state.alphaFilter = null;
        buildAlphaBar();
        buildLocList();
      });
    }

    /* ══════════════════════════════════════════════════════
   ACTIVE FILTER PILLS
══════════════════════════════════════════════════════ */
    function buildActivePills() {
      const wrap = document.getElementById("activeFilters");
      if (!wrap) return;
      const pills = [];

      state.selectedCats.forEach((catId) => {
        const cat = CATEGORIES.find((c) => c.id === catId);
        if (cat)
          pills.push({
            label: cat.name,
            remove: () => {
              state.selectedCats.delete(catId);
            },
          });
      });
      if (state.selectedLoc) {
        pills.push({
          label: state.selectedLoc,
          remove: () => {
            state.selectedLoc = null;
          },
        });
      }

      if (pills.length === 0) {
        wrap.classList.remove("has-items");
        wrap.innerHTML = "";
        return;
      }
      wrap.classList.add("has-items");
      wrap.innerHTML = pills
        .map(
          (p, i) => `
    <span class="filter-pill" data-idx="${i}">
      ${p.label}
      <button>✕</button>
    </span>
  `,
        )
        .join("");

      wrap.querySelectorAll(".filter-pill").forEach((pill, i) => {
        pill.querySelector("button").addEventListener("click", () => {
          pills[i].remove();
          state.page = 1;
          render();
        });
      });

      // update clear all button
      const clearBtn = document.getElementById("btnClearAll");
      if (clearBtn) {
        clearBtn.classList.toggle("visible", pills.length > 0);
      }

      // update filter badge
      const badge = document.getElementById("filterBadge");
      if (badge) {
        badge.textContent = pills.length;
        badge.classList.toggle("has-filters", pills.length > 0);
      }
    }

    const btnClearAll = document.getElementById("btnClearAll");
    if (btnClearAll) {
      btnClearAll.addEventListener("click", () => {
        state.selectedCats.clear();
        state.selectedLoc = null;
        state.alphaFilter = null;
        state.page = 1;
        buildCategories();
        buildAlphaBar();
        buildLocList();
        render();
      });
    }

    /* ══════════════════════════════════════════════════════
   FILTER & SORT DATA
══════════════════════════════════════════════════════ */
    function getFiltered() {
      let data = [...COMPANY_DATA];

      // Category
      if (state.selectedCats.size > 0) {
        data = data.filter((c) => state.selectedCats.has(c.cat));
      }

      // Location
      if (state.selectedLoc) {
        if (state.selectedLocType === "city") {
          data = data.filter((c) => c.city === state.selectedLoc);
        } else {
          data = data.filter((c) => c.district === state.selectedLoc);
        }
      }

      // Search query
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        data = data.filter(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            c.desc.toLowerCase().includes(q) ||
            c.tags.some((t) => t.toLowerCase().includes(q)),
        );
      }

      // Sort
      switch (state.sortBy) {
        case "az":
          data.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "za":
          data.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "rating":
          data.sort((a, b) => b.rating - a.rating);
          break;
        case "newest":
          data.sort((a, b) => b.year - a.year);
          break;
        default: // featured first
          data.sort((a, b) => {
            const order = { featured: 0, verified: 1, new: 2 };
            return (order[a.badge] ?? 3) - (order[b.badge] ?? 3);
          });
      }
      return data;
    }

    /* ══════════════════════════════════════════════════════
   RENDER CARD
══════════════════════════════════════════════════════ */
    function badgeHtml(b) {
      if (b === "featured")
        return `<span class="c-badge badge-f">⭐ Featured</span>`;
      if (b === "new") return `<span class="c-badge badge-n">✦ New</span>`;
      if (b === "verified")
        return `<span class="c-badge badge-v">✔ Verified</span>`;
      return "";
    }

    function starsHtml(r) {
      const full = Math.floor(r);
      const half = r % 1 >= 0.5;
      return (
        "★".repeat(full) +
        (half ? "½" : "") +
        "☆".repeat(5 - full - (half ? 1 : 0))
      );
    }

    function cardHtml(c, delay = 0) {
      const cat = CATEGORIES.find((x) => x.id === c.cat);
      return `
  <div class="company-card" style="animation-delay:${delay}ms">
    <div class="card-header">
      <div class="c-logo ${c.lc}">${c.logo}</div>
      <div class="card-meta-top">
        <div class="c-name">${c.name}</div>
        <div class="c-cat">${cat ? cat.name : ""}</div>
      </div>
      ${badgeHtml(c.badge)}
    </div>
    <p class="c-desc">${c.desc}</p>
    <div class="c-tags">${c.tags.map((t) => `<span class="c-tag">${t}</span>`).join("")}</div>
    <div class="c-footer">
      <div class="c-info">
        <div class="c-info-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${c.city}
        </div>
        <div class="c-info-item c-rating">
          <span class="stars">${starsHtml(c.rating)}</span>
          <span class="rating-val">${c.rating}</span>
        </div>
        <div class="c-info-item">
          Est. ${c.year}
        </div>
      </div>
      <a href="#" class="btn-view-profile">
        View Profile
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </a>
    </div>
  </div>`;
    }

    /* ══════════════════════════════════════════════════════
   MAIN RENDER
══════════════════════════════════════════════════════ */
    function render() {
      const filtered = getFiltered();
      const total = filtered.length;
      const showing = Math.min(state.page * PAGE_SIZE, total);
      const slice = filtered.slice(0, showing);

      // Results count
      const resultsCount = document.getElementById("resultsCount");
      if (resultsCount) {
        resultsCount.innerHTML = `Showing <strong>${showing}</strong> of <strong>${total}</strong> companies`;
      }

      // Grid
      const grid = document.getElementById("companyGrid");
      if (grid) {
        if (slice.length === 0) {
          grid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>No companies found</h3>
          <p>Try adjusting your filters or search term.</p>
        </div>`;
        } else {
          grid.innerHTML = slice
            .map((c, i) => cardHtml(c, (i % PAGE_SIZE) * 30))
            .join("");
        }
      }

      // Load More
      const lmWrap = document.getElementById("loadMoreWrap");
      const loadInfo = document.getElementById("loadInfo");
      const btnLoadMore = document.getElementById("btnLoadMore");
      const remaining = total - showing;
      if (lmWrap) {
        if (remaining > 0) {
          lmWrap.style.display = "block";
          if (loadInfo) {
            loadInfo.textContent = `${remaining} more compan${remaining === 1 ? "y" : "ies"} not yet loaded`;
          }
          if (btnLoadMore) btnLoadMore.classList.remove("loading");
        } else {
          lmWrap.style.display = "none";
        }
      }

      // Pills & sidebar UI
      buildActivePills();
      buildCategories(); // re-sync checkboxes
      buildAlphaBar();
      buildLocList();
    }

    /* ══════════════════════════════════════════════════════
   LOAD MORE
══════════════════════════════════════════════════════ */
    document
      .getElementById("btnLoadMore")
      .addEventListener("click", function () {
        this.classList.add("loading");
        this.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation:spin 0.8s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Loading…`;

        setTimeout(() => {
          state.page++;
          render();
          this.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg> Load More Companies`;
          this.classList.remove("loading");
        }, 600);
      });

    /* ══════════════════════════════════════════════════════
   SEARCH & SORT
══════════════════════════════════════════════════════ */
    const searchBtn = document.getElementById("searchBtn");
    const mainSearch = document.getElementById("mainSearch");
    if (searchBtn && mainSearch) {
      searchBtn.addEventListener("click", () => {
        state.searchQuery = mainSearch.value.trim();
        state.page = 1;
        render();
      });
    }
    if (mainSearch) {
      mainSearch.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          state.searchQuery = e.target.value.trim();
          state.page = 1;
          render();
        }
      });
    }
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        state.sortBy = this.value;
        state.page = 1;
        render();
      });
    }

    /* ══════════════════════════════════════════════════════
   MOBILE SIDEBAR TOGGLE
══════════════════════════════════════════════ */
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const filterToggle = document.getElementById("filterToggle");

    if (sidebar && overlay && filterToggle) {
      filterToggle.addEventListener("click", () => {
        sidebar.classList.add("mobile-open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
      });
      overlay.addEventListener("click", () => {
        sidebar.classList.remove("mobile-open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
      });
    }

    /* Spin animation for loader */
    const spinStyle = document.createElement("style");
    spinStyle.textContent =
      "@keyframes spin { to { transform: rotate(360deg); } }";
    document.head.appendChild(spinStyle);

    /* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
    buildCategories();
    buildAlphaBar();
    buildLocList();
    render();
  }

