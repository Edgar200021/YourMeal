

class GetData{
	async render(url) {
		const res = await fetch(url)
		if(!res.ok) {
			throw new Error(`Произошла ошибка, код ошибки${res.status}`)
		}
		
		return await res.json()
	}
}


export const getData = new GetData()