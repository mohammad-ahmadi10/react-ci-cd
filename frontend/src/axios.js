import axios from "axios";

const BASE_URL = "http://localhost:5000";

const instance = axios.create({
    baseURL:BASE_URL
})

instance.interceptors.request.use(
    (config) => {
        config.headers = {'Content-Type':'application/json'} 
        return config
    }
)


export default instance;