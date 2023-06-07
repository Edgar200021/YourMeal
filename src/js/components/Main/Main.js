import Nav from '../Nav'
import Products from '../Products'
import Basket from '../Basket'

import { ROOT_INDEX } from '../../constants/root'
class Main {
  async render() {
    const main = `
			<main class="main">
				<div class="main__container">
				${Nav.render()}
				<section class="products" >
					${await Products.render()} 
					${await Products.render(2,'Закуски', 'snack')} 
					${await Products.render(3,'Хот-Доги', 'hot-dog')} 
					${await Products.render(4,'Комбо', 'combo')} 
					${await Products.render(5,'Шаурма', 'shawarma')} 
					${await Products.render(6,'Пицца', 'pizza')} 
					${await Products.render(7,'Дессерты', 'dessert')} 
					${await Products.render(8, 'Соусы', 'sauce')} 
				</section>
				${Basket.render()}
				</div>
			</main>
		`
    ROOT_INDEX.insertAdjacentHTML('beforeend', main)
  }
}

export default new Main()
