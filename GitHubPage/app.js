if('serviceWorker' in navigator){
  navigator.serviceWorker.register('https://tkachuks.github.io/GitHubPage/service-worker.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}