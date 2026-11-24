/* =====================================================================
   1. DEFAULT CONFIGURATION & CATALOG
   ===================================================================== */
const STORAGE_KEY = `konfetti_studio_booking_v2`;

const DEFAULT_SETTINGS = {
  originName: `Konfetti Studio Workshop (Quezon City)`,
  originLat: 14.6507,
  originLng: 121.0320,
  baseMm: 300,
  baseOut: 800,
  perKmRate: 15,
  policyText: `A reservation down payment is required to lock your event date. Final transport fee and date slot availability will be confirmed by Kiara & Symmone once we review your venue details and peg photos in Messenger.`,
  prices: {
    combo_joyful: 5500,
    combo_fun: 6000,
    backdrop_basic: 3000,
    backdrop_deluxe: 4500,
    backdrop_premium: 8500,
    clown_a: 2000,
    clown_b: 2500,
    clown_c: 3800,
    clown_d: 4000,
    balloon_twist_only: 1999,
    face_paint_only: 1999,
    paint_and_twist: 2999,
    addon_styro_name: 450,
    addon_bending_lights: 500,
    addon_balloon_pillar: 750,
    addon_giveaways: 800
  },
  images: {
    combo_joyful: ``,
    combo_fun: ``,
    backdrop_basic: ``,
    backdrop_deluxe: ``,
    backdrop_premium: ``,
    clown_a: ``,
    clown_b: ``,
    clown_c: ``,
    clown_d: ``,
    balloon_twist_only: ``,
    face_paint_only: ``,
    paint_and_twist: ``,
    addon_styro_name: ``,
    addon_bending_lights: ``,
    addon_balloon_pillar: ``,
    addon_giveaways: ``
  },
  availability: {
    combo_joyful: true,
    combo_fun: true,
    backdrop_basic: true,
    backdrop_deluxe: true,
    backdrop_premium: true,
    clown_a: true,
    clown_b: true,
    clown_c: true,
    clown_d: true,
    balloon_twist_only: true,
    face_paint_only: true,
    paint_and_twist: true,
    addon_styro_name: true,
    addon_bending_lights: true,
    addon_balloon_pillar: true,
    addon_giveaways: true
  }
};

const CATALOG_CATEGORIES = [
  {
    id: `combos`,
    title: `Featured Promo Combos`,
    ruleLabel: `All-in bundle (locks other categories)`,
    mode: `combo`,
    items: [
      { id: `combo_joyful`, name: `Joyful Package`, placeholderIcon: `🎈`, desc: `All-in celebration combo with curated backdrop styling and party entertainment.` },
      { id: `combo_fun`, name: `Fun Package`, placeholderIcon: `🎉`, desc: `Upgraded celebration bundle with fuller backdrop decor and extended party entertainment.` }
    ]
  },
  {
    id: `backdrops`,
    title: `Backdrop Styling`,
    ruleLabel: `Choose 1 only`,
    mode: `single`,
    items: [
      { id: `backdrop_basic`, name: `Basic Backdrop`, placeholderIcon: `✨`, desc: `Clean single-panel backdrop with customized balloon garland accent.` },
      { id: `backdrop_deluxe`, name: `Deluxe Backdrop`, placeholderIcon: `🎊`, desc: `Layered backdrop panels, fuller organic balloon garland, and themed centerpiece props.` },
      { id: `backdrop_premium`, name: `Premium Backdrop`, placeholderIcon: `👑`, desc: `Full multi-panel stage styling, dense balloon installation, custom cutout, and lighting accents.` }
    ]
  },
  {
    id: `clowns`,
    title: `Clowns & Performers`,
    ruleLabel: `Choose 1 only`,
    mode: `single`,
    items: [
      { id: `clown_a`, name: `Clown Package A`, placeholderIcon: `🤡`, desc: `Party host clown with parlor games and lively interactive fun.` },
      { id: `clown_b`, name: `Clown Package B`, placeholderIcon: `🎩`, desc: `Hosting, parlor games, and classic magic show segment.` },
      { id: `clown_c`, name: `Clown Package C`, placeholderIcon: `🪄`, desc: `Hosting, games, magic show, and balloon twisting for guests.` },
      { id: `clown_d`, name: `Clown Package D`, placeholderIcon: `🎪`, desc: `Full performer package with hosting, games, magic, and extended entertainment.` },
      { id: `balloon_twist_only`, name: `Balloon Twisting Only`, placeholderIcon: `🐶`, desc: `Dedicated balloon twister crafting custom shapes for kids and guests.` }
    ]
  },
  {
    id: `facepaint`,
    title: `Face Painting & Twisting`,
    ruleLabel: `Choose 1 only`,
    mode: `single`,
    items: [
      { id: `face_paint_only`, name: `Face Painting Only`, placeholderIcon: `🎨`, desc: `Kid-safe, skin-friendly face painting designs for birthday guests.` },
      { id: `paint_and_twist`, name: `Paint & Twist`, placeholderIcon: `🖌️`, desc: `Combo face painting station plus custom balloon twisting.` }
    ]
  },
  {
    id: `addons`,
    title: `Add-Ons`,
    ruleLabel: `Multi-select (when no Promo Combo)`,
    mode: `multi`,
    items: [
      { id: `addon_styro_name`, name: `Custom Styrofoam Name Standee`, placeholderIcon: `🔤`, desc: `Hand-cut personalized celebrant name lettering for backdrop or cake table.` },
      { id: `addon_bending_lights`, name: `Bending Lights (Pair)`, placeholderIcon: `💡`, desc: `Warm spotlighting to highlight your backdrop styling indoors or at dusk.` },
      { id: `addon_balloon_pillar`, name: `Extra Balloon Column / Pillar`, placeholderIcon: `🎈`, desc: `Freestanding balloon pillar accent for entrance or stage framing.` },
      { id: `addon_giveaways`, name: `Personalized Giveaways (20 pcs)`, placeholderIcon: `🎁`, desc: `Custom party loot bags or themed giveaway souvenirs.` }
    ]
  }
];

