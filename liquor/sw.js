// 앱 설치 조건을 채우는 최소 서비스 워커: 껍데기 파일만 보관하고, 실제 화면과 데이터는 늘 구글 서버에서 새로 받음
const CACHE = 'godeat-liquor-shell-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-v1-192.png', 'icon-v1-512.png', 'icon-v1-maskable-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
