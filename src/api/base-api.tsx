const BASE_API = "https://reqres.in/api/";

export class Data {
  async getAllData(url: string) {
    return await fetch(BASE_API + url).then(res => res.json());
  }

  async postData(url: string, {...body}) {
    return await fetch(BASE_API + url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json"
        }
      },
    );
  }
}