import axios from 'axios'

 const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'e4e6aba7164541b4c6087f6cf4d31c1e',
        language: 'pt-BR',
        page: 1
    }
 })

 export default api