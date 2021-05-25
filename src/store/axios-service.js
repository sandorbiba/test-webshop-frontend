import axios from "axios";

export const API_DOMAIN = process.env.REACT_APP_API;
class AxiosService {
  instance = axios.create({
    baseURL: API_DOMAIN,
  });

  post(url, data, config) {
    return this.instance.post(url, data, config);
  }

  get(url) {
    return this.instance.get(url);
  }

  put(url, data) {
    return this.instance.put(url, data);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();
