const places = [
  {
    "id": "mannar-fort",
    "name": "Mannar Fort",
    "category": "Heritage",
    "area": "Mannar Town",
    "tagline": "Explore a Portuguese-built fort beside the lagoon.",
    "description": "Mannar Fort is a coastal fortification first built by the Portuguese in the sixteenth century and later occupied and rebuilt by the Dutch. Its remains sit near the causeway and offer a glimpse into the island’s colonial history.",
    "highlights": [
      "Historic fort walls and bastions",
      "Lagoon-side setting",
      "Portuguese and Dutch colonial history"
    ],
    "bestTime": "Visit during daylight and check whether conservation work restricts access.",
    "visitorInfo": "Respect barriers and protected masonry; access to some sections may be restricted.",
    "image": "assets/place1.jpg",
    "mapQuery": "Mannar Fort, Mannar, Sri Lanka"
  },
  {
    "id": "baobab-tree",
    "name": "Baobab Tree",
    "category": "Nature",
    "area": "Pallimunai, Mannar",
    "tagline": "See an extraordinary African tree rooted in Mannar’s story.",
    "description": "The famous Baobab tree at Pallimunai is one of Mannar’s best-known natural landmarks. The species is native to Africa, and the tree is associated with the island’s long history of Indian Ocean trade.",
    "highlights": [
      "Unusual massive trunk",
      "Local history and photography",
      "Short visit from Mannar town"
    ],
    "bestTime": "Early morning or late afternoon is more comfortable in the dry, sunny climate.",
    "visitorInfo": "Be gentle around the tree and follow any local conservation guidance.",
    "image": "assets/place2.jpg",
    "mapQuery": "Baobab Tree, Pallimunai, Mannar, Sri Lanka"
  },
  {
    "id": "thiruketheeswaram",
    "name": "Thiruketheeswaram Temple",
    "category": "Heritage",
    "area": "Manthai, Mannar",
    "tagline": "Visit a revered Shiva temple near the Palavi Tank.",
    "description": "Thiruketheeswaram is one of Sri Lanka’s historic Shiva temples, located at Manthai in Mannar District. It is an important Hindu pilgrimage site with a long religious tradition.",
    "highlights": [
      "Temple architecture and worship",
      "Palavi Tank surroundings",
      "Maha Shivaratri pilgrimage"
    ],
    "bestTime": "Check temple notices for festival dates and daily worship arrangements.",
    "visitorInfo": "Dress modestly, remove footwear where required and follow temple photography rules.",
    "image": "assets/place3.jpg",
    "mapQuery": "Thiruketheeswaram Temple, Mannar, Sri Lanka"
  },
  {
    "id": "madhu-shrine",
    "name": "Shrine of Our Lady of Madhu",
    "category": "Heritage",
    "area": "Madhu",
    "tagline": "Discover one of Sri Lanka’s best-known Catholic pilgrimage sites.",
    "description": "The Shrine of Our Lady of Madhu is a major Catholic pilgrimage destination set in a wooded area of Mannar District. Pilgrims travel from across Sri Lanka, especially during the annual feast period.",
    "highlights": [
      "Historic Marian shrine",
      "Pilgrimage and devotional traditions",
      "Peaceful wooded setting"
    ],
    "bestTime": "Large feast gatherings can affect transport and accommodation; check current dates before travelling.",
    "visitorInfo": "Be respectful during services and follow shrine visitor guidance.",
    "image": "assets/place4.jpg",
    "mapQuery": "Shrine of Our Lady of Madhu, Madhu, Mannar, Sri Lanka"
  },
  {
    "id": "vankalai-bird-sanctuary",
    "name": "Vankalai Bird Sanctuary",
    "category": "Wildlife",
    "area": "Vankalai",
    "tagline": "Watch migratory birds across coastal wetlands.",
    "description": "Vankalai is a protected wetland area recognised for its importance to resident and migratory birds. Its habitats include lagoons, salt marshes, mudflats and coastal grasslands.",
    "highlights": [
      "Migratory birdwatching",
      "Wetlands and lagoon landscapes",
      "Nature photography"
    ],
    "bestTime": "Bird activity changes seasonally; the northern winter migration period is often productive.",
    "visitorInfo": "Use binoculars, keep a respectful distance and avoid disturbing nesting or feeding birds.",
    "image": "assets/place5.jpg",
    "mapQuery": "Vankalai Bird Sanctuary, Mannar, Sri Lanka"
  },
  {
    "id": "mannar-bird-sanctuary",
    "name": "Mannar Bird Sanctuary",
    "category": "Wildlife",
    "area": "Mannar Island and causeway",
    "tagline": "Explore a mosaic of lagoons, scrubland and bird habitats.",
    "description": "The Mannar Bird Sanctuary encompasses a broad landscape of wetlands and coastal habitats around Mannar Island, including areas near the causeway. It is known for waterbirds and seasonal migrants.",
    "highlights": [
      "Waterbirds and migratory species",
      "Salt marshes and lagoons",
      "Coastal landscapes"
    ],
    "bestTime": "Plan around daylight and seasonal bird movements; check protected-area guidance before visiting.",
    "visitorInfo": "Stay on permitted routes and do not approach or feed wildlife.",
    "image": "assets/place5.jpg",
    "mapQuery": "Mannar Bird Sanctuary, Mannar, Sri Lanka"
  },
  {
    "id": "talaimannar-lighthouse",
    "name": "Talaimannar Lighthouse",
    "category": "Heritage",
    "area": "Talaimannar",
    "tagline": "Travel to the island’s western edge and coastal landmark.",
    "description": "Talaimannar is the western end of Mannar Island, facing the Palk Strait. The lighthouse is a recognisable coastal landmark in an area shaped by fishing, maritime travel and the historic railway connection.",
    "highlights": [
      "Coastal scenery",
      "Talaimannar’s maritime history",
      "Nearby fishing communities"
    ],
    "bestTime": "Check local access and transport conditions before making the trip.",
    "visitorInfo": "Do not enter restricted port, railway or coastguard areas.",
    "image": "assets/place6.jpg",
    "mapQuery": "Talaimannar Lighthouse, Mannar, Sri Lanka"
  },
  {
    "id": "doric-fort-arippu",
    "name": "Doric Bungalow / Arippu Fort",
    "category": "Heritage",
    "area": "Arippu",
    "tagline": "Trace colonial-era history along Mannar’s northwestern coast.",
    "description": "The Doric Bungalow at Arippu is associated with the early British administration and the historic pearl fishery coast. The surrounding Arippu area also contains remains linked to colonial-era fortifications.",
    "highlights": [
      "Colonial-era history",
      "Coastal landscape",
      "Pearl fishery heritage"
    ],
    "bestTime": "Access and the condition of historic structures may vary; confirm locally before travelling.",
    "visitorInfo": "Treat the ruins as protected heritage and do not climb or remove materials.",
    "image": "assets/place7.jpg",
    "mapQuery": "Doric Bungalow, Arippu, Mannar, Sri Lanka"
  },
  {
    "id": "ramas-bridge",
    "name": "Adam’s Bridge (Rama’s Bridge)",
    "category": "Nature",
    "area": "Talaimannar / Palk Strait",
    "tagline": "Learn about the chain of shoals between Sri Lanka and India.",
    "description": "Adam’s Bridge, also known as Rama’s Bridge or Rama Setu, is a chain of limestone shoals between Mannar Island and India’s Pamban Island. It is significant in geography, cultural traditions and marine ecology.",
    "highlights": [
      "Views towards the Palk Strait",
      "Geological and cultural significance",
      "Marine landscape"
    ],
    "bestTime": "Viewing opportunities depend on weather, sea conditions and local access.",
    "visitorInfo": "This is a sensitive marine area; do not attempt unsafe crossings or enter restricted zones.",
    "image": "assets/place8.jpg",
    "mapQuery": "Adam’s Bridge viewpoint, Talaimannar, Sri Lanka"
  },
  {
    "id": "keeri-beach",
    "name": "Keeri Beach",
    "category": "Beach",
    "area": "Mannar Island",
    "tagline": "Unwind by the calm-looking shores of Mannar Island.",
    "description": "Keeri Beach is a coastal spot near Mannar town listed among the district’s local visitor attractions. Sea conditions can change, so treat it as a scenic stop rather than assuming swimming is safe.",
    "highlights": [
      "Coastal views",
      "Relaxed beach visit",
      "Photography and sunset scenery"
    ],
    "bestTime": "Late afternoon can be more comfortable; always check wind, tides and sea conditions.",
    "visitorInfo": "There may be limited facilities. Swim only where locally confirmed as safe and supervised.",
    "image": "assets/place9.jpg",
    "mapQuery": "Keeri Beach, Mannar, Sri Lanka"
  },
  {
    "id": "giants-tank",
    "name": "Giant’s Tank (Yodha Wewa)",
    "category": "Nature",
    "area": "Murunkan area",
    "tagline": "Discover a major historic irrigation landscape.",
    "description": "Giant’s Tank is a large irrigation reservoir in Mannar District, supporting agriculture and wetland habitats. The surrounding landscape is of interest for scenery, local livelihoods and birdlife.",
    "highlights": [
      "Reservoir and bund landscapes",
      "Birdwatching opportunities",
      "Traditional irrigation heritage"
    ],
    "bestTime": "Visit in daylight and check local water and road conditions.",
    "visitorInfo": "Respect private farmland, irrigation infrastructure and any restricted areas.",
    "image": "assets/place10.jpg",
    "mapQuery": "Giant’s Tank, Murunkan, Mannar, Sri Lanka"
  },
  {
    "id": "kunchukulam-bridge",
    "name": "Kunchukulam Hanging Bridge",
    "category": "Nature",
    "area": "Kunchukulam, Nanattan",
    "tagline": "Take in a rural river crossing and surrounding scenery.",
    "description": "The hanging bridge at Kunchukulam crosses the Malwathu Oya area and is noted as a local natural and visitor attraction. It offers a different inland experience from Mannar’s coastal sites.",
    "highlights": [
      "River and rural scenery",
      "Local engineering landmark",
      "Photography stop"
    ],
    "bestTime": "Check road and bridge access before travelling, especially after heavy rain.",
    "visitorInfo": "Use the bridge only if it is open to visitors and follow posted safety limits.",
    "image": "assets/place11.jpg",
    "mapQuery": "Kunchukulam Hanging Bridge, Mannar District, Sri Lanka"
  }
];
