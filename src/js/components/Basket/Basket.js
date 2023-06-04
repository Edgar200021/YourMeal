import burger from '/src/assets/img/burgers/burger-1.jpg'

class Basket{
	render() {
		const basket = `
			<article class="basket">
				<div class="basket__inner">
					<div class="basket__top">
					<h3 class="basket__title third-title">Корзина</h3>
					<span class="basket__count">4</span>
					</div>

					<ul class="basket__list">
						<li class="basket__item">
							<div class="basket__item-img__box">
								<img src=${burger} alt="" class="basket__item-img" />
							</div>
							<div class="basket__item-info">
								<h4 class="basket__item-title fourth-title">Супер сырный</h4>
								<span class="basket__item-weight">512г</span>
								<span class="basket__item-price">550₽</span>
							</div>

							<div class="basket__item-counter">
								<button class="basket__item-btn">-</button>
								<span class="basket__item-counter__info">1</span>
								<button class="basket__item-btn">+</button>
							</div>
						</li>
						
					</ul>

					<div class="basket__total">
						<span class="basket__total-descr">Итого</span>
						<span class="basket__total-price">1279₽</span>
					</div>

					<button class="btn basket__btn">Оформить заказ</button>
					<span class="basket__delivery">Бесплатная доставка</span>
				</div>
			</article>
		`

		return basket
	}
}


export default new Basket()