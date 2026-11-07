const params = new URLSearchParams(window.location.search);
const place = places.find(item => item.id === params.get("id"));
const root = document.getElementById("placeDetails");

document.getElementById("year").textContent = new Date().getFullYear();

if (!place) {
  root.innerHTML = `
    <div class="not-found">
      <p class="eyebrow">DESTINATION NOT FOUND</p>
      <h1>Let's find another place.</h1>
      <p class="detail-description">This destination may have moved or the link may be incorrect.</p>
      <a class="button button-dark" href="index.html#destinations">Back to all places ↗</a>
    </div>`;
} else {
  document.title = `${place.name} | Discover Mannar`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`;
  root.innerHTML = `
    <div class="breadcrumb"><a href="index.html">Home</a> / <a href="index.html#destinations">Destinations</a> / ${place.name}</div>
    <img class="detail-cover" src="${place.image}" alt="${place.name}"
      onerror="this.style.background='linear-gradient(135deg,#b7c8b9,#58796b)'; this.style.visibility='hidden'">
    <div class="detail-heading">
      <div>
        <p class="card-area">${place.category} · ${place.area} · MANNAR DISTRICT</p>
        <h1>${place.name}</h1>
      </div>
      <a class="button button-dark" href="${mapUrl}" target="_blank" rel="noopener noreferrer">Get directions <span>↗</span></a>
    </div>
    <div class="detail-content">
      <div>
        <p class="detail-description">${place.description}</p>
        <h2>What to discover</h2>
        <ul class="highlight-list">${place.highlights.map(item => `<li>${item}</li>`).join("")}</ul>
        <h2>Plan your visit</h2>
        <p class="detail-description">${place.visitorInfo}</p>
      </div>
      <aside class="info-panel">
        <h3>Visitor notes</h3>
        <div class="info-row"><strong>Area</strong><p>${place.area}, Mannar District</p></div>
        <div class="info-row"><strong>Category</strong><p>${place.category}</p></div>
        <div class="info-row"><strong>Best time / conditions</strong><p>${place.bestTime}</p></div>
        <div class="info-row"><strong>Before you go</strong><p>Confirm current access, opening arrangements and fees with the relevant local authority or site operator.</p></div>
        <a class="button button-dark map-button" href="${mapUrl}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a>
      </aside>
    </div>`;
}
