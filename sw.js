const C='amarok-v1',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.oninstall=e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()));
self.onactivate=e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim()));
self.onfetch=e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
