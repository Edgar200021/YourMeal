class ProductModal {
  render(title, img, descr, ingridients, weight, calorie, price) {
    const modal = ` 
			<div class="product-modal modal">
				<div class="product-modal__wrapper modal__wrapper">
					<div class="product-modal__inner modal__inner">
						<h2 class="product-modal__title second-title">${title}</h2>
						<button class="modal__btn" data-close>x</button>
						<div class="product-modal__box">
							<div class="product-modal__left">
								<div class="product-modal__img-box">
									<img src=${img} alt="product" class="product-modal__img">
								</div>
								<button class="product-modal__btn btn">Добавить</button>
							</div>

							<div class="product-modal__right">					
								<div class="product-modal__info">
								<p class="product-modal__descr">${descr}</p>
								<span class="product-modal__compund">Состав</span>
								
								<ul class="product-modal__list">
									${ingridients.split(',').map((ingridient) => {
						return `<li class='product-modal__item'>${ingridient}</li>`
					}).join('')}
								</ul>
								<span class="product-modal__characteristic">${weight}г, ккал ${calorie}</span>
								</div>		

								<div class="product-modal__actions">
									<div class="basket__item-counter">
										<button class="basket__item-btn" data-calc="minus">-</button>
										<span class="basket__item-counter__info">1</span>
										<button class="basket__item-btn" data-calc="plus">+</button>
									</div>
								
									<span class="product-modal__price">${price}₽</span>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</div>
		`

		return modal
  }
}

export default new ProductModal()
