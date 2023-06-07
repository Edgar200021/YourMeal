class PostData {
  async render(url, requestHeader , body) {
    return await new Promise((resolve, reject) => {
      const xml = new XMLHttpRequest()

      xml.open('POST', url)
      xml.setRequestHeader(requestHeader)
      xml.send(body)

      xml.addEventListener('load', () => {
        if (xml.status >= 200 || xml.status < 300) {
          resolve()
        } else {
          reject()
        }
      })
    })
  }
}

export const postData =  new PostData()
