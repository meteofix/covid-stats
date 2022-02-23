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
      // response.data.sort(function compare(a, b) {
      //   const dateA: any = new Date(a.Date);
      //   const dateB: any = new Date(b.Date);
      //   return dateA - dateB;
      // });
      console.log(response.data);

      // setData(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => apiErrorHandler(error));
};

export default getWorldStats;
