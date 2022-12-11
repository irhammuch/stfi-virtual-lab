/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  console.log('[service-worker] installing service worker...', event);
  event.waitUntil(
    caches.open('static').then(function (cache) {
      console.log('[service-worker] precaching static assets');
      cache.addAll([
        'https://ik.imagekit.io/irhammuch/lab-bg.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670745164115',
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('[service-worker] activating service worker...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  console.log('fetch...');
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log('respondWith', response, event.request);
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
