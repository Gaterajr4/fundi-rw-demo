/* Gura.rw demo service worker: precache everything for offline use. */
const CACHE = "gura-demo-v4";
const ASSETS = [
  "./", "./index.html", "./services.html", "./providers.html", "./how.html", "./jobs.html", "./search.html", "./provider.html", "./book.html", "./join.html", "./dashboard.html", "./categories.html", "./category.html", "./ad.html", "./post.html", "./favourites.html", "./seller.html", "./messages.html", "./account.html",
  "./style.css", "./app.js", "./data.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-192.png", "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png", "./icons/favicon-32.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // Pages: network first (fresh when online), fall back to cache. Ignore ?id= etc. when matching.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./index.html")))
    );
    return;
  }
  // Assets: cache first, then network.
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
