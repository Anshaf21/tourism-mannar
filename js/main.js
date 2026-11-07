const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const filterList = document.getElementById("filterList");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
let activeCategory = "All";

function renderPlaces() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = places.filter(place => {
    const matchesCategory = activeCategory === "All" || place.category === activeCategory;
    const searchable = `${place.name} ${place.area} ${place.category} ${place.tagline}`.toLowerCase();
    return matchesCategory && searchable.includes(term);
  });

  grid.innerHTML = filtered.map(place => `
    <a class="destination-card" href="details.html?id=${encodeURIComponent(place.id)}">
      <div class="card-image">
        <img src="${place.image}" alt="${place.name}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg,#b7c8b9,#58796b)'">
        <span class="card-category">${place.category}</span>
      </div>
      <div class="card-body">
        <p class="card-area">${place.area} · MANNAR</p>
        <h3>${place.name}</h3>
        <p>${place.tagline}</p>
        <div class="card-link">Discover this place <span>↗</span></div>
      </div>
    </a>
  `).join("");

  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "destination" : "destinations"}`;
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
}

filterList.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  filterList.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
  renderPlaces();
});

searchInput.addEventListener("input", renderPlaces);
document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "All";
  filterList.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === "All"));
  renderPlaces();
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
renderPlaces();
