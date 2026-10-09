/* Gura.rw demo: shared helpers + EN/RW toggle. No real payments or data. */
const T = {
  en: { nav_find: "Find a pro", nav_join: "Join as a pro", nav_dash: "Dashboard", hero_title: "Trusted local pros in Kigali", hero_sub: "Plumbers, electricians and salons near you. ID-verified, real reviews, pay a deposit with MoMo.", what: "What do you need?", where: "Which sector?", search: "Search", cats: "Popular services", how: "How it works", h1: "Search", h1d: "Pick a service and your sector.", h2: "Compare", h2d: "See prices, badges and reviews from real jobs.", h3: "Book & pay", h3d: "Chat on WhatsApp or book with a small MoMo deposit.", trust: "Why people trust Gura", t1: "ID-verified", t1d: "We check every pro's National ID and MoMo name.", t2: "Real reviews", t2d: "Only customers with a booked job can review.", t3: "MoMo built in", t3d: "MTN MoMo & Airtel Money deposits.", featured: "Top rated this week", view: "View profile", book: "Book now", whatsapp: "WhatsApp", from: "From", verified: "Verified", filters: "Filters", all: "All", any: "Any", minrating: "Min rating", maxprice: "Max starting price", results: "pros found", services: "Services & prices", reviews: "Reviews from real jobs", gallery: "Recent work", about: "About", jobs: "jobs", years: "yrs exp.", reply: "Replies", soon: "Soon", demo: "DEMO · fake example data · no real payments", join_t: "Grow your business with Gura", join_s: "Free listing. Free Verified Pro for 3 months.", submit: "Submit application", pay: "Pay deposit", next: "Continue", back: "Back", home: "Home", tab_home: "Home", tab_services: "Services", tab_pros: "Pros", tab_how: "How", tab_join: "Join", all_services: "All services", all_services_s: "Pick a service to see verified pros near you.", pros_t: "Top pros", pros_s: "Highest-rated pros in Kigali this week.", how_s: "Find, compare and book a trusted pro in 3 steps.", quick: "Popular now", see_all: "See all", pros_word: "pros", cta_find: "Find a pro now", sort_rating: "Top rated", sort_price: "Lowest price", sort_reviews: "Most reviews", tab_jobs: "Jobs", jobs_t: "Jobs & gigs", jobs_s: "Example job ads from pros and households in Kigali.", apply_wa: "Apply via WhatsApp", ago: "ago", per_day: "/day", per_month: "/month", per_hour: "/hour", deals_t: "Deals near you", ends: "Ends", trending_t: "Trending this week", how_link: "How Gura works", all_types: "All types", stats_pros: "verified pros", stats_rating: "avg rating", stats_reply: "reply time", stats_jobs: "open jobs", example: "Example", jobs_found: "jobs", job_type: "Type" },
  rw: { nav_find: "Shaka umufundi", nav_join: "Iyandikishe", nav_dash: "Imbonerahamwe", hero_title: "Abafundi bizewe i Kigali", hero_sub: "Abafundi b'amazi, b'amashanyarazi na salon hafi yawe. Bagenzuwe, ibitekerezo nyabyo, wishyura ingwate na MoMo.", what: "Ukeneye iki?", where: "Uri mu wuhe murenge?", search: "Shakisha", cats: "Serivisi zikunzwe", how: "Uko bikora", h1: "Shakisha", h1d: "Hitamo serivisi n'umurenge wawe.", h2: "Gereranya", h2d: "Reba ibiciro n'ibitekerezo by'akazi nyako.", h3: "Tumiza wishyure", h3d: "Vugana kuri WhatsApp cyangwa wishyure ingwate na MoMo.", trust: "Impamvu Gura yizewe", t1: "Indangamuntu yagenzuwe", t1d: "Tugenzura indangamuntu na MoMo bya buri mufundi.", t2: "Ibitekerezo nyabyo", t2d: "Abakiliya bakoresheje gusa ni bo batanga igitekerezo.", t3: "MoMo irimo", t3d: "Ingwate na MTN MoMo cyangwa Airtel Money.", featured: "Abahize abandi iki cyumweru", view: "Reba umwirondoro", book: "Tumiza", whatsapp: "WhatsApp", from: "Guhera", verified: "Yagenzuwe", filters: "Muyunguruzi", all: "Byose", any: "Icyo ari cyo cyose", minrating: "Amanota make", maxprice: "Igiciro kinini", results: "abafundi babonetse", services: "Serivisi n'ibiciro", reviews: "Ibitekerezo by'akazi nyako", gallery: "Akazi ka vuba", about: "Ibyerekeye", jobs: "akazi", years: "imyaka", reply: "Asubiza", soon: "Vuba", demo: "IGERAGEZA · amakuru y'impimbano · nta kwishyura nyako", join_t: "Agura ubucuruzi bwawe na Gura", join_s: "Kwiyandikisha ni ubuntu. Verified Pro ubuntu amezi 3.", submit: "Ohereza", pay: "Ishyura ingwate", next: "Komeza", back: "Subira inyuma", home: "Ahabanza", tab_home: "Ahabanza", tab_services: "Serivisi", tab_pros: "Abafundi", tab_how: "Uko bikora", tab_join: "Iyandikishe", all_services: "Serivisi zose", all_services_s: "Hitamo serivisi urebe abafundi bagenzuwe hafi yawe.", pros_t: "Abafundi b'indashyikirwa", pros_s: "Abafundi bafite amanota menshi i Kigali iki cyumweru.", how_s: "Shaka, gereranya kandi utumize umufundi wizewe mu ntambwe 3.", quick: "Bikunzwe ubu", see_all: "Reba byose", pros_word: "abafundi", cta_find: "Shaka umufundi ubu", sort_rating: "Amanota menshi", sort_price: "Igiciro gito", sort_reviews: "Ibitekerezo byinshi", tab_jobs: "Akazi", jobs_t: "Akazi n'ibiraka", jobs_s: "Ingero z'amatangazo y'akazi i Kigali.", apply_wa: "Saba kuri WhatsApp", ago: "ishize", per_day: "/umunsi", per_month: "/ukwezi", per_hour: "/isaha", deals_t: "Poromosiyo hafi yawe", ends: "Birangira", trending_t: "Bigezweho iki cyumweru", how_link: "Uko Gura ikora", all_types: "Ubwoko bwose", stats_pros: "abafundi bagenzuwe", stats_rating: "amanota", stats_reply: "igihe cyo gusubiza", stats_jobs: "akazi gahari", example: "Urugero", jobs_found: "akazi", job_type: "Ubwoko" }
};
const lang = () => localStorage.getItem("gura_lang") || "en";
const t = k => (T[lang()] && T[lang()][k]) || T.en[k] || k;
function applyLang() {
  document.documentElement.lang = lang() === "rw" ? "rw" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll(".lang-btn").forEach(b => b.textContent = lang() === "en" ? "🇷🇼 RW" : "🇬🇧 EN");
  if (window.onLang) window.onLang();
}
function toggleLang() { localStorage.setItem("gura_lang", lang() === "en" ? "rw" : "en"); applyLang(); }
const rwf = n => n.toLocaleString("en-US") + " RWF";
const catName = id => { const c = GURA.categories.find(c => c.id === id); return c ? c[lang()] : id; };
const catIcon = id => (GURA.categories.find(c => c.id === id) || {}).icon || "";
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
const getProvider = id => GURA.providers.find(p => p.id == id);
const qs = k => new URLSearchParams(location.search).get(k);
const waLink = p => `https://wa.me/${p.phone}?text=${encodeURIComponent("Muraho! I found you on Gura.rw (demo). Are you available?")}`;
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
const TAB_ICON = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  services: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/></svg>',
  pros: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',
  how: '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5z"/><path d="m8.5 12 2.5 2.5 4.5-5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  jobs: '<svg viewBox="0 0 24 24"><path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm3 4v2h10V8zm0 4v2h10v-2zm0 4v2h6v-2z"/></svg>',
  post: '<svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>',
  saved: '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.7 4.5c2.2 0 3.6 1.2 5.3 3.1 1.7-1.9 3.1-3.1 5.3-3.1 3.7 0 5.8 3.8 4.3 7.2C19.5 16.4 12 21 12 21z"/></svg>',
  account: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',
  join: '<svg viewBox="0 0 24 24"><path d="M10 3h4a2 2 0 0 1 2 2v2h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h4V5a2 2 0 0 1 2-2zm0 2v2h4V5z"/></svg>'
};
const TABS = [
  { k: "home", href: "index.html", label: "tab_home", match: ["index.html", ""] },
  { k: "services", href: "categories.html", label: "tab_cats", match: ["categories.html", "category.html", "ad.html", "seller.html", "services.html", "search.html", "providers.html", "provider.html", "book.html", "jobs.html"] },
  { k: "post", href: "post.html", label: "tab_post", match: ["post.html"], center: true },
  { k: "saved", href: "favourites.html", label: "tab_saved", match: ["favourites.html"] },
  { k: "account", href: "account.html", label: "tab_account", match: ["account.html", "messages.html", "join.html", "dashboard.html", "how.html"] }
];
const herePage = () => location.pathname.split("/").pop() || "index.html";
const isTabRoot = () => ["index.html", "", "categories.html", "post.html", "favourites.html", "account.html"].includes(herePage());
function header() {
  const back = isTabRoot() ? "" : `<button class="back-btn" onclick="history.length>1?history.back():location.href='index.html'" aria-label="Back">‹</button>`;
  return `<div class="demo-bar" data-i18n="demo">${t("demo")}</div>
  <header class="topbar"><div class="wrap topbar-in">${back}
    <a href="index.html" class="logo"><span class="logo-mark">G</span><span class="logo-txt"><span>Gura<span class="dot">.rw</span></span><small data-i18n="tagline">${t("tagline")}</small></span></a>
    <a href="category.html" class="how-btn" aria-label="Search" title="Search">🔍</a>
    <button class="lang-btn" onclick="toggleLang()" aria-label="Language">🇷🇼 RW</button>
  </div></header>`;
}
const L2 = (o, k) => (lang() === "rw" && o[k + "Rw"]) || o[k];
function jobCard(j) {
  const wa = `https://wa.me/${j.phone}?text=${encodeURIComponent("Muraho! I saw your job ad '" + j.title + "' on Gura.rw (demo). Is it still open?")}`;
  return `<article class="card job">
    <div class="job-top"><div class="job-ico">${catIcon(j.cat) || "💼"}</div><div style="min-width:0"><h3>${L2(j, "title")}</h3><div class="muted small">${j.by}</div></div></div>
    <div class="tags"><span class="badge plain">${ICON.pin} ${j.sector}</span><span class="badge">${j.type}</span><span class="badge plain">🕒 ${j.posted} ${t("ago")}</span></div>
    <div class="job-foot"><div class="price">${rwf(j.pay)}<span class="muted small" style="font-weight:600">${t("per_" + j.per)}</span></div><a class="btn wa sm" target="_blank" rel="noopener" href="${wa}">${ICON.wa}<span>${t("apply_wa")}</span></a></div>
  </article>`;
}
function tabbar() {
  const h = herePage();
  return `<nav class="tabbar" aria-label="Main">${TABS.map(x => {
    const on = x.match.includes(h);
    if (x.center) return `<a href="${x.href}" class="tab tab-post${on ? " active" : ""}"${on ? ' aria-current="page"' : ""}><span class="plus">${TAB_ICON[x.k]}</span><span data-i18n="${x.label}">${t(x.label)}</span></a>`;
    const badge = x.k === "account" && unread() ? `<i class="tbadge">${unread()}</i>` : x.k === "saved" && favs().length ? `<i class="tbadge g">${favs().length}</i>` : "";
    return `<a href="${x.href}" class="tab${on ? " active" : ""}"${on ? ' aria-current="page"' : ""}>${TAB_ICON[x.k]}${badge}<span data-i18n="${x.label}">${t(x.label)}</span></a>`;
  }).join("")}</nav>`;
}
function footer() {
  return `<footer class="footer mini"><div class="wrap"><p class="small muted">Gura.rw · buy, sell &amp; hire in Rwanda · clickable demo. All ads, sellers, providers, reviews and phone numbers are fake examples. No payments are processed.</p></div></footer>`;
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", header());
  if (!document.body.classList.contains("no-footer")) document.body.insertAdjacentHTML("beforeend", footer());
  document.body.insertAdjacentHTML("beforeend", tabbar());
  document.body.classList.add("has-tabs");
  if (window.init) window.init();
  applyLang();
});
/* PWA: offline service worker (relative path so it works under /gura-rw-demo/) */
const inNativeApp = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol) && !inNativeApp) {
  window.addEventListener("load", () => { navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch(() => {}); });
}
/* iPhone install hint: only iOS Safari, not already installed, dismissible */
function maybeIosHint() {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|GSA|FBAN|FBAV|Instagram/.test(ua);
  const standalone = navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
  if (inNativeApp || !isIOS || !isSafari || standalone || localStorage.getItem("gura_ios_hint") === "x") return;
  const el = document.createElement("div");
  el.className = "ios-hint";
  el.setAttribute("role", "note");
  el.innerHTML = 'Install on iPhone: tap <b>Share</b> <span aria-hidden="true">⬆️</span> then <b>Add to Home Screen</b>.<button class="x" aria-label="Dismiss">×</button>';
  el.querySelector(".x").onclick = () => { localStorage.setItem("gura_ios_hint", "x"); el.remove(); };
  document.body.appendChild(el);
}
document.addEventListener("DOMContentLoaded", maybeIosHint);

