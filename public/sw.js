const cachename = "hwstatic-v5";
const precache = [
    './',
    './index.html',
    './manifest.json',
    './hussein-logo64.PNG',
    './assets/images/Frame.svg',
    './assets/images/husseinwarrake.jpg',
    './assets/images/portfolio/ketmart.PNG',
    './assets/images/portfolio/testonion.PNG',    
    './assets/images/portfolio/nebulapay.PNG',
    './assets/images/portfolio/ketmart-mobile.PNG',
    './assets/images/portfolio/testonion-mobile.PNG',
    './assets/images/portfolio/nebulapay-mobile.PNG',    
    '../src/projects.json',
    '../src/index.js',
    '/static/js/bundle.js'
] 
    // 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,500',

self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open(cachename)
                .then( cache =>{
                    cache.addAll(precache)
                })
    )
})

self.addEventListener('activate', (e)=>{
    e.waitUntil(
        caches.keys()
                .then(key=>{
         return Promise.all( key.filter(currentKey =>
                       (currentKey != cachename)
                    ).map(cache=>
                        caches.delete(cache)
                                .then(()=>console.log('Old caches deleted'))
                    )
                )
                })
    )
})

self.addEventListener('fetch', (e)=>{
    e.respondWith(
        caches.match(e.request)
                .then(cachedResponse => {
                    if(cachedResponse){
                         return cachedResponse
                    }
                      return  fetch(e.request)
                        .then(serverResponse=>{
                            let serverClone = serverResponse.clone();
                            caches.open(cachename)
                            .then(cache => {
                                cache.put(e.request, serverClone);
                            })
                            return serverResponse;
                        })

                       
                
                })
    )
})