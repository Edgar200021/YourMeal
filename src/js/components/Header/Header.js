import { ROOT_INDEX } from "../../constants/root"

import logo from '../../../assets/icons/header-logo.svg'
import burger from '../../../assets/icons/burger.svg'

class Header{
	render() {
		const header = `
		<header class="header">
		<div class="header__inner">
			<div class="header__logo-box">
				<a href="#" class="header__logo-link">
				<img src=${logo} alt="Header logotip" class="header__logo-icon" />
				</a>
			</div>

			<div class="header__content">
				<div class="header__content-img__box">
				<img src=${burger} alt="Big Burger" class="header__content-img">
				</div>

				<div class="header__content-info">
				<h1 class="header__title first-title"><span class="header__suptitle">Только самые</span><br>
					<span class="header__subtitle">сочные бургеры!</span>
				</h1>
				<span class="header__descr">Бесплатная доставка от 599₽</span>
				</div>
			</div>
			</div>
		</header>
		`

		ROOT_INDEX.insertAdjacentHTML('beforeend', header)
	}
}

export default new Header()