/* ===== v3: general marketplace (classifieds) ===== */
Object.assign(T.en, { tagline: "Buy, sell & hire in Rwanda", m_hero: "Buy, sell & hire anything in Rwanda", m_hero_s: "Phones, cars, houses, furniture, farm produce, jobs and trusted pros. Free to post.", search_ph: "I'm looking for…", all_rwanda: "All Rwanda", kigali: "Kigali", other_districts: "Other districts", categories: "Categories", all_cats: "All categories", trending_ads: "Trending ads", recent: "Recently posted", tab_cats: "Categories", tab_post: "Sell", tab_saved: "Saved", tab_account: "Account", post_ad: "Post ad", ads_word: "ads", price_min: "Min price", price_max: "Max price", condition: "Condition", cond_new: "Brand new", cond_used: "Used", sort: "Sort by", sort_new: "Newest first", sort_low: "Price: low to high", sort_high: "Price: high to low", verified_only: "Verified sellers only", reset: "Reset", location: "Location", found: "ads found", no_ads: "No ads match. Try another location or widen the price.", negotiable: "Negotiable", details: "Details", description: "Description", seller: "Seller", member_since: "On Gura since", reply_time: "Typically replies", call: "Call", chat: "Chat", safety: "Safety tips", s1: "Don't pay in advance, not even for delivery.", s2: "Meet in a busy public place, in daylight.", s3: "Check the item properly before you pay.", s4: "Never share your MoMo PIN or SMS codes.", similar: "Similar ads", report: "Report this ad", reported: "Thanks. Our team will review this ad (demo).", saved_t: "Saved ads", saved_s: "Tap the ♡ on any ad to keep it here.", saved_empty: "Nothing saved yet.", browse: "Browse ads", messages: "Messages", type_msg: "Write a message…", send: "Send", seller_ads: "Ads from this seller", feedback: "feedback", view_seller: "View profile", post_t: "Post a free ad", p_cat: "Category", p_det: "Details", p_photos: "Photos", p_price: "Price", p_contact: "Location & phone", ad_title: "Title", publish: "Publish ad", posted_ok: "Your ad is live (demo)", posted_s: "Saved on this phone only. Nobody else can see it.", view_ad: "View my ad", post_another: "Post another", my_ads: "My ads", book_pro: "Book a verified pro with a MoMo deposit", jobs_banner: "Open the full jobs board", see_pros: "See pros", subcats: "Subcategories", subcat: "Subcategory", filters_n: "Filters & sort", top: "TOP", phone: "Phone", choose: "Choose", account_s: "Demo account · nothing is stored on a server", saved_word: "saved", report_q: "Why are you reporting this ad?", cancel: "Cancel", copy_ok: "Number shown (demo).", unread_w: "unread", new_ad: "NEW" });
Object.assign(T.rw, { tagline: "Gura, gurisha, shaka abakozi mu Rwanda", m_hero: "Gura, gurisha kandi ushake abakozi mu Rwanda", m_hero_s: "Telefone, imodoka, inzu, ibikoresho, imyaka, akazi n'abafundi bizewe. Gutangaza ni ubuntu.", search_ph: "Ndashaka…", all_rwanda: "U Rwanda rwose", kigali: "Kigali", other_districts: "Utundi turere", categories: "Ibyiciro", all_cats: "Ibyiciro byose", trending_ads: "Amatangazo akunzwe", recent: "Ibyatangajwe vuba", tab_cats: "Ibyiciro", tab_post: "Gurisha", tab_saved: "Ibyabitswe", tab_account: "Konti", post_ad: "Tangaza", ads_word: "amatangazo", price_min: "Igiciro gito", price_max: "Igiciro kinini", condition: "Imimerere", cond_new: "Gishya", cond_used: "Cyakoreshejwe", sort: "Tondeka", sort_new: "Ibishya mbere", sort_low: "Igiciro: gito → kinini", sort_high: "Igiciro: kinini → gito", verified_only: "Abacuruzi bagenzuwe gusa", reset: "Siba", location: "Aho biherereye", found: "amatangazo abonetse", no_ads: "Nta tangazo ribonetse. Gerageza ahandi cyangwa wongere igiciro.", negotiable: "Biraganirwa", details: "Ibiranga", description: "Ibisobanuro", seller: "Umucuruzi", member_since: "Kuri Gura kuva", reply_time: "Akunze gusubiza", call: "Hamagara", chat: "Ganira", safety: "Inama z'umutekano", s1: "Ntukishyure mbere, n'iyo byaba ari ukukuzanira.", s2: "Muhurire ahantu hari abantu benshi, ku manywa.", s3: "Banza urebe neza ikintu mbere yo kwishyura.", s4: "Ntuzigere utanga umubare w'ibanga wa MoMo.", similar: "Amatangazo asa", report: "Menyesha iri tangazo", reported: "Murakoze. Tuzasuzuma iri tangazo (igeragezwa).", saved_t: "Ibyo wabitse", saved_s: "Kanda ♡ ku itangazo kugira ngo uribike hano.", saved_empty: "Nta cyo urabika.", browse: "Reba amatangazo", messages: "Ubutumwa", type_msg: "Andika ubutumwa…", send: "Ohereza", seller_ads: "Amatangazo y'uyu mucuruzi", feedback: "ibitekerezo", view_seller: "Reba umwirondoro", post_t: "Tangaza ku buntu", p_cat: "Icyiciro", p_det: "Ibiranga", p_photos: "Amafoto", p_price: "Igiciro", p_contact: "Aho uri na telefone", ad_title: "Umutwe", publish: "Tangaza", posted_ok: "Itangazo ryawe ryagiyeho (igeragezwa)", posted_s: "Ribitswe kuri iyi telefone gusa. Nta wundi uribona.", view_ad: "Reba itangazo ryanjye", post_another: "Tangaza irindi", my_ads: "Amatangazo yanjye", book_pro: "Tumiza umufundi wagenzuwe, wishyure ingwate na MoMo", jobs_banner: "Fungura urubuga rw'akazi rwose", see_pros: "Reba abafundi", subcats: "Ibyiciro bito", subcat: "Icyiciro gito", filters_n: "Muyunguruzi no gutondeka", top: "TOP", phone: "Telefone", choose: "Hitamo", account_s: "Konti y'igeragezwa · nta kibikwa kuri seriveri", saved_word: "byabitswe", report_q: "Kuki umenyesha iri tangazo?", cancel: "Reka", copy_ok: "Nimero yagaragajwe (igeragezwa).", unread_w: "bitarasomwa", new_ad: "GISHYA" });

