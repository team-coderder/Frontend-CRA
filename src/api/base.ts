import axios from 'axios';
import storage from '../lib/storage';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: storage.getEntry('token'),
    },
});

export default API;
