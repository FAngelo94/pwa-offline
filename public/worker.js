const CACHE_VERSION = 5;
const CURRENT_CACHES = {
  pages: 'pages' + CACHE_VERSION
};

const urlsToCache = ['/','/offline.html', '/explore', '/profile', '/cart', '/section', '/details', '/product', '/productOption', '/details?id=classicPrint',  '/section?id=printPhoto','/product?id=classicPrint'];

self.addEventListener('install', (event) => {
  caches.keys().then(function (names) {
    for (let nameCache of names) {
      if (nameCache !== CURRENT_CACHES.pages) {
        caches.delete(nameCache);
      }
    }
  });

  event.waitUntil(
    caches.open(CURRENT_CACHES.pages)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  )
});

self.addEventListener('activate', function (event) {
  const expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (!expectedCacheNamesSet.has(cacheName)) {
            console.log('Deleting out of date cache:', cacheName);
          }
        })
      );
    })
  );
});