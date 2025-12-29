const CACHE_NAME = "kaplay-reminder-v1";
const ASSETS = [
  "./",
  "./index.html",
  "https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css",
  "https://cdn.tailwindcss.com",
  "https://unpkg.com/kaplay@3001.0.0-alpha.20/dist/kaplay.js"
];

// 1. Install - Save files to the phone
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Fetch - Serve files from cache if offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
