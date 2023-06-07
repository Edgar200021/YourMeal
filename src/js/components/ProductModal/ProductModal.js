import Modal from '../Modal'
import { UNIQUE_PRODUCTS_ID } from '../../constants/uniques'
import Basket from '../Basket'

class ProductModal {
  render(id, title, img, descr, ingridients, weight, calorie, price) {
    const productModal = ` 
		<h2 class="product-modal__title second-title">${title}</h2>
		<button class="modal__btn" data-close>x</button>
		<div class="product-modal__info-box">
		  <div class="product-modal__img-box">
			<img data-id="${id}" src="${img}" alt="product" class="product-modal__img" />
		  </div>

		  <div class="product-modal__info">
			<p class="product-modal__descr">${descr}</p>
			<span class="product-modal__compund">Состав</span>

			<ul class="product-modal__list">
			  ${ingridients
          .split(',')
          .map((ingridient) => {
            return `
			  <li class="product-modal__item">${ingridient}</li>
			  `
          })
          .join('')}
			</ul>
			<span class="product-modal__characteristic"
			  >${weight}г, ккал ${calorie}</span
			>
		  </div>
	  </div>

		  <div class="product-modal__actions">
			<button class="product-modal__btn btn">Добавить</button>

			<div class="basket__item-counter">
			  <button class="basket__item-btn" data-calc="minus">-</button>
			  <span class="basket__item-counter__info">1</span>
			  <button class="basket__item-btn" data-calc="plus">+</button>
			</div>

			<span class="product-modal__price">${price}₽</span>
		  </div>
	
		`

    return productModal
  }

  addToBasket(parentSelector) {
    const parent = document.querySelector(parentSelector),
      basketList = document.querySelector('.basket__list'),
      basketCount = document.querySelector('.basket__count'),
      basketTotalPrice = document.querySelector('.basket__total-price'),
      basketNotification = document.querySelector('.basket__notification-box'),
      basketBtn = document.querySelector('.basket__btn'),
      basketDelivery = document.querySelector('.basket__delivery')

    parent.addEventListener('click', (e) => {
      const target = e.target

      if (target.matches('[data-calc]')) {
        switch (target.dataset.calc) {
          case 'plus':
            target.previousElementSibling.innerText++
            break
          case 'minus':
            if (target.nextElementSibling.innerText > 1) {
              target.nextElementSibling.innerText--
            }
        }
      }

      if (target.classList.contains('product-modal__btn')) {
        const targetParent = target.closest('.modal__inner'),
          characteristics = targetParent.querySelector(
            '.product-modal__characteristic'
          ).innerText,
          count = targetParent.querySelector('.basket__item-counter__info')

        const productInfo = {
          title: targetParent.querySelector('.product-modal__title').innerText,
          img: targetParent.querySelector('.product-modal__img').src,
          id: targetParent.querySelector('.product-modal__img').dataset.id,
          weight: characteristics.slice(0, characteristics.indexOf('г')),
          price: targetParent
            .querySelector('.product-modal__price')
            .innerText.slice(0, -1),
          count: count.innerText,
        }

        if (UNIQUE_PRODUCTS_ID.includes(productInfo.id)) {
          const item = basketList.querySelector(
              `li[data-id="${productInfo.id}"`
            ),
            counterInfo = item.querySelector('.basket__item-counter__info')

          counterInfo.innerText = +counterInfo.innerText + +productInfo.count
          basketCount.innerText = +basketCount.innerText + +productInfo.count
          basketTotalPrice.innerText =
            +basketTotalPrice.innerText.slice(0, -1) +
            productInfo.price * productInfo.count +
            '₽'

          count.innerText = 1

          return
        }

        UNIQUE_PRODUCTS_ID.push(productInfo.id)
        basketNotification.style.display = 'none'
        basketBtn.style.display = 'block'
        basketDelivery.style.display = 'block'

        basketList.insertAdjacentHTML(
          'beforeend',
          Basket.renderItem(
            productInfo.img,
            productInfo.price,
            productInfo.title,
            productInfo.weight,
            productInfo.id,
            productInfo.count
          )
        )

        basketTotalPrice.innerText =
          +basketTotalPrice.innerText.slice(0, -1) +
          productInfo.price * productInfo.count +
          '₽'
        basketCount.innerText = +basketCount.innerText + +productInfo.count
        count.innerText = 1
      }
    })
  }
}

export default new ProductModal()
