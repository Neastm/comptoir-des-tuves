const INTRO_IMAGE_SRC = "/pierre-cap-ray-1.jpg";
const MAP_QUERY_URL = "https://www.google.com/maps/search/?api=1&query=13+rue+des+Etuves";
const REVIEWS_INTERVAL_MS = 9000;
const BEST_SELLERS_INTERVAL_MS = 8500;

const REVIEWS_DATA = [
  {
    author: "Ines M.",
    rating: 5,
    text: "Service rapide, portions genereuses et super accueil. Je recommande les wraps.",
    date: "il y a 2 semaines"
  },
  {
    author: "Samir K.",
    rating: 5,
    text: "Tres bon snack en centre-ville. Les formules sont claires et le rapport qualite/prix est top.",
    date: "il y a 1 mois"
  },
  {
    author: "Laura T.",
    rating: 4,
    text: "Burgers bien garnis et desserts gourmands. Pratique pour commander vite.",
    date: "il y a 3 semaines"
  },
  {
    author: "Nicolas R.",
    rating: 5,
    text: "J'aime beaucoup l'ambiance et la rapidite de service. Bon plan du quartier.",
    date: "il y a 1 semaine"
  }
];

const MENU_CATALOG = [
  {
    id: "boissons-froides",
    group: "boire-gouter",
    tags: ["boissons-froides", "boisson", "froid", "jus", "soda"],
    title: "Boissons froides",
    description: "Carte boissons froides",
    price: "Dès 1,50 EUR",
    image: "/boisson.png",
    items: [
      ["Eau", "1,50 EUR"],
      ["Soda canette 33cl", "2,00 EUR"],
      ["Coca canette 50cl", "3,00 EUR"],
      ["Orangina", "3,00 EUR"],
      ["Thé pêche glacé", "3,50 EUR"],
      ["Jus d'orange pressé", "4,00 EUR"],
      ["Smoothies", "4,90 EUR"]
    ]
  },
  {
    id: "boissons-chaudes",
    group: "boire-gouter",
    tags: ["boissons-chaudes", "boisson", "chaud", "cafe", "the", "chocolat"],
    title: "Boissons chaudes",
    description: "Café, chocolat, thé",
    price: "Dès 1,60 EUR",
    image: "/cafe.png",
    items: [
      ["Café", "1,60 EUR"],
      ["Café allongé", "1,90 EUR"],
      ["Nespresso", "1,80 EUR"],
      ["Café latte", "3,00 EUR"],
      ["Chocolat chaud", "2,50 EUR"],
      ["Cappuccino", "3,00 EUR"],
      ["Café viennois", "4,00 EUR"],
      ["Chocolat viennois", "4,00 EUR"],
      ["Thé", "1,80 EUR"],
      ["Décaféiné long", "1,90 EUR"]
    ]
  },
  {
    id: "alcools",
    group: "boire-gouter",
    tags: ["alcool", "boisson", "vin", "biere"],
    title: "Boissons alcoolisees",
    description: "Bières et vins",
    price: "Dès 4,00 EUR",
    image: "/boisson.png",
    items: [
      ["Heineken 0.0", "4,00 EUR"],
      ["Desperados", "4,00 EUR"],
      ["Verre de vin", "4,50 EUR"],
      ["Pichet de vin", "7,50 EUR"]
    ]
  },
  {
    id: "crepes",
    group: "boire-gouter",
    tags: ["crepes", "desserts", "sucre", "gouter"],
    title: "Crêpes",
    description: "Desserts crepes",
    price: "Dès 3,90 EUR",
    image: "/cafe.png",
    items: [
      ["Sucre", "3,90 EUR"],
      ["Sucre citron", "4,00 EUR"],
      ["Nutella", "4,90 EUR"],
      ["Confiture", "3,90 EUR"],
      ["Caramel beurre salé", "4,00 EUR"]
    ]
  },
  {
    id: "gaufres",
    group: "boire-gouter",
    tags: ["gaufres", "desserts", "sucre", "gouter"],
    title: "Gaufres",
    description: "Desserts gaufres",
    price: "Dès 3,90 EUR",
    image: "/cafe.png",
    items: [
      ["Sucre", "3,90 EUR"],
      ["Sucre citron", "4,00 EUR"],
      ["Nutella", "4,90 EUR"],
      ["Confiture", "3,90 EUR"],
      ["Caramel beurre salé", "4,00 EUR"]
    ]
  },
  {
    id: "desserts-gourmands",
    group: "boire-gouter",
    tags: ["desserts", "glace", "gouter", "chocolat"],
    title: "Desserts gourmands",
    description: "Moelleux, donuts, tartes, muffins, glace",
    price: "Dès 3,50 EUR",
    image: "/cafe.png",
    items: [
      ["Moelleux chocolat", "3,50 EUR"],
      ["Moelleux citron", "3,50 EUR"],
      ["Donuts", "3,50 EUR"],
      ["Flan", "3,90 EUR"],
      ["Tarte", "3,90 EUR"],
      ["Brownie", "3,90 EUR"],
      ["Tiramisu", "3,50 EUR"],
      ["Muffin", "3,50 EUR"],
      ["Glace artisanale (pot)", "4,50 EUR"]
    ]
  },
  {
    id: "wraps",
    group: "manger",
    tags: ["wraps", "poulet", "kebab", "chevre", "menu"],
    title: "Wraps gourmets",
    description: "Menu frites + boisson 11,90 EUR",
    price: "Seul 7,90 EUR",
    image: "/wrap.png",
    items: [
      ["Wrap tenders", "7,90 EUR"],
      ["Wrap chèvre chaud", "7,90 EUR"],
      ["Wrap veggy", "7,90 EUR"],
      ["Wrap chicken bacon", "7,90 EUR"],
      ["Wrap kebab", "7,90 EUR"],
      ["Wrap Sulivan", "+2,00 EUR"]
    ]
  },
  {
    id: "sandwichs-chauds",
    group: "manger",
    tags: ["sandwichs", "chaud", "menu", "steak", "poulet"],
    title: "Sandwichs chauds",
    description: "Menu frites + boisson 13,90 EUR",
    price: "Seul 9,90 EUR",
    image: "/sandwich.png",
    items: [
      ["Croustillant", "9,90 EUR"],
      ["Végétarien", "9,90 EUR"],
      ["Montagnard", "9,90 EUR"],
      ["Signature au bleu", "9,90 EUR"],
      ["Le Chef", "+1,00 EUR"]
    ]
  },
  {
    id: "americain-frites",
    group: "manger",
    tags: ["sandwichs", "americain", "frites", "menu"],
    title: "Américain frites",
    description: "Menu boisson 11,00 EUR",
    price: "Seul 9,50 EUR",
    image: "/sandwich.png",
    items: [
      ["Américain steak", "9,50 EUR"],
      ["Américain poulet", "9,50 EUR"],
      ["Américain kebab", "9,50 EUR"],
      ["Américain tenders", "9,50 EUR"]
    ]
  },
  {
    id: "burgers",
    group: "manger",
    tags: ["burgers", "cheese", "chicken", "truffe", "bacon"],
    title: "Burgers",
    description: "Classiques et spéciaux",
    price: "Dès 9,90 EUR",
    image: "/sandwich.png",
    items: [
      ["Cheese burger", "9,90 EUR"],
      ["Chicken", "9,90 EUR"],
      ["Végétarien", "9,90 EUR"],
      ["Chèvre", "9,90 EUR"],
      ["Bacon", "10,90 EUR"],
      ["Montagnard", "10,90 EUR"],
      ["Truffe", "10,90 EUR"],
      ["Big burger", "11,90 EUR"]
    ]
  },
  {
    id: "salades",
    group: "manger",
    tags: ["salades", "cesar", "saumon", "italienne", "chevre"],
    title: "Salades",
    description: "Prix unique 9,90 EUR",
    price: "9,90 EUR",
    image: "/salade.png",
    items: [
      ["Salade César", "9,90 EUR"],
      ["Salade saumon", "9,90 EUR"],
      ["Salade chèvre chaud", "9,90 EUR"],
      ["Salade italienne", "9,90 EUR"]
    ]
  },
  {
    id: "assiettes",
    group: "manger",
    tags: ["assiettes", "steak", "poulet", "kebab"],
    title: "Assiettes repas",
    description: "Prix unique 9,90 EUR",
    price: "9,90 EUR",
    image: "/salade.png",
    items: [
      ["Steak à cheval", "9,90 EUR"],
      ["Poulet tenders", "9,90 EUR"],
      ["Kebab", "9,90 EUR"]
    ]
  },
  {
    id: "extras",
    group: "manger",
    tags: ["extras", "frites", "supplements", "cheddar", "bacon"],
    title: "Extras et accompagnements",
    description: "Suppléments et portions",
    price: "Dès +1,00 EUR",
    image: "/sandwich.png",
    items: [
      ["Bacon", "+1,00 EUR"],
      ["Fromage", "+1,00 EUR"],
      ["Steak", "+2,00 EUR"],
      ["Œuf", "+1,00 EUR"],
      ["Frites", "3,00 EUR"],
      ["Frites + cheddar fondu", "5,00 EUR"],
      ["Bucket tenders 3 pièces", "6,00 EUR"],
      ["Bucket tenders 6 pièces", "9,00 EUR"]
    ]
  },
  {
    id: "formules",
    group: "manger",
    tags: ["formules", "etudiante", "midi", "gourmande", "dej"],
    title: "Les formules",
    description: "Petit dej, étudiante, midi, gourmande, gouter",
    price: "Dès 4,50 EUR",
    image: "/sandwich.png",
    items: [
      ["Formule p'tit dej", "4,90 EUR"],
      ["Formule étudiante", "10,00 EUR"],
      ["Formule du midi", "13,90 EUR"],
      ["Formule gourmande", "15,90 EUR"],
      ["Formule dej", "8,90 EUR"],
      ["Formule gouter", "4,50 EUR"]
    ]
  }
];

