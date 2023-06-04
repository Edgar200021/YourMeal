import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"

class App{
	async render() {
		Header.render()
		await Main.render()
		Footer.render()
	}
}

export default new App()