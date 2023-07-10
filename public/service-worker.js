const cacheKey = "app_prayer";
const assetsToCache = [
  "/",
  "./index.html",
  "./manifest.json",
  "./favicon.ico",
  "./static/js/787.28cb0dcd.chunk.js",
  "./static/js/787.28cb0dcd.chunk.js.map",
  "./static/js/main.4d16d95e.js",
  "./static/js/main.4d16d95e.js.LICENSE.txt",
  "./static/js/main.4d16d95e.js.map",
  "./static/css/main.e5cedf93.css",
  "./static/css/main.e5cedf93.css.map",
  "./static/media/audio.0526e343e4ea532f90e6.mp3",
];

//Call Install event
self.addEventListener("install", (e) => {
  console.log("Service Worker : Installed");
  e.waitUntil(
    caches.open(cacheKey).then((cache) => {
      console.log(assetsToCache);
      // return cache.addAll(assetsToCache);
      return Promise.all(assetsToCache.map((asset) => cache.add(asset)));
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
// self.addEventListener("fetch", (event) => {
//   console.log("Service Worker: Fetching");
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Return the cached response if found
//       if (response) {
//         return response;
//       }

//       // If the request is not cached, fetch it from the network
//       return fetch(event.request)
//         .then((networkResponse) => {
//           // Cache the fetched response for future use
//           if (networkResponse.ok && networkResponse.status === 200) {
//             const clonedResponse = networkResponse.clone();
//             caches.open(cacheKey).then((cache) => {
//               cache.put(event.request, clonedResponse);
//             });
//           }

//           return networkResponse;
//         })
//         .catch(() => {
//           return new Response("<h1>You are offline</h1>", {
//             headers: { "Content-Type": "text/html" },
//           });
//         });
//     })
//   );
// });

// ----------------------------------------------------------------------
self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching");
  event.respondWith(
    caches.match(event.request).then((response) => {
      console.log(event.request);
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
              // cache.put(event.request, clonedResponse);
              cache.put(event.request, clonedResponse);
              console.log(event.request);
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
