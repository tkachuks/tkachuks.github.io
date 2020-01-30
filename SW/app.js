if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./SW/service-worker.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err))
}

let deferredPrompt
window.addEventListener('beforeinstallprompt', e => {
  console.log('beforeinstallprompt')
  e.preventDefault()
  deferredPrompt = e
  const menuInstallBtn = document.getElementById('install')
  console.log(menuInstallBtn)
  const installModal = document.getElementById('installModal')
  const installModallconfirmBtn = document.getElementById('confirm-btn')
  const installPrompt = e => {
    // $('.installModal').addClass('hiddenInstall')
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        menuInstallBtn.classList.add('installed')
        console.log('User accepted the A2HS prompt')
      } else {
        console.log('User dismissed the A2HS prompt')
        // $('.installModal').addClass('hiddenInstall')
      }
      deferredPrompt = null
    })
  }
  menuInstallBtn.classList.remove('installed')
  menuInstallBtn.addEventListener('click', installPrompt)
  installModallconfirmBtn && installModallconfirmBtn.addEventListener('click', installPrompt)
})
