import apiRequest from './apiRequest';
import { sortByName } from '../services/utils';

const getCountries = async () => {
  const url = `https://api.covid19api.com/countries`;

  return apiRequest({ url }).then((response) => {
    response.sort(sortByName);
    return response;
  });
};

export default getCountries;
