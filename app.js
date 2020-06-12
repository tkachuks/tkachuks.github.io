if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err))
}

let deferredPrompt
window.addEventListener('beforeinstallprompt', e => {
  console.log('beforeinstallprompt')
  e.preventDefault()
  deferredPrompt = e
  const menuInstallBtn = document.getElementById('install')
  const installModal = document.querySelector('.installModal')
  const installModallconfirmBtn = document.getElementById('confirm-btn')
  config.shouldInstallPopupShow && installModal.classList.remove('hiddenInstall')
  const installPrompt = e => {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        menuInstallBtn.classList.add('installed')
        console.log('User accepted the A2HS prompt')
        config.shouldInstallPopupShow = false
      } else {
        console.log('User dismissed the A2HS prompt')
        config.shouldInstallPopupShow = false
      }
      deferredPrompt = null
    })
  }
  menuInstallBtn.classList.remove('installed')
  menuInstallBtn.addEventListener('click', installPrompt)
  installModallconfirmBtn && installModallconfirmBtn.addEventListener('click', installPrompt)
})
