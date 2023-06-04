

class GetData{
	async render(url) {
		const res = await fetch(url)
		if(!res.ok) {
			return false
		}
		
		return await res.json()
	}
}


export const getData = new GetData()