const translations = {
  en: {
    heroKicker: "Downtown snack",
    heroTitle: "Le Comptoir des Etuves",
    heroSubtitle: "Hot sandwiches, burgers, wraps, salads, desserts and drinks. Eat in, takeaway or delivery.",
    ctaMenu: "See menu",
    ctaFind: "Find us",
    heroUber: "Also available on Uber Eats.",
    introTitle: "Fast, generous and local snack",
    introText1: "Le Comptoir des Etuves welcomes locals, passers-by, students and workers with a clear menu and quick service.",
    introText2: "Our promise: tasty recipes, clear prices and a simple mobile experience, in the street or at your table via QR code.",
    infosTitle: "Practical info",
    reviewsTitle: "What customers say",
    aboutTitle: "The comptoir spirit",
    aboutText: "Le Comptoir des Etuves stands for simple recipes, warm service and consistency.",
    uberText: "Not onsite? Find us on Uber Eats and order delivery."
  }
};

(function initLanguageToggle() {
  const toggle = document.getElementById("langToggle");
  if (!toggle) return;

  let lang = "fr";
  toggle.addEventListener("click", () => {
    lang = lang === "fr" ? "en" : "fr";
    const dict = translations[lang] || {};
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (lang === "fr") {
        if (node.dataset.frOriginal) node.textContent = node.dataset.frOriginal;
        return;
      }
      if (!node.dataset.frOriginal) node.dataset.frOriginal = node.textContent;
      if (dict[key]) node.textContent = dict[key];
    });
  });
})();

