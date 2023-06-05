
class NavItem{
	render(background, text, dataCategory) {
		const item = `
			<li class="nav__item">
				<button style="background-image: url(${background})" class="nav__btn" data-category=${dataCategory}>${text}</button>
			</li>
		`
		return item
	}
}

export default new NavItem()