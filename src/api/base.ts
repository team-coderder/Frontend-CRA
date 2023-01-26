import axios from 'axios';
import storage from '../lib/storage';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

API.interceptors.request.use(function (config) {
    const token = storage.getEntry('token') as string | null;
    config.headers = config.headers ?? {};
    config.headers['Authorization'] = token ?? '';
    return config;
});

export default API;
