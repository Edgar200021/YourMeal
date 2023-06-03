
import NavItem from '../NavItem/NavItem'

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
				${NavItem.render(burger, 'Бургеры')}
				${NavItem.render(onion, 'Закуски')}
				${NavItem.render(hotdog, 'Хот-доги')}
				${NavItem.render(fastFood, 'Комбо')}
				${NavItem.render(burito, 'Шаурма')}
				${NavItem.render(pizza, 'Пицца')}
				${NavItem.render(noodles, 'Вок')}
				${NavItem.render(doughnut, 'Десерты')}
				${NavItem.render(ketchup, 'Соусы')}
			</ul>
		</nav>
		`

		return nav
	}
}

export default new Nav()