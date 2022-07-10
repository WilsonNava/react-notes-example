import axios from "axios";

class Notes {
  constructor() {
    this._client = axios.create({
      baseURL: `${process.env.REACT_APP_SERVER_URL}/notes`,
    });
  }

  getAll() {
    return this._client.get("/");
  }

  create(text) {
    return this._client.post("/", {
      text,
    });
  }

  delete(id) {
    return this._client.delete(`/${id}`);
  }

  update(data) {
      return this._client.put("/", data)
  }
}

const notes = new Notes();

export default notes;