const VENUE_DIRECTORY = [
  { label: `14 West Avenue, Brgy. Nayong Kanluran, Quezon City`, lat: 14.6462, lng: 121.0285, region: `mm` },
  { label: `Trinoma / North Avenue, Quezon City`, lat: 14.6533, lng: 121.0332, region: `mm` },
  { label: `Tomas Morato Ave, Brgy. Sacred Heart, Quezon City`, lat: 14.6335, lng: 121.0347, region: `mm` },
  { label: `Timog Avenue, South Triangle, Quezon City`, lat: 14.6347, lng: 121.0375, region: `mm` },
  { label: `Katipunan Ave, Loyola Heights, Quezon City`, lat: 14.6395, lng: 121.0744, region: `mm` },
  { label: `Eastwood City, Bagumbayan, Quezon City`, lat: 14.6095, lng: 121.0793, region: `mm` },
  { label: `Cubao / Araneta City, Quezon City`, lat: 14.6197, lng: 121.0531, region: `mm` },
  { label: `Commonwealth Ave / Fairview, Quezon City`, lat: 14.7011, lng: 121.0695, region: `mm` },
  { label: `Novaliches Proper, Quezon City`, lat: 14.7224, lng: 121.0412, region: `mm` },
  { label: `España Blvd, Sampaloc, Manila`, lat: 14.6091, lng: 120.9896, region: `mm` },
  { label: `Intramuros / Rizal Park, Manila`, lat: 14.5896, lng: 120.9747, region: `mm` },
  { label: `Binondo / Sta. Cruz, Manila`, lat: 14.6001, lng: 120.9748, region: `mm` },
  { label: `Malate / Taft Ave, Manila`, lat: 14.5707, lng: 120.9916, region: `mm` },
  { label: `Ayala Avenue, Makati City`, lat: 14.5547, lng: 121.0244, region: `mm` },
  { label: `Poblacion / Rockwell Center, Makati City`, lat: 14.5653, lng: 121.0359, region: `mm` },
  { label: `BGC High Street, Bonifacio Global City, Taguig`, lat: 14.5508, lng: 121.0510, region: `mm` },
  { label: `Ortigas Center, Pasig City`, lat: 14.5869, lng: 121.0614, region: `mm` },
  { label: `Kapitolyo, Pasig City`, lat: 14.5709, lng: 121.0604, region: `mm` },
  { label: `Greenfield / Shaw Blvd, Mandaluyong City`, lat: 14.5797, lng: 121.0515, region: `mm` },
  { label: `Greenhills Shopping Center, San Juan City`, lat: 14.6019, lng: 121.0494, region: `mm` },
  { label: `Marikina Heights / Riverbanks, Marikina City`, lat: 14.6407, lng: 121.0968, region: `mm` },
  { label: `Monumento / Grace Park, Caloocan City`, lat: 14.6572, lng: 120.9840, region: `mm` },
  { label: `Malabon City Hall / Tugatog, Malabon`, lat: 14.6625, lng: 120.9567, region: `mm` },
  { label: `Karuhatan / MacArthur Hwy, Valenzuela City`, lat: 14.6881, lng: 120.9760, region: `mm` },
  { label: `MOA Complex / Bay Area, Pasay City`, lat: 14.5351, lng: 120.9822, region: `mm` },
  { label: `BF Homes, Parañaque City`, lat: 14.4557, lng: 121.0256, region: `mm` },
  { label: `Alabang Town Center / Filinvest, Muntinlupa`, lat: 14.4177, lng: 121.0411, region: `mm` },
  { label: `Almanza / Casimiro, Las Piñas City`, lat: 14.4445, lng: 120.9939, region: `mm` },
  { label: `Cainta Junction, Cainta, Rizal`, lat: 14.5786, lng: 121.1167, region: `out` },
  { label: `Taytay / Tikling, Taytay, Rizal`, lat: 14.5588, lng: 121.1325, region: `out` },
  { label: `Upper Antipolo / Antipolo Cathedral, Rizal`, lat: 14.5866, lng: 121.1763, region: `out` },
  { label: `San Mateo / Rodriguez, Rizal`, lat: 14.6967, lng: 121.1186, region: `out` },
  { label: `Bacoor / Molino Blvd, Cavite`, lat: 14.4126, lng: 120.9746, region: `out` },
  { label: `Imus / Aguinaldo Hwy, Cavite`, lat: 14.4297, lng: 120.9367, region: `out` },
  { label: `Dasmariñas City, Cavite`, lat: 14.3294, lng: 120.9367, region: `out` },
  { label: `Tagaytay Rotonda, Tagaytay City, Cavite`, lat: 14.1153, lng: 120.9621, region: `out` },
  { label: `San Pedro / Biñan, Laguna`, lat: 14.3595, lng: 121.0473, region: `out` },
  { label: `Sta. Rosa / Nuvali, Laguna`, lat: 14.2392, lng: 121.0574, region: `out` },
  { label: `Calamba City, Laguna`, lat: 14.2117, lng: 121.1653, region: `out` },
  { label: `Meycauayan / Marilao, Bulacan`, lat: 14.7484, lng: 120.9613, region: `out` },
  { label: `San Jose del Monte, Bulacan`, lat: 14.8139, lng: 121.0453, region: `out` },
  { label: `Malolos City, Bulacan`, lat: 14.8433, lng: 120.8114, region: `out` }
];

/* Keywords to automatically flag Out-of-NCR addresses even if typed manually */
const OUT_OF_NCR_KEYWORDS = [
  `rizal`, `antipolo`, `cainta`, `taytay`, `angono`, `binangonan`, `san mateo`, `rodriguez`, `montalban`, `tanay`, `morong`, `teresa`,
  `cavite`, `bacoor`, `imus`, `dasmarinas`, `dasmariñas`, `tagaytay`, `silang`, `general trias`, `gen trias`, `trece martires`, `trento`, `kawit`, `rosario`, `tanz`, `naic`,
  `laguna`, `san pedro`, `binan`, `biñan`, `sta rosa`, `santa rosa`, `nuvali`, `cabuyao`, `calamba`, `los banos`, `los baños`, `san pablo`,
  `bulacan`, `meycauayan`, `marilao`, `bocaue`, `balagtas`, `guiguinto`, `malolos`, `sjdm`, `san jose del monte`, `sta maria`, `santa maria`, `pldel`, `pulilan`, `baliuag`,
  `pampanga`, `batangas`, `tarlac`, `subic`, `zambales`, `quezon province`, `lucena`
];

const NCR_KEYWORDS = [
  `quezon city`, `qc`, `manila`, `makati`, `taguig`, `bgc`, `pasig`, `mandaluyong`,
  `san juan`, `marikina`, `caloocan`, `malabon`, `navotas`, `valenzuela`, `pasay`,
  `paranaque`, `parañaque`, `muntinlupa`, `alabang`, `las pinas`, `las piñas`, `pateros`, `metro manila`, `ncr`
];

const NCR_POLYGON_COORDS = [
  [14.780, 120.945], [14.775, 121.045], [14.740, 121.115], [14.660, 121.120],
  [14.595, 121.105], [14.525, 121.095], [14.445, 121.065], [14.375, 121.055],
  [14.370, 121.010], [14.425, 120.965], [14.490, 120.975], [14.555, 120.975],
  [14.615, 120.955], [14.695, 120.935]
];

const GREATER_LUZON_BACKDROP = [
  [14.95, 120.75], [14.95, 121.32], [14.08, 121.32], [14.08, 120.75]
];

/* =====================================================================
   2. APPLICATION STATE & STORAGE
   ===================================================================== */
let appState = {
  theme: `light`,
  currentStep: 1,
  activeServiceCategory: `combos`,
  settings: JSON.parse(JSON.stringify(DEFAULT_SETTINGS)),
  booking: {
    customerName: ``,
    eventDate: ``,
    startTime: ``,
    endTime: ``,
    venueAddress: ``,
    region: `mm`,
    lat: 14.6462,
    lng: 121.0285,
    selections: {
      combos: null,
      backdrops: null,
      clowns: null,
      facepaint: null,
      addons: []
    },
    motif: ``,
    celebrant: ``,
    notes: ``
  }
};

let mapInstance = null;
let originMarker = null;
let venueMarker = null;
let routeLine = null;
let ringLayers = [];
let ncrPolyLayer = null;
let backdropPolyLayer = null;
let ownerUnlocked = false;

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    /* Ignore storage quota errors */
  }
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved && typeof saved === `object`) {
      if (saved.theme) appState.theme = saved.theme;
      if (saved.currentStep) appState.currentStep = saved.currentStep;
      if (saved.activeServiceCategory) appState.activeServiceCategory = saved.activeServiceCategory;
      if (saved.settings) {
        appState.settings = Object.assign({}, DEFAULT_SETTINGS, saved.settings);
        appState.settings.prices = Object.assign({}, DEFAULT_SETTINGS.prices, saved.settings.prices || {});
        appState.settings.images = Object.assign({}, DEFAULT_SETTINGS.images, saved.settings.images || {});
        appState.settings.availability = Object.assign({}, DEFAULT_SETTINGS.availability, saved.settings.availability || {});
      }
      if (saved.booking) {
        appState.booking = Object.assign({}, appState.booking, saved.booking);
        appState.booking.selections = Object.assign(
          { combos: null, backdrops: null, clowns: null, facepaint: null, addons: [] },
          saved.booking.selections || {}
        );
      }
    }
  } catch (err) {
    /* Fall back to defaults */
  }
}

