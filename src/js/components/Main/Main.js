import Nav from "../Nav"
import Products from "../Products"
import Basket from "../Basket"

import { ROOT_INDEX } from "../../constants/root"
class Main{
	async render() {
		const main = `
			<main class="main">
				<div class="main__container">
				${Nav.render()}
				${await Products.render()} 
				${Basket.render()}
				</div>
			</main>
		`
		ROOT_INDEX.insertAdjacentHTML('beforeend', main)
	}
}

export default new Main()