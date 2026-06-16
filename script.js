const cities = ["San Francisco", "Los Angeles", "New York", "Chicago", "Austin"];
const styles = ["Modern luxe", "Garden romance", "Traditional Indian", "Rustic outdoor", "Minimalist city"];
const coreCategories = ["Venue", "Catering", "Decor", "Photography", "Attire", "Rentals", "Beauty"];

const vendors = [
  {
    id: "venue-1",
    name: "Glasshouse at Laurel Pier",
    category: "Venue",
    city: "San Francisco",
    price: 22000,
    capacity: 210,
    rating: 4.9,
    style: ["Modern luxe", "Minimalist city"],
    tags: ["waterfront", "indoor-outdoor", "late night"],
    description: "A bright waterfront venue with skyline views, flexible ceremony layouts, and premium vendor access.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-10-17", "2026-11-07"],
    worksWith: ["cater-1", "decor-1", "photo-1"],
    package: "Venue rental, suites, tables, chairs, floor plan, day-of site manager"
  },
  {
    id: "venue-2",
    name: "Marigold Palace Gardens",
    category: "Venue",
    city: "Los Angeles",
    price: 18500,
    capacity: 320,
    rating: 4.8,
    style: ["Traditional Indian", "Garden romance"],
    tags: ["baraat ready", "outdoor", "large capacity"],
    description: "A garden estate built for multi-event weddings, outdoor ceremonies, baraat staging, and reception tents.",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-10-24", "2026-12-05"],
    worksWith: ["cater-2", "decor-2", "attire-2"],
    package: "Garden ceremony, reception lawn, valet zone, changing suites, tent support"
  },
  {
    id: "cater-1",
    name: "Saffron & Sage Catering",
    category: "Catering",
    city: "San Francisco",
    price: 16500,
    capacity: 240,
    rating: 4.9,
    style: ["Modern luxe", "Traditional Indian"],
    tags: ["halal", "vegetarian", "tasting included"],
    description: "Custom menus across South Asian, Mediterranean, and California seasonal service styles.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-11-07"],
    worksWith: ["venue-1", "decor-1", "rental-1"],
    package: "Cocktail hour, dinner, dessert station, staffing, tasting"
  },
  {
    id: "cater-2",
    name: "Lotus Feast Collective",
    category: "Catering",
    city: "Los Angeles",
    price: 21000,
    capacity: 450,
    rating: 4.7,
    style: ["Traditional Indian", "Garden romance"],
    tags: ["multi-day", "live stations", "vegan"],
    description: "High-volume wedding catering with live dosa, chaat, dessert, and late-night snack stations.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-10-24"],
    worksWith: ["venue-2", "decor-2", "rental-2"],
    package: "Two meal services, live stations, service staff, tasting"
  },
  {
    id: "decor-1",
    name: "Bloom Theory Studio",
    category: "Decor",
    city: "San Francisco",
    price: 9500,
    capacity: 260,
    rating: 4.8,
    style: ["Modern luxe", "Garden romance"],
    tags: ["floral", "tablescape", "ceremony arch"],
    description: "Floral and tablescape design with sculptural installations, soft linens, and candle styling.",
    image: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1482575832494-771f74bf6857?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-11-07", "2026-12-05"],
    worksWith: ["venue-1", "cater-1", "rental-1"],
    package: "Ceremony install, reception florals, tablescape, strike team"
  },
  {
    id: "decor-2",
    name: "Mandap Maison",
    category: "Decor",
    city: "Los Angeles",
    price: 14000,
    capacity: 500,
    rating: 4.9,
    style: ["Traditional Indian", "Modern luxe"],
    tags: ["mandap", "sangeet", "reception stage"],
    description: "Full-service South Asian decor for mandap, sangeet stages, entrances, and reception room transformations.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-10-24"],
    worksWith: ["venue-2", "cater-2", "photo-2"],
    package: "Mandap, stage design, floral accents, lighting coordination"
  },
  {
    id: "attire-1",
    name: "Aster Bridal Atelier",
    category: "Attire",
    city: "New York",
    price: 7200,
    capacity: 40,
    rating: 4.6,
    style: ["Modern luxe", "Minimalist city"],
    tags: ["bridal", "alterations", "custom veil"],
    description: "Designer bridal attire, tailoring, accessories, and final fittings for clean modern silhouettes.",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-11-07", "2026-12-05"],
    worksWith: ["photo-1", "beauty-1"],
    package: "Consultation, gown, veil, two fitting appointments"
  },
  {
    id: "attire-2",
    name: "Zari House",
    category: "Attire",
    city: "Los Angeles",
    price: 8600,
    capacity: 60,
    rating: 4.8,
    style: ["Traditional Indian"],
    tags: ["lehenga", "sherwani", "family styling"],
    description: "Curated lehenga, sherwani, jewelry, and family styling for multi-event wedding wardrobes.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-10-24", "2026-11-07"],
    worksWith: ["venue-2", "photo-2", "beauty-1"],
    package: "Couple attire, jewelry consult, family styling session"
  },
  {
    id: "rental-1",
    name: "Tablecraft Rentals",
    category: "Rentals",
    city: "San Francisco",
    price: 6800,
    capacity: 300,
    rating: 4.7,
    style: ["Modern luxe", "Garden romance", "Minimalist city"],
    tags: ["chairs", "linens", "tabletop"],
    description: "Modern rental inventory for chairs, linens, bars, lounge furniture, tabletop, and floor plans.",
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-10-17", "2026-11-07"],
    worksWith: ["venue-1", "decor-1", "cater-1"],
    package: "Tables, chairs, linens, bar, delivery and pickup"
  },
  {
    id: "rental-2",
    name: "Canopy & Chrome Events",
    category: "Rentals",
    city: "Austin",
    price: 12000,
    capacity: 420,
    rating: 4.6,
    style: ["Rustic outdoor", "Garden romance"],
    tags: ["tenting", "lighting", "climate control"],
    description: "Tent, lighting, staging, lounge, power, and climate rentals for outdoor weddings.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-10-24"],
    worksWith: ["venue-2", "decor-2"],
    package: "Clear tent, lighting, lounge pieces, power plan"
  },
  {
    id: "photo-1",
    name: "Frame & Vow",
    category: "Photography",
    city: "San Francisco",
    price: 7800,
    capacity: 250,
    rating: 4.9,
    style: ["Modern luxe", "Minimalist city", "Garden romance"],
    tags: ["editorial", "film look", "engagement"],
    description: "Editorial wedding photography with natural portraits, reception coverage, and album design.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-11-07"],
    worksWith: ["venue-1", "attire-1", "decor-1"],
    package: "Ten hours, second photographer, engagement session, album credit"
  },
  {
    id: "photo-2",
    name: "Sutra Films",
    category: "Photography",
    city: "Los Angeles",
    price: 11500,
    capacity: 500,
    rating: 4.8,
    style: ["Traditional Indian", "Modern luxe"],
    tags: ["photo", "video", "multi-day"],
    description: "Photo and cinema team specializing in multi-day South Asian weddings and family coverage.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-10-24"],
    worksWith: ["venue-2", "decor-2", "attire-2"],
    package: "Two-day photo, cinema highlight, drone, same-week teaser"
  },
  {
    id: "beauty-1",
    name: "Velvet Room Beauty",
    category: "Beauty",
    city: "Chicago",
    price: 4200,
    capacity: 24,
    rating: 4.8,
    style: ["Modern luxe", "Traditional Indian", "Garden romance"],
    tags: ["makeup", "hair", "touch-up team"],
    description: "Hair and makeup for bride, family, and wedding party with on-site touch-up coverage.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=80"
    ],
    dates: ["2026-10-10", "2026-11-07", "2026-12-05"],
    worksWith: ["attire-1", "attire-2", "photo-1"],
    package: "Bride hair and makeup, trial, six attendants, touch-up kit"
  }
];

