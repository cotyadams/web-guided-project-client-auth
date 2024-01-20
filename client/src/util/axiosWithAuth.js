import axios from 'axios';


 const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'http://localhost:5001/api',
        headers: { authorization: token }
    })
 }
export default axiosWithAuth;