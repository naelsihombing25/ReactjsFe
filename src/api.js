import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.43.203:8080/api/v1/person/'
});