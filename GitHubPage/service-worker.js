console.log('service-worker.js')
const installModal = () => {
  const later = () => {
    console.log('install later')
    $('.installModal').remove()
  }
  const install = () => {
    console.log('install app')
    $('.installModal').remove()
  }

  const confirmModal = $(
    `<div id='modal-background' class='installModal hiddenModal'>
      <div class='confirm-block'>
          <figure class='modal-body'>
            <img class='icon' src=${config.urls.staticImg + '/ic_logo.svg'} />
            <figcaption class='text'>${config.translations.install_modal.add_to_home_screen}</figcaption>  
          </figure>
        <div class='modal-footer'>
          <button class='no-btn'>${config.translations.install_modal.later_label}<img class='cancel-img' src=${config.urls.staticImg + '/plus-blue.svg'} /></button>
          <button class='yes-btn'>${config.translations.install_modal.confirm_label}<img src=${config.urls.staticImg + '/confirm.svg'} /></button>
        </div>
      </div> 
    </div>`
  )
  if (!$('.installModal').length) {
    $('body').append(confirmModal)
  }
  $('.modal-body').on('click', e => e.stopPropagation())
  $('.no-btn').on('click', later)
  $('.yes-btn').on('click', install)
}
installModal()
// window.addEventListener('beforeinstallprompt', (e) => console.log('e', e))
