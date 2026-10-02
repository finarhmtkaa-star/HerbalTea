/* ============================================================
   ROCÈA HERBAL TEA — APPLICATION SCRIPT (v2 + Cek Status)
   ============================================================ */

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIHeRGwSQxcuiyNm6wfT79GQYgnuvgZ-PXoSogovvLZ7Q5Lfwr18jACwtC_CaQ2i17nA/exec";

/* ============ FORMAT RUPIAH ============ */
const rupiah = (n) => "Rp" + new Intl.NumberFormat("id-ID").format(Math.round(n));

/* ============ DATA PRODUK ============ */
const PRODUCTS = [
  {
    id: "rocea-original",
    name: "ROCÈA Original",
    price: 7000,
    size: "250 ml",
    packaging: "Botol plastik transparan 250 ml",
    tagline: "Asam segar jeruk nipis & rosella",
    desc: "Minuman rosella segar dengan perpaduan rasa asam dan menyegarkan dari jeruk nipis.",
    ingredients: ["Bunga rosella", "Jeruk nipis", "Es"],
    rating: 4.9,
    reviews: 128,
    tag: "Best Seller",
    visual: "original"
  },
  {
    id: "rocea-mojito",
    name: "ROCÈA Mojito",
    price: 12000,
    size: "400 ml",
    packaging: "Cup injection transparan 400 ml",
    tagline: "Rosella sparkling dengan Sprite",
    desc: "Minuman rosella dengan sensasi sparkling dari Sprite dan es, disajikan dalam cup takeaway 400 ml.",
    ingredients: ["Rosella", "Sprite", "Es"],
    rating: 4.8,
    reviews: 96,
    tag: "Favorit",
    visual: "mojito"
  }
];