const defaultProfile = {
  city: "San Francisco",
  date: "2026-10-10",
  guests: 160,
  budget: 65000,
  style: "Modern luxe",
  shortlist: []
};

const state = {
  ...defaultProfile,
  ...JSON.parse(localStorage.getItem("lkyu-profile") || "{}"),
  category: "all",
  filterCity: "all",
  maxPrice: 50000,
  search: ""
};

const page = document.body.dataset.page;

function saveState() {
  localStorage.setItem("lkyu-profile", JSON.stringify({
    city: state.city,
    date: state.date,
    guests: state.guests,
    budget: state.budget,
    style: state.style,
    shortlist: state.shortlist
  }));
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function vendorById(id) {
  return vendors.find((vendor) => vendor.id === id);
}

function optionList(values, selected) {
  return values.map((value) => `<option value="${value}" ${value === selected ? "selected" : ""}>${value}</option>`).join("");
}

function scoreVendor(vendor) {
  let score = 48;
  if (vendor.city === state.city) score += 13;
  if (vendor.style.includes(state.style)) score += 16;
  if (vendor.capacity >= state.guests) score += 12;
  if (vendor.dates.includes(state.date)) score += 9;
  if (vendor.price <= state.maxPrice) score += 4;
  if (vendor.price <= state.budget * 0.36 || vendor.category !== "Venue") score += 3;
  return Math.min(score, 99);
}

function rankedVendors() {
  const query = state.search.trim().toLowerCase();
  return vendors
    .filter((vendor) => state.category === "all" || vendor.category === state.category)
    .filter((vendor) => state.filterCity === "all" || vendor.city === state.filterCity)
    .filter((vendor) => vendor.price <= state.maxPrice)
    .filter((vendor) => !query || [
      vendor.name,
      vendor.category,
      vendor.city,
      vendor.description,
      vendor.tags.join(" "),
      vendor.style.join(" ")
    ].join(" ").toLowerCase().includes(query))
    .sort((a, b) => scoreVendor(b) - scoreVendor(a));
}

function draftMessage(vendor) {
  return `Hello ${vendor.name} team,

We are planning a ${state.style.toLowerCase()} wedding in ${state.city} on ${state.date} for about ${state.guests} guests. Your ${vendor.category.toLowerCase()} package looks like a strong fit, especially the ${vendor.tags.slice(0, 2).join(" and ")} options.

Could you please share availability, an estimated quote near ${money(vendor.price)}, package details, and the next step for a consultation?

Thank you.`;
}

function toggleShortlist(id) {
  state.shortlist = state.shortlist.includes(id)
    ? state.shortlist.filter((item) => item !== id)
    : [...state.shortlist, id];
  saveState();
  renderCurrentPage();
}

function bestForCategory(category) {
  return vendors
    .filter((vendor) => vendor.category === category)
    .sort((a, b) => scoreVendor(b) - scoreVendor(a))[0];
}

function buildSmartPackage() {
  const picks = ["Venue", "Catering", "Decor", "Photography", "Rentals"].map(bestForCategory).filter(Boolean);
  state.shortlist = [...new Set([...state.shortlist, ...picks.map((vendor) => vendor.id)])];
  saveState();
  renderCurrentPage();
  return picks;
}

function setupChatWidget() {
  const mount = document.querySelector("#aiChatMount");
  if (!mount || mount.dataset.ready) return;
  mount.dataset.ready = "true";
  mount.innerHTML = `
    <section class="chat-widget" id="chatWidget" aria-label="AI wedding planner chat">
      <div class="chat-widget-header">
        <div>
          <strong>AI Wedding Planner</strong>
          <p>Vendor matches, packages, drafts, and budget guidance</p>
        </div>
        <button class="chat-close" type="button" aria-label="Close AI chat">×</button>
      </div>
      <div class="chat-log" id="chatLog" aria-live="polite"></div>
      <form class="chat-form" id="chatForm">
        <input id="chatInput" autocomplete="off" placeholder="Ask for venues, packages, draft messages...">
        <button class="primary-button" type="submit">Send</button>
      </form>
      <div class="quick-prompts">
        <button type="button" data-prompt="Build a full vendor package under my budget.">Package</button>
        <button type="button" data-prompt="Find romantic garden vendors for 160 guests.">Garden</button>
        <button type="button" data-prompt="Draft a message to the best venue.">Draft</button>
      </div>
    </section>
    <button class="chat-launcher" type="button" id="chatLauncher" aria-label="Open AI wedding planner">
      <span class="chat-dot"></span>
      AI Planner
    </button>
  `;

  const widget = document.querySelector("#chatWidget");
  const launcher = document.querySelector("#chatLauncher");
  launcher.addEventListener("click", () => widget.classList.toggle("open"));
  document.querySelector(".chat-close").addEventListener("click", () => widget.classList.remove("open"));
  document.querySelectorAll("[data-open-chat]").forEach((button) => {
    button.addEventListener("click", () => widget.classList.add("open"));
  });
}

function vendorCard(vendor, compact = false) {
  const saved = state.shortlist.includes(vendor.id);
  return `
    <article class="${compact ? "recommendation-card" : "vendor-card"}">
      <img src="${vendor.image}" alt="${vendor.name} wedding work">
      <div class="card-body">
        <div class="card-kicker">
          <span>${vendor.category}</span>
          <strong class="match-score">${scoreVendor(vendor)}% match</strong>
        </div>
        <h3>${vendor.name}</h3>
        <p>${vendor.description}</p>
        <div class="chip-row">
          <span class="pill">${vendor.city}</span>
          <span class="pill">${vendor.capacity} guests</span>
          <span class="pill">${vendor.rating} rating</span>
        </div>
        <div class="price-line">
          <strong>${money(vendor.price)}</strong>
          <span>${vendor.tags.slice(0, 2).join(" / ")}</span>
        </div>
        <a class="primary-button" href="vendor.html?id=${vendor.id}">View profile</a>
        <button class="ghost-button" type="button" data-shortlist="${vendor.id}">${saved ? "Remove shortlist" : "Shortlist"}</button>
      </div>
    </article>
  `;
}

function attachShortlistButtons(root = document) {
  root.querySelectorAll("[data-shortlist]").forEach((button) => {
    button.addEventListener("click", () => toggleShortlist(button.dataset.shortlist));
  });
}

function selectedVendors() {
  return state.shortlist.map(vendorById).filter(Boolean);
}

function renderBudgetMeter() {
  const total = selectedVendors().reduce((sum, vendor) => sum + vendor.price, 0);
  const remaining = state.budget - total;
  const percent = Math.min((total / state.budget) * 100, 100);
  const used = document.querySelector("#budgetUsed");
  const left = document.querySelector("#budgetRemaining");
  const bar = document.querySelector("#budgetBar");
  if (used) used.textContent = `${money(total)} selected`;
  if (left) {
    left.textContent = remaining >= 0 ? `${money(remaining)} remaining` : `${money(Math.abs(remaining))} over budget`;
    left.style.color = remaining >= 0 ? "var(--sage)" : "var(--rose)";
  }
  if (bar) bar.style.width = `${percent}%`;
}

function renderTopRecommendations() {
  const target = document.querySelector("#topRecommendations");
  if (!target) return;
  const picks = rankedVendors().slice(0, 3);
  target.innerHTML = picks.map((vendor) => vendorCard(vendor, true)).join("");
  const match = document.querySelector("#heroMatch");
  if (match && picks[0]) match.textContent = `${scoreVendor(picks[0])}%`;
  attachShortlistButtons(target);
}

function setupProfileForm() {
  const form = document.querySelector("#profileForm");
  if (!form) return;
  const cityInput = document.querySelector("#cityInput");
  const styleInput = document.querySelector("#styleInput");
  cityInput.innerHTML = optionList(cities, state.city);
  styleInput.innerHTML = optionList(styles, state.style);
  document.querySelector("#dateInput").value = state.date;
  document.querySelector("#guestInput").value = state.guests;
  document.querySelector("#budgetInput").value = state.budget;

  const quiz = document.querySelector("#quizButtons");
  quiz.innerHTML = styles.map((style) => `<button class="chip-button ${style === state.style ? "active" : ""}" type="button" data-style="${style}">${style}</button>`).join("");

  if (!quiz.dataset.ready) {
    quiz.dataset.ready = "true";
    quiz.addEventListener("click", (event) => {
      const button = event.target.closest("[data-style]");
      if (!button) return;
      state.style = button.dataset.style;
      styleInput.value = state.style;
      saveState();
      renderCurrentPage();
    });
  }

  if (!form.dataset.ready) {
    form.dataset.ready = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      state.city = cityInput.value;
      state.date = document.querySelector("#dateInput").value;
      state.guests = Number(document.querySelector("#guestInput").value);
      state.budget = Number(document.querySelector("#budgetInput").value);
      state.style = styleInput.value;
      saveState();
      renderCurrentPage();
    });
  }
}

