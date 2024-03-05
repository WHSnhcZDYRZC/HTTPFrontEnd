import axios from "axios";

// const baseURL = `${import.meta.env.VITE_BASE_API}/api/test`;
const baseURL = "/api/test";

const service = axios.create({
    baseURL,
    timeout: 60000,
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        return Promise.reject(error);
    }
);

export const METHODS = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
}

export default service;
