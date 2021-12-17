import axios, { AxiosResponse, AxiosError } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
  timeout: 20000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

const successResponse = ({ data }: AxiosResponse) => data;
const errorResponse = (err: AxiosError) => {
  throw err;
};

instance.interceptors.response.use(successResponse, errorResponse);

export default instance;
