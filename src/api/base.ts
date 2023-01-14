import axios from 'axios';
import token from '../lib/token';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: token.getAccessToken('token'),
    },
});

export default API;
