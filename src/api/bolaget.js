import axios from 'axios';

export default axios.create({
  baseURL: "https://bolaget.io/v1/",
  headers: {},
});