function addMessage(type, text) {
  const log = document.querySelector("#chatLog");
  if (!log) return;
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;
  log.append(message);
  log.scrollTop = log.scrollHeight;
}

function parseChat(text) {
  const lower = text.toLowerCase();
  const city = cities.find((item) => lower.includes(item.toLowerCase()));
  const style = styles.find((item) => lower.includes(item.toLowerCase()) || lower.includes(item.toLowerCase().split(" ")[0]));
  const category = coreCategories.find((item) => lower.includes(item.toLowerCase()));
  const guestMatch = lower.match(/(\d{2,3})\s*(guests|people|person|pax)/);
  const budgetMatch = lower.match(/\$?\s?(\d{2,3})(k|,000|000)?/);
  if (city) state.city = city;
  if (style) state.style = style;
  if (category) state.category = category;
  if (guestMatch) state.guests = Number(guestMatch[1]);
  if (budgetMatch && (lower.includes("budget") || lower.includes("under") || lower.includes("package"))) {
    const raw = Number(budgetMatch[1]);
    state.budget = budgetMatch[2] === "k" || raw < 1000 ? raw * 1000 : raw;
  }
  saveState();
}

function setupChat() {
  const form = document.querySelector("#chatForm");
  if (!form || form.dataset.ready) return;
  form.dataset.ready = "true";
  addMessage("ai", "Hi, I am your AI wedding planner. Tell me the city, guest count, budget, style, or vendor category and I will shape the plan.");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#chatInput");
    const text = input.value.trim();
    if (!text) return;
    addMessage("user", text);
    input.value = "";
    parseChat(text);
    const lower = text.toLowerCase();
    if (lower.includes("package") || lower.includes("build")) {
      const picks = buildSmartPackage();
      const total = picks.reduce((sum, vendor) => sum + vendor.price, 0);
      addMessage("ai", `I added a polished starter package: ${picks.map((vendor) => vendor.name).join(", ")}. Estimated package total is ${money(total)}.`);
      return;
    }
    if (lower.includes("draft") || lower.includes("message")) {
      const vendor = rankedVendors()[0];
      addMessage("ai", `Best vendor to message first is ${vendor.name}. Open their profile and you will see an editable inquiry already drafted with your date, guest count, and style.`);
      return;
    }
    const picks = rankedVendors().slice(0, 3);
    addMessage("ai", `Top matches now: ${picks.map((vendor) => `${vendor.name} (${vendor.category}, ${scoreVendor(vendor)}%)`).join("; ")}.`);
    renderCurrentPage();
  });

  document.querySelectorAll("[data-prompt]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("#chatInput").value = button.dataset.prompt;
      form.requestSubmit();
    });
  });
}

