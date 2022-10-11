var CACHE_VERSION = 43;
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

const urlsToCache = ['/','/offline.html', '/explore', '/profile', '/cart', '/section', '/details', '/product', '/productOption', '/details?id=classicPrint',  '/section?id=printPhoto','/product?id=classicPrint'];

// Add url with query string with any parameter


self.addEventListener('install', (event) => {
  console.log("INSTALL")
  caches.keys().then(function (names) {
    console.log("INSTALL CACHE NAMES", names)
    for (let nameCache of names) {
      console.log("INSTALL CACHE NAME", nameCache, CURRENT_CACHES.font, nameCache !== CURRENT_CACHES.font)
      console.log("BELLA")
      if (nameCache !== CURRENT_CACHES.font) {
        console.log("DELETE CACHE", nameCache)
        caches.delete(nameCache);
      }
    }
  });

  event.waitUntil(
    caches.open(CURRENT_CACHES.font)
      .then((cache) => {
        console.log("ADD TO CACHE", urlsToCache)
        return cache.addAll(urlsToCache);
      })
  )
});

self.addEventListener('activate', function (event) {
  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic will handle the case where
  // there are multiple versioned caches.
  var expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  console.log("ACTIVATE", expectedCacheNamesSet);
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      console.log("cacheNames", cacheNames)
      return Promise.all(
        cacheNames.map(function (cacheName) {
          console.log("cacheName", cacheName)
          if (!expectedCacheNamesSet.has(cacheName)) {
            // If this cache name isn't present in the set of "expected" cache names, then delete it.
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

const checkIfUrlIsInCache = (url) => {
  if(url.includes("bundle")){
    return true;
  }
  return false;
}

self.addEventListener('fetch', function (event) {
  // console.log("CURRENT_CACHES.font", CURRENT_CACHES.font)
  // console.log("EVENT", event)
  let URL = event.request.url;
  if (URL.indexOf("localhost") > -1) {
    const components = URL.split("/");
    URL = "https://" + components[2];
  }
  // console.log('Handling fetch event for', event.request.url);
  event.respondWith(
    caches.open(CURRENT_CACHES.font).then(function (cache) {
      // console.log("CACHE", cache);
      return cache.match(event.request).then(function (response) {
        // console.log("RESPONSE", response);

        if (response) {
          // If there is an entry in the cache for event.request, then response will be defined
          // and we can just return it. Note that in this example, only font resources are cached.
          //console.log(' Found response in cache:', response);

          return response;
        }

        // Otherwise, if there is no entry in the cache for event.request, response will be
        // undefined, and we need to fetch() the resource.
        //console.log(' No response for %s found in cache. About to fetch ' +'from network...', event.request.url);

        // We call .clone() on the request since we might use it in a call to cache.put() later on.
        // Both fetch() and cache.put() "consume" the request, so we need to make a copy.
        // (see https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
        return fetch(event.request.clone()).then(function (response) {
          //console.log('  Response for %s from network is: %O',event.request.url, response);

          if (response.status < 400) {
            // This avoids caching responses that we know are errors (i.e. HTTP status code of 4xx or 5xx).
            // We also only want to cache responses that correspond to fonts,
            // i.e. have a Content-Type response header that starts with "font/".
            // Note that for opaque filtered responses (https://fetch.spec.whatwg.org/#concept-filtered-response-opaque)
            // we can't access to the response headers, so this check will always fail and the font won't be cached.
            // All of the Google Web Fonts are served off of a domain that supports CORS, so that isn't an issue here.
            // It is something to keep in mind if you're attempting to cache other resources from a cross-origin
            // domain that doesn't support CORS, though!
            // We call .clone() on the response to save a copy of it to the cache. By doing so, we get to keep
            // the original response object which we will return back to the controlled page.
            // (see https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)

            console.log('Caching response', event.request.url, event);
            if(checkIfUrlIsInCache(event.request.url))
              cache.put(event.request, response.clone());
          } else {
            //console.log('Error -  Not caching the response to', event.request.url);
          }

          // Return the original response object, which will be used to fulfill the resource request.
          return response;
        });
      }).catch(function (error) {
        // This catch() will handle exceptions that arise from the match() or fetch() operations.
        // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
        // It will return a normal response object that has the appropriate error code set.
        caches.match('offline.html')
      });
    })
  );
});