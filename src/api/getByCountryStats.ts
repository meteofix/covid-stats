import apiRequest from './apiRequest';
import { sliceDateInResponseData } from '../services/utils';

type GetByCountryStatsProps = {
  dateFrom: Date;
  filteredCase: string;
  country: string;
};

const getByCountryStats = async ({ dateFrom, filteredCase, country }: GetByCountryStatsProps) => {
  const url = `https://api.covid19api.com/live/country/${country}/status/${filteredCase}/date/${dateFrom.toISOString()}`;

  return apiRequest({ url }).then((response) => {
    response = sliceDateInResponseData(response);
    return response;
  });
};

export default getByCountryStats;
