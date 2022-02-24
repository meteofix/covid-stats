import apiRequest from './apiRequest';
import { sliceDateInResponseData, sortByDate } from '../services/utils';

type GetWorldStatsProps = {
  dateFrom: Date | null;
  dateTo: Date | null;
};

const getWorldStats = async ({ dateFrom, dateTo }: GetWorldStatsProps) => {
  const url = `https://api.covid19api.com/world`;
  const params = {
    from: dateFrom,
    to: dateTo,
  };

  return apiRequest({ url, params }).then((response) => {
    response.sort(sortByDate);
    response = sliceDateInResponseData(response);
    return response;
  });
};

export default getWorldStats;
