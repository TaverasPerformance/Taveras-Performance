const cacheName = 'taveras-performance-v2';
const assets = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.delete('taveras-performance-v1'));
});

self.addEventListener('fetch', event => {
  const {request} = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request).catch(async () => {
    const cache = await caches.open(cacheName);
    return (await cache.match(request)) ?? (request.mode === 'navigate' ? cache.match('./index.html') : Response.error());
  }));
});
