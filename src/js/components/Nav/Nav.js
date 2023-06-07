
import NavItem from '../NavItem/NavItem'
import Products from '../Products/Products'

import burger from '../../../assets/icons/burger.png'
import onion from '../../../assets/icons/onion.png'
import hotdog from '../../../assets/icons/hotdog.png'
import fastFood from '../../../assets/icons/fast-food.png'
import burito from '../../../assets/icons/burito.png'
import pizza from '../../../assets/icons/pizza.png'
import noodles from '../../../assets/icons/noodles.png'
import doughnut from '../../../assets/icons/doughnut.png'
import ketchup from '../../../assets/icons/ketchup.png'

class Nav{
	render() {
		const nav = `
		<nav class="nav">
			<ul class="nav__list">
				${NavItem.render(burger, 'Бургеры', 1)}
				${NavItem.render(onion, 'Закуски', 2)}
				${NavItem.render(hotdog, 'Хот-доги', 3)}
				${NavItem.render(fastFood, 'Комбо', 4)}
				${NavItem.render(burito, 'Шаурма', 5)}
				${NavItem.render(pizza, 'Пицца', 6)}
				${NavItem.render(doughnut, 'Десерты', 7)}
				${NavItem.render(ketchup, 'Соусы', 8)}
			</ul>
		</nav>
		`

		return nav
	}


	toggleContent() {
		const nav = document.querySelector('.nav'),	
			productsList = document.querySelectorAll('[data-products]')
			
			productsList.forEach((productList, i)=> {
				if (i === 0) {
					return
				}
				productList.classList.add('none')
				productList.classList.remove('show')
			})
			

		nav.addEventListener('click', (e) => {
			const target = e.target 

			if (!target || !target.matches('[data-tab]')) {
				return
			}

			const productList = document.querySelector(`[data-products="${target.dataset.tab}"`)

			productsList.forEach(productList => {
				productList.classList.add('none')
				productList.classList.remove('show')
			})
		
			productList.classList.add('show')
			productList.classList.remove('none')
		})
	}

}

export default new Nav()