(function initLenisScroll() {
  if (!document.body.classList.contains("home")) return;
  if (typeof window.Lenis !== "function") return;

  const lenis = new window.Lenis({
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.1
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
})();

(function initHomeIntroImage() {
  const image = document.getElementById("introImage");
  if (!image) return;
  image.src = INTRO_IMAGE_SRC;
})();

(function initMapLinks() {
  if (!document.body.classList.contains("home")) return;
  document.querySelectorAll('a[href*="google.com/maps/search/?api=1"]').forEach((anchor) => {
    anchor.href = MAP_QUERY_URL;
  });
})();

(function initReviews() {
  const track = document.getElementById("reviewCarouselTrack");
  if (!track) return;

  document.documentElement.style.setProperty(
    "--reviews-scroll-duration",
    `${Math.max(12000, REVIEWS_INTERVAL_MS * 2) / 1000}s`
  );

  if (!REVIEWS_DATA.length) {
    track.innerHTML = "<p>Aucun avis disponible pour le moment.</p>";
    return;
  }

  const renderCard = (item) => {
    const stars = "★".repeat(Math.max(0, Math.min(5, item.rating || 0)));
    return `
      <article class="review">
        <p>\"${item.text}\"</p>
        <div class="review-meta">
          <span>${item.author}</span>
          <span>${stars}</span>
        </div>
        <small>${item.date || ""}</small>
      </article>
    `;
  };

  const sequence = [...REVIEWS_DATA, ...REVIEWS_DATA];
  track.innerHTML = sequence.map(renderCard).join("");
})();

(function initBestSellersCarousel() {
  const carousel = document.getElementById("bestSellersCarousel");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".best-seller-slide"));
  const buttons = Array.from(carousel.querySelectorAll(".best-nav-btn"));
  if (!slides.length || !buttons.length) return;

  document.documentElement.style.setProperty(
    "--best-progress-duration",
    `${BEST_SELLERS_INTERVAL_MS / 1000}s`
  );

  let activeIndex = 0;
  let timer = null;

  const setActive = (index) => {
    activeIndex = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === activeIndex);
    });

    buttons.forEach((button, i) => {
      button.classList.toggle("is-active", i === activeIndex);
      const progress = button.querySelector(".best-nav-progress");
      if (progress) progress.classList.remove("is-running");
      if (i === activeIndex && progress) {
        void progress.offsetWidth;
        progress.classList.add("is-running");
      }
    });
  };

  const next = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActive(nextIndex);
  };

  const start = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(next, BEST_SELLERS_INTERVAL_MS);
  };

  const stop = () => {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      setActive(index);
      start();
    });
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);

  setActive(0);
  start();
})();

