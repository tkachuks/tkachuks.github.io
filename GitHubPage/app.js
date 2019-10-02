if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://tkachuks.github.io/GitHubPage/service-worker.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}

let deferredPrompt
window.addEventListener('beforeinstallprompt', e => {
  console.log('beforeinstallprompt')
  e.preventDefault()
  deferredPrompt = e
  $('.installModal').removeClass('hiddenInstall')
  const confirmBtn = $('#confirm-btn')
  confirmBtn[0].addEventListener('click', e => {
    $('.installModal').addClass('hiddenInstall')
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt')
      } else {
        console.log('User dismissed the A2HS prompt')
      }
      deferredPrompt = null
    })
  })
})