/* ============ SVG PRODUK ============ */
function productSVG(type, size = 400) {
  const s = size;
  if (type === "original") {
    return `
    <svg class="svg-product" viewBox="0 0 400 400" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bgOrig" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFF5F7"/><stop offset="100%" stop-color="#F1E2E6"/></linearGradient>
        <linearGradient id="drinkOrig" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C63D5A"/><stop offset="45%" stop-color="#A82A47"/><stop offset="100%" stop-color="#8B1E37"/></linearGradient>
        <linearGradient id="drinkTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D6516E"/><stop offset="100%" stop-color="#B8324F"/></linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#E8E8E8"/><stop offset="50%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#D8D8D8"/></linearGradient>
        <linearGradient id="lime" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#B9D96B"/><stop offset="100%" stop-color="#7FA83A"/></linearGradient>
        <radialGradient id="shadowOrig" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-color="#B8324F" stop-opacity="0.25"/><stop offset="100%" stop-color="#B8324F" stop-opacity="0"/></radialGradient>
        <filter id="softBlur"><feGaussianBlur stdDeviation="1.2"/></filter>
      </defs>
      <rect width="400" height="400" fill="url(#bgOrig)"/>
      <ellipse cx="200" cy="345" rx="120" ry="18" fill="url(#shadowOrig)"/>
      <path d="M155 120 Q155 105 162 95 L162 70 Q162 60 172 60 L228 60 Q238 60 238 70 L238 95 Q245 105 245 120 L245 320 Q245 335 230 335 L170 335 Q155 335 155 320 Z" fill="#EAF2EE" opacity="0.55"/>
      <path d="M158 150 Q158 128 163 120 L163 100 Q163 92 171 92 L229 92 Q237 92 237 100 L237 120 Q242 128 242 150 L242 316 Q242 330 228 330 L172 330 Q158 330 158 316 Z" fill="url(#drinkOrig)"/>
      <ellipse cx="200" cy="150" rx="40" ry="7" fill="url(#drinkTop)" opacity="0.9"/>
      <rect x="175" y="180" width="26" height="26" rx="5" fill="#ffffff" opacity="0.35" transform="rotate(-12 188 193)"/>
      <rect x="205" y="215" width="22" height="22" rx="5" fill="#ffffff" opacity="0.28" transform="rotate(15 216 226)"/>
      <rect x="182" y="250" width="24" height="24" rx="5" fill="#ffffff" opacity="0.22" transform="rotate(8 194 262)"/>
      <circle cx="215" cy="160" r="14" fill="url(#lime)" opacity="0.9"/>
      <circle cx="215" cy="160" r="11" fill="#EAF7C9" opacity="0.85"/>
      <g stroke="#9EC44A" stroke-width="1.2" opacity="0.7">
        <line x1="215" y1="150" x2="215" y2="170"/><line x1="205" y1="160" x2="225" y2="160"/>
        <line x1="208" y1="153" x2="222" y2="167"/><line x1="222" y1="153" x2="208" y2="167"/>
      </g>
      <path d="M165 130 Q165 115 168 100 L168 300 Q165 320 165 130 Z" fill="#ffffff" opacity="0.35"/>
      <path d="M235 135 Q235 120 234 105 L234 300 Q235 320 235 135 Z" fill="#ffffff" opacity="0.22"/>
      <rect x="163" y="205" width="74" height="58" rx="6" fill="#FFFDFB" opacity="0.96"/>
      <text x="200" y="227" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="15" font-weight="700" fill="#B8324F">ROCÈA</text>
      <text x="200" y="240" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="7" font-weight="700" letter-spacing="1" fill="#8FA98A">HERBAL TEA</text>
      <line x1="173" y1="246" x2="227" y2="246" stroke="#EAD9DC" stroke-width="0.8"/>
      <text x="200" y="254" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="6.5" fill="#6B5A5E">Original · 250ml</text>
      <rect x="158" y="52" width="84" height="14" rx="4" fill="url(#cap)" stroke="#D0D0D0" stroke-width="0.6"/>
      <rect x="163" y="46" width="74" height="8" rx="3" fill="#F0F0F0" stroke="#D0D0D0" stroke-width="0.5"/>
      <g fill="#ffffff" opacity="0.55" filter="url(#softBlur)">
        <circle cx="170" cy="140" r="1.4"/><circle cx="176" cy="160" r="1"/><circle cx="168" cy="195" r="1.2"/>
        <circle cx="172" cy="230" r="1"/><circle cx="178" cy="270" r="1.4"/><circle cx="171" cy="300" r="1"/>
        <circle cx="230" cy="150" r="1.2"/><circle cx="234" cy="185" r="1"/><circle cx="228" cy="225" r="1.4"/>
        <circle cx="233" cy="265" r="1"/><circle cx="227" cy="300" r="1.2"/>
      </g>
      <g transform="translate(295 300)">
        <circle r="26" fill="url(#lime)"/>
        <circle r="26" fill="none" stroke="#7FA83A" stroke-width="1" opacity="0.5"/>
        <circle r="20" fill="#EAF7C9" opacity="0.9"/>
        <g stroke="#9EC44A" stroke-width="1.3" opacity="0.75">
          <line x1="0" y1="-18" x2="0" y2="18"/><line x1="-18" y1="0" x2="18" y2="0"/>
          <line x1="-13" y1="-13" x2="13" y2="13"/><line x1="13" y1="-13" x2="-13" y2="13"/>
        </g>
      </g>
      <g transform="translate(105 285)" opacity="0.9">
        <path d="M0 0 Q -14 -8 -18 6 Q -8 12 0 0 Z" fill="#7FA86B"/>
        <path d="M0 0 Q 12 -10 20 2 Q 10 10 0 0 Z" fill="#8FB87B"/>
      </g>
    </svg>`;
  }
  if (type === "mojito") {
    return `
    <svg class="svg-product" viewBox="0 0 400 400" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bgMoj" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFF5F7"/><stop offset="100%" stop-color="#EFE3E6"/></linearGradient>
        <linearGradient id="drinkMoj" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#D6516E"/><stop offset="40%" stop-color="#B8324F"/><stop offset="100%" stop-color="#8E2038"/></linearGradient>
        <linearGradient id="cupGlass" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.55"/><stop offset="15%" stop-color="#ffffff" stop-opacity="0.06"/><stop offset="85%" stop-color="#ffffff" stop-opacity="0.06"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0.5"/></linearGradient>
        <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#E8E8E8"/></linearGradient>
        <radialGradient id="shadowMoj" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-color="#B8324F" stop-opacity="0.22"/><stop offset="100%" stop-color="#B8324F" stop-opacity="0"/></radialGradient>
        <linearGradient id="bubble" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0.2"/></linearGradient>
        <filter id="blurMoj"><feGaussianBlur stdDeviation="1.1"/></filter>
      </defs>
      <rect width="400" height="400" fill="url(#bgMoj)"/>
      <ellipse cx="200" cy="350" rx="130" ry="18" fill="url(#shadowMoj)"/>
      <path d="M132 105 L268 105 L248 330 Q246 340 236 340 L164 340 Q154 340 152 330 Z" fill="url(#cupGlass)" opacity="0.7"/>
      <path d="M138 130 L262 130 L244 322 Q243 332 234 332 L166 332 Q157 332 156 322 Z" fill="url(#drinkMoj)"/>
      <ellipse cx="200" cy="130" rx="62" ry="10" fill="#D6516E" opacity="0.9"/>
      <g fill="url(#bubble)">
        <circle cx="175" cy="132" r="2.4"/><circle cx="190" cy="128" r="1.8"/>
        <circle cx="208" cy="133" r="2.6"/><circle cx="222" cy="129" r="1.6"/>
      </g>
      <rect x="170" y="160" width="30" height="30" rx="6" fill="#ffffff" opacity="0.32" transform="rotate(-14 185 175)"/>
      <rect x="205" y="195" width="26" height="26" rx="6" fill="#ffffff" opacity="0.26" transform="rotate(18 218 208)"/>
      <rect x="178" y="235" width="28" height="28" rx="6" fill="#ffffff" opacity="0.22" transform="rotate(6 192 249)"/>
      <rect x="212" y="270" width="24" height="24" rx="5" fill="#ffffff" opacity="0.18" transform="rotate(-10 224 282)"/>
      <g fill="#ffffff" opacity="0.55" filter="url(#blurMoj)">
        <circle cx="180" cy="200" r="1.6"/><circle cx="195" cy="240" r="2"/>
        <circle cx="210" cy="180" r="1.4"/><circle cx="220" cy="260" r="1.8"/>
      </g>
      <path d="M140 118 L146 118 L132 330 Q131 336 137 336 Z" fill="#ffffff" opacity="0.32"/>
      <path d="M258 118 L252 118 L246 320 Q246 328 250 328 Z" fill="#ffffff" opacity="0.2"/>
      <rect x="158" y="215" width="84" height="60" rx="7" fill="#FFFDFB" opacity="0.96"/>
      <text x="200" y="238" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="16" font-weight="700" fill="#B8324F">ROCÈA</text>
      <text x="200" y="251" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="7" font-weight="700" letter-spacing="1.2" fill="#8FA98A">HERBAL TEA</text>
      <line x1="168" y1="257" x2="232" y2="257" stroke="#EAD9DC" stroke-width="0.8"/>
      <text x="200" y="266" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-size="7" fill="#6B5A5E">Mojito · 400ml</text>
      <ellipse cx="200" cy="105" rx="70" ry="14" fill="url(#lid)" stroke="#D5D5D5" stroke-width="0.7"/>
      <path d="M130 105 Q132 78 200 78 Q268 78 270 105" fill="url(#lid)" stroke="#D5D5D5" stroke-width="0.7"/>
      <ellipse cx="200" cy="78" rx="70" ry="12" fill="#FFFFFF" stroke="#D5D5D5" stroke-width="0.7"/>
      <ellipse cx="200" cy="78" rx="9" ry="4" fill="#E4E4E4"/>
      <rect x="196" y="30" width="8" height="55" rx="4" fill="#F4C95D" transform="rotate(-12 200 55)"/>
      <rect x="198" y="30" width="3" height="55" rx="1.5" fill="#FFE49B" transform="rotate(-12 200 55)"/>
      <g fill="#ffffff" opacity="0.6" filter="url(#blurMoj)">
        <circle cx="148" cy="145" r="1.3"/><circle cx="154" cy="185" r="1"/>
        <circle cx="150" cy="225" r="1.2"/><circle cx="156" cy="265" r="1"/>
        <circle cx="250" cy="150" r="1.2"/><circle cx="246" cy="200" r="1"/>
      </g>
    </svg>`;
  }
  return "";
}

