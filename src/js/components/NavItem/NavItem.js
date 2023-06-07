
class NavItem{
	render(background, text, dataTab, activeClass = '') {
		const item = `
			<li class="nav__item">
				<button style="background-image: url(${background})" class="nav__btn ${activeClass}" data-tab=${dataTab}>${text}</button>
			</li>
		`
		return item
	}
}

export default new NavItem()