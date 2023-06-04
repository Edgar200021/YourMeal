import { getData } from '../../Services/getData'
import Notification from '../Notification/Notification'
import Basket from '../Basket/Basket'
import { PRODUCTS_URL } from '../../constants/url'
import { UNIQUE_PRODUCTS_ID } from '../../constants/uniques'

import burger from '/src/assets/img/burgers/burger-1.jpg'

class Products {
  constructor() {
    this._unique = []
  }

  renderProduct(data) {
    let productElement = ''

    data.forEach(({ image, price, title, weight, category, id }) => {
      if (category !== 'burger') {
        return
      }

      productElement += `
					<li class="product" data-key="${id}">
						<div class="product__img-box">
							<img src="${burger}" class="product__img">
						</div>
						<div class="product__info">
							<span class="product__price">${price}₽</span>
							<h4 class="product__descr fourth-title">${title}</h4>
							<span class="product__weight">${weight}г</span>
						</div>
						<button class="btn product__item" data-add>Добавить</button>
					</li>
				`
    })

    const productWrapper = `
		<section class="products">
			<h2 class="products__title second-title">Бургеры</h2>
			<ul class="products__container">${productElement}</ul>
		</section>`

    return productWrapper
  }

  async render() {
    const data = await getData.render(PRODUCTS_URL)

    return data ? this.renderProduct(data) : Notification.errorNotif()
  }

  addToBasket(parentSelector) {
    const section = document.querySelector(parentSelector)

    section.addEventListener('click', (e) => {
      const target = e.target

      if (!target.matches('[data-add]')) {
        return
      }

      const parent = target.closest('.product'),
        id = parent.dataset.key,
        imgSrc = parent.querySelector('.product__img').src,
        price = parent.querySelector('.product__price').innerText.slice(0, -1),
        descr = parent.querySelector('.product__descr').innerText,
        weight = parent
          .querySelector('.product__weight')
          .innerText.slice(0, -1),
        basketList = document.querySelector('.basket__list'),
        basketItem = document.querySelectorAll('.basket__item'),
        basketCount = document.querySelector('.basket__count'),
        totalPrice = document.querySelector('.basket__total-price')

      if (UNIQUE_PRODUCTS_ID.includes(id)) {
        const item = basketList.querySelector(`[data-id="${id}"]`),
          price = item.querySelector('.basket__item-price'),
          count = item.querySelector('.basket__item-counter__info')

     totalPrice.innerText = +totalPrice.innerText.slice(0, -1) + +price.innerText.slice(0, -1) +
          '₽'
        count.innerText++
		basketCount.innerText++
        return
      }
	  
	  UNIQUE_PRODUCTS_ID.push(id)
      basketList.innerHTML += Basket.renderItem(
        imgSrc,
        price,
        descr,
        weight,
        id
      )
      totalPrice.innerText =
        Math.round(+totalPrice.innerText.slice(0, -1) + +price) + '₽'
      basketCount.innerText++
    })
  }
}

export default new Products()
