import { getData } from '../../Services/getData'
import { PRODUCTS_URL } from '../../constants/url'

import burger from '/src/assets/img/burgers/burger-1.jpg'

class Products {
  async render() {
    const data = await getData.render(PRODUCTS_URL)

    let productElement = ''

    data.forEach(({ image, price, title, weight, category }) => {
      if (category !== 'burger') {
        return
      }

      productElement += `
				<li class="product">
					<div class="product__img-box">
						<img src="${burger}" class="product__img">
					</div>
					<div class="product__info">
						<span class="product__price">${price}₽</span>
						<h4 class="product__descr fourth-title">${title}</h4>
						<span class="product__weight">${weight}г</span>
					</div>
					<button class="btn product__item">Добавить</button>
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
}

export default new Products()