function renderVendorsPage() {
  const category = document.querySelector("#categoryFilter");
  const city = document.querySelector("#cityFilter");
  if (category && !category.dataset.ready) {
    category.innerHTML = `<option value="all">All vendors</option>${optionList([...new Set(vendors.map((vendor) => vendor.category))].sort(), state.category)}`;
    city.innerHTML = `<option value="all">All cities</option>${optionList(cities, state.filterCity)}`;
    category.dataset.ready = "true";
    category.addEventListener("change", () => {
      state.category = category.value;
      renderVendorsPage();
    });
    city.addEventListener("change", () => {
      state.filterCity = city.value;
      renderVendorsPage();
    });
    document.querySelector("#priceFilter").addEventListener("input", (event) => {
      state.maxPrice = Number(event.target.value);
      renderVendorsPage();
    });
    document.querySelector("#searchFilter").addEventListener("input", (event) => {
      state.search = event.target.value;
      renderVendorsPage();
    });
  }

  if (category) category.value = state.category;
  if (city) city.value = state.filterCity;
  const price = document.querySelector("#priceFilter");
  const priceLabel = document.querySelector("#priceLabel");
  if (price) price.value = state.maxPrice;
  if (priceLabel) priceLabel.textContent = money(state.maxPrice);

  const matches = rankedVendors();
  const list = document.querySelector("#vendorList");
  if (list) {
    list.innerHTML = matches.length ? matches.map((vendor) => vendorCard(vendor)).join("") : '<div class="empty-state">No vendors match these filters.</div>';
    attachShortlistButtons(list);
  }
  const summary = document.querySelector("#marketSummary");
  if (summary) {
    summary.innerHTML = `<span>Showing</span><strong>${matches.length} vendors</strong><span>${state.city} profile / ${state.style}</span>`;
  }
  renderSidebarShortlist();
}

