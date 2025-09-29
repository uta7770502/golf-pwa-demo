self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('golf-rules-cache-v1').then(function(cache) {
      return cache.addAll([
        './index.html',
        './rules.html',
        './style.css'
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
