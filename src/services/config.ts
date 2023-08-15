import type {AxiosInstance} from 'axios'
import axios from "axios";


const api: AxiosInstance = axios.create({
    baseURL: 'https://api.graficanetlife.com.br'
})

export default api;