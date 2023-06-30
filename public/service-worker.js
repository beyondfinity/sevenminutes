const cacheKey = "MyCachev1";
const assetsToCache = [
  "/css/global.bc7b80b7.css",
  "/css/home.fe5d0b23.css",
  "/js/home.d3cc4ba4.js",
  "/js/jquery.43ca4933.js",
  "/src/App.js",
  "/src/App.css",
  "/src/Utility.js",
];
//Call Install event
self.addEventListener("install", (e) => {
  console.log("Service Worker : Installed");
  e.waitUntil(
    caches.open(cacheKey).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

//Call Activate event
self.addEventListener("activate", (e) => {
  console.log("Service Worker : Activated");
  e.waitUntil(
    caches.keys().then((cacheKeys) => {
      return Promise.all(
        cacheKeys.map((cache) => {
          if (cache !== cacheKey) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching");
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached response if found
      if (response) {
        return response;
      }

      // If the request is not cached, fetch it from the network
      return fetch(event.request)
        .then((networkResponse) => {
          // Cache the fetched response for future use
          if (networkResponse.ok) {
            const clonedResponse = networkResponse.clone();
            caches.open(cacheKey).then((cache) => {
              cache.put(event.request, clonedResponse);
            });
          }

          return networkResponse;
        })
        .catch(() => {
          return new Response("<h1>You are offline</h1>", {
            headers: { "Content-Type": "text/html" },
          });
        });
    })
  );
});

// self.addEventListener("fetch", (e) => {
//   console.log("Service Worker: Fetching");
//   e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
// });

// caches.open(cacheKey).then((cache) => {
//   cache.keys().then((cachedRequests) => {
//     console.log(cachedRequests);
//   });
// });