(function initCategoryMenuPages() {
  const body = document.body;
  if (!body.classList.contains("menu-category")) return;

  const activeGroup = body.dataset.menuGroup;
  const grid = document.getElementById("productsGrid");
  const filtersRoot = document.getElementById("menuFilters");
  const searchInput = document.getElementById("menuSearch");
  const detailView = document.getElementById("detailView");
  const detailContent = document.getElementById("detailContent");
  const closeDetail = document.getElementById("closeDetail");
  const detailBackdrop = document.getElementById("detailBackdrop");

  if (!grid || !filtersRoot || !searchInput) return;

  let activeFilter = "all";
  let query = "";

  const normalize = (value) =>
    (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  const matchesQuery = (entry, q) => {
    if (!q) return true;
    const searchable = [
      entry.title,
      entry.description,
      entry.price,
      ...(entry.tags || []),
      ...(entry.items || []).map(([name]) => name)
    ]
      .join(" ")
      .toLowerCase();

    return normalize(searchable).includes(normalize(q));
  };

  const getVisibleEntries = () =>
    MENU_CATALOG.filter((entry) => {
      if (entry.group !== activeGroup) return false;
      if (activeFilter !== "all" && !(entry.tags || []).includes(activeFilter)) return false;
      if (!matchesQuery(entry, query)) return false;
      return true;
    });

  const spanClassByIndex = (index, total) => {
    if (total <= 2) return "span-6";
    if (index === 0 || index === total - 1) return "span-5";
    if (index === 1 || index === total - 2) return "span-7";
    return index % 2 === 0 ? "span-7" : "span-5";
  };

  const render = () => {
    const entries = getVisibleEntries();
    grid.innerHTML = "";

    if (!entries.length) {
      const empty = document.createElement("article");
      empty.className = "section";
      empty.innerHTML = "<h3>Aucun résultat</h3><p>Essaie un autre filtre ou un mot-clé différent.</p>";
      grid.appendChild(empty);
      return;
    }

    entries.forEach((entry, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = `gallery-card ${spanClassByIndex(index, entries.length)}`;
      card.dataset.entryId = entry.id;
      card.innerHTML = `
        <img src="${entry.image}" alt="${entry.title}" />
        <div class="gallery-overlay">
          <span class="gallery-label">${entry.title} · ${entry.price}</span>
          <span class="gallery-arrow">↗</span>
        </div>
      `;
      grid.appendChild(card);

      requestAnimationFrame(() => {
        card.classList.add("is-visible");
      });
    });
  };

  const closeDetailModal = () => {
    if (!detailView) return;
    detailView.hidden = true;
    document.body.classList.remove("modal-open");
  };

  const openDetail = (entryId) => {
    const entry = MENU_CATALOG.find((item) => item.id === entryId);
    if (!entry || !detailContent || !detailView) return;

    const optionsCount = entry.items?.length || 0;
    const highlightedOptions = (entry.items || [])
      .slice(0, 4)
      .map(([label]) => label)
      .join(", ");

    detailContent.innerHTML = `
      <img class="detail-image" src="${entry.image}" alt="${entry.title}" />
      <h3 id="detailTitle">${entry.title}</h3>
      <p class="detail-description">${entry.description}</p>
      <p class="detail-price"><strong>${entry.price}</strong></p>
      <p class="detail-summary">
        ${optionsCount} option${optionsCount > 1 ? "s" : ""} disponible${optionsCount > 1 ? "s" : ""}.
        ${highlightedOptions ? `Incontournables: ${highlightedOptions}.` : ""}
      </p>
      <ul class="detail-items">
        ${entry.items.map(([label, price]) => `<li><span>${label}</span><strong>${price}</strong></li>`).join("")}
      </ul>
    `;

    detailView.hidden = false;
    document.body.classList.add("modal-open");
  };

  filtersRoot.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter || "all";
      filtersRoot
        .querySelectorAll(".filter-chip")
        .forEach((chip) => chip.classList.toggle("is-active", chip === btn));
      render();
    });
  });

  searchInput.addEventListener("input", () => {
    query = searchInput.value || "";
    render();
  });

  grid.addEventListener("click", (event) => {
    const target = event.target.closest(".gallery-card");
    if (!target) return;
    openDetail(target.dataset.entryId);
  });

  closeDetail?.addEventListener("click", closeDetailModal);
  detailBackdrop?.addEventListener("click", closeDetailModal);
  detailView?.addEventListener("click", (event) => {
    if (event.target === detailView) closeDetailModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!detailView || detailView.hidden) return;
    closeDetailModal();
  });

  render();
})();
