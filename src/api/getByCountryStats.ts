import axios, { AxiosRequestConfig } from 'axios';
import apiErrorHandler from './apiErrorHandler';

type GetByCountryStatsProps = {
  dateFrom: Date;
  filteredCase: string;
  country: string;
};

const getByCountryStats = async ({ dateFrom, filteredCase, country }: GetByCountryStatsProps) => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://api.covid19api.com/live/country/${country}/status/${filteredCase}/date/${dateFrom.toISOString()}`,

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

export default getByCountryStats;