function renderSidebarShortlist() {
  const target = document.querySelector("#sidebarShortlist");
  if (!target) return;
  const saved = selectedVendors();
  target.innerHTML = saved.length
    ? saved.map((vendor) => `<a href="vendor.html?id=${vendor.id}">${vendor.name}</a>`).join("")
    : "<span>No shortlisted vendors yet</span>";
}

function renderVendorProfile() {
  const root = document.querySelector("#vendorProfile");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const vendor = vendorById(params.get("id")) || rankedVendors()[0];
  const partners = vendor.worksWith.map(vendorById).filter(Boolean);
  const similar = vendors
    .filter((item) => item.id !== vendor.id && (item.category === vendor.category || item.style.some((style) => vendor.style.includes(style))))
    .sort((a, b) => scoreVendor(b) - scoreVendor(a))
    .slice(0, 3);
  const saved = state.shortlist.includes(vendor.id);

  root.innerHTML = `
    <section class="profile-hero">
      <div class="profile-media"><img src="${vendor.image}" alt="${vendor.name} wedding portfolio"></div>
      <article class="profile-detail-card">
        <div class="profile-meta">
          <p class="eyebrow">${vendor.category}</p>
          <span class="pill">${scoreVendor(vendor)}% match</span>
        </div>
        <h1>${vendor.name}</h1>
        <p class="profile-copy">${vendor.description}</p>
        <div class="stat-grid">
          <div class="mini-stat"><span>Estimate</span><strong>${money(vendor.price)}</strong></div>
          <div class="mini-stat"><span>Capacity</span><strong>${vendor.capacity} guests</strong></div>
          <div class="mini-stat"><span>Availability</span><strong>${vendor.dates.includes(state.date) ? "Available" : "Ask vendor"}</strong></div>
          <div class="mini-stat"><span>Rating</span><strong>${vendor.rating} / 5</strong></div>
        </div>
        <div class="chip-row">${vendor.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}</div>
        <div class="profile-actions">
          <button class="primary-button" type="button" data-shortlist="${vendor.id}">${saved ? "Remove from shortlist" : "Shortlist vendor"}</button>
          <a class="ghost-button" href="vendors.html">Compare vendors</a>
        </div>
      </article>
    </section>

    <section class="profile-sections">
      <div class="content-card">
        <div class="section-kicker compact">
          <p class="eyebrow">Portfolio</p>
          <h2>Recent wedding work</h2>
        </div>
        <div class="gallery">${vendor.gallery.map((image) => `<img src="${image}" alt="${vendor.name} wedding portfolio image">`).join("")}</div>
      </div>
      <aside class="sidebar-card">
        <p class="eyebrow">AI drafted inquiry</p>
        <textarea id="draftMessage">${draftMessage(vendor)}</textarea>
        <button class="primary-button full-button" id="copyDraftButton" type="button">Copy draft</button>
      </aside>
    </section>

    <section class="page-section">
      <div class="section-kicker">
        <div>
          <p class="eyebrow">Vendor network</p>
          <h2>Partners and similar options.</h2>
        </div>
      </div>
      <div class="recommendation-grid">
        ${[...partners, ...similar].slice(0, 6).map((item) => vendorCard(item, true)).join("")}
      </div>
    </section>
  `;

  attachShortlistButtons(root);
  const copyButton = document.querySelector("#copyDraftButton");
  copyButton.addEventListener("click", async () => {
    const draft = document.querySelector("#draftMessage");
    try {
      await navigator.clipboard.writeText(draft.value);
      copyButton.textContent = "Copied";
    } catch {
      draft.focus();
      draft.select();
      copyButton.textContent = "Draft selected";
    }
  });
}

