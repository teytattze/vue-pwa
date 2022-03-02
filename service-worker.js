const cacheKey = 'after-school-lesson-v1';
const cacheFiles = [
	'index.html',
	'app.js',
	'webmanifest.json',
	'images/math.png',
	'images/logo-128.png',
	'images/logo-512.png',
];

self.addEventListener('install', (ev) => {
	ev.waitUntil(caches.open(cacheKey).then((cache) => cache.addAll(cacheFiles)));
});

self.addEventListener('fetch', (ev) => {
	ev.respondWith(
		caches.match(ev.request).then((res) => {
			return (
				res ||
				fetch(ev.request).then((res) =>
					caches.open(cacheKey).then((cache) => {
						cache.put(ev.request, res.clone());
						return res;
					}),
				)
			);
		}),
	);
});
