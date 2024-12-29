const CACHE_NAME = 'crossfit-timer-v1'; // You can change the version number if needed
const assets = [
    './',                // Cache the root (important for relative paths)
    './index.html',
    './manifest.json',
    './icon-192.png',   // Add any other assets (images, CSS, etc.)
    './icon-512.png'
];

self.addEventListener('install', event => {
    console.log('Service worker installing...'); // Debugging
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching assets...'); // Debugging
                return cache.addAll(assets);
            })
    );
});


self.addEventListener('activate', (event) => {
    console.log('Activating service worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    )
})

self.addEventListener('fetch', event => {
    console.log(`Fetching: ${event.request.url}`); // Debugging
    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(response => {
                if (response) {
                    console.log('Serving from cache:', event.request.url); // Debugging
                    return response;
                }

                console.log('Fetching from network:', event.request.url); // Debugging
                var fetchPromise = fetch(event.request).then(networkResponse => {
                    cache.put(event.request, networkResponse.clone()); // Update cache
                    return networkResponse;                           // Return network response
                });
                return fetchPromise;
            });
        })
    );
});
