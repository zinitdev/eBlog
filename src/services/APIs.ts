import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.BASE_URL,
	timeout: 3500,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;