function rosellaFlowerSVG(size = 300) {
  return `
  <svg viewBox="0 0 300 300" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="petalGrad" cx="0.5" cy="0.3" r="0.7"><stop offset="0%" stop-color="#E76A85"/><stop offset="60%" stop-color="#B8324F"/><stop offset="100%" stop-color="#8E2038"/></radialGradient>
      <radialGradient id="petalGrad2" cx="0.5" cy="0.4" r="0.7"><stop offset="0%" stop-color="#D6516E"/><stop offset="100%" stop-color="#A82A47"/></radialGradient>
      <radialGradient id="center" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-color="#F4C95D"/><stop offset="100%" stop-color="#C99A2E"/></radialGradient>
    </defs>
    <g transform="translate(150 150)">
      <g fill="url(#petalGrad2)" opacity="0.9">
        <ellipse cx="0" cy="-58" rx="22" ry="40" transform="rotate(0)"/><ellipse cx="0" cy="-58" rx="22" ry="40" transform="rotate(60)"/>
        <ellipse cx="0" cy="-58" rx="22" ry="40" transform="rotate(120)"/><ellipse cx="0" cy="-58" rx="22" ry="40" transform="rotate(180)"/>
        <ellipse cx="0" cy="-58" rx="22" ry="40" transform="rotate(240)"/><ellipse cx="0" cy="-58" rx="22" ry="40" transform="rotate(300)"/>
      </g>
      <g fill="url(#petalGrad)">
        <ellipse cx="0" cy="-48" rx="17" ry="32" transform="rotate(30)"/><ellipse cx="0" cy="-48" rx="17" ry="32" transform="rotate(90)"/>
        <ellipse cx="0" cy="-48" rx="17" ry="32" transform="rotate(150)"/><ellipse cx="0" cy="-48" rx="17" ry="32" transform="rotate(210)"/>
        <ellipse cx="0" cy="-48" rx="17" ry="32" transform="rotate(270)"/><ellipse cx="0" cy="-48" rx="17" ry="32" transform="rotate(330)"/>
      </g>
      <circle r="18" fill="url(#center)"/>
      <circle r="12" fill="#8E2038"/>
    </g>
  </svg>`;
}

/* ============ STATE MANAGEMENT ============ */
const Store = {
  get(key, def) {
    try {
      const raw = localStorage.getItem("rocea_" + key);
      return raw ? JSON.parse(raw) : def;
    } catch { return def; }
  },
  set(key, val) { localStorage.setItem("rocea_" + key, JSON.stringify(val)); }
};

let cart = Store.get("cart", []);
let favorites = Store.get("favorites", []);
let orders = Store.get("orders", []);

function saveCart() { Store.set("cart", cart); updateBadges(); }
function saveFav() { Store.set("favorites", favorites); }
function saveOrders() { Store.set("orders", orders); }

