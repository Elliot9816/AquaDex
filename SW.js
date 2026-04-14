const CACHE_NAME = 'aquadex-v2'; // Changed to v2 because the structure changed
const ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.json',
    
    // THE BIG SPLIT FILES
    '/data.js',
    '/engine.js',
    '/logger.js',
    '/ui.js',        // Don't forget this one!
    
    // ASSETS
    'https://cdn-icons-png.flaticon.com/512/2972/2972144.png' 
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('AquaDex: Caching all assets');
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
