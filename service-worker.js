var CACHE_NAME = "pwa-task-manager";
var urlsToCache = [
  "	/sevenminutes/",
  "/sevenminutes/static/css/main.a9c0a136.css",
  "/sevenminutes/static/css/main.a9c0a136.css.map",
  "/sevenminutes/static/js/main.9c405bb5.js",
  "/sevenminutes/static/js/main.9c405bb5.js.LICENSE.txt",
  "/sevenminutes/static/js/main.9c405bb5.js.map",
  "/sevenminutes/static/media/SevenMinutes.c9d00050ca8cb56485cd.mp3",
  "/sevenminutes/asset-manifest.json",
  "/sevenminutes/favicon.ico",
  "/sevenminutes/index.html",
  "/sevenminutes/logo192.png",
  "/sevenminutes/logo512.png",
  "/sevenminutes/manifest.json",
  "/sevenminutes/service-worker.js",
];

// function getCacheKey(url) {
//   return url.includes(CACHE_NAME) ? url : `${CACHE_NAME}-${url}`;
// }

// const urlsToCache = [
//   "/sevenminutes/",
//   getCacheKey("/sevenminutes/static/css/main.a9c0a136.css"),
//   getCacheKey("/sevenminutes/static/css/main.a9c0a136.css.map"),
//   getCacheKey("/sevenminutes/static/js/main.9c405bb5.js"),
//   getCacheKey("/sevenminutes/static/js/main.9c405bb5.js.LICENSE.txt"),
//   getCacheKey("/sevenminutes/static/js/main.9c405bb5.js.map"),
//   getCacheKey(
//     "/sevenminutes/static/media/SevenMinutes.c9d00050ca8cb56485cd.mp3"
//   ),
//   getCacheKey("/sevenminutes/asset-manifest.json"),
//   getCacheKey("/sevenminutes/favicon.ico"),
//   getCacheKey("/sevenminutes/index.html"),
//   getCacheKey("/sevenminutes/logo192.png"),
//   getCacheKey("/sevenminutes/logo512.png"),
//   getCacheKey("/sevenminutes/manifest.json"),
//   getCacheKey("/sevenminutes/service-worker.js"),
// ];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      // If the file is not present in STATIC_CACHE,
      // it will be searched in DYNAMIC_CACHE
      return (
        cacheRes ||
        fetch(event.request).then((fetchRes) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request.url, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    })
  );
});
// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["pwa-task-manager"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// const cacheKey = "app_prayer";
// const assetsToCache = [
//   "/",
//   "./index.html",
//   "./manifest.json",
//   "./favicon.ico",
//   "./static/js/787.28cb0dcd.chunk.js",
//   "./static/js/787.28cb0dcd.chunk.js.map",
//   "./static/js/main.4d16d95e.js",
//   "./static/js/main.4d16d95e.js.LICENSE.txt",
//   "./static/js/main.4d16d95e.js.map",
//   "./static/css/main.e5cedf93.css",
//   "./static/css/main.e5cedf93.css.map",
//   "./static/media/audio.0526e343e4ea532f90e6.mp3",
// ];

// //Call Install event
// self.addEventListener("install", (e) => {
//   console.log("Service Worker : Installed");
//   e.waitUntil(
//     caches.open(cacheKey).then((cache) => {
//       console.log(assetsToCache);
//       return cache.addAll(assetsToCache);
//       // return Promise.all(assetsToCache.map((asset) => cache.add(asset)));
//     })
//   );
// });

// //Call Activate event
// self.addEventListener("activate", (e) => {
//   console.log("Service Worker : Activated");
//   e.waitUntil(
//     caches.keys().then((cacheKeys) => {
//       return Promise.all(
//         cacheKeys.map((cache) => {
//           if (cache !== cacheKey) {
//             console.log("Service Worker: Clearing Old Cache");
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });
// // self.addEventListener("fetch", (event) => {
// //   console.log("Service Worker: Fetching");
// //   event.respondWith(
// //     caches.match(event.request).then((response) => {
// //       // Return the cached response if found
// //       if (response) {
// //         return response;
// //       }

// //       // If the request is not cached, fetch it from the network
// //       return fetch(event.request)
// //         .then((networkResponse) => {
// //           // Cache the fetched response for future use
// //           if (networkResponse.ok && networkResponse.status === 200) {
// //             const clonedResponse = networkResponse.clone();
// //             caches.open(cacheKey).then((cache) => {
// //               cache.put(event.request, clonedResponse);
// //             });
// //           }

// //           return networkResponse;
// //         })
// //         .catch(() => {
// //           return new Response("<h1>You are offline</h1>", {
// //             headers: { "Content-Type": "text/html" },
// //           });
// //         });
// //     })
// //   );
// // });

// // ----------------------------------------------------------------------
// self.addEventListener("fetch", (event) => {
//   console.log("Service Worker: Fetching");
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       console.log(event.request);
//       // Return the cached response if found
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);

//       //       // If the request is not cached, fetch it from the network
//       //       return fetch(event.request)
//       //         .then((networkResponse) => {
//       //           // Cache the fetched response for future use
//       //           if (networkResponse.ok) {
//       //             const clonedResponse = networkResponse.clone();
//       //             caches.open(cacheKey).then((cache) => {
//       //               // cache.put(event.request, clonedResponse);
//       //               cache.put(event.request, clonedResponse);
//       //               console.log(event.request);
//       //             });
//       //           }

//       //           return networkResponse;
//       //         })
//       //         .catch(() => {
//       //           return new Response("<h1>You are offline</h1>", {
//       //             headers: { "Content-Type": "text/html" },
//       //           });
//       //         });
//     })
//   );
// });
