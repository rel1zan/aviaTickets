import axios from 'axios';
import config from '../config/apiConfig';

<<<<<<< HEAD
class Api {
  constructor(config) {
    this.url = config.url;
  }
  async countries() {
    try {
      const response = await axios.get(`${this.url}/countries`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async cities() {
    try {
      const response = await axios.get(`${this.url}/cities`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async airlines() {
    try {
      const response = await axios.get(`${this.url}/airlines`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async prices(params) {
    try {
      const response = await axios.get(`${this.url}/prices/cheap`, {
        params,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
=======

class Api {
    constructor(config) {
        this.url = config.url;
    }
    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`);
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`);
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
    async prices(params) { }
>>>>>>> eaa09bdc3b96eebc92c7b246dd197ff436525d44
}

const api = new Api(config);

<<<<<<< HEAD
export default api;
=======
export default api;
>>>>>>> eaa09bdc3b96eebc92c7b246dd197ff436525d44
