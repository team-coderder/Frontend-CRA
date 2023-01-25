import axios from 'axios';
import { useToken } from '../hooks';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: useToken(),
    },
});

export default API;
