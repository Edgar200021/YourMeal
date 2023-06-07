import { postData } from '../../Services/postData'
import orderImg from '/src/assets/icons/order-img.svg'

class Order {
  render() {
    const order = `
		<div class="order">
			<div class="order__left">
				<img class="order__img" src=${orderImg} alt="Pancake">
			</div>
			<div class="order__right">
				<form action="" class="order__form form">
					<h3 class="form__title third-title">Доставка</h3>
					<div class="form__block">
						<input type="text" class="form__input" name="name" placeholder="Ваше имя"/>
					</div>
					<div class="form__block">
						<input type="text" class="form__input" name="phone" placeholder="Телефон" />
					</div>
					<div class="form__block">
						<label class="form__label" for="pickup" >
							<input data-radio id="pickup" type="radio" name="radio" class="form__radio" name="pickup" checked />
							Самовывоз
						</label>
	
						<label class="form__label" for="delivery">
							<input data-radio id="delivery" type="radio" name="radio" class="form__radio" name="delivery" />
							Доставка
						</label>
					</div>

					<div class="form__block form__block-dynamic">
						<input type="text" class="form__input" name="address" placeholder="Улица, дом, квартира" />
						<input type="text" class="form__input" name="floor" placeholder="Этаж" />
						<input type="text" class="form__input" name="intercom" placeholder="Домофон"  />
						</div>

					<button id="form__btn"  type="button" class="form__btn btn">Оформить</button>
				</form>
			</div>
			<button class="modal__btn" data-close>x</button>
		</div>
	`

    return order
  }

  toggleDeliveryMethod(parentSelector) {
    const parent = document.querySelector(parentSelector)

    parent.addEventListener('click', (e) => {
      const target = e.target

      if (!target.matches('[data-radio]')) return

      const targetParent = target.closest('.form__block'),
        deliveryInfo = targetParent.nextElementSibling

      switch (target.id) {
        case 'delivery':
          deliveryInfo.style.maxHeight = deliveryInfo.scrollHeight + 'px'
          deliveryInfo.style.opacity = 1
          deliveryInfo.style.visibility = 'visible'
          break
        case 'pickup':
          deliveryInfo.style.maxHeight = 0
          deliveryInfo.style.opacity = 0
          deliveryInfo.style.visibility = 'hidden'
          break
      }
    })
  }

   sendData() {
    const modal = document.querySelector('.modal'),
		form = modal.querySelector('.form')

 
	console.log(form)
  }
}

export default new Order()