/* =====================================================================
   3. AUTOMATIC REGION DETECTION & DISTANCE ENGINE
   ===================================================================== */
function formatPeso(num) {
  const n = Math.round(Number(num) || 0);
  return `₱${n.toLocaleString(`en-US`)}`;
}

function formatTime12Hour(timeStr) {
  const val = String(timeStr || ``).trim();
  if (!val) return ``;
  const parts = val.split(`:`);
  if (parts.length < 2) return val;
  let hours = parseInt(parts[0], 10);
  const mins = parts[1].slice(0, 2);
  if (isNaN(hours)) return val;
  const period = hours >= 12 ? `PM` : `AM`;
  hours = hours % 12 || 12;
  return `${hours}:${mins} ${period}`;
}

function escapeHtml(str) {
  return String(str || ``)
    .replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/"/g, `&quot;`);
}

function pointInNcr(lat, lng) {
  let inside = false;
  const pts = NCR_POLYGON_COORDS;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const yi = pts[i][0], xi = pts[i][1];
    const yj = pts[j][0], xj = pts[j][1];
    const intersect = ((yi > lat) !== (yj > lat)) &&
                      (lng < (xj - xi) * (lat - yi) / ((yj - yi) || 1e-9) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function classifyRegionAutomatically(addressText, lat, lng) {
  const text = String(addressText || ``).toLowerCase();

  /* 1. Check explicit Out-of-NCR provincial/city keywords first */
  for (let i = 0; i < OUT_OF_NCR_KEYWORDS.length; i++) {
    if (text.indexOf(OUT_OF_NCR_KEYWORDS[i]) !== -1) {
      return `out`;
    }
  }

  /* 2. Check explicit Metro Manila city keywords */
  for (let j = 0; j < NCR_KEYWORDS.length; j++) {
    if (text.indexOf(NCR_KEYWORDS[j]) !== -1) {
      return pointInNcr(lat, lng) ? `mm` : `out`;
    }
  }

  /* 3. Fall back to map pin polygon check */
  return pointInNcr(lat, lng) ? `mm` : `out`;
}

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function computeRoadDistanceKm() {
  const straight = haversineKm(
    Number(appState.settings.originLat),
    Number(appState.settings.originLng),
    Number(appState.booking.lat),
    Number(appState.booking.lng)
  );
  const roadKm = Math.max(0.5, straight * 1.32);
  return Math.round(roadKm * 10) / 10;
}

function computeTransportDetails() {
  const km = computeRoadDistanceKm();
  const isOut = appState.booking.region === `out`;
  const baseline = isOut ? Number(appState.settings.baseOut) : Number(appState.settings.baseMm);
  const perKm = Number(appState.settings.perKmRate);
  const distanceCharge = Math.round(km * perKm);
  const total = Math.round(baseline + distanceCharge);
  return {
    km: km,
    baseline: baseline,
    perKm: perKm,
    distanceCharge: distanceCharge,
    total: total,
    regionLabel: isOut ? `Outside Metro Manila (Out-of-NCR)` : `Metro Manila (NCR)`
  };
}

function isItemAvailable(itemId) {
  return appState.settings.availability[itemId] !== false;
}

function findCatalogItem(itemId) {
  for (let i = 0; i < CATALOG_CATEGORIES.length; i++) {
    const cat = CATALOG_CATEGORIES[i];
    for (let j = 0; j < cat.items.length; j++) {
      if (cat.items[j].id === itemId) {
        return {
          cat: cat,
          item: cat.items[j],
          price: Number(appState.settings.prices[itemId] || 0),
          available: isItemAvailable(itemId)
        };
      }
    }
  }
  return null;
}

function getSelectedItemsList() {
  const sel = appState.booking.selections;
  const out = [];
  if (sel.combos) {
    const found = findCatalogItem(sel.combos);
    if (found && found.available) out.push(found);
    return out;
  }
  [`backdrops`, `clowns`, `facepaint`].forEach(function (catId) {
    if (sel[catId]) {
      const found = findCatalogItem(sel[catId]);
      if (found && found.available) out.push(found);
    }
  });
  if (Array.isArray(sel.addons)) {
    sel.addons.forEach(function (id) {
      const found = findCatalogItem(id);
      if (found && found.available) out.push(found);
    });
  }
  return out;
}

function pruneUnavailableSelections() {
  const sel = appState.booking.selections;
  if (sel.combos && !isItemAvailable(sel.combos)) sel.combos = null;
  [`backdrops`, `clowns`, `facepaint`].forEach(function (catId) {
    if (sel[catId] && !isItemAvailable(sel[catId])) sel[catId] = null;
  });
  if (Array.isArray(sel.addons)) {
    sel.addons = sel.addons.filter(isItemAvailable);
  }
}

function getValidationStatus() {
  const b = appState.booking;
  const missing = [];
  const hasName = b.customerName.trim().length > 0;
  const hasDate = b.eventDate.trim().length > 0;
  const hasStart = b.startTime.trim().length > 0;
  const hasEnd = b.endTime.trim().length > 0;
  const hasVenue = b.venueAddress.trim().length > 0;
  const items = getSelectedItemsList();
  const hasService = items.length > 0;

  if (!hasName) missing.push(`Customer Name`);
  if (!hasDate) missing.push(`Event Date`);
  if (!hasStart) missing.push(`Event Start Time`);
  if (!hasEnd) missing.push(`Event End Time`);
  if (!hasVenue) missing.push(`Venue Address / Landmark`);
  if (!hasService) missing.push(`At least 1 Service Package`);

  return {
    hasName: hasName,
    hasDateTime: hasDate && hasStart && hasEnd,
    hasDate: hasDate,
    hasStart: hasStart,
    hasEnd: hasEnd,
    hasVenue: hasVenue,
    hasService: hasService,
    step1Complete: hasName && hasDate && hasStart && hasEnd && hasVenue,
    allComplete: missing.length === 0,
    missing: missing
  };
}

/* =====================================================================
   4. THEME TOGGLE
   ===================================================================== */
function applyTheme() {
  const isDark = appState.theme === `dark`;
  document.documentElement.setAttribute(`data-theme`, isDark ? `dark` : `light`);
  const icon = document.getElementById(`theme-toggle-icon`);
  const txt = document.getElementById(`theme-toggle-text`);
  if (icon) icon.textContent = isDark ? `☀️` : `🌙`;
  if (txt) txt.textContent = isDark ? `Light Mode` : `Dark Mode`;
  updateMapThemeColors();
}

function toggleTheme() {
  appState.theme = appState.theme === `dark` ? `light` : `dark`;
  applyTheme();
  persistState();
}

/* =====================================================================
   5. VECTOR LEAFLET MAP INITIALIZATION & UPDATES
   ===================================================================== */
function getMapTokenColor(varName, fallback) {
  const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return val || fallback;
}

function updateMapThemeColors() {
  if (!mapInstance) return;
  const ncrFill = getMapTokenColor(`--map-ncr-fill`, `#FCF9F2`);
  const ncrStroke = getMapTokenColor(`--map-ncr-stroke`, `#332D2D`);
  const outFill = getMapTokenColor(`--map-out-fill`, `#EAE3D5`);
  const ringStroke = getMapTokenColor(`--map-ring`, `rgba(51,45,45,0.28)`);

  if (backdropPolyLayer) {
    backdropPolyLayer.setStyle({ fillColor: outFill, fillOpacity: 0.65, color: ncrStroke, weight: 0.5, opacity: 0.35 });
  }
  if (ncrPolyLayer) {
    ncrPolyLayer.setStyle({ fillColor: ncrFill, fillOpacity: 0.92, color: ncrStroke, weight: 2.2, dashArray: `5 4` });
  }
  if (routeLine) {
    routeLine.setStyle({ color: ncrStroke, weight: 3.5, dashArray: `8 6` });
  }
  ringLayers.forEach(function (ring) {
    ring.setStyle({ color: ringStroke, weight: 1.2, dashArray: `4 4`, fill: false });
  });
}

function initMap() {
  const container = document.getElementById(`venue-map`);
  if (!container || typeof L === `undefined`) return;

  const originLat = Number(appState.settings.originLat);
  const originLng = Number(appState.settings.originLng);
  const venueLat = Number(appState.booking.lat);
  const venueLng = Number(appState.booking.lng);

  mapInstance = L.map(`venue-map`, {
    center: [(originLat + venueLat) / 2, (originLng + venueLng) / 2],
    zoom: 11,
    minZoom: 9,
    maxZoom: 15,
    scrollWheelZoom: false
  });

  mapInstance.attributionControl.setPrefix(false);
  mapInstance.attributionControl.addAttribution(`Konfetti Studio NCR Schematic Vector Map`);

  backdropPolyLayer = L.polygon(GREATER_LUZON_BACKDROP, {
    fillColor: getMapTokenColor(`--map-out-fill`, `#EAE3D5`),
    fillOpacity: 0.65,
    color: getMapTokenColor(`--map-ncr-stroke`, `#332D2D`),
    weight: 0.5,
    opacity: 0.35
  }).addTo(mapInstance);

  ncrPolyLayer = L.polygon(NCR_POLYGON_COORDS, {
    fillColor: getMapTokenColor(`--map-ncr-fill`, `#FCF9F2`),
    fillOpacity: 0.92,
    color: getMapTokenColor(`--map-ncr-stroke`, `#332D2D`),
    weight: 2.2,
    dashArray: `5 4`
  }).addTo(mapInstance);

  [5000, 10000, 20000, 35000].forEach(function (radiusM) {
    const ring = L.circle([originLat, originLng], {
      radius: radiusM,
      color: getMapTokenColor(`--map-ring`, `rgba(51,45,45,0.28)`),
      weight: 1.2,
      dashArray: `4 4`,
      fill: false,
      interactive: false
    }).addTo(mapInstance);
    ringLayers.push(ring);
  });

  const schematicAnchors = [
    [`Quezon City`, 14.668, 121.055],
    [`Manila`, 14.595, 120.978],
    [`Makati`, 14.555, 121.022],
    [`Pasig`, 14.576, 121.078],
    [`BGC / Taguig`, 14.535, 121.058],
    [`Alabang`, 14.420, 121.040],
    [`Antipolo (Out-of-NCR)`, 14.590, 121.180],
    [`Cavite (Out-of-NCR)`, 14.415, 120.935],
    [`Bulacan (Out-of-NCR)`, 14.770, 120.970]
  ];
  schematicAnchors.forEach(function (anchor) {
    L.marker([anchor[1], anchor[2]], {
      interactive: false,
      icon: L.divIcon({
        className: ``,
        html: `<div style="font-size:12px;font-weight:700;color:var(--on-surface-variant);white-space:nowrap;pointer-events:none;">${escapeHtml(anchor[0])}</div>`,
        iconSize: [120, 20],
        iconAnchor: [60, 10]
      })
    }).addTo(mapInstance);
  });

  originMarker = L.marker([originLat, originLng], {
    icon: L.divIcon({
      className: ``,
      html: `<div class="origin-pin">Studio Origin</div>`,
      iconSize: [104, 26],
      iconAnchor: [52, 13]
    })
  }).bindTooltip(`Konfetti Studio Workshop Origin (Quezon City)`).addTo(mapInstance);

  routeLine = L.polyline([[originLat, originLng], [venueLat, venueLng]], {
    color: getMapTokenColor(`--map-ncr-stroke`, `#332D2D`),
    weight: 3.5,
    dashArray: `8 6`
  }).addTo(mapInstance);

  venueMarker = L.marker([venueLat, venueLng], {
    draggable: true,
    icon: L.divIcon({
      className: ``,
      html: `<div class="konfetti-pin" title="Drag me to your event venue">🎈</div>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    })
  }).addTo(mapInstance);

  venueMarker.on(`dragend`, function () {
    const pos = venueMarker.getLatLng();
    setVenueCoordinates(pos.lat, pos.lng);
  });

  mapInstance.on(`click`, function (ev) {
    setVenueCoordinates(ev.latlng.lat, ev.latlng.lng);
  });

  refreshMapGeometry();
}

function refreshMapGeometry() {
  if (!mapInstance || !venueMarker || !originMarker || !routeLine) return;
  const oLat = Number(appState.settings.originLat);
  const oLng = Number(appState.settings.originLng);
  const vLat = Number(appState.booking.lat);
  const vLng = Number(appState.booking.lng);

  originMarker.setLatLng([oLat, oLng]);
  venueMarker.setLatLng([vLat, vLng]);
  routeLine.setLatLngs([[oLat, oLng], [vLat, vLng]]);

  ringLayers.forEach(function (ring) {
    ring.setLatLng([oLat, oLng]);
  });

  const coordEl = document.getElementById(`coord-readout`);
  if (coordEl) {
    coordEl.textContent = `Pin: ${vLat.toFixed(4)}, ${vLng.toFixed(4)}`;
  }
}

function setVenueCoordinates(lat, lng, explicitRegion) {
  appState.booking.lat = Number(lat);
  appState.booking.lng = Number(lng);
  appState.booking.region = explicitRegion || classifyRegionAutomatically(appState.booking.venueAddress, lat, lng);
  refreshMapGeometry();
  updateAllUI();
  persistState();
}

/* =====================================================================
   6. ADDRESS AUTO-SUGGEST & AUTO-CLASSIFICATION
   ===================================================================== */
function handleAddressTyping() {
  const inputEl = document.getElementById(`input-venue-address`);
  const listEl = document.getElementById(`address-suggestions`);
  if (!inputEl || !listEl) return;

  appState.booking.venueAddress = inputEl.value;
  appState.booking.region = classifyRegionAutomatically(
    appState.booking.venueAddress,
    appState.booking.lat,
    appState.booking.lng
  );
  updateAllUI();
  persistState();

  const query = inputEl.value.trim().toLowerCase();
  if (!query) {
    listEl.classList.remove(`is-open`);
    listEl.innerHTML = ``;
    return;
  }

  const matches = VENUE_DIRECTORY.filter(function (entry) {
    return entry.label.toLowerCase().indexOf(query) !== -1;
  }).slice(0, 7);

  if (matches.length === 0) {
    listEl.classList.remove(`is-open`);
    listEl.innerHTML = ``;
    return;
  }

  listEl.innerHTML = matches.map(function (m, idx) {
    const regText = m.region === `mm` ? `Metro Manila` : `Out-of-NCR`;
    return `<button type="button" class="suggestion-item" onclick="selectAddressSuggestion(${m.lat}, ${m.lng}, '${m.region}', ${idx})" data-label="${escapeHtml(m.label)}">
      <span>${escapeHtml(m.label)}</span>
      <span class="suggestion-region">${regText}</span>
    </button>`;
  }).join(``);
  listEl.classList.add(`is-open`);
}

function selectAddressSuggestion(lat, lng, region, idx) {
  const listEl = document.getElementById(`address-suggestions`);
  const inputEl = document.getElementById(`input-venue-address`);
  if (listEl) {
    const btns = listEl.querySelectorAll(`.suggestion-item`);
    if (btns[idx] && inputEl) {
      const label = btns[idx].getAttribute(`data-label`) || ``;
      inputEl.value = label;
      appState.booking.venueAddress = label;
    }
    listEl.classList.remove(`is-open`);
  }

  setVenueCoordinates(lat, lng, region);
  if (mapInstance) {
    mapInstance.fitBounds(
      [
        [Number(appState.settings.originLat), Number(appState.settings.originLng)],
        [lat, lng]
      ],
      { padding: [45, 45], maxZoom: 13 }
    );
  }
}

document.addEventListener(`click`, function (ev) {
  const wrap = document.querySelector(`.autocomplete-wrap`);
  const listEl = document.getElementById(`address-suggestions`);
  if (wrap && listEl && !wrap.contains(ev.target)) {
    listEl.classList.remove(`is-open`);
  }
});

/* =====================================================================
   7. INPUT HANDLERS & NAVIGATION
   ===================================================================== */
function handleDetailsInput() {
  const nameEl = document.getElementById(`input-customer-name`);
  const dateEl = document.getElementById(`input-event-date`);
  const startEl = document.getElementById(`input-start-time`);
  const endEl = document.getElementById(`input-end-time`);

  if (nameEl) appState.booking.customerName = nameEl.value;
  if (dateEl) appState.booking.eventDate = dateEl.value;
  if (startEl) appState.booking.startTime = startEl.value;
  if (endEl) appState.booking.endTime = endEl.value;

  const errBox = document.getElementById(`step1-error-box`);
  if (errBox && !errBox.classList.contains(`is-hidden`)) {
    const st = getValidationStatus();
    if (st.step1Complete) errBox.classList.add(`is-hidden`);
  }

  updateAllUI();
  persistState();
}

function handleNotesInput() {
  const motifEl = document.getElementById(`input-motif`);
  const celEl = document.getElementById(`input-celebrant`);
  const notesEl = document.getElementById(`input-notes`);
  if (motifEl) appState.booking.motif = motifEl.value;
  if (celEl) appState.booking.celebrant = celEl.value;
  if (notesEl) appState.booking.notes = notesEl.value;
  updateAllUI();
  persistState();
}

function nextFromStep1() {
  const st = getValidationStatus();
  const errBox = document.getElementById(`step1-error-box`);
  const errText = document.getElementById(`step1-error-text`);

  const missingStep1 = [];
  if (!st.hasName) missingStep1.push(`Customer Name`);
  if (!st.hasDate) missingStep1.push(`Event Date`);
  if (!st.hasStart) missingStep1.push(`Event Start Time`);
  if (!st.hasEnd) missingStep1.push(`Event End Time`);
  if (!st.hasVenue) missingStep1.push(`Venue Address / Landmark`);

  if (missingStep1.length > 0) {
    if (errBox && errText) {
      errText.textContent = `Missing: ${missingStep1.join(`, `)}.`;
      errBox.classList.remove(`is-hidden`);
    }
    highlightInvalidStep1Fields(st);
    return;
  }

  if (errBox) errBox.classList.add(`is-hidden`);
  clearInvalidStep1Fields();
  goToStep(2);
}

function highlightInvalidStep1Fields(st) {
  const pairs = [
    [`input-customer-name`, st.hasName],
    [`input-event-date`, st.hasDate],
    [`input-start-time`, st.hasStart],
    [`input-end-time`, st.hasEnd],
    [`input-venue-address`, st.hasVenue]
  ];
  pairs.forEach(function (pair) {
    const el = document.getElementById(pair[0]);
    if (el) el.classList.toggle(`is-invalid`, !pair[1]);
  });
}

function clearInvalidStep1Fields() {
  [`input-customer-name`, `input-event-date`, `input-start-time`, `input-end-time`, `input-venue-address`].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove(`is-invalid`);
  });
}

function goToStep(stepNum) {
  if (stepNum === 4) {
    attemptStep4();
    return;
  }
  appState.currentStep = stepNum;
  renderStepVisibility();
  persistState();
  if (stepNum === 1 && mapInstance) {
    setTimeout(function () { mapInstance.invalidateSize(); }, 60);
  }
}

function attemptStep4() {
  const st = getValidationStatus();
  const warnBox = document.getElementById(`guardrail-warning`);
  const warnText = document.getElementById(`guardrail-warning-text`);
  if (!st.allComplete) {
    if (warnBox && warnText) {
      warnText.textContent = `Please complete: ${st.missing.join(`, `)} before viewing your summary.`;
      warnBox.classList.remove(`is-hidden`);
    }
    if (!st.step1Complete) {
      goToStep(1);
      nextFromStep1();
    } else if (!st.hasService) {
      goToStep(2);
    }
    return;
  }

  if (warnBox) warnBox.classList.add(`is-hidden`);
  appState.currentStep = 4;
  renderStepVisibility();
  renderStep4Receipt();
  persistState();
}

function renderStepVisibility() {
  [1, 2, 3, 4].forEach(function (n) {
    const panel = document.getElementById(`panel-step-${n}`);
    const tab = document.getElementById(`tab-step-${n}`);
    if (panel) panel.classList.toggle(`is-hidden`, appState.currentStep !== n);
    if (tab) tab.classList.toggle(`is-active`, appState.currentStep === n);
  });
}

/* =====================================================================
   8. STEP 2: CATEGORY TABS, SERVICES, AVAILABILITY & PROMO LOCKOUT
   ===================================================================== */
function selectServiceCategory(catId) {
  appState.activeServiceCategory = catId;
  renderServicesCatalog();
  persistState();
}

function getCategorySelectionCount(cat) {
  const sel = appState.booking.selections;
  if (cat.mode === `multi`) {
    return Array.isArray(sel.addons) ? sel.addons.length : 0;
  }
  return sel[cat.id] ? 1 : 0;
}

function renderServicesCatalog() {
  const tabsContainer = document.getElementById(`service-category-tabs`);
  const container = document.getElementById(`services-container`);
  if (!container) return;

  const sel = appState.booking.selections;
  const comboActive = Boolean(sel.combos);

  const validCat = CATALOG_CATEGORIES.find(function (c) {
    return c.id === appState.activeServiceCategory;
  });
  if (!validCat) {
    appState.activeServiceCategory = CATALOG_CATEGORIES[0].id;
  }

  const lockoutBanner = document.getElementById(`promo-lockout-banner`);
  if (lockoutBanner) lockoutBanner.classList.toggle(`is-hidden`, !comboActive);

  if (tabsContainer) {
    tabsContainer.innerHTML = CATALOG_CATEGORIES.map(function (cat) {
      const isActive = cat.id === appState.activeServiceCategory;
      const isDimmed = comboActive && cat.mode !== `combo`;
      const count = getCategorySelectionCount(cat);

      let badgeText = `${cat.items.length} options`;
      let badgeClass = `cat-tab-badge`;

      if (isDimmed) {
        badgeText = `Locked`;
      } else if (count > 0) {
        badgeText = `${count} selected`;
        badgeClass += ` is-selected-badge`;
      }

      return `<button type="button"
        role="tab"
        aria-selected="${isActive ? `true` : `false`}"
        class="cat-tab-btn ${isActive ? `is-active` : ``} ${isDimmed ? `is-dimmed` : ``}"
        onclick="selectServiceCategory('${cat.id}')">
        <span class="cat-tab-title">${escapeHtml(cat.title)}</span>
        <span class="${badgeClass}">${escapeHtml(badgeText)}</span>
      </button>`;
    }).join(``);
  }

  const activeCat = CATALOG_CATEGORIES.find(function (c) {
    return c.id === appState.activeServiceCategory;
  }) || CATALOG_CATEGORIES[0];

  const isLockedOut = comboActive && activeCat.mode !== `combo`;
  const cardsHtml = activeCat.items.map(function (item) {
    const price = Number(appState.settings.prices[item.id] || 0);
    const available = isItemAvailable(item.id);
    const imgSrc = String(appState.settings.images[item.id] || ``).trim();

    let isSelected = false;
    if (available) {
      if (activeCat.mode === `multi`) {
        isSelected = !comboActive && Array.isArray(sel.addons) && sel.addons.indexOf(item.id) !== -1;
      } else {
        isSelected = sel[activeCat.id] === item.id;
      }
    }

    const isDisabled = isLockedOut || !available;
    const statusText = !available
      ? `Currently Unavailable`
      : isLockedOut
        ? `Locked (Promo Active)`
        : isSelected
          ? `✓ Selected — Click to Remove`
          : `Click to Select`;

    const icon = escapeHtml(item.placeholderIcon || `🎈`);
    const safeName = escapeHtml(item.name);
    const mediaHtml = imgSrc
      ? `<img src="${escapeHtml(imgSrc)}" alt="${safeName} preview" class="pkg-preview-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <div class="pkg-preview-placeholder" style="display:none;">
           <span class="pkg-preview-placeholder-icon" aria-hidden="true">${icon}</span>
           <span class="pkg-preview-placeholder-label">Photo Preview Placeholder</span>
         </div>`
      : `<div class="pkg-preview-placeholder">
           <span class="pkg-preview-placeholder-icon" aria-hidden="true">${icon}</span>
           <span class="pkg-preview-placeholder-label">Photo Preview Placeholder</span>
         </div>`;

    return `<button type="button" class="pkg-card ${isSelected ? `is-selected` : ``} ${!available ? `is-unavailable` : ``}" ${isDisabled ? `disabled` : ``} onclick="toggleService('${activeCat.id}', '${activeCat.mode}', '${item.id}')">
      <div class="pkg-card-top">
        <div class="pkg-badge-row">
          <span class="balloon-badge">🎈 ${formatPeso(price)}</span>
          ${!available ? `<span class="unavailable-pill">Unavailable</span>` : ``}
        </div>
        <h4 class="pkg-name">${safeName}</h4>
        <div class="pkg-preview-frame">${mediaHtml}</div>
        <p class="pkg-desc">${escapeHtml(item.desc)}</p>
      </div>
      <div class="pkg-status">${statusText}</div>
    </button>`;
  }).join(``);

  container.innerHTML = `<div class="category-block ${isLockedOut ? `is-locked-out` : ``}" role="tabpanel">
    <div class="category-head">
      <h3 class="category-title">${escapeHtml(activeCat.title)}</h3>
      <span class="category-rule">${escapeHtml(activeCat.ruleLabel)}</span>
    </div>
    <div class="package-grid">${cardsHtml}</div>
  </div>`;
}

function toggleService(catId, mode, itemId) {
  if (!isItemAvailable(itemId)) return;
  const sel = appState.booking.selections;

  if (mode === `combo`) {
    if (sel.combos === itemId) {
      sel.combos = null;
    } else {
      sel.combos = itemId;
      sel.backdrops = null;
      sel.clowns = null;
      sel.facepaint = null;
      sel.addons = [];
    }
  } else {
    if (sel.combos) return;
    if (mode === `single`) {
      sel[catId] = sel[catId] === itemId ? null : itemId;
    } else if (mode === `multi`) {
      if (!Array.isArray(sel.addons)) sel.addons = [];
      const idx = sel.addons.indexOf(itemId);
      if (idx === -1) sel.addons.push(itemId);
      else sel.addons.splice(idx, 1);
    }
  }

  renderServicesCatalog();
  updateAllUI();
  persistState();
}

/* =====================================================================
   9. LIVE QUOTE, GUARDRAIL & STEP 4 RECEIPT
   ===================================================================== */
function updateAllUI() {
  const st = getValidationStatus();
  const transport = computeTransportDetails();
  const items = getSelectedItemsList();
  const isOut = appState.booking.region === `out`;

  /* Auto-Detected Zone Badge in Step 1 */
  const zoneBadge = document.getElementById(`detected-region-badge`);
  if (zoneBadge) {
    zoneBadge.textContent = `Auto-Detected: ${transport.regionLabel}`;
    zoneBadge.classList.toggle(`is-out-ncr`, isOut);
  }

  /* Transport readout in Step 1 */
  const feeDisp = document.getElementById(`transport-fee-display`);
  const mathDisp = document.getElementById(`transport-math-display`);
  if (feeDisp) feeDisp.textContent = `Est. ~${formatPeso(transport.total)}`;
  if (mathDisp) {
    const regName = isOut ? `Out-of-NCR` : `Metro Manila`;
    mathDisp.textContent = `Baseline ${formatPeso(transport.baseline)} (${regName}) + ${transport.km} km × ${formatPeso(transport.perKm)}/km from Workshop Origin`;
  }

  /* Checklist indicators in Sidebar */
  const chkMap = [
    [`chk-name`, st.hasName],
    [`chk-date`, st.hasDateTime],
    [`chk-venue`, st.hasVenue],
    [`chk-service`, st.hasService]
  ];
  chkMap.forEach(function (pair) {
    const el = document.getElementById(pair[0]);
    if (el) {
      el.classList.toggle(`is-ok`, pair[1]);
      el.textContent = pair[1] ? `✓` : `•`;
    }
  });

  /* Lock/Unlock Step 4 tab */
  const tab4 = document.getElementById(`tab-step-4`);
  const badge4 = document.getElementById(`step4-badge`);
  const sub4 = document.getElementById(`step4-sub`);
  if (tab4 && badge4 && sub4) {
    tab4.classList.toggle(`is-locked`, !st.allComplete);
    tab4.setAttribute(`aria-disabled`, st.allComplete ? `false` : `true`);
    badge4.textContent = st.allComplete ? `4` : `🔒`;
    sub4.textContent = st.allComplete ? `Ready to send` : `Complete Steps 1–2`;
  }

  const guardrailBox = document.getElementById(`guardrail-warning`);
  if (guardrailBox && st.allComplete) {
    guardrailBox.classList.add(`is-hidden`);
  }

  /* Sidebar itemized rows */
  const sideItemsEl = document.getElementById(`sidebar-items`);
  let servicesTotal = 0;
  if (sideItemsEl) {
    let rowsHtml = ``;
    if (items.length === 0) {
      rowsHtml += `<div class="quote-row"><span>No service selected yet</span><span>₱0</span></div>`;
    } else {
      items.forEach(function (entry) {
        servicesTotal += entry.price;
        rowsHtml += `<div class="quote-row"><span>${escapeHtml(entry.item.name)}</span><strong>${formatPeso(entry.price)}</strong></div>`;
      });
    }
    rowsHtml += `<div class="quote-row"><span>Est. Delivery (~${transport.km} km)</span><strong>Est. ~${formatPeso(transport.total)}</strong></div>`;
    sideItemsEl.innerHTML = rowsHtml;
  } else {
    items.forEach(function (entry) { servicesTotal += entry.price; });
  }

  const grandTotal = servicesTotal + transport.total;
  const sideTotalEl = document.getElementById(`sidebar-total`);
  if (sideTotalEl) sideTotalEl.textContent = `Est. ~${formatPeso(grandTotal)}`;

  if (appState.currentStep === 4) {
    if (!st.allComplete) {
      goToStep(st.step1Complete ? 2 : 1);
    } else {
      renderStep4Receipt();
    }
  }
}

function buildFormattedDmSummary() {
  const b = appState.booking;
  const transport = computeTransportDetails();
  const items = getSelectedItemsList();
  let serviceSubtotal = 0;
  const itemLines = items.map(function (entry) {
    serviceSubtotal += entry.price;
    return `- ${entry.item.name}: ${formatPeso(entry.price)}`;
  });
  const grandTotal = serviceSubtotal + transport.total;
  const formattedStart = formatTime12Hour(b.startTime);
  const formattedEnd = formatTime12Hour(b.endTime);

  const lines = [
    `KONFETTI STUDIO BOOKING INQUIRY`,
    `==============================`,
    `Customer Name: ${b.customerName.trim()}`,
    `Event Date: ${b.eventDate}`,
    `Event Time: ${formattedStart} - ${formattedEnd}`,
    `Detected Region: ${transport.regionLabel}`,
    `Venue / Landmark: ${b.venueAddress.trim()}`,
    `Map Pin: ${b.lat.toFixed(4)}, ${b.lng.toFixed(4)} (~${transport.km} km from QC origin)`,
    ``,
    `SELECTED PACKAGES & SERVICES:`,
    itemLines.join(`\n`),
    ``,
    `ESTIMATED FEES:`,
    `- Services Subtotal: ${formatPeso(serviceSubtotal)}`,
    `- Est. Transport Fee: Est. ~${formatPeso(transport.total)} (Estimate only)`,
    `- Estimated Total: Est. ~${formatPeso(grandTotal)}`,
    ``,
    `OPTIONAL DETAILS:`,
    `- Theme / Motif: ${b.motif.trim() || `Will send peg photos in Messenger`}`,
    `- Celebrant / Occasion: ${b.celebrant.trim() || `N/A`}`,
    `- Venue Access Notes: ${b.notes.trim() || `None`}`,
    ``,
    `POLICY NOTE:`,
    appState.settings.policyText,
    `(I will also send my theme/peg reference photos here in Messenger!)`
  ];
  return lines.join(`\n`);
}

function renderStep4Receipt() {
  const b = appState.booking;
  const transport = computeTransportDetails();
  const items = getSelectedItemsList();
  const formattedStart = formatTime12Hour(b.startTime);
  const formattedEnd = formatTime12Hour(b.endTime);

  const metaEl = document.getElementById(`receipt-event-meta`);
  if (metaEl) {
    metaEl.innerHTML = `
      <div><strong>Client:</strong> ${escapeHtml(b.customerName)}</div>
      <div><strong>Date &amp; Time:</strong> ${escapeHtml(b.eventDate)} &bull; ${escapeHtml(formattedStart)} – ${escapeHtml(formattedEnd)}</div>
      <div><strong>Venue (${escapeHtml(transport.regionLabel)}):</strong> ${escapeHtml(b.venueAddress)}</div>
      <div><strong>Theme / Celebrant:</strong> ${escapeHtml(b.motif || `Peg photos via Messenger`)} ${b.celebrant ? `(${escapeHtml(b.celebrant)})` : ``}</div>
      ${b.notes ? `<div><strong>Setup Notes:</strong> ${escapeHtml(b.notes)}</div>` : ``}
    `;
  }

  const tbody = document.getElementById(`receipt-items-body`);
  let serviceSubtotal = 0;
  if (tbody) {
    let rows = items.map(function (entry) {
      serviceSubtotal += entry.price;
      return `<tr>
        <td><strong>${escapeHtml(entry.item.name)}</strong><br><span style="font-size:0.9rem;color:var(--on-surface-variant);">${escapeHtml(entry.cat.title)}</span></td>
        <td>${formatPeso(entry.price)}</td>
      </tr>`;
    }).join(``);

    rows += `<tr>
      <td><strong>Estimated Delivery &amp; Transport (~${transport.km} km)</strong><br><span style="font-size:0.9rem;color:var(--on-surface-variant);">Estimate only — final fee confirmed by Kiara &amp; Symmone</span></td>
      <td>Est. ~${formatPeso(transport.total)}</td>
    </tr>`;
    rows += `<tr>
      <td style="border-bottom:0;font-family:var(--font-headline);font-size:1.3rem;"><strong>Estimated Grand Total</strong></td>
      <td style="border-bottom:0;font-family:var(--font-headline);font-size:1.3rem;">Est. ~${formatPeso(serviceSubtotal + transport.total)}</td>
    </tr>`;
    tbody.innerHTML = rows;
  }

  const badge = document.getElementById(`receipt-total-badge`);
  if (badge) badge.textContent = `🎈 Est. ~${formatPeso(serviceSubtotal + transport.total)}`;

  const policyEl = document.getElementById(`receipt-policy-text`);
  if (policyEl) policyEl.textContent = appState.settings.policyText;

  const previewEl = document.getElementById(`dm-preview-textarea`);
  if (previewEl) previewEl.value = buildFormattedDmSummary();
}

async function copySummaryAndGuide() {
  const previewEl = document.getElementById(`dm-preview-textarea`);
  const text = previewEl ? previewEl.value : buildFormattedDmSummary();
  let copied = false;

  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === `function`) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch (err) {
    copied = false;
  }

  if (!copied && previewEl) {
    previewEl.focus();
    previewEl.select();
    try {
      document.execCommand(`copy`);
      copied = true;
    } catch (err2) {
      copied = false;
    }
  }

  const banner = document.getElementById(`copy-success-banner`);
  if (banner) banner.classList.remove(`is-hidden`);
}

function selectPreviewText() {
  const previewEl = document.getElementById(`dm-preview-textarea`);
  if (previewEl) {
    previewEl.focus();
    previewEl.select();
  }
}

function downloadSummaryFile() {
  const previewEl = document.getElementById(`dm-preview-textarea`);
  const text = previewEl ? previewEl.value : buildFormattedDmSummary();
  const blob = new Blob([text], { type: `text/plain;charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement(`a`);
  a.href = url;
  a.download = `konfetti-booking-summary.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function resetBookingForm(btn) {
  if (btn && btn.dataset.armed !== `true`) {
    btn.dataset.armed = `true`;
    btn.textContent = `Click Again to Clear Form`;
    return;
  }
  if (btn) {
    btn.dataset.armed = `false`;
    btn.textContent = `Start New Booking`;
  }

  appState.activeServiceCategory = `combos`;
  appState.booking = {
    customerName: ``,
    eventDate: ``,
    startTime: ``,
    endTime: ``,
    venueAddress: ``,
    region: `mm`,
    lat: 14.6462,
    lng: 121.0285,
    selections: {
      combos: null,
      backdrops: null,
      clowns: null,
      facepaint: null,
      addons: []
    },
    motif: ``,
    celebrant: ``,
    notes: ``
  };

  const banner = document.getElementById(`copy-success-banner`);
  if (banner) banner.classList.add(`is-hidden`);

  syncInputsFromState();
  renderServicesCatalog();
  refreshMapGeometry();
  goToStep(1);
  updateAllUI();
  persistState();
}

/* =====================================================================
   10. OWNER ADMIN MODE (Password: konfetti2026)
   ===================================================================== */
function toggleOwnerGate() {
  const panel = document.getElementById(`owner-gate-section`);
  if (!panel) return;
  const isHidden = panel.classList.contains(`is-hidden`);
  panel.classList.toggle(`is-hidden`, !isHidden);
  if (isHidden) {
    panel.scrollIntoView({ behavior: `smooth`, block: `start` });
  }
}

function unlockOwnerPanel() {
  const pwdInput = document.getElementById(`owner-password-input`);
  const errBox = document.getElementById(`owner-login-error`);
  const loginBox = document.getElementById(`owner-login-box`);
  const editorBox = document.getElementById(`owner-editor-box`);

  if (!pwdInput) return;
  if (pwdInput.value.trim() === `konfetti2026`) {
    ownerUnlocked = true;
    if (errBox) errBox.classList.add(`is-hidden`);
    if (loginBox) loginBox.classList.add(`is-hidden`);
    if (editorBox) editorBox.classList.remove(`is-hidden`);
    populateOwnerEditor();
  } else {
    if (errBox) errBox.classList.remove(`is-hidden`);
  }
}

function lockOwnerPanel() {
  ownerUnlocked = false;
  const pwdInput = document.getElementById(`owner-password-input`);
  const loginBox = document.getElementById(`owner-login-box`);
  const editorBox = document.getElementById(`owner-editor-box`);
  const gate = document.getElementById(`owner-gate-section`);
  if (pwdInput) pwdInput.value = ``;
  if (loginBox) loginBox.classList.remove(`is-hidden`);
  if (editorBox) editorBox.classList.add(`is-hidden`);
  if (gate) gate.classList.add(`is-hidden`);
}

function populateOwnerEditor() {
  const s = appState.settings;
  const setVal = function (id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };
  setVal(`adm-origin-name`, s.originName);
  setVal(`adm-origin-lat`, s.originLat);
  setVal(`adm-origin-lng`, s.originLng);
  setVal(`adm-base-mm`, s.baseMm);
  setVal(`adm-base-out`, s.baseOut);
  setVal(`adm-per-km`, s.perKmRate);
  setVal(`adm-policy-text`, s.policyText);

  const grid = document.getElementById(`adm-packages-grid`);
  if (grid) {
    let html = ``;
    CATALOG_CATEGORIES.forEach(function (cat) {
      cat.items.forEach(function (item) {
        const p = Number(s.prices[item.id] || 0);
        const img = String(s.images[item.id] || ``);
        const avail = isItemAvailable(item.id);
        html += `<div class="admin-pkg-box">
          <h4 class="admin-pkg-box-title">${escapeHtml(item.name)}</h4>
          <div class="admin-pkg-row">
            <div class="field-group">
              <label class="field-label" for="adm-price-${item.id}">Price (₱)</label>
              <input type="number" min="0" step="1" id="adm-price-${item.id}" class="text-input" value="${p}">
            </div>
            <div class="field-group">
              <label class="field-label" for="adm-avail-${item.id}">Status</label>
              <select id="adm-avail-${item.id}" class="select-input">
                <option value="true" ${avail ? `selected` : ``}>Available</option>
                <option value="false" ${!avail ? `selected` : ``}>Unavailable</option>
              </select>
            </div>
          </div>
          <div class="field-group">
            <label class="field-label" for="adm-img-${item.id}">Preview Image URL / Path</label>
            <input type="text" id="adm-img-${item.id}" class="text-input" placeholder="e.g., images/joyful.jpg or https://..." value="${escapeHtml(img)}">
          </div>
        </div>`;
      });
    });
    grid.innerHTML = html;
  }
}

function saveOwnerSettings() {
  if (!ownerUnlocked) return;
  const getNum = function (id, fallback) {
    const el = document.getElementById(id);
    if (!el) return fallback;
    const n = Number(el.value);
    return isNaN(n) ? fallback : n;
  };
  const originNameEl = document.getElementById(`adm-origin-name`);
  const policyEl = document.getElementById(`adm-policy-text`);

  if (originNameEl && originNameEl.value.trim()) {
    appState.settings.originName = originNameEl.value.trim();
  }
  appState.settings.originLat = getNum(`adm-origin-lat`, DEFAULT_SETTINGS.originLat);
  appState.settings.originLng = getNum(`adm-origin-lng`, DEFAULT_SETTINGS.originLng);
  appState.settings.baseMm = Math.max(0, getNum(`adm-base-mm`, DEFAULT_SETTINGS.baseMm));
  appState.settings.baseOut = Math.max(0, getNum(`adm-base-out`, DEFAULT_SETTINGS.baseOut));
  appState.settings.perKmRate = Math.max(0, getNum(`adm-per-km`, DEFAULT_SETTINGS.perKmRate));
  if (policyEl && policyEl.value.trim()) {
    appState.settings.policyText = policyEl.value.trim();
  }

  CATALOG_CATEGORIES.forEach(function (cat) {
    cat.items.forEach(function (item) {
      appState.settings.prices[item.id] = Math.max(
        0,
        getNum(`adm-price-${item.id}`, DEFAULT_SETTINGS.prices[item.id])
      );
      const imgEl = document.getElementById(`adm-img-${item.id}`);
      if (imgEl) {
        appState.settings.images[item.id] = imgEl.value.trim();
      }
      const availEl = document.getElementById(`adm-avail-${item.id}`);
      if (availEl) {
        appState.settings.availability[item.id] = availEl.value === `true`;
      }
    });
  });

  pruneUnavailableSelections();

  const banner = document.getElementById(`owner-save-banner`);
  if (banner) banner.classList.remove(`is-hidden`);

  renderServicesCatalog();
  refreshMapGeometry();
  updateAllUI();
  persistState();
}

async function copyConfigSnippet(btn) {
  saveOwnerSettings();
  const snippet = `const DEFAULT_SETTINGS = ${JSON.stringify(appState.settings, null, 2)};`;
  try {
    await navigator.clipboard.writeText(snippet);
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = `✓ Copied DEFAULT_SETTINGS!`;
      setTimeout(function () { btn.textContent = orig; }, 2500);
    }
  } catch (err) {
    alert(`Could not access clipboard automatically. Please copy manually.`);
  }
}

function resetOwnerDefaults(btn) {
  if (!ownerUnlocked) return;
  if (btn && btn.dataset.armed !== `true`) {
    btn.dataset.armed = `true`;
    btn.textContent = `Click Again to Confirm Reset`;
    return;
  }
  if (btn) {
    btn.dataset.armed = `false`;
    btn.textContent = `Reset to Defaults`;
  }

  appState.settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
  populateOwnerEditor();

  const banner = document.getElementById(`owner-save-banner`);
  if (banner) banner.classList.remove(`is-hidden`);

  renderServicesCatalog();
  refreshMapGeometry();
  updateAllUI();
  persistState();
}

/* =====================================================================
   11. HYDRATION & INITIALIZATION
   ===================================================================== */
function syncInputsFromState() {
  const b = appState.booking;
  const setVal = function (id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val || ``;
  };
  setVal(`input-customer-name`, b.customerName);
  setVal(`input-event-date`, b.eventDate);
  setVal(`input-start-time`, b.startTime);
  setVal(`input-end-time`, b.endTime);
  setVal(`input-venue-address`, b.venueAddress);
  setVal(`input-motif`, b.motif);
  setVal(`input-celebrant`, b.celebrant);
  setVal(`input-notes`, b.notes);
}

function initApp() {
  loadSavedState();
  appState.booking.region = classifyRegionAutomatically(
    appState.booking.venueAddress,
    appState.booking.lat,
    appState.booking.lng
  );
  pruneUnavailableSelections();
  applyTheme();
  syncInputsFromState();
  renderServicesCatalog();
  initMap();

  const st = getValidationStatus();
  if (appState.currentStep === 4 && !st.allComplete) {
    appState.currentStep = st.step1Complete ? 2 : 1;
  }
  renderStepVisibility();
  updateAllUI();
}

document.addEventListener(`DOMContentLoaded`, initApp);