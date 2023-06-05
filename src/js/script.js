import '../index.html'
import '../sass/style.sass'

import App from './components/App/App'
import Products from './components/Products/Products'
import Basket from './components/Basket/Basket'

window.addEventListener('DOMContentLoaded', () => {
  ;(async () => {
    await App.render()
    Products.addToBasket('.products')
	Products.showProductModal('.products')
    Basket.calcPrice('.basket__list')
  })()
})
