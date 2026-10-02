/* ============================================================
   ROCÈA HERBAL TEA — APPLICATION SCRIPT (v2 + Cek Status)
   ============================================================ */

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyrqp22j61VKpcsVB_FDLGbYvsY8cgeF-7e0iar-vhtvB7b8Vh3Ey_sQlGR5Sf8hwPQEA/exec";

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
    list = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    if (list.length === 0) {
      return `<section class="page-head container"><h1>Produk Kami</h1><p>Pilih varian rosella favoritmu</p></section>
      <div class="container"><div class="search-info">Hasil pencarian untuk <strong>"${filter}"</strong></div>
      <div class="empty-state"><div class="ico">🔍</div><h3>Produk tidak ditemukan.</h3><p>Coba kata kunci lain.</p><a