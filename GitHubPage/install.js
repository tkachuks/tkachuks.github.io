
$(document).ready(() => {
  $(document).ready(() => {
    console.log($)
    const installModal = $('.installModal')
    console.log('installModal', installModal)
    console.log('document', document.querySelector('.installModal'))
    let deferredPrompt
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()
      deferredPrompt = e
      $('.installModal').removeClass('hiddenInstall')
      const confirmBtn = $('#confirm-btn')
      console.log(confirmBtn)
      confirmBtn.addEventListener('click', e => {
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
  })
})
