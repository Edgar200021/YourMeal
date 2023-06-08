import '../index.html'
import '../sass/style.sass'

import App from './components/App'
import Products from './components/Products'
import Basket from './components/Basket'
import Nav from './components/Nav'
import ProductModal from './components/ProductModal'
import Modal from './components/Modal'
import Order from './components/Order'

window.addEventListener('DOMContentLoaded', () => {
  ;(async () => {
    await App.render()
	Modal.render()
    Products.addToBasket('.products')
	Products.showProductModal('.products')
    Basket.calcPrice('.basket__list')
	Basket.placeAnOrder()
	Basket.openBasket()|
	Basket.closeBasket()
	Nav.toggleContent()
	Modal.closeModal('.modal')
	Modal.closeModalWithKeyboard()
	ProductModal.addToBasket('.modal')
	Order.toggleDeliveryMethod('.modal__inner')
	Order.sendData()
  })()
})
