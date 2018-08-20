const CACHE_NAME = 'rpgdomestre-cached-version-5';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/build/css/main.css',
  '/sobre/index.html',
  '/alter-ego/',
  '/alter-ego/index.html',
  '/alter-ego/sistema/',
  '/alter-ego/sistema/index.html',
  '/alter-ego/terra-2037/',
  '/alter-ego/terra-2037/index.html',
  '/alter-ego/dackers/',
  '/alter-ego/dackers/index.html',
  '/weekly/',
  '/weekly/index.html',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['rpgdomestre-cached-version-5'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener("fetch", function(event) {
  if (event.request.method !== 'GET') {
    console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);
    return;
  }

  event.respondWith(
    caches
      .match(event.request)
      .then(function(cached) {
        var networked = fetch(event.request)
          .then(fetchedFromNetwork, unableToResolve)
          .catch(unableToResolve);

        return cached || networked;

        function fetchedFromNetwork(response) {
          var cacheCopy = response.clone();

          caches
            .open(CACHE_NAME)
            .then(function add(cache) {
              cache.put(event.request, cacheCopy);
            })
            .then(function() {
              console.log('WORKER: fetch response stored in cache.', event.request.url);
            });

          return response;
        }

        function unableToResolve () {
          return new Response('<h1>Service Unavailable</h1>', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/html'
            })
          });
        }
      })
  );
});