import errorImg from  '../../../assets/img/notifications/error.jpg'

class Notification {

	emptyBasket() {

	}

	errorNotif() {
		const error = `
			<div class="error">
				<img src=${errorImg} alt="" class="error__img" />
			</div>
		`

		return error
	}
}

export default new Notification()