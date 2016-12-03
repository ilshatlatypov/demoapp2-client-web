import axios from 'axios';

//const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8080' : '';
export default axios.create({
  baseURL: `${ROOT_URL}`,
  withCredentials: true
});
