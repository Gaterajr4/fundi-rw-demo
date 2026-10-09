/* Fundi.rw demo: shared helpers + EN/RW toggle. No real payments or data. */
const T = {
  en: { nav_find: "Find a pro", nav_join: "Join as a pro", nav_dash: "Dashboard", hero_title: "Trusted local pros in Kigali", hero_sub: "Plumbers, electricians and salons near you. ID-verified, real reviews, pay a deposit with MoMo.", what: "What do you need?", where: "Which sector?", search: "Search", cats: "Popular services", how: "How it works", h1: "Search", h1d: "Pick a service and your sector.", h2: "Compare", h2d: "See prices, badges and reviews from real jobs.", h3: "Book & pay", h3d: "Chat on WhatsApp or book with a small MoMo deposit.", trust: "Why people trust Fundi", t1: "ID-verified", t1d: "We check every pro's National ID and MoMo name.", t2: "Real reviews", t2d: "Only customers with a booked job can review.", t3: "MoMo built in", t3d: "MTN MoMo & Airtel Money deposits.", featured: "Top rated this week", view: "View profile", book: "Book now", whatsapp: "WhatsApp", from: "From", verified: "Verified", filters: "Filters", all: "All", any: "Any", minrating: "Min rating", maxprice: "Max starting price", results: "pros found", services: "Services & prices", reviews: "Reviews from real jobs", gallery: "Recent work", about: "About", jobs: "jobs", years: "yrs exp.", reply: "Replies", soon: "Soon", demo: "DEMO · fake example data · no real payments", join_t: "Grow your business with Fundi", join_s: "Free listing. Free Verified Pro for 3 months.", submit: "Submit application", pay: "Pay deposit", next: "Continue", back: "Back", home: "Home" },
  rw: { nav_find: "Shaka umufundi", nav_join: "Iyandikishe", nav_dash: "Imbonerahamwe", hero_title: "Abafundi bizewe i Kigali", hero_sub: "Abafundi b'amazi, b'amashanyarazi na salon hafi yawe. Bagenzuwe, ibitekerezo nyabyo, wishyura ingwate na MoMo.", what: "Ukeneye iki?", where: "Uri mu wuhe murenge?", search: "Shakisha", cats: "Serivisi zikunzwe", how: "Uko bikora", h1: "Shakisha", h1d: "Hitamo serivisi n'umurenge wawe.", h2: "Gereranya", h2d: "Reba ibiciro n'ibitekerezo by'akazi nyako.", h3: "Tumiza wishyure", h3d: "Vugana kuri WhatsApp cyangwa wishyure ingwate na MoMo.", trust: "Impamvu Fundi yizewe", t1: "Indangamuntu yagenzuwe", t1d: "Tugenzura indangamuntu na MoMo bya buri mufundi.", t2: "Ibitekerezo nyabyo", t2d: "Abakiliya bakoresheje gusa ni bo batanga igitekerezo.", t3: "MoMo irimo", t3d: "Ingwate na MTN MoMo cyangwa Airtel Money.", featured: "Abahize abandi iki cyumweru", view: "Reba umwirondoro", book: "Tumiza", whatsapp: "WhatsApp", from: "Guhera", verified: "Yagenzuwe", filters: "Muyunguruzi", all: "Byose", any: "Icyo ari cyo cyose", minrating: "Amanota make", maxprice: "Igiciro kinini", results: "abafundi babonetse", services: "Serivisi n'ibiciro", reviews: "Ibitekerezo by'akazi nyako", gallery: "Akazi ka vuba", about: "Ibyerekeye", jobs: "akazi", years: "imyaka", reply: "Asubiza", soon: "Vuba", demo: "IGERAGEZA · amakuru y'impimbano · nta kwishyura nyako", join_t: "Agura ubucuruzi bwawe na Fundi", join_s: "Kwiyandikisha ni ubuntu. Verified Pro ubuntu amezi 3.", submit: "Ohereza", pay: "Ishyura ingwate", next: "Komeza", back: "Subira inyuma", home: "Ahabanza" }
};
const lang = () => localStorage.getItem("fundi_lang") || "en";
const t = k => (T[lang()] && T[lang()][k]) || T.en[k] || k;
function applyLang() {
  document.documentElement.lang = lang() === "rw" ? "rw" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll(".lang-btn").forEach(b => b.textContent = lang() === "en" ? "🇷🇼 RW" : "🇬🇧 EN");
  if (window.onLang) window.onLang();
}
function toggleLang() { localStorage.setItem("fundi_lang", lang() === "en" ? "rw" : "en"); applyLang(); }
const rwf = n => n.toLocaleString("en-US") + " RWF";
const catName = id => { const c = FUNDI.categories.find(c => c.id === id); return c ? c[lang()] : id; };
const catIcon = id => (FUNDI.categories.find(c => c.id === id) || {}).icon || "";
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const getProvider = id => FUNDI.providers.find(p => p.id == id);
const qs = k => new URLSearchParams(location.search).get(k);
const waLink = p => `https://wa.me/${p.phone}?text=${encodeURIComponent("Muraho! I found you on Fundi.rw (demo). Are you available?")}`;
const avatar = (p, size = "") => `<div class="avatar ${size}" style="background:${p.color}">${p.initials}</div>`;
const ICON = {
  shield: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>'
};
function providerCard(p) {
  return `<article class="card pcard">
    <a class="pcard-top" href="provider.html?id=${p.id}">
      ${avatar(p)}
      <div class="pcard-info">
        <h3>${p.name}</h3>
        <div class="muted small">${catIcon(p.category)} ${catName(p.category)}</div>
        <div class="rating"><span class="stars">${stars(p.rating)}</span> <b>${p.rating}</b> <span class="muted">(${p.reviews})</span></div>
      </div>
    </a>
    <div class="tags">${p.verified ? `<span class="badge ok">${ICON.shield} ${t("verified")}</span>` : ""}${p.rdb ? '<span class="badge">RDB</span>' : ""}<span class="badge plain">${ICON.pin} ${p.sectors.slice(0, 2).join(", ")}</span></div>
    <div class="pcard-foot">
      <div><span class="muted small">${t("from")}</span><div class="price">${rwf(p.from)}</div></div>
      <div class="btn-row"><a class="btn wa sm" target="_blank" rel="noopener" href="${waLink(p)}">${ICON.wa}<span>${t("whatsapp")}</span></a><a class="btn sm" href="provider.html?id=${p.id}">${t("view")}</a></div>
    </div>
  </article>`;
}
function header() {
  const here = location.pathname.split("/").pop() || "index.html";
  const a = (h, k) => `<a href="${h}" class="${here === h ? "active" : ""}" data-i18n="${k}">${t(k)}</a>`;
  return `<div class="demo-bar" data-i18n="demo">${t("demo")}</div>
  <header class="topbar"><div class="wrap topbar-in">
    <a href="index.html" class="logo"><span class="logo-mark">F</span><span>Fundi<span class="dot">.rw</span></span></a>
    <nav class="nav">${a("search.html", "nav_find")}${a("join.html", "nav_join")}${a("dashboard.html", "nav_dash")}</nav>
    <button class="lang-btn" onclick="toggleLang()" aria-label="Language">🇷🇼 RW</button>
  </div></header>`;
}
function footer() {
  return `<footer class="footer"><div class="wrap">
    <div class="logo"><span class="logo-mark">F</span><span>Fundi<span class="dot">.rw</span></span></div>
    <p class="muted small">Trusted local pros in Kigali. Clickable demo only: all providers, reviews and phone numbers are fake examples. No payments are processed.</p>
    <p class="small"><a href="index.html" data-i18n="home">Home</a> · <a href="search.html" data-i18n="nav_find">Find a pro</a> · <a href="join.html" data-i18n="nav_join">Join</a> · <a href="dashboard.html" data-i18n="nav_dash">Dashboard</a></p>
  </div></footer>`;
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", footer());
  if (window.init) window.init();
  applyLang();
});
/* PWA: offline service worker (relative path so it works under /fundi-rw-demo/) */
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => { navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch(() => {}); });
}
/* iPhone install hint: only iOS Safari, not already installed, dismissible */
function maybeIosHint() {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|GSA|FBAN|FBAV|Instagram/.test(ua);
  const standalone = navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
  if (!isIOS || !isSafari || standalone || localStorage.getItem("fundi_ios_hint") === "x") return;
  const el = document.createElement("div");
  el.className = "ios-hint";
  el.setAttribute("role", "note");
  el.innerHTML = 'Install on iPhone: tap <b>Share</b> <span aria-hidden="true">⬆️</span> then <b>Add to Home Screen</b>.<button class="x" aria-label="Dismiss">×</button>';
  el.querySelector(".x").onclick = () => { localStorage.setItem("fundi_ios_hint", "x"); el.remove(); };
  document.body.appendChild(el);
}
document.addEventListener("DOMContentLoaded", maybeIosHint);
