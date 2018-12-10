import axios from 'axios';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'sachin';

export default axios.create({
    baseURL: BASE_URL,
    params:{
        key: API_KEY
    }
});