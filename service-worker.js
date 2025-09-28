self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('golf-rules').then(cache => {
      return cache.addAll([
        '/index.html',
        '/category.html',
        '/rules.html',
        '/detail.html'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});