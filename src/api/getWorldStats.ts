import axios, { AxiosRequestConfig } from 'axios';
import apiErrorHandler from './apiErrorHandler';

type GetWorldStatsProps = {
  dateFrom: Date | null;
  dateTo: Date | null;
};

const getWorldStats = async ({ dateFrom, dateTo }: GetWorldStatsProps) => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://api.covid19api.com/world`,
    params: {
      from: dateFrom,
      to: dateTo,
    },
    headers: {},
  };
  // const request = axios(config);

  return axios(config)
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => apiErrorHandler(error));
};

export default getWorldStats;
