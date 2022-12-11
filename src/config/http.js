import axios from "axios";
import axiosRetry from "axios-retry";
import { loading } from '@/helpers/common.js'


const BASE_API_URL = "http://127.0.0.1:8000/api/";


const http = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: false
})

const https = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: false,
    headers: {}
})

https.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
https.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
https.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Authorization, X-Requested-With";


https.interceptors.request.use(config => {
    disableLoading();
    return config;
}, err => {
    disableLoading();
    return Promise.reject(err.response.data)
})

https.interceptors.response.use(response => {
    disableLoading();


    return response
}, err => {
    disableLoading();

    return Promise.reject(err.response.data)
})
const disableLoading = () => {
    setTimeout(() => {
        loading(false);
    }, 0);
}
axiosRetry(https, {
    retries: 3
})

export const useHttps = () => {
    return https;
}

export const useHttp = () => {
    return http;
}