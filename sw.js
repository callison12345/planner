// Keeps the planner working with no signal once it's been opened (installed or not).
// Serves the saved copy right away and refreshes it in the background, so updates arrive on the next open.
// Bump CACHE when this file list changes.
const CACHE = 'planner-v7';
const FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/planner-180.png',
  'icons/planner-192.png',
  'icons/planner-512.png',
  'planner.css',
  'vendor/fonts/nunito-latin.woff2',
  'vendor/fontawesome/css/fontawesome.min.css',
  'vendor/fontawesome/css/solid.min.css',
  'vendor/fontawesome/webfonts/fa-solid-900.woff2',
  // Week PDF (loaded only when the PDF button is used, but cached so it works offline)
  'vendor/jspdf/jspdf.umd.min.js',
  'vendor/jspdf/jspdf.plugin.autotable.min.js',
  // PDF preview (pdf.js; also loaded only when used)
  'vendor/pdfjs/pdf.min.mjs',
  'vendor/pdfjs/pdf.worker.min.mjs',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(cached => {
    const fresh = fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => cached);
    return cached || fresh;
  }));
});
