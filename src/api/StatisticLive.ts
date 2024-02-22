class StatisticLive {
  login!: string;
  token!: string;
  baseUrl!: string;

  _headers = { 'Content-Type': 'application/json' };
  constructor(login: string, token: string) {
    this.baseUrl = `https://spoyer.com/api/get.php?login=${login}&token=${token}&task=livedata&sport=soccer`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _checkResponse(res: { ok: any; json: () => any; status: any }) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //get Article
  getLive() {
    return fetch(`${this.baseUrl}`, {
      headers: this._headers,
      method: 'GET',
    }).then(this._checkResponse);
  }
}

const live = new StatisticLive('alexdedyaev', '55357-05LXkhYC3k1QUIJ');

export default live;
