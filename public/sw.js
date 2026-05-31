// Minimal service worker — required so Chrome/Edge/Android consider the site installable.
// No caching: every request goes straight to the network. This avoids stale-content
// issues and means new deploys are picked up immediately.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Pass-through fetch handler — its presence (not its logic) is what triggers
// installability heuristics in Chromium-based browsers.
self.addEventListener("fetch", (event) => {
  // no-op: let the browser handle the request normally
});
