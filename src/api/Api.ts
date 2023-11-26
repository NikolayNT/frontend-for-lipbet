class ApiTwo {
  baseUrl!: string;
  _headers = { 'Content-Type': 'application/json' };
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _checkResponse(res: { ok: any; json: () => any; status: any }) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //save Article
  postInfoAboutArticle(content: { title: string; content: string }) {
    const date = new Date();
    return fetch(`${this.baseUrl}/article`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        id: date.getTime(),
        titul: content.title,
        content: content.content,
      }),
    }).then(this._checkResponse);
  }

  //get Article
  getInfoAboutArticle() {
    return fetch(`${this.baseUrl}/article`, {
      headers: this._headers,
      method: 'GET',
    }).then(this._checkResponse);
  }
}

const apiTwo = new ApiTwo('http://localhost:3000');

export default apiTwo;