/* ============ CART HELPERS ============ */
function addToCart(productId, qty = 1) {
  const item = cart.find(i => i.id === productId);
  if (item) item.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart();
  const p = PRODUCTS.find(x => x.id === productId);
  toast(`${p.name} berhasil ditambahkan ke keranjang.`, "success", "🛒");
}
function setQty(productId, qty) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  if (qty < 1) qty = 1;
  item.qty = qty;
  saveCart();
}
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  const p = PRODUCTS.find(x => x.id === productId);
  toast(`${p?.name || 'Produk'} dihapus dari keranjang.`, "info", "🗑️");
}
function cartTotal() {
  return cart.reduce((s, i) => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function updateBadges() {
  const n = cartCount();
  document.querySelectorAll("#cartBadge, #cartBadgeMobile").forEach(b => {
    b.textContent = n;
    b.style.display = n > 0 ? "grid" : "none";
  });
}

/* ============ FAVORITES ============ */
function toggleFav(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  const idx = favorites.indexOf(productId);
  if (idx > -1) { favorites.splice(idx, 1); toast(`${p.name} dihapus dari favorit.`, "info", "♡"); }
  else { favorites.push(productId); toast(`${p.name} ditambahkan ke favorit.`, "success", "♥"); }
  saveFav();
}
function isFav(id) { return favorites.includes(id); }

/* ============ TOAST ============ */
function toast(msg, type = "success", ico = "✓") {
  const c = document.getElementById("toastContainer");
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="t-ico">${ico}</span><span>${msg}</span>`;
  c.appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 350); }, 3000);
}

/* ============ ORDER ID ============ */
function generateOrderId() {
  const d = new Date();
  const dateStr = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}`;
  const prefix = `RCA-${dateStr}-`;
  const todayOrders = orders.filter(o => o.id && o.id.startsWith(prefix));
  let maxSeq = 0;
  todayOrders.forEach(o => {
    const seq = parseInt(o.id.replace(prefix, ""), 10);
    if (!isNaN(seq) && seq > maxSeq) maxSeq = seq;
  });
  return prefix + String(maxSeq + 1).padStart(3, "0");
}

/* ============ ROUTER ============ */
function getRoute() { return location.hash.replace(/^#/, "") || "/"; }
function navigate(path) { location.hash = path; }

const app = document.getElementById("app");

function render() {
  const route = getRoute();
  const parts = route.split("/").filter(Boolean);
  const page = parts[0] || "home";

  document.querySelectorAll("[data-nav]").forEach(a => {
    a.classList.toggle("active", a.dataset.nav === page ||
      (page === "produk" && parts[1]) ||
      (page === "detail" && a.dataset.nav === "produk"));
  });
  document.querySelectorAll(".desktop-nav a").forEach(a => {
    const href = a.getAttribute("href").replace(/^#\/?/, "") || "home";
    a.classList.toggle("active", href === page || (page === "home" && href === ""));
  });

  window.scrollTo({ top: 0, behavior: "auto" });

  switch (page) {
    case "home": app.innerHTML = viewHome(); break;
    case "produk": app.innerHTML = viewProducts(); break;
    case "detail": app.innerHTML = viewDetail(parts[1]); break;
    case "keranjang": app.innerHTML = viewCart(); break;
    case "checkout": app.innerHTML = viewCheckout(); break;
    case "success": app.innerHTML = viewSuccess(parts[1]); break;
    case "pesanan": app.innerHTML = viewOrders(); break;
    case "profil": app.innerHTML = viewProfile(); break;
    case "favorit": app.innerHTML = viewFavorites(); break;
    case "faq": app.innerHTML = viewFAQ(); break;
    case "kontak": app.innerHTML = viewContact(); break;
    default: app.innerHTML = viewHome();
  }
  bindEvents();
}

/* ============ VIEW: HOME ============ */
function viewHome() {
  return `
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <span class="hero-eyebrow">🌿 Herbal · Fresh · Natural</span>
        <h1>ROCÈA<br><span class="accent">Herbal Tea</span></h1>
        <p class="hero-tagline">"A Little Sip of Nature"</p>
        <p class="lead">Kesegaran rosella dalam setiap tegukan. Dibuat dari bunga rosella pilihan dengan rasa yang menyegarkan dan menyehatkan.</p>
        <div class="hero-cta">
          <a href="#/produk" class="btn btn-primary" data-link>Belanja Sekarang →</a>
          <a href="#/produk" class="btn btn-ghost" data-link>Lihat Produk</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="visual-card">
          <div class="hero-badge-float b1">🌺 100% Rosella<small>Bunga pilihan</small></div>
          <div class="hero-badge-float b2">❄️ Fresh<small>Disajikan dingin</small></div>
          ${productSVG("mojito", 460)}
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Menu Kami</span>
        <h2>Pilihan Segar untuk Harimu</h2>
        <p>Dua varian rosella yang siap menemani aktivitasmu.</p>
      </div>
      <div class="product-grid">${PRODUCTS.map(p => productCard(p)).join("")}</div>
    </div>
  </section>
  <section class="section" style="background:linear-gradient(180deg,transparent,#FBF1F3 40%,transparent)">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Kenapa Rosella?</span>
        <h2>🌺 Manfaat Bunga Rosella</h2>
        <p>Rosella bukan sekadar cantik — ia menyimpan banyak kebaikan untuk tubuh.</p>
      </div>
      <div class="benefits-grid">
        ${[
          {ico:"💗",t:"Mendukung tekanan darah sehat",d:"Rosella mengandung antosianin dan memiliki efek diuretik ringan yang dalam beberapa penelitian dikaitkan dengan penurunan tekanan darah."},
          {ico:"🌿",t:"Mendukung kadar kolesterol",d:"Kandungan senyawa alami dalam rosella berpotensi membantu menjaga kadar kolesterol dan trigliserida tetap sehat."},
          {ico:"✨",t:"Kaya antioksidan",d:"Rosella mengandung antioksidan, termasuk antosianin, yang membantu melindungi sel dari stres oksidatif akibat radikal bebas."},
          {ico:"🛡️",t:"Mendukung daya tahan tubuh",d:"Rosella mengandung vitamin C dan senyawa antioksidan yang dapat mendukung fungsi tubuh secara umum."},
          {ico:"🥗",t:"Mendukung pola hidup sehat",d:"Rosella dapat menjadi pilihan minuman rendah kalori jika diolah dengan gula secukupnya, sehingga cocok sebagai bagian dari pola makan seimbang."}
        ].map(b => `<div class="benefit-card"><div class="benefit-ico">${b.ico}</div><h3>${b.t}</h3><p>${b.d}</p></div>`).join("")}
      </div>
      <div class="disclaimer">⚠️ Manfaat rosella dapat berbeda pada setiap orang dan tidak menggantikan obat atau saran dari tenaga kesehatan.</div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Tentang Kami</span>
        <h2>Dibuat dengan Cinta dari Alam</h2>
        <p>ROCÈA Herbal Tea lahir dari kecintaan pada kesegaran alami bunga rosella.</p>
      </div>
      <div style="max-width:340px;margin:0 auto;text-align:center">
        ${rosellaFlowerSVG(280)}
      </div>
    </div>
  </section>`;
}

function productCard(p) {
  return `
  <div class="product-card" data-product-id="${p.id}">
    <div class="product-thumb" data-action="open-detail" data-id="${p.id}">
      <span class="thumb-tag">${p.tag}</span>
      <button class="fav-btn ${isFav(p.id) ? 'active' : ''}" data-action="toggle-fav" data-id="${p.id}">${isFav(p.id) ? '♥' : '♡'}</button>
      ${productSVG(p.visual, 420)}
    </div>
    <div class="product-body">
      <h3 class="product-title" data-action="open-detail" data-id="${p.id}">${p.name}</h3>
      <div class="product-meta"><span>${p.size}</span><span>·</span><span class="rating">★ ${p.rating} <span>(${p.reviews})</span></span></div>
      <div class="product-price">${rupiah(p.price)} <small>/ ${p.size}</small></div>
      <div class="qty-row">
        <div class="qty-selector">
          <button data-action="qty-minus-card" data-id="${p.id}">−</button>
          <span class="qty-val" id="cardQty-${p.id}">1</span>
          <button data-action="qty-plus-card" data-id="${p.id}">+</button>
        </div>
        <div class="subtotal-line" id="cardSub-${p.id}">= <strong>${rupiah(p.price)}</strong></div>
      </div>
      <button class="btn btn-primary btn-block btn-sm" data-action="add-to-cart-card" data-id="${p.id}">🛒 Tambah ke Keranjang</button>
    </div>
  </div>`;
}

function viewProducts(filter = "") {
  let list = PRODUCTS;
  let searchInfo = "";
  if (filter.trim()) {
    const q = filter.toLowerCase();
    list = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.ingredients.join(" ").toLowerCase().includes(q));
    if (list.length === 0) {
      return `<section class="page-head container"><h1>Produk Kami</h1><p>Pilih varian rosella favoritmu</p></section>
      <div class="container"><div class="search-info">Hasil pencarian untuk <strong>"${filter}"</strong></div>
      <div class="empty-state"><div class="ico">🔍</div><h3>Produk tidak ditemukan.</h3><p>Coba kata kunci lain seperti "original" atau "mojito".</p><a href="#/produk" class="btn btn-primary" data-link>Lihat Semua Produk</a></div></div>`;
    }
    searchInfo = `<div class="search-info">Hasil pencarian untuk <strong>"${filter}"</strong> — ${list.length} produk ditemukan</div>`;
  }
  return `
  <section class="page-head container"><h1>Produk Kami</h1><p>Pilih varian rosella favoritmu</p></section>
  <div class="container" style="padding-bottom:60px">
    ${searchInfo}
    <div class="product-grid">${list.map(p => productCard(p)).join("")}</div>
  </div>`;
}

function viewDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return `<div class="container"><div class="empty-state"><h3>Produk tidak ditemukan</h3><a href="#/produk" class="btn btn-primary" data-link>Lihat Produk</a></div></div>`;
  return `
  <div class="container">
    <div style="padding:20px 0 0"><a href="#/produk" class="btn btn-ghost btn-sm" data-link>← Kembali ke Produk</a></div>
    <div class="detail-grid">
      <div class="detail-visual" id="detailVisual" style="cursor:zoom-in">${productSVG(p.visual, 640)}</div>
      <div class="detail-info">
        <span class="thumb-tag" style="position:static;display:inline-block;margin-bottom:12px">${p.tag}</span>
        <h1>${p.name}</h1>
        <p class="sub">"${p.tagline}"</p>
        <div class="product-meta" style="margin-bottom:8px"><span class="rating">★ ${p.rating} <span>(${p.reviews} ulasan)</span></span></div>
        <div class="detail-price">${rupiah(p.price)} <small>/ ${p.size}</small></div>
        <div class="info-list">
          <div><div class="lbl">Ukuran</div><div class="val">${p.size}</div></div>
          <div><div class="lbl">Kemasan</div><div class="val">${p.packaging}</div></div>
        </div>
        <div class="detail-section"><h3>📝 Deskripsi</h3><p>${p.desc}</p></div>
        <div class="detail-section"><h3>🌿 Komposisi Utama</h3><div class="chips">${p.ingredients.map(i => `<span class="chip">${i}</span>`).join("")}</div></div>
        <div class="detail-section"><h3>ℹ️ Informasi Produk</h3><p>Disajikan dingin untuk pengalaman terbaik. Simpan di tempat sejuk dan hindari sinar matahari langsung. Habiskan segera setelah dibuka.</p></div>
        <div class="detail-section">
          <h3>Jumlah</h3>
          <div class="qty-row" style="align-items:center;margin-top:8px">
            <div class="qty-selector">
              <button data-action="qty-minus-detail" data-id="${p.id}">−</button>
              <span class="qty-val" id="detailQty">1</span>
              <button data-action="qty-plus-detail" data-id="${p.id}">+</button>
            </div>
            <div class="subtotal-line">Subtotal: <strong id="detailSub">${rupiah(p.price)}</strong></div>
          </div>
        </div>
        <div class="detail-actions">
          <div class="row">
            <button class="btn btn-ghost" data-action="toggle-fav-detail" data-id="${p.id}">${isFav(p.id) ? '♥ Favorit' : '♡ Favorit'}</button>
          </div>
          <button class="btn btn-sage btn-block" data-action="add-to-cart-detail" data-id="${p.id}">🛒 Tambah ke Keranjang</button>
          <button class="btn btn-primary btn-block" data-action="buy-now" data-id="${p.id}">⚡ Beli Sekarang</button>
        </div>
      </div>
    </div>
  </div>`;
}

function viewCart() {
  if (cart.length === 0) {
    return `<section class="page-head container"><h1>Keranjang</h1><p>Keranjang belanjamu</p></section>
    <div class="container"><div class="empty-state"><div class="ico">🛒</div><h3>Keranjangmu masih kosong</h3><p>Yuk pilih minuman rosella favoritmu dulu!</p><a href="#/produk" class="btn btn-primary" data-link>Mulai Belanja</a></div></div>`;
  }
  const total = cartTotal();
  return `
  <section class="page-head container"><h1>Keranjang</h1><p>${cartCount()} item di keranjangmu</p></section>
  <div class="container cart-layout">
    <div>
      ${cart.map(i => {
        const p = PRODUCTS.find(x => x.id === i.id);
        if (!p) return "";
        const sub = p.price * i.qty;
        return `
        <div class="cart-item">
          <div class="cart-item-img" data-action="open-detail" data-id="${p.id}" style="cursor:pointer">${productSVG(p.visual, 180)}</div>
          <div class="cart-item-info">
            <h3>${p.name}</h3>
            <div class="meta">${p.size} · ${rupiah(p.price)}/item</div>
            <div class="cart-item-bottom">
              <div class="qty-selector">
                <button data-action="cart-minus" data-id="${p.id}">−</button>
                <span class="qty-val">${i.qty}</span>
                <button data-action="cart-plus" data-id="${p.id}">+</button>
              </div>
              <div class="cart-item-subtotal">Subtotal<small>${i.qty} × ${rupiah(p.price)}</small>${rupiah(sub)}</div>
              <button class="remove-btn" data-action="cart-remove" data-id="${p.id}">🗑️ Hapus</button>
            </div>
          </div>
        </div>`;
      }).join("")}
    </div>
    <div>
      <div class="cart-summary">
        <h3>Ringkasan Belanja</h3>
        ${cart.map(i => {
          const p = PRODUCTS.find(x => x.id === i.id);
          return `<div class="summary-row"><span>${p.name} × ${i.qty}</span><span>${rupiah(p.price * i.qty)}</span></div>`;
        }).join("")}
        <div class="summary-row total"><span>Total Belanja</span><span class="amt">${rupiah(total)}</span></div>
        <button class="btn btn-primary btn-block" style="margin-top:18px" data-action="go-checkout">Checkout Sekarang →</button>
        <a href="#/produk" class="btn btn-ghost btn-block" style="margin-top:10px" data-link>Lanjut Belanja</a>
      </div>
    </div>
  </div>`;
}

function viewCheckout() {
  if (cart.length === 0) {
    return `<div class="container"><div class="empty-state"><div class="ico">🛒</div><h3>Keranjang kosong</h3><a href="#/produk" class="btn btn-primary" data-link>Mulai Belanja</a></div></div>`;
  }
  const total = cartTotal();
  return `
  <section class="page-head container"><h1>Checkout</h1><p>Lengkapi data pesananmu</p></section>
  <div class="container checkout-grid">
    <div>
      <div class="form-card">
        <h3>👤 Data Pembeli</h3>
        <div class="form-group" id="fg-nama">
          <label>Nama Lengkap <span class="req">*</span></label>
          <input type="text" id="inpNama" placeholder="Contoh: Salsabila Putri" autocomplete="name">
          <div class="err">Nama wajib diisi.</div>
        </div>
        <div class="form-group" id="fg-wa">
          <label>Nomor WhatsApp <span class="req">*</span></label>
          <input type="tel" id="inpWa" placeholder="Contoh: 081234567890" inputmode="numeric" autocomplete="tel">
          <div class="err">Nomor WhatsApp wajib diisi (min. 9 digit angka).</div>
        </div>
        <div class="form-group" id="fg-alamat">
          <label>Alamat <span class="req">*</span></label>
          <textarea id="inpAlamat" placeholder="Tulis alamat lengkap pengiriman / pengambilan..."></textarea>
          <div class="err">Alamat wajib diisi.</div>
        </div>
      </div>
      <div class="form-card">
        <h3>💳 Metode Pembayaran</h3>
        <div class="pay-options">
          <label class="pay-option"><input type="radio" name="payment" value="Tunai" checked><span class="pay-ico">💵</span><span class="pay-lbl">Tunai</span></label>
          <label class="pay-option"><input type="radio" name="payment" value="QRIS"><span class="pay-ico">📱</span><span class="pay-lbl">QRIS</span></label>
        </div>
      </div>
      <div class="form-card">
        <h3>📝 Catatan (Opsional)</h3>
        <div class="form-group"><textarea id="inpCatatan" placeholder="Contoh: Pesanan diambil pukul 16.00."></textarea></div>
      </div>
    </div>
    <div>
      <div class="cart-summary">
        <h3>Pesananmu</h3>
        ${cart.map(i => {
          const p = PRODUCTS.find(x => x.id === i.id);
          return `<div class="checkout-mini-item"><div class="cmi-img">${productSVG(p.visual, 120)}</div><div class="cmi-info"><h4>${p.name}</h4><div class="q">${i.qty} × ${rupiah(p.price)}</div></div><div class="cmi-sub">${rupiah(p.price * i.qty)}</div></div>`;
        }).join("")}
        <div class="summary-row total" style="margin-top:12px"><span>Total</span><span class="amt">${rupiah(total)}</span></div>
        <button class="btn btn-primary btn-block" style="margin-top:18px" id="btnSubmitOrder" data-action="submit-order">Buat Pesanan</button>
        <a href="#/keranjang" class="btn btn-ghost btn-block" style="margin-top:10px" data-link>← Kembali ke Keranjang</a>
      </div>
    </div>
  </div>`;
}

function viewSuccess(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return `<div class="container"><div class="empty-state"><h3>Pesanan tidak ditemukan</h3><a href="#/pesanan" class="btn btn-primary" data-link>Lihat Pesanan</a></div></div>`;
  return `
  <div class="container">
    <div class="success-wrap">
      <div class="success-ico">🎉</div>
      <h1>Pesanan Berhasil Dibuat!</h1>
      <p class="sub">Terima kasih, ${order.nama}! Pesananmu sudah kami terima.</p>
      <div class="order-id-box"><div class="lbl">ID Pesanan</div><div class="id">${order.id}</div></div>
      <div class="success-detail">
        <div class="row"><span class="k">Total Pembayaran</span><span class="v">${rupiah(order.total)}</span></div>
        <div class="row"><span class="k">Metode Pembayaran</span><span class="v">${order.pembayaran}</span></div>
        <div class="row"><span class="k">Status</span><span class="v"><span class="status-pill waiting">Menunggu Konfirmasi</span></span></div>
      </div>
      <h3 style="font-family:'Fraunces',serif;font-size:1.05rem;margin-bottom:12px;text-align:left">Ringkasan Pesanan</h3>
      <div style="text-align:left;margin-bottom:24px">
        ${order.items.map(it => `<div class="summary-row"><span>${it.nama} × ${it.qty}</span><span>${rupiah(it.subtotal)}</span></div>`).join("")}
      </div>
      <a href="#/pesanan" class="btn btn-primary btn-block" data-link>📋 Lihat Pesanan Saya</a>
      <a href="#/produk" class="btn btn-ghost btn-block" style="margin-top:10px" data-link>Kembali Belanja</a>
    </div>
  </div>`;
}

/* ============ VIEW: ORDERS (dengan tombol refresh) ============ */
function viewOrders() {
  if (orders.length === 0) {
    return `<section class="page-head container"><h1>Pesanan Saya</h1><p>Riwayat pesananmu</p></section>
    <div class="container"><div class="empty-state"><div class="ico">📋</div><h3>Belum ada pesanan</h3><p>Yuk buat pesanan pertamamu!</p><a href="#/produk" class="btn btn-primary" data-link>Mulai Belanja</a></div></div>`;
  }
  const statusMap = {"Menunggu Konfirmasi":"waiting","Diproses":"process","Siap Diambil":"ready","Selesai":"done","Dibatalkan":"cancel"};
  const sorted = [...orders].sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
  return `
  <section class="page-head container"><h1>Pesanan Saya</h1><p>${orders.length} pesanan</p></section>
  <div class="container" style="padding-bottom:60px">
    <div style="text-align:center;margin-bottom:20px">
      <button class="btn btn-sage btn-sm" id="btnRefreshStatus" data-action="refresh-status">🔄 Cek Status Terbaru</button>
      <p style="font-size:.78rem;color:var(--ink-soft);margin-top:8px">Klik untuk sinkronkan status dengan toko</p>
    </div>
    ${sorted.map(o => `
      <div class="order-card" id="order-${o.id}">
        <div class="order-head">
          <div><div class="oid">${o.id}</div><div class="odate">${o.tanggal} · ${o.jam}</div></div>
          <span class="status-pill ${statusMap[o.status] || 'waiting'}" id="status-${o.id}">${o.status}</span>
        </div>
        <div class="order-items">
          ${o.items.map(it => {
            const p = PRODUCTS.find(x => x.id === it.id);
            return `<div class="order-line"><div class="oli-img">${p ? productSVG(p.visual, 100) : ""}</div><div class="oli-info"><h4>${it.nama}</h4><div class="q">${it.qty} × ${rupiah(it.harga)}</div></div><div class="oli-price">${rupiah(it.subtotal)}</div></div>`;
          }).join("")}
        </div>
        <div class="order-foot">
          <div>
            <div style="font-size:.78rem;color:var(--ink-soft)">Metode: <strong>${o.pembayaran}</strong></div>
            ${o.catatan ? `<div style="font-size:.78rem;color:var(--ink-soft)">Catatan: ${o.catatan}</div>` : ""}
          </div>
          <div class="ototal">Total <span class="amt">${rupiah(o.total)}</span></div>
        </div>
      </div>
    `).join("")}
  </div>`;
}

/* ============ REFRESH STATUS ============ */
async function refreshStatus() {
  if (orders.length === 0) return;
  const btn = document.getElementById("btnRefreshStatus");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner" style="border-color:rgba(255,255,255,.4);border-top-color:#fff"></span> Mengecek...`;
  }
  let updated = 0, failed = 0;
  const statusMap = {"Menunggu Konfirmasi":"waiting","Diproses":"process","Siap Diambil":"ready","Selesai":"done","Dibatalkan":"cancel"};
  for (const order of orders) {
    try {
      const url = `${GOOGLE_SCRIPT_URL}?orderId=${encodeURIComponent(order.id)}`;
      const res = await fetch(url, { method: "GET" });
      const json = await res.json();
      if (json.status === "ok" && json.statusPesanan) {
        if (order.status !== json.statusPesanan) { order.status = json.statusPesanan; updated++; }
        const statusEl = document.getElementById("status-" + order.id);
        if (statusEl) {
          statusEl.className = `status-pill ${statusMap[json.statusPesanan] || 'waiting'}`;
          statusEl.textContent = json.statusPesanan;
        }
      } else { failed++; }
    } catch (err) { console.error("Gagal cek status " + order.id, err); failed++; }
  }
  Store.set("orders", orders);
  if (btn) { btn.disabled = false; btn.innerHTML = "🔄 Cek Status Terbaru"; }
  if (updated > 0) toast(`${updated} status pesanan diperbarui!`, "success", "✅");
  else if (failed > 0) toast(`Gagal cek status. Coba lagi ya.`, "error", "⚠️");
  else toast("Semua status sudah yang terbaru.", "info", "✓");
}

function viewProfile() {
  return `
  <div class="container">
    <div class="profile-hero">
      <div class="profile-avatar">🌺</div>
      <h1>ROCÈA Herbal Tea</h1>
      <p class="tag">"A Little Sip of Nature"</p>
    </div>
    <div class="profile-menu">
      <div class="profile-menu-item" data-action="nav" data-to="#/favorit"><div class="pmi-ico">♡</div><div class="pmi-txt"><h4>Favorit</h4><p>${favorites.length} produk tersimpan</p></div><span class="pmi-arrow">›</span></div>
      <div class="profile-menu-item" data-action="nav" data-to="#/pesanan"><div class="pmi-ico">📋</div><div class="pmi-txt"><h4>Pesanan Saya</h4><p>${orders.length} pesanan</p></div><span class="pmi-arrow">›</span></div>
      <div class="profile-menu-item" data-action="nav" data-to="#/faq"><div class="pmi-ico">❓</div><div class="pmi-txt"><h4>Bantuan / FAQ</h4><p>Pertanyaan yang sering diajukan</p></div><span class="pmi-arrow">›</span></div>
      <div class="profile-menu-item" data-action="nav" data-to="#/kontak"><div class="pmi-ico">📱</div><div class="pmi-txt"><h4>Hubungi Kami</h4><p>Customer service ROCÈA</p></div><span class="pmi-arrow">›</span></div>
      <a class="profile-menu-item" href="https://www.instagram.com/rocea_herbaltea/" target="_blank" rel="noopener"><div class="pmi-ico">📷</div><div class="pmi-txt"><h4>Instagram</h4><p>@rocea_herbaltea</p></div><span class="pmi-arrow">›</span></a>
    </div>
  </div>`;
}

function viewFavorites() {
  if (favorites.length === 0) {
    return `<section class="page-head container"><h1>Favorit</h1><p>Produk yang kamu sukai</p></section>
    <div class="container"><div class="empty-state"><div class="ico">♡</div><h3>Belum ada favorit</h3><p>Tekan ikon hati pada produk untuk menyimpannya di sini.</p><a href="#/produk" class="btn btn-primary" data-link>Lihat Produk</a></div></div>`;
  }
  const favProducts = PRODUCTS.filter(p => favorites.includes(p.id));
  return `<section class="page-head container"><h1>Favorit</h1><p>${favProducts.length} produk tersimpan</p></section>
  <div class="container" style="padding-bottom:60px"><div class="fav-grid">${favProducts.map(p => productCard(p)).join("")}</div></div>`;
}

function viewFAQ() {
  const faqs = [
    {q:"Apakah ROCÈA menggunakan bahan alami?", a:"Ya! ROCÈA menggunakan bunga rosella pilihan sebagai bahan utama. Untuk ROCÈA Original kami menambahkan jeruk nipis segar, sedangkan ROCÈA Mojito menggunakan Sprite untuk sensasi sparkling."},
    {q:"Berapa lama pesanan saya siap?", a:"Setelah pesanan diterima, kami akan memprosesnya. Status akan berubah menjadi 'Diproses' lalu 'Siap Diambil'. Kamu bisa cek status di halaman Pesanan Saya."},
    {q:"Metode pembayaran apa saja yang tersedia?", a:"Kami menerima pembayaran Tunai dan QRIS. Silakan pilih saat checkout."},
    {q:"Apakah bisa pesan dalam jumlah banyak?", a:"Tentu! Untuk pemesanan dalam jumlah besar (acara, catering, dll), silakan hubungi customer service kami melalui WhatsApp."},
    {q:"Bagaimana cara menyimpan ROCÈA?", a:"Simpan di tempat sejuk dan hindari sinar matahari langsung. Untuk pengalaman terbaik, habiskan segera setelah dibuka."},
    {q:"Apakah rosella aman untuk semua orang?", a:"Rosella umumnya aman dikonsumsi. Namun, manfaat dapat berbeda pada setiap orang dan tidak menggantikan obat atau saran dari tenaga kesehatan."},
  ];
  return `
  <section class="page-head container"><h1>Bantuan / FAQ</h1><p>Pertanyaan yang sering diajukan</p></section>
  <div class="container" style="max-width:760px;padding-bottom:60px">
    ${faqs.map((f,i) => `<div class="faq-item" data-faq="${i}"><div class="faq-q" data-action="toggle-faq" data-idx="${i}"><span>${f.q}</span><span class="plus">+</span></div><div class="faq-a">${f.a}</div></div>`).join("")}
    <div style="text-align:center;margin-top:32px"><p style="color:var(--ink-soft);margin-bottom:16px">Masih ada pertanyaan?</p><a href="#/kontak" class="btn btn-primary" data-link>Hubungi CS Kami</a></div>
  </div>`;
}

function viewContact() {
  const numbers = [
    {label:"CS 1", num:"0823-3723-7718", wa:"6282337237718"},
    {label:"CS 2", num:"0856-0744-8226", wa:"6285607448226"},
    {label:"CS 3", num:"0878-9733-8641", wa:"6287897338641"},
    {label:"CS 4", num:"0857-4615-1290", wa:"6285746151290"},
  ];
  return `
  <section class="page-head container"><h1>Hubungi Kami</h1><p>Kami siap membantu kamu 🌸</p></section>
  <div class="container" style="max-width:640px;padding-bottom:60px">
    <h3 style="font-size:1rem;margin-bottom:14px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:1.5px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700">WhatsApp Customer Service</h3>
    <div class="contact-list" style="margin-bottom:32px">
      ${numbers.map(n => `<a class="contact-item" href="https://wa.me/${n.wa}" target="_blank" rel="noopener"><div class="ci-ico">💬</div><div class="ci-txt"><h4>${n.label} · ${n.num}</h4><p>Klik untuk chat via WhatsApp</p></div><span style="color:var(--ink-soft)">›</span></a>`).join("")}
    </div>
    <h3 style="font-size:1rem;margin-bottom:14px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:1.5px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700">Media Sosial</h3>
    <div class="contact-list">
      <a class="contact-item ig" href="https://www.instagram.com/rocea_herbaltea/" target="_blank" rel="noopener"><div class="ci-ico">📷</div><div class="ci-txt"><h4>Instagram ROCÈA</h4><p>@rocea_herbaltea</p></div><span style="color:var(--ink-soft)">›</span></a>
    </div>
    <div class="disclaimer" style="margin-top:32px">💡 WhatsApp hanya digunakan sebagai customer service. Untuk memesan, silakan gunakan fitur checkout di website ini.</div>
  </div>`;
}

/* ============ EVENT BINDING ============ */
function bindEvents() {
  document.querySelectorAll("[data-action]").forEach(el => el.addEventListener("click", handleAction));
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.oninput = (e) => {
      const q = e.target.value;
      if (getRoute() !== "/produk") navigate("/produk");
      setTimeout(() => {
        const grid = document.querySelector(".product-grid");
        if (grid) {
          const newHTML = viewProducts(q);
          const temp = document.createElement("div");
          temp.innerHTML = newHTML;
          const newGrid = temp.querySelector(".product-grid");
          if (newGrid) grid.innerHTML = newGrid.innerHTML;
          else app.innerHTML = newHTML;
          const info = temp.querySelector(".search-info");
          const existingInfo = document.querySelector(".search-info");
          if (info && !existingInfo) grid.parentNode.insertBefore(info, grid);
          else if (info && existingInfo) existingInfo.outerHTML = info.outerHTML;
          else if (!info && existingInfo) existingInfo.remove();
          bindEvents();
        }
      }, 0);
    };
  }
  const visual = document.getElementById("detailVisual");
  if (visual) {
    visual.onclick = () => {
      const svg = visual.querySelector("svg");
      if (svg) {
        const lb = document.getElementById("lightbox");
        const lbImg = document.getElementById("lbImg");
        const svgData = new XMLSerializer().serializeToString(svg);
        lbImg.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
        lb.classList.add("show");
      }
    };
  }
}

document.getElementById("lbClose").onclick = () => document.getElementById("lightbox").classList.remove("show");
document.getElementById("lightbox").onclick = (e) => { if (e.target.id === "lightbox") e.currentTarget.classList.remove("show"); };

/* ============ ACTION HANDLER ============ */
function handleAction(e) {
  const el = e.currentTarget;
  const action = el.dataset.action;
  const id = el.dataset.id;
  switch (action) {
    case "open-detail": navigate("/detail/" + id); break;
    case "toggle-fav": e.stopPropagation(); toggleFav(id); el.classList.toggle("active", isFav(id)); el.textContent = isFav(id) ? "♥" : "♡"; break;
    case "toggle-fav-detail": toggleFav(id); el.innerHTML = isFav(id) ? '♥ Favorit' : '♡ Favorit'; break;
    case "qty-plus-card": {
      const qEl = document.getElementById("cardQty-" + id);
      let q = parseInt(qEl.textContent, 10) + 1;
      qEl.textContent = q;
      const p = PRODUCTS.find(x => x.id === id);
      document.getElementById("cardSub-" + id).innerHTML = `= <strong>${rupiah(p.price * q)}</strong>`;
      break;
    }
    case "qty-minus-card": {
      const qEl = document.getElementById("cardQty-" + id);
      let q = parseInt(qEl.textContent, 10) - 1;
      if (q < 1) q = 1;
      qEl.textContent = q;
      const p = PRODUCTS.find(x => x.id === id);
      document.getElementById("cardSub-" + id).innerHTML = `= <strong>${rupiah(p.price * q)}</strong>`;
      break;
    }
    case "add-to-cart-card": {
      const qEl = document.getElementById("cardQty-" + id);
      const q = parseInt(qEl.textContent, 10);
      addToCart(id, q);
      qEl.textContent = "1";
      const p = PRODUCTS.find(x => x.id === id);
      document.getElementById("cardSub-" + id).innerHTML = `= <strong>${rupiah(p.price)}</strong>`;
      break;
    }
    case "qty-plus-detail": {
      const qEl = document.getElementById("detailQty");
      let q = parseInt(qEl.textContent, 10) + 1;
      qEl.textContent = q;
      const p = PRODUCTS.find(x => x.id === id);
      document.getElementById("detailSub").textContent = rupiah(p.price * q);
      break;
    }
    case "qty-minus-detail": {
      const qEl = document.getElementById("detailQty");
      let q = parseInt(qEl.textContent, 10) - 1;
      if (q < 1) q = 1;
      qEl.textContent = q;
      const p = PRODUCTS.find(x => x.id === id);
      document.getElementById("detailSub").textContent = rupiah(p.price * q);
      break;
    }
    case "add-to-cart-detail": { const qEl = document.getElementById("detailQty"); const q = parseInt(qEl.textContent, 10); addToCart(id, q); break; }
    case "buy-now": { const qEl = document.getElementById("detailQty"); const q = parseInt(qEl.textContent, 10); addToCart(id, q); navigate("/keranjang"); break; }
    case "cart-plus": setQty(id, (cart.find(i => i.id === id)?.qty || 1) + 1); render(); break;
    case "cart-minus": setQty(id, (cart.find(i => i.id === id)?.qty || 1) - 1); render(); break;
    case "cart-remove": removeFromCart(id); render(); break;
    case "go-checkout": navigate("/checkout"); break;
    case "nav": navigate(el.dataset.to.replace(/^#/, "")); break;
    case "toggle-faq": el.closest(".faq-item").classList.toggle("open"); break;
    case "refresh-status": refreshStatus(); break;
    case "submit-order": submitOrder(el); break;
  }
}

/* ============ SUBMIT ORDER ============ */
async function submitOrder(btn) {
  const nama = document.getElementById("inpNama").value.trim();
  const wa = document.getElementById("inpWa").value.trim();
  const alamat = document.getElementById("inpAlamat").value.trim();
  const catatan = document.getElementById("inpCatatan").value.trim();
  const pembayaran = document.querySelector('input[name="payment"]:checked').value;
  let valid = true;
  const check = (id, condition) => {
    const fg = document.getElementById("fg-" + id);
    if (!condition) { fg.classList.add("invalid"); valid = false; } else { fg.classList.remove("invalid"); }
  };
  check("nama", nama.length > 0);
  check("wa", wa.replace(/\D/g, "").length >= 9);
  check("alamat", alamat.length > 0);
  if (!valid) { toast("Mohon lengkapi data yang wajib diisi.", "error", "⚠️"); return; }
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span> Mengirim pesanan...`;
  const now = new Date();
  const tanggal = now.toLocaleDateString("id-ID", {day:"2-digit", month:"2-digit", year:"numeric"});
  const jam = now.toLocaleTimeString("id-ID", {hour:"2-digit", minute:"2-digit"});
  const orderId = generateOrderId();
  const items = cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    return { id: p.id, nama: p.name, qty: i.qty, harga: p.price, subtotal: p.price * i.qty };
  });
  const total = items.reduce((s, it) => s + it.subtotal, 0);
  const sheetRows = items.map(it => ({
    "ID Pesanan": orderId, "Tanggal": tanggal, "Jam": jam, "Nama": nama, "No. WhatsApp": wa,
    "Alamat": alamat, "Produk": it.nama, "Jumlah": it.qty, "Harga Satuan": it.harga,
    "Subtotal": it.subtotal, "Total": total, "Pembayaran": pembayaran, "Catatan": catatan,
    "Status": "Menunggu Konfirmasi"
  }));
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ orderId, rows: sheetRows, ...sheetRows[0] })
    });
    const order = {
      id: orderId, timestamp: now.toISOString(), tanggal, jam, nama, wa, alamat,
      items, total, pembayaran, catatan, status: "Menunggu Konfirmasi"
    };
    orders.push(order);
    saveOrders();
    cart = [];
    saveCart();
    toast("Pesanan berhasil dikirim!", "success", "🎉");
    navigate("/success/" + orderId);
  } catch (err) {
    console.error(err);
    toast("Gagal mengirim pesanan. Periksa koneksi internetmu dan coba lagi.", "error", "⚠️");
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

/* ============ INIT ============ */
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => { updateBadges(); render(); });
if (document.readyState !== "loading") { updateBadges(); render(); }