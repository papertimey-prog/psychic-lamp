const CACHE_NAME = "remind-pwa-v1";
const ASSETS = [
    "./",
    "./index.html",
    "./manifest.json",
    "https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css",
    "https://cdn.tailwindcss.com",
    "https://unpkg.com/kaplay@3001.0.0-alpha.20/dist/kaplay.js"
];

self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
