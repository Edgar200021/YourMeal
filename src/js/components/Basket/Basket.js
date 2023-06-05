import { UNIQUE_PRODUCTS_ID } from '../../constants/uniques'
import emptyBasket from '/src/assets/img/notifications/empty-basket.png'


class Basket {
  renderItem(img, price, descr, weight, id) {
    const basketItem = `<li class="basket__item" data-id="${id}">
		<div class="basket__item-img__box">
			<img src=${img} alt="" class="basket__item-img" />
		</div>
		<div class="basket__item-info">
			<h4 class="basket__item-title fourth-title">${descr}</h4>
			<span class="basket__item-weight">${weight}г</span>
			<span class="basket__item-price">${price}₽</span>
		</div>

		<div class="basket__item-counter">
			<button class="basket__item-btn" data-calc="minus">-</button>
			<span class="basket__item-counter__info">1</span>
			<button class="basket__item-btn" data-calc="plus">+</button>
		</div>
	</li>
	`

    return basketItem
  }
  render() {
    const basket = `
			<article class="basket">
				<div class="basket__inner">
					<div class="basket__top">
					<h3 class="basket__title third-title">Корзина</h3>
					<span class="basket__count">0</span>
					</div>
					<ul class="basket__list">
						<div class="basket__notification-box">
						<h4 class="fourth-title">Коризна пуста</h4>
						<img src=${emptyBasket} class="basket__notification">
						</div>
					</ul>
					<div class="basket__total">
						<span class="basket__total-descr">Итого</span>
						<span class="basket__total-price">0₽</span>
					</div>
					<button class="btn basket__btn">Оформить заказ</button>
					<span class="basket__delivery">Бесплатная доставка</span>
				</div>
			</article>
		`

    return basket
  }

  calcPrice(parentSelector) {
    const parent = document.querySelector(parentSelector)

    parent.addEventListener('click', (e) => {
      const target = e.target

      if (!target || !target.classList.contains('basket__item-btn')) {
        return
      }

      const parent = target.closest('.basket__inner'),
	 	 basketBtn = parent.querySelector('.basket__btn'),
		  basketDelivery = parent.querySelector('.basket__delivery'),
        basketList = target.closest('.basket__list'),
		basketNotification = basketList.querySelector('.basket__notification-box'),
        totalPrice = parent.querySelector('.basket__total-price'),
        count = parent.querySelector('.basket__count'),
        product = target.closest('.basket__item'),
        productPrice = product.querySelector('.basket__item-price')
        console.log("basketList", basketList)


      switch (target.dataset.calc) {
        case 'plus':
          totalPrice.innerText =
            Math.round(
              Number(totalPrice.innerText.slice(0, -1)) +
                Number(productPrice.innerText.slice(0, -1))
            ) + '₽'
          target.previousElementSibling.innerText++
          count.innerText++
          break
        case 'minus':
          totalPrice.innerText =
            Math.round(
              Number(totalPrice.innerText.slice(0, -1)) -
                Number(productPrice.innerText.slice(0, -1))
            ) + '₽'
			if(+count.innerText === 1 && basketList.children.length === 2) {
				basketNotification.style.display = 'block'
				basketBtn.style.display = 'none'
				basketDelivery.style.display = 'none'
			  }
          if (+target.nextElementSibling.innerText === 1) {
            const index = UNIQUE_PRODUCTS_ID.findIndex(
              (id) => id === target.closest('.basket__item').dataset.id
            )
            UNIQUE_PRODUCTS_ID.splice(index, 1)
            target.closest('.basket__item').remove()
          }
          target.nextElementSibling.innerText--
          count.innerText--
		  
		console.log( basketList.children.length);
          break
      }
    })
  }

}

export default new Basket()
