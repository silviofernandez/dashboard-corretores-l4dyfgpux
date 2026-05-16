const CACHE_NAME = 'brokertop-cache-v1'
const urlsToCache = ['/', '/index.html', '/manifest.json']

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) return response

      // Otherwise try network, and fallback if completely offline
      return fetch(event.request).catch(() => {
        return new Response(
          '<div style="font-family: sans-serif; padding: 20px; text-align: center;"><h1>App Offline</h1><p>Verifique sua conexão e tente novamente.</p></div>',
          {
            headers: { 'Content-Type': 'text/html' },
            status: 503,
            statusText: 'Service Unavailable',
          },
        )
      })
    }),
  )
})
