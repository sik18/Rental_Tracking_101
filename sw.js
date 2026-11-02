const V='suivi-locatif-v2';
const ASSETS=['./','index.html','manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url),same=u.origin===location.origin,page=r.mode==='navigate'||/\/(index\.html)?$/.test(u.pathname);
  if(same&&page){ /* pages: network first so updates apply as soon as you are online, cache when offline */
    e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));}return res;}).catch(()=>caches.match(r,{ignoreSearch:true}).then(h=>h||caches.match('index.html'))));return;}
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{if(res&&res.ok&&same){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));}return res;})));
});