function renderBudgetPage() {
  renderBudgetMeter();
  const list = document.querySelector("#budgetList");
  if (!list) return;
  const saved = selectedVendors();
  list.innerHTML = saved.length
    ? saved.map((vendor) => `
      <article class="budget-row">
        <img src="${vendor.image}" alt="${vendor.name}">
        <div>
          <p class="eyebrow">${vendor.category}</p>
          <h3>${vendor.name}</h3>
          <p class="profile-copy">${vendor.package}</p>
        </div>
        <strong>${money(vendor.price)}</strong>
      </article>
    `).join("")
    : '<div class="empty-state">No vendors selected yet. Add vendors from the marketplace to begin budget tracking.</div>';

  const selectedCategories = new Set(saved.map((vendor) => vendor.category));
  const missing = coreCategories.filter((category) => !selectedCategories.has(category));
  const missingTarget = document.querySelector("#missingCategories");
  if (missingTarget) missingTarget.innerHTML = missing.length ? missing.map((category) => `<span>${category}</span>`).join("") : "<span>Core categories covered</span>";
}

function renderTimelinePage() {
  const target = document.querySelector("#timelineList");
  if (!target) return;
  const selectedCategories = new Set(selectedVendors().map((vendor) => vendor.category));
  const steps = [
    ["Venue", "Lock venue and date before deposits on design, catering, and rentals."],
    ["Catering", "Schedule tasting, confirm dietary needs, and align with venue rules."],
    ["Decor", "Finalize ceremony design, tablescape, florals, lighting, and installation timing."],
    ["Photography", "Book photo and video before peak-season teams disappear."],
    ["Attire", "Start fittings early so final styling matches the event design."],
    ["Rentals", "Confirm tables, chairs, linens, tenting, power, and delivery windows."],
    ["Beauty", "Book trial appointments and day-of touch-up support."],
    ["Final review", "Compare package total, contracts, timeline gaps, and payment dates."]
  ];
  target.innerHTML = steps.map(([title, copy]) => {
    const done = selectedCategories.has(title) || (title === "Final review" && selectedCategories.size >= 5);
    return `
      <article class="timeline-card ${done ? "done" : ""}">
        <span class="pill">${done ? "Selected" : "Next"}</span>
        <h3>${title}</h3>
        <p>${copy}</p>
      </article>
    `;
  }).join("");
}

function wireGlobalButtons() {
  document.querySelectorAll("#smartPackageButton, #budgetPackageButton").forEach((button) => {
    button.addEventListener("click", () => {
      buildSmartPackage();
      if (page === "vendors") renderVendorsPage();
      if (page === "budget") renderBudgetPage();
    });
  });
}

function renderCurrentPage() {
  renderBudgetMeter();
  if (page === "planner") {
    setupProfileForm();
    renderTopRecommendations();
  }
  if (page === "vendors") renderVendorsPage();
  if (page === "vendor") renderVendorProfile();
  if (page === "budget") renderBudgetPage();
  if (page === "timeline") renderTimelinePage();
}

function init() {
  setupChatWidget();
  setupChat();
  wireGlobalButtons();
  renderCurrentPage();
}

init();
