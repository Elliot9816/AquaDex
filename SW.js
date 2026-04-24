const CACHE_NAME = 'aquadex-v3';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './manifest.json',
    './data.js',
    './logger.js',
    './ui.js',
    './achievements.js',
    'https://cdn-icons-png.flaticon.com/512/2972/2972144.png' 
];

// Install: Cache the new clean file set
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('AquaDex: System Refresh Complete');
            return cache.addAll(ASSETS);
        })
    );
});

// Activate: Delete old caches from previous versions
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('AquaDex: Clearing old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch: Serve from cache for speed/offline use
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
