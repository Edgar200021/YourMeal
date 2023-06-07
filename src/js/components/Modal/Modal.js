import { ROOT_INDEX } from '../../constants/root'

class Modal {
  render() {
    const modal = `
			<div class="modal none">
				<div class="modal__wrapper">
					<div class="modal__inner">

					</div>
				</div>
			</div>
		`

    ROOT_INDEX.insertAdjacentHTML('beforeend', modal)
  }

  closeModal(parentSelector) {
    const parent = document.querySelector(parentSelector),
		modalInner = parent.querySelector('.modal__inner')

    parent.addEventListener('click', (e) => {
      const target = e.target

      if (
        target.classList.contains('modal__active') ||
        target.matches('[data-close]')
      ) {
        parent.classList.add('none')
        parent.classList.remove('modal__active')
		modalInner.innerHTML = ``
		document.body.style.overflow = 'auto'
      }
    })
  }

  closeModalWithKeyboard() {
	document.addEventListener('keydown', (e) => {
		if (e.key !== 'Escape') {
			return
		} 
		const modal = document.querySelector('.modal'),
			modalInner = modal.querySelector('.modal__inner')

			modal.classList.add('none')
			modal.classList.remove('modal__active')
			modalInner.innerHTML = ``
			document.body.style.overflow = 'auto'
	})
  }
}

export default new Modal()
