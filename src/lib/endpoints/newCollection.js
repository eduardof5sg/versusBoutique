import axios from "axios"

const axiosProducts = axios.create({
    baseURL:'https://versusmoda-server.onrender.com/products/',
    timeout:5000,
    headers: {
        'Content-Type':'application/json'
    }
})

export default axiosProducts