const mcat = id => GURA.mcats.find(c => c.id === id);
const mcatName = id => { const c = mcat(id); return c ? c[lang()] : id; };
const subName = (cid, sid) => { const c = mcat(cid); const s = c && c.subs.find(x => x[0] === sid); return s ? (lang() === "rw" ? s[2] : s[1]) : sid; };
const getSeller = id => GURA.sellers.find(s => s.id == id);
const myAds = () => { try { return JSON.parse(localStorage.getItem("gura_my_ads") || "[]"); } catch (e) { return []; } };
const allAds = () => myAds().concat(GURA.ads);
const getAd = id => allAds().find(a => a.id == id);
const favs = () => { try { return JSON.parse(localStorage.getItem("gura_favs") || "[]"); } catch (e) { return []; } };
const isFav = id => favs().includes(+id);
function toggleFav(id, ev) {
  if (ev) { ev.preventDefault(); ev.stopPropagation(); }
  id = +id; let f = favs(); f = f.includes(id) ? f.filter(x => x !== id) : [id].concat(f);
  localStorage.setItem("gura_favs", JSON.stringify(f));
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(b => { b.classList.toggle("on", f.includes(id)); b.textContent = f.includes(id) ? "♥" : "♡"; });
  const tb = document.querySelector('.tabbar'); if (tb) tb.outerHTML = tabbar();
  if (window.onFav) window.onFav();
}
function threads() { try { return JSON.parse(localStorage.getItem("gura_threads") || "null"); } catch (e) { return null; } }
function seedThreads() {
  let th = threads();
  if (!th) {
    th = [
      { ad: 301, unread: 1, msgs: [{ me: true, txt: "Hello, is the iPhone 13 still available?", at: "09:12" }, { me: false, txt: "Yes, still available. You can come test it at the shop in Muhima (example).", at: "09:15" }] },
      { ad: 201, unread: 1, msgs: [{ me: true, txt: "Can I visit the Kimironko house on Saturday?", at: "Yesterday" }, { me: false, txt: "Saturday 10:00 works. No viewing fee (example).", at: "Yesterday" }] },
      { ad: 1101, unread: 0, msgs: [{ me: true, txt: "Do you deliver 3 sacks to Remera?", at: "Mon" }, { me: false, txt: "Yes, Friday delivery, 2,000 RWF (example).", at: "Mon" }] }
    ];
    localStorage.setItem("gura_threads", JSON.stringify(th));
  }
  return th;
}
const unread = () => seedThreads().reduce((n, x) => n + (x.unread || 0), 0);
function ago(mins) {
  const u = mins < 60 ? Math.max(1, mins) + "m" : mins < 1440 ? Math.round(mins / 60) + "h" : Math.round(mins / 1440) + "d";
  return lang() === "rw" ? t("ago") + " " + u : u + " " + t("ago");
}
const priceTxt = a => a.price ? rwf(a.price) + (a.per ? `<span class="per">${t("per_" + a.per) || "/" + a.per}</span>` : "") : "—";
T.en.per_night = "/night"; T.rw.per_night = "/ijoro";
const adTitle = a => L2(a, "title");
const locArea = l => GURA.locations.kigali.includes(l) ? l + ", Kigali" : l;
function adArt(a, i = 0, cls = "") {
  const h = (a.hue + i * 38) % 360;
  const em = a.emoji || (mcat(a.cat) || {}).icon || "📦";
  return `<div class="art ${cls}" style="--h:${h}"><span class="blob b1"></span><span class="blob b2"></span><span class="em">${em}</span></div>`;
}
function adCard(a, opts = {}) {
  const s = getSeller(a.seller) || {};
  return `<a class="adcard" href="ad.html?id=${a.id}">
    <div class="ad-img">${adArt(a)}${a.top ? `<span class="topb">${t("top")}</span>` : ""}${a.mine ? `<span class="topb mine">${t("new_ad")}</span>` : ""}<button class="fav${isFav(a.id) ? " on" : ""}" data-fav="${a.id}" aria-label="Save" onclick="toggleFav(${a.id},event)">${isFav(a.id) ? "♥" : "♡"}</button><span class="exl">${t("example")}</span></div>
    <div class="ad-body"><div class="price">${priceTxt(a)}</div><div class="ad-t">${adTitle(a)}</div>
    <div class="ad-meta">${a.cond ? `<span class="cond">${t("cond_" + a.cond)}</span>` : ""}${s.verified ? `<span class="vt" title="${t("verified")}">${ICON.shield}</span>` : ""}</div>
    <div class="ad-loc">${ICON.pin}<span>${a.loc}</span><span class="dotsep">·</span><span>${ago(a.mins)}</span></div></div></a>`;
}
function locOptions(sel = "") {
  const L = GURA.locations;
  return `<option value="">📍 ${t("all_rwanda")}</option><optgroup label="${t("kigali")}"><option value="kigali"${sel === "kigali" ? " selected" : ""}>${t("kigali")} (${t("all")})</option>${L.kigali.map(x => `<option${x === sel ? " selected" : ""}>${x}</option>`).join("")}</optgroup><optgroup label="${t("other_districts")}">${L.districts.map(x => `<option${x === sel ? " selected" : ""}>${x}</option>`).join("")}</optgroup>`;
}
const locMatch = (a, loc) => !loc || (loc === "kigali" ? GURA.locations.kigali.includes(a.loc) : a.loc === loc);
const catHref = c => c.href || `category.html?c=${c.id}`;
const catCount = id => id === "jobs" ? GURA.jobs.length : allAds().filter(a => a.cat === id).length + (id === "services" ? GURA.providers.length : 0);
function toast(msg) { const el = document.createElement("div"); el.className = "toast"; el.textContent = msg; document.body.appendChild(el); setTimeout(() => el.remove(), 2600); }
