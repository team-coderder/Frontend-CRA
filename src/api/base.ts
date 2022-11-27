import axios from 'axios';

const API = axios.create({
    baseURL: `http://43.200.220.2:8080`,
});

export default API;
