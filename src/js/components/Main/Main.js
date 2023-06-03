import Nav from "../Nav/Nav"

import { ROOT_INDEX } from "../../constants/root"
class Main{
	render() {
		const main = `
			<main class="main">
				<div class="main__container">
					${Nav.render()}
				</div>
			</main>
		`
		ROOT_INDEX.insertAdjacentHTML('beforeend', main)
	}
}

export default new Main()