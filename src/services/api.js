import axios from 'axios';

const Api = axios.create({ baseURL: 'https://21a0a72ee56e.ngrok.io/api/v1' });

export default Api;
