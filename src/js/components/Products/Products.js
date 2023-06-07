import { getData } from '../../Services/getData'
import Notification from '../Notification/Notification'
import Basket from '../Basket/Basket'
import { PRODUCTS_URL } from '../../constants/url'
import { UNIQUE_PRODUCTS_ID } from '../../constants/uniques'
import { ROOT_INDEX } from '../../constants/root'
import ProductModal from '../ProductModal/ProductModal'
import burger from '/src/assets/img/burgers/burger-1.jpg'
import burger2 from '/src/assets/img/burgers/burger-2.jpg'
import burger3 from '/src/assets/img/burgers/burger-3.jpg'
import burger4 from '/src/assets/img/burgers/burger-4.jpg'
import burger5 from '/src/assets/img/burgers/burger-5.jpg'
import burger6 from '/src/assets/img/burgers/burger-6.jpg'
import snack from '/src/assets/img/snacks/snack-1.jpg'
import snack2 from '/src/assets/img/snacks/snack-2.jpg'
import snack3 from '/src/assets/img/snacks/snack-3.jpg'
import hotdog from '/src/assets/img/hot-dogs/hot-dog1.jpg'
import hotdog2 from '/src/assets/img/hot-dogs/hot-dog2.jpg'
import hotdog3 from '/src/assets/img/hot-dogs/hot-dog3.jpg'
import hotdog4 from '/src/assets/img/hot-dogs/hot-dog4.jpg'
import hotdog5 from '/src/assets/img/hot-dogs/hot-dog5.jpg'
import combo from '/src/assets/img/combo/combo-1.jpg'
import shawerma from '/src/assets/img/shawerma/shawerma-1.jpg'
import shawerma2 from '/src/assets/img/shawerma/shawerma-2.jpg'
import pizza from '/src/assets/img/pizza/pizza-1.jpg'
import pizza2 from '/src/assets/img/pizza/pizza-2.jpg'
import pizza3 from '/src/assets/img/pizza/pizza-3.jpg'
import dessert from '/src/assets/img/dessert/dessert-1.jpg'
import dessert2 from '/src/assets/img/dessert/dessert-2.jpg'
import dessert3 from '/src/assets/img/dessert/dessert-3.jpg'
import sauce from '/src/assets/img/sauce/sauce-1.jpg'
import sauce2 from '/src/assets/img/sauce/sauce-2.jpg'
import sauce3 from '/src/assets/img/sauce/sauce-3.jpg'


class Products {
  renderProduct(productList, title, productCategory, data) {
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
							<img src="${image}" class="product__img">
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
	  	<div class="show" data-products=${productList}>
		  <h2 class="products__title second-title">${title}</h2>
		  <ul class="products__container">${productElement}</ul>
		</div> 
		`

    return productWrapper
  }

  async render(productList = 1, title = 'Бургеры', productCategory = 'burger') {
    const data = await getData.render(PRODUCTS_URL)

    return data
      ? this.renderProduct(productList, title, productCategory, data)
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
        basketNotification = document.querySelector(
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
    const parent = document.querySelector(parentSelector),
      modal = document.querySelector('.modal'),
      modalInner = modal.querySelector('.modal__inner')

    parent.addEventListener('click', (e) => {
      const target = e.target
      if (!target.matches('.product__img')) {
        return
      }

      const product = target.closest('.product')

      const modalValues = {
		id: product.dataset.key,
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

      modal.classList.add('modal__active')
      modal.classList.remove('none')

      modalInner.innerHTML = ProductModal.render(
		modalValues.id,
        modalValues.title,
        modalValues.img,
        modalValues.descr,
        modalValues.ingridients,
        modalValues.weight,
        modalValues.calorie,
        modalValues.price
      )

      document.body.style.overflow = 'hidden'
    })
  }
}

export default new Products()
