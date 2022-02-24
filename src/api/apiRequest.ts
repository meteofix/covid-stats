import axios, { AxiosRequestConfig } from 'axios';
import apiErrorHandler from './apiErrorHandler';

type ApiRequestProps = {
  url: string;
  params?: {};
};

const apiRequest = async ({ url, params = {} }: ApiRequestProps) => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: url,
    params: params,
    headers: {},
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch((error) => apiErrorHandler(error));
};

export default apiRequest;
