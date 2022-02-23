import axios, { AxiosRequestConfig } from 'axios';
import apiErrorHandler from './apiErrorHandler';

const getCountries = async () => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://api.covid19api.com/countries`,
    headers: {},
  };
  const request = axios(config);

  return request
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => apiErrorHandler(error));
};

export default getCountries;
