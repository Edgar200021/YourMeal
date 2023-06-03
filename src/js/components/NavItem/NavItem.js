
class NavItem{
	render(background, text) {
		const item = `
			<li class="nav__item">
				<button style="background-image: url(${background})" class="nav__btn">${text}</button>
			</li>
		`
		return item
	}
}

export default new NavItem()