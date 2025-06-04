import axios from "axios"

const axiosCategory = axios.create({
    baseURL:'https://versusmoda-server.onrender.com/category/',
    timeout:5000,
    headers: {
        'Content-Type':'application/json'
    }
})

export default axiosCategory