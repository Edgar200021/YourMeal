import { ROOT_INDEX } from "../../constants/root"

import logo from '../../../assets/icons/footer-logo.svg'
import vk from '../../../assets/icons/vk.svg'
import telegram from '../../../assets/icons/telegram.svg'
class Footer{
	render() {
		const footer = `
		<footer class="footer">
		<div class="footer__inner">
			<div class="footer__left">
				<img src=${logo} alt="Footer logo" class="footer__logo" />
				<span class="footer__copy">© YouMeal, 2022</span>
				<span class="footer__from">Design: Anastasia Ilina</span>
			</div>

			<div class="footer__middle">
				<span class="footer__middle-descr">Номер для заказа</span>
				<a href="tel:+79308333811" class="footer__middle-number">+7(930)833-38-11</a>
			</div>

			<div class="footer__right">
			<span class="footer__right-descr">Мы в соцсетях</span>
			<ul class="footer__social">
				<li class="footer__social-item">
					<a href="#" class="footer__social-link">
						<img src=${vk} alt="vk" class="footer__social-img" />
					</a>
				</li>
				<li class="footer__social-item">
					<a href="#" class="footer__social-link">
						<img src=${telegram} alt="telegram" class="footer__social-img" />
					</a>
				</li>
			</ul>
			</div>
			</div>
		</footer>
		`	
		ROOT_INDEX.insertAdjacentHTML('beforeend', footer)
	}



	//ROOT_INDEX.
}

export default new Footer()