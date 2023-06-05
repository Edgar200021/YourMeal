import { getData } from '../../Services/getData'
import Notification from '../Notification/Notification'
import Basket from '../Basket/Basket'
import { PRODUCTS_URL } from '../../constants/url'
import { UNIQUE_PRODUCTS_ID } from '../../constants/uniques'
import { ROOT_INDEX } from '../../constants/root'
import ProductModal from '../ProductModal/ProductModal'
import burger from '/src/assets/img/burgers/burger-1.jpg'

class Products {
  renderProduct(data, productCategory) {
    let productElement = ''

    data.forEach(
      ({
        image,
        description,
        calories,
        ingredients,
        price,
        title,
        weight,
        category,
        id,
      }) => {
        if (category !== productCategory) {
          return
        }

        productElement += `
					<li class="product" data-ingridients='${ingredients}' data-descr='${description}' data-calorie='${calories}' data-key="${id}">
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
      }
    )

    const productWrapper = `
		<section class="products">
			<h2 class="products__title second-title">Бургеры</h2>
			<ul class="products__container">${productElement}</ul>
		</section>`

    return productWrapper
  }

  async render(productCategory = 'burger') {
    const data = await getData.render(PRODUCTS_URL)

    return data
      ? this.renderProduct(data, productCategory)
      : Notification.errorNotif()
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
        basketNotification = basketList.querySelector(
          '.basket__notification-box'
        ),
        basketBtn = document.querySelector('.basket__btn'),
        basketDelivery = document.querySelector('.basket__delivery'),
        basketItem = document.querySelectorAll('.basket__item'),
        basketCount = document.querySelector('.basket__count'),
        totalPrice = document.querySelector('.basket__total-price')

      if (UNIQUE_PRODUCTS_ID.includes(id)) {
        const item = basketList.querySelector(`[data-id="${id}"]`),
          price = item.querySelector('.basket__item-price'),
          count = item.querySelector('.basket__item-counter__info')

        totalPrice.innerText =
          +totalPrice.innerText.slice(0, -1) +
          +price.innerText.slice(0, -1) +
          '₽'
        count.innerText++
        basketCount.innerText++
        return
      }

      UNIQUE_PRODUCTS_ID.push(id)

      basketNotification.style.display = 'none'
      basketBtn.style.display = 'block'
      basketDelivery.style.display = 'block'

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

  showProductModal(parentSelector) {
    const parent = document.querySelector(parentSelector)

    parent.addEventListener('click', (e) => {
      const target = e.target
      if (!target.matches('.product__img')) {
        return
      }

      const product = target.closest('.product')

      const modalValues = {
        title: product.querySelector('.product__descr').innerText,
        img: target.src,
        descr: product.dataset.descr,
        ingridients: product.dataset.ingridients,
        weight: product
          .querySelector('.product__weight')
          .innerText.slice(0, -1),
        calorie: product.dataset.calorie,
        price: product.querySelector('.product__price').innerText.slice(0, -1),
      }

      ROOT_INDEX.insertAdjacentHTML(
        'beforeend',
        ProductModal.render(
          modalValues.title,
          modalValues.img,
          modalValues.descr,
          modalValues.ingridients,
          modalValues.weight,
          modalValues.calorie,
          modalValues.price
        )
      )

	  document.body.style.overflow = 'hidden'
    })
  }
}

export default new Products()
