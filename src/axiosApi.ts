import axios from 'axios';

const axiosApi = axios.create({
    baseURL : 'https://ilia-homework65-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default axiosApi;