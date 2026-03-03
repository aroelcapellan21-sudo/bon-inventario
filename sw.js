const CACHE = 'bon-v1';
const ARCHIVOS = ['app.html'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)));
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('app.html')))
    );
});
