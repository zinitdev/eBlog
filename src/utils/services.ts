import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const endpoints = {
    categories: '/api/categories',
    posts: '/api/posts',
};

export { fetcher, endpoints };
