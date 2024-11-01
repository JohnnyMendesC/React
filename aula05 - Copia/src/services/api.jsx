import axios from "axios";

const keyApi = import.meta.env.VITE_KEY
export const Api = axios.create({//os metodos axios passam por aqui get put post
    baseURL: `https://${keyApi}.mockapi.io/api/v1`
})