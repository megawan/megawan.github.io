// The hijaiyah game moved to /cendekia/hijaiyah/. Installed copies still run the old service worker,
// which checks this file for updates. This version removes the old offline copy, unregisters itself
// and reloads open pages, so they land on the redirect in index.html.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  const scope = self.registration.scope;
  event.waitUntil((async () => {
    // The new app uses the same cache names on this origin, so only entries under the old path are removed.
    for (const name of await caches.keys()) {
      if (!name.startsWith('hijaiyah-')) continue;
      const cache = await caches.open(name);
      for (const req of await cache.keys()) {
        if (req.url.startsWith(scope)) await cache.delete(req);
      }
    }
    await self.registration.unregister();
    const pages = await self.clients.matchAll({ type: 'window' });
    pages.forEach((page) => page.navigate(page.url));
  })());
});
