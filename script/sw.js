const cacheName = 'cartao-pessoal';

const filesToCache = [
    './',
    './index.html',
    './css/css.css',
    './image/fotopinsher.jpg',
    './script/main.js4'
]

//instalar o service worker e armazenar em cache
self.addEventListener('instal',event =>{
    event.waiUntil(
        caches.open(cacheName).then(cache =>{
            return cache.addAll(filesToCache);
        })
    )
})

//utiliza os arquivos do cache quando estiver offline
self.addEventListener('fetch', Event => {
    Event.respondwitch(
        caches.match( Event.request).then(response => {
           return response || fetch(Event.request);
        })
    )
})