const CACHE_NAME = 'paul-ondoa-portfolio-v2';
const OFFLINE_CACHE = 'paul-ondoa-offline-v2';
const RUNTIME_CACHE = 'paul-ondoa-runtime-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

const offlineAssets = [
  '/offline.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
      caches.open(OFFLINE_CACHE).then((cache) => cache.addAll(offlineAssets))
    ])
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, OFFLINE_CACHE, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') {
    return;
  }

  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          fetch(request).then((response) => {
            if (response && response.status === 200) {
              caches.open(RUNTIME_CACHE).then((cache) => {
                cache.put(request, response.clone());
              });
            }
          }).catch(() => {});

          return cachedResponse;
        }

        return fetch(request).then((response) => {
          if (!response || response.status !== 200) {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        }).catch(() => {
          return caches.match('/offline.html');
        });
      })
    );
  } else {
    event.respondWith(
      fetch(request).then((response) => {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return response;
      }).catch(() => {
        return caches.match(request);
      })
    );
  }
});

// Gestion des notifications push
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nouveau contenu disponible !',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Voir',
        icon: '/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/icon-192x192.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Paul Ondoa Portfolio', options)
  );
});

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});