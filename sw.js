const CACHE_NAME = 'trombone-map-v2';
const APP_SHELL = [
  './',
  './index.html',
  './relatorio.html',
  './manifest.webmanifest',
  './Trambone_slide_positioning_chart_2.jpg',
  './Trambone_slide_positioning_chart.jpg',
  './Scala_Bb_trombone.jpg',
  './Types_trombone.jpg',
  './Partes_trombone.jpg',
  './trombone_position_chart.gif',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg',
  './icons/maskable-icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        const copy = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return networkResponse;
      })
      .catch(() => caches.match(request))
      .then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return caches.match('./index.html');
    })
  );
});
