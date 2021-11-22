import axios from 'axios';

// import { config } from 'environment';

const httpCommon = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-type': 'application/json'
  }
});

export default httpCommon;
