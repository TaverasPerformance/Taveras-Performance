const cacheName = 'taveras-performance-v10';
const assets = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all(['taveras-performance-v1', 'taveras-performance-v2', 'taveras-performance-v3', 'taveras-performance-v4', 'taveras-performance-v5', 'taveras-performance-v6', 'taveras-performance-v7', 'taveras-performance-v8', 'taveras-performance-v9'].map(name => caches.delete(name))));
});

self.addEventListener('fetch', event => {
  const {request} = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request).catch(async () => {
    const cache = await caches.open(cacheName);
    return (await cache.match(request)) ?? (request.mode === 'navigate' ? cache.match('./index.html') : Response.error());
